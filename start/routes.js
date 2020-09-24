'use strict';

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');
const Helpers = use('Helpers');

Route.post('uploads', async ({
  request
}) => {
  const pictures = request.file('image', {
    types: ['image']
  })

  await pictures.moveAll(Helpers.tmpPath('public'))

  if (!pictures.movedAll()) {
    return pictures.errors()
  }
  return response.json({
    'status': 201,
    'message': 'Uploaded'
  });
})

Route.get('/', 'HomeController.index');
Route.get('/notes', 'NotesController.index');
Route.get('/donate', 'DonationsController.index');

Route.get('/users/login', 'UsersController.index');
Route.post("users/login", "UsersController.login");
Route.get('/users/register', 'UsersController.create');
Route.post('/users', 'UsersController.store');

Route.get('/campaigns', 'CampaignsController.index')
Route.get('/campaigns/create', 'CampaignsController.create');
Route.get('/campaigns/:id', 'CampaignsController.show');

Route.get('/organizations', 'OrganizationController.index')
Route.get('/organizations/:id', 'OrganizationController.show')
Route.get('/organizations/:id/campaigns', 'CampaignsController.index')
Route.get('/organizations/:id/faqs', 'OrganizationsFaqController.index')
Route.get('/organizations/:id/contact', 'OrganizationsContactController.create')
Route.post('/organizations', 'OrganizationsContactController.store')

Route.get('/campaigns', 'CampaignsController.index');
Route.get('/campaigns/:id', 'CampaignsController.show');


Route.group(() => {
  Route.get('/', 'HomeController.index');

  Route.get('/campaigns', 'CampaignsController.index');
  Route.get('/campaigns/create', 'CampaignsController.create');
  Route.get('/campaigns/:id/edit', 'CampaignsController.edit');
  Route.get('/campaigns/:id', 'CampaignsController.show');
  Route.post('/campaigns', 'CampaignsController.store');
  Route.post('/campaigns', 'CampaignsController.store').validator('Campaign');
  Route.patch('/campaigns/:id', 'CampaignsController.update').validator('Campaign');
  Route.delete('/campaigns/:id', 'CampaignsController.delete');

  Route.get('/faqs', 'FaqController.index');
  Route.get('/faqs/create', 'FaqController.create');
  Route.post('/faqs', 'FaqController.store');
  Route.get('/faqs/:id/edit', 'FaqController.edit');
  Route.patch('faqs/:id', 'FaqController.update');
  Route.delete('Faqs/:id', 'FaqController.delete');

  Route.post('/goals', 'GoalController.create');
  Route.get('/goals', 'GoalController.index');
  Route.get('/goals/:id', 'GoalController.show');
  Route.patch('/goals/:id', 'GoalController.update');
  Route.delete('/goals/:id', 'GoalController.delete');

  Route.get('/notes', 'NoteController.index');
  Route.get('/notes/:id/show', 'NoteController.show');
  Route.get('/notes/create', 'NoteController.create');
  Route.get('/notes/:id/edit', 'NoteController.edit');
  Route.post('/notes', 'NoteController.store');
  Route.patch('/notes/:id', 'NoteController.update');
  Route.delete('/notes/:id', 'NoteController.delete');

  Route.get('/organizations', 'OrganizationController.index');
  Route.get('organizations/:id', 'OrganizationController.show');

  Route.get('/users', 'UsersController.index');
  Route.get('/users/:id', 'UsersController.show');
  Route.get('/users/:id/edit', 'UsersController.edit');
  Route.patch('/users/:id', 'UsersController.update');
  Route.delete('/users/:id', 'UsersController.delete');

  Route.get('/logout', 'UsersController.logout');
})
  .prefix('admin')
  .namespace('Admin')
  .middleware("auth");

Route.get('/404', ({
  view
}) => {
  return view.render('404');
});
