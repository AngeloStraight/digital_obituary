var express = require('express');
var { engine } = require('express-handlebars');
var path = require('path');
require('dotenv').config({ path: './.env'});

var app = express();



// import routes
var indexRouter = require('./routes/index');
var checkoutRouter = require('./routes/checkout');
var resultRouter = require('./routes/result');


// set up handlebars

app.engine('.hbs', engine({ defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './views');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/checkout', checkoutRouter);
app.use('/result', resultRouter);

// set port
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function(){
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate');
});


module.exports = app;


