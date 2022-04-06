import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
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
                private snackbar: MatSnackBar){

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
}