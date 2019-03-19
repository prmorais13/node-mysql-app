const passport = require('passport');
const localStrategy = require('passport-local').Strategy;

passport.use(
  'local.signup',
  new localStrategy(
    {
      usernameField: 'username',
      passwordField: 'password',
      passReqToCallback: true
    },
    async (req, username, password, done) => {
      console.log(req.body);
    }
  )
);
