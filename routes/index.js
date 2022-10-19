var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Home',
    quote: 'You are never too old to set new goals or to dream a new dream.\n-C.S. Lewis',
    mission: 'solve your developing needs'
   });
});

router.get('/home', function(req, res, next) {
  res.render('index', { 
    title: 'Home',
    quote: 'You are never too old to set new goals or to dream a new dream.\n-C.S. Lewis',
    mission: 'solve your developing needs'
   });
});

router.get('/about', function(req, res, next) {
  res.render('about', { 
    title: 'About',
    fullName: 'Agrim Prasad Shiwakoti',
    dob: 'February 18, 2003',
    birthPlace: 'Kathmandu',
    country: 'Nepal',
    currentCountry: 'Canada',
    course: 'Software Engineering Technician',
    college: 'Centennial College'

 });
});

router.get('/projects', function(req, res, next) {
  res.render('projects', { 
    title: 'Projects'
  });
});


router.get('/services', function(req, res, next) {
  res.render('services', { 
    title: 'Services',
    service1: 'Web Application Development',
    
    service2:'Browser Games Development',
    
    service3:'Application Development',
    
    
  });
});


router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact'});
});
module.exports = router;