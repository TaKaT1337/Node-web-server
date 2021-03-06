const express = require('express');
const hbs = require('hbs'); 
const port = process.env.PORT || 1337;

var app = express();

hbs.registerPartials(__dirname+'/views/partials')
hbs.registerHelper('currentYear',()=>{
    return new Date().getFullYear();
});
hbs.registerHelper('Upper',(text)=>{
    return text.toUpperCase();
});
app.set('view engine', 'hbs');
app.use(express.static(__dirname+'/public'));

// app.use((req, res, next)=>{
//     res.render('maintenance.hbs');
// });

app.get('/', (req, res)=>{
    res.render('home.hbs',{
        pageTitle: 'Home page',
        welcome: 'Welcome to Home'
    });
 });
app.get('/about',(req, res)=>{
    res.render('about.hbs',{
        pageTitle: 'About page',
    });
});
app.get('/bad',(req, res)=>{
    res.send({
        errorMessage : 'Unable to handle request'
    });
});
 app.listen(port);