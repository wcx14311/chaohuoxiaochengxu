var app = getApp();
Page({
    data: {
        userInfo: {}
    },
    onLoad: function() {
        var that = this
        app.getUserInfo(function(userInfo) {
            that.setData({
                userInfo: userInfo
            })
        });
    },
    qozhuce:function(){
        wx.navigateTo({
           url: '../registFirstStep/index'
        });
    },
    dologin:function(){
        wx.navigateTo({
            url: '../registFirstStep/index'
        });
    },
    onReady: function() {

    },
    onShow: function() {

    },
    onHide: function() {

    },
    onUnload: function() {

    },
    onPullDownRefresh: function() {

    },
    onReachBottom: function() {

    },
    onShareAppMessage: function() {

    }
})
