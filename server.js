var express = require('express');
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var confih = require('./config');
var app = express();
var googleProfile = {};

app.set('view engine', 'pug');
app.set('views','./views');
app.use(passport.initialize());
app.use(passport.session());

//serializowanie logujących się użytkowników - aby sesja logowania była utrzymana
passport.serializeUser(function(user, done) {
	done(null, obj);
});
passport.deserializeUser(function(obj, done) {
	done(null, obj);
});

passport.use(new GoogleStrategy({
	clientID: config.GOOGLE_CLIENT_ID,
	clientSecret: config.GOOGLE_CLIENT_SECRET,
	callbackURL: config.CALLBACK_URL
},
	function(accessToken, refreshToken, profile, cb) {
		googleProfile = {
			id: profile.id,
			displayName: profile.displayName
		};
		cb(null, profile);
	}
	));


/*
app.get('/', function (req,res) {
	res.render('main');
});

app.get('/auth/google', function(req, res) {
	res.render('google');
});

app.get('/news', function(req, res) {
	res.sendFile('C:/projekty/17.6-express_html_templates/assets/news.jpg')
	}); */

app.listen(3000);
app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});