import { Component, OnInit } from '@angular/core';
import { ApiClienteService } from '../servicios/apiClienteService';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  public lst: any;

  public columnas: string[] = ['id', 'nombre', 'telefono', 'acciones'];

  constructor(private apiCliente: ApiClienteService) { }

  ngOnInit(): void {
    this.publicarClientes();
  }

  publicarClientes(){
    this.apiCliente.ObtenerClientes().subscribe(def => {
      this.lst = def.data;
      console.log(def);
    })
  }
}
