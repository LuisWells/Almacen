import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Producto } from 'src/app/interfaces/producto';

const listaProducto: Producto[] = [
  { nombre: 'Cincel', marca: 'Rey', distribuidor: 'Pertas', color: 'Verde'},
  { nombre: 'Cajas', marca: 'Canso', distribuidor: 'Marley', color: 'Mostaza' },
  { nombre: 'Tubos', marca: 'Pavco', distribuidor: 'SMP', color: 'Gris' },
  { nombre: 'Clavos', marca: 'Forte', distribuidor: 'Perchas', color: 'Metalico' },
  { nombre: 'Gabinetes', marca: 'Forton', distribuidor: 'Sodimac', color: 'Rojo' },
  { nombre: 'Cuerdas', marca: 'Pilot', distribuidor: 'Promart', color: 'Azul' },
  { nombre: 'Acido Sulfurico', marca: 'Quimicos SAC', distribuidor: 'DROG', color: 'Transparente' },
  { nombre: 'Cascos', marca: 'Forte', distribuidor: 'Headman', color: 'Blanco' },
  { nombre: 'Poleas', marca: 'Canso', distribuidor: 'Marley', color: 'Gris' },
  { nombre: 'Montacargas', marca: 'El Rapido', distribuidor: 'SMP', color: 'Naranja' }
];

@Component({
  selector: 'app-listado-objeto',
  templateUrl: './listado-objeto.component.html',
  styleUrls: ['./listado-objeto.component.css']
})
export class ListadoObjetoComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['nombre', 'marca', 'distribuidor', 'color', 'acciones'];
  dataSource = new MatTableDataSource<Producto>(listaProducto);

  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.paginator._intl.itemsPerPageLabel = "Items por paginas"
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
