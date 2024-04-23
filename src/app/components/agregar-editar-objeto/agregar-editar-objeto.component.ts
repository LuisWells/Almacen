import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Producto } from 'src/app/interfaces/producto';

@Component({
  selector: 'app-agregar-editar-objeto',
  templateUrl: './agregar-editar-objeto.component.html',
  styleUrls: ['./agregar-editar-objeto.component.css'],
})
export class AgregarEditarObjetoComponent implements OnInit {
  loading: boolean = false;
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      marca: ['', Validators.required],
      distribuidor: ['', Validators.required],
      color: ['', Validators.required],
      cantidad: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  agregarProducto() {
    // const nombre = this.form.get('nombre')?.value;
    const nombre = this.form.value.nombre;

    // Armamos el objeto
    const producto: Producto = {
      nombre: this.form.value.nombre,
      marca: this.form.value.marca,
      distribuidor: this.form.value.distribuidor,
      color: this.form.value.color,
      cantidad: this.form.value.cantidad,
    };

    console.log(producto);
  }
}
