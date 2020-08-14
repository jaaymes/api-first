'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/products', 'ProductController.list');

Route.get('/products/:id', 'ProductController.show');

Route.post('/products', 'ProductController.store');

Route.put('/products/:id', 'ProductController.update');

Route.delete('/products/:id', 'ProductController.delete');


