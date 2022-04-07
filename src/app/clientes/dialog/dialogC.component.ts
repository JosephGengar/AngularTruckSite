import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Cliente } from "src/app/Models/Cliente";
import { ApiClienteService } from "src/app/servicios/apiClienteService";

@Component({
    selector: 'app-dialogC',
    templateUrl: 'dialogC.component.html'
})

export class DialogCComponent{
    public nombredialog : string = "";
    public telefonodialog: string = "";

    constructor(private apiCliente: ApiClienteService,
                private dialogRef: MatDialogRef<DialogCComponent>,
                private snackbar: MatSnackBar,
                @Inject(MAT_DIALOG_DATA) public cliente2: Cliente){
                    if(this.cliente2 != null){
                    this.nombredialog = this.cliente2.nombre;
                    this.telefonodialog = this.cliente2.telefono;}
    }
    closeDialog(){
        this.dialogRef.close();
    }
    AgregarClienteDialog(){
        const client: Cliente = {nombre: this.nombredialog, telefono: this.telefonodialog, id: 0};
        this.apiCliente.AgregarClientes(client).subscribe(resp =>{
            if(resp.exito == 1){
                this.closeDialog();
                this.snackbar.open("Cliente Agregado", '', {duration: 2000});
            }
        })
    }
    ModificarClienteDialog(){
        const client: Cliente = {nombre: this.nombredialog, telefono: this.telefonodialog, id: this.cliente2.id}
        this.apiCliente.EditarClientes(client).subscribe(resp => {
            if(resp.exito == 1){
                this.closeDialog();
                this.snackbar.open("Cliente Modificado", '', {duration: 2000});
            }
        })
    }
}