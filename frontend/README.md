# MilleniaAngular

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.6.

## Clone the repository

To clone the repository, run:

```bash
git clone git@github.com:petrankar/millenia-angular.git
```

## Backend

To start the backend server,

run:

```bash
cd backend
npx json-server db.json
```

## Development server

To start the frontend, run:

```bash
cd frontend
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`.

## Architectural Overview

The project is divided into two main parts: the frontend and the backend. The frontend is an Angular application that communicates with the backend using RESTful APIs. The backend is a simple JSON server that serves the data to the frontend.

The frontend is divided into several components, each responsible for a specific part of the application. Components are chosen instead of modules because they are more lightweight and easier to manage. Also, the Angular Team recommends using standalone components instead of NgModule for all new code. For more information, visit [Angular Modules Overview](https://angular.dev/guide/ngmodules/overview).

There are two main features in the application: the authenticatio (auth) and the product. The auth feature is responsible for user simple login with auth guard and resolver. The product feature is responsible for displaying the portfolio along with accounut details and transaction list. For displaying the dynamic data in the appropriate component the product service is used calling the appropriate function. Product service are implemented using httpClient to make the API calls to the backend. Also, RxJS is used to handle the asynchronous data streams.

From the product-list component, the user is navigating to the product-detail component. The product-detail component is responsible for displaying the product details. In order to fetch the accoun details and the transaction list from server, the product-details gets the product id from the url parameter (path) and calls the appropriate function from the product service. It is assumed that the product id should be assosicated to the account details and also to the transaction list items. Server data are not passed from one page to another, but fetched from the server when needed. With this approach the application is more scalable and the data is always up-to-date.

Enjoy!
