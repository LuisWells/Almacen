import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Producto } from 'src/app/interfaces/producto';
import { ObjetoService } from 'src/app/services/objeto.service';

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
    'cantidad',
    'acciones',
  ];
  dataSource = new MatTableDataSource<Producto>();
  loading: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _snackBar: MatSnackBar,
    private _productoService: ObjetoService
  ) {}

  ngOnInit(): void {
    this.obtenerProductos();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    if (this.dataSource.data.length > 0) {
      this.paginator._intl.itemsPerPageLabel = 'Items por paginas';
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  obtenerProductos() {
    this.loading = true;
    this._productoService.getProductos().subscribe(
      (data) => {
        this.loading = false;
        this.dataSource.data = data;
      },
      (error) => {
        this.loading = false;
        alert('Oppss ocurrio un error');
      }
    );
  }

  eliminarProducto(id: number) {
    this.loading = true;

    this._productoService.deleteProducto(id).subscribe(() => {
      this.mensajeExito();
      this.loading = false;
      this.obtenerProductos();
    });
  }

  mensajeExito() {
    this._snackBar.open('El Producto fue eliminado con exito', '', {
      duration: 4000,
      horizontalPosition: 'right',
    });
  }
}
