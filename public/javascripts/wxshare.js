(function(wx){

    var isWx = function(){
        return navigator.userAgent.match(/MicroMessenger/i) === 'micromessenger' ? true : false;
    }

    var wxshare = function(){
        if('wx' in window){
            
            var info = JSON.parse(document.getElementById('info').innerHTML);

            wx.config({
                debug: false, 
                appId: 'wxc8363e5bfd9c4c3f', 
                timestamp: info.timestamp, 
                nonceStr: info.nonceStr, 
                signature: info.signature,
                jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone'] 
            });

            // 分享内容自定义
            var shareInfo = {
                title: '分享标题',
                desc: '描述',
                link: 'www.baidu.com',
                imgUrl: 'https://avatars3.githubusercontent.com/u/5388012?v=3&u=0981ddbccf0ffbb794cddd65ea12c212a9d5e93b&s=140',
            };

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
                //分享到QQ
                wx.onMenuShareQQ({
                    title: shareInfo.title,
                    desc: shareInfo.desc,
                    link: shareInfo.link,
                    imgUrl: shareInfo.imgUrl,
                    success: function() {

                    },
                    cancel: function() {

                    }
                });
                //分享到腾讯微博
                wx.onMenuShareWeibo({
                    title: shareInfo.title,
                    desc: shareInfo.desc,
                    link: shareInfo.link,
                    imgUrl: shareInfo.imgUrl,
                    success: function() {

                    },
                    cancel: function() {

                    }
                });
                //分享到QQ空间
                wx.onMenuShareQZone({
                    title: shareInfo.title, 
                    desc: shareInfo.desc, 
                    link: shareInfo.link,
                    imgUrl: shareInfo.imgUrl,
                    success: function() {

                    },
                    cancel: function() {

                    }
                });
            });

        }else{
            console.error('请在微信客户端中打开')
        }
    }


    isWx() && wxshare();
})(wx || jWeixin)