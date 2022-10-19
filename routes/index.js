var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { 
    title: 'About Me',
    fullName: 'Agrim Prasad Shiwakoti',
    dob: 'February 18, 2003',
    birthPlace: 'Kathmandu',
    country: 'Nepal',
    currentCountry: 'Canada',
    course: 'Software Engineering Technician',
    college: 'Centennial College'

 });
});

router.get('/', function(req, res, next) {
  res.render('projects', { 
    title: 'Projects' 
  });
});
module.exports = router;
