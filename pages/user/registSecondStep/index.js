// pages/user/registSecondStep/index.js
Page({
	data: {
		privince: [{id: '111', text: '湖北' }, {id: '222', text: '江西' }, { id: '333', text: '安徽' }, { id: '444', text:'湖南'}],
		privinceIndex:0,
		city: [{ id: '111', text: '武汉' }, { id: '222', text: '黄石' }, { id: '333', text: '荆州' }, { id: '444', text: '宜昌'}],
		cityIndex:0,
		area: [{ id: '111', text: '江岸区' }, { id: '222', text: '硚口区' }, { id: '333', text: '武昌区' }, { id: '444', text: '洪山区'}],
		areaIndex: 0,
		fuzequyu: [{ id: '111', text: '江岸区' }, { id: '222', text: '硚口区' }, { id: '333', text: '武昌区' }, { id: '444', text: '洪山区' }],
		fuzequyuIndex: 0,
		hasSelfGood: [{ id: '111', text: '江岸区' }, { id: '222', text: '硚口区' }, { id: '333', text: '武昌区' }, { id: '444', text: '洪山区' }],
		hasSelfGoodIndex: 0,
		yyzzphoto: null,
		sfzzmphoto: null,
		sfzfmphoto: null,
		dpmdphoto: null,
	},
	fuzequyuPickerChange:function(e){
		this.setData({
			fuzequyuIndex: e.detail.value
		})
	},
	hasSelfGoodPickerChange: function (e) {
		this.setData({
			hasSelfGoodIndex: e.detail.value
		})
	},
	privincePickerChange:function(e){
		this.setData({
			privinceIndex: e.detail.value
		})
	},
	cityPickerChange: function (e) {
		this.setData({
			cityIndex: e.detail.value
		})
	},
	areaPickerChange: function (e) {
		this.setData({
			areaIndex: e.detail.value
		})
	},
	submintData: function () {
		wx.showLoading({
			title: '正在提交',
		});
		setTimeout(function () {
			wx.navigateTo({
				url: '../login/index'
			});
		}, 2000);
	},
	chooseImageTap: function (e) {
		var _this = this;
		wx.showActionSheet({
			itemList: ['从相册中选择', '拍照'],
			itemColor: "#f7982a",
			success: function (res) {
				if (!res.cancel) {
					if (res.tapIndex == 0) {
						_this.chooseWxImage('album',e.currentTarget.id)
					} else if (res.tapIndex == 1) {
						_this.chooseWxImage('camera',e.currentTarget.id)
					}
				}
			}
		})
	},
	chooseWxImage: function (type,ddss) {
		var _this = this;
		wx.chooseImage({
			sizeType: ['original', 'compressed'],
			sourceType: [type],
			success: function (res) {
				var param = {};
				param[ddss] = res.tempFilePaths[0];
				_this.setData(param);
			}
		})
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