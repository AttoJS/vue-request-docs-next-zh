"use strict";(self.webpackChunkzh=self.webpackChunkzh||[]).push([[671],{59137:(e,n,a)=>{a.r(n),a.d(n,{default:()=>fa});var s=a(27875);const t=(0,s.uE)('<h1 id="公共-api" tabindex="-1"><a class="header-anchor" href="#公共-api" aria-hidden="true">#</a> 公共 API</h1><p>VueRequest 通常由 <a href="#return-values">Return Values</a>、<a href="#service">Service</a> 和 <a href="#options">Options</a> 三个部分组成</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token operator">...</span>ReturnValues <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useRequest</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">R</span><span class="token punctuation">,</span> <span class="token constant">P</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>Service<span class="token punctuation">,</span> Options<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><div class="custom-container tip"><p class="custom-container-title">TS 泛型说明</p><p><code>R</code> 是返回 <a href="#data"><code>data</code></a> 的泛型</p><p><code>P</code> 是 <a href="#params"><code>params</code></a> 的泛型 <em>（注：该泛型受到 <code>unknown[]</code> 的约束）</em></p></div><h2 id="return-values" tabindex="-1"><a class="header-anchor" href="#return-values" aria-hidden="true">#</a> Return Values</h2><h3 id="data" tabindex="-1"><a class="header-anchor" href="#data" aria-hidden="true">#</a> data</h3><ul><li><p><strong>类型：</strong> <code>shallowRef&lt;R | undefined&gt;</code></p></li><li><p><strong>默认值：</strong> <code>undefined</code></p><p>接口返回的数据。</p></li></ul><h3 id="loading" tabindex="-1"><a class="header-anchor" href="#loading" aria-hidden="true">#</a> loading</h3><ul><li><p><strong>类型：</strong> <code>Ref&lt;boolean&gt;</code></p></li><li><p><strong>默认值：</strong> <code>false</code></p><p><a href="#service"><strong>Service</strong></a> 请求的执行状态</p></li></ul><h3 id="params" tabindex="-1"><a class="header-anchor" href="#params" aria-hidden="true">#</a> params</h3><ul><li><p><strong>类型：</strong> <code>Ref&lt;P[]&gt;</code></p></li><li><p><strong>默认值：</strong> <code>[]</code></p><p><a href="#service"><strong>Service</strong></a> 的请求参数</p></li><li><p><strong>示例：</strong></p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">getUser</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;api/user&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    params<span class="token operator">:</span> <span class="token punctuation">{</span>\n      name<span class="token operator">:</span> name<span class="token punctuation">,</span>\n      age<span class="token operator">:</span> age<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> params<span class="token punctuation">,</span> run <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRequest</span><span class="token punctuation">(</span>getUser<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  defaultParams<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;John&#39;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// 默认请求时，如果存在 defaultParams， 则 params.value 将会等于 defaultParams，否则为空数组</span>\n\n<span class="token comment">// 当 run 传入参数时，此时的参数将会同步到 params 里面</span>\n<span class="token function">run</span><span class="token punctuation">(</span><span class="token string">&#39;Benny&#39;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// params.value 等于 [&#39;Benny&#39;, 18]</span>\n</code></pre></div></li></ul><h3 id="error" tabindex="-1"><a class="header-anchor" href="#error" aria-hidden="true">#</a> error</h3><ul><li><p><strong>类型：</strong> <code>shallowRef&lt;Error | undefined&gt;</code></p></li><li><p><strong>默认值：</strong> <code>undefined</code></p><p>如果在内部抛出了一个错误，则会被 <code>error</code> 接收并返回</p></li></ul><h3 id="run" tabindex="-1"><a class="header-anchor" href="#run" aria-hidden="true">#</a> run</h3><ul><li><p><strong>类型：</strong> <code>(...params: P[]) =&gt; void</code></p><p>手动触发 <a href="#service"><strong>Service</strong></a> 的请求, 异常内部处理，通过 <code>onError</code> 触发。</p></li></ul><h3 id="runasync" tabindex="-1"><a class="header-anchor" href="#runasync" aria-hidden="true">#</a> runAsync</h3><ul><li><p><strong>类型：</strong> <code>(...params: P[]) =&gt; Promise&lt;R&gt;</code></p><p>与 <a href="#run"><code>run</code></a> 用法一致，但返回的是 <code>Promise</code>，需要自行处理异常。</p></li></ul><h3 id="cancel" tabindex="-1"><a class="header-anchor" href="#cancel" aria-hidden="true">#</a> cancel</h3><ul><li><p><strong>类型：</strong> <code>() =&gt; void</code></p><ul><li>手动取消本次请求</li><li>停止<a href="#pollinginterval">轮询</a>功能</li></ul><div class="custom-container tip"><p class="custom-container-title">注意</p><p>这里说的取消<strong>并不是真正的停止请求</strong>，只是取消了对 <a href="#data">data</a> 的赋值以及 <a href="#loading">loading</a> 重置为 <code>false</code> 当前<strong>已发出</strong>的接口请求依旧会继续进行</p></div></li></ul><h3 id="refresh" tabindex="-1"><a class="header-anchor" href="#refresh" aria-hidden="true">#</a> refresh</h3><ul><li><p><strong>类型：</strong> <code>() =&gt; void</code></p><p>使用上一次的 <a href="#params">params</a> 重新调用 <a href="#run">run</a></p></li></ul><h3 id="refreshasync" tabindex="-1"><a class="header-anchor" href="#refreshasync" aria-hidden="true">#</a> refreshAsync</h3><ul><li><p><strong>类型：</strong> <code>() =&gt; Promise&lt;R&gt;</code></p><p>使用上一次的 <a href="#params">params</a> 重新调用 <a href="#runAsync">runAsync</a></p></li></ul><h3 id="mutate" tabindex="-1"><a class="header-anchor" href="#mutate" aria-hidden="true">#</a> mutate</h3>',24),l=(0,s._)("li",null,[(0,s._)("p",null,[(0,s._)("strong",null,"类型："),(0,s.Uk)(),(0,s._)("code",null,"(arg: (oldData: R) => R) => void | (newData: R) => void")]),(0,s._)("p",null,[(0,s.Uk)("直接修改 "),(0,s._)("a",{href:"#data"},"data"),(0,s.Uk)(" 的结果")])],-1),o=(0,s._)("strong",null,"参考：",-1),r=(0,s.Uk)("数据更改"),p=(0,s._)("h2",{id:"service",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#service","aria-hidden":"true"},"#"),(0,s.Uk)(" Service")],-1),c=(0,s._)("li",null,[(0,s._)("p",null,[(0,s._)("strong",null,"类型："),(0,s.Uk)(),(0,s._)("code",null,"(...params: P[]) => Promise<R>")])],-1),i=(0,s._)("p",null,[(0,s._)("strong",null,"详情：")],-1),u=(0,s.Uk)("用于发起获取资源的请求 ，可参考 "),d=(0,s.Uk)("数据请求"),h=(0,s.Uk)("。"),g=(0,s.uE)('<p><code>Service</code> 必须是一个返回 <code>Promise</code> 的函数。你可以借助<strong>第三方的请求库</strong>（如 <code>axios</code> ）来帮你生成一个用于发起获取资源的请求 <code>Promise</code> 函数。</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-request&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">getUser</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;api/user&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRequest</span><span class="token punctuation">(</span>getUser<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div>',2),k=(0,s._)("h2",{id:"options",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,s.Uk)(" Options")],-1),f={id:"loadingdelay",tabindex:"-1"},m=(0,s._)("a",{class:"header-anchor",href:"#loadingdelay","aria-hidden":"true"},"#",-1),_=(0,s.Uk)(" loadingDelay "),v=(0,s.uE)('<li><p><strong>类型：</strong> <code>number | Ref&lt;number&gt;</code></p></li><li><p><strong>默认值：</strong> <code>0</code></p></li><li><p><strong>详情：</strong></p><p>通过设置延迟的毫秒数，可以延迟 <a href="#loading"><strong>loading</strong></a> 变成 <code>true</code> 的时间，有效防止闪烁。</p></li>',3),b=(0,s._)("strong",null,"参考：",-1),y=(0,s.Uk)(),U=(0,s.Uk)("Loading 状态"),E=(0,s._)("li",null,null,-1),x={id:"loadingkeep",tabindex:"-1"},w=(0,s._)("a",{class:"header-anchor",href:"#loadingkeep","aria-hidden":"true"},"#",-1),W=(0,s.Uk)(" loadingKeep "),R=(0,s.uE)("<li><p><strong>类型：</strong> <code>number | Ref&lt;number&gt;</code></p></li><li><p><strong>默认值：</strong> <code>0</code></p></li><li><p><strong>详情：</strong></p><p>可以让 loading 动画保持一定的时间。</p></li>",3),A=(0,s._)("strong",null,"参考：",-1),D=(0,s.Uk)(),B=(0,s.Uk)("Loading 状态"),P={id:"pollinginterval",tabindex:"-1"},O=(0,s._)("a",{class:"header-anchor",href:"#pollinginterval","aria-hidden":"true"},"#",-1),C=(0,s.Uk)(" pollingInterval "),I=(0,s.uE)('<li><p><strong>类型：</strong> <code>number | Ref&lt;number&gt;</code></p></li><li><p><strong>默认值：</strong> <code>undefined</code></p></li><li><p><strong>详情：</strong></p><p>通过设置轮询间隔毫秒值，可以进入轮询模式，定时触发请求。可以通过 <a href="#run"><code>run</code></a> / <a href="#cancel"><code>cancel</code></a> 来 <strong>开启</strong>/<strong>停止</strong> 轮询。在 <a href="#manual"><code>manual</code></a>设置为<code>true</code> 时，需要手动执行一次 <code>run</code> 后，才开始轮询。</p><ul><li>间隔值必须大于 <code>0</code> 才会生效</li></ul></li>',3),S=(0,s._)("strong",null,"参考：",-1),F=(0,s.Uk)(),K=(0,s.Uk)("轮询"),j=(0,s._)("h3",{id:"pollingwhenhidden",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#pollingwhenhidden","aria-hidden":"true"},"#"),(0,s.Uk)(" pollingWhenHidden")],-1),T=(0,s.uE)('<li><p><strong>类型：</strong> <code>boolean</code></p></li><li><p><strong>默认值：</strong> <code>false</code></p></li><li><p><strong>详情：</strong></p><p>当 <a href="#pollingInterval"><code>pollingInterval</code></a> 大于 <code>0</code> 时才生效。默认情况下，轮询在屏幕不可见时，会暂停轮询。当设置成 <code>true</code> 时，在屏幕不可见时，轮询任务依旧会定时执行。</p></li>',3),q=(0,s._)("strong",null,"参考：",-1),z=(0,s.Uk)(),V=(0,s.Uk)("屏幕不可见时轮询"),L=(0,s._)("h3",{id:"pollingwhenoffline",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#pollingwhenoffline","aria-hidden":"true"},"#"),(0,s.Uk)(" pollingWhenOffline")],-1),H=(0,s.uE)('<li><p><strong>类型：</strong> <code>boolean</code></p></li><li><p><strong>默认值：</strong> <code>false</code></p></li><li><p><strong>详情：</strong></p><p>当 <a href="#pollingInterval"><code>pollingInterval</code></a> 大于 <code>0</code> 时才生效。默认情况下，轮询在网络不可用时，会暂停轮询。当设置成 <code>true</code> 时，在网络不可用时，轮询任务依旧会定时执行。</p></li>',3),J=(0,s._)("strong",null,"参考：",-1),N=(0,s.Uk)(),M=(0,s.Uk)("网络离线时轮询"),Y={id:"debounceinterval",tabindex:"-1"},Z=(0,s._)("a",{class:"header-anchor",href:"#debounceinterval","aria-hidden":"true"},"#",-1),G=(0,s.Uk)(" debounceInterval "),Q=(0,s.uE)("<li><p><strong>类型：</strong> <code>number | Ref&lt;number&gt;</code></p></li><li><p><strong>默认值：</strong> <code>undefined</code></p></li><li><p><strong>详情：</strong></p><p>通过设置需要延迟的毫秒数，进入防抖模式。此时如果频繁触发请求，则会以防抖策略进行请求。</p></li>",3),X=(0,s._)("strong",null,"参考：",-1),$=(0,s.Uk)(),ee=(0,s.Uk)("防抖"),ne={id:"debounceoptions",tabindex:"-1"},ae=(0,s._)("a",{class:"header-anchor",href:"#debounceoptions","aria-hidden":"true"},"#",-1),se=(0,s.Uk)(" debounceOptions "),te=(0,s.uE)('<ul><li><p><strong>类型：</strong> <code>DebounceOptions | Reactive&lt;DebounceOptions&gt;</code></p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">DebounceOptions</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n  leading<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>\n  maxWait<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n  trailing<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre></div></li><li><p><strong>默认值：</strong></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n  <span class="token literal-property property">leading</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">maxWait</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">trailing</span><span class="token operator">:</span> <span class="token boolean">true</span>\n<span class="token punctuation">}</span>\n</code></pre></div></li><li><p><strong>详情：</strong></p><ul><li><code>leading</code> (boolean): 指定在延迟开始前调用。</li><li><code>maxWait</code> (number): 设置<strong>请求方法</strong>允许被延迟的最大值。</li><li><code>trailing</code> (boolean): 指定在延迟结束后调用。</li></ul></li></ul>',1),le={id:"throttleinterval",tabindex:"-1"},oe=(0,s._)("a",{class:"header-anchor",href:"#throttleinterval","aria-hidden":"true"},"#",-1),re=(0,s.Uk)(" throttleInterval "),pe=(0,s.uE)("<li><p><strong>类型：</strong> <code>number | Ref&lt;number&gt;</code></p></li><li><p><strong>默认值：</strong> <code>undefined</code></p></li><li><p><strong>详情：</strong></p><p>通过设置需要节流的毫秒数，进入节流模式。此时如果频繁触发请求，则会以节流策略进行请求。</p></li>",3),ce=(0,s._)("strong",null,"参考：",-1),ie=(0,s.Uk)(),ue=(0,s.Uk)("节流"),de={id:"throttleoptions",tabindex:"-1"},he=(0,s._)("a",{class:"header-anchor",href:"#throttleoptions","aria-hidden":"true"},"#",-1),ge=(0,s.Uk)(" throttleOptions "),ke=(0,s.uE)('<ul><li><p><strong>类型：</strong> <code>ThrottleOptions | Reactive&lt;ThrottleOptions&gt;</code></p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">ThrottleOptions</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n  leading<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>\n  trailing<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre></div></li><li><p><strong>默认值：</strong></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n  <span class="token literal-property property">leading</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">trailing</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre></div></li><li><p><strong>详情：</strong></p><ul><li><code>leading</code> (boolean): 指定调用在节流开始前。</li><li><code>trailing</code> (boolean): 指定调用在节流结束后。</li></ul></li></ul>',1),fe={id:"refreshonwindowfocus",tabindex:"-1"},me=(0,s._)("a",{class:"header-anchor",href:"#refreshonwindowfocus","aria-hidden":"true"},"#",-1),_e=(0,s.Uk)(" refreshOnWindowFocus "),ve=(0,s._)("li",null,[(0,s._)("p",null,[(0,s._)("strong",null,"类型："),(0,s.Uk)(),(0,s._)("code",null,"boolean | Ref<boolean>")])],-1),be=(0,s._)("li",null,[(0,s._)("p",null,[(0,s._)("strong",null,"默认值："),(0,s.Uk)(),(0,s._)("code",null,"false")])],-1),ye=(0,s._)("p",null,[(0,s._)("strong",null,"详情：")],-1),Ue=(0,s.Uk)("当设置为 "),Ee=(0,s._)("code",null,"true",-1),xe=(0,s.Uk)(" 时，则在浏览器窗口触发 "),we={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/focus",target:"_blank",rel:"noopener noreferrer"},We=(0,s.Uk)("focus"),Re=(0,s.Uk)(" 和 "),Ae={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Document/visibilitychange_event",target:"_blank",rel:"noopener noreferrer"},De=(0,s.Uk)("visibilitychange"),Be=(0,s.Uk)(" 时，会重新发起请求。"),Pe=(0,s._)("strong",null,"参考：",-1),Oe=(0,s.Uk)(),Ce=(0,s.Uk)("聚焦时重新请求"),Ie={id:"refocustimespan",tabindex:"-1"},Se=(0,s._)("a",{class:"header-anchor",href:"#refocustimespan","aria-hidden":"true"},"#",-1),Fe=(0,s.Uk)(" refocusTimespan "),Ke=(0,s.uE)('<li><p><strong>类型：</strong> <code>number | Ref&lt;number&gt;</code></p></li><li><p><strong>默认值：</strong> <code>5 * 1000</code></p></li><li><p><strong>详情：</strong></p><p>当 <a href="#refreshonwindowfocus">refreshOnWindowFocus</a> 设置为 <code>true</code> 时，你可以通过设置间隔的毫秒数，来限制 <a href="#refresh"><code>refresh</code></a> 的执行间隔，默认为 5000ms</p></li>',3),je=(0,s._)("strong",null,"参考：",-1),Te=(0,s.Uk)(),qe=(0,s.Uk)("重新聚焦间隔时间"),ze=(0,s._)("h3",{id:"cachekey",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#cachekey","aria-hidden":"true"},"#"),(0,s.Uk)(" cacheKey")],-1),Ve=(0,s.uE)('<li><p><strong>类型：</strong> <code>string | (params?: P) =&gt; string</code></p></li><li><p><strong>默认值：</strong> <code>undefined</code></p></li><li><p><strong>详情：</strong></p><ul><li>我们会缓存每次请求的 <a href="#data"><code>data</code></a> , <a href="#error"><code>error</code></a> , <a href="#params"><code>params</code></a> , <a href="#loading"><code>loading</code></a></li><li>如果设置了 <code>cacheKey</code> ， VueRequest 会将当前请求数据缓存起来。当下次组件初始化时，如果有缓存数据，我们会优先返回缓存数据，然后在背后发送新请求，待新数据返回后，重新触发数据更新并更新缓存数据，也就是 <strong>SWR</strong> 的能力。</li><li>数据同步，任何时候，当我们改变其中某个 <code>cacheKey</code> 的内容时，其它相同 <code>cacheKey</code> 的数据也会同步改变。</li><li>请求 <code>Promise</code> 共享，相同的 <code>cacheKey</code> 同时只会有一个在发起请求，后发起的会共用同一个请求 <code>Promise</code>。</li></ul></li>',3),Le=(0,s._)("strong",null,"参考：",-1),He=(0,s.Uk)(),Je=(0,s.Uk)("缓存"),Ne=(0,s._)("h3",{id:"cachetime",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#cachetime","aria-hidden":"true"},"#"),(0,s.Uk)(" cacheTime")],-1),Me=(0,s.uE)("<li><p><strong>类型：</strong> <code>number</code></p></li><li><p><strong>默认值：</strong> <code>10* 60 * 1000</code></p></li><li><p><strong>详情：</strong></p><p>当开启缓存后，你可以通过设置 <code>cacheTime</code> 来告诉我们缓存的过期时间。当缓存过期后，我们会将其删除。默认为 <strong>600000 毫秒</strong>，即 10 分钟</p></li>",3),Ye=(0,s._)("strong",null,"参考：",-1),Ze=(0,s.Uk)(),Ge=(0,s.Uk)("缓存时间"),Qe=(0,s._)("h3",{id:"staletime",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#staletime","aria-hidden":"true"},"#"),(0,s.Uk)(" staleTime")],-1),Xe=(0,s.uE)("<li><p><strong>类型：</strong> <code>number</code></p></li><li><p><strong>默认值：</strong> <code>0</code></p></li><li><p><strong>详情：</strong></p><p>如果你能确保缓存下来的数据，在一定时间内不会有任何更新的，我们建议你设置一个合理的毫秒数</p><ul><li>默认为 <code>0</code>，意味着不保鲜，每次都会重新发起请求</li><li>设置为 <code>-1</code> 则意味着缓存永不过期</li></ul></li>",3),$e=(0,s._)("strong",null,"参考：",-1),en=(0,s.Uk)(),nn=(0,s.Uk)("保鲜时间"),an=(0,s.uE)('<h3 id="setcache" tabindex="-1"><a class="header-anchor" href="#setcache" aria-hidden="true">#</a> setCache</h3><ul><li><strong>类型：</strong> <code> (cacheKey: string, cacheData: CacheData) =&gt; void</code></li></ul><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">CacheData</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n  data<span class="token operator">:</span> <span class="token constant">R</span><span class="token punctuation">;</span>\n  params<span class="token operator">:</span> <span class="token constant">P</span><span class="token punctuation">;</span>\n  time<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre></div>',3),sn=(0,s._)("li",null,[(0,s._)("p",null,[(0,s._)("strong",null,"详情：")]),(0,s._)("p",null,"自定义设置缓存")],-1),tn=(0,s._)("strong",null,"参考：",-1),ln=(0,s.Uk)(),on=(0,s.Uk)("自定义缓存"),rn=(0,s._)("h3",{id:"getcache",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#getcache","aria-hidden":"true"},"#"),(0,s.Uk)(" getCache")],-1),pn=(0,s.uE)('<li><p><strong>类型：</strong> <code>(cacheKey: string) =&gt; CacheData</code></p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">CacheData</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n  data<span class="token operator">:</span> <span class="token constant">R</span><span class="token punctuation">;</span>\n  params<span class="token operator">:</span> <span class="token constant">P</span><span class="token punctuation">;</span>\n  time<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre></div></li><li><p><strong>详情：</strong></p><p>自定义读取缓存</p></li>',2),cn=(0,s._)("strong",null,"参考：",-1),un=(0,s.Uk)(),dn=(0,s.Uk)("自定义缓存"),hn={id:"errorretrycount",tabindex:"-1"},gn=(0,s._)("a",{class:"header-anchor",href:"#errorretrycount","aria-hidden":"true"},"#",-1),kn=(0,s.Uk)(" errorRetryCount "),fn=(0,s.uE)("<li><p><strong>类型：</strong> <code>number | Ref&lt;number&gt;</code></p></li><li><p><strong>默认值：</strong> <code>0</code></p></li><li><p><strong>详情：</strong></p><p>最大错误重试次数</p></li>",3),mn=(0,s._)("strong",null,"参考：",-1),_n=(0,s.Uk)(),vn=(0,s.Uk)("错误重试次数"),bn={id:"errorretryinterval",tabindex:"-1"},yn=(0,s._)("a",{class:"header-anchor",href:"#errorretryinterval","aria-hidden":"true"},"#",-1),Un=(0,s.Uk)(" errorRetryInterval "),En=(0,s._)("li",null,[(0,s._)("p",null,[(0,s._)("strong",null,"类型："),(0,s.Uk)(),(0,s._)("code",null,"number | Ref<number>")])],-1),xn=(0,s._)("li",null,[(0,s._)("p",null,[(0,s._)("strong",null,"默认值："),(0,s.Uk)(),(0,s._)("code",null,"0")])],-1),wn=(0,s._)("p",null,[(0,s._)("strong",null,"详情：")],-1),Wn=(0,s.Uk)("默认情况下，VueRequest 使用"),Rn={href:"https://en.wikipedia.org/wiki/Exponential_backoff",target:"_blank",rel:"noopener noreferrer"},An=(0,s._)("strong",null,"二进制指数退避算法",-1),Dn=(0,s.Uk)(" 来帮你计算出合适的间隔时间，你也可以通过设置 "),Bn=(0,s._)("code",null,"errorRetryInterval",-1),Pn=(0,s.Uk)(" 来覆盖默认行为"),On=(0,s._)("strong",null,"参考：",-1),Cn=(0,s.Uk)(),In=(0,s.Uk)("错误重试间隔时间"),Sn=(0,s._)("h3",{id:"manual",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#manual","aria-hidden":"true"},"#"),(0,s.Uk)(" manual")],-1),Fn=(0,s.uE)('<li><p><strong>类型：</strong> <code>boolean</code></p></li><li><p><strong>默认值：</strong> <code>false</code></p></li><li><p><strong>详情：</strong></p><p>当 <code>manual</code> 设置为 <code>true</code> 时，你需要手动触发 <a href="#run"><code>run</code></a> 或者 <a href="#runAsync"><code>runAsync</code></a> 才会发起请求</p></li>',3),Kn=(0,s._)("strong",null,"参考：",-1),jn=(0,s.Uk)(),Tn=(0,s.Uk)("手动请求"),qn=(0,s.uE)('<h3 id="defaultparams" tabindex="-1"><a class="header-anchor" href="#defaultparams" aria-hidden="true">#</a> defaultParams</h3><ul><li><p><strong>类型：</strong> <code>P[]</code></p></li><li><p><strong>默认值：</strong> <code>[]</code></p></li><li><p><strong>详情：</strong></p><p>如果 <a href="#manual"><code>manual</code></a> 设置为 <code>false</code> ，在自动执行请求的时候，将会把 <code>defaultParams</code> 作为请求参数</p></li></ul>',2),zn={id:"ready",tabindex:"-1"},Vn=(0,s._)("a",{class:"header-anchor",href:"#ready","aria-hidden":"true"},"#",-1),Ln=(0,s.Uk)(" ready "),Hn=(0,s.uE)("<li><p><strong>类型：</strong> <code>Ref&lt;boolean&gt;</code></p></li><li><p><strong>默认值：</strong> <code>true</code></p></li><li><p><strong>详情：</strong></p><p>只有当 <code>ready</code> 为 <code>true</code> 时，才会发起请求。</p><ul><li>自动模式：当 <code>manual=false</code> 时，每次 <code>ready</code> 从 <code>false</code> 变为 <code>true</code> 时，都会自动发起请求，并且会带上参数 <code>options.defaultParams</code>。</li><li>手动模式：当 <code>manual=true</code> 时，只要 <code>ready</code> 为 <code>false</code>，则无法发起请求。</li></ul></li>",3),Jn=(0,s._)("strong",null,"参考：",-1),Nn=(0,s.Uk)(),Mn=(0,s.Uk)("依赖请求"),Yn=(0,s.uE)('<h3 id="initialdata" tabindex="-1"><a class="header-anchor" href="#initialdata" aria-hidden="true">#</a> initialData</h3><ul><li><p><strong>类型：</strong> <code>R</code></p></li><li><p><strong>默认值：</strong> <code>undefined</code></p></li><li><p><strong>详情：</strong></p><p>默认的 <a href="#data"><code>data</code></a></p></li></ul><h3 id="refreshdeps" tabindex="-1"><a class="header-anchor" href="#refreshdeps" aria-hidden="true">#</a> refreshDeps</h3>',3),Zn=(0,s._)("li",null,[(0,s._)("p",null,[(0,s._)("strong",null,"类型："),(0,s.Uk)(),(0,s._)("code",null,"WatchSource<any>[]")])],-1),Gn=(0,s._)("li",null,[(0,s._)("p",null,[(0,s._)("strong",null,"默认值："),(0,s.Uk)(),(0,s._)("code",null,"[]")])],-1),Qn=(0,s._)("p",null,[(0,s._)("strong",null,"详情：")],-1),Xn=(0,s.Uk)("当 "),$n=(0,s._)("code",null,"refreshDeps",-1),ea=(0,s.Uk)(" 里面的内容发生变化时，如果没有设置 "),na=(0,s._)("a",{href:"#refreshdepsaction"},[(0,s._)("code",null,"refreshDepsAction")],-1),aa=(0,s.Uk)(", 就会触发 "),sa=(0,s._)("code",null,"refresh",-1),ta=(0,s.Uk)(" 的重新执行。其本质只是对 "),la={href:"https://v3.vuejs.org/guide/computed.html#watchers",target:"_blank",rel:"noopener noreferrer"},oa=(0,s._)("code",null,"watch",-1),ra=(0,s.Uk)(" 的封装。"),pa=(0,s.uE)('<div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token function">watch</span><span class="token punctuation">(</span>refreshDeps<span class="token punctuation">,</span> refresh<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div>',1),ca=(0,s._)("h3",{id:"refreshdepsaction",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#refreshdepsaction","aria-hidden":"true"},"#"),(0,s.Uk)(" refreshDepsAction")],-1),ia=(0,s.uE)("<li><p><strong>类型：</strong> <code>() =&gt; void</code></p></li><li><p><strong>详情：</strong></p><p>当 <code>refreshDeps</code> 里面的内容发生变化时，会被调用。<strong><code>manual=true</code> 时也会被触发</strong>。</p></li>",2),ua=(0,s._)("strong",null,"参考：",-1),da=(0,s.Uk)(),ha=(0,s.Uk)("refreshDepsAction"),ga=(0,s.uE)('<h3 id="onsuccess" tabindex="-1"><a class="header-anchor" href="#onsuccess" aria-hidden="true">#</a> onSuccess</h3><ul><li><p><strong>类型：</strong> <code>(data: R, params: P[]) =&gt; void</code></p></li><li><p><strong>详情：</strong></p><p>当 <a href="#service">Service</a> <code>resolve</code> 时触发，参数为 <a href="#data"><code>data</code></a> 和 <a href="#params"><code>params</code></a></p></li></ul><h3 id="onerror" tabindex="-1"><a class="header-anchor" href="#onerror" aria-hidden="true">#</a> onError</h3><ul><li><p><strong>类型：</strong> <code>(error: Error, params: P[]) =&gt; void</code></p></li><li><p><strong>详情：</strong></p><p>当 <a href="#service">Service</a> <code>reject</code> 时触发，参数为 <a href="#error"><code>error</code></a> 和 <a href="#params"><code>params</code></a></p></li></ul><h3 id="onbefore" tabindex="-1"><a class="header-anchor" href="#onbefore" aria-hidden="true">#</a> onBefore</h3><ul><li><p><strong>类型：</strong> <code>(params: P[]) =&gt; void</code></p></li><li><p><strong>详情：</strong></p><p><a href="#service">Service</a> 请求前触发, 参数为 <a href="#params"><code>params</code></a>.</p></li></ul><h3 id="onafter" tabindex="-1"><a class="header-anchor" href="#onafter" aria-hidden="true">#</a> onAfter</h3><ul><li><p><strong>类型：</strong> <code>(params: P[]) =&gt; void</code></p></li><li><p><strong>详情：</strong></p><p><a href="#service">Service</a> 请求结束后触发, 参数为 <a href="#params"><code>params</code></a>.</p></li></ul>',8),ka={},fa=(0,a(94407).Z)(ka,[["render",function(e,n){const a=(0,s.up)("RouterLink"),ka=(0,s.up)("Badge"),fa=(0,s.up)("OutboundLink");return(0,s.wg)(),(0,s.iD)(s.HY,null,[t,(0,s._)("ul",null,[l,(0,s._)("li",null,[(0,s._)("p",null,[o,(0,s.Wm)(a,{to:"/guide/documentation/mutation.html"},{default:(0,s.w5)((()=>[r])),_:1})])])]),p,(0,s._)("ul",null,[c,(0,s._)("li",null,[i,(0,s._)("p",null,[u,(0,s.Wm)(a,{to:"/guide/documentation/dataFetching.html"},{default:(0,s.w5)((()=>[d])),_:1}),h]),g])]),k,(0,s._)("h3",f,[m,_,(0,s.Wm)(ka,{type:"tip",text:"响应式",vertical:"top"})]),(0,s._)("ul",null,[v,(0,s._)("li",null,[(0,s._)("p",null,[b,y,(0,s.Wm)(a,{to:"/guide/documentation/loadingDelay.html#loadingdelay"},{default:(0,s.w5)((()=>[U])),_:1})])]),E]),(0,s._)("h3",x,[w,W,(0,s.Wm)(ka,{type:"tip",text:"响应式",vertical:"top"})]),(0,s._)("ul",null,[R,(0,s._)("li",null,[(0,s._)("p",null,[A,D,(0,s.Wm)(a,{to:"/guide/documentation/loadingDelay.html#loadingkeep"},{default:(0,s.w5)((()=>[B])),_:1})])])]),(0,s._)("h3",P,[O,C,(0,s.Wm)(ka,{type:"tip",text:"响应式",vertical:"top"})]),(0,s._)("ul",null,[I,(0,s._)("li",null,[(0,s._)("p",null,[S,F,(0,s.Wm)(a,{to:"/guide/documentation/polling.html"},{default:(0,s.w5)((()=>[K])),_:1})])])]),j,(0,s._)("ul",null,[T,(0,s._)("li",null,[(0,s._)("p",null,[q,z,(0,s.Wm)(a,{to:"/guide/documentation/polling.html#%E5%B1%8F%E5%B9%95%E4%B8%8D%E5%8F%AF%E8%A7%81%E6%97%B6%E8%BD%AE%E8%AF%A2"},{default:(0,s.w5)((()=>[V])),_:1})])])]),L,(0,s._)("ul",null,[H,(0,s._)("li",null,[(0,s._)("p",null,[J,N,(0,s.Wm)(a,{to:"/guide/documentation/polling.html#%E7%BD%91%E7%BB%9C%E7%A6%BB%E7%BA%BF%E6%97%B6%E8%BD%AE%E8%AF%A2"},{default:(0,s.w5)((()=>[M])),_:1})])])]),(0,s._)("h3",Y,[Z,G,(0,s.Wm)(ka,{type:"tip",text:"响应式",vertical:"top"})]),(0,s._)("ul",null,[Q,(0,s._)("li",null,[(0,s._)("p",null,[X,$,(0,s.Wm)(a,{to:"/guide/documentation/debounce.html"},{default:(0,s.w5)((()=>[ee])),_:1})])])]),(0,s._)("h3",ne,[ae,se,(0,s.Wm)(ka,{type:"tip",text:"响应式",vertical:"top"})]),te,(0,s._)("h3",le,[oe,re,(0,s.Wm)(ka,{type:"tip",text:"响应式",vertical:"top"})]),(0,s._)("ul",null,[pe,(0,s._)("li",null,[(0,s._)("p",null,[ce,ie,(0,s.Wm)(a,{to:"/guide/documentation/throttle.html"},{default:(0,s.w5)((()=>[ue])),_:1})])])]),(0,s._)("h3",de,[he,ge,(0,s.Wm)(ka,{type:"tip",text:"响应式",vertical:"top"})]),ke,(0,s._)("h3",fe,[me,_e,(0,s.Wm)(ka,{type:"tip",text:"响应式",vertical:"top"})]),(0,s._)("ul",null,[ve,be,(0,s._)("li",null,[ye,(0,s._)("p",null,[Ue,Ee,xe,(0,s._)("a",we,[We,(0,s.Wm)(fa)]),Re,(0,s._)("a",Ae,[De,(0,s.Wm)(fa)]),Be])]),(0,s._)("li",null,[(0,s._)("p",null,[Pe,Oe,(0,s.Wm)(a,{to:"/guide/documentation/refreshOnWindowFocus.html"},{default:(0,s.w5)((()=>[Ce])),_:1})])])]),(0,s._)("h3",Ie,[Se,Fe,(0,s.Wm)(ka,{type:"tip",text:"响应式",vertical:"top"})]),(0,s._)("ul",null,[Ke,(0,s._)("li",null,[(0,s._)("p",null,[je,Te,(0,s.Wm)(a,{to:"/guide/documentation/refreshOnWindowFocus.html#%E9%87%8D%E6%96%B0%E8%81%9A%E7%84%A6%E9%97%B4%E9%9A%94%E6%97%B6%E9%97%B4"},{default:(0,s.w5)((()=>[qe])),_:1})])])]),ze,(0,s._)("ul",null,[Ve,(0,s._)("li",null,[(0,s._)("p",null,[Le,He,(0,s.Wm)(a,{to:"/guide/documentation/cacheKey.html"},{default:(0,s.w5)((()=>[Je])),_:1})])])]),Ne,(0,s._)("ul",null,[Me,(0,s._)("li",null,[(0,s._)("p",null,[Ye,Ze,(0,s.Wm)(a,{to:"/guide/documentation/cacheKey.html#%E7%BC%93%E5%AD%98%E6%97%B6%E9%97%B4"},{default:(0,s.w5)((()=>[Ge])),_:1})])])]),Qe,(0,s._)("ul",null,[Xe,(0,s._)("li",null,[(0,s._)("p",null,[$e,en,(0,s.Wm)(a,{to:"/guide/documentation/cacheKey.html#%E4%BF%9D%E9%B2%9C%E6%97%B6%E9%97%B4"},{default:(0,s.w5)((()=>[nn])),_:1})])])]),an,(0,s._)("ul",null,[sn,(0,s._)("li",null,[(0,s._)("p",null,[tn,ln,(0,s.Wm)(a,{to:"/guide/documentation/cacheKey.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BC%93%E5%AD%98"},{default:(0,s.w5)((()=>[on])),_:1})])])]),rn,(0,s._)("ul",null,[pn,(0,s._)("li",null,[(0,s._)("p",null,[cn,un,(0,s.Wm)(a,{to:"/guide/documentation/cacheKey.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BC%93%E5%AD%98"},{default:(0,s.w5)((()=>[dn])),_:1})])])]),(0,s._)("h3",hn,[gn,kn,(0,s.Wm)(ka,{type:"tip",text:"响应式",vertical:"top"})]),(0,s._)("ul",null,[fn,(0,s._)("li",null,[(0,s._)("p",null,[mn,_n,(0,s.Wm)(a,{to:"/guide/documentation/errorRetry.html#%E9%87%8D%E8%AF%95%E6%AC%A1%E6%95%B0"},{default:(0,s.w5)((()=>[vn])),_:1})])])]),(0,s._)("h3",bn,[yn,Un,(0,s.Wm)(ka,{type:"tip",text:"响应式",vertical:"top"})]),(0,s._)("ul",null,[En,xn,(0,s._)("li",null,[wn,(0,s._)("p",null,[Wn,(0,s._)("a",Rn,[An,(0,s.Wm)(fa)]),Dn,Bn,Pn])]),(0,s._)("li",null,[(0,s._)("p",null,[On,Cn,(0,s.Wm)(a,{to:"/guide/documentation/errorRetry.html#%E9%87%8D%E8%AF%95%E9%97%B4%E9%9A%94%E6%97%B6%E9%97%B4"},{default:(0,s.w5)((()=>[In])),_:1})])])]),Sn,(0,s._)("ul",null,[Fn,(0,s._)("li",null,[(0,s._)("p",null,[Kn,jn,(0,s.Wm)(a,{to:"/guide/documentation/manual.html"},{default:(0,s.w5)((()=>[Tn])),_:1})])])]),qn,(0,s._)("h3",zn,[Vn,Ln,(0,s.Wm)(ka,{type:"tip",text:"响应式",vertical:"top"})]),(0,s._)("ul",null,[Hn,(0,s._)("li",null,[(0,s._)("p",null,[Jn,Nn,(0,s.Wm)(a,{to:"/guide/documentation/ready.html"},{default:(0,s.w5)((()=>[Mn])),_:1})])])]),Yn,(0,s._)("ul",null,[Zn,Gn,(0,s._)("li",null,[Qn,(0,s._)("p",null,[Xn,$n,ea,na,aa,sa,ta,(0,s._)("a",la,[oa,(0,s.Wm)(fa)]),ra]),pa])]),ca,(0,s._)("ul",null,[ia,(0,s._)("li",null,[(0,s._)("p",null,[ua,da,(0,s.Wm)(a,{to:"/guide/documentation/refreshDeps.html#refreshdepsaction"},{default:(0,s.w5)((()=>[ha])),_:1})])])]),ga],64)}]])},63535:(e,n,a)=>{a.r(n),a.d(n,{data:()=>s});const s={key:"v-744497ce",path:"/api/",title:"公共 API",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"Return Values",slug:"return-values",children:[{level:3,title:"data",slug:"data",children:[]},{level:3,title:"loading",slug:"loading",children:[]},{level:3,title:"params",slug:"params",children:[]},{level:3,title:"error",slug:"error",children:[]},{level:3,title:"run",slug:"run",children:[]},{level:3,title:"runAsync",slug:"runasync",children:[]},{level:3,title:"cancel",slug:"cancel",children:[]},{level:3,title:"refresh",slug:"refresh",children:[]},{level:3,title:"refreshAsync",slug:"refreshasync",children:[]},{level:3,title:"mutate",slug:"mutate",children:[]}]},{level:2,title:"Service",slug:"service",children:[]},{level:2,title:"Options",slug:"options",children:[{level:3,title:"loadingDelay",slug:"loadingdelay",children:[]},{level:3,title:"loadingKeep",slug:"loadingkeep",children:[]},{level:3,title:"pollingInterval",slug:"pollinginterval",children:[]},{level:3,title:"pollingWhenHidden",slug:"pollingwhenhidden",children:[]},{level:3,title:"pollingWhenOffline",slug:"pollingwhenoffline",children:[]},{level:3,title:"debounceInterval",slug:"debounceinterval",children:[]},{level:3,title:"debounceOptions",slug:"debounceoptions",children:[]},{level:3,title:"throttleInterval",slug:"throttleinterval",children:[]},{level:3,title:"throttleOptions",slug:"throttleoptions",children:[]},{level:3,title:"refreshOnWindowFocus",slug:"refreshonwindowfocus",children:[]},{level:3,title:"refocusTimespan",slug:"refocustimespan",children:[]},{level:3,title:"cacheKey",slug:"cachekey",children:[]},{level:3,title:"cacheTime",slug:"cachetime",children:[]},{level:3,title:"staleTime",slug:"staletime",children:[]},{level:3,title:"setCache",slug:"setcache",children:[]},{level:3,title:"getCache",slug:"getcache",children:[]},{level:3,title:"errorRetryCount",slug:"errorretrycount",children:[]},{level:3,title:"errorRetryInterval",slug:"errorretryinterval",children:[]},{level:3,title:"manual",slug:"manual",children:[]},{level:3,title:"defaultParams",slug:"defaultparams",children:[]},{level:3,title:"ready",slug:"ready",children:[]},{level:3,title:"initialData",slug:"initialdata",children:[]},{level:3,title:"refreshDeps",slug:"refreshdeps",children:[]},{level:3,title:"refreshDepsAction",slug:"refreshdepsaction",children:[]},{level:3,title:"onSuccess",slug:"onsuccess",children:[]},{level:3,title:"onError",slug:"onerror",children:[]},{level:3,title:"onBefore",slug:"onbefore",children:[]},{level:3,title:"onAfter",slug:"onafter",children:[]}]}],filePathRelative:"api/index.md",git:{updatedTime:1656476264e3,contributors:[{name:"John",email:"John60676@qq.com",commits:1}]}}}}]);