//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: './agentList/index'
    })
  },
  toDetail: function () {
    wx.navigateTo({
      url: '../order/orderDetail/index'
    });
    wx.login({
      success: function (res) {
        console.log(res.code);
      }
    })   
  },
  setDisabled:function(){
    
  },
  handleBZJBtn:function(){
    this.setData({
      showDialog:false
    })
  },
  refesh: function (e) {
    // 页面渲染完成
    console.log('刷新页面')
  },
  onLoad: function () {
    var user = wx.getStorageSync('user') || {}; 
    if (user.name === undefined || user.name === null){
      wx.showToast({
        title: '微信号没登录过超伙',
        icon: 'success',
        duration: 2000
      });
      wx.navigateTo({
        url: '../user/login/index'
      });
    }
  }
})
