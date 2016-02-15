//  Take note on the empty array we're passing as the second parameter to angular.module, this empty array tells Angular to create a new module rather than just getting an old module that has already been created. It's crucial to understand that in our 'app.js' file we're creating a new module (passing in the empty []) because our 'app.js' file is our hub as we mentioned earlier.

var app = angular.module('friendsList', []);
