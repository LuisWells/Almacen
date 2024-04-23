import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Modulos
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Componentes
import { AgregarEditarObjetoComponent } from './components/agregar-editar-objeto/agregar-editar-objeto.component';
import { ListadoObjetoComponent } from './components/listado-objeto/listado-objeto.component';
import { VerObjetoComponent } from './components/ver-objeto/ver-objeto.component';

@NgModule({
  declarations: [
    AppComponent,
    AgregarEditarObjetoComponent,
    ListadoObjetoComponent,
    VerObjetoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
