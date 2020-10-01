const server = require('./api/server')

const port = process.env.PORT || 5000;
//we need to allow heroku choose the port so we need enviornment variables
//heroku will set up the port & node_env for production
//we need to give our server the ability to look at the environment & read the port
// PORT has be be all caps, we can set a default if PORT is not defined on our local host


server.listen(port, () => console.log('server running'))