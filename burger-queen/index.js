const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./db.json')
const middlewares = jsonServer.defaults()

const secret = "EsUnSecreto"

server.use(jsonServer.bodyParser)
server.use(middlewares)


server.use((req, res, next) => {

  console.log(req.headers);


  if (req.method === "POST" && req.path === "/auth") {
    next();
  } else if (req.headers.authorization === `Bearer ${secret}`) {
    if (req.path === '/orders' && req.method === 'POST') {
      if (req.body.products.length === 0 || req.body.userId === undefined) {
        res.status(400).send('Bad request');

      }
    }
    next();
  } else {
    res.sendStatus(401)
  }
})


server.post('/auth', (req, res) => {

  if (
    req.body.email === 'leyla@gmail.com' && req.body.password === 'Leyla1234') {
    res.jsonp({
      token: secret
    })
  } else res.status(400).send('Bad Request')


})
server.post('/orders', async (req, res) => {
  try {
    const prod = router.db.get('products').__wrapped__.products;
    const prodBody =req.body.products;
   
   

  
    // const newProduct=prod.map((pro)=>{
    //   const objPro={
    //     qty: pro.qty,
    //     product: prodxid(pro.productId)
    //   }
    //   return objPro
    // })

    
      
        const newProduct=prodBody.map((x) => {
          const objnew={
            qty:x.qty,
            product: prod.filter((p)=>{return p.id ==x.productId})
          }
          return objnew

        });
      


    

   
    

    const today = new Date();
    const now = today.toLocaleString();
    const generateId = Math.random().toString(36).substring(2, 18);
    const order = {
      _id: generateId,
      userId: req.body.userId,
      client: req.body.client,
      products: newProduct,
      status: 'pending',
      dateEntry: now,
    };

    const orders = router.db.get('orders');
    





    const result = await orders.push(order).write();

    console.log("result", result);
    res.status(200).jsonp(order);

  } catch (err) {
    res.status(400).send("No se indica Id, o se intenta crear una orden sin productos");
    res.status(401).send("No hay cabecera de autenticación");
  }
});



server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})