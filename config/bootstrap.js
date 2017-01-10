/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function(cb) {

  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  try {
    var shopifyAPI = require('shopify-node-api');

    var Shopify = new shopifyAPI({
      shop: 'Beachd', // MYSHOP.myshopify.com
      shopify_api_key: '7cefb4d89cef490677ac6b377c2eb925', // Your API key
      access_token: '6ae043830e0360d84a81eed7125d4c59' // Your API password
    });
  }
  catch(e){
     sails.log.error('Unable to parse package. %s', e);
  }
  cb();
};
