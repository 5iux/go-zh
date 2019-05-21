// ==UserScript==
// @namespace     https://github/5iux/go-zh
// @name          Google中文
// @description   强制google搜索更改成中文,脚本基于英文版https://openuserjs.org/scripts/fardjad/Google_in_English_PLEASE! 更改
// @author        D.Young
// @version       0.0.2
// @include       *://*.google.*
// @grant         none
// ==/UserScript==


(function () {
  'use strict';
  const urlParams = new URLSearchParams(window.location.search);
  const hl = urlParams.get('hl');
  if (hl == null) {
    urlParams.append('hl', 'zh-CN');
    const {
      protocol,
      host,
      pathname,
      hash
    } = window.location;
    window.location.replace(protocol + '//' + host + pathname + '?' + urlParams.toString() + hash);
  }
})();