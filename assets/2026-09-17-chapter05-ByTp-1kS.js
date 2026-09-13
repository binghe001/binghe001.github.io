import{C as e,E as t,S as n,b as r}from"./app-DsvMluML.js";var i=JSON.parse(`{"path":"/md/zsxq/project/ai/zonghe/2026-09-17-chapter05.html","title":"智能成语挑战赛项目","lang":"zh-CN","frontmatter":{"title":"智能成语挑战赛项目","pay":"https://articles.zsxq.com/id_7gw9caqh1ww2.html"},"git":{"updatedTime":1789313818000,"contributors":[{"name":"binghe001","username":"binghe001","email":"“1028386804@qq.com”","commits":1,"url":"https://github.com/binghe001"}],"changelog":[{"hash":"aa7855cb30ee1ed1dbb73ac46871c66089cce83d","time":1789313818000,"email":"“1028386804@qq.com”","author":"binghe001","message":"feature: 支持渲染mermaid"}]},"filePathRelative":"md/zsxq/project/ai/zonghe/2026-09-17-chapter05.md"}`),a={name:`2026-09-17-chapter05.md`};function o(r,i,a,o,s,c){return t(),n(`div`,null,[...i[0]||=[e(`<h1 id="基于ai的智能成语挑战赛项目完结" tabindex="-1"><a class="header-anchor" href="#基于ai的智能成语挑战赛项目完结"><span>基于AI的智能成语挑战赛项目完结</span></a></h1><p>作者：冰河 <br>星球：<a href="http://m6z.cn/6aeFbs" target="_blank" rel="noopener noreferrer">http://m6z.cn/6aeFbs</a><br>博客：<a href="https://binghe.gitcode.host" target="_blank" rel="noopener noreferrer">https://binghe.gitcode.host</a><br>文章汇总：<a href="https://binghe.gitcode.host/md/all/all.html" target="_blank" rel="noopener noreferrer">https://binghe.gitcode.host/md/all/all.html</a><br>源码获取地址：<a href="https://t.zsxq.com/0dhvFs5oR" target="_blank" rel="noopener noreferrer">https://t.zsxq.com/0dhvFs5oR</a></p><blockquote><p>沉淀，成长，突破，帮助他人，成就自我。</p></blockquote><p><strong>大家好，我是冰河~~</strong></p><h2 id="一、前言" tabindex="-1"><a class="header-anchor" href="#一、前言"><span>一、前言</span></a></h2><p>在完成《<a href="https://articles.zsxq.com/id_44gao6eti511.html" target="_blank" rel="noopener noreferrer">多轮AI智能对话系统</a>》项目后，冰河又要带着大家搞新项目了，这也是 <strong>冰河技术</strong> 知识星球继《<a href="https://articles.zsxq.com/id_xn1wzdt73273.html" target="_blank" rel="noopener noreferrer">一站式AI智能平台</a>》、《<a href="https://articles.zsxq.com/id_6z4v8x6mkbbo.html" target="_blank" rel="noopener noreferrer">AI智能客服系统</a>》、《<a href="https://articles.zsxq.com/id_udbbmkg7zmz5.html" target="_blank" rel="noopener noreferrer">AI智能问答系统</a>》、《<a href="https://articles.zsxq.com/id_7f7wo3mi8cpi.html" target="_blank" rel="noopener noreferrer">高性能Redis组件</a>》、《<a href="https://articles.zsxq.com/id_qphoao81fc48.html" target="_blank" rel="noopener noreferrer">实战AI大模型</a>》、《<a href="https://mp.weixin.qq.com/s/wUtCJ_WpNkRow_xEnDJajw" target="_blank" rel="noopener noreferrer">手写高性能脱敏组件</a>》、《<a href="https://mp.weixin.qq.com/s/xJo-TIa7wob3OVShXZCFgQ" target="_blank" rel="noopener noreferrer">手写线程池</a>》、《<a href="https://articles.zsxq.com/id_tx01uwlh582w.html" target="_blank" rel="noopener noreferrer">手写高性能SQL引擎</a>》、<a href="https://mp.weixin.qq.com/s/7OXf9DD5ATtZPiLaujFnHQ" target="_blank" rel="noopener noreferrer">《手写高性能Polaris网关》</a>、<a href="https://mp.weixin.qq.com/s/7DkT5hWw8XHqqWV3JkX7pg" target="_blank" rel="noopener noreferrer">《手写高性能RPC》</a>、 <a href="https://mp.weixin.qq.com/s/FwUR0jSaaSqyOc_xNhaKxw" target="_blank" rel="noopener noreferrer">《Seckill秒杀系统》</a> 和<a href="https://mp.weixin.qq.com/s/i09JzlSsYmGQlXvbSFjCbA" target="_blank" rel="noopener noreferrer">《分布式IM即时通讯系统》</a>、《<a href="https://articles.zsxq.com/id_zuv6si9ztzb2.html" target="_blank" rel="noopener noreferrer">手写高性能熔断组件</a>》、《<a href="https://articles.zsxq.com/id_3550o56rw2uz.html" target="_blank" rel="noopener noreferrer">手写高性能监控组件</a>》、《<a href="https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzg4MjU0OTM1OA==&amp;action=getalbum&amp;album_id=2337104419664084992&amp;scene=173&amp;from_msgid=2247500059&amp;from_itemidx=1&amp;count=3&amp;nolastread=1#wechat_redirect" target="_blank" rel="noopener noreferrer">简易商城脚手架</a>》等诸多项目后，又一个带着大家从零开始手写的AI大模型项目。星球其他项目与专栏，大家可移步到冰河的个人站点：<a href="https://binghe.gitcode.host" target="_blank" rel="noopener noreferrer">https://binghe.gitcode.host</a> 进行查看。</p><div><div align="center"><img src="https://binghe.site/images/project/gateway/2024-05-19-001.png?raw=true" width="30%"><br></div></div><p>没错，冰河这次已经撸完了这个项目，你要做的，就是跟着这篇文章的核心内容，对照着代码自己手撸一遍。</p><h2 id="二、项目背景" tabindex="-1"><a class="header-anchor" href="#二、项目背景"><span>二、项目背景</span></a></h2><h3 id="_2-1-为什么要做这个项目" tabindex="-1"><a class="header-anchor" href="#_2-1-为什么要做这个项目"><span>2.1 为什么要做这个项目？</span></a></h3><p>古人云：&quot;书山有路勤为径，学海无涯苦作舟&quot;，但如果你在学编程的路上碰壁了怎么办？别担心，我们用AI带你&quot;乘风破浪&quot;！这个项目不是来教你怎么背成语的，而是来教你<strong>怎么用Spring AI大模型 API来开发智能应用</strong>的！是的，你没看错，这就是一个集游戏、学习、技术于一体的项目——这就是星球要带你玩的新花样！</p><h3 id="_2-2-现实痛点" tabindex="-1"><a class="header-anchor" href="#_2-2-现实痛点"><span>2.2 现实痛点</span></a></h3><p>你有没有想过：</p><ol><li>想玩成语接龙，但找不到AI对手</li><li>想学习成语，但不想啃枯燥的字典</li><li>想实践Spring AI API调用，但不想从Hello World开始</li></ol><p>于是就有了这个项目！</p><h2 id="三、技术选型" tabindex="-1"><a class="header-anchor" href="#三、技术选型"><span>三、技术选型</span></a></h2><table><thead><tr><th>技术</th><th>选型理由</th></tr></thead><tbody><tr><td><strong>Spring Boot</strong></td><td>快速开发的必备神器，省去配置烦恼</td></tr><tr><td><strong>Spring AI</strong></td><td>官方AI框架，集成大模型如DeepSeek</td></tr><tr><td><strong>JPA + H2</strong></td><td>数据库ORM方案，H2内存数据库，开箱即用</td></tr><tr><td><strong>Thymeleaf</strong></td><td>服务端渲染，轻量级Web界面</td></tr><tr><td><strong>DeepSeek API</strong></td><td>性价比超高的大模型，比GPT便宜多了</td></tr></tbody></table><p>所以，这个项目不仅仅是一个成语接龙游戏，更是一个完整的学习案例。通过这个项目，你可以学到：</p><ul><li><p><strong>Spring Boot开发</strong>：快速搭建Web应用</p></li><li><p><strong>Spring AI集成</strong>：如何调用大模型API</p></li><li><p><strong>分层架构设计</strong>：Controller-Service-DAO模式</p></li><li><p><strong>异常处理与降级</strong>：提高系统健壮性</p></li><li><p><strong>性能优化</strong>：数据库索引、缓存策略</p></li><li><p><strong>工程化实践</strong>：代码规范、日志记录、测试</p></li></ul><p><strong>推荐学习路径如下</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">入门阶段</span>
<span class="line">  ↓</span>
<span class="line">1. Spring Boot基础</span>
<span class="line">2. RESTful API开发</span>
<span class="line">3. Thymeleaf模板引擎</span>
<span class="line">  ↓</span>
<span class="line">进阶阶段</span>
<span class="line">  ↓</span>
<span class="line">1. Spring Data JPA</span>
<span class="line">2. 数据库设计</span>
<span class="line">3. 异常处理与日志</span>
<span class="line">  ↓</span>
<span class="line">高级阶段</span>
<span class="line">  ↓</span>
<span class="line">1. Spring AI集成</span>
<span class="line">2. 限流降级策略</span>
<span class="line">3. 性能优化</span>
<span class="line">4. 架构设计</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、项目亮点" tabindex="-1"><a class="header-anchor" href="#四、项目亮点"><span>四、项目亮点</span></a></h2><p>项目核心亮点</p><h3 id="_4-1-双模式游戏体验" tabindex="-1"><a class="header-anchor" href="#_4-1-双模式游戏体验"><span>4.1 双模式游戏体验</span></a></h3><ul><li><strong>控制台模式</strong>：适合喜欢简单直接的玩家</li><li><strong>Web模式</strong>：现代化的用户界面，视觉效果更佳</li><li><strong>快速切换</strong>：在控制台输入<code>web</code>即可无缝切换</li></ul><h3 id="_4-2-智能ai对手" tabindex="-1"><a class="header-anchor" href="#_4-2-智能ai对手"><span>4.2 智能AI对手</span></a></h3><ul><li><strong>本地词库优先</strong>：响应速度快，无需等待API</li><li><strong>AI智能补充</strong>：本地找不到时调用DeepSeek API</li><li><strong>自动学习</strong>：AI生成的成语自动保存到本地词库</li><li><strong>多难度适配</strong>：简单、中等、困难三种模式</li></ul><h3 id="_4-3-完善的游戏机制" tabindex="-1"><a class="header-anchor" href="#_4-3-完善的游戏机制"><span>4.3 完善的游戏机制</span></a></h3><ul><li><strong>积分系统</strong>：根据难度获得不同积分</li><li><strong>时间限制</strong>：中等60秒、困难30秒</li><li><strong>失败惩罚</strong>：连续失败3次游戏结束</li><li><strong>获胜条件</strong>：连续成功10次即获胜</li></ul><h3 id="_4-4-模块化架构" tabindex="-1"><a class="header-anchor" href="#_4-4-模块化架构"><span>4.4 模块化架构</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">┌─────────────────────────────────────────────┐</span>
<span class="line">│  Controller Layer (展示层)                    │</span>
<span class="line">│  ├─ Console Controller                       │</span>
<span class="line">│  ├─ Web Controller                           │</span>
<span class="line">│  └─ Info Controller                          │</span>
<span class="line">├─────────────────────────────────────────────┤</span>
<span class="line">│  Service Layer (业务层)                       │</span>
<span class="line">│  ├─ Game Service                             │</span>
<span class="line">│  └─ AI Service                               │</span>
<span class="line">├─────────────────────────────────────────────┤</span>
<span class="line">│  DAO Layer (数据访问层)                       │</span>
<span class="line">│  └─ Idiom DAO                                │</span>
<span class="line">├─────────────────────────────────────────────┤</span>
<span class="line">│  Persistence Layer (持久层)                   │</span>
<span class="line">│  ├─ Entity (SpringAIGame)                    │</span>
<span class="line">│  ├─ Database (H2)                            │</span>
<span class="line">│  └─ External API (DeepSeek)                  │</span>
<span class="line">└─────────────────────────────────────────────┘</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五、学习价值" tabindex="-1"><a class="header-anchor" href="#五、学习价值"><span>五、学习价值</span></a></h2><h3 id="_5-1-对于初学者" tabindex="-1"><a class="header-anchor" href="#_5-1-对于初学者"><span>5.1 对于初学者</span></a></h3><ol><li><strong>完整项目结构</strong>：从零开始，学会如何组织代码</li><li><strong>分层架构</strong>：理解MVC设计模式</li><li><strong>配置管理</strong>：学会使用YAML配置文件</li><li><strong>异常处理</strong>：学会如何优雅地处理异常</li></ol><h3 id="_5-2-对于进阶者" tabindex="-1"><a class="header-anchor" href="#_5-2-对于进阶者"><span>5.2 对于进阶者</span></a></h3><ol><li><strong>AI集成</strong>：学习Spring AI与大模型API的集成</li><li><strong>高并发设计</strong>：限流、降级、缓存策略</li><li><strong>性能优化</strong>：数据库索引、查询优化</li><li><strong>可扩展性</strong>：设计易于扩展的架构</li></ol><h3 id="_5-3-对于架构师" tabindex="-1"><a class="header-anchor" href="#_5-3-对于架构师"><span>5.3 对于架构师</span></a></h3><ol><li><strong>系统设计</strong>：从需求到架构的完整设计过程</li><li><strong>技术选型</strong>：根据场景选择合适的技术</li><li><strong>容错设计</strong>：多级降级、熔断机制</li><li><strong>监控体系</strong>：日志、监控、告警</li></ol><h2 id="六、学习目标" tabindex="-1"><a class="header-anchor" href="#六、学习目标"><span>六、学习目标</span></a></h2><p>完成这个项目后，大家将掌握：</p><h3 id="_6-1-技术技能" tabindex="-1"><a class="header-anchor" href="#_6-1-技术技能"><span>6.1 技术技能</span></a></h3><ul><li>Spring Boot项目搭建与配置</li><li>Spring AI集成与DeepSeek API调用</li><li>JPA/H2数据库操作与数据加载</li><li>RESTful API设计与实现</li><li>Thymeleaf模板引擎使用</li><li>控制台与Web双模式实现</li><li>Session管理与会话状态维护</li><li>时间限制与游戏规则实现</li></ul><h3 id="_6-2-业务能力" tabindex="-1"><a class="header-anchor" href="#_6-2-业务能力"><span>6.2 业务能力</span></a></h3><ul><li>成语接龙游戏规则设计</li><li>多难度模式设计（简单/中等/困难）</li><li>积分系统设计</li><li>限流降级策略（基于Spring AI能力）</li><li>数据库设计与建表SQL</li><li>异常处理与容错机制</li></ul><h3 id="_6-3-思维提升" tabindex="-1"><a class="header-anchor" href="#_6-3-思维提升"><span>6.3 思维提升</span></a></h3><ul><li>从零设计完整游戏系统</li><li>AI能力与业务场景结合</li><li>高并发思维（虽然当前项目小，但架构要能扛住）</li><li>面向对象设计思想</li><li>架构可扩展性思考</li></ul><h2 id="七、技术架构" tabindex="-1"><a class="header-anchor" href="#七、技术架构"><span>七、技术架构</span></a></h2><h3 id="_7-1-设计模式应用" tabindex="-1"><a class="header-anchor" href="#_7-1-设计模式应用"><span>7.1 设计模式应用</span></a></h3><table><thead><tr><th>设计模式</th><th>应用位置</th><th>作用</th></tr></thead><tbody><tr><td><strong>Repository模式</strong></td><td>SpringAIGameDao</td><td>封装数据访问逻辑</td></tr><tr><td><strong>Service模式</strong></td><td>SpringAIGameService</td><td>封装业务逻辑</td></tr><tr><td><strong>Controller模式</strong></td><td>Controllers</td><td>接收请求，响应结果</td></tr><tr><td><strong>Strategy模式</strong></td><td>Difficulty枚举</td><td>不同难度策略</td></tr><tr><td><strong>Template方法</strong></td><td>PromptTemplate</td><td>AI提示词模板</td></tr></tbody></table><h3 id="_7-2-技术栈总结" tabindex="-1"><a class="header-anchor" href="#_7-2-技术栈总结"><span>7.2 技术栈总结</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">后端框架</span>
<span class="line">├─ Spring Boot 3.x</span>
<span class="line">├─ Spring AI</span>
<span class="line">├─ Spring Data JPA</span>
<span class="line">├─ Spring MVC</span>
<span class="line">└─ Spring Framework</span>
<span class="line"></span>
<span class="line">数据库</span>
<span class="line">├─ H2 (内存数据库)</span>
<span class="line">└─ JPA/Hibernate</span>
<span class="line"></span>
<span class="line">AI模型</span>
<span class="line">└─ DeepSeek API (兼容OpenAI格式)</span>
<span class="line"></span>
<span class="line">模板引擎</span>
<span class="line">└─ Thymeleaf</span>
<span class="line"></span>
<span class="line">前端技术</span>
<span class="line">├─ HTML5</span>
<span class="line">├─ CSS3</span>
<span class="line">└─ JavaScript</span>
<span class="line"></span>
<span class="line">构建工具</span>
<span class="line">└─ Maven</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="八、项目架构" tabindex="-1"><a class="header-anchor" href="#八、项目架构"><span>八、项目架构</span></a></h2><h3 id="_8-1-整体类结构图" tabindex="-1"><a class="header-anchor" href="#_8-1-整体类结构图"><span>8.1 整体类结构图</span></a></h3><div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre><code class="language-mermaid"><span class="line"><span class="token keyword">classDiagram</span></span>
<span class="line">    <span class="token keyword">class</span> Client <span class="token punctuation">{</span></span>
<span class="line">        &lt;&lt;User Interface&gt;&gt;</span>
<span class="line">        +Console</span>
<span class="line">        +Web Browser</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">class</span> SpringAIWebController <span class="token punctuation">{</span></span>
<span class="line">        &lt;&lt;Controller&gt;&gt;</span>
<span class="line">        -SpringAIGameService service</span>
<span class="line">        +showGamePage<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        +startGame<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        +playGame<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        +changeDifficulty<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        +resetGame<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">class</span> SpringAIConsoleController <span class="token punctuation">{</span></span>
<span class="line">        &lt;&lt;Controller&gt;&gt;</span>
<span class="line">        -SpringAIGameService service</span>
<span class="line">        -Scanner scanner</span>
<span class="line">        +startConsoleGame<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        +showHelp<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        +showStatus<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">class</span> SpringAIInfoController <span class="token punctuation">{</span></span>
<span class="line">        &lt;&lt;Controller&gt;&gt;</span>
<span class="line">        +getAppInfo<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        +getApiConfig<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">class</span> SpringAIGameService <span class="token punctuation">{</span></span>
<span class="line">        &lt;&lt;Service Layer&gt;&gt;</span>
<span class="line">        -SpringAIGameDao dao</span>
<span class="line">        -SpringAIIntelligentService aiService</span>
<span class="line">        -int score</span>
<span class="line">        -Difficulty difficulty</span>
<span class="line">        +getAiResponse<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        +validateUserIdiom<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        +resetGame<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        +getDifficulty<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        +getScore<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">class</span> SpringAIIntelligentService <span class="token punctuation">{</span></span>
<span class="line">        &lt;&lt;AI Service&gt;&gt;</span>
<span class="line">        -ChatModel chatModel</span>
<span class="line">        +validateIdiomWithAI<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        +getAIIdiomResponse<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        +getIdiomExplanation<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        +getIdiomStory<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">class</span> SpringAIGameDao <span class="token punctuation">{</span></span>
<span class="line">        &lt;&lt;Data Access Layer&gt;&gt;</span>
<span class="line">        +findByFirstChar<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        +findByLastChar<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        +findByName<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        +findRandomIdioms<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        +findRhymeIdioms<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">class</span> SpringAIGame <span class="token punctuation">{</span></span>
<span class="line">        &lt;&lt;Entity&gt;&gt;</span>
<span class="line">        -Long id</span>
<span class="line">        -String name</span>
<span class="line">        -String pinyin</span>
<span class="line">        -String explanation</span>
<span class="line">        -char firstChar</span>
<span class="line">        -char lastChar</span>
<span class="line">        +getName<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        +setName<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        +getFirstChar<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">class</span> SpringAIGameDataLoader <span class="token punctuation">{</span></span>
<span class="line">        &lt;&lt;Component&gt;&gt;</span>
<span class="line">        +loadData<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">class</span> SpringAIConfig <span class="token punctuation">{</span></span>
<span class="line">        &lt;&lt;Configuration&gt;&gt;</span>
<span class="line">        +aiConfigInfo<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">class</span> SpringAIAppConfig <span class="token punctuation">{</span></span>
<span class="line">        &lt;&lt;Configuration&gt;&gt;</span>
<span class="line">        -GameConfig game</span>
<span class="line">        -DataConfig data</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">class</span> DeepSeekAPI <span class="token punctuation">{</span></span>
<span class="line">        &lt;&lt;External API&gt;&gt;</span>
<span class="line">        -OpenAICompatible API</span>
<span class="line">        +chat<span class="token text string">(messages)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">class</span> H2Database <span class="token punctuation">{</span></span>
<span class="line">        &lt;&lt;Database&gt;&gt;</span>
<span class="line">        -JPA EntityManager</span>
<span class="line">        -id<span class="token operator">:</span> Long</span>
<span class="line">        -name<span class="token operator">:</span> String</span>
<span class="line">        -pinyin<span class="token operator">:</span> String</span>
<span class="line">        -explanation<span class="token operator">:</span> String</span>
<span class="line">        -firstChar<span class="token operator">:</span> char</span>
<span class="line">        -lastChar<span class="token operator">:</span> char</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    Client <span class="token arrow operator">--&gt;</span> SpringAIWebController <span class="token operator">:</span> HTTP/WebSocket</span>
<span class="line">    Client <span class="token arrow operator">--&gt;</span> SpringAIConsoleController <span class="token operator">:</span> I/O</span>
<span class="line">    SpringAIWebController <span class="token arrow operator">--&gt;</span> SpringAIGameService <span class="token operator">:</span> 业务逻辑</span>
<span class="line">    SpringAIConsoleController <span class="token arrow operator">--&gt;</span> SpringAIGameService <span class="token operator">:</span> 业务逻辑</span>
<span class="line">    SpringAIGameService <span class="token arrow operator">--&gt;</span> SpringAIIntelligentService <span class="token operator">:</span> AI调用</span>
<span class="line">    SpringAIGameService <span class="token arrow operator">--&gt;</span> SpringAIGameDao <span class="token operator">:</span> 数据访问</span>
<span class="line">    SpringAIGameDao <span class="token arrow operator">--&gt;</span> SpringAIGame <span class="token operator">:</span> JPA实体</span>
<span class="line">    SpringAIGameDao <span class="token arrow operator">--&gt;</span> H2Database <span class="token operator">:</span> JDBC</span>
<span class="line">    SpringAIIntelligentService <span class="token arrow operator">--&gt;</span> DeepSeekAPI <span class="token operator">:</span> HTTP REST</span>
<span class="line">    SpringAIGameService <span class="token arrow operator">--&gt;</span> SpringAIGameDataLoader <span class="token operator">:</span> 数据加载</span>
<span class="line">    SpringAIAppConfig <span class="token arrow operator">--&gt;</span> SpringAIConfig <span class="token operator">:</span> 配置管理</span>
<span class="line"></span>
<span class="line">    <span class="token keyword">style</span> Client <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#E3F2FD<span class="token punctuation">,</span><span class="token property">stroke</span><span class="token operator">:</span>#2196F3<span class="token punctuation">,</span><span class="token property">color</span><span class="token operator">:</span>#0D47A1</span></span>
<span class="line">    <span class="token keyword">style</span> SpringAIWebController <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#BBDEFB<span class="token punctuation">,</span><span class="token property">stroke</span><span class="token operator">:</span>#2196F3<span class="token punctuation">,</span><span class="token property">color</span><span class="token operator">:</span>#0D47A1</span></span>
<span class="line">    <span class="token keyword">style</span> SpringAIConsoleController <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#BBDEFB<span class="token punctuation">,</span><span class="token property">stroke</span><span class="token operator">:</span>#2196F3<span class="token punctuation">,</span><span class="token property">color</span><span class="token operator">:</span>#0D47A1</span></span>
<span class="line">    <span class="token keyword">style</span> SpringAIInfoController <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#BBDEFB<span class="token punctuation">,</span><span class="token property">stroke</span><span class="token operator">:</span>#2196F3<span class="token punctuation">,</span><span class="token property">color</span><span class="token operator">:</span>#0D47A1</span></span>
<span class="line">    <span class="token keyword">style</span> SpringAIGameService <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#C8E6C9<span class="token punctuation">,</span><span class="token property">stroke</span><span class="token operator">:</span>#4CAF50<span class="token punctuation">,</span><span class="token property">color</span><span class="token operator">:</span>#1B5E20</span></span>
<span class="line">    <span class="token keyword">style</span> SpringAIIntelligentService <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#C8E6C9<span class="token punctuation">,</span><span class="token property">stroke</span><span class="token operator">:</span>#4CAF50<span class="token punctuation">,</span><span class="token property">color</span><span class="token operator">:</span>#1B5E20</span></span>
<span class="line">    <span class="token keyword">style</span> SpringAIGameDao <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#C8E6C9<span class="token punctuation">,</span><span class="token property">stroke</span><span class="token operator">:</span>#4CAF50<span class="token punctuation">,</span><span class="token property">color</span><span class="token operator">:</span>#1B5E20</span></span>
<span class="line">    <span class="token keyword">style</span> SpringAIGame <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#F8BBD0<span class="token punctuation">,</span><span class="token property">stroke</span><span class="token operator">:</span>#E91E63<span class="token punctuation">,</span><span class="token property">color</span><span class="token operator">:</span>#880E4F</span></span>
<span class="line">    <span class="token keyword">style</span> SpringAIGameDataLoader <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#FFF9C4<span class="token punctuation">,</span><span class="token property">stroke</span><span class="token operator">:</span>#FFEB3B<span class="token punctuation">,</span><span class="token property">color</span><span class="token operator">:</span>#F57F17</span></span>
<span class="line">    <span class="token keyword">style</span> SpringAIConfig <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#FFF9C4<span class="token punctuation">,</span><span class="token property">stroke</span><span class="token operator">:</span>#FFEB3B<span class="token punctuation">,</span><span class="token property">color</span><span class="token operator">:</span>#F57F17</span></span>
<span class="line">    <span class="token keyword">style</span> SpringAIAppConfig <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#FFF9C4<span class="token punctuation">,</span><span class="token property">stroke</span><span class="token operator">:</span>#FFEB3B<span class="token punctuation">,</span><span class="token property">color</span><span class="token operator">:</span>#F57F17</span></span>
<span class="line">    <span class="token keyword">style</span> DeepSeekAPI <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#FFCCBC<span class="token punctuation">,</span><span class="token property">stroke</span><span class="token operator">:</span>#FF5722<span class="token punctuation">,</span><span class="token property">color</span><span class="token operator">:</span>#BF360C</span></span>
<span class="line">    <span class="token keyword">style</span> H2Database <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#E1BEE7<span class="token punctuation">,</span><span class="token property">stroke</span><span class="token operator">:</span>#9C27B0<span class="token punctuation">,</span><span class="token property">color</span><span class="token operator">:</span>#4A148C</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-2-架构分层说明" tabindex="-1"><a class="header-anchor" href="#_8-2-架构分层说明"><span>8.2 架构分层说明</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">┌─────────────────────────────────────────────────────────┐</span>
<span class="line">│                    Presentation Layer                     │</span>
<span class="line">│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐   │</span>
<span class="line">│  │ Web Controller│  │Console Controller│  │ Info Controller│   │</span>
<span class="line">│  └──────┬───────┘  └──────┬────────┘  └──────┬───────┘   │</span>
<span class="line">└─────────┼────────────────┼─────────────────┼────────────┘</span>
<span class="line">          │                │                 │</span>
<span class="line">┌─────────┼────────────────┼─────────────────┼────────────┐</span>
<span class="line">│      Business Logic Layer                            │</span>
<span class="line">│  ┌────────────────────────────────────────────────┐   │</span>
<span class="line">│  │            SpringAIGameService                 │   │</span>
<span class="line">│  │  - 游戏规则验证                                   │   │</span>
<span class="line">│  │  - 难度控制                                     │   │</span>
<span class="line">│  │  - 积分计算                                     │   │</span>
<span class="line">│  │  - 时间管理                                     │   │</span>
<span class="line">│  └──────────────┬─────────────────────────────────┘   │</span>
<span class="line">│                 │                                       │</span>
<span class="line">│  ┌──────────────┴─────────────────────────────────┐   │</span>
<span class="line">│  │      SpringAIIntelligentService                │   │</span>
<span class="line">│  │  - AI成语验证                                   │   │</span>
<span class="line">│  │  - AI成语接龙                                   │   │</span>
<span class="line">│  │  - 成语解释获取                                 │   │</span>
<span class="line">│  └──────────────┬─────────────────────────────────┘   │</span>
<span class="line">└─────────────────┼─────────────────────────────────────┘</span>
<span class="line">                  │</span>
<span class="line">┌─────────────────┼─────────────────────────────────────┐</span>
<span class="line">│         Data Access Layer                            │</span>
<span class="line">│  ┌────────────────────────────────────────────────┐   │</span>
<span class="line">│  │            SpringAIGameDao                     │   │</span>
<span class="line">│  │  - 成语查询                                     │   │</span>
<span class="line">│  │  - 随机成语                                     │   │</span>
<span class="line">│  │  - 押韵查询                                     │   │</span>
<span class="line">│  └──────────────┬─────────────────────────────────┘   │</span>
<span class="line">│                 │                                       │</span>
<span class="line">│  ┌──────────────┴─────────────────────────────────┐   │</span>
<span class="line">│  │         SpringAIGameDataLoader                  │   │</span>
<span class="line">│  │  - CSV数据加载                                   │   │</span>
<span class="line">│  │  - 数据库初始化                                 │   │</span>
<span class="line">│  └────────────────────────────────────────────────┘   │</span>
<span class="line">└─────────────────┼─────────────────────────────────────┘</span>
<span class="line">                  │</span>
<span class="line">┌─────────────────┼─────────────────────────────────────┐</span>
<span class="line">│         Persistence Layer                             │</span>
<span class="line">│  ┌────────────────────────────────────────────────┐   │</span>
<span class="line">│  │           SpringAIGame (Entity)                 │   │</span>
<span class="line">│  │           H2Database (JPA)                      │   │</span>
<span class="line">│  └────────────────────────────────────────────────┘   │</span>
<span class="line">│                 │                                       │</span>
<span class="line">│  ┌──────────────┴─────────────────────────────────┐   │</span>
<span class="line">│  │           DeepSeek API                          │   │</span>
<span class="line">│  │  - 外部大模型调用                                 │   │</span>
<span class="line">│  └────────────────────────────────────────────────┘   │</span>
<span class="line">└───────────────────────────────────────────────────────┘</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="九、项目执行流程" tabindex="-1"><a class="header-anchor" href="#九、项目执行流程"><span>九、项目执行流程</span></a></h2><h3 id="_9-1-控制台游戏流程" tabindex="-1"><a class="header-anchor" href="#_9-1-控制台游戏流程"><span>9.1 控制台游戏流程</span></a></h3><div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre><code class="language-mermaid"><span class="line"><span class="token keyword">sequenceDiagram</span></span>
<span class="line">    <span class="token keyword">autonumber</span></span>
<span class="line">    actor User as 用户</span>
<span class="line">    <span class="token keyword">participant</span> Console as ConsoleController</span>
<span class="line">    <span class="token keyword">participant</span> Service as GameService</span>
<span class="line">    <span class="token keyword">participant</span> AI as AIIntelligentService</span>
<span class="line">    <span class="token keyword">participant</span> DB as Database</span>
<span class="line"></span>
<span class="line">    User<span class="token arrow operator">-&gt;&gt;</span>Console<span class="token operator">:</span> 启动游戏<span class="token text string">(startConsoleGame)</span></span>
<span class="line">    Console<span class="token arrow operator">-&gt;&gt;</span>Service<span class="token operator">:</span> getRandomIdiomForStart<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    Service<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> 查询随机成语</span>
<span class="line">    DB<span class="token arrow operator">--&gt;&gt;</span>Service<span class="token operator">:</span> 返回成语</span>
<span class="line">    Service<span class="token arrow operator">--&gt;&gt;</span>Console<span class="token operator">:</span> 显示开始成语</span>
<span class="line"></span>
<span class="line">    <span class="token keyword">loop</span> 每一轮接龙</span>
<span class="line">        User<span class="token arrow operator">-&gt;&gt;</span>Console<span class="token operator">:</span> 输入成语</span>
<span class="line">        Console<span class="token arrow operator">-&gt;&gt;</span>Service<span class="token operator">:</span> validateUserIdiom<span class="token text string">(输入, 当前成语)</span></span>
<span class="line">        Service<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> 查询用户成语</span>
<span class="line">        <span class="token keyword">alt</span> 成语不存在且AI启用</span>
<span class="line">            Service<span class="token arrow operator">-&gt;&gt;</span>AI<span class="token operator">:</span> validateIdiomWithAI<span class="token text string">(成语)</span></span>
<span class="line">            AI<span class="token arrow operator">--&gt;&gt;</span>Service<span class="token operator">:</span> AI验证结果</span>
<span class="line">        <span class="token keyword">end</span></span>
<span class="line"></span>
<span class="line">        Service<span class="token arrow operator">-&gt;&gt;</span>Service<span class="token operator">:</span> 检查接龙规则<span class="token text string">(首字匹配)</span></span>
<span class="line">        Service<span class="token arrow operator">-&gt;&gt;</span>Service<span class="token operator">:</span> 记录用户失败<span class="token text string">(如果失败)</span></span>
<span class="line">        Service<span class="token arrow operator">-&gt;&gt;</span>Service<span class="token operator">:</span> 记录用户成功<span class="token text string">(如果成功)</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">alt</span> 验证失败</span>
<span class="line">            Service<span class="token arrow operator">--&gt;&gt;</span>Console<span class="token operator">:</span> 返回错误信息</span>
<span class="line">            Service<span class="token arrow operator">-&gt;&gt;</span>Service<span class="token operator">:</span> 记录失败次数</span>
<span class="line">            <span class="token keyword">alt</span> 失败次数&gt;=最大值</span>
<span class="line">                Service<span class="token arrow operator">--&gt;&gt;</span>Console<span class="token operator">:</span> 游戏结束</span>
<span class="line">            <span class="token keyword">end</span></span>
<span class="line">        <span class="token keyword">else</span> 验证成功</span>
<span class="line">            Service<span class="token arrow operator">--&gt;&gt;</span>Console<span class="token operator">:</span> 显示<span class="token string">&quot;很棒!&quot;</span></span>
<span class="line">            Service<span class="token arrow operator">-&gt;&gt;</span>Service<span class="token operator">:</span> 增加积分</span>
<span class="line">            Service<span class="token arrow operator">-&gt;&gt;</span>Service<span class="token operator">:</span> 检查获胜条件</span>
<span class="line"></span>
<span class="line">            <span class="token keyword">alt</span> 获胜条件满足</span>
<span class="line">                Service<span class="token arrow operator">--&gt;&gt;</span>Console<span class="token operator">:</span> 恭喜获胜!</span>
<span class="line">            <span class="token keyword">else</span> 未获胜</span>
<span class="line">                Service<span class="token arrow operator">-&gt;&gt;</span>AI<span class="token operator">:</span> getAIIdiomResponse<span class="token text string">(用户成语)</span></span>
<span class="line">                AI<span class="token arrow operator">--&gt;&gt;</span>Service<span class="token operator">:</span> AI接龙成语</span>
<span class="line">                Service<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> 保存AI成语<span class="token text string">(如果不存在)</span></span>
<span class="line">                Service<span class="token arrow operator">--&gt;&gt;</span>Console<span class="token operator">:</span> 显示AI成语</span>
<span class="line">            <span class="token keyword">end</span></span>
<span class="line">        <span class="token keyword">end</span></span>
<span class="line">    <span class="token keyword">end</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-2-web游戏流程" tabindex="-1"><a class="header-anchor" href="#_9-2-web游戏流程"><span>9.2 Web游戏流程</span></a></h3><div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre><code class="language-mermaid"><span class="line"><span class="token keyword">sequenceDiagram</span></span>
<span class="line">    <span class="token keyword">autonumber</span></span>
<span class="line">    <span class="token keyword">participant</span> User as 用户</span>
<span class="line">    <span class="token keyword">participant</span> Web as WebController</span>
<span class="line">    <span class="token keyword">participant</span> Service as GameService</span>
<span class="line">    <span class="token keyword">participant</span> AI as AIIntelligentService</span>
<span class="line">    <span class="token keyword">participant</span> Thymeleaf as Thymeleaf模板</span>
<span class="line">    <span class="token keyword">participant</span> Browser as 浏览器</span>
<span class="line"></span>
<span class="line">    User<span class="token arrow operator">-&gt;&gt;</span>Web<span class="token operator">:</span> 访问游戏页面</span>
<span class="line">    Web<span class="token arrow operator">-&gt;&gt;</span>Service<span class="token operator">:</span> 初始化游戏</span>
<span class="line">    Service<span class="token arrow operator">-&gt;&gt;</span>Service<span class="token operator">:</span> 获取随机开始成语</span>
<span class="line">    Web<span class="token arrow operator">-&gt;&gt;</span>Thymeleaf<span class="token operator">:</span> 渲染游戏页面</span>
<span class="line">    Thymeleaf<span class="token arrow operator">--&gt;&gt;</span>Browser<span class="token operator">:</span> 返回HTML</span>
<span class="line"></span>
<span class="line">    <span class="token keyword">loop</span> 每轮游戏</span>
<span class="line">        User<span class="token arrow operator">-&gt;&gt;</span>Browser<span class="token operator">:</span> 输入成语</span>
<span class="line">        Browser<span class="token arrow operator">-&gt;&gt;</span>Web<span class="token operator">:</span> POST /game/play?userInput=xxx</span>
<span class="line">        Web<span class="token arrow operator">-&gt;&gt;</span>Service<span class="token operator">:</span> 验证用户输入</span>
<span class="line">        Service<span class="token arrow operator">-&gt;&gt;</span>Service<span class="token operator">:</span> 检查时间限制</span>
<span class="line"></span>
<span class="line">        <span class="token keyword">alt</span> 超时</span>
<span class="line">            Service<span class="token arrow operator">--&gt;&gt;</span>Web<span class="token operator">:</span> 返回超时错误</span>
<span class="line">            Web<span class="token arrow operator">-&gt;&gt;</span>Thymeleaf<span class="token operator">:</span> 更新页面</span>
<span class="line">        <span class="token keyword">else</span> 验证失败</span>
<span class="line">            Service<span class="token arrow operator">--&gt;&gt;</span>Web<span class="token operator">:</span> 返回验证错误</span>
<span class="line">            Web<span class="token arrow operator">-&gt;&gt;</span>Thymeleaf<span class="token operator">:</span> 更新页面</span>
<span class="line">        <span class="token keyword">else</span> 验证成功</span>
<span class="line">            Service<span class="token arrow operator">-&gt;&gt;</span>AI<span class="token operator">:</span> 获取AI接龙成语</span>
<span class="line">            AI<span class="token arrow operator">--&gt;&gt;</span>Service<span class="token operator">:</span> 返回AI成语</span>
<span class="line">            Service<span class="token arrow operator">-&gt;&gt;</span>Service<span class="token operator">:</span> 增加积分</span>
<span class="line">            Service<span class="token arrow operator">-&gt;&gt;</span>Service<span class="token operator">:</span> 检查游戏状态</span>
<span class="line"></span>
<span class="line">            <span class="token keyword">alt</span> 游戏结束<span class="token text string">(失败)</span></span>
<span class="line">                Service<span class="token arrow operator">--&gt;&gt;</span>Web<span class="token operator">:</span> 返回游戏结束</span>
<span class="line">                Web<span class="token arrow operator">-&gt;&gt;</span>Thymeleaf<span class="token operator">:</span> 更新页面</span>
<span class="line">            <span class="token keyword">else</span> 游戏结束<span class="token text string">(获胜)</span></span>
<span class="line">                Service<span class="token arrow operator">--&gt;&gt;</span>Web<span class="token operator">:</span> 返回胜利</span>
<span class="line">                Web<span class="token arrow operator">-&gt;&gt;</span>Thymeleaf<span class="token operator">:</span> 更新页面</span>
<span class="line">            <span class="token keyword">else</span> 继续游戏</span>
<span class="line">                Service<span class="token arrow operator">--&gt;&gt;</span>Web<span class="token operator">:</span> 继续游戏</span>
<span class="line">                Web<span class="token arrow operator">-&gt;&gt;</span>Thymeleaf<span class="token operator">:</span> 更新页面</span>
<span class="line">            <span class="token keyword">end</span></span>
<span class="line">        <span class="token keyword">end</span></span>
<span class="line">    <span class="token keyword">end</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-3-ai接龙策略流程图" tabindex="-1"><a class="header-anchor" href="#_8-3-ai接龙策略流程图"><span>8.3 AI接龙策略流程图</span></a></h3><div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre><code class="language-mermaid"><span class="line"><span class="token keyword">flowchart</span> TD</span>
<span class="line">    Start<span class="token text string">[用户输入成语]</span> <span class="token arrow operator">--&gt;</span> CheckDB<span class="token text string">{本地词库中存在?}</span></span>
<span class="line">    CheckDB <span class="token arrow operator">--&gt;</span><span class="token label property">|是|</span> Local<span class="token text string">[使用本地成语]</span></span>
<span class="line">    CheckDB <span class="token arrow operator">--&gt;</span><span class="token label property">|否|</span> CheckAI<span class="token text string">{AI功能启用?}</span></span>
<span class="line"></span>
<span class="line">    CheckAI <span class="token arrow operator">--&gt;</span><span class="token label property">|否|</span> Fallback<span class="token text string">[返回随机备用成语]</span></span>
<span class="line">    CheckAI <span class="token arrow operator">--&gt;</span><span class="token label property">|是|</span> AICall<span class="token text string">[调用DeepSeek API]</span></span>
<span class="line"></span>
<span class="line">    AICall <span class="token arrow operator">--&gt;</span> AICheck<span class="token text string">{AI返回成语有效?}</span></span>
<span class="line"></span>
<span class="line">    AICheck <span class="token arrow operator">--&gt;</span><span class="token label property">|否|</span> Fallback</span>
<span class="line">    AICheck <span class="token arrow operator">--&gt;</span><span class="token label property">|是|</span> SaveDB<span class="token text string">[保存到本地数据库]</span></span>
<span class="line">    SaveDB <span class="token arrow operator">--&gt;</span> Local</span>
<span class="line"></span>
<span class="line">    Local <span class="token arrow operator">--&gt;</span> Validate<span class="token text string">[验证接龙规则]</span></span>
<span class="line"></span>
<span class="line">    Validate <span class="token arrow operator">--&gt;</span> RuleCheck<span class="token text string">{符合难度规则?}</span></span>
<span class="line"></span>
<span class="line">    RuleCheck <span class="token arrow operator">--&gt;</span><span class="token label property">|否|</span> Fallback</span>
<span class="line">    RuleCheck <span class="token arrow operator">--&gt;</span><span class="token label property">|是|</span> Success<span class="token text string">[返回成语, 增加积分]</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">style</span> Start <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#E3F2FD<span class="token punctuation">,</span><span class="token property">stroke</span><span class="token operator">:</span>#2196F3<span class="token punctuation">,</span><span class="token property">color</span><span class="token operator">:</span>#0D47A1</span></span>
<span class="line">    <span class="token keyword">style</span> CheckDB <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#BBDEFB<span class="token punctuation">,</span><span class="token property">stroke</span><span class="token operator">:</span>#2196F3<span class="token punctuation">,</span><span class="token property">color</span><span class="token operator">:</span>#0D47A1</span></span>
<span class="line">    <span class="token keyword">style</span> CheckAI <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#BBDEFB<span class="token punctuation">,</span><span class="token property">stroke</span><span class="token operator">:</span>#2196F3<span class="token punctuation">,</span><span class="token property">color</span><span class="token operator">:</span>#0D47A1</span></span>
<span class="line">    <span class="token keyword">style</span> AICall <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#C8E6C9<span class="token punctuation">,</span><span class="token property">stroke</span><span class="token operator">:</span>#4CAF50<span class="token punctuation">,</span><span class="token property">color</span><span class="token operator">:</span>#1B5E20</span></span>
<span class="line">    <span class="token keyword">style</span> SaveDB <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#C8E6C9<span class="token punctuation">,</span><span class="token property">stroke</span><span class="token operator">:</span>#4CAF50<span class="token punctuation">,</span><span class="token property">color</span><span class="token operator">:</span>#1B5E20</span></span>
<span class="line">    <span class="token keyword">style</span> Validate <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#FFF9C4<span class="token punctuation">,</span><span class="token property">stroke</span><span class="token operator">:</span>#FFEB3B<span class="token punctuation">,</span><span class="token property">color</span><span class="token operator">:</span>#F57F17</span></span>
<span class="line">    <span class="token keyword">style</span> Fallback <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#FFCCBC<span class="token punctuation">,</span><span class="token property">stroke</span><span class="token operator">:</span>#FF5722<span class="token punctuation">,</span><span class="token property">color</span><span class="token operator">:</span>#BF360C</span></span>
<span class="line">    <span class="token keyword">style</span> Success <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#C8E6C9<span class="token punctuation">,</span><span class="token property">stroke</span><span class="token operator">:</span>#4CAF50<span class="token punctuation">,</span><span class="token property">color</span><span class="token operator">:</span>#1B5E20</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-4-难度等级设计" tabindex="-1"><a class="header-anchor" href="#_8-4-难度等级设计"><span>8.4 难度等级设计</span></a></h3><div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre><code class="language-mermaid"><span class="line"><span class="token keyword">classDiagram</span></span>
<span class="line">    <span class="token keyword">class</span> Difficulty <span class="token punctuation">{</span></span>
<span class="line">        &lt;&lt;enum&gt;&gt;</span>
<span class="line">        +EASY</span>
<span class="line">        +MEDIUM</span>
<span class="line">        +HARD</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">class</span> GameRule <span class="token punctuation">{</span></span>
<span class="line">        +Score<span class="token text string">[积分规则]</span></span>
<span class="line">        +TimeLimit<span class="token text string">[时间限制]</span></span>
<span class="line">        +Validation<span class="token text string">[验证规则]</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">class</span> EASYMode <span class="token punctuation">{</span></span>
<span class="line">        +Score<span class="token operator">:</span> 1分/轮</span>
<span class="line">        +TimeLimit<span class="token operator">:</span> 无限制</span>
<span class="line">        +Validation<span class="token operator">:</span> 首字或同音字</span>
<span class="line">        +Strategy<span class="token operator">:</span> 随机匹配优先</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">class</span> MEDIUMMode <span class="token punctuation">{</span></span>
<span class="line">        +Score<span class="token operator">:</span> 2分/轮</span>
<span class="line">        +TimeLimit<span class="token operator">:</span> 60秒</span>
<span class="line">        +Validation<span class="token operator">:</span> 首字或押韵</span>
<span class="line">        +Strategy<span class="token operator">:</span> 首字→押韵→随机</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">class</span> HARDMode <span class="token punctuation">{</span></span>
<span class="line">        +Score<span class="token operator">:</span> 3分/轮</span>
<span class="line">        +TimeLimit<span class="token operator">:</span> 30秒</span>
<span class="line">        +Validation<span class="token operator">:</span> 严格首字匹配</span>
<span class="line">        +Strategy<span class="token operator">:</span> 仅首字匹配</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    Difficulty <span class="token arrow operator">--&gt;</span> EASYMode <span class="token operator">:</span> EASY</span>
<span class="line">    Difficulty <span class="token arrow operator">--&gt;</span> MEDIUMMode <span class="token operator">:</span> MEDIUM</span>
<span class="line">    Difficulty <span class="token arrow operator">--&gt;</span> HARDMode <span class="token operator">:</span> HARD</span>
<span class="line"></span>
<span class="line">    <span class="token keyword">style</span> Difficulty <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#E3F2FD<span class="token punctuation">,</span><span class="token property">stroke</span><span class="token operator">:</span>#2196F3<span class="token punctuation">,</span><span class="token property">color</span><span class="token operator">:</span>#0D47A1</span></span>
<span class="line">    <span class="token keyword">style</span> EASYMode <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#C8E6C9<span class="token punctuation">,</span><span class="token property">stroke</span><span class="token operator">:</span>#4CAF50<span class="token punctuation">,</span><span class="token property">color</span><span class="token operator">:</span>#1B5E20</span></span>
<span class="line">    <span class="token keyword">style</span> MEDIUMMode <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#FFF9C4<span class="token punctuation">,</span><span class="token property">stroke</span><span class="token operator">:</span>#FFEB3B<span class="token punctuation">,</span><span class="token property">color</span><span class="token operator">:</span>#F57F17</span></span>
<span class="line">    <span class="token keyword">style</span> HARDMode <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#FFCCBC<span class="token punctuation">,</span><span class="token property">stroke</span><span class="token operator">:</span>#FF5722<span class="token punctuation">,</span><span class="token property">color</span><span class="token operator">:</span>#BF360C</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="十、项目结构" tabindex="-1"><a class="header-anchor" href="#十、项目结构"><span>十、项目结构</span></a></h2><h3 id="_10-1-目录结构" tabindex="-1"><a class="header-anchor" href="#_10-1-目录结构"><span>10.1 目录结构</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">spring-ai-game-chengyu/</span>
<span class="line">├── src/</span>
<span class="line">│   ├── main/</span>
<span class="line">│   │   ├── java/io/binghe/ai/game/</span>
<span class="line">│   │   │   ├── SpringAIGameApplication.java      # 应用启动类</span>
<span class="line">│   │   │   │</span>
<span class="line">│   │   │   ├── controller/                       # 控制器层</span>
<span class="line">│   │   │   │   ├── SpringAIConsoleController.java   # 控制台控制器</span>
<span class="line">│   │   │   │   ├── SpringAIWebController.java       # Web控制器</span>
<span class="line">│   │   │   │   └── SpringAIInfoController.java      # 信息控制器</span>
<span class="line">│   │   │   │</span>
<span class="line">│   │   │   ├── service/                          # 业务逻辑层</span>
<span class="line">│   │   │   │   ├── SpringAIGameService.java        # 游戏服务</span>
<span class="line">│   │   │   │   └── SpringAIIntelligentService.java  # AI智能服务</span>
<span class="line">│   │   │   │</span>
<span class="line">│   │   │   ├── dao/                              # 数据访问层</span>
<span class="line">│   │   │   │   ├── SpringAIGameDao.java           # 成语数据访问接口</span>
<span class="line">│   │   │   │   └── SpringAIGameDataLoader.java    # 数据加载器</span>
<span class="line">│   │   │   │</span>
<span class="line">│   │   │   ├── model/                            # 实体模型层</span>
<span class="line">│   │   │   │   └── SpringAIGame.java              # 成语实体</span>
<span class="line">│   │   │   │</span>
<span class="line">│   │   │   ├── constants/                        # 常量定义</span>
<span class="line">│   │   │   │   └── SpringAIGameConstants.java     # 游戏常量</span>
<span class="line">│   │   │   │</span>
<span class="line">│   │   │   └── config/                           # 配置类</span>
<span class="line">│   │   │       ├── SpringAIConfig.java            # AI配置</span>
<span class="line">│   │   │       └── SpringAIAppConfig.java         # 应用配置</span>
<span class="line">│   │   │</span>
<span class="line">│   │   ├── resources/</span>
<span class="line">│   │   │   ├── application.yml                    # 应用配置文件</span>
<span class="line">│   │   │   ├── data/</span>
<span class="line">│   │   │   │   └── idioms.csv                     # 成语数据文件(CSV)</span>
<span class="line">│   │   │   ├── templates/</span>
<span class="line">│   │   │   │   └── game.html                      # 游戏页面模板</span>
<span class="line">│   │   │   └── static/</span>
<span class="line">│   │   │       ├── css/</span>
<span class="line">│   │   │       │   └── game.css                   # 样式文件</span>
<span class="line">│   │   │       └── js/</span>
<span class="line">│   │   │           └── game.js                    # 前端脚本</span>
<span class="line">│   │   └── test/</span>
<span class="line">│   │       └── resources/</span>
<span class="line">│   │           └── data/</span>
<span class="line">│   │               └── game.csv                   # 测试数据文件</span>
<span class="line">│   └── test/</span>
<span class="line">│       └── java/</span>
<span class="line">│           └── ...                                 # 测试代码</span>
<span class="line">│</span>
<span class="line">├── pom.xml                                         # Maven依赖配置</span>
<span class="line">└── README.md                                       # 项目说明</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-2-包结构说明" tabindex="-1"><a class="header-anchor" href="#_10-2-包结构说明"><span>10.2 包结构说明</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">io.binghe.ai.game/</span>
<span class="line">├── SpringAIGameApplication.java          # 主应用类</span>
<span class="line">├── controller/                          # 控制器包</span>
<span class="line">│   ├── SpringAIConsoleController.java   # 控制台游戏控制器</span>
<span class="line">│   ├── SpringAIWebController.java       # Web游戏控制器</span>
<span class="line">│   └── SpringAIInfoController.java      # API信息控制器</span>
<span class="line">├── service/                             # 服务层</span>
<span class="line">│   ├── SpringAIGameService.java         # 核心游戏服务</span>
<span class="line">│   └── SpringAIIntelligentService.java  # AI智能服务</span>
<span class="line">├── dao/                                 # 数据访问层</span>
<span class="line">│   ├── SpringAIGameDao.java             # 成语DAO接口</span>
<span class="line">│   └── SpringAIGameDataLoader.java      # 数据加载器</span>
<span class="line">├── model/                               # 实体模型层</span>
<span class="line">│   └── SpringAIGame.java                # 成语实体</span>
<span class="line">├── constants/                           # 常量定义</span>
<span class="line">│   └── SpringAIGameConstants.java       # 游戏常量</span>
<span class="line">└── config/                              # 配置层</span>
<span class="line">    ├── SpringAIConfig.java              # AI配置</span>
<span class="line">    └── SpringAIAppConfig.java           # 应用配置</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="十一、核心类实现关系" tabindex="-1"><a class="header-anchor" href="#十一、核心类实现关系"><span>十一、核心类实现关系</span></a></h2><h3 id="_11-1-类图关系" tabindex="-1"><a class="header-anchor" href="#_11-1-类图关系"><span>11.1 类图关系</span></a></h3><div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre><code class="language-mermaid"><span class="line"><span class="token keyword">classDiagram</span></span>
<span class="line">    <span class="token keyword">class</span> SpringAIGameApplication <span class="token punctuation">{</span></span>
<span class="line">        &lt;&lt;Main&gt;&gt;</span>
<span class="line">        +main<span class="token punctuation">(</span>String[] args<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">class</span> SpringAIConsoleController <span class="token punctuation">{</span></span>
<span class="line">        &lt;&lt;Controller&gt;&gt;</span>
<span class="line">        -SpringAIGameService service</span>
<span class="line">        -Scanner scanner</span>
<span class="line">        +startConsoleGame<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        +showHelp<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        +showStatus<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">class</span> SpringAIWebController <span class="token punctuation">{</span></span>
<span class="line">        &lt;&lt;Controller&gt;&gt;</span>
<span class="line">        -SpringAIGameService service</span>
<span class="line">        +showGamePage<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        +startGame<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        +playGame<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        +resetGame<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        +changeDifficulty<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        +getIdiomInfo<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">class</span> SpringAIInfoController <span class="token punctuation">{</span></span>
<span class="line">        &lt;&lt;Controller&gt;&gt;</span>
<span class="line">        +getAppInfo<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        +getApiConfig<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">class</span> SpringAIGameService <span class="token punctuation">{</span></span>
<span class="line">        <span class="token annotation important">&lt;&lt;Service&gt;&gt;</span></span>
<span class="line">        -SpringAIGameDao dao</span>
<span class="line">        -SpringAIIntelligentService aiService</span>
<span class="line">        -int score</span>
<span class="line">        -Difficulty difficulty</span>
<span class="line">        +getAiResponse<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        +validateUserIdiom<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        +resetGame<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        +getIdiomDetails<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        +getDifficulty<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        +getScore<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        +recordUserSuccess<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        +recordUserFailure<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        +startRoundTimer<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">class</span> SpringAIIntelligentService <span class="token punctuation">{</span></span>
<span class="line">        <span class="token annotation important">&lt;&lt;Service&gt;&gt;</span></span>
<span class="line">        -ChatModel chatModel</span>
<span class="line">        +validateIdiomWithAI<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        +getAIIdiomResponse<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        +getIdiomExplanation<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        +getIdiomStory<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        +getIdiomSuggestions<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">class</span> SpringAIGameDao <span class="token punctuation">{</span></span>
<span class="line">        &lt;&lt;Repository&gt;&gt;</span>
<span class="line">        +findByFirstChar<span class="token text string">(char)</span></span>
<span class="line">        +findByLastChar<span class="token text string">(char)</span></span>
<span class="line">        +findByName<span class="token text string">(String)</span></span>
<span class="line">        +findRandomIdioms<span class="token text string">(int)</span></span>
<span class="line">        +findRhymeIdioms<span class="token text string">(char, String)</span></span>
<span class="line">        +findByNameContaining<span class="token text string">(String)</span></span>
<span class="line">        +findByPinyinContaining<span class="token text string">(String)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">class</span> SpringAIGame <span class="token punctuation">{</span></span>
<span class="line">        &lt;&lt;Entity&gt;&gt;</span>
<span class="line">        -Long id</span>
<span class="line">        -String name</span>
<span class="line">        -String pinyin</span>
<span class="line">        -String explanation</span>
<span class="line">        -char firstChar</span>
<span class="line">        -char lastChar</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">class</span> SpringAIGameDataLoader <span class="token punctuation">{</span></span>
<span class="line">        &lt;&lt;Component&gt;&gt;</span>
<span class="line">        -SpringAIGameDao dao</span>
<span class="line">        +loadData<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">class</span> SpringAIConfig <span class="token punctuation">{</span></span>
<span class="line">        &lt;&lt;Configuration&gt;&gt;</span>
<span class="line">        +aiConfigInfo<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">class</span> SpringAIAppConfig <span class="token punctuation">{</span></span>
<span class="line">        &lt;&lt;Configuration&gt;&gt;</span>
<span class="line">        -GameConfig game</span>
<span class="line">        -DataConfig data</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    SpringAIGameApplication <span class="token arrow operator">--&gt;</span> SpringAIConsoleController</span>
<span class="line">    SpringAIGameApplication <span class="token arrow operator">--&gt;</span> SpringAIWebController</span>
<span class="line">    SpringAIGameApplication <span class="token arrow operator">--&gt;</span> SpringAIInfoController</span>
<span class="line"></span>
<span class="line">    SpringAIGameService <span class="token arrow operator">--&gt;</span> SpringAIGameDao</span>
<span class="line">    SpringAIGameService <span class="token arrow operator">--&gt;</span> SpringAIIntelligentService</span>
<span class="line"></span>
<span class="line">    SpringAIIntelligentService <span class="token arrow operator">--&gt;</span> SpringAIConfig</span>
<span class="line"></span>
<span class="line">    SpringAIGameDao <span class="token arrow operator">--&gt;</span> SpringAIGame</span>
<span class="line">    SpringAIGameDataLoader <span class="token arrow operator">--&gt;</span> SpringAIGameDao</span>
<span class="line"></span>
<span class="line">    <span class="token keyword">style</span> SpringAIGameApplication <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#E3F2FD<span class="token punctuation">,</span><span class="token property">stroke</span><span class="token operator">:</span>#2196F3<span class="token punctuation">,</span><span class="token property">color</span><span class="token operator">:</span>#0D47A1</span></span>
<span class="line">    <span class="token keyword">style</span> SpringAIConsoleController <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#BBDEFB<span class="token punctuation">,</span><span class="token property">stroke</span><span class="token operator">:</span>#2196F3<span class="token punctuation">,</span><span class="token property">color</span><span class="token operator">:</span>#0D47A1</span></span>
<span class="line">    <span class="token keyword">style</span> SpringAIWebController <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#BBDEFB<span class="token punctuation">,</span><span class="token property">stroke</span><span class="token operator">:</span>#2196F3<span class="token punctuation">,</span><span class="token property">color</span><span class="token operator">:</span>#0D47A1</span></span>
<span class="line">    <span class="token keyword">style</span> SpringAIInfoController <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#BBDEFB<span class="token punctuation">,</span><span class="token property">stroke</span><span class="token operator">:</span>#2196F3<span class="token punctuation">,</span><span class="token property">color</span><span class="token operator">:</span>#0D47A1</span></span>
<span class="line">    <span class="token keyword">style</span> SpringAIGameService <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#C8E6C9<span class="token punctuation">,</span><span class="token property">stroke</span><span class="token operator">:</span>#4CAF50<span class="token punctuation">,</span><span class="token property">color</span><span class="token operator">:</span>#1B5E20</span></span>
<span class="line">    <span class="token keyword">style</span> SpringAIIntelligentService <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#C8E6C9<span class="token punctuation">,</span><span class="token property">stroke</span><span class="token operator">:</span>#4CAF50<span class="token punctuation">,</span><span class="token property">color</span><span class="token operator">:</span>#1B5E20</span></span>
<span class="line">    <span class="token keyword">style</span> SpringAIGameDao <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#C8E6C9<span class="token punctuation">,</span><span class="token property">stroke</span><span class="token operator">:</span>#4CAF50<span class="token punctuation">,</span><span class="token property">color</span><span class="token operator">:</span>#1B5E20</span></span>
<span class="line">    <span class="token keyword">style</span> SpringAIGame <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#F8BBD0<span class="token punctuation">,</span><span class="token property">stroke</span><span class="token operator">:</span>#E91E63<span class="token punctuation">,</span><span class="token property">color</span><span class="token operator">:</span>#880E4F</span></span>
<span class="line">    <span class="token keyword">style</span> SpringAIGameDataLoader <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#FFF9C4<span class="token punctuation">,</span><span class="token property">stroke</span><span class="token operator">:</span>#FFEB3B<span class="token punctuation">,</span><span class="token property">color</span><span class="token operator">:</span>#F57F17</span></span>
<span class="line">    <span class="token keyword">style</span> SpringAIConfig <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#FFF9C4<span class="token punctuation">,</span><span class="token property">stroke</span><span class="token operator">:</span>#FFEB3B<span class="token punctuation">,</span><span class="token property">color</span><span class="token operator">:</span>#F57F17</span></span>
<span class="line">    <span class="token keyword">style</span> SpringAIAppConfig <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#FFF9C4<span class="token punctuation">,</span><span class="token property">stroke</span><span class="token operator">:</span>#FFEB3B<span class="token punctuation">,</span><span class="token property">color</span><span class="token operator">:</span>#F57F17</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_11-2-关键依赖关系" tabindex="-1"><a class="header-anchor" href="#_11-2-关键依赖关系"><span>11.2 关键依赖关系</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">SpringAIWebController</span>
<span class="line">    ├─&gt; 依赖 SpringAIGameService (业务逻辑)</span>
<span class="line">    └─&gt; 依赖 SpringAIGameDao (数据访问)</span>
<span class="line"></span>
<span class="line">SpringAIConsoleController</span>
<span class="line">    ├─&gt; 依赖 SpringAIGameService (业务逻辑)</span>
<span class="line">    └─&gt; 依赖 SpringAIGameDao (数据访问)</span>
<span class="line"></span>
<span class="line">SpringAIGameService</span>
<span class="line">    ├─&gt; 依赖 SpringAIGameDao (本地成语查询)</span>
<span class="line">    ├─&gt; 依赖 SpringAIIntelligentService (AI调用)</span>
<span class="line">    ├─&gt; 依赖 SpringAIGameDataLoader (数据加载)</span>
<span class="line">    └─&gt; 依赖 SpringAIAppConfig (配置管理)</span>
<span class="line"></span>
<span class="line">SpringAIIntelligentService</span>
<span class="line">    ├─&gt; 依赖 ChatModel (Spring AI框架)</span>
<span class="line">    └─&gt; 依赖 SpringAIConfig (AI配置)</span>
<span class="line"></span>
<span class="line">SpringAIGameDao</span>
<span class="line">    └─&gt; 依赖 SpringAIGame (JPA实体)</span>
<span class="line"></span>
<span class="line">SpringAIGame</span>
<span class="line">    └─&gt; 依赖 JPA注解 (@Entity, @Table)</span>
<span class="line"></span>
<span class="line">SpringAIGameDataLoader</span>
<span class="line">    └─&gt; 依赖 SpringAIGameDao (数据持久化)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="十二、核心编码实现" tabindex="-1"><a class="header-anchor" href="#十二、核心编码实现"><span>十二、核心编码实现</span></a></h2><h2 id="查看完整文章" tabindex="-1"><a class="header-anchor" href="#查看完整文章"><span>查看完整文章</span></a></h2><p>加入<a href="https://public.zsxq.com/groups/48848484411888.html" target="_blank" rel="noopener noreferrer">冰河技术</a>知识星球，解锁完整技术文章、小册、视频与完整代码</p><h2 id="写在最后" tabindex="-1"><a class="header-anchor" href="#写在最后"><span>写在最后</span></a></h2><p>在冰河技术知识星球， <strong>《AI智能代码审查平台》</strong> 已完结，同时，<strong>《AI全链路短剧生成平台》、《智能代码审查系统》</strong> 已完结， <strong>《多智能体协作与AI工作台》</strong> 项目热更中，还有其他二十几个项目，像实战Claude Code、AI知识库系统、智流助手平台、智能成语挑战赛项目、多轮AI智能对话系统、一站式AI智能平台、AI智能客服系统、AI智能问答系统、实战AI大模型、手写高性能敏组件、手写线程池、手写高性能SQL引擎、手写高性能Polaris网关、手写高性能熔断组件、手写通用指标上报组件、手写高性能数据库路由组件、手写分布式IM即时通讯系统、手写Seckill分布式秒杀系统、手写高性能RPC、实战高并发设计模式、简易商城系统等等。</p><p>这些项目的需求、方案、架构、落地等均来自互联网真实业务场景，让你真正学到互联网大厂的业务与技术落地方案，并将其有效转化为自己的知识储备。</p><p><strong>值得一提的是：冰河自研的Polaris高性能网关比某些开源网关项目性能更高，目前正在热更AI一体化项目，也正在实现MCP，全程带你分析原理和手撸代码。</strong></p><p>你还在等啥？不少小伙伴经过星球硬核技术和项目的历练，早已成功跳槽加薪，实现薪资翻倍，而你，还在原地踏步，抱怨大环境不好。抛弃焦虑和抱怨，我们一起塌下心来沉淀硬核技术和项目，让自己的薪资更上一层楼。</p><p>🚀PS：<strong>目前已开通最大优惠：长按或扫码加入星球立减30，注意：随着项目和专栏的更新，星球也即将涨价！！</strong></p><div><div align="center"><img src="https://binghe.site/images/personal/xingqiu_149.png?raw=true" width="70%"><div style="font-size:18px;"></div><br></div></div><p>目前，领券加入星球就可以跟冰河一起学习《实战Claude Code》、《多轮AI智能对话系统》、《一站式AI智能平台》、《AI智能客服系统》、《AI智能问答系统》、《实战AI大模型》、《手写高性能Redis组件》、《手写高性能脱敏组件》、《手写线程池》、《手写高性能SQL引擎》、《手写高性能Polaris网关》、《手写高性能RPC项目》、《分布式Seckill秒杀系统》、《分布式IM即时通讯系统》《手写高性能通用熔断组件项目》、《手写高性能通用监控指标上报组件》、《手写高性能数据库路由组件》、《手写简易商城脚手架项目》、《Spring6核心技术与源码解析》和《实战高并发设计模式》，从零开始介绍原理、设计架构、手撸代码。</p><p><strong>花很少的钱就能学这么多硬核技术、中间件项目和大厂秒杀系统、分布式IM即时通讯系统，AI大模型项目，比其他培训机构不知便宜多少倍，硬核多少倍，如果是我，我会买他个十年！</strong></p><p>加入要趁早，后续还会随着项目和加入的人数涨价，而且只会涨，不会降，先加入的小伙伴就是赚到。</p><p>另外，还有一个限时福利，邀请一个小伙伴加入，冰河就会给一笔 <strong>分享有奖</strong> ，有些小伙伴都邀请了50+人，早就回本了！</p><h2 id="其他方式加入星球" tabindex="-1"><a class="header-anchor" href="#其他方式加入星球"><span>其他方式加入星球</span></a></h2><ul><li><strong>链接</strong> ：打开链接 http://m6z.cn/6aeFbs 加入星球。</li><li><strong>回复</strong> ：在公众号 <strong>冰河技术</strong> 回复 <strong>星球</strong> 领取优惠券加入星球。</li></ul><p><strong>特别提醒：</strong> 苹果用户进圈或续费，请加微信 <strong>hacker_binghe</strong> 扫二维码，或者去公众号 <strong>冰河技术</strong> 回复 <strong>星球</strong> 扫二维码加入星球。</p><p><strong>好了，今天就到这儿吧，我是冰河，我们下期见~~</strong></p>`,93)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};