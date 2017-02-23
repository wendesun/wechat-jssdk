# WeChat-JSSDK
微信JSSDK+nodejs 实现 微信分享API 微信授权页面->获取用户信息
来源于 https://github.com/ZenCheng/WeChat-JSSDK
## 前置条件
1. 微信公众号一个 (用于获取 appid secret 等)，如果没有服务号的可以进到（开发者工具——公众平台测试账号）；
2. 微信web开发者工具（方便调试 ：<a href="https://mp.weixin.qq.com/wiki/10/e5f772f4521da17fa0d7304f68b97d7e.html#.E4.B8.8B.E8.BD.BD.E5.9C.B0.E5.9D.80">下载地址</a>）

## 准备步骤
1. 登陆微信<a href="https://mp.weixin.qq.com">公众平台</a>
2. 在左侧菜单选择 开发-> 基本配置中，获得AppID(应用ID)和AppSecret(应用密钥) <strong>后面会用到很关键</strong>
3. 在左侧菜单选择 开发-> 接口权限中，找到 网页服务-> 网页账号->网页授权获取用户基本信息 点击修改，填写授权回调页面域名。(PS: 域名必须备案，只有在这个域名下的项目才有权限获取到微信数据。填写域名是不要http://|https://，例: www.abc.com)
4. 左侧菜单选择 设置-> 公众号设置，选择功能设置选项卡。设置JS接口安全域名 (填写接口权限中的域名即可，不然后面分享可能会报错 invalid url domain)

## 正式开发

### 1.微信分享SDK

1. 在需要调用JS接口的页面引入如下JS文件，（支持https）：http://res.wx.qq.com/open/js/jweixin-1.0.0.js
如需使用摇一摇周边功能，请引入 http://res.wx.qq.com/open/js/jweixin-1.1.0.js

2. 获取access_token，access_token是公众号的全局唯一接口调用凭据，公众号调用各接口时都需使用access_token。

	 发送get请求，地址：https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=APPSECRET(APPID,APPSECRET 怎么来的在准备步骤已经说明)

3. 获取jsapi_ticket，jsapi_ticket是公众号用于调用微信JS接口的临时票据。

    发送get请求，地址：https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=ACCESS_TOKEN&type=jsapi
    (ACCESS_TOKEN 第1步已经获取到了)

4. 验证签名，算法请查看源文件。

5. 调用
```javascript
  wx.config({
    debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: '', // 必填，公众号的唯一标识
    timestamp: , // 必填，生成签名的时间戳
    nonceStr: '', // 必填，生成签名的随机串
    signature: '',// 必填，签名，见附录1
    jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
});
```

6. 分享回调
```javascript
wx.ready(function(){
    //分享到朋友圈
    wx.onMenuShareTimeline({
        title: shareInfo.title,
        link: shareInfo.link,
        imgUrl: shareInfo.imgUrl,
        success: function() {

        },
        cancel: function() {

        }
    });
    //分享给朋友
    wx.onMenuShareAppMessage({
        title: shareInfo.title,
        desc: shareInfo.desc,
        link: shareInfo.link,
        imgUrl: shareInfo.imgUrl,
        success: function() {

        },
        cancel: function() {

        }
    });
)}
```
