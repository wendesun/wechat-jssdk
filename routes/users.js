var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('userInfo',{
    title: '微信授权获取用户信息'
  });
});

module.exports = router;
