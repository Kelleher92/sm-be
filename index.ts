'use strict';
import * as dotenv from 'dotenv';
dotenv.config();
// load express configuration
import configureApp from './server/config/express.config';
// import configureMongoose from './server/config/mongoose.config';
// import configureMySql from './server/config/mySqlDB.config';

const app = configureApp();
// configureMongoose();
// configureMySql();

// start application server on port 3000.
const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`API started on port ${process.env.PORT} (${process.env.NODE_ENV})`);  // tslint:disable-line:no-console
});

// Hot module reload

declare const module: any;  // tslint:disable-line:no-any
if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => server.close());
  }
}
export default app;
