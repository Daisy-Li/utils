// jsonp 利用 <script> 标签没有跨域限制的漏洞
function jsonp(url, jsonpCallback, success) {
  let script = document.createElement("script");
  script.url = url;
  script.async = true;
  script.type = "text/javascript";
  window[jsonpCallback] = function(data) {
    success && success(data);
  }
  document.body.appendChild(script);
}

jsonp("http://xxx", "callback", function(value) {
  console.log(value);
})