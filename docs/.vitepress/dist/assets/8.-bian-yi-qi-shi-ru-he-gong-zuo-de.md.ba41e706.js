import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.bf97371d.js";const p="/assets/8_1.4845b846.jpg",l="/assets/8_2.07c1938c.jpg",o="/assets/8_3.67823ea5.jpg",k=JSON.parse('{"title":"8.编译器是如何工作的？","description":"","frontmatter":{},"headers":[],"relativePath":"8.-bian-yi-qi-shi-ru-he-gong-zuo-de.md","filePath":"8.-bian-yi-qi-shi-ru-he-gong-zuo-de.md"}'),t={name:"8.-bian-yi-qi-shi-ru-he-gong-zuo-de.md"},c=e('<h1 id="_8-编译器是如何工作的" tabindex="-1">8.编译器是如何工作的？ <a class="header-anchor" href="#_8-编译器是如何工作的" aria-label="Permalink to &quot;8.编译器是如何工作的？&quot;">​</a></h1><p>对于程序员来说编译器是非常熟悉的，每天都在用，但是当你在点击“Run”这个按钮或者执行编译命令时你知道编译器是怎样工作的吗？ </p><p>这篇文章就为你解答这个问题。</p><h3 id="编译器就是一个普通程序-没什么大不了的" tabindex="-1">编译器就是一个普通程序，没什么大不了的 <a class="header-anchor" href="#编译器就是一个普通程序-没什么大不了的" aria-label="Permalink to &quot;编译器就是一个普通程序，没什么大不了的&quot;">​</a></h3><p>什么是编译器？</p><p><em><mark style="background-color:blue;"><code>编译器是一个将高级语言翻译为低级语言的程序。</code></mark></em></p><p>首先我们一定要意识到编译器就是一个普通程序，没什么大不了的。 </p><p>在没有弄明白编译器如何工作之前你可以简单的把编译器当做一个黑盒子，其作用就是输入一个文本文件输出一个二进制文件。</p><p><img src="'+p+`" alt=""></p><p>基本上编译器经过了以下几个阶段，等等，这句话教科书上也有，但是我相信很多同学其实并没有真正理解这几个步骤到底在说些什么，为了让你彻底理解这几个步骤，我们用一个简单的例子来讲解。 </p><p>假定我们有一段程序：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">while (y &lt; z) {</span></span>
<span class="line"><span style="color:#e1e4e8;">   int x = a + b;</span></span>
<span class="line"><span style="color:#e1e4e8;">   y += x;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">while (y &lt; z) {</span></span>
<span class="line"><span style="color:#24292e;">   int x = a + b;</span></span>
<span class="line"><span style="color:#24292e;">   y += x;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>那么编译器是怎样把这一段程序人类认识的程序转换为CPU认识的二进制机器指令呢？</p><h3 id="提取出每一个单词-词法分析" tabindex="-1">提取出每一个单词：词法分析 <a class="header-anchor" href="#提取出每一个单词-词法分析" aria-label="Permalink to &quot;提取出每一个单词：词法分析&quot;">​</a></h3><p>首先编译器要把源代码中的每个“单词”提取出来，在编译技术中“单词”被称为token。其实不只是每个单词被称为一个token，除去单词之外的比如左括号、右括号、赋值操作符等都被称为token。 </p><p>从源代码中提取出token的过程就被称为词法分析，Lexical Analysis。 </p><p>经过一遍词法分析，编译器得到了以下token：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">T_While     while</span></span>
<span class="line"><span style="color:#e1e4e8;">T_LeftParen   （</span></span>
<span class="line"><span style="color:#e1e4e8;">T_Identifier   y</span></span>
<span class="line"><span style="color:#e1e4e8;">T_Less         &lt;</span></span>
<span class="line"><span style="color:#e1e4e8;">T_Identifier   z</span></span>
<span class="line"><span style="color:#e1e4e8;">T_RightParen   )</span></span>
<span class="line"><span style="color:#e1e4e8;">T_OpenBrace   {</span></span>
<span class="line"><span style="color:#e1e4e8;">T_Int         int</span></span>
<span class="line"><span style="color:#e1e4e8;">T_Identifier   x</span></span>
<span class="line"><span style="color:#e1e4e8;">T_Assign       =</span></span>
<span class="line"><span style="color:#e1e4e8;">T_Identifier   a</span></span>
<span class="line"><span style="color:#e1e4e8;">T_Plus         +</span></span>
<span class="line"><span style="color:#e1e4e8;">T_Identifier   b</span></span>
<span class="line"><span style="color:#e1e4e8;">T_Semicolon   ;</span></span>
<span class="line"><span style="color:#e1e4e8;">T_Identifier   y</span></span>
<span class="line"><span style="color:#e1e4e8;">T_PlusAssign   +=</span></span>
<span class="line"><span style="color:#e1e4e8;">T_Identifier   x</span></span>
<span class="line"><span style="color:#e1e4e8;">T_Semicolon   ;</span></span>
<span class="line"><span style="color:#e1e4e8;">T_CloseBrace   }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">T_While     while</span></span>
<span class="line"><span style="color:#24292e;">T_LeftParen   （</span></span>
<span class="line"><span style="color:#24292e;">T_Identifier   y</span></span>
<span class="line"><span style="color:#24292e;">T_Less         &lt;</span></span>
<span class="line"><span style="color:#24292e;">T_Identifier   z</span></span>
<span class="line"><span style="color:#24292e;">T_RightParen   )</span></span>
<span class="line"><span style="color:#24292e;">T_OpenBrace   {</span></span>
<span class="line"><span style="color:#24292e;">T_Int         int</span></span>
<span class="line"><span style="color:#24292e;">T_Identifier   x</span></span>
<span class="line"><span style="color:#24292e;">T_Assign       =</span></span>
<span class="line"><span style="color:#24292e;">T_Identifier   a</span></span>
<span class="line"><span style="color:#24292e;">T_Plus         +</span></span>
<span class="line"><span style="color:#24292e;">T_Identifier   b</span></span>
<span class="line"><span style="color:#24292e;">T_Semicolon   ;</span></span>
<span class="line"><span style="color:#24292e;">T_Identifier   y</span></span>
<span class="line"><span style="color:#24292e;">T_PlusAssign   +=</span></span>
<span class="line"><span style="color:#24292e;">T_Identifier   x</span></span>
<span class="line"><span style="color:#24292e;">T_Semicolon   ;</span></span>
<span class="line"><span style="color:#24292e;">T_CloseBrace   }</span></span></code></pre></div><p>就这样一个磁盘中保存的字符串源代码文件就转换为了一个个的token。</p><h3 id="这些token想表达什么意思-语法分析" tabindex="-1">这些token想表达什么意思：语法分析 <a class="header-anchor" href="#这些token想表达什么意思-语法分析" aria-label="Permalink to &quot;这些token想表达什么意思：语法分析&quot;">​</a></h3><p>有了这些token之后编译器就可以根据语言定义的语法恢复其原本的结构，怎么恢复呢？</p><p><img src="`+l+'" alt=""></p><p>原来，编译器在扫描出各个token后根据规则将其用树的形式表示出来，这颗树就被称为<strong>语法树</strong>。</p><h3 id="语法树是不是合理的-语义分析" tabindex="-1">语法树是不是合理的：语义分析 <a class="header-anchor" href="#语法树是不是合理的-语义分析" aria-label="Permalink to &quot;语法树是不是合理的：语义分析&quot;">​</a></h3><p>有了语法树后我们还要检查这棵树是不是合法的，比如我们不能把一个整数和一个字符串相加、比较符左右两边的数据类型要相同，等等。 </p><p>这一步通过后就证明了程序合法，不会有编译错误。</p><p><img src="'+o+`" alt=""></p><h3 id="根据语法树生成中间代码-代码生成" tabindex="-1">根据语法树生成中间代码：代码生成 <a class="header-anchor" href="#根据语法树生成中间代码-代码生成" aria-label="Permalink to &quot;根据语法树生成中间代码：代码生成&quot;">​</a></h3><p>语义分析之后接下来编译器遍历语法树并用另一种形式来表示，用什么来表示呢？那就是中间代码，intermediate representation code，简称<strong>IR code</strong>。 </p><p>上述语法树可能就会表示为这样的中间代码：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Loop: x   = a + b</span></span>
<span class="line"><span style="color:#e1e4e8;">     y   = x + y</span></span>
<span class="line"><span style="color:#e1e4e8;">     _t1 = y &lt; z</span></span>
<span class="line"><span style="color:#e1e4e8;">     if _t1 goto Loop</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Loop: x   = a + b</span></span>
<span class="line"><span style="color:#24292e;">     y   = x + y</span></span>
<span class="line"><span style="color:#24292e;">     _t1 = y &lt; z</span></span>
<span class="line"><span style="color:#24292e;">     if _t1 goto Loop</span></span></code></pre></div><p>怎么样，这实际上已经比较接近最后的机器指令了。 </p><p>只不过这还不是最终形态。</p><h3 id="中间代码优化" tabindex="-1">中间代码优化 <a class="header-anchor" href="#中间代码优化" aria-label="Permalink to &quot;中间代码优化&quot;">​</a></h3><p>在生成中间代码后要对其进行优化，我们可以看到，实际上可以把x = a + b这行代码放到循环外，因为每次循环都不会改变x的值，因此优化后就是这样了：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">x   = a + b</span></span>
<span class="line"><span style="color:#e1e4e8;">Loop:y   = x + y</span></span>
<span class="line"><span style="color:#e1e4e8;">     _t1 = y &lt; z</span></span>
<span class="line"><span style="color:#e1e4e8;">     if _t1 goto Loop</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">x   = a + b</span></span>
<span class="line"><span style="color:#24292e;">Loop:y   = x + y</span></span>
<span class="line"><span style="color:#24292e;">     _t1 = y &lt; z</span></span>
<span class="line"><span style="color:#24292e;">     if _t1 goto Loop</span></span></code></pre></div><p>中间代码优化后就可以生成机器指令了。</p><h3 id="代码生成" tabindex="-1">代码生成 <a class="header-anchor" href="#代码生成" aria-label="Permalink to &quot;代码生成&quot;">​</a></h3><p>将上述优化后的中间代码转换为机器指令：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">add $1, $2, $3</span></span>
<span class="line"><span style="color:#e1e4e8;">Loop:add $4, $1, $4</span></span>
<span class="line"><span style="color:#e1e4e8;">     slt $6, $1, $5</span></span>
<span class="line"><span style="color:#e1e4e8;">     beq $6, loop</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">add $1, $2, $3</span></span>
<span class="line"><span style="color:#24292e;">Loop:add $4, $1, $4</span></span>
<span class="line"><span style="color:#24292e;">     slt $6, $1, $5</span></span>
<span class="line"><span style="color:#24292e;">     beq $6, loop</span></span></code></pre></div><p>最终，编译器将程序员认识的代码转换为了CPU认识的机器指令。</p><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h3><p>注意这篇简短的讲解不希望给大家留下这样的印象，那就是编译器是很简单的，恰恰相反，现代编译器是非常智能并且极其复杂的，绝不是短短一篇文章就能讲清楚的，能实现一个编译器是困难的，实现一个好的编译器更是难上加难。 </p><p>本文的目的旨在以极简的方式描述编译器的工作原理，这样你就不用把编译器当做一个黑盒了，希望这篇文章能对你有所帮助。</p>`,44),i=[c];function r(d,y,h,_,g,u){return a(),n("div",null,i)}const T=s(t,[["render",r]]);export{k as __pageData,T as default};
