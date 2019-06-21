const debug = require('debug')('api:routes');
const blogRoutes = require('./blog')


const initRoutes = (app) => {
  debug('Initializing ')
  app.use('/blog', blogRoutes);

  debug('Finished initializing routes...');
};

module.exports = initRoutes;
