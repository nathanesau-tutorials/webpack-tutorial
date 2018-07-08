// this is a loader
require('../css/style.css');

let people = require('./utils.js');
let $ = require('jquery');

$.each(people, function(key, value){
    $('body').append('<h1>'+people[key].name+'</h1>');
});