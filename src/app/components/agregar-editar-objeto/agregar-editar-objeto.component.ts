import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Producto } from 'src/app/interfaces/producto';
import { ObjetoService } from 'src/app/services/objeto.service';

@Component({
  selector: 'app-agregar-editar-objeto',
  templateUrl: './agregar-editar-objeto.component.html',
  styleUrls: ['./agregar-editar-objeto.component.css'],
})
export class AgregarEditarObjetoComponent implements OnInit {
  loading: boolean = false;
  form: FormGroup;
  id: number;

  operacion: string = 'Agregar';

  constructor(
    private fb: FormBuilder,
    private _productoService: ObjetoService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private aRoute: ActivatedRoute
  ) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      marca: ['', Validators.required],
      distribuidor: ['', Validators.required],
      color: ['', Validators.required],
      cantidad: ['', Validators.required],
    });

    this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    if (this.id != 0) {
      this.operacion = 'Editar';
      this.obtenerProducto(this.id);
    }
  }

  obtenerProducto(id: number) {
    this.loading = true;
    this._productoService.getProducto(id).subscribe((data) => {
      this.form.setValue({
        nombre: data.nombre,
        marca: data.marca,
        distribuidor: data.distribuidor,
        color: data.color,
        cantidad: data.cantidad,
      });
      this.loading = false;
    });
  }

  agregarEditarProducto() {
    // const nombre = this.form.get('nombre')?.value;

    // Armamos el objeto
    const producto: Producto = {
      nombre: this.form.value.nombre,
      marca: this.form.value.marca,
      distribuidor: this.form.value.distribuidor,
      color: this.form.value.color,
      cantidad: this.form.value.cantidad,
    };

    if (this.id != 0) {
      producto.id = this.id;
      this.editarProducto(this.id, producto);
    } else {
      this.agregarProducto(producto);
    }
  }

  editarProducto(id: number, producto: Producto) {
    this.loading = true;
    this._productoService.updateProducto(id, producto).subscribe(() => {
      this.loading = false;
      this.mensajeExito('actualizada');
      this.router.navigate(['/listarProducto']);
    });
  }

  agregarProducto(producto: Producto) {
    this.loading = true;
    this._productoService.addProducto(producto).subscribe((data) => {
      console.log(data);
      this.loading = false;
      this.mensajeExito('registrada');
      this.router.navigate(['/listarProducto']);
    });
  }

  mensajeExito(texto: string) {
    this._snackBar.open(`El Producto fue ${texto} con exito`, '', {
      duration: 4000,
      horizontalPosition: 'right',
    });
  }
}
