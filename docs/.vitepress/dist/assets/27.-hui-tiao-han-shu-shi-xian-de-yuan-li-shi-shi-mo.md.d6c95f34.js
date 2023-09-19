import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.bf97371d.js";const g=JSON.parse('{"title":"27.回调函数实现的原理是什么？","description":"","frontmatter":{},"headers":[],"relativePath":"27.-hui-tiao-han-shu-shi-xian-de-yuan-li-shi-shi-mo.md","filePath":"27.-hui-tiao-han-shu-shi-xian-de-yuan-li-shi-shi-mo.md"}'),p={name:"27.-hui-tiao-han-shu-shi-xian-de-yuan-li-shi-shi-mo.md"},l=e(`<h1 id="_27-回调函数实现的原理是什么" tabindex="-1">27.回调函数实现的原理是什么？ <a class="header-anchor" href="#_27-回调函数实现的原理是什么" aria-label="Permalink to &quot;27.回调函数实现的原理是什么？&quot;">​</a></h1><p>其实之前小风哥写过关于回调函数原理的文章，在这里《10张图让你彻底理解回调函数》，这篇文章内容很全面，但还是有很多同学在微信上问我有没有简化版的，以下就是回调函数原理的极简版。 </p><h2 id="其实回调函数和普通函数没有本质的区别。" tabindex="-1">其实回调函数和普通函数没有本质的区别。 <a class="header-anchor" href="#其实回调函数和普通函数没有本质的区别。" aria-label="Permalink to &quot;其实回调函数和普通函数没有本质的区别。&amp;#x20;&quot;">​</a></h2><p>首先让我们来看看普通的函数调用，假设我们在A函数中调用函数func：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">void A() {</span></span>
<span class="line"><span style="color:#e1e4e8;">   ...</span></span>
<span class="line"><span style="color:#e1e4e8;">   func();</span></span>
<span class="line"><span style="color:#e1e4e8;">   ...</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">void A() {</span></span>
<span class="line"><span style="color:#24292e;">   ...</span></span>
<span class="line"><span style="color:#24292e;">   func();</span></span>
<span class="line"><span style="color:#24292e;">   ...</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>想一想，你怎么知道可以调用func呢？哦，原来func是你自己定义的：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">void func() {</span></span>
<span class="line"><span style="color:#e1e4e8;"> blablabla;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">void func() {</span></span>
<span class="line"><span style="color:#24292e;"> blablabla;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>这很简单吧，现在假设你编写的这段代码无比之牛逼，全世界的程序员都无比疯狂的想引入到自己的项目中，这时你会把A函数编写成一个库供全世界的码农使用。 </p><p>但此时所有人都发现一个问题，<strong>那就是他们都想在A函数中的某个特定点上执行一段自己的代码</strong>，作为这个库的创作者你可能会这样实现：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">void A() {</span></span>
<span class="line"><span style="color:#e1e4e8;">   ...</span></span>
<span class="line"><span style="color:#e1e4e8;">   // 特定点</span></span>
<span class="line"><span style="color:#e1e4e8;">  </span></span>
<span class="line"><span style="color:#e1e4e8;">   if (张三) {</span></span>
<span class="line"><span style="color:#e1e4e8;">     funcA();</span></span>
<span class="line"><span style="color:#e1e4e8;">   } else if (李四) {</span></span>
<span class="line"><span style="color:#e1e4e8;">     funcB();</span></span>
<span class="line"><span style="color:#e1e4e8;">   }</span></span>
<span class="line"><span style="color:#e1e4e8;">   ...</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">void A() {</span></span>
<span class="line"><span style="color:#24292e;">   ...</span></span>
<span class="line"><span style="color:#24292e;">   // 特定点</span></span>
<span class="line"><span style="color:#24292e;">  </span></span>
<span class="line"><span style="color:#24292e;">   if (张三) {</span></span>
<span class="line"><span style="color:#24292e;">     funcA();</span></span>
<span class="line"><span style="color:#24292e;">   } else if (李四) {</span></span>
<span class="line"><span style="color:#24292e;">     funcB();</span></span>
<span class="line"><span style="color:#24292e;">   }</span></span>
<span class="line"><span style="color:#24292e;">   ...</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>假设全世界有一千万码农，那你是不是要有<strong>一千万个if else</strong>。。。想想这样的代码就很刺激有没有！更好的办法是什么呢？<strong>把函数也当做变量</strong>！你可以这样定义A函数：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">void A(func f) {</span></span>
<span class="line"><span style="color:#e1e4e8;">   ...</span></span>
<span class="line"><span style="color:#e1e4e8;">   f();</span></span>
<span class="line"><span style="color:#e1e4e8;">   ...</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">void A(func f) {</span></span>
<span class="line"><span style="color:#24292e;">   ...</span></span>
<span class="line"><span style="color:#24292e;">   f();</span></span>
<span class="line"><span style="color:#24292e;">   ...</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>任何一个码农在调用你的A函数时传入一个函数变量，A函数在合适的时机调用你传入的函数变量，<strong>从而节省了一千万行代码</strong>。 </p><p><strong>为了让这个过程更加难懂一些，这个函数变量起了一个无比难懂的称呼：回调函数</strong>。</p><p>现在你应该明白了回调函数是怎么一回事了吧，相比回调函数来说我更愿意将其看做<strong>函数变量</strong>。 </p><p>以上就是回调函数的基本原理，有想看更详细版本的请参考这里。 </p><p>以上仅仅是回调函数的一种用途，回调函数在基于事件驱动编程以及异步编程时更是必备的，关于事件驱动编程你可以参考这里，GUI编程的同学对此肯定很熟悉。 </p><p>希望这里的讲解对大家理解回调函数有所帮助。</p>`,18),o=[l];function c(i,t,r,d,h,y){return n(),a("div",null,o)}const v=s(p,[["render",c]]);export{g as __pageData,v as default};
