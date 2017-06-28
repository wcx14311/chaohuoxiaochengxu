//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    orderType:'all',
    transactionFlow:[
      {
        type:'add',
        date:'2017-06-09 12:45:55',
        money:'6000.00'
      }, {
        type: 'jian',
        date: '2017-06-09 12:45:55',
        money: '6000.00'
      }, {
        type: 'add',
        date: '2017-06-09 12:45:55',
        money: '6000.00'
      }, {
        type: 'add',
        date: '2017-06-09 12:45:55',
        money: '6000.00'
      }
    ]
  },
  //事件处理函数
  toDeposit: function() {
    wx.navigateTo({
      url: './walletDetail/index'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
