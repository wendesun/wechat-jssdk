# WeChat-JSSDK
微信JSSDK+nodejs 实现 微信分享API 微信授权页面->获取用户信息

## 前置条件
1. 微信公众号一个 (用于获取 appid secret 等)
2. 微信web开发者工具（方便调试 ：<a href="https://mp.weixin.qq.com/wiki/10/e5f772f4521da17fa0d7304f68b97d7e.html#.E4.B8.8B.E8.BD.BD.E5.9C.B0.E5.9D.80">下载地址</a>）

## 准备步骤
1. 登陆微信<a href="https://mp.weixin.qq.com">公众平台</a>
2. 在左侧菜单选择 开发-> 基本配置中，获得AppID(应用ID)和AppSecret(应用密钥) <strong>后面会用到很关键</strong>
3. 在左侧菜单选择 开发-> 接口权限中，找到 网页服务-> 网页账号->网页授权获取用户基本信息 点击修改，填写授权回调页面域名。(PS: 域名必须备案，只有在这个域名下的项目才有权限获取到微信数据。填写域名是不要http://|https://，例: www.abc.com)
4. 左侧菜单选择 设置-> 公众号设置，选择功能设置选项卡。设置JS接口安全域名 (填写接口权限中的域名即可，不然后面分享可能会报错 invalid url domain)

## 正式开发
1. 获取access_token，access_token是公众号的全局唯一接口调用凭据，公众号调用各接口时都需使用access_token。

	发送get请求，地址：https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=APPSECRET(APPID,APPSECRET 怎么来的在准备步骤已经说明)



