import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Producto } from 'src/app/interfaces/producto';
import { ObjetoService } from 'src/app/services/objeto.service';

@Component({
  selector: 'app-ver-objeto',
  templateUrl: './ver-objeto.component.html',
  styleUrls: ['./ver-objeto.component.css'],
})
export class VerObjetoComponent implements OnInit, OnDestroy {
  id!: number;
  producto!: Producto;
  loading: boolean = false;

  routeSub!: Subscription;

  /*   producto$!: Observable<Producto>; -- PIPE ASYNC */

  constructor(
    private _productoService: ObjetoService,
    private aRoute: ActivatedRoute
  ) {
    this.id = Number(
      this.aRoute.snapshot.paramMap.get('id')
    ); /* UNA OPCION PARA OBTENER EL ID POR RUTA */
  }

  ngOnInit(): void {
    /*     this.producto$ = this._productoService.getProducto(this.id); --PIPE ASYNC */
    /* Para el ruteo */
    /*     this.routeSub = this.aRoute.params.subscribe((data) => {
      this.id = data['id'];
      this.obtenerProducto();
    }); */
    this.obtenerProducto();
  }

  ngOnDestroy(): void {
    /*     this.routeSub.unsubscribe(); */
  }

  obtenerProducto() {
    this.loading = true;
    this._productoService.getProducto(this.id).subscribe((data) => {
      this.producto = data;
      this.loading = false;
    });
  }
}
