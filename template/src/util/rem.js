/*
 * base on clientWidth,then transform to rem,default 375px == 20rem
 * if you are base on iphone 5(320px),modify line 13.  docEl.style.fontSize = 20 * (clientWidth / 320) + 'px'
 */

export default function Rem (doc, win) {
  const docEl = doc.documentElement
  const resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  const reCaculate = function () {
    var clientWidth = docEl.clientWidth
    if (!clientWidth) return
    docEl.style.fontSize = 20 * (clientWidth / 375) + 'px'
  }
  if (!doc.addEventListener) return
  win.addEventListener(resizeEvt, reCaculate, false)
  doc.addEventListener('DOMContentLoaded', reCaculate, false)
}
