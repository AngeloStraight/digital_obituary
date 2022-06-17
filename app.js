var express = require('express');
var { engine } = require('express-handlebars');
var path = require('path');

var app = express();


// import routes
var indexRouter = require('./routes/index');
// set up handlebars

app.engine('.hbs', engine({ defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './views');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// set port
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function(){
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate');
});


module.exports = app;


