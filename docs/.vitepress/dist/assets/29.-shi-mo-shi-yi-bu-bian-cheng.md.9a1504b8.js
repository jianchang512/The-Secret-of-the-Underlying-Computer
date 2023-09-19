import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.bf97371d.js";const g=JSON.parse('{"title":"29.什么是异步编程？","description":"","frontmatter":{},"headers":[],"relativePath":"29.-shi-mo-shi-yi-bu-bian-cheng.md","filePath":"29.-shi-mo-shi-yi-bu-bian-cheng.md"}'),p={name:"29.-shi-mo-shi-yi-bu-bian-cheng.md"},l=e(`<h1 id="_29-什么是异步编程" tabindex="-1">29.什么是异步编程？ <a class="header-anchor" href="#_29-什么是异步编程" aria-label="Permalink to &quot;29.什么是异步编程？&quot;">​</a></h1><p>大家好，我是小风哥。 </p><p>之前很多同学在微信上问能不能讲讲异步编程是怎么一回事儿，今天就和大家简单聊一聊这个话题。 </p><p>我们以函数调用为例，假设有这样的代码：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">void B() {</span></span>
<span class="line"><span style="color:#e1e4e8;"> lines = read(filename);</span></span>
<span class="line"><span style="color:#e1e4e8;"> sum(lines);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">void A() {</span></span>
<span class="line"><span style="color:#e1e4e8;"> ...</span></span>
<span class="line"><span style="color:#e1e4e8;"> B();</span></span>
<span class="line"><span style="color:#e1e4e8;"> ...</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">void B() {</span></span>
<span class="line"><span style="color:#24292e;"> lines = read(filename);</span></span>
<span class="line"><span style="color:#24292e;"> sum(lines);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">void A() {</span></span>
<span class="line"><span style="color:#24292e;"> ...</span></span>
<span class="line"><span style="color:#24292e;"> B();</span></span>
<span class="line"><span style="color:#24292e;"> ...</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>代码非常简单，B函数读取一个文件，文件里保存的是一行行数据，然后加和，A函数中的某个位置调用B函数。 </p><p>此时，我们说这是同步调用，因为A函数后续代码<strong>必须等待</strong>B函数处理完文件才能继续执行。 </p><p>随着业务不断发展，B函数处理的文件越来越庞大，此时处理一次文件耗时2小时，假设A函数后还有一行重要的代码：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">void A() {</span></span>
<span class="line"><span style="color:#e1e4e8;"> ...</span></span>
<span class="line"><span style="color:#e1e4e8;"> B();</span></span>
<span class="line"><span style="color:#e1e4e8;"> something_important();</span></span>
<span class="line"><span style="color:#e1e4e8;"> ...</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">void A() {</span></span>
<span class="line"><span style="color:#24292e;"> ...</span></span>
<span class="line"><span style="color:#24292e;"> B();</span></span>
<span class="line"><span style="color:#24292e;"> something_important();</span></span>
<span class="line"><span style="color:#24292e;"> ...</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>这就意味着调用B函数后需要等待2个小时才能执行到something_important这行代码，而something_important函数对时间要求非常苛刻，该怎样改进呢？ </p><p>其实很简单，我们可以在B函数内部创建一个线程，在线程中处理文件：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">void handle_file() {</span></span>
<span class="line"><span style="color:#e1e4e8;"> lines = read(filename);</span></span>
<span class="line"><span style="color:#e1e4e8;"> sum(lines);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">void B() {</span></span>
<span class="line"><span style="color:#e1e4e8;"> thread t(handle_file);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">void A() {</span></span>
<span class="line"><span style="color:#e1e4e8;"> ...</span></span>
<span class="line"><span style="color:#e1e4e8;"> B();</span></span>
<span class="line"><span style="color:#e1e4e8;"> something_important();</span></span>
<span class="line"><span style="color:#e1e4e8;"> ...</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">void handle_file() {</span></span>
<span class="line"><span style="color:#24292e;"> lines = read(filename);</span></span>
<span class="line"><span style="color:#24292e;"> sum(lines);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">void B() {</span></span>
<span class="line"><span style="color:#24292e;"> thread t(handle_file);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">void A() {</span></span>
<span class="line"><span style="color:#24292e;"> ...</span></span>
<span class="line"><span style="color:#24292e;"> B();</span></span>
<span class="line"><span style="color:#24292e;"> something_important();</span></span>
<span class="line"><span style="color:#24292e;"> ...</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>这样B函数被调用后<strong>创建完线程即可立即返回</strong>，紧接着开始执行something_important这行代码，CPU在执行something_important这行代码时可能文件还没有开始处理，这样函数A不再依赖于文件处理，这时我们说函数B函数就是异步调用的，函数A异步于文件处理。 </p><p>如果是在单核系统下，CPU会不断在处理文件线程和A函数线程间切换，看上去这两个线程就好像在同时运行，但如果是在多核系统下，这两个线程可以真正的并行起来。 </p><p>在编程语境下，<strong>异步往往和线程进程等相关</strong>。 </p><p>最后举一个例子。 </p><p>同步就好比你排队去自助售票机取电影票（话说小风哥已经很久很久没有去电影院看电影了），你必须<strong>排队等待</strong>前一个人取完电影票才能到你，你不能在前一个取票的过程中取自己的票，这时我们说取电影票时你和前一个人是同步的。 </p><p>而异步就好比去吃大餐，你在座位上看菜单点菜，其它人也可以点菜，你不需要等待其它人吃完饭才能下单，这时我们说你点菜和其它人吃饭是异步的。</p>`,18),o=[l];function c(i,t,r,d,y,h){return n(),a("div",null,o)}const m=s(p,[["render",c]]);export{g as __pageData,m as default};
