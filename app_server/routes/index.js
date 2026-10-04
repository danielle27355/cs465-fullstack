var express = require('express');
var router = express.Router();
const ctrlMain = require('../controllers/main');

/* GET home page. */
router.get('/', ctrlMain.index);

/* GET meals page. */
router.get('/meals', function(req, res, next) {
  res.render('meals', { title: 'Travlr Getaways - Meals', current_meals: true });
});

/* GET rooms page. */
router.get('/rooms', function(req, res, next){
    res.render('rooms',{
        title: 'Travlr Getaways - Rooms',
        current_rooms: true
    });
});


/* GET news page. */
router.get('/news', function(req, res, next){
    res.render('news',{
        title: 'Travlr Getaways - News',
        current_news: true
    });
});


/* GET about page. */
router.get('/about', function(req, res, next){
    res.render('about',{
        title: 'Travlr Getaways - About',
        current_about: true
    });
});

/* GET contact page. */
router.get('/contact', function(req, res, next){
    res.render('contact',{
        title: 'Travlr Getaways - Contact',
        current_contact: true
    });
});


module.exports = router;
