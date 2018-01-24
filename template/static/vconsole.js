;(function () {
  var option = {
    cdn: 'https://cdn.jsdelivr.net/npm/vconsole@3.1.0/dist/vconsole.min.js',
    activeParams: 'vConsole', // 激活参数名称,
    loadCompleted: function () {
      //
      window.vConsole = new window.VConsole({
        defaultPlugins: ['system', 'network', 'element', 'storage'], // 可以在此设定要默认加载的面板
        maxLogNumber: 1000,
        onReady: function () {
          if (getParameter(option.activeParams) === 'true') {
            window.vConsole.showSwitch()
          } else {
            window.vConsole.hideSwitch()
          }
        },
        onClearLog: function () {
        }
      })
    }
  }

    // https://github.com/AlloyTeam/AlloyLever
    // 需要先引入vconsole

    // 加载资源,执行加载完成的回调. 默认执行即可.需要再修改option.
    // 界面调用?vConsole=true就激活vConsole
  if (getParameter(option.activeParams)) {
    loadScript(option.cdn, option.loadCompleted)
  }
})()

function getParameter (n) {
  var m = window.location.hash.match(new RegExp('(?:#|&)' + n + '=([^&]*)(&|$)')),
    result = !m ? '' : decodeURIComponent(m[1])
  return result || getParameterByName(n)
}

function getParameterByName (name, url) {
  if (!url) url = window.location.href
  /* eslint no-useless-escape: 0 */
  name = name.replace(/[\[\]]/g, '\\$&')
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url)
  if (!results) return null
  if (!results[2]) return ''
  return decodeURIComponent(results[2].replace(/\+/g, ' '))
}

function loadScript (src, callback) {
  var s,
    r,
    t
  r = false
  s = document.createElement('script')
  s.type = 'text/javascript'
  s.src = src
  s.onload = s.onreadystatechange = function () {
      // console.log( this.readyState ); //uncomment this line to see which ready states are called.
    if (!r && (!this.readyState || this.readyState === 'complete')) {
      r = true
      callback()
    }
  }
  t = document.getElementsByTagName('script')[0]
  t.parentNode.insertBefore(s, t)
}
