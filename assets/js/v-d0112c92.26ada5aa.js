"use strict";(self.webpackChunkzh=self.webpackChunkzh||[]).push([[40],{69003:(n,s,a)=>{a.r(s),a.d(s,{default:()=>o});const e=(0,a(27875).uE)('<h2 id="变更列表" tabindex="-1"><a class="header-anchor" href="#变更列表" aria-hidden="true">#</a> 变更列表</h2><ul><li><p>使用 <code>vue-demi</code> 兼容 vue2</p></li><li><p>新增自定义缓存 <code>getCache</code> 、<code>setCache</code> 和 <code>clearCache</code>。</p></li><li><p>开启缓存的情况下，设置了相同 <code>cacheKey</code> 的请求将会被缓存和复用。</p></li><li><p>新增 <code>runAsync</code> 和 <code>refreshAsync</code>，将返回 <code>Promise</code>。</p></li><li><p>新增 <code>definePlugin</code>，可以通过插件来扩展 useRequest 的功能。</p></li><li><p>节流/防抖模式下可以使用 <code>runAsync</code> 返回正常的 <code>Promise</code>。</p></li><li><p>新增 <code>useRequestProvider</code> hooks，用于注入 options 配置。</p></li><li><p>新增 <code>refreshDepsAction</code> 选项，用于自定义 <code>refreshDeps</code> 触发后的行为。</p></li><li><p><code>refreshDepsAction</code> 在 <code>manual=true</code> 时，也会被 <code>refreshDeps</code> 的改变而触发。</p></li><li><p><strong>移除 内部集成请求库，<code>Service</code> 不再支持字符或对象。</strong> <a href="#1">迁移帮助</a></p></li><li><p><strong>移除 <code>formatResult</code>。</strong> <a href="#1">迁移帮助</a></p></li><li><p><strong>移除 <code>queryKey</code>，即移除了并行模式</strong> <a href="#2">迁移帮助</a></p></li><li><p><strong><code>run</code> 不再返回 <code>Promise</code></strong> <a href="#3">迁移帮助</a></p></li><li><p><strong>请求出错时，<code>data</code> 不再会被清空</strong></p></li><li><p><strong>修改 <code>ready</code> 的逻辑</strong></p></li><li><p><strong><code>data</code> 和 <code>error</code> 改为 <code>shallowRef</code></strong></p></li><li><p><strong><code>usePagination</code> 移除了 <code>reload</code> 方法和 <code>reloading</code>。如需要对应的需求，可自行实现。</strong></p></li><li><p><strong>移除了 <code>RequestConfig</code> 组件</strong> <a href="#4">迁移帮助</a></p></li><li><p><strong>重构了<code>useLoadMore</code>，具体 API 可查看详情</strong> <a href="#useloadmore-api">API 说明</a></p></li><li><p><strong><code>cacheKey</code> 支持传入函数: <code>cacheKey: (params?: P) =&gt; string</code></strong></p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token function">useRequest</span><span class="token punctuation">(</span>getUser<span class="token punctuation">,</span><span class="token punctuation">{</span>\n  cacheKey<span class="token operator">:</span> <span class="token punctuation">(</span>params<span class="token operator">?</span><span class="token operator">:</span><span class="token constant">P</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">string</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 初始化时，params 会为 <span class="token keyword">undefined</span>，需要手动判断并返回一个空字符串 <span class="token operator">--</span><span class="token operator">&gt;</span>\n    <span class="token keyword">if</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">user-key-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>params<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> <span class="token string">&#39;&#39;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div></li><li><p>部分<code>options</code> 支持响应式，如下所示</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">ReactivityOptions</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n  loadingDelay<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> Ref<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>\n  pollingInterval<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> Ref<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>\n  debounceInterval<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> Ref<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>\n  debounceOptions<span class="token operator">:</span> DebounceOptions <span class="token operator">|</span> Reactive<span class="token operator">&lt;</span>DebounceOptions<span class="token operator">&gt;</span><span class="token punctuation">;</span>\n  throttleInterval<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> Ref<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>\n  throttleOptions<span class="token operator">:</span> ThrottleOptions <span class="token operator">|</span> Reactive<span class="token operator">&lt;</span>ThrottleOptions<span class="token operator">&gt;</span><span class="token punctuation">;</span>\n  refreshOnWindowFocus<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">|</span> Ref<span class="token operator">&lt;</span><span class="token builtin">boolean</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>\n  refocusTimespan<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> Ref<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>\n  errorRetryCount<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> Ref<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>\n  errorRetryInterval<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> Ref<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre></div></li></ul><h2 id="迁移帮助" tabindex="-1"><a class="header-anchor" href="#迁移帮助" aria-hidden="true">#</a> 迁移帮助</h2><ol><li><code>Service</code> 不再支持字符或对象。期望用户可以根据其他第三方请求库进行封装（如 <code>axios</code>），只要提供 <code>Promise</code> 即可 <a name="1"></a></li></ol><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">getUser</span> <span class="token operator">=</span> <span class="token parameter">userName</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;api/user&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token literal-property property">name</span><span class="token operator">:</span> userName<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token function">useRequest</span><span class="token punctuation">(</span>getUser<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><ol><li>移除 <code>formatResult</code>。期望用户自行在 <code>Service</code> 中返回最终格式的数据。 <a name="1"></a></li></ol><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">getUser</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> results <span class="token operator">=</span> <span class="token keyword">await</span> axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;api/user&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token comment">// Process the final data here</span>\n  <span class="token keyword">return</span> results<span class="token punctuation">.</span>data<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre></div><ol start="2"><li><p>移除 <code>queryKey</code>，即移除了并行模式。期望将每个请求动作和 UI 封装为一个组件，而不是把所有请求都放到父级。 <a name="2"></a></p></li><li><p><code>run</code> 不再返回 <code>Promise</code>。直接用 <code>runAsync</code> 替代原本的 <code>run</code>。 <a name="3"></a></p></li><li><p>可自行通过 <code>useRequestProvider</code> 封装 。<a name="4"></a></p></li></ol>',8),t={},o=(0,a(94407).Z)(t,[["render",function(n,s){return e}]])},47750:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-d0112c92",path:"/guide/migration.html",title:"从 v1 迁移",lang:"zh-CN",frontmatter:{title:"从 v1 迁移",head:[["meta",{name:"og:title",content:"从 v1 迁移 - VueRequest"}]]},excerpt:"",headers:[{level:2,title:"变更列表",slug:"变更列表",children:[]},{level:2,title:"迁移帮助",slug:"迁移帮助",children:[]}],filePathRelative:"guide/migration.md",git:{updatedTime:1655967953e3,contributors:[{name:"John",email:"John60676@qq.com",commits:1}]}}}}]);