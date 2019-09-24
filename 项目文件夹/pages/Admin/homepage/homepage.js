var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    buttonlist: [
      {
        func: 'clickTo_IntelligentFactory',
        color: 'green',
        title: 'xx公司智能工厂平台',
        detail: '智能工厂设备云监测平台'
      },
      {
        func: 'clickTo_XDLPlatform',
        color: 'red',
        title: '新大陆平台',
        detail: '新大陆物联网设备监测云平台'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },

  clickTo_IntelligentFactory: function(){
    wx.navigateTo({
      url: '../../IntelligentFactory/homepage/homepage',
    })
  },

  clickTo_XDLPlatform: function(){
    wx.navigateTo({
      url: '../../XDLPlatform/home/home',
    })
  }
})