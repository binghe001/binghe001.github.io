import{i as e,r as t,s as n,t as r}from"./app-00Bpbscc.js";var i=JSON.parse(`{"path":"/md/hack/tools/2022-04-17-037-Metasploit%E8%87%AA%E5%AE%9A%E4%B9%89FTP%E6%89%AB%E6%8F%8F%E6%A8%A1%E5%9D%97.html","title":"Metasploit自定义FTP扫描模块","lang":"zh-CN","frontmatter":{"category":"binghe-code-hack","title":"Metasploit自定义FTP扫描模块","tagline":"by 冰河","tag":["hack","binghe-code-hack"],"excerpt":"Metasploit自定义FTP扫描模块","lock":"need"},"git":{"updatedTime":1777469950000,"contributors":[{"name":"binghe001","username":"binghe001","email":"“1028386804@qq.com”","commits":1,"url":"https://github.com/binghe001"}],"changelog":[{"hash":"a3aaa95894cbb392edd0b540e319cc3ec227cb7e","time":1777469950000,"email":"“1028386804@qq.com”","author":"binghe001","message":"feature: 升级到vuepress2"}]},"filePathRelative":"md/hack/tools/2022-04-17-037-Metasploit自定义FTP扫描模块.md"}`),a={name:`2022-04-17-037-Metasploit自定义FTP扫描模块.md`};function o(r,i,a,o,s,c){return n(),t(`div`,null,[...i[0]||=[e(`<h1 id="metasploit自定义ftp扫描模块" tabindex="-1"><a class="header-anchor" href="#metasploit自定义ftp扫描模块"><span>Metasploit自定义FTP扫描模块</span></a></h1><p>这里，我们编写的Ruby脚本ftp_version_by_binghe.rb如下：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">##</span>
<span class="line"># Author 冰河</span>
<span class="line"># Date 2019-01-12</span>
<span class="line"># Description 自定义FTP发现模块，用于主动发现目标机所在C段网络的FTP服务器，并主动进行自动化渗透</span>
<span class="line">##</span>
<span class="line">require &#39;msf/core&#39;</span>
<span class="line">class Metasploit3 &lt; Msf::Auxiliary</span>
<span class="line">  include Msf::Exploit::Remote::Ftp</span>
<span class="line">  include Msf::Auxiliary::Scanner</span>
<span class="line">  include Msf::Auxiliary::Report</span>
<span class="line"></span>
<span class="line">  #初始化基础信息</span>
<span class="line">  def initialize</span>
<span class="line">    super(</span>
<span class="line">      &#39;Name&#39;        =&gt; &#39;FTP Version Scanner Customized Module&#39;,</span>
<span class="line">      &#39;Description&#39; =&gt; &#39;Detect FTP Version from the target and Attack All of The FTP Server.&#39;,</span>
<span class="line">      &#39;Author&#39;      =&gt; &#39;binghe&#39;,</span>
<span class="line">      &#39;License&#39;     =&gt; MSF_LICENSE</span>
<span class="line">    )</span>
<span class="line"></span>
<span class="line">    register_options(</span>
<span class="line">      [</span>
<span class="line">        Opt::RPORT(21),</span>
<span class="line">      ])</span>
<span class="line">  end</span>
<span class="line"></span>
<span class="line">  #程序入口</span>
<span class="line">  def run_host(target_host)</span>
<span class="line"></span>
<span class="line">    connect(true, false)</span>
<span class="line"></span>
<span class="line">    if(banner)</span>
<span class="line">    print_status(&quot;#{rhost} is running #{banner}&quot;)</span>
<span class="line">    report_service(:host=&gt;rhost, :port=&gt;rport, :name=&gt;&quot;ftp&quot;, :info=&gt;banner)</span>
<span class="line">    end</span>
<span class="line">    disconnect</span>
<span class="line">   end</span>
<span class="line">end</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来我们将ftp_version_by_binghe.rb脚本上传到Kali服务器的/usr/share/metasploit-framework/modules/auxiliary/scanner/ftp目录下。</p><p>在运行这个脚本之前，我们先使用Metasploit中的msftidy工具检查一下此脚本的语法是否正确。</p><p>在Kali的命令行执行如下命令：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">/usr/share/metasploit-framework/tools/dev/msftidy.rb /usr/share/metasploit-framework/modules/auxiliary/scanner/ftp/ftp_version_by_binghe.rb </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>未输出任何信息，证明脚本正确。</p><p>接下来，我们进行msf终端，运行我们自定义的FTP扫描模块：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">msfconsole</span>
<span class="line">use auxiliary/scanner/ftp/ftp_version_by_binghe </span>
<span class="line">show options</span>
<span class="line">set RHOSTS 192.168.109.159</span>
<span class="line">run</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出的结果为：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">[*] 192.168.109.159:21    - 192.168.109.159 is running 220 (vsFTPd 2.3.4)</span>
<span class="line"></span>
<span class="line">[*] Scanned 1 of 1 hosts (100% complete)</span>
<span class="line">[*] Auxiliary module execution completed</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="写在最后" tabindex="-1"><a class="header-anchor" href="#写在最后"><span>写在最后</span></a></h2><blockquote><p>如果你觉得冰河写的还不错，请微信搜索并关注「 <strong>冰河技术</strong> 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 <strong>冰河技术</strong> 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 <strong>冰河技术</strong> 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 <strong>冰河技术</strong> 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！</p></blockquote><p><img src="https://img-blog.csdnimg.cn/20200906013715889.png" alt=""></p>`,15)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};