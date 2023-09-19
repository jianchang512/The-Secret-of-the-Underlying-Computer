import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.bf97371d.js";const p="/assets/24_1.eaf47576.jpg",l="/assets/24_2.e64b21e5.jpg",t="/assets/24_3.9f581414.jpg",o="/assets/24_4.49ec36fa.jpg",c="/assets/24_5.81292b8f.jpg",r="/assets/24_6.f55b4a96.jpg",i="/assets/24_7.960c1517.jpg",y="/assets/24_8.8f360339.jpg",L=JSON.parse('{"title":"24.彻底理解树的递归遍历","description":"","frontmatter":{},"headers":[],"relativePath":"24.-che-di-li-jie-shu-de-di-gui-bian-li.md","filePath":"24.-che-di-li-jie-shu-de-di-gui-bian-li.md"}'),d={name:"24.-che-di-li-jie-shu-de-di-gui-bian-li.md"},h=e('<h1 id="_24-彻底理解树的递归遍历" tabindex="-1">24.彻底理解树的递归遍历 <a class="header-anchor" href="#_24-彻底理解树的递归遍历" aria-label="Permalink to &quot;24.彻底理解树的递归遍历&quot;">​</a></h1><p>如果把你丢到迷宫里该怎么找到出口呢？思考一下这个问题。 </p><p>很显然，像没头苍蝇一样乱冲乱撞对于走迷宫来说是没有用的，以最小代价找到迷宫的唯一出路就是<strong>系统性的将迷宫搜索一遍</strong>，所谓系统性指的是所有迷宫的路我们只走一遍而不重复，这是找到迷宫出口最高效的方法，千万不要将走迷宫寄希望于横冲直撞走大运的概率上。 </p><h2 id="什么是二叉树" tabindex="-1">什么是二叉树 <a class="header-anchor" href="#什么是二叉树" aria-label="Permalink to &quot;什么是二叉树&amp;#x20;&quot;">​</a></h2><p>在计算机科学中二叉树，binary tree，是一种数据结构，在该数据结构中每个节点最多有两个子节点，如图所示：</p><p><img src="'+p+'" alt=""></p><p>二叉树的定义就是这样简单，那么二叉树和迷宫有什么关系呢？ </p><p>本质上二叉树不过就是一个低配版的简单迷宫，因为每一岔口上最多就只有两条路。 </p><p>如果你能系统性的搜索迷宫那么你就应该明白如何遍历二叉树， </p><h2 id="如何遍历二叉树" tabindex="-1">如何遍历二叉树 <a class="header-anchor" href="#如何遍历二叉树" aria-label="Permalink to &quot;如何遍历二叉树&amp;#x20;&quot;">​</a></h2><p>想一下该如何系统性的搜索一个迷宫呢？显然，要想高效的搜索迷宫必须依赖<strong>搜索策略</strong>。 </p><p>这个策略实际上非常简单，对于每一条岔口都应用以下两条规则：</p><ol><li>对于每一个岔口，依次从左到右走一遍并记录下哪些路已经走过了 </li><li>如果当前的路已经是死胡同了或者当前岔口全部搜索完毕，那么我们应该原路返回上一个岔口</li></ol><p>由于本质上二叉树也是迷宫，因此就以二叉树为例讲解一下。 </p><p>由于二叉树最多有两个节点，也就是说二叉树这种迷宫每个岔口最多两条路，应用上述规则：</p><ol><li>对于每一个节点，先走左手边的路，左手边的路全部走完回到这个节点后继续右手边的路</li><li>如果当前是叶子节点或两条路都已搜索完毕则返回父节点</li></ol><p>接下来以上图中的二叉树为例来讲解一下该策略。 </p><p>迷宫入口就是节点1，如下图a所示，那么在节点1上我们遇到两条路，依据上述策略首先走左手边的路，这样来到了节点2，如下图b所示； </p><p>在节点2上我们还是面对两条路，依然使用上述策略我们来到了节点3，如下图c所示； </p><p>来到节点3后我们发现是一条死胡同，根据策略我们需要回退到来时的路，也就是回退到节点2，注意，这在计算机算法中被称为回溯，这是系统性搜索中常见的操作，如下图d所示。</p><p><img src="'+l+'" alt=""></p><p>当回退到节点2后我们发现左手边的路都已经搜索过了，那么接下来我们可以放心的搜索2这个节点右手边的路了，这样我们来到了节点4，如下图e所示； </p><p>来到节点4后依然是死胡同，因此我们需要回退到节点2，图f；回退到节点2后我们发现两条路都已搜索完毕，那么我们可以放心的继续回退，这样我们又一次来到了节点1，如图g所示； </p><p>来到节点1后我们发现走手边的路已经全部搜索完毕，因此可以开始搜索1右手边的路了，这样我们来到了节点5，如图h所示；</p><p><img src="'+t+'" alt=""></p><p>来到节点5后我们发现这里只有一条路，因此来到了节点6，如图i所示： </p><p>节点6同样是死胡同，因此回退到节点5，如图j所示； </p><p>回到节点5后我们发现所有的路都已搜索完毕，继续回退，这样我们就又来到了节点1，但这时，节点1左右子树全部遍历完毕，如图k所示；就这样我们遍历完了整个二叉树。</p><p><img src="'+o+`" alt=""></p><p>有的同学看到这里可能会有疑问，那我们平时所说的先序遍历、中序遍历以及后续遍历指的是什么意思呢？ </p><p>实际上不管是先序、中序还是后续遍历都是上面的过程，不同点在于我们在什么时机下喊一声“到此一游”： </p><p>一到某个岔口就喊一声，这叫先序遍历； </p><p>搜索完左手边的路回退到岔口时喊一声，这叫中序遍历； </p><p>左右两条路都搜索完回退到岔口时喊一声，这叫后续遍历； </p><p>实际上<strong>这三种遍历方式本质上是一样的，区别仅仅在于处理节点的时机不同</strong>。 </p><p>值得注意的一旦是，彻底理解二叉树的遍历极其重要，这是解决几乎所有关于二叉树问题的基础。 </p><h2 id="递归实现二叉树的遍历" tabindex="-1">递归实现二叉树的遍历 <a class="header-anchor" href="#递归实现二叉树的遍历" aria-label="Permalink to &quot;递归实现二叉树的遍历&amp;#x20;&quot;">​</a></h2><p>在讲解递归遍历二叉树前我们首先用代码表示一下二叉树的结构：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">struct tree {</span></span>
<span class="line"><span style="color:#e1e4e8;"> struct tree* left;</span></span>
<span class="line"><span style="color:#e1e4e8;"> struct tree* right;</span></span>
<span class="line"><span style="color:#e1e4e8;"> int value;</span></span>
<span class="line"><span style="color:#e1e4e8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">struct tree {</span></span>
<span class="line"><span style="color:#24292e;"> struct tree* left;</span></span>
<span class="line"><span style="color:#24292e;"> struct tree* right;</span></span>
<span class="line"><span style="color:#24292e;"> int value;</span></span>
<span class="line"><span style="color:#24292e;">};</span></span></code></pre></div><p>从定义上我们可以看出树本身就是递归定义的，二叉树的左子树是二叉树(struct tree* left)，二叉树的右子树也是二叉树(struct tree* right)。假设给定一颗二叉树t，我们该如何遍历这颗二叉树呢？</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">struct tree* t; // 给定一颗二叉树</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">struct tree* t; // 给定一颗二叉树</span></span></code></pre></div><p>有的同学可能会觉得二叉树的遍历是一个非常复杂的过程，真的是这样的吗？ </p><p>假设我们已经实现了树的遍历函数，这个函数是这样定义的：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">void search_tree(struct tree* t);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">void search_tree(struct tree* t);</span></span></code></pre></div><p>只要调用search_tree函数我们就能把一棵树的所有节点打印出来：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">struct tree* t; // 给定一颗二叉树</span></span>
<span class="line"><span style="color:#e1e4e8;">search_tree(t); // 打印二叉树所有节点</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">struct tree* t; // 给定一颗二叉树</span></span>
<span class="line"><span style="color:#24292e;">search_tree(t); // 打印二叉树所有节点</span></span></code></pre></div><p>要是真的有这样一个函数实际上我们的任务就完成了，如果我问你用这个函数把树t的左子树节点都打印出来该怎么写代码你肯定会觉得侮辱智商，很简单啊，不就是把树t的左子树传给search_tree这个函数吗？</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">seartch_tree(t-&gt;left); // 打印树t的左子树</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">seartch_tree(t-&gt;left); // 打印树t的左子树</span></span></code></pre></div><p>那么打印树t的右子树呢？同样easy啊</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">search_tree(t-&gt;right); // 打印树t的右子树</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">search_tree(t-&gt;right); // 打印树t的右子树</span></span></code></pre></div><p>是不是很简单，那么打印当前节点的值呢？你肯定已经懒得搭理我了 😃</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">printf(&quot;%d &quot;, t-&gt;value); // 打印根节点的值</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">printf(&quot;%d &quot;, t-&gt;value); // 打印根节点的值</span></span></code></pre></div><p>至此我们可以打印出根节点的值，也可以打印出树t的左子树节点，也可以打印出树t的右子树节点，<strong>如果我问你既然这些问题都解决了，那么该如何实现search_tree()这个函数</strong>？ </p><p>如果你不知道，那么就该我说这句话了：很简单啊有没有，不就是把上面几行代码写在一起嘛</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">void search_tree(struct tree* t) {</span></span>
<span class="line"><span style="color:#e1e4e8;">   printf(&quot;%d &quot;, t-&gt;value); // 打印根节点的值</span></span>
<span class="line"><span style="color:#e1e4e8;">   seartch_tree(t-&gt;left); // 打印树t的左子树</span></span>
<span class="line"><span style="color:#e1e4e8;">   search_tree(t-&gt;right); // 打印树t的右子树</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">void search_tree(struct tree* t) {</span></span>
<span class="line"><span style="color:#24292e;">   printf(&quot;%d &quot;, t-&gt;value); // 打印根节点的值</span></span>
<span class="line"><span style="color:#24292e;">   seartch_tree(t-&gt;left); // 打印树t的左子树</span></span>
<span class="line"><span style="color:#24292e;">   search_tree(t-&gt;right); // 打印树t的右子树</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>是不是很简单，是不是很easy，惊喜不惊喜，意外不意外，<strong>我们在仅仅只靠给出函数定义并凭借丰富想象的情况下就把这个函数给实现了</strong> 😃 </p><p>当然我们需要对特殊情况进行处理，如果给定的一棵树为空，那么直接返回，最终代码就是：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">void search_tree(struct tree* t) {</span></span>
<span class="line"><span style="color:#e1e4e8;"> if (t == NULL） // 如果是一颗空树则直接返回</span></span>
<span class="line"><span style="color:#e1e4e8;"> return;</span></span>
<span class="line"><span style="color:#e1e4e8;"> printf(&quot;%d &quot;, t-&gt;value); // 打印根节点的值</span></span>
<span class="line"><span style="color:#e1e4e8;"> seartch_tree(t-&gt;left); // 打印树t的左子树</span></span>
<span class="line"><span style="color:#e1e4e8;"> search_tree(t-&gt;right); // 打印树t的右子树</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">void search_tree(struct tree* t) {</span></span>
<span class="line"><span style="color:#24292e;"> if (t == NULL） // 如果是一颗空树则直接返回</span></span>
<span class="line"><span style="color:#24292e;"> return;</span></span>
<span class="line"><span style="color:#24292e;"> printf(&quot;%d &quot;, t-&gt;value); // 打印根节点的值</span></span>
<span class="line"><span style="color:#24292e;"> seartch_tree(t-&gt;left); // 打印树t的左子树</span></span>
<span class="line"><span style="color:#24292e;"> search_tree(t-&gt;right); // 打印树t的右子树</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>有的同学可能会一脸懵逼，这个函数就这样实现了？正确吗，不用怀疑，这段代码无比正确，你可以自己构造一棵树并试着运行一下这段代码。 </p><p>上述代码就是树的<strong>递归遍历</strong>。 </p><p>我知道这些一脸懵逼的同学心里的怎么想的，这段代码看上去确实正确，运行起来也正确，那么这段代码的运行过程是什么样的呢？ </p><h2 id="递归调用过程" tabindex="-1">递归调用过程 <a class="header-anchor" href="#递归调用过程" aria-label="Permalink to &quot;递归调用过程&amp;#x20;&quot;">​</a></h2><p>假设有这样一段代码：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">void C() {</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">void B() {</span></span>
<span class="line"><span style="color:#e1e4e8;"> C();</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">void A() {</span></span>
<span class="line"><span style="color:#e1e4e8;"> B();</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">void main() {</span></span>
<span class="line"><span style="color:#e1e4e8;"> A();</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">void C() {</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">void B() {</span></span>
<span class="line"><span style="color:#24292e;"> C();</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">void A() {</span></span>
<span class="line"><span style="color:#24292e;"> B();</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">void main() {</span></span>
<span class="line"><span style="color:#24292e;"> A();</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>A()会调用B()，B()会调用C()，那么函数调用过程如图所示：</p><p><img src="`+c+'" alt=""></p><p>实际上每一个函数被调用时都有对应的一段内存，这段内存中保存了调用该函数时传入的<strong>参数以及函数中定义的局部变量</strong>，这段内存被称为<strong>函数帧</strong>，函数的调用过程具有数据结构中栈的性质，也就是<strong>先进后出</strong>，比如当函数C()执行完毕后该函数对应的函数帧释放并回到函数B，函数B执行完毕后对应的函数帧被释放并回到函数A。 </p><p>有了上述知识我们就可以看一下树的递归调用函数是如何执行的了。为简单起见，我们给定一颗比较简单的树：</p><p><img src="'+r+'" alt=""></p><p>当在该树上调用search_tree函数时整个递归调用过程是怎样的呢，如图所示：</p><p><img src="'+i+'" alt=""></p><p>首先在根节点1上调用search_tree()，当打印完当前节点的值后在1的左子树节点上调用search_tree，这时第二个函数帧入栈；打印完当前节点的值(2)后在2的左子树上调用search_tree，这样第三个函数帧入栈；同样是打印完当前节点的值后(3)在3的左子树上调用search_tree，第四个函数帧入栈；由于3的左子树为空，因此第四个函数帧执行第一句时就会退出，因此我们又来到了第三个函数帧，此时节点3的左子树遍历完毕，因此开始在3的右子树节点上调用search_tree，接下来的过程如图所示：</p><p><img src="'+y+`" alt=""></p><p>这个过程会一直持续直到节点1的右子树也遍历完毕后整个递归调用过程运行完毕。注意，函数帧中实际上不会包含代码，这里为方便观察search_tree的递归调用过程才加上去的。上图中没有将整个调用过程全部展示出来，大家可以自行推导节点5和节点6是如何遍历的。 </p><p>从这个过程中我们可以看到，函数的递归调用其实没什么神秘的，和普通函数调用其实是一样的，只不过递归函数的特殊之处在于调用的不是其它函数而是本身。 </p><p>从上面的函数调用过程可以得出一个重要的结论，那就是<strong>递归函数不会一直调用下去</strong>，否则就是栈溢出了，即著名的Stack Overflow，那么递归函数调用栈在什么情况下就不再增长了呢，在这个例子中就是当给定的树已经为空时递归函数调用栈将不再增长，因此对于递归函数我们必须指明在什么情况下递归函数将直接返回，也就是常说的递归函数的出口。</p><h2 id="递归实现树的三种遍历方法" tabindex="-1">递归实现树的三种遍历方法 <a class="header-anchor" href="#递归实现树的三种遍历方法" aria-label="Permalink to &quot;递归实现树的三种遍历方法&amp;#x20;&quot;">​</a></h2><p>到目前为止，我们已经知道了该如何遍历树、如何用代码实现以及代码的调用过程，注意打印语句的位置：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">printf(&quot;%d &quot;, t-&gt;value); // 打印根节点的值</span></span>
<span class="line"><span style="color:#e1e4e8;">seartch_tree(t-&gt;left); // 打印树t的左子树</span></span>
<span class="line"><span style="color:#e1e4e8;">search_tree(t-&gt;right); // 打印树t的右子树</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">printf(&quot;%d &quot;, t-&gt;value); // 打印根节点的值</span></span>
<span class="line"><span style="color:#24292e;">seartch_tree(t-&gt;left); // 打印树t的左子树</span></span>
<span class="line"><span style="color:#24292e;">search_tree(t-&gt;right); // 打印树t的右子树</span></span></code></pre></div><p>中序和后序遍历都可以很容易的用递归遍历方法来实现，如下为中序遍历：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">void search_in_order(struct tree* t) {</span></span>
<span class="line"><span style="color:#e1e4e8;">   if (t == NULL） // 如果是一颗空树则直接返回</span></span>
<span class="line"><span style="color:#e1e4e8;">     return;</span></span>
<span class="line"><span style="color:#e1e4e8;">      </span></span>
<span class="line"><span style="color:#e1e4e8;">   search_in_order(t-&gt;left); // 打印树t的左子树</span></span>
<span class="line"><span style="color:#e1e4e8;">   printf(&quot;%d &quot;, t-&gt;value); // 打印根节点的值</span></span>
<span class="line"><span style="color:#e1e4e8;">   search_in_order(t-&gt;right); // 打印树t的右子树</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">void search_in_order(struct tree* t) {</span></span>
<span class="line"><span style="color:#24292e;">   if (t == NULL） // 如果是一颗空树则直接返回</span></span>
<span class="line"><span style="color:#24292e;">     return;</span></span>
<span class="line"><span style="color:#24292e;">      </span></span>
<span class="line"><span style="color:#24292e;">   search_in_order(t-&gt;left); // 打印树t的左子树</span></span>
<span class="line"><span style="color:#24292e;">   printf(&quot;%d &quot;, t-&gt;value); // 打印根节点的值</span></span>
<span class="line"><span style="color:#24292e;">   search_in_order(t-&gt;right); // 打印树t的右子树</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>后序遍历则为：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">void search_post_order(struct tree* t) {</span></span>
<span class="line"><span style="color:#e1e4e8;">   if (t == NULL） // 如果是一颗空树则直接返回</span></span>
<span class="line"><span style="color:#e1e4e8;">     return;</span></span>
<span class="line"><span style="color:#e1e4e8;">      </span></span>
<span class="line"><span style="color:#e1e4e8;">   search_in_order(t-&gt;left); // 打印树t的左子树</span></span>
<span class="line"><span style="color:#e1e4e8;">   search_in_order(t-&gt;right); // 打印树t的右子树</span></span>
<span class="line"><span style="color:#e1e4e8;">   printf(&quot;%d &quot;, t-&gt;value); // 打印根节点的值</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">void search_post_order(struct tree* t) {</span></span>
<span class="line"><span style="color:#24292e;">   if (t == NULL） // 如果是一颗空树则直接返回</span></span>
<span class="line"><span style="color:#24292e;">     return;</span></span>
<span class="line"><span style="color:#24292e;">      </span></span>
<span class="line"><span style="color:#24292e;">   search_in_order(t-&gt;left); // 打印树t的左子树</span></span>
<span class="line"><span style="color:#24292e;">   search_in_order(t-&gt;right); // 打印树t的右子树</span></span>
<span class="line"><span style="color:#24292e;">   printf(&quot;%d &quot;, t-&gt;value); // 打印根节点的值</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>至此，有的同学可能会觉得树的遍历简直是太简单了，那么如果让你用非递归的方式来实现树的遍历你该怎么实现呢？ </p><p><em><strong>在阅读下面的内容之前请确保你已经真正理解了前几节的内容</strong></em>。 </p><p>如果你还是不能彻底理解请再多仔细阅读几遍。</p><h2 id="如何将递归转为非递归" tabindex="-1">如何将递归转为非递归 <a class="header-anchor" href="#如何将递归转为非递归" aria-label="Permalink to &quot;如何将递归转为非递归&quot;">​</a></h2><p>虽然递归实现简单，但是递归函数有自己特定的问题，比如递归调用会耗费很多的栈空间，也就是内存；同时该过程也较为耗时，因此其性能通常不及非递归版本。 </p><p>那么我们该如何实现非递归的遍历树呢？ </p><p>要解决这个问题，我们必须清楚的理解递归函数的调用过程。 </p><p>从递归函数的调用过程可以看出，<strong>递归调用无非就是函数帧入栈出栈的过程</strong>，因此我们可以直接使用栈来模拟这个过程，只不过栈中保存的不是函数的运行状态而是树节点。 </p><p>确定用栈来模拟递归调用这一点后，接下来我们就必须明确两件事：</p><ol><li>什么情况下入栈 </li><li>什么情况下出栈</li></ol><p>我们还是以先序遍历为例来说明。 </p><p>仔细观察递归调用的过程，我们会发现这样的规律：</p><ol><li>不管三七二十一先把从根节点开始的所有左子树节点放入栈中 </li><li>查看栈顶元素，如果栈顶元素有右子树那么右子树入栈并以右子树为新的起点并重复过程1直到栈空为止</li></ol><p>现在我们可以回答这两个问题了。 </p><p>什么情况下入栈？ </p><p>最开始时先把从根节点开始的所有左子树节点放入栈中，第二步中如果栈顶有右子树那么重复过程 1，这两种情况下会入栈。 </p><p>那么什么情况下出栈呢？ </p><p>当查看栈顶元素时实际上我们就可以直接pop掉栈顶元素了，这是和递归调用不同的一点，为什么呢？因为查看栈顶节点时我们可以确定一点事，那就是当前节点的左子树一定已经处理完毕了，因此对于栈顶元素来说我们需要的仅仅是其右子树的信息，拿到右子树信息后栈顶节点就可以pop掉了。 </p><p>因此上面的描述用代码来表示就是：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">void search(tree* root) {</span></span>
<span class="line"><span style="color:#e1e4e8;"> if(root == NULL)</span></span>
<span class="line"><span style="color:#e1e4e8;"> return ;</span></span>
<span class="line"><span style="color:#e1e4e8;"> stack&lt;tree*&gt;s;</span></span>
<span class="line"><span style="color:#e1e4e8;"> // 不管三七二十一先把从根节点开始的所有左子树节点放入栈中</span></span>
<span class="line"><span style="color:#e1e4e8;"> while(root){</span></span>
<span class="line"><span style="color:#e1e4e8;">  s.push(root);</span></span>
<span class="line"><span style="color:#e1e4e8;">  root=root-&gt;left;</span></span>
<span class="line"><span style="color:#e1e4e8;"> }</span></span>
<span class="line"><span style="color:#e1e4e8;"> while(!s.empty()){</span></span>
<span class="line"><span style="color:#e1e4e8;">  // 查看栈顶元素，如果栈顶元素有右子树那么右子树入栈并重复过程1直到栈空为止</span></span>
<span class="line"><span style="color:#e1e4e8;">  tree* top = s.top();</span></span>
<span class="line"><span style="color:#e1e4e8;">  tree* t = top-&gt;right;</span></span>
<span class="line"><span style="color:#e1e4e8;">  s.pop();</span></span>
<span class="line"><span style="color:#e1e4e8;">  while(t){</span></span>
<span class="line"><span style="color:#e1e4e8;">   s.push(t);</span></span>
<span class="line"><span style="color:#e1e4e8;">   t = t-&gt;left;</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;"> }</span></span>
<span class="line"><span style="color:#e1e4e8;"> return r;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">void search(tree* root) {</span></span>
<span class="line"><span style="color:#24292e;"> if(root == NULL)</span></span>
<span class="line"><span style="color:#24292e;"> return ;</span></span>
<span class="line"><span style="color:#24292e;"> stack&lt;tree*&gt;s;</span></span>
<span class="line"><span style="color:#24292e;"> // 不管三七二十一先把从根节点开始的所有左子树节点放入栈中</span></span>
<span class="line"><span style="color:#24292e;"> while(root){</span></span>
<span class="line"><span style="color:#24292e;">  s.push(root);</span></span>
<span class="line"><span style="color:#24292e;">  root=root-&gt;left;</span></span>
<span class="line"><span style="color:#24292e;"> }</span></span>
<span class="line"><span style="color:#24292e;"> while(!s.empty()){</span></span>
<span class="line"><span style="color:#24292e;">  // 查看栈顶元素，如果栈顶元素有右子树那么右子树入栈并重复过程1直到栈空为止</span></span>
<span class="line"><span style="color:#24292e;">  tree* top = s.top();</span></span>
<span class="line"><span style="color:#24292e;">  tree* t = top-&gt;right;</span></span>
<span class="line"><span style="color:#24292e;">  s.pop();</span></span>
<span class="line"><span style="color:#24292e;">  while(t){</span></span>
<span class="line"><span style="color:#24292e;">   s.push(t);</span></span>
<span class="line"><span style="color:#24292e;">   t = t-&gt;left;</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;"> }</span></span>
<span class="line"><span style="color:#24292e;"> return r;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>上述代码是实现树的三种非递归遍历的基础，请务必理解。 </p><p>接下来就可以实现树的三种非递归遍历了。</p><h2 id="非递归遍历" tabindex="-1">非递归遍历 <a class="header-anchor" href="#非递归遍历" aria-label="Permalink to &quot;非递归遍历&amp;#x20;&quot;">​</a></h2><p>有的同学可能已经注意到了，上一节中的代码中没有printf语句，如果让你利用上面的代码以先序遍历方式打印节点该怎么实现呢？如果你真的已经理解了上述代码那么就非常简单了，对于先序遍历来说，我们只需要在<strong>节点入栈</strong>之前打印出来就可以了：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">void search_pre_order(tree* root) {</span></span>
<span class="line"><span style="color:#e1e4e8;"> if(root == NULL)</span></span>
<span class="line"><span style="color:#e1e4e8;"> return ;</span></span>
<span class="line"><span style="color:#e1e4e8;"> stack&lt;tree*&gt;s;</span></span>
<span class="line"><span style="color:#e1e4e8;"> // 不管三七二十一先把从根节点开始的所有左子树节点放入栈中</span></span>
<span class="line"><span style="color:#e1e4e8;"> while(root){</span></span>
<span class="line"><span style="color:#e1e4e8;">  printf(&quot;%d &quot;, root-&gt;value); // 节点入栈前打印</span></span>
<span class="line"><span style="color:#e1e4e8;">  s.push(root);</span></span>
<span class="line"><span style="color:#e1e4e8;">  root=root-&gt;left;</span></span>
<span class="line"><span style="color:#e1e4e8;"> }</span></span>
<span class="line"><span style="color:#e1e4e8;"> while(!s.empty()){</span></span>
<span class="line"><span style="color:#e1e4e8;">  // 查看栈顶元素，如果栈顶元素有右子树那么右子树入栈并重复过程1直到栈空为止</span></span>
<span class="line"><span style="color:#e1e4e8;">  tree* top = s.top();</span></span>
<span class="line"><span style="color:#e1e4e8;">  tree* t = top-&gt;right;</span></span>
<span class="line"><span style="color:#e1e4e8;">  s.pop();</span></span>
<span class="line"><span style="color:#e1e4e8;">  while(t){</span></span>
<span class="line"><span style="color:#e1e4e8;">   printf(&quot;%d &quot;, root-&gt;value); // 节点入栈前打印</span></span>
<span class="line"><span style="color:#e1e4e8;">   s.push(t);</span></span>
<span class="line"><span style="color:#e1e4e8;">   t = t-&gt;left;</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;"> }</span></span>
<span class="line"><span style="color:#e1e4e8;"> return r;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">void search_pre_order(tree* root) {</span></span>
<span class="line"><span style="color:#24292e;"> if(root == NULL)</span></span>
<span class="line"><span style="color:#24292e;"> return ;</span></span>
<span class="line"><span style="color:#24292e;"> stack&lt;tree*&gt;s;</span></span>
<span class="line"><span style="color:#24292e;"> // 不管三七二十一先把从根节点开始的所有左子树节点放入栈中</span></span>
<span class="line"><span style="color:#24292e;"> while(root){</span></span>
<span class="line"><span style="color:#24292e;">  printf(&quot;%d &quot;, root-&gt;value); // 节点入栈前打印</span></span>
<span class="line"><span style="color:#24292e;">  s.push(root);</span></span>
<span class="line"><span style="color:#24292e;">  root=root-&gt;left;</span></span>
<span class="line"><span style="color:#24292e;"> }</span></span>
<span class="line"><span style="color:#24292e;"> while(!s.empty()){</span></span>
<span class="line"><span style="color:#24292e;">  // 查看栈顶元素，如果栈顶元素有右子树那么右子树入栈并重复过程1直到栈空为止</span></span>
<span class="line"><span style="color:#24292e;">  tree* top = s.top();</span></span>
<span class="line"><span style="color:#24292e;">  tree* t = top-&gt;right;</span></span>
<span class="line"><span style="color:#24292e;">  s.pop();</span></span>
<span class="line"><span style="color:#24292e;">  while(t){</span></span>
<span class="line"><span style="color:#24292e;">   printf(&quot;%d &quot;, root-&gt;value); // 节点入栈前打印</span></span>
<span class="line"><span style="color:#24292e;">   s.push(t);</span></span>
<span class="line"><span style="color:#24292e;">   t = t-&gt;left;</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;"> }</span></span>
<span class="line"><span style="color:#24292e;"> return r;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>那么对于中序遍历呢？实际上也非常简单，我们只需要在<strong>节点pop</strong>时打印就可以了：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">void search_in_order(tree* root) {</span></span>
<span class="line"><span style="color:#e1e4e8;"> if(root == NULL)</span></span>
<span class="line"><span style="color:#e1e4e8;"> return ;</span></span>
<span class="line"><span style="color:#e1e4e8;"> stack&lt;tree*&gt;s;</span></span>
<span class="line"><span style="color:#e1e4e8;"> // 不管三七二十一先把从根节点开始的所有左子树节点放入栈中</span></span>
<span class="line"><span style="color:#e1e4e8;"> while(root){</span></span>
<span class="line"><span style="color:#e1e4e8;">  s.push(root);</span></span>
<span class="line"><span style="color:#e1e4e8;">  root=root-&gt;left;</span></span>
<span class="line"><span style="color:#e1e4e8;"> }</span></span>
<span class="line"><span style="color:#e1e4e8;"> while(!s.empty()){</span></span>
<span class="line"><span style="color:#e1e4e8;">  // 查看栈顶元素，如果栈顶元素有右子树那么右子树入栈并重复过程1直到栈空为止</span></span>
<span class="line"><span style="color:#e1e4e8;">  tree* top = s.top();</span></span>
<span class="line"><span style="color:#e1e4e8;">  printf(&quot;%d &quot;, top-&gt;value); // 节点pop时打印</span></span>
<span class="line"><span style="color:#e1e4e8;">  tree* t = top-&gt;right;</span></span>
<span class="line"><span style="color:#e1e4e8;">  s.pop();</span></span>
<span class="line"><span style="color:#e1e4e8;">  while(t){</span></span>
<span class="line"><span style="color:#e1e4e8;">   s.push(t);</span></span>
<span class="line"><span style="color:#e1e4e8;">   t = t-&gt;left;</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;"> }</span></span>
<span class="line"><span style="color:#e1e4e8;"> return r;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">void search_in_order(tree* root) {</span></span>
<span class="line"><span style="color:#24292e;"> if(root == NULL)</span></span>
<span class="line"><span style="color:#24292e;"> return ;</span></span>
<span class="line"><span style="color:#24292e;"> stack&lt;tree*&gt;s;</span></span>
<span class="line"><span style="color:#24292e;"> // 不管三七二十一先把从根节点开始的所有左子树节点放入栈中</span></span>
<span class="line"><span style="color:#24292e;"> while(root){</span></span>
<span class="line"><span style="color:#24292e;">  s.push(root);</span></span>
<span class="line"><span style="color:#24292e;">  root=root-&gt;left;</span></span>
<span class="line"><span style="color:#24292e;"> }</span></span>
<span class="line"><span style="color:#24292e;"> while(!s.empty()){</span></span>
<span class="line"><span style="color:#24292e;">  // 查看栈顶元素，如果栈顶元素有右子树那么右子树入栈并重复过程1直到栈空为止</span></span>
<span class="line"><span style="color:#24292e;">  tree* top = s.top();</span></span>
<span class="line"><span style="color:#24292e;">  printf(&quot;%d &quot;, top-&gt;value); // 节点pop时打印</span></span>
<span class="line"><span style="color:#24292e;">  tree* t = top-&gt;right;</span></span>
<span class="line"><span style="color:#24292e;">  s.pop();</span></span>
<span class="line"><span style="color:#24292e;">  while(t){</span></span>
<span class="line"><span style="color:#24292e;">   s.push(t);</span></span>
<span class="line"><span style="color:#24292e;">   t = t-&gt;left;</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;"> }</span></span>
<span class="line"><span style="color:#24292e;"> return r;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>对于后续遍历呢？ </p><p>后续遍历相对复杂，原因就在于出栈的情况不一样了。 </p><p>在先序和中序遍历过程中，只要左子树处理完毕实际上栈顶元素就可以出栈了，但是后续遍历情况不同，什么是后续遍历？只有左子树和右子树都遍历完毕才可以处理当前节点，这是后续遍历，那么我们该如何知道当前节点的左子树和右子树都处理完了呢？</p><p>显然我们需要某种方法记录下遍历的过程，实际上我们只需要记录下遍历的前一个节点就足够了。 </p><p>如果我们知道了遍历过程中的前一个节点，那么我们就可以做如下判断了：</p><ol><li>如果前一个节点是当前节点的右子树，那么说明右子树遍历完毕可以pop了 </li><li>如果前一个节点是当前节点的左子树而且当前节点右子树为空，那么说明可以pop了 </li><li>如果当前节点的左子树和右子树都为空，也就是叶子节点那么说明可以pop了 </li></ol><p>这样什么情况下出栈的问题就解决了，如果不符合这些情况就不能出栈。 </p><p>只需要根据以上分析对代码稍加修改就可以了：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">void search_post_order(tree* root) {</span></span>
<span class="line"><span style="color:#e1e4e8;"> if(root == NULL)</span></span>
<span class="line"><span style="color:#e1e4e8;"> return ;</span></span>
<span class="line"><span style="color:#e1e4e8;"> stack&lt;tree*&gt;s;</span></span>
<span class="line"><span style="color:#e1e4e8;"> TreeNode* last=NULL; // 记录遍历的前一个节点</span></span>
<span class="line"><span style="color:#e1e4e8;"> // 不管三七二十一先把从根节点开始的所有左子树节点放入栈中</span></span>
<span class="line"><span style="color:#e1e4e8;"> while(root){</span></span>
<span class="line"><span style="color:#e1e4e8;">  s.push(root);</span></span>
<span class="line"><span style="color:#e1e4e8;">  root=root-&gt;left;</span></span>
<span class="line"><span style="color:#e1e4e8;"> }</span></span>
<span class="line"><span style="color:#e1e4e8;"> while(!s.empty()){</span></span>
<span class="line"><span style="color:#e1e4e8;">  tree* top = s.top();</span></span>
<span class="line"><span style="color:#e1e4e8;">  if (top-&gt;left ==NULL &amp;&amp; top-&gt;right == NULL || // 当前节点为叶子节点</span></span>
<span class="line"><span style="color:#e1e4e8;">  last==top-&gt;right || // 前一个节点为当前节点的右子树</span></span>
<span class="line"><span style="color:#e1e4e8;">  top-&gt;right==NULL &amp;&amp; last==top-&gt;left){ // 前一个节点为当前节点左子树且右子树为空</span></span>
<span class="line"><span style="color:#e1e4e8;">   printf(&quot;%d &quot;, top-&gt;value); // 节点pop时打印</span></span>
<span class="line"><span style="color:#e1e4e8;">   last = top; // 记录下前一个节点</span></span>
<span class="line"><span style="color:#e1e4e8;">   s.pop();</span></span>
<span class="line"><span style="color:#e1e4e8;">  } else {</span></span>
<span class="line"><span style="color:#e1e4e8;">   tree* t = top-&gt;right;</span></span>
<span class="line"><span style="color:#e1e4e8;">   while(t){</span></span>
<span class="line"><span style="color:#e1e4e8;">    s.push(t);</span></span>
<span class="line"><span style="color:#e1e4e8;">    t = t-&gt;left;</span></span>
<span class="line"><span style="color:#e1e4e8;">   }</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;"> }</span></span>
<span class="line"><span style="color:#e1e4e8;"> return r;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">void search_post_order(tree* root) {</span></span>
<span class="line"><span style="color:#24292e;"> if(root == NULL)</span></span>
<span class="line"><span style="color:#24292e;"> return ;</span></span>
<span class="line"><span style="color:#24292e;"> stack&lt;tree*&gt;s;</span></span>
<span class="line"><span style="color:#24292e;"> TreeNode* last=NULL; // 记录遍历的前一个节点</span></span>
<span class="line"><span style="color:#24292e;"> // 不管三七二十一先把从根节点开始的所有左子树节点放入栈中</span></span>
<span class="line"><span style="color:#24292e;"> while(root){</span></span>
<span class="line"><span style="color:#24292e;">  s.push(root);</span></span>
<span class="line"><span style="color:#24292e;">  root=root-&gt;left;</span></span>
<span class="line"><span style="color:#24292e;"> }</span></span>
<span class="line"><span style="color:#24292e;"> while(!s.empty()){</span></span>
<span class="line"><span style="color:#24292e;">  tree* top = s.top();</span></span>
<span class="line"><span style="color:#24292e;">  if (top-&gt;left ==NULL &amp;&amp; top-&gt;right == NULL || // 当前节点为叶子节点</span></span>
<span class="line"><span style="color:#24292e;">  last==top-&gt;right || // 前一个节点为当前节点的右子树</span></span>
<span class="line"><span style="color:#24292e;">  top-&gt;right==NULL &amp;&amp; last==top-&gt;left){ // 前一个节点为当前节点左子树且右子树为空</span></span>
<span class="line"><span style="color:#24292e;">   printf(&quot;%d &quot;, top-&gt;value); // 节点pop时打印</span></span>
<span class="line"><span style="color:#24292e;">   last = top; // 记录下前一个节点</span></span>
<span class="line"><span style="color:#24292e;">   s.pop();</span></span>
<span class="line"><span style="color:#24292e;">  } else {</span></span>
<span class="line"><span style="color:#24292e;">   tree* t = top-&gt;right;</span></span>
<span class="line"><span style="color:#24292e;">   while(t){</span></span>
<span class="line"><span style="color:#24292e;">    s.push(t);</span></span>
<span class="line"><span style="color:#24292e;">    t = t-&gt;left;</span></span>
<span class="line"><span style="color:#24292e;">   }</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;"> }</span></span>
<span class="line"><span style="color:#24292e;"> return r;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&amp;#x20;&quot;">​</a></h2><p>树的递归遍历相对简单且容易理解，但是递归调用实际上隐藏了相对复杂的遍历过程，要想以非递归的方式来遍历二叉树就需要仔细理解递归调用过程。</p>`,121),g=[h];function u(v,_,f,b,k,m){return n(),a("div",null,g)}const C=s(d,[["render",u]]);export{L as __pageData,C as default};
