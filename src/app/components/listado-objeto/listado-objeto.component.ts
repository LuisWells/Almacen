import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Producto } from 'src/app/interfaces/producto';

const listaProducto: Producto[] = [
  {
    nombre: 'Cincel',
    marca: 'Rey',
    distribuidor: 'Pertas',
    color: 'Verde',
    cantidad: 4,
  },
  {
    nombre: 'Cajas',
    marca: 'Canso',
    distribuidor: 'Marley',
    color: 'Mostaza',
    cantidad: 8,
  },
  {
    nombre: 'Tubos',
    marca: 'Pavco',
    distribuidor: 'SMP',
    color: 'Gris',
    cantidad: 7,
  },
  {
    nombre: 'Clavos',
    marca: 'Forte',
    distribuidor: 'Perchas',
    color: 'Metalico',
    cantidad: 2,
  },
  {
    nombre: 'Gabinetes',
    marca: 'Forton',
    distribuidor: 'Sodimac',
    color: 'Rojo',
    cantidad: 1,
  },
  {
    nombre: 'Cuerdas',
    marca: 'Pilot',
    distribuidor: 'Promart',
    color: 'Azul',
    cantidad: 47,
  },
  {
    nombre: 'Acido Sulfurico',
    marca: 'Quimicos SAC',
    distribuidor: 'DROG',
    color: 'Transparente',
    cantidad: 74,
  },
  {
    nombre: 'Cascos',
    marca: 'Forte',
    distribuidor: 'Headman',
    color: 'Blanco',
    cantidad: 24,
  },
  {
    nombre: 'Poleas',
    marca: 'Canso',
    distribuidor: 'Marley',
    color: 'Gris',
    cantidad: 14,
  },
  {
    nombre: 'Montacargas',
    marca: 'El Rapido',
    distribuidor: 'SMP',
    color: 'Naranja',
    cantidad: 4,
  },
];

@Component({
  selector: 'app-listado-objeto',
  templateUrl: './listado-objeto.component.html',
  styleUrls: ['./listado-objeto.component.css'],
})
export class ListadoObjetoComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'nombre',
    'marca',
    'distribuidor',
    'color',
    'acciones',
  ];
  dataSource = new MatTableDataSource<Producto>(listaProducto);
  loading: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.paginator._intl.itemsPerPageLabel = 'Items por paginas';
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarProducto() {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
      this._snackBar.open('El Producto fue eliminado con exito', '', {
        duration: 4000,
        horizontalPosition: 'right',
      });
    }, 3000);
  }
}
