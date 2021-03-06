export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  this.timing = 1000;      // delay for each request, automatically set to 0 during testing
	
  

    // this.get('/city');
    // this.post('/city');
    // this.get('/city/:sight');
    // this.patch('/city/:sight'); // or this.patch
    // this.del('/city/:sight');
	this.get('/plans');
	this.post('/plans');
	this.patch('/plans/:id');
	this.del('/plans/:id');

	this.get('/cities');
	this.post('/cities');
	this.del('/cities/:id');

	this.passthrough('http://api.geonames.org/**');
    // http://www.ember-cli-mirage.com/docs/v0.4.x/shorthands/
  
}
