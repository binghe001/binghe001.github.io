import{i as e,r as t,s as n,t as r}from"./app-Cp6W-RnB.js";var i=JSON.parse(`{"path":"/md/hack/tools/2022-05-02-008-%E4%BD%BF%E7%94%A8OpenVAS%E8%BF%9B%E8%A1%8C%E6%BC%8F%E6%B4%9E%E6%89%AB%E6%8F%8F.html","title":"kali 使用OpenVAS进行漏洞扫描","lang":"zh-CN","frontmatter":{"category":"binghe-code-hack","title":"kali 使用OpenVAS进行漏洞扫描","tagline":"by 冰河","tag":["hack","binghe-code-hack"],"excerpt":"使用OpenVAS进行漏洞扫描","lock":"need"},"git":{"updatedTime":1777463154000,"contributors":[{"name":"binghe001","username":"binghe001","email":"“1028386804@qq.com”","commits":1,"url":"https://github.com/binghe001"}],"changelog":[{"hash":"0c729a71a0d0cfa76d3882bfe4121a6c63a1e729","time":1777463154000,"email":"“1028386804@qq.com”","author":"binghe001","message":"feature: 升级到vuepress2"}]},"filePathRelative":"md/hack/tools/2022-05-02-008-使用OpenVAS进行漏洞扫描.md"}`),a={name:`2022-05-02-008-使用OpenVAS进行漏洞扫描.md`};function o(r,i,a,o,s,c){return n(),t(`div`,null,[...i[0]||=[e(`<h1 id="使用openvas进行漏洞扫描" tabindex="-1"><a class="header-anchor" href="#使用openvas进行漏洞扫描"><span>使用OpenVAS进行漏洞扫描</span></a></h1><p>攻击机： Kali 192.168.205.128</p><p>靶机： Win2012 R2 192.168.205.130</p><p>注：Kali中安装OpenVAS可以参考：《<a href="https://blog.csdn.net/l1028386804/article/details/86561375" target="_blank" rel="noopener noreferrer">Kali之——OpenVAS 8.0 Vulnerability Scanning</a>》</p><h2 id="在metasploit中加载openvas插件" tabindex="-1"><a class="header-anchor" href="#在metasploit中加载openvas插件"><span>在Metasploit中加载OpenVAS插件</span></a></h2><p>为了将OpenVAS整合到Metasploit中，首先需要在Metasploit中加载OpenVAS插件。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">msfconsole</span>
<span class="line">load</span>
<span class="line">load openvas</span>
<span class="line"></span>
<span class="line">msf &gt; load </span>
<span class="line">load aggregator        load db_credcollect    load ips_filter        load msfd              load openvas           load sample            load sounds            load token_hunter      </span>
<span class="line">load alias             load db_tracker        load komand            load msgrpc            load pcap_log          load session_notifier  load sqlmap            load wiki              </span>
<span class="line">load auto_add_route    load event_tester      load lab               load nessus            load request           load session_tagger    load thread            load wmap              </span>
<span class="line">load beholder          load ffautoregen       load libnotify         load nexpose           load rssfeed           load socket_logger     load token_adduser     </span>
<span class="line">msf &gt; load openvas </span>
<span class="line">[*] Welcome to OpenVAS integration by kost and averagesecurityguy.</span>
<span class="line">[*] </span>
<span class="line">[*] OpenVAS integration requires a database connection. Once the </span>
<span class="line">[*] database is ready, connect to the OpenVAS server using openvas_connect.</span>
<span class="line">[*] For additional commands use openvas_help.</span>
<span class="line">[*] </span>
<span class="line">[*] Successfully loaded plugin: OpenVAS</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="将metasploit中的openvas插件与openvas软件本身连接" tabindex="-1"><a class="header-anchor" href="#将metasploit中的openvas插件与openvas软件本身连接"><span>将Metasploit中的OpenVAS插件与OpenVAS软件本身连接</span></a></h2><p>可以通过在命令openvas_connect后面添加用户凭证、服务器地址、端口号和SSL状态实现，如下命令所示：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">openvas_connect admin admin localhost 9390 ok</span>
<span class="line"></span>
<span class="line">msf &gt; openvas_connect admin admin localhost 9390 ok</span>
<span class="line">[*] Connecting to OpenVAS instance at localhost:9390 with username admin...</span>
<span class="line">/usr/share/metasploit-framework/vendor/bundle/ruby/2.5.0/gems/openvas-omp-0.0.4/lib/openvas-omp.rb:201: warning: Object#timeout is deprecated, use Timeout.timeout instead.</span>
<span class="line">[+] OpenVAS connection successful</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建工作区" tabindex="-1"><a class="header-anchor" href="#创建工作区"><span>创建工作区</span></a></h2><h2 id="查看帮助信息" tabindex="-1"><a class="header-anchor" href="#查看帮助信息"><span>查看帮助信息</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">workspace -h</span>
<span class="line"></span>
<span class="line">msf &gt; workspace -h</span>
<span class="line">Usage:</span>
<span class="line">    workspace                  List workspaces</span>
<span class="line">    workspace -v               List workspaces verbosely</span>
<span class="line">    workspace [name]           Switch workspace</span>
<span class="line">    workspace -a [name] ...    Add workspace(s)</span>
<span class="line">    workspace -d [name] ...    Delete workspace(s)</span>
<span class="line">    workspace -D               Delete all workspaces</span>
<span class="line">    workspace -r &lt;old&gt; &lt;new&gt;   Rename workspace</span>
<span class="line">    workspace -h               Show this help information</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建一个名为netscan的工作区" tabindex="-1"><a class="header-anchor" href="#创建一个名为netscan的工作区"><span>创建一个名为NetScan的工作区</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">workspace -a NetScan</span>
<span class="line"></span>
<span class="line">msf &gt; workspace -a NetScan</span>
<span class="line">[*] Added workspace: NetScan</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="切换到netscan工作区" tabindex="-1"><a class="header-anchor" href="#切换到netscan工作区"><span>切换到NetScan工作区</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">workspace NetScan</span>
<span class="line"></span>
<span class="line">msf &gt; workspace NetScan </span>
<span class="line">[*] Workspace: NetScan</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建目标" tabindex="-1"><a class="header-anchor" href="#创建目标"><span>创建目标</span></a></h2><p>可以使用命令openvas_target_create来创建任意数量的目标。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">openvas_target_create</span>
<span class="line">openvas_target_create outer 192.168.205.130 Outer_Interface</span>
<span class="line"></span>
<span class="line">msf &gt; openvas_target_create </span>
<span class="line">[*] Usage: openvas_target_create &lt;name&gt; &lt;hosts&gt; &lt;comment&gt;</span>
<span class="line">msf &gt; </span>
<span class="line">msf &gt; openvas_target_create outer 192.168.205.130 Outer_Interface</span>
<span class="line">/usr/share/metasploit-framework/vendor/bundle/ruby/2.5.0/gems/openvas-omp-0.0.4/lib/openvas-omp.rb:201: warning: Object#timeout is deprecated, use Timeout.timeout instead.</span>
<span class="line">[*] 275520c1-9a9e-4e49-865a-cd22ca4f3c6f</span>
<span class="line">/usr/share/metasploit-framework/vendor/bundle/ruby/2.5.0/gems/openvas-omp-0.0.4/lib/openvas-omp.rb:201: warning: Object#timeout is deprecated, use Timeout.timeout instead.</span>
<span class="line">[+] OpenVAS list of targets</span>
<span class="line"></span>
<span class="line">ID                                    Name   Hosts            Max Hosts  In Use  Comment</span>
<span class="line">--                                    ----   -----            ---------  ------  -------</span>
<span class="line">275520c1-9a9e-4e49-865a-cd22ca4f3c6f  outer  192.168.205.130  1          0       Outer_Interface</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里，我们创建了IP地址为192.168.205.130的目标，名字为outer，备注为Outer-Interface，<strong>我们需要记住这个目标的ID:275520c1-9a9e-4e49-865a-cd22ca4f3c6f</strong></p><h2 id="定义策略" tabindex="-1"><a class="header-anchor" href="#定义策略"><span>定义策略</span></a></h2><p>可以使用openvas_config_list命令列出示例策略。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">openvas_config_list</span>
<span class="line"></span>
<span class="line">msf &gt; openvas_config_list</span>
<span class="line">/usr/share/metasploit-framework/vendor/bundle/ruby/2.5.0/gems/openvas-omp-0.0.4/lib/openvas-omp.rb:201: warning: Object#timeout is deprecated, use Timeout.timeout instead.</span>
<span class="line">[+] OpenVAS list of configs</span>
<span class="line"></span>
<span class="line">ID                                    Name</span>
<span class="line">--                                    ----</span>
<span class="line">085569ce-73ed-11df-83c3-002264764cea  empty</span>
<span class="line">2d3f051c-55ba-11e3-bf43-406186ea4fc5  Host Discovery</span>
<span class="line">698f691e-7489-11df-9d8c-002264764cea  Full and fast ultimate</span>
<span class="line">708f25c4-7489-11df-8094-002264764cea  Full and very deep</span>
<span class="line">74db13d6-7489-11df-91b9-002264764cea  Full and very deep ultimate</span>
<span class="line">8715c877-47a0-438d-98a3-27c7a6ab2196  Discovery</span>
<span class="line">bbca7412-a950-11e3-9109-406186ea4fc5  System Discovery</span>
<span class="line">daba56c8-73ec-11df-a475-002264764cea  Full and fast</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里，我们选择Full and fast策略，同样<strong>我们需要记住这个策略ID：daba56c8-73ec-11df-a475-002264764cea</strong></p><h2 id="创建扫描任务" tabindex="-1"><a class="header-anchor" href="#创建扫描任务"><span>创建扫描任务</span></a></h2><p>这里我们使用的命令是openvas_task_create</p><p>首先，我们查看下目标列表</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">openvas_target_list</span>
<span class="line"></span>
<span class="line">msf &gt; openvas_target_list</span>
<span class="line">/usr/share/metasploit-framework/vendor/bundle/ruby/2.5.0/gems/openvas-omp-0.0.4/lib/openvas-omp.rb:201: warning: Object#timeout is deprecated, use Timeout.timeout instead.</span>
<span class="line">[+] OpenVAS list of targets</span>
<span class="line"></span>
<span class="line">ID                                    Name   Hosts            Max Hosts  In Use  Comment</span>
<span class="line">--                                    ----   -----            ---------  ------  -------</span>
<span class="line">275520c1-9a9e-4e49-865a-cd22ca4f3c6f  outer  192.168.205.130  1          0       Outer_Interface</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接着创建扫描任务</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">openvas_task_create</span>
<span class="line">openvas_task_create Netscan ScanForVulns 策略id 目标id</span>
<span class="line"></span>
<span class="line">msf &gt; openvas_task_create </span>
<span class="line">[*] Usage: openvas_task_create &lt;name&gt; &lt;comment&gt; &lt;config_id&gt; &lt;target_id&gt;</span>
<span class="line">msf &gt; </span>
<span class="line">msf &gt; openvas_task_create  Netscan ScanForVulns daba56c8-73ec-11df-a475-002264764cea 275520c1-9a9e-4e49-865a-cd22ca4f3c6f</span>
<span class="line">/usr/share/metasploit-framework/vendor/bundle/ruby/2.5.0/gems/openvas-omp-0.0.4/lib/openvas-omp.rb:201: warning: Object#timeout is deprecated, use Timeout.timeout instead.</span>
<span class="line">[*] f1311593-6ffb-4eef-817f-3c0f1df521b7</span>
<span class="line">/usr/share/metasploit-framework/vendor/bundle/ruby/2.5.0/gems/openvas-omp-0.0.4/lib/openvas-omp.rb:201: warning: Object#timeout is deprecated, use Timeout.timeout instead.</span>
<span class="line">[+] OpenVAS list of tasks</span>
<span class="line"></span>
<span class="line">ID                                    Name     Comment       Status  Progress</span>
<span class="line">--                                    ----     -------       ------  --------</span>
<span class="line">f1311593-6ffb-4eef-817f-3c0f1df521b7  Netscan  ScanForVulns  New     -1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里的目标id就是第4步中创建的目标id，策略id就是第5步中创建的策略id</p><p>这里，<strong>我们也需要记下这个任务id：f1311593-6ffb-4eef-817f-3c0f1df521b7</strong></p><h2 id="开始扫描" tabindex="-1"><a class="header-anchor" href="#开始扫描"><span>开始扫描</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">openvas_task_start</span>
<span class="line">openvas_task_start 任务id</span>
<span class="line"></span>
<span class="line">msf &gt; openvas_task_start</span>
<span class="line">[*] Usage: openvas_task_start &lt;id&gt;</span>
<span class="line">msf &gt; </span>
<span class="line">msf &gt; openvas_task_start f1311593-6ffb-4eef-817f-3c0f1df521b7</span>
<span class="line">/usr/share/metasploit-framework/vendor/bundle/ruby/2.5.0/gems/openvas-omp-0.0.4/lib/openvas-omp.rb:201: warning: Object#timeout is deprecated, use Timeout.timeout instead.</span>
<span class="line">[*] &lt;X&gt;&lt;authenticate_response status=&#39;200&#39; status_text=&#39;OK&#39;&gt;&lt;role&gt;Admin&lt;/role&gt;&lt;timezone&gt;UTC&lt;/timezone&gt;&lt;severity&gt;nist&lt;/severity&gt;&lt;/authenticate_response&gt;&lt;start_task_response status=&#39;202&#39; status_text=&#39;OK, request submitted&#39;&gt;&lt;report_id&gt;cdfbf3e8-cf79-4f5e-a34d-6076457bd16b&lt;/report_id&gt;&lt;/start_task_response&gt;&lt;/X&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里的任务id就是第6步中得出的任务id</p><h2 id="查看任务进度" tabindex="-1"><a class="header-anchor" href="#查看任务进度"><span>查看任务进度</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">openvas_task_list</span>
<span class="line"></span>
<span class="line">msf &gt; openvas_task_list </span>
<span class="line">/usr/share/metasploit-framework/vendor/bundle/ruby/2.5.0/gems/openvas-omp-0.0.4/lib/openvas-omp.rb:201: warning: Object#timeout is deprecated, use Timeout.timeout instead.</span>
<span class="line">[+] OpenVAS list of tasks</span>
<span class="line"></span>
<span class="line">ID                                    Name     Comment       Status   Progress</span>
<span class="line">--                                    ----     -------       ------   --------</span>
<span class="line">f1311593-6ffb-4eef-817f-3c0f1df521b7  Netscan  ScanForVulns  Running  94</span>
<span class="line"></span>
<span class="line">msf &gt; openvas_task_list </span>
<span class="line">/usr/share/metasploit-framework/vendor/bundle/ruby/2.5.0/gems/openvas-omp-0.0.4/lib/openvas-omp.rb:201: warning: Object#timeout is deprecated, use Timeout.timeout instead.</span>
<span class="line">[+] OpenVAS list of tasks</span>
<span class="line"></span>
<span class="line">ID                                    Name     Comment       Status  Progress</span>
<span class="line">--                                    ----     -------       ------  --------</span>
<span class="line">f1311593-6ffb-4eef-817f-3c0f1df521b7  Netscan  ScanForVulns  Done    -1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="列出扫描报告" tabindex="-1"><a class="header-anchor" href="#列出扫描报告"><span>列出扫描报告</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">openvas_report_list</span>
<span class="line"></span>
<span class="line">msf &gt; openvas_report_list </span>
<span class="line">/usr/share/metasploit-framework/vendor/bundle/ruby/2.5.0/gems/openvas-omp-0.0.4/lib/openvas-omp.rb:201: warning: Object#timeout is deprecated, use Timeout.timeout instead.</span>
<span class="line">/usr/share/metasploit-framework/vendor/bundle/ruby/2.5.0/gems/openvas-omp-0.0.4/lib/openvas-omp.rb:201: warning: Object#timeout is deprecated, use Timeout.timeout instead.</span>
<span class="line">[+] OpenVAS list of reports</span>
<span class="line"></span>
<span class="line">ID                                    Task Name  Start Time            Stop Time</span>
<span class="line">--                                    ---------  ----------            ---------</span>
<span class="line">cdfbf3e8-cf79-4f5e-a34d-6076457bd16b  Netscan    2019-01-20T09:39:11Z  2019-01-20T09:44:11Z</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这些报告可以下载,如果需要导出报告，那么我们就要选择一个报告id</p><h2 id="查看所有的格式id" tabindex="-1"><a class="header-anchor" href="#查看所有的格式id"><span>查看所有的格式ID</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">openvas_format_list</span>
<span class="line"></span>
<span class="line">msf &gt; openvas_format_list </span>
<span class="line">/usr/share/metasploit-framework/vendor/bundle/ruby/2.5.0/gems/openvas-omp-0.0.4/lib/openvas-omp.rb:201: warning: Object#timeout is deprecated, use Timeout.timeout instead.</span>
<span class="line">[+] OpenVAS list of report formats</span>
<span class="line"></span>
<span class="line">ID                                    Name           Extension  Summary</span>
<span class="line">--                                    ----           ---------  -------</span>
<span class="line">5057e5cc-b825-11e4-9d0e-28d24461215b  Anonymous XML  xml        Anonymous version of the raw XML report</span>
<span class="line">50c9950a-f326-11e4-800c-28d24461215b  Verinice ITG   vna        Greenbone Verinice ITG Report, v1.0.1.</span>
<span class="line">5ceff8ba-1f62-11e1-ab9f-406186ea4fc5  CPE            csv        Common Product Enumeration CSV table.</span>
<span class="line">6c248850-1f62-11e1-b082-406186ea4fc5  HTML           html       Single page HTML report.</span>
<span class="line">77bd6c4a-1f62-11e1-abf0-406186ea4fc5  ITG            csv        German &quot;IT-Grundschutz-Kataloge&quot; report.</span>
<span class="line">9087b18c-626c-11e3-8892-406186ea4fc5  CSV Hosts      csv        CSV host summary.</span>
<span class="line">910200ca-dc05-11e1-954f-406186ea4fc5  ARF            xml        Asset Reporting Format v1.0.0.</span>
<span class="line">9ca6fe72-1f62-11e1-9e7c-406186ea4fc5  NBE            nbe        Legacy OpenVAS report.</span>
<span class="line">9e5e5deb-879e-4ecc-8be6-a71cd0875cdd  Topology SVG   svg        Network topology SVG image.</span>
<span class="line">a3810a62-1f62-11e1-9219-406186ea4fc5  TXT            txt        Plain text report.</span>
<span class="line">a684c02c-b531-11e1-bdc2-406186ea4fc5  LaTeX          tex        LaTeX source file.</span>
<span class="line">a994b278-1f62-11e1-96ac-406186ea4fc5  XML            xml        Raw XML report.</span>
<span class="line">c15ad349-bd8d-457a-880a-c7056532ee15  Verinice ISM   vna        Greenbone Verinice ISM Report, v3.0.0.</span>
<span class="line">c1645568-627a-11e3-a660-406186ea4fc5  CSV Results    csv        CSV result list.</span>
<span class="line">c402cc3e-b531-11e1-9163-406186ea4fc5  PDF            pdf        Portable Document Format report.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="将报告导入数据库" tabindex="-1"><a class="header-anchor" href="#将报告导入数据库"><span>将报告导入数据库</span></a></h2><p>这里使用openvas_report_import命令后面加上报告ID和格式ID导入到数据库中。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">openvas_report_import 报告id 格式id</span>
<span class="line"></span>
<span class="line">msf &gt; openvas_report_import cdfbf3e8-cf79-4f5e-a34d-6076457bd16b a994b278-1f62-11e1-96ac-406186ea4fc5</span>
<span class="line">/usr/share/metasploit-framework/vendor/bundle/ruby/2.5.0/gems/openvas-omp-0.0.4/lib/openvas-omp.rb:201: warning: Object#timeout is deprecated, use Timeout.timeout instead.</span>
<span class="line">/usr/share/metasploit-framework/vendor/bundle/ruby/2.5.0/gems/openvas-omp-0.0.4/lib/openvas-omp.rb:201: warning: Object#timeout is deprecated, use Timeout.timeout instead.</span>
<span class="line">[*] Importing report to database.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查看msf中的漏洞数据库" tabindex="-1"><a class="header-anchor" href="#查看msf中的漏洞数据库"><span>查看MSF中的漏洞数据库</span></a></h2><p>将报告成功导入数据库之后，就可以使用vulns命令查看MSF中的漏洞数据库，如下所示：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">msf &gt; vulns</span>
<span class="line">[*] Time: 2019-01-20 09:48:02 UTC Vuln: host=192.168.205.130 name=ICMP Timestamp Detection refs=CVE-1999-0524 </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="通过浏览器访问" tabindex="-1"><a class="header-anchor" href="#通过浏览器访问"><span>通过浏览器访问</span></a></h2><p>所有的漏洞都已经保存到了数据库中，我们还可以通过浏览器9392端口来登录Greenbone助手，对漏洞数量进行交替确认，并深入了解这些漏洞的细节。如下图所示：</p><p><img src="https://img-blog.csdnimg.cn/20190120181020394.png" alt="img"></p><h1 id="写在最后" tabindex="-1"><a class="header-anchor" href="#写在最后"><span>写在最后</span></a></h1><blockquote><p>如果你觉得冰河写的还不错，请微信搜索并关注「 <strong>冰河技术</strong> 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 <strong>冰河技术</strong> 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 <strong>冰河技术</strong> 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 <strong>冰河技术</strong> 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！</p></blockquote><p><img src="https://img-blog.csdnimg.cn/20200906013715889.png" alt=""></p>`,55)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};