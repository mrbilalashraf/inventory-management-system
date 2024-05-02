# InventoryManagementSystem

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.6.

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

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Website Execution
When the app launches, a navbar is displayed containing products and sales menus:
1. Click on products menu, it will display list of products (if available in database).
2. Click on any product to update or delete it.
3. Add product option is displayed below the list of products. Where a product can be added.
4. If the quantity of a product is updated i.e. it is now less than the previous quantity. The quantity sold property of sales is updated accordingly.
5. Open up the sales menu to see the changes. Available list of sales is shown.
