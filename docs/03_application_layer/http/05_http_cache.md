# HTTP 缓存策略

解决：仅仅只是知道浏览器会对请求的静态文件进行缓存，但是为什么被缓存，缓存是怎样生效的，却并不是很清楚。

浏览器缓存的作用：这些缓存为浏览过的文档提供向后/向前导航，保存网页，查看源码等功能，可以避免再次向服务器发起多余的请求。它同样可以提供缓存内容的离线浏览。

浏览器缓存是用了 HTTP 的缓存机制，每次请求资源时，通过 HTTP 的请求报文和响应报文对缓存资源进行判断和使用。

首先我们要知道，浏览器第一次访问页面后，会将静态资源保存在浏览器的缓存文件夹中，可以把它理解为是浏览器缓存数据库。


Cache/ 
Code Cache / 
 这两个目录具体路径，通过在浏览器 url 上输入 Chrome://version  找到个人资料路径，进去就能看到了。
HTTP 是通过请求头和响应头的信息进行控制缓存策略的。

请求头: if-Modified-Since ,  if-None-Match

响应头：Expires （HTTP/1.0）, Cache-Control , Last-Modified, Etag (优先级比 Last-Modified 高)

缓存策略类型：强制缓存，对比缓存。两种缓存策略可以同时使用。

强制缓存
强制缓存是通过在响应头中的两个字段来标明失效规则（Expires/Cache-Control）

Expires
它的值是服务端返回的资源到期时间，下一次请求时，请求时间小于服务器返回的到期时间，就直接使用缓存数据。

问题：到期时间由服务器生成，如果客户端时间与服务端时间不一致，使用缓存命中误差。这是 HTTP/1.0 的产物，在 HTTP/1.1 使用 Cache-Control 代替

Cache-control Cache-Control - HTTP | MDN 
这个缓存策略规则的值有：private ，public，no-cache ，max-age，no-store ，默认是 private。

private ： 只能针对个人用户可以缓存，而不能被代理服务器缓存。

public：指示响应可以被任何缓存区缓存。

no-cache：要求客户端直接向服务器发送请求，服务器判断资源是否更新，已更新则返回最新资源，未更新则返回 304 使用缓存。这个要求每次使用资源都需要服务器评估缓存的有效性。

no-store：禁止一切缓存

对比缓存
在浏览器已经缓存数据的情况下，使用对比缓存的流程如下图：

 

使用对比缓存流程，不管是否使用缓存，都需要向服务器发送请求。它们的区别是如果对比缓存命中的话，服务器返回的是 304 ，不会返回请求体，内容小。如果缓存没命中，就直接返回最新的资源。

对比缓存是使用响应头的两个字段进行标明资源

Last-Modified / if-Modified-Since  值对应的是时间
服务器响应请求时，会带上资源的最后修改时间：Last-Modified  进行返回。

之后，浏览器请求资源时，请求头会带上时间，放在字段上： if-Modified-Since 。

服务器会对比资源的最后修改时间进行对比，

如果大于 if-Modified-Since ，说明修改了，直接返回最新的。

如果小于就返回 304 状态码，继续使用缓存

Etag / if-None-Match (优先级比 Last-Modified / if-Modified-Since 高) ，值是文件的 唯一标识
服务器响应请求时，通过 Etag 响应头返回当前资源的唯一标识(服务器生成)，浏览器再次请求时会带上请求头 if-None-Match ，将上一次的 Etag 值发送给服务器。服务器通过对比，一致则使用缓存，返回 304 状态码。不一致则返回最新的资源。

总结
HTTP 缓存分为：强制缓存，对比缓存

强制缓存的相关字段是 Expires，Cache-Control ，如果命中直接读本地缓存，不再跟服务器端交互，状态码 200.

对比缓存的 HTTP 相关头部 Last-Modified / if-Modified-Since , Etag / if-None-Match ,每次请求都需求请求服务器，判断资源是否更新，从而决定浏览器是否使用缓存，如果是，则返回 304 ，否则重新完整返回。

### 参考

<https://www.cnblogs.com/chenqf/p/6386163.html>

<https://cloud.tencent.com/developer/news/588770>

<https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Caching>

