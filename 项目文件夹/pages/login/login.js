var app = getApp();
var network = require('../../config/network.js') //后端接口


Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:null,
    password:null,
    identity:null,
    items: [
      { value: 'user', name: '用户', checked: 'true'},
      { value: 'administrator', name: '管理员'},
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

  radioChange:function(event) {
    this.setData({identity:event.detail.value})
  },

  usernameInput: function (event) {
    this.setData({ username: event.detail.value })
  },
  passwordInput: function (event) {
    this.setData({ password: event.detail.value })
  },

  /**
   * 点击登录
   */
  loginClick: function() {
    if(this.data.username == null || this.data.password == null){
      wx.showToast({
        title: '输入框不能为空',
        image: '../images/gantanhao.jpg'
      })
    }else{
      app.globalData.hasLogin = true
      console.log('login')
      
      //保存用户信息：账号名 & 身份信息
      // app.globalData.userinfo = {
      //   username:this.data.username,
      //   identity:this.data.identity
      // }
      
      
      if (this.data.identity == 'administrator'){//管理员界面
        wx.switchTab({
          url: '../Admin/homepage/homepage',
        })
      }else{//普通用户界面
        // wx.switchTab({
        //   url: '../IntelligentFactory/homepage/homepage',
        // })
        wx.switchTab({
          url: '../XDLPlatform/home/home',
        })
      }
    }
    //连接服务器端获得账号和密码认证
    // var that = this
    // wx.request({
    //   url: app.globalData.backendUrl,  //todo
    //   method: "GET",
    //   header: {
    //     'content-type': 'application/x-www-form-urlencoded' 
    //   },
    //   data: {
    //     username: this.data.username,
    //     password: this.data.password,
    //     identity: this.data.identity,
    //   },
    //   success: function(res) {
    //     console.log(res.data)
    //     if(res.statusCode == 200) {
    //       wx.navigateTo({
    //         url: "../userCenter/userCenter"
    //       })
    //     } else {
    //       wx.showToast({
    //         title: "密码错误",
    //       })
    //     }
    //   }
    // })
  },

  getRegister:function(){
    wx.navigateTo({
      url: '../register/register',
    })
  }
})