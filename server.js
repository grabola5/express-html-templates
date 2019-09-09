var express = require('express');
var app = express();


app.set('view engine', 'pug');
app.set('views','./views');

app.get('/', function (req,res) {
	res.render('main');
});

app.get('/auth/google', function(req, res) {
	res.render('google');
});

app.get('/news', function(req, res) {
	res.sendFile('C:/projekty/17.6-express_html_templates/assets/news.jpg')
	});

app.listen(3000);
app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});