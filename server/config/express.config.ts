import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as expressSanitizer from 'express-sanitizer';
// import passport from 'passport';
// import User from './server/models/user';
import { WinstonStream } from './winston.config';
import * as morgan from 'morgan';
import routes from '../routes';

const configureApp = () => {
  // init app and base middleware
  const app = express();
  app.use(bodyParser.json());                                     // parse Content-Type = application/json)
  app.use(bodyParser.urlencoded({ extended: true }));            // parse Content-Type = application/x-www-form-urlencoded
  app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse Content-Type = application/vnd.api+json as json
  app.use(expressSanitizer());
  app.use(morgan('combined', { stream: new WinstonStream() }));
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

  // init authentication settings
  // app.use(passport.initialize());
  // passport.use(User.createStrategy());                // use static authenticate method of model in LocalStrategy
  // passport.serializeUser(User.serializeUser());       // use static serialize and deserialize of model for passport session support
  // passport.deserializeUser(User.deserializeUser());

  // init routes
  app.use('/api', routes);

  return app;
};

export default configureApp;
