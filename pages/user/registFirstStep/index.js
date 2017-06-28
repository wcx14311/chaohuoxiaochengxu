// pages/user/registFirstStep/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      btnStatus:false
  },
  qozhuce: function () {
      this.setData({
          btnStatus:true
      })
	  wx.showLoading({
		  title: '正在提交',
	  });
	  setTimeout(function () {
		  wx.navigateTo({
			  url: '../registSecondStep/index'
		  });
	  }, 2000);
  },
  onLoad: function (options) {
  
  },
  onReady: function () {
  
  },
  onShow: function () {
  
  },
  onHide: function () {
  
  },
  onUnload: function () {
  
  },
  onPullDownRefresh: function () {
  
  },
  onReachBottom: function () {
  
  },
  onShareAppMessage: function () {
  
  }
})