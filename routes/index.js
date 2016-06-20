var APPID = global.params.appid,
    APPSECRET = global.params.secret;

var express = require('express');
var router = express.Router();
var request = require('request');

// 缓存 token jsapi_ticket 等
var cache = {
  token: null,
  jsapi_ticket: null
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  if(!cache.token){
    getToken(res);
  }else{
    getTiket(res);
  }


});


var getToken = function(res){

  var token_url = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid='+APPID +
      '&secret='+APPSECRET;

  request(token_url, function(error, response, body){
    if(!error && response.statusCode == 200){
      var data = JSON.parse(body);

      cache.token = data.access_token;
      //res.render('index', { title: 'Express' });
    }
  });
};

var getTiket = function(){
  var tiket_url = '';
};

module.exports = router;
