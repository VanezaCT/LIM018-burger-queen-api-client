import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './plantilla/header/header.component';
import { FooterComponent } from './plantilla/footer/footer.component';
import { LoginComponent } from './vistas/login/login.component';
import { NuevoComponent } from './vistas/nuevo/nuevo.component';
//import { ModelosComponent } from './modelos/modelos.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CocineroComponent } from './vistas/cocinero/cocinero.component';
import { AdministradorComponent } from './vistas/administrador/administrador.component';
import { MeseroComponent} from './vistas/mesero/mesero.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    routingComponents,
     LoginComponent,
    NuevoComponent,
   // ModelosComponent,
    CocineroComponent,
    AdministradorComponent,
    MeseroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
