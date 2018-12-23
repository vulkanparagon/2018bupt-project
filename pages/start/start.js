// start.js



Page({



  /**

   * 第一个页面的数据

   */

  data: {

    x: "0",

  },

  send1: function () {

    var that = this;//发送1的数据到onenet

    this.data.x = 1

    this.setData({

      x: this.data.x

    })

    wx.showToast({

      title: "SEND SUCCESS",

      duration: 1000

    })

    this.sendRequset(this.makeObj(this.data.x, ""));

    setTimeout(function () {//延时发送新指令，替代原指令，防止指令反复执行；

      that.data.x = 0

      that.setData({

        x: that.data.x

      })

      that.sendRequset(that.makeObj(that.data.x, ""));

    }, 19000);

  },



  send2: function () {

    var that = this;

    this.data.x = 2

    this.setData({

      x: this.data.x

    })

    wx.showToast({

      title: " SUCCESS",

      duration: 1000

    })

    this.sendRequset(this.makeObj(this.data.x, ""));

    setTimeout(function () {

      that.data.x = 0

      that.setData({

        x: that.data.x

      })

      that.sendRequset(that.makeObj(that.data.x, ""));

    }, 19000);

  },





  sendRequset: function (obj) {

    wx.request(obj);

  },

  makeObj: function (y, msg) {

    var obj = {

      url: "http://api.heclouds.com/devices/509235648/datapoints?type=3",//中间数字是自己的设备ID


      header: {

        "Content-Type": "application/json",

        "api-key": "jCxrx7gq2z=DqrohyxfrnG9RPDo=",

      },

      method: "post",

      data: {



        "x": y,

      },

      success: function (res) {

        if (msg != "") {

          wx.showToast({

            title: msg,

            duration: 2000

          })



        }

      }

    }

    return obj;

  },

  //跳转到图片识别的口令验证页面

  validate: function () {

    wx.navigateTo({

      url: '../wifi_station/index/index',

    })

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



  }

})