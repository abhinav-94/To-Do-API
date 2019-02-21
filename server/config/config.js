var env = process.env.NODE_ENV || 'development';

if (env === 'development' || env === 'test')
{
  var config = require('./config.json');  //importing the json object
  var envConfig = config[env];       //whatever the instance is, assign that environment from json to the object

  Object.keys(envConfig).forEach((key) => {
    process.env[key] = envConfig[key];   //object.keys makes an array of property names from the object passed
  });
}
