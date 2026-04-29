import{i as e,r as t,s as n,t as r}from"./app-Cp6W-RnB.js";var i=JSON.parse(`{"path":"/md/hack/tools/2022-05-02-021-Metasploit%E4%BD%BF%E7%94%A8reload-edit-reload_all%E5%91%BD%E4%BB%A4%E5%8A%A0%E5%BF%AB%E5%BC%80%E5%8F%91%E8%BF%87%E7%A8%8B.html","title":"Metasploit使用reload、edit、reload_all命令加快开发过程","lang":"zh-CN","frontmatter":{"category":"binghe-code-hack","title":"Metasploit使用reload、edit、reload_all命令加快开发过程","tagline":"by 冰河","tag":["hack","binghe-code-hack"],"excerpt":"Metasploit使用reload、edit、reload_all命令加快开发过程","lock":"need"},"git":{"updatedTime":1777463154000,"contributors":[{"name":"binghe001","username":"binghe001","email":"“1028386804@qq.com”","commits":1,"url":"https://github.com/binghe001"}],"changelog":[{"hash":"0c729a71a0d0cfa76d3882bfe4121a6c63a1e729","time":1777463154000,"email":"“1028386804@qq.com”","author":"binghe001","message":"feature: 升级到vuepress2"}]},"filePathRelative":"md/hack/tools/2022-05-02-021-Metasploit使用reload-edit-reload_all命令加快开发过程.md"}`),a={name:`2022-05-02-021-Metasploit使用reload-edit-reload_all命令加快开发过程.md`};function o(r,i,a,o,s,c){return n(),t(`div`,null,[...i[0]||=[e(`<h1 id="metasploit使用reload、edit、reload-all命令加快开发过程" tabindex="-1"><a class="header-anchor" href="#metasploit使用reload、edit、reload-all命令加快开发过程"><span>Metasploit使用reload、edit、reload_all命令加快开发过程</span></a></h1><p>可以使用edit命令动态修改Metasploit中的模块，并在不关闭Metasploit的情况下使用reload命令重新加载编辑过的模块。如果对多个模块进行了修改，就可以在Metasploit中使用reload_all命令一次性载入所有模块。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">msf5 &gt; use exploit/multi/handler </span>
<span class="line">msf5 exploit(multi/handler) &gt; edit</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>此时我们输入edit，就会以vi方式打开exploit/multi/handler模块 。</p><p><img src="https://img-blog.csdnimg.cn/20190127205121624.png" alt="img"></p><p>此时，我们就可以对exploit/multi/handler模块进行编辑，然后保存，之后我们就可以输入reload命令重新载入exploit/multi/handler模块。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">msf5 exploit(multi/handler) &gt; reload</span>
<span class="line">[*] Reloading module...</span>
<span class="line">msf5 exploit(multi/handler) &gt; </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果我们同时对多个模块进行了修改，那我们就可以输入reload_all命令同时载入所有模块</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">msf5 exploit(multi/handler) &gt; reload_all</span>
<span class="line">[*] Reloading modules from all module paths...</span>
<span class="line">               .;lxO0KXXXK0Oxl:.</span>
<span class="line">           ,o0WMMMMMMMMMMMMMMMMMMKd,</span>
<span class="line">        &#39;xNMMMMMMMMMMMMMMMMMMMMMMMMMWx,</span>
<span class="line">      :KMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMK:</span>
<span class="line">    .KMMMMMMMMMMMMMMMWNNNWMMMMMMMMMMMMMMMX,</span>
<span class="line">   lWMMMMMMMMMMMXd:..     ..;dKMMMMMMMMMMMMo</span>
<span class="line">  xMMMMMMMMMMWd.               .oNMMMMMMMMMMk</span>
<span class="line"> oMMMMMMMMMMx.                    dMMMMMMMMMMx</span>
<span class="line">.WMMMMMMMMM:                       :MMMMMMMMMM,</span>
<span class="line">xMMMMMMMMMo                         lMMMMMMMMMO</span>
<span class="line">NMMMMMMMMW                    ,cccccoMMMMMMMMMWlccccc;</span>
<span class="line">MMMMMMMMMX                     ;KMMMMMMMMMMMMMMMMMMX:</span>
<span class="line">NMMMMMMMMW.                      ;KMMMMMMMMMMMMMMX:</span>
<span class="line">xMMMMMMMMMd                        ,0MMMMMMMMMMK;</span>
<span class="line">.WMMMMMMMMMc                         &#39;OMMMMMM0,</span>
<span class="line"> lMMMMMMMMMMk.                         .kMMO&#39;</span>
<span class="line">  dMMMMMMMMMMWd&#39;                         ..</span>
<span class="line">   cWMMMMMMMMMMMNxc&#39;.                ##########</span>
<span class="line">    .0MMMMMMMMMMMMMMMMWc            #+#    #+#</span>
<span class="line">      ;0MMMMMMMMMMMMMMMo.          +:+</span>
<span class="line">        .dNMMMMMMMMMMMMo          +#++:++#+</span>
<span class="line">           &#39;oOWMMMMMMMMo                +:+</span>
<span class="line">               .,cdkO0K;        :+:    :+:                                </span>
<span class="line">                                :::::::+:</span>
<span class="line">                      Metasploit</span>
<span class="line"></span>
<span class="line">       =[ metasploit v5.0.1-dev                           ]</span>
<span class="line">+ -- --=[ 1851 exploits - 1046 auxiliary - 321 post       ]</span>
<span class="line">+ -- --=[ 541 payloads - 44 encoders - 10 nops            ]</span>
<span class="line">+ -- --=[ 2 evasion                                       ]</span>
<span class="line">+ -- --=[ ** This is Metasploit 5 development branch **   ]</span>
<span class="line"></span>
<span class="line">msf5 exploit(multi/handler) &gt; </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="写在最后" tabindex="-1"><a class="header-anchor" href="#写在最后"><span>写在最后</span></a></h2><blockquote><p>如果你觉得冰河写的还不错，请微信搜索并关注「 <strong>冰河技术</strong> 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 <strong>冰河技术</strong> 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 <strong>冰河技术</strong> 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 <strong>冰河技术</strong> 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！</p></blockquote><p><img src="https://img-blog.csdnimg.cn/20200906013715889.png" alt=""></p>`,12)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};