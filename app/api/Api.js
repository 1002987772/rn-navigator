/**
 created by 杨小北
 */


/**
 *
 * fetch 请求第一步返回的是一个response对象
 * .json()  .text()  可以转成我们想要的结构
 *
 * **/

export default class Api {

    /**
     * loadImage  下载图片静态资源
     * **/
  static loadImage (url) {
    return fetch(url)
       .then((data) => {
         return Promise.resolve(data)
       })
       .catch((error) => {
         return Promise.reject(error)
       })
   }

    /**
     * get  请求
     * **/
    static get (url) {
     return fetch(url)
        .then((res) => handleStatus(res))
        .then((data) => {
          return Promise.resolve(data)
        })
        .catch((error) => {
          return Promise.reject(error)
        })
    }

  
  
    /**
     * post  请求
     * **/
    static post (url, params) {
      let pros = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params)
      }
      return fetch(url, pros)
      .then((res) => handleStatus(res))
      .then((data) => {
          return Promise.resolve(data)
        })
        .catch((error) => {
          return Promise.reject(error)
        })
    }
  }
  
  function handleStatus(res) {
    let errors;
    switch (res.status) {
        case 200:
            return res.json();
        case 500:
            console.log("500错误");
            message.error('服务器内部错误', 5)
            errors = `${res.status}, ${res.statusText}`
            throw errors
        case 404:
            message.error("资源不存在", 5)
            errors = `${res.status}, ${res.statusText}`
            throw errors
        case 401:
            message.error("登录会话过期,请重新登录", 5)
            localStorage.removeItem("my-custom-token")
            window.location.href = '/login'
            break;
        case 403:
            message.error("无权限访问", 5)
            errors = `${res.status}, ${res.statusText}`
            throw errors
      default:
    }
  }
  