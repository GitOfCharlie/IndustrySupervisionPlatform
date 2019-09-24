var url = 'http://localhost:8080/';

module.exports = {
  GetUserById(id, successFunction) {
    wx.request({
      url: url + 'GetUserById',
      method: 'GET',
      data: {
        "id": id
      },
      success: successFunction
    })
  },
  CheckPassword(userName, successFunction) {
    wx.request({
      url: url + 'CheckPassword',
      method: 'GET',
      data: {
        'username': userName
      },
      success: successFunction
    })
  }
}