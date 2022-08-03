const passport = require('passport')
const GoogleStratagey = require('passport-google-oauth2').Strategy

passport.use(new GoogleStratagey({
    clientID:process.env.GOOGLE_CLIENTID,
    clientSecret:process.env.GOOGLE_CLIENTSECRECT_KEY,
    callbackURL:process.env.GOOGLE_CALLBACK_URL,
    passReqToCallback:true
}))