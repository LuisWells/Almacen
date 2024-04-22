import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes
import { ListadoObjetoComponent } from './components/listado-objeto/listado-objeto.component';
import { AgregarEditarObjetoComponent } from './components/agregar-editar-objeto/agregar-editar-objeto.component';
import { VerObjetoComponent } from './components/ver-objeto/ver-objeto.component';

const routes: Routes = [
  { path: '', redirectTo: 'listarProducto', pathMatch: 'full' },
  { path: 'listarProducto', component: ListadoObjetoComponent },
  { path: 'agregarProducto', component: AgregarEditarObjetoComponent },
  { path: 'verProducto/:id', component: VerObjetoComponent },
  { path: 'editarProducto/:id', component: AgregarEditarObjetoComponent },
  { path: '**', redirectTo: 'listarProducto', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
