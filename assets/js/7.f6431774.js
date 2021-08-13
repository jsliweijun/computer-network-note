(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{370:function(t,a,s){t.exports=s.p+"assets/img/request.1c24beaa.png"},371:function(t,a,s){t.exports=s.p+"assets/img/method.5d653a7c.png"},386:function(t,a,s){"use strict";s.r(a);var e=s(45),_=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"http-请求报文"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-请求报文"}},[t._v("#")]),t._v(" HTTP 请求报文")]),t._v(" "),e("p",[t._v("HTTP 请求报文由客户端发起，可以是浏览器，postman 工具，curl 工具。")]),t._v(" "),e("h2",{attrs:{id:"格式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#格式"}},[t._v("#")]),t._v(" 格式")]),t._v(" "),e("p",[t._v("请求报文由 4 部分组成")]),t._v(" "),e("ul",[e("li",[t._v("请求行")]),t._v(" "),e("li",[t._v("请求头 Request Headers")]),t._v(" "),e("li",[t._v("空行")]),t._v(" "),e("li",[t._v("请求体 （可选） Request Payload")])]),t._v(" "),e("p",[t._v("具体如下图，请求报文的内容都是以键值对方式，每一对内容后面都会 回车换行")]),t._v(" "),e("p",[e("img",{attrs:{src:s(370),alt:"请求报文格式"}})]),t._v(" "),e("h2",{attrs:{id:"内容"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#内容"}},[t._v("#")]),t._v(" 内容")]),t._v(" "),e("h3",{attrs:{id:"请求行"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#请求行"}},[t._v("#")]),t._v(" 请求行")]),t._v(" "),e("p",[t._v("请求行是请求报文的第一行，它由三部分组成")]),t._v(" "),e("ul",[e("li",[t._v("请求方法")]),t._v(" "),e("li",[t._v("请求地址 "),e("RouterLink",{attrs:{to:"/03_application_layer/http/02_url.html"}},[t._v("URL")])],1),t._v(" "),e("li",[t._v("HTTP 协议/版本 （值为：HTTP/1.0  或者 HTTP/1.1）")])]),t._v(" "),e("h4",{attrs:{id:"请求方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#请求方法"}},[t._v("#")]),t._v(" 请求方法")]),t._v(" "),e("p",[t._v("HTTP /1.1 协议中定义了 8 种方法，用于操作资源。")]),t._v(" "),e("p",[e("img",{attrs:{src:s(371),alt:"请求方法"}})]),t._v(" "),e("h5",{attrs:{id:"get-与-post-方法对比"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get-与-post-方法对比"}},[t._v("#")]),t._v(" GET 与 POST 方法对比")]),t._v(" "),e("p",[t._v("特性")]),t._v(" "),e("ul",[e("li",[t._v("GET 请求是查询，获取数据，可以不用每次都查询数据库，可以使用缓存。例如二访问页面，页面的图片资源，css资源是可以使用缓存的。")]),t._v(" "),e("li",[t._v("POST 是做新增，删除，更新操作，每次都操作数据库资源，不使用缓存。")])]),t._v(" "),e("p",[t._v("对比")]),t._v(" "),e("ul",[e("li",[t._v("缓存角度：GET 请求会被浏览器主动缓存下来，留下历史记录，POST 默认不会。")]),t._v(" "),e("li",[t._v("编码方式角度：GET 请求的内容需要 URL 编码，只能接收 ASCII 编码，中文需要 URL 编码，POST 没有限制。")]),t._v(" "),e("li",[t._v("参数安全角度：GET 是放在 URL 中明文传输，不安全，POST 可以放在请求体中密文传输，适合传输敏感信息。")]),t._v(" "),e("li",[t._v("参数大小角度：首先明确 URL 本身对于数据大小没有限制。但是不同的浏览器，服务器会对 GET 请求传输的数据大小有限制，但对 POST 请求的数据大小无限制（一般受服务器处理程序能力影响）")]),t._v(" "),e("li",[t._v("幂等性角度：GET 是幂等的，POST 不是 （幂等是指相同的操作，结果也相同）")])]),t._v(" "),e("h4",{attrs:{id:"请求-url"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#请求-url"}},[t._v("#")]),t._v(" 请求 URL")]),t._v(" "),e("p",[t._v("具体可看 "),e("RouterLink",{attrs:{to:"/03_application_layer/http/02_url.html"}},[t._v("URL")]),t._v(" 内容")],1),t._v(" "),e("h4",{attrs:{id:"请求协议-版本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#请求协议-版本"}},[t._v("#")]),t._v(" 请求协议/版本")]),t._v(" "),e("p",[t._v("目前默认使用 HTTP/1.1 这个值。")]),t._v(" "),e("h3",{attrs:{id:"请求头"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#请求头"}},[t._v("#")]),t._v(" 请求头")]),t._v(" "),e("p",[t._v("请求头的格式：键： 值  ，注意冒号后面有一个空格。")]),t._v(" "),e("p",[t._v("如下具体例子")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("Accept"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\nAccept-Encoding: gzip, deflate, br\nAccept-Language: zh-CN,zh;q=0.9,en;q=0.8\nConnection: keep-alive\nContent-Length: 21429\nContent-Type: application/json\nHost: api.github.com\nOrigin: https://github.com\nReferer: https://github.com/\nUser-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36\n")])])])]),e("p",[t._v("常见的请求头 Request Headers")]),t._v(" "),e("h3",{attrs:{id:"请求体"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#请求体"}},[t._v("#")]),t._v(" 请求体")]),t._v(" "),e("p",[t._v("请求体是 POST 请求方法中的请求参数，以 key = value   形式进行组织和传递，多个请求参数使用 & 符号进行拼接。请求头中 Content-Length 记录请求体的长度。")]),t._v(" "),e("p",[t._v("请求体根据不同的场景会出现不同的形式")]),t._v(" "),e("p",[t._v("查询字符串：")]),t._v(" "),e("p",[t._v("任意请求体：from表单")]),t._v(" "),e("p",[t._v("文件上传：")])])}),[],!1,null,null,null);a.default=_.exports}}]);