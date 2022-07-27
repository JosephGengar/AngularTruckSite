## Proyecto Administracion de Clientes

Proyecto desarrollado sobre Angular/Material, con Login, y rutas en un sidebar hacia el Home, La lista de Clientes y un Cerrar Sesion.
La lista de Clientes es Editable y puede ser borrado cada item, ademas existe un boton que permite agregar un nuevo cliente.
Algun funcionalidad extra para destacar, son que al momento de cerrar la sesion esta ruta/link desaparece, por supuesto enviandonos a
la ruta de inicion de sesion, el proyecto contiene su correspondiente Guard que bloquea el acceso por url a otras secciones que no sean
el login si es que no se ha iniciado una sesion y ademas una vez hecho el login, se bloquea el acceso directo a este, enviandonos al home.

BackEnd:https://github.com/JosephGengar/BackEndTruckSite
  
Login:

![HMfirst](https://user-images.githubusercontent.com/102115164/162781282-c5bb0ca4-e1d5-42a6-ba97-d7ce89768f8c.png)

Home:

![HMTheer](https://user-images.githubusercontent.com/102115164/162781594-47a3fb77-3658-4a18-8238-1dc8b6ee5c71.png)

el boton <<>> permite mostrar u ocultar el sidebar que contiene diferentes rutas

Clientes:

![HMfour](https://user-images.githubusercontent.com/102115164/162782160-306a6f14-342d-405a-adcf-ff9dd7846426.png)

contiene sus respectivos botones que le permiten agregar, editar y borrar clientes.

![HMsix](https://user-images.githubusercontent.com/102115164/162782374-f512dfc0-62ba-480a-831b-9f57eade66b1.png)
![Hmseven](https://user-images.githubusercontent.com/102115164/162783390-74540501-d92f-4597-a1a8-3abd51704301.png)
![HMEight](https://user-images.githubusercontent.com/102115164/162783437-6d33cdd0-92ab-4dbd-8003-a721eedb77eb.png)


Angular

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

