import{i as e,r as t,s as n,t as r}from"./app-C7hhlfQP.js";var i=JSON.parse(`{"path":"/md/hack/tools/2022-05-02-002-%E5%88%A9%E7%94%A8Java%E7%94%9F%E6%88%90%E7%A9%B7%E4%B8%BE%E5%AD%97%E5%85%B8(%E6%95%B0%E5%AD%97_%E5%AD%97%E6%AF%8D(%E5%A4%A7%E5%B0%8F%E5%86%99)_%E5%AD%97%E7%AC%A6).html","title":"利用Java生成穷举字典(数字+字母(大小写)+字符)","lang":"zh-CN","frontmatter":{"category":"binghe-code-hack","title":"利用Java生成穷举字典(数字+字母(大小写)+字符)","tagline":"by 冰河","tag":["hack","binghe-code-hack"],"excerpt":"利用Java生成穷举字典(数字+字母(大小写)+字符)","lock":"need"},"git":{"updatedTime":1781829682000,"contributors":[{"name":"binghe001","username":"binghe001","email":"“1028386804@qq.com”","commits":1,"url":"https://github.com/binghe001"}],"changelog":[{"hash":"65eb59bf70b66ad1c020ddd0d92b7fa27e7fb9ec","time":1781829682000,"email":"“1028386804@qq.com”","author":"binghe001","message":"feature: AI全链路短剧生成平台"}]},"filePathRelative":"md/hack/tools/2022-05-02-002-利用Java生成穷举字典(数字+字母(大小写)+字符).md"}`),a={name:`2022-05-02-002-利用Java生成穷举字典(数字+字母(大小写)+字符).md`};function o(r,i,a,o,s,c){return n(),t(`div`,null,[...i[0]||=[e(`<h1 id="利用java生成穷举字典-数字-字母-大小写-字符" tabindex="-1"><a class="header-anchor" href="#利用java生成穷举字典-数字-字母-大小写-字符"><span>利用Java生成穷举字典(数字+字母(大小写)+字符)</span></a></h1><p>简单研究了下，利用Java生成穷举字典(数字+字母(大小写)+字符)，可用于爆破各种密码等场景，原理很简单，就是枚举数组中元素的各种组合情况。下面就将代码贴出来和大家分享一下：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">package com.binghe.dictionary.seek;</span>
<span class="line">/**</span>
<span class="line"> * 利用Java实现字母(大小写)+数字+字符的穷举，可用于密码爆破等</span>
<span class="line"> * 如果需要其他的字符，直接接到字符数组中即可</span>
<span class="line"> * 如果只需要</span>
<span class="line"> *  1.数字</span>
<span class="line"> *  2.字母</span>
<span class="line"> *  3.字符</span>
<span class="line"> *  4.数字+字母</span>
<span class="line"> *  5.字母+字符</span>
<span class="line"> *  6.数字+字符</span>
<span class="line"> *  拆分fullCharSource数组即可</span>
<span class="line"> * @author 冰河</span>
<span class="line"> *</span>
<span class="line"> */</span>
<span class="line">public class DictionarySeek {</span>
<span class="line">    </span>
<span class="line">    </span>
<span class="line">    //密码可能会包含的字符集合</span>
<span class="line">    private static char[] fullCharSource = { &#39;1&#39;,&#39;2&#39;,&#39;3&#39;,&#39;4&#39;,&#39;5&#39;,&#39;6&#39;,&#39;7&#39;,&#39;8&#39;,&#39;9&#39;,&#39;0&#39;,</span>
<span class="line">                             &#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;d&#39;, &#39;e&#39;, &#39;f&#39;, &#39;g&#39;, &#39;h&#39;, &#39;i&#39;, &#39;j&#39;, &#39;k&#39;, &#39;l&#39;, &#39;m&#39;, &#39;n&#39;,  &#39;o&#39;, &#39;p&#39;, &#39;q&#39;, &#39;r&#39;, &#39;s&#39;, &#39;t&#39;, &#39;u&#39;, &#39;v&#39;, &#39;w&#39;, &#39;x&#39;, &#39;y&#39;, &#39;z&#39;,</span>
<span class="line">                                             &#39;A&#39;, &#39;B&#39;, &#39;C&#39;, &#39;D&#39;, &#39;E&#39;, &#39;F&#39;, &#39;G&#39;, &#39;H&#39;, &#39;I&#39;, &#39;J&#39;, &#39;K&#39;, &#39;L&#39;, &#39;M&#39;, &#39;N&#39;,  &#39;O&#39;, &#39;P&#39;, &#39;Q&#39;, &#39;R&#39;, &#39;S&#39;, &#39;T&#39;, &#39;U&#39;, &#39;V&#39;, &#39;W&#39;, &#39;X&#39;, &#39;Y&#39;, &#39;Z&#39;,</span>
<span class="line">                             &#39;~&#39;, &#39;!&#39;, &#39;@&#39;, &#39;#&#39;, &#39;$&#39;, &#39;%&#39;, &#39;^&#39;, &#39;&amp;&#39;, &#39;*&#39;, &#39;(&#39;, &#39;)&#39;, &#39;_&#39;, &#39;+&#39;, &#39;{&#39;, &#39;}&#39;, &#39;|&#39;, &#39;:&#39;, &#39;&quot;&#39;, &#39;&lt;&#39;, &#39;&gt;&#39;, &#39;?&#39;, &#39;;&#39;, &#39;\\&#39;&#39;, &#39;,&#39;, &#39;.&#39;, &#39;/&#39;, &#39;-&#39;, &#39;=&#39;, &#39;\`&#39;};</span>
<span class="line">    //将可能的密码集合长度</span>
<span class="line">    private static int fullCharLength = fullCharSource.length;</span>
<span class="line">    </span>
<span class="line">    /**</span>
<span class="line">     * 穷举打印输出，可以将打印输出的文件形成字典</span>
<span class="line">     * @param maxLength：生成的字符串的最大长度</span>
<span class="line">     */</span>
<span class="line">    public static void generate(int maxLength) {</span>
<span class="line">        //计数器，多线程时可以对其加锁，当然得先转换成Integer类型。</span>
<span class="line">        int counter = 0;</span>
<span class="line">        StringBuilder buider = new StringBuilder();</span>
<span class="line">        while (buider.toString().length() &lt;= maxLength) {</span>
<span class="line">            buider = new StringBuilder(maxLength*2);</span>
<span class="line">            int _counter = counter;</span>
<span class="line">            //10进制转换成26进制</span>
<span class="line">            while (_counter &gt;= fullCharLength) {</span>
<span class="line">                //获得低位</span>
<span class="line">                buider.insert(0, fullCharSource[_counter % fullCharLength]);</span>
<span class="line">                _counter = _counter / fullCharLength;</span>
<span class="line">                //精髓所在，处理进制体系中只有10没有01的问题，在穷举里面是可以存在01的</span>
<span class="line">                _counter--;</span>
<span class="line">            }</span>
<span class="line">            //最高位</span>
<span class="line">            buider.insert(0,fullCharSource[_counter]);</span>
<span class="line">            counter++;</span>
<span class="line">            System.out.println(buider.toString());</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    </span>
<span class="line">    public static void main(String[] args) {</span>
<span class="line">        long beginMillis = System.currentTimeMillis();</span>
<span class="line">            System.out.println(beginMillis);//开始时间</span>
<span class="line">            generate(50);                   //以最大长度为50测试</span>
<span class="line">            long endMillis = System.currentTimeMillis();</span>
<span class="line">            System.out.println(endMillis);//结束时间</span>
<span class="line">            System.out.println(endMillis - beginMillis);//总耗时，毫秒</span>
<span class="line">    } </span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="写在最后" tabindex="-1"><a class="header-anchor" href="#写在最后"><span>写在最后</span></a></h2><blockquote><p>如果你觉得冰河写的还不错，请微信搜索并关注「 <strong>冰河技术</strong> 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 <strong>冰河技术</strong> 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 <strong>冰河技术</strong> 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 <strong>冰河技术</strong> 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！</p></blockquote><p><img src="https://img-blog.csdnimg.cn/20200906013715889.png" alt=""></p>`,6)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};