// axios的baseUrl, jssdk config
const state = process.env.NODE_ENV === 'production' ? 1 : process.env.NODE_ENV === 'development' ? 0 : 2

// 抽取state, 方便以后切换
// 0: 开发环境
// 1: 生产环境
// 2: 别的环境

const buildConfig = {
  baseURL: `${location.origin}/index.php/addon/`,
  sdkPath: 'Server/ShopPageApi/getJsTicket', // 'Server/ShopPageApi/getJsTicket',
  checkLoginPath: 'Server/WeixinApi/checklogin',
  jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'hideMenuItems']
}
const devConfig = {
  baseURL: ``,
  sdkPath: 'Server/ShopPageApi/getJsTicket',
  checkLoginPath: 'Server/WeixinApi/checklogin',
  jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'hideMenuItems']
}
const config = state === 1 ? buildConfig : devConfig
export default config
