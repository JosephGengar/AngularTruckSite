import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Cliente } from '../Models/Cliente';
import { ApiClienteService } from '../servicios/apiClienteService';
import { DialogCComponent } from './dialog/dialogC.component';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  public lst: any;

  public columnas: string[] = ['id', 'nombre', 'telefono', 'acciones'];

  constructor(private apiCliente: ApiClienteService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.publicarClientes();
  }

  publicarClientes(){
    this.apiCliente.ObtenerClientes().subscribe(def => {
      this.lst = def.data;
      console.log(def);
    })
  }
  OpenDialogClientes(){
    const dialogRef = this.dialog.open(DialogCComponent, {
      width: '300px',
    });
    dialogRef.afterClosed().subscribe(res => {
      this.publicarClientes();
    });
  }
  OpenDialogModificar(cliente: Cliente){
    const dialogRef = this.dialog.open(DialogCComponent, {
      width: '300px',
      data: cliente,
    });
    dialogRef.afterClosed().subscribe(res => {
      this.publicarClientes();
    })
  }
}
