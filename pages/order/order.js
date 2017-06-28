 //index.js
//获取应用实例
var app = getApp()
Page({
    data: {
        motto: 'Hello World',
        userInfo: {},
        orderLstData:[{
            orderNo:'467645312132546798643',
            productName:'',
            data:'2017-06-02 11:01',
            sendData:'5月24日12:00前送达',
            monery:'6000.00',
            status:'配送中'
        },{
            orderNo:'467645312132546798643',
            productName:'',
            data:'2017-06-02 11:01',
            sendData:'5月24日12:00前送达',
            monery:'6000.00',
            status:'待配送'
        },{
            orderNo:'467645312132546798643',
            productName:'',
            data:'2017-06-02 11:01',
            sendData:'5月24日12:00前送达',
            monery:'6000.00',
            status:'取消配送'
        },{
          orderNo: '467645312132546798643',
          productName: '',
          data: '2017-06-02 11:01',
          sendData: '5月24日12:00前送达',
          monery: '6000.00',
          status: '已完成'
        }]
    },
    //事件处理函数
    toDetail: function() {
        wx.navigateTo({
            url: './orderDetail/index'
        })
    },
    selectOrderTapy: function(event) {
        this.setData({
            orderType: event.currentTarget.id
        })
    },
    onLoad: function() {
       
    }
})
