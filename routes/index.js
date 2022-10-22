/**********************************************
 * Author: Agrim Shiwakoti
 * Student ID: 301209752
 * Date: 2022/10/21
 **********************************************/
var express = require('express');
var router = express.Router();

//home page
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Home',
    quote: 'You are never too old to set new goals or to dream a new dream.\n-C.S. Lewis',
    mission: 'solve your developing needs'
   });
});

//home page again
router.get('/home', function(req, res, next) {
  res.render('index', { 
    title: 'Home',
    quote: 'Passion is the fire that drives us to do great things',
    mission: 'solve your developing needs'
   });
});

//about page
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

//projects page
router.get('/projects', function(req, res, next) {
  res.render('projects', { 
    title: 'Projects',
    project1: 'GUI Calculator',
    project2: 'DVD Logo Screen',
    project3: 'Bug Smasher'
  });
});

//services page
router.get('/services', function(req, res, next) {
  res.render('services', { 
    title: 'Services',
    service1: 'Web Application Development',
    service2:'Browser Games Development',
    service3:'Application Development'
  });
});

//contact page
router.get('/contact', function(req, res, next) {
  res.render('contact', { 
    title: 'Contact',
    phone: '647-517-2769',
    email: 'agrimsiwakot5@gmail.com'
  });
});
module.exports = router;