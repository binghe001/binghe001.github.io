import{i as e,r as t,s as n,t as r}from"./app-OfGHRiFp.js";var i=JSON.parse(`{"path":"/md/hack/tools/2022-04-17-018-SQLMap%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E.html","title":"SQLMap参数说明","lang":"zh-CN","frontmatter":{"category":"binghe-code-hack","title":"SQLMap参数说明","tagline":"by 冰河","tag":["hack","binghe-code-hack"],"excerpt":"SQLMap参数说明","lock":"need"},"git":{"updatedTime":1777477162000,"contributors":[{"name":"binghe001","username":"binghe001","email":"“1028386804@qq.com”","commits":1,"url":"https://github.com/binghe001"}],"changelog":[{"hash":"df122e13b582ca8cd32c7cf9a2b16a6830ec8407","time":1777477162000,"email":"“1028386804@qq.com”","author":"binghe001","message":"feature: 升级到vuepress2"}]},"filePathRelative":"md/hack/tools/2022-04-17-018-SQLMap参数说明.md"}`),a={name:`2022-04-17-018-SQLMap参数说明.md`};function o(r,i,a,o,s,c){return n(),t(`div`,null,[...i[0]||=[e(`<h1 id="sqlmap参数说明" tabindex="-1"><a class="header-anchor" href="#sqlmap参数说明"><span>SQLMap参数说明</span></a></h1><h2 id="options-选项" tabindex="-1"><a class="header-anchor" href="#options-选项"><span>Options（选项）</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">--version 显示程序的版本号并退出  </span>
<span class="line">-h, --help 显示此帮助消息并退出  </span>
<span class="line">-v VERBOSE 详细级别：0-6（默认为1）</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="target-目标" tabindex="-1"><a class="header-anchor" href="#target-目标"><span>Target（目标）</span></a></h2><p>以下至少需要设置其中一个选项，设置目标URL。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">-d DIRECT 直接连接到数据库。  </span>
<span class="line">-u URL, --url=URL 目标URL。  </span>
<span class="line">-l LIST 从Burp或WebScarab代理的日志中解析目标。  </span>
<span class="line">-r REQUESTFILE 从一个文件中载入HTTP请求。  </span>
<span class="line">-g GOOGLEDORK 处理Google dork的结果作为目标URL。  </span>
<span class="line">-c CONFIGFILE 从INI配置文件中加载选项。  </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="request-请求" tabindex="-1"><a class="header-anchor" href="#request-请求"><span>Request（请求）</span></a></h2><p>这些选项可以用来指定如何连接到目标URL。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">--data=DATA 通过POST发送的数据字符串  </span>
<span class="line">--cookie=COOKIE HTTP Cookie头  </span>
<span class="line">--cookie-urlencode URL 编码生成的cookie注入  </span>
<span class="line">--drop-set-cookie 忽略响应的Set - Cookie头信息  </span>
<span class="line">--user-agent=AGENT 指定 HTTP User - Agent头  </span>
<span class="line">--random-agent 使用随机选定的HTTP User - Agent头  </span>
<span class="line">--referer=REFERER 指定 HTTP Referer头  </span>
<span class="line">--headers=HEADERS 换行分开，加入其他的HTTP头  </span>
<span class="line">--auth-type=ATYPE HTTP身份验证类型（基本，摘要或NTLM）(Basic, Digest or NTLM)  </span>
<span class="line">--auth-cred=ACRED HTTP身份验证凭据（用户名:密码）  </span>
<span class="line">--auth-cert=ACERT HTTP认证证书（key_file，cert_file）  </span>
<span class="line">--proxy=PROXY 使用HTTP代理连接到目标URL  </span>
<span class="line">--proxy-cred=PCRED HTTP代理身份验证凭据（用户名：密码）  </span>
<span class="line">--ignore-proxy 忽略系统默认的HTTP代理  </span>
<span class="line">--delay=DELAY 在每个HTTP请求之间的延迟时间，单位为秒  </span>
<span class="line">--timeout=TIMEOUT 等待连接超时的时间（默认为30秒）  </span>
<span class="line">--retries=RETRIES 连接超时后重新连接的时间（默认3）  </span>
<span class="line">--scope=SCOPE 从所提供的代理日志中过滤器目标的正则表达式  </span>
<span class="line">--safe-url=SAFURL 在测试过程中经常访问的url地址  </span>
<span class="line">--safe-freq=SAFREQ 两次访问之间测试请求，给出安全的URL </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="optimization-优化" tabindex="-1"><a class="header-anchor" href="#optimization-优化"><span>Optimization（优化）</span></a></h2><p>这些选项可用于优化SqlMap的性能。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">-o 开启所有优化开关  </span>
<span class="line">--predict-output 预测常见的查询输出  </span>
<span class="line">--keep-alive 使用持久的HTTP（S）连接  </span>
<span class="line">--null-connection 从没有实际的HTTP响应体中检索页面长度  </span>
<span class="line">--threads=THREADS 最大的HTTP（S）请求并发量（默认为1） </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="injection-注入" tabindex="-1"><a class="header-anchor" href="#injection-注入"><span>Injection（注入）</span></a></h2><p>这些选项可以用来指定测试哪些参数， 提供自定义的注入payloads和可选篡改脚本。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">-p TESTPARAMETER 可测试的参数（S）  </span>
<span class="line">--dbms=DBMS 强制后端的DBMS为此值  </span>
<span class="line">--os=OS 强制后端的DBMS操作系统为这个值  </span>
<span class="line">--prefix=PREFIX 注入payload字符串前缀  </span>
<span class="line">--suffix=SUFFIX 注入payload字符串后缀  </span>
<span class="line">--tamper=TAMPER 使用给定的脚本（S）篡改注入数据  </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="detection-检测" tabindex="-1"><a class="header-anchor" href="#detection-检测"><span>Detection（检测）</span></a></h2><p>这些选项可以用来指定在SQL盲注时如何解析和比较HTTP响应页面的内容。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">--level=LEVEL 执行测试的等级（1-5，默认为1）  </span>
<span class="line">--risk=RISK 执行测试的风险（0-3，默认为1）  </span>
<span class="line">--string=STRING 查询时有效时在页面匹配字符串  </span>
<span class="line">--regexp=REGEXP 查询时有效时在页面匹配正则表达式  </span>
<span class="line">--text-only 仅基于在文本内容比较网页 </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="techniques-技巧" tabindex="-1"><a class="header-anchor" href="#techniques-技巧"><span>Techniques（技巧）</span></a></h2><p>这些选项可用于调整具体的SQL注入测试。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">--technique=TECH SQL注入技术测试（默认BEUST）  </span>
<span class="line">--time-sec=TIMESEC DBMS响应的延迟时间（默认为5秒）  </span>
<span class="line">--union-cols=UCOLS 定列范围用于测试UNION查询注入  </span>
<span class="line">--union-char=UCHAR 用于暴力猜解列数的字符  </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="fingerprint-指纹" tabindex="-1"><a class="header-anchor" href="#fingerprint-指纹"><span>Fingerprint（指纹）</span></a></h2><p>-f, --fingerprint 执行检查广泛的DBMS版本指纹</p><h2 id="enumeration-枚举" tabindex="-1"><a class="header-anchor" href="#enumeration-枚举"><span>Enumeration（枚举）</span></a></h2><p>这些选项可以用来列举后端数据库管理系统的信息、表中的结构和数据。此外，您还可以运行自己的SQL语句。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">-b, --banner 检索数据库管理系统的标识  </span>
<span class="line">--current-user 检索数据库管理系统当前用户  </span>
<span class="line">--current-db 检索数据库管理系统当前数据库  </span>
<span class="line">--is-dba 检测DBMS当前用户是否DBA  </span>
<span class="line">--users 枚举数据库管理系统用户  </span>
<span class="line">--passwords 枚举数据库管理系统用户密码哈希  </span>
<span class="line">--privileges 枚举数据库管理系统用户的权限  </span>
<span class="line">--roles 枚举数据库管理系统用户的角色  </span>
<span class="line">--dbs 枚举数据库管理系统数据库  </span>
<span class="line">--tables 枚举的DBMS数据库中的表  </span>
<span class="line">--columns 枚举DBMS数据库表列  </span>
<span class="line">--dump 转储数据库管理系统的数据库中的表项  </span>
<span class="line">--dump-all 转储所有的DBMS数据库表中的条目  </span>
<span class="line">--search 搜索列（S），表（S）和/或数据库名称（S）  </span>
<span class="line">-D DB 要进行枚举的数据库名  </span>
<span class="line">-T TBL 要进行枚举的数据库表  </span>
<span class="line">-C COL 要进行枚举的数据库列  </span>
<span class="line">-U USER 用来进行枚举的数据库用户  </span>
<span class="line">--exclude-sysdbs 枚举表时排除系统数据库  </span>
<span class="line">--start=LIMITSTART 第一个查询输出进入检索  </span>
<span class="line">--stop=LIMITSTOP 最后查询的输出进入检索  </span>
<span class="line">--first=FIRSTCHAR 第一个查询输出字的字符检索  </span>
<span class="line">--last=LASTCHAR 最后查询的输出字字符检索  </span>
<span class="line">--sql-query=QUERY 要执行的SQL语句  </span>
<span class="line">--sql-shell 提示交互式SQL的shell  </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="brute-force-蛮力" tabindex="-1"><a class="header-anchor" href="#brute-force-蛮力"><span>Brute force（蛮力）</span></a></h2><p>这些选项可以被用来运行蛮力检查。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">--common-tables 检查存在共同表  </span>
<span class="line">--common-columns 检查存在共同列  </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>User-defined function injection（用户自定义函数注入）</p><p>这些选项可以用来创建用户自定义函数。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">--udf-inject 注入用户自定义函数  </span>
<span class="line">--shared-lib=SHLIB 共享库的本地路径 </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="file-system-access-访问文件系统" tabindex="-1"><a class="header-anchor" href="#file-system-access-访问文件系统"><span>File system access（访问文件系统）</span></a></h2><p>这些选项可以被用来访问后端数据库管理系统的底层文件系统。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">--file-read=RFILE 从后端的数据库管理系统文件系统读取文件  </span>
<span class="line">--file-write=WFILE 编辑后端的数据库管理系统文件系统上的本地文件  </span>
<span class="line">--file-dest=DFILE 后端的数据库管理系统写入文件的绝对路径  </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="operating-system-access-操作系统访问" tabindex="-1"><a class="header-anchor" href="#operating-system-access-操作系统访问"><span>Operating system access（操作系统访问）</span></a></h2><p>这些选项可以用于访问后端数据库管理系统的底层操作系统。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">--os-cmd=OSCMD 执行操作系统命令  </span>
<span class="line">--os-shell 交互式的操作系统的shell  </span>
<span class="line">--os-pwn 获取一个OOB shell，meterpreter或VNC  </span>
<span class="line">--os-smbrelay 一键获取一个OOB shell，meterpreter或VNC  </span>
<span class="line">--os-bof 存储过程缓冲区溢出利用  </span>
<span class="line">--priv-esc 数据库进程用户权限提升  </span>
<span class="line">--msf-path=MSFPATH Metasploit Framework本地的安装路径  </span>
<span class="line">--tmp-path=TMPPATH 远程临时文件目录的绝对路径  </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="windows注册表访问" tabindex="-1"><a class="header-anchor" href="#windows注册表访问"><span>Windows注册表访问</span></a></h2><p>这些选项可以被用来访问后端数据库管理系统Windows注册表。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">--reg-read 读一个Windows注册表项值  </span>
<span class="line">--reg-add 写一个Windows注册表项值数据  </span>
<span class="line">--reg-del 删除Windows注册表键值  </span>
<span class="line">--reg-key=REGKEY Windows注册表键  </span>
<span class="line">--reg-value=REGVAL Windows注册表项值  </span>
<span class="line">--reg-data=REGDATA Windows注册表键值数据  </span>
<span class="line">--reg-type=REGTYPE Windows注册表项值类型  </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="general-一般" tabindex="-1"><a class="header-anchor" href="#general-一般"><span>General（一般）</span></a></h2><p>这些选项可以用来设置一些一般的工作参数。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">-t TRAFFICFILE 记录所有HTTP流量到一个文本文件中  </span>
<span class="line">-s SESSIONFILE 保存和恢复检索会话文件的所有数据  </span>
<span class="line">--flush-session 刷新当前目标的会话文件  </span>
<span class="line">--fresh-queries 忽略在会话文件中存储的查询结果  </span>
<span class="line">--eta 显示每个输出的预计到达时间  </span>
<span class="line">--update 更新SqlMap  </span>
<span class="line">--save file保存选项到INI配置文件  </span>
<span class="line">--batch 从不询问用户输入，使用所有默认配置。 </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="miscellaneous-杂项" tabindex="-1"><a class="header-anchor" href="#miscellaneous-杂项"><span>Miscellaneous（杂项）</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">--beep 发现SQL注入时提醒  </span>
<span class="line">--check-payload IDS对注入payloads的检测测试  </span>
<span class="line">--cleanup SqlMap具体的UDF和表清理DBMS  </span>
<span class="line">--forms 对目标URL的解析和测试形式  </span>
<span class="line">--gpage=GOOGLEPAGE 从指定的页码使用谷歌dork结果  </span>
<span class="line">--page-rank Google dork结果显示网页排名（PR）  </span>
<span class="line">--parse-errors 从响应页面解析数据库管理系统的错误消息  </span>
<span class="line">--replicate 复制转储的数据到一个sqlite3数据库  </span>
<span class="line">--tor 使用默认的Tor（Vidalia/ Privoxy/ Polipo）代理地址  </span>
<span class="line">--wizard 给初级用户的简单向导界面  </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="写在最后" tabindex="-1"><a class="header-anchor" href="#写在最后"><span>写在最后</span></a></h2><blockquote><p>如果你觉得冰河写的还不错，请微信搜索并关注「 <strong>冰河技术</strong> 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 <strong>冰河技术</strong> 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 <strong>冰河技术</strong> 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 <strong>冰河技术</strong> 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！</p></blockquote><p><img src="https://img-blog.csdnimg.cn/20200906013715889.png" alt=""></p>`,49)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};