import{_ as s,o as a,c as e,Q as n}from"./chunks/framework.bf97371d.js";const p="/assets/35_1.d854a07a.jpg",l="/assets/35_2.9f90e28f.jpg",i="/assets/35_3.aa91a57a.jpg",o="/assets/35_4.b3b3c035.jpg",t="/assets/35_5.5a7358cc.jpg",c="/assets/35_6.1798db11.jpg",r="/assets/35_7.46773f46.jpg",d="/assets/35_8.7adfef01.jpg",y="/assets/35_9.b23b3f71.jpg",C=JSON.parse('{"title":"35.彻底理解堆","description":"","frontmatter":{},"headers":[],"relativePath":"35.-che-di-li-jie-dui.md","filePath":"35.-che-di-li-jie-dui.md"}'),h={name:"35.-che-di-li-jie-dui.md"},g=n('<h1 id="_35-彻底理解堆" tabindex="-1">35.彻底理解堆 <a class="header-anchor" href="#_35-彻底理解堆" aria-label="Permalink to &quot;35.彻底理解堆&quot;">​</a></h1><p>在计算机科学中堆是一种很有趣的数据结构，实际上通常用数组来存储堆中的元素，但是我们却可以把数组中元素视为树，如图所示：</p><p><img src="'+p+'" alt=""></p><p>这就是一个普通的数组，但是我们可以将其看做如下图所示的树：</p><p><img src="'+l+'" alt=""></p><p>这是怎么做到的呢？ </p><p>原来虽然我们是在数组中存储的堆元素，但是这里面有一条隐藏的规律，如果你仔细看上图就会发现： </p><ul><li><strong>每一个左子树节点的下标是父节点的2倍</strong></li><li><strong>每一个右子树节点的下标是父节点的2倍再加1</strong></li></ul><p>也就是说在数组中实际上隐藏了上面的这两条规律，如图所示：</p><p><img src="'+i+`" alt=""></p><p><strong>堆这种数据结构最棒的地方在于我们无需像树一样存储左右子树的信息</strong>，而只需要通过下标运算就可以轻松的找到一个节点的左子树节点、右子树节点以及父节点，如下所示，相对于树这种数据结构来说堆更加节省内存。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">int parent(int i){ // 计算给定下标的父节点</span></span>
<span class="line"><span style="color:#e1e4e8;"> return i/2;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">int left(int i){ // 计算给定下标的左子树节点</span></span>
<span class="line"><span style="color:#e1e4e8;"> return 2*i;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">int right(int i){ // 计算给定下标的右子树节点</span></span>
<span class="line"><span style="color:#e1e4e8;"> return 2*i+1;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">int parent(int i){ // 计算给定下标的父节点</span></span>
<span class="line"><span style="color:#24292e;"> return i/2;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">int left(int i){ // 计算给定下标的左子树节点</span></span>
<span class="line"><span style="color:#24292e;"> return 2*i;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">int right(int i){ // 计算给定下标的右子树节点</span></span>
<span class="line"><span style="color:#24292e;"> return 2*i+1;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>除了上述数组下标上的规律以外，你还会发现堆中的每一个节点的值都比左右子树节点大，这被称为<strong>大根堆</strong>，即对于大根堆来说以下一定成立：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">array[i] &gt; array[left(i)] &amp;&amp; array[i] &gt; array[right(i)] == true</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">array[i] &gt; array[left(i)] &amp;&amp; array[i] &gt; array[right(i)] == true</span></span></code></pre></div><p>相应的如果堆中每个一节点的值都比左右子树节点的值小，那么这被称为<strong>小根堆</strong>，即对于小根堆来说以下一定成立：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">array[i] &lt; array[left(i)] &amp;&amp; array[i] &lt; array[right(i)] == true</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">array[i] &lt; array[left(i)] &amp;&amp; array[i] &lt; array[right(i)] == true</span></span></code></pre></div><p>以上就是堆这种数据结构的全部内容了。 </p><p>那么接下来的问题就是，给定一个数组，我们该如何将数组中的值调整成一个堆呢？ </p><h2 id="如何在给定数组上创建堆" tabindex="-1">如何在给定数组上创建堆 <a class="header-anchor" href="#如何在给定数组上创建堆" aria-label="Permalink to &quot;如何在给定数组上创建堆&quot;">​</a></h2><p>在这里我们以大根堆为例来讲解如何在给定数组上创建一个堆。 </p><p>给定数组的初始状态如下图a所示，从图中我们看到除array[2]之外其它所有节点都满足大根堆的要求了，接下来我们要做的就是把array[2]也调整成为大根堆，那么该怎么调整呢？</p><p><img src="`+o+'" alt=""></p><p><img src="'+t+'" alt=""></p><p>很简单，我们只需要将array[2]和其左右子树节点进行比较，最大的那个和array[2]进行交换，如图b所示，array[2]和其左子树array[4]以及右子树array[5]中最大的是array[4]，这样array[2]和array[4]进行交换，这样array[2]就满足大根堆的要求了，如图b所示；</p><p><img src="'+c+'" alt=""></p><p>但此时array[4]不满足要求，怎么办呢？还是重复上面的过程，在array[4]的左子树和右子树中选出一个最大的和array[4]交换，最终我们来到了图c，此时所有元素都满足了堆的要求，这个过程就好比石子在水中下沉，一些资料中将这个过程称形象的称为“shift down”。</p><p><img src="'+r+`" alt=""></p><p>现在我们知道了假设堆中有一个元素i不满足大根堆的要求，那么该如何调整呢：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">void keep_max_heap(int i){</span></span>
<span class="line"><span style="color:#e1e4e8;"> int l = left(i);</span></span>
<span class="line"><span style="color:#e1e4e8;"> int r = right(i);</span></span>
<span class="line"><span style="color:#e1e4e8;"> int larget = i;</span></span>
<span class="line"><span style="color:#e1e4e8;"> if (l &lt; heap_size &amp;&amp; array[l] &gt; array[i])</span></span>
<span class="line"><span style="color:#e1e4e8;"> larget = l;</span></span>
<span class="line"><span style="color:#e1e4e8;"> if (r &lt; heap_size &amp;&amp; array[r] &gt; array[larget])</span></span>
<span class="line"><span style="color:#e1e4e8;"> larget = r;</span></span>
<span class="line"><span style="color:#e1e4e8;"> if (larget != i){</span></span>
<span class="line"><span style="color:#e1e4e8;"> swap(array[larget], array[i]);</span></span>
<span class="line"><span style="color:#e1e4e8;"> max_heap(larget);</span></span>
<span class="line"><span style="color:#e1e4e8;"> }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">void keep_max_heap(int i){</span></span>
<span class="line"><span style="color:#24292e;"> int l = left(i);</span></span>
<span class="line"><span style="color:#24292e;"> int r = right(i);</span></span>
<span class="line"><span style="color:#24292e;"> int larget = i;</span></span>
<span class="line"><span style="color:#24292e;"> if (l &lt; heap_size &amp;&amp; array[l] &gt; array[i])</span></span>
<span class="line"><span style="color:#24292e;"> larget = l;</span></span>
<span class="line"><span style="color:#24292e;"> if (r &lt; heap_size &amp;&amp; array[r] &gt; array[larget])</span></span>
<span class="line"><span style="color:#24292e;"> larget = r;</span></span>
<span class="line"><span style="color:#24292e;"> if (larget != i){</span></span>
<span class="line"><span style="color:#24292e;"> swap(array[larget], array[i]);</span></span>
<span class="line"><span style="color:#24292e;"> max_heap(larget);</span></span>
<span class="line"><span style="color:#24292e;"> }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>以上代码即keep_max_heap函数就是刚才讲解调整节点的过程，该过程的时间复杂度为O(logn)。 </p><p>但是到目前为止我们依然不知道该如何在给定的数组上创建堆，不要着急，我们首先来观察一下给定的数组的初始状态，如图所示：</p><p><img src="`+d+`" alt=""></p><p>实际上堆是一颗完全二叉树，那么这对于我们来说有什么用呢？这个性质非常有用，这个性质告诉我们要想将一个数组转换为堆，我们只需要从第一个非叶子节点开始调整即可。 </p><p>那么第一个非叶子节点在哪里呢？假设堆的大小为heap_size，那么第一个非叶子节点就是：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">heap_size / 2;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">heap_size / 2;</span></span></code></pre></div><p>可这是为什么呢？原因很简单，因为第一个非叶子节点总是最后一个节点的父节点，因此第一个非叶子节点就是：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">parent(heap_size) == heap_size / 2</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">parent(heap_size) == heap_size / 2</span></span></code></pre></div><p>有了这些准备知识就可以将数组转为堆了，我们只需要依次在第一个非叶子节点到第二个节点上调用一下keep_max_heap就可以了：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">parent(heap_size) == heap_size / 2</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">parent(heap_size) == heap_size / 2</span></span></code></pre></div><p>有了这些准备知识就可以将数组转为堆了，我们只需要依次在第一个非叶子节点到第二个节点上调用一下keep_max_heap就可以了：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">void build_max_heap() {</span></span>
<span class="line"><span style="color:#e1e4e8;"> for (int i = heap_size/2; i&gt;=1; i--)</span></span>
<span class="line"><span style="color:#e1e4e8;"> keep_max_heap(i);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">void build_max_heap() {</span></span>
<span class="line"><span style="color:#24292e;"> for (int i = heap_size/2; i&gt;=1; i--)</span></span>
<span class="line"><span style="color:#24292e;"> keep_max_heap(i);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>这样，一个堆就建成了。</p><h2 id="增加堆节点以及删除堆节点" tabindex="-1">增加堆节点以及删除堆节点 <a class="header-anchor" href="#增加堆节点以及删除堆节点" aria-label="Permalink to &quot;增加堆节点以及删除堆节点&amp;#x20;&quot;">​</a></h2><p>对于堆这种数据结构来说除了在给定数组上创建出一个堆之外，还需要支持增加节点以及删除节点的操作，在这里我们依然以大根堆为例来讲解，首先来看删除堆节点。 </p><h2 id="删除节点" tabindex="-1">删除节点 <a class="header-anchor" href="#删除节点" aria-label="Permalink to &quot;删除节点&amp;#x20;&quot;">​</a></h2><p>删除堆中的一个节点实际用到的正是keep_max_heap这个过程，假设删除的是节点i，那么我只需要将节点i和最后一个元素交换，并且在节点i上调用keep_max_heep函数就可以了：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">void delete_heep_node(int i) {</span></span>
<span class="line"><span style="color:#e1e4e8;"> swap(array[i], array[heap_size]);</span></span>
<span class="line"><span style="color:#e1e4e8;"> --heap_size;</span></span>
<span class="line"><span style="color:#e1e4e8;"> keep_max_heap(i);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">void delete_heep_node(int i) {</span></span>
<span class="line"><span style="color:#24292e;"> swap(array[i], array[heap_size]);</span></span>
<span class="line"><span style="color:#24292e;"> --heap_size;</span></span>
<span class="line"><span style="color:#24292e;"> keep_max_heap(i);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>注意在该过程中不要忘了将堆的大小减一。 </p><h2 id="增加节点" tabindex="-1">增加节点 <a class="header-anchor" href="#增加节点" aria-label="Permalink to &quot;增加节点&amp;#x20;&quot;">​</a></h2><p>增加堆中的一个节点相对容易，如图所示，假设堆中新增了一个节点16，那么该如何位置堆的性质呢？很简单，我们只需要将16和其父节点进行比较，如果不符合要求就交换，并重复该过程直到根节点为止，这个过程就好比水中的气泡上浮，有的资料也将这个过程形象的称为“shift up”，该过程的时间复杂度为O(logn)。</p><p><img src="`+y+`" alt=""></p><p>用代码表示就是如下add_heap_node函数：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">void add_heap_node(int i){</span></span>
<span class="line"><span style="color:#e1e4e8;"> if (i == 0)</span></span>
<span class="line"><span style="color:#e1e4e8;"> return;</span></span>
<span class="line"><span style="color:#e1e4e8;"> int p = parent(i);</span></span>
<span class="line"><span style="color:#e1e4e8;"> if(array[i] &gt; array[p]) {</span></span>
<span class="line"><span style="color:#e1e4e8;"> swap(array[i], array[p]);</span></span>
<span class="line"><span style="color:#e1e4e8;"> add_heap_node(p);</span></span>
<span class="line"><span style="color:#e1e4e8;"> }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">void add_heap_node(int i){</span></span>
<span class="line"><span style="color:#24292e;"> if (i == 0)</span></span>
<span class="line"><span style="color:#24292e;"> return;</span></span>
<span class="line"><span style="color:#24292e;"> int p = parent(i);</span></span>
<span class="line"><span style="color:#24292e;"> if(array[i] &gt; array[p]) {</span></span>
<span class="line"><span style="color:#24292e;"> swap(array[i], array[p]);</span></span>
<span class="line"><span style="color:#24292e;"> add_heap_node(p);</span></span>
<span class="line"><span style="color:#24292e;"> }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>至此，关于堆的性质、堆的创建以及增删就讲解完毕了，接下来我们看一下堆这种数据结构都可以用来做些什么。 </p><h2 id="堆的应用" tabindex="-1">堆的应用 <a class="header-anchor" href="#堆的应用" aria-label="Permalink to &quot;堆的应用&amp;#x20;&quot;">​</a></h2><p>在这一节中我们介绍三种堆常见的应用场景。 </p><h2 id="排序" tabindex="-1">排序 <a class="header-anchor" href="#排序" aria-label="Permalink to &quot;排序&amp;#x20;&quot;">​</a></h2><p>有的同学可能会有疑问，堆这种数据结构该如何来排序呢？ </p><p>让我们来仔细想一想，对于大根堆来说其性质就是所有节点的值都比其左子树节点和右子树节点的值要大，那么我们很容易得出以下结论，对于大根堆来说： </p><p><em><strong>堆中的第一个元素就是所有元素的最大值</strong></em>。 </p><p>有了这样一个结论就可以将堆应用在排序上了：</p><ol><li>将大根堆中的第一个元素和最后一个元素交换 </li><li>堆大小减一 </li><li>在第一个元素上调用keep_max_heap维持大根堆的性质</li></ol><p>这个过程能进行排序是很显然的，实际上我们就是不断的将数组中的最大值放到数组最后一个位置，次大值放到最大值的前一个位置，利用的就是大根堆的第一个元素是数组中所有元素最大值这个性 质。 </p><p>用代码表示就如下所示：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">void heap_sort(){</span></span>
<span class="line"><span style="color:#e1e4e8;"> build_max_heap();</span></span>
<span class="line"><span style="color:#e1e4e8;"> for(int i=heap_size-1;i&gt;=1;i--){</span></span>
<span class="line"><span style="color:#e1e4e8;"> swap(array[0],array[i]);</span></span>
<span class="line"><span style="color:#e1e4e8;"> --heap_size;</span></span>
<span class="line"><span style="color:#e1e4e8;"> keep_max_heap(0);</span></span>
<span class="line"><span style="color:#e1e4e8;"> }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">void heap_sort(){</span></span>
<span class="line"><span style="color:#24292e;"> build_max_heap();</span></span>
<span class="line"><span style="color:#24292e;"> for(int i=heap_size-1;i&gt;=1;i--){</span></span>
<span class="line"><span style="color:#24292e;"> swap(array[0],array[i]);</span></span>
<span class="line"><span style="color:#24292e;"> --heap_size;</span></span>
<span class="line"><span style="color:#24292e;"> keep_max_heap(0);</span></span>
<span class="line"><span style="color:#24292e;"> }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>执行完heap_sort函数后array中的值就是有序的了，堆排序的时间复杂度为O(nlogn)。 </p><h2 id="求最大-最小-的k个数" tabindex="-1">求最大(最小)的K个数 <a class="header-anchor" href="#求最大-最小-的k个数" aria-label="Permalink to &quot;求最大(最小)的K个数&amp;#x20;&quot;">​</a></h2><p>对于给定数组如何求出数组中最大的或者最小的K个数，有的同学可能觉得非常简单，不就是排个序然后就得到最大的或最小的K个数了吗，我们知道，排序的时间复杂度为O(nlogn)，那么有没有什么更快的方法吗？ </p><p>答案是肯定的，堆可以来解决这个问题，在这里我们以求数组中最小的K个值为例。 </p><p>对于给定的数组，我们可以将数组中的前k个数建成一个大根堆，注意是大根堆，建成大根堆后array[0]就是这k个数中的最大值； </p><p>接下来我们依次将数组中K+1之后的元素依次和array[0]进行比较：</p><ol><li>如果比array[0]大，那么我们知道该元素一定不属于最小的K个数； </li><li>如果比array[0]小，那么我们知道array[0]就肯定不属于最小的K个数了，这时我们需要将该元素和array[0]进行交换，并在位置0上调用keep_max_heap函数维护大根堆的性质</li></ol><p>这样比较完后堆中的所有元素就是数组中最小的k个数，整个过程如下所示：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">void get_maxk(int k) {</span></span>
<span class="line"><span style="color:#e1e4e8;"> heap_size = k; // 设置堆大小为k</span></span>
<span class="line"><span style="color:#e1e4e8;"> build_max_heap(); // 创建大小为k的堆</span></span>
<span class="line"><span style="color:#e1e4e8;"> for(int i=k;i&lt;array.size();i++){</span></span>
<span class="line"><span style="color:#e1e4e8;"> if(array[i] &gt;= array[0]) // 和堆顶元素进行比较，小于堆顶则处理</span></span>
<span class="line"><span style="color:#e1e4e8;"> continue;</span></span>
<span class="line"><span style="color:#e1e4e8;"> array[0] = array[i];</span></span>
<span class="line"><span style="color:#e1e4e8;"> keep_max_heap(0);</span></span>
<span class="line"><span style="color:#e1e4e8;"> }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">void get_maxk(int k) {</span></span>
<span class="line"><span style="color:#24292e;"> heap_size = k; // 设置堆大小为k</span></span>
<span class="line"><span style="color:#24292e;"> build_max_heap(); // 创建大小为k的堆</span></span>
<span class="line"><span style="color:#24292e;"> for(int i=k;i&lt;array.size();i++){</span></span>
<span class="line"><span style="color:#24292e;"> if(array[i] &gt;= array[0]) // 和堆顶元素进行比较，小于堆顶则处理</span></span>
<span class="line"><span style="color:#24292e;"> continue;</span></span>
<span class="line"><span style="color:#24292e;"> array[0] = array[i];</span></span>
<span class="line"><span style="color:#24292e;"> keep_max_heap(0);</span></span>
<span class="line"><span style="color:#24292e;"> }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>那么对于求数组中最大的k个数呢，显然我们应该建立小根堆并进行同样的处理。</p><p>注意使用堆来求解数组中最小K个元素的时间复杂度为O(nlogk)，显然k&lt;n，那么我们的算法优于排序算法。 </p><h2 id="定时器是如何实现的" tabindex="-1">定时器是如何实现的 <a class="header-anchor" href="#定时器是如何实现的" aria-label="Permalink to &quot;定时器是如何实现的&amp;#x20;&quot;">​</a></h2><p>我们要讲解的堆的最后一个应用是定时器，timer。 </p><p>定时器相信有的同学已经使用过了，定义一个timer变量，传入等待时间以及一个回调函数，到时后自动调用我们传入的回调函数，是不是很神奇，那么你有没有好奇过定时器到底是怎么实现的呢？ </p><p>我们先来看看定时器中都有什么，定时器中有两种东西：</p><ul><li>一个是我们传入的时延，比如传入2那就是等待2秒钟；传入10就是等待10秒钟； </li><li>另一个是我们传入的回调函数，当定时器到时之后调用回调函数。</li></ul><p>因此我们要做的就是在用户指定的时间之后调用回调函数，就这么简单；为做到这一点，显然我们必须知道什么时间该调用用户传入的回调函数。 </p><p>最简单的一种实现方式是链表，我们将用户定义的定时器用链表管理起来，并按照等待时间大小降序链接，这样我们不断检查链表中第一个定时器的时间，如果到时后则调用其回调函数并将其从链表中删除。 </p><p>链表的这种实现方式比较简单，但是有一个缺点，那就是我们必须保持链表的有序性，在这种情况下向链表中新增一个定时器就需要遍历一边链表，因此时间复杂度为O(n)，如果定时器很多就会有性能问题。 </p><p>那么该怎样改进呢？ </p><p>初看起来，堆这种数据结构和定时器八竿子打不着，但是如果你仔细想一想定时器的链表实现就会看到，<strong>我们实际上要找的仅仅就是时延最短的那一个定时器</strong>，链表之所以有序就是为此目的服务的，那么要得到一个数组中的最小值我们一定要让数组有序才可以吗？ </p><p>实际上我们无需维护数组的有序就可以轻松得到数组的最小值，答案就是刚学过的小根堆。 </p><p>只要我们将所有的定时器维护成为一个小根堆，那么我们就可以很简单的获取时延最小的那个定时器(堆顶)，同时向堆中新增定时器无需遍历整个数组，其时间复杂度为O(logn)，比起链表的实现要好很多。</p><p>首先我们看一下定时器的定义：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">typedef void (*func)(void* d);</span></span>
<span class="line"><span style="color:#e1e4e8;">class timer</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">public:</span></span>
<span class="line"><span style="color:#e1e4e8;"> timer(int delay, void* d, func cb) {</span></span>
<span class="line"><span style="color:#e1e4e8;"> expire = time(NULL) + delay; // 计算定时器触发时间</span></span>
<span class="line"><span style="color:#e1e4e8;"> data = d;</span></span>
<span class="line"><span style="color:#e1e4e8;"> f = cb;</span></span>
<span class="line"><span style="color:#e1e4e8;"> }</span></span>
<span class="line"><span style="color:#e1e4e8;"> ~timer(){}</span></span>
<span class="line"><span style="color:#e1e4e8;"> time_t expire; // 定时器触发时间</span></span>
<span class="line"><span style="color:#e1e4e8;"> void* data; // timer中所带的数据</span></span>
<span class="line"><span style="color:#e1e4e8;"> func f; // 操作数据的回调函数</span></span>
<span class="line"><span style="color:#e1e4e8;"> int i; // 在堆中的位置</span></span>
<span class="line"><span style="color:#e1e4e8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">typedef void (*func)(void* d);</span></span>
<span class="line"><span style="color:#24292e;">class timer</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">public:</span></span>
<span class="line"><span style="color:#24292e;"> timer(int delay, void* d, func cb) {</span></span>
<span class="line"><span style="color:#24292e;"> expire = time(NULL) + delay; // 计算定时器触发时间</span></span>
<span class="line"><span style="color:#24292e;"> data = d;</span></span>
<span class="line"><span style="color:#24292e;"> f = cb;</span></span>
<span class="line"><span style="color:#24292e;"> }</span></span>
<span class="line"><span style="color:#24292e;"> ~timer(){}</span></span>
<span class="line"><span style="color:#24292e;"> time_t expire; // 定时器触发时间</span></span>
<span class="line"><span style="color:#24292e;"> void* data; // timer中所带的数据</span></span>
<span class="line"><span style="color:#24292e;"> func f; // 操作数据的回调函数</span></span>
<span class="line"><span style="color:#24292e;"> int i; // 在堆中的位置</span></span>
<span class="line"><span style="color:#24292e;">};</span></span></code></pre></div><p>该定时器的定义非常简单，用户需要传入时延，回调函数以及回调函数的参数，注意在定时器内部我们记录的不是时延，而是将时延和当前的时间进行加和从而得到了触发定时器的时间，这样在处理定时器时只需要简单的比较当前时间和定时器触发时间的大小就可以了，同时使用i来记录该timer在堆中的位置。 </p><p>至于堆我们简单的使用vector而不是普通的数组，这样数组的扩增问题就要交给STL了 😃 </p><p>注意在这里定时器是从无到有一个一个加入到堆的，因此在向堆中加入定时器时就开始维护堆的性质，如下即为向堆中增加定时器add_timer函数：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">void add_timer(timer* t){</span></span>
<span class="line"><span style="color:#e1e4e8;"> if (heap_size == timers.size()){</span></span>
<span class="line"><span style="color:#e1e4e8;"> timers.push_back(t);</span></span>
<span class="line"><span style="color:#e1e4e8;"> } else {</span></span>
<span class="line"><span style="color:#e1e4e8;"> timers[heap_size]=t;</span></span>
<span class="line"><span style="color:#e1e4e8;"> }</span></span>
<span class="line"><span style="color:#e1e4e8;"> t-&gt;i = heap_size;</span></span>
<span class="line"><span style="color:#e1e4e8;"> ++heap_size;</span></span>
<span class="line"><span style="color:#e1e4e8;"> add_heap_node(heap_size-1);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">void add_timer(timer* t){</span></span>
<span class="line"><span style="color:#24292e;"> if (heap_size == timers.size()){</span></span>
<span class="line"><span style="color:#24292e;"> timers.push_back(t);</span></span>
<span class="line"><span style="color:#24292e;"> } else {</span></span>
<span class="line"><span style="color:#24292e;"> timers[heap_size]=t;</span></span>
<span class="line"><span style="color:#24292e;"> }</span></span>
<span class="line"><span style="color:#24292e;"> t-&gt;i = heap_size;</span></span>
<span class="line"><span style="color:#24292e;"> ++heap_size;</span></span>
<span class="line"><span style="color:#24292e;"> add_heap_node(heap_size-1);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>当我们删除定时器节点时同样简单，就是堆的节点删除操作：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">void del_timer(timer* t){</span></span>
<span class="line"><span style="color:#e1e4e8;"> if (t == NULL || heap_size == 0)</span></span>
<span class="line"><span style="color:#e1e4e8;"> return;</span></span>
<span class="line"><span style="color:#e1e4e8;"> int pos = t-&gt;i;</span></span>
<span class="line"><span style="color:#e1e4e8;"> swap_pos(timers[pos], timers[heap_size-1]); // 注意不要忘了交换定时器下标</span></span>
<span class="line"><span style="color:#e1e4e8;"> swap(timers[pos], timers[heap_size-1]);</span></span>
<span class="line"><span style="color:#e1e4e8;"> --heap_size;</span></span>
<span class="line"><span style="color:#e1e4e8;"> keep_min_heap(pos); // 该函数实现请参见大根堆的keep_max_heap</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">void del_timer(timer* t){</span></span>
<span class="line"><span style="color:#24292e;"> if (t == NULL || heap_size == 0)</span></span>
<span class="line"><span style="color:#24292e;"> return;</span></span>
<span class="line"><span style="color:#24292e;"> int pos = t-&gt;i;</span></span>
<span class="line"><span style="color:#24292e;"> swap_pos(timers[pos], timers[heap_size-1]); // 注意不要忘了交换定时器下标</span></span>
<span class="line"><span style="color:#24292e;"> swap(timers[pos], timers[heap_size-1]);</span></span>
<span class="line"><span style="color:#24292e;"> --heap_size;</span></span>
<span class="line"><span style="color:#24292e;"> keep_min_heap(pos); // 该函数实现请参见大根堆的keep_max_heap</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>当我可以向堆中增加删除定时器节点后就可以开始不断检测堆中是否有定时器超时了：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">void run(){</span></span>
<span class="line"><span style="color:#e1e4e8;"> while(heap_size) {</span></span>
<span class="line"><span style="color:#e1e4e8;"> if (time(NULL) &lt; timers[0]-&gt;expire) // 注意这里会导致CPU占用过高</span></span>
<span class="line"><span style="color:#e1e4e8;"> continue; // 真正使用时应该调用相应函数挂起等待</span></span>
<span class="line"><span style="color:#e1e4e8;"> if (timers[0]-&gt;f)</span></span>
<span class="line"><span style="color:#e1e4e8;"> timers[0]-&gt;f(timers[0]-&gt;data); // 调用用户回调函数</span></span>
<span class="line"><span style="color:#e1e4e8;"> del_timer(timers[0]);</span></span>
<span class="line"><span style="color:#e1e4e8;"> }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">void run(){</span></span>
<span class="line"><span style="color:#24292e;"> while(heap_size) {</span></span>
<span class="line"><span style="color:#24292e;"> if (time(NULL) &lt; timers[0]-&gt;expire) // 注意这里会导致CPU占用过高</span></span>
<span class="line"><span style="color:#24292e;"> continue; // 真正使用时应该调用相应函数挂起等待</span></span>
<span class="line"><span style="color:#24292e;"> if (timers[0]-&gt;f)</span></span>
<span class="line"><span style="color:#24292e;"> timers[0]-&gt;f(timers[0]-&gt;data); // 调用用户回调函数</span></span>
<span class="line"><span style="color:#24292e;"> del_timer(timers[0]);</span></span>
<span class="line"><span style="color:#24292e;"> }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>注意在这种简单的实现方式下，当堆中没有定时器超时时会存在while循环的空转问题从而导致CPU使用率上升，在真正使用时应该调用相关的函数挂起等待。 </p><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&amp;#x20;&quot;">​</a></h2><p>堆是一种性质非常优良的数据结构，在计算机科学中有着非常广泛的应用，希望大家能通过这篇文章掌握这种数据结构。</p>`,101),_=[g];function m(u,v,k,b,f,x){return a(),e("div",null,_)}const q=s(h,[["render",m]]);export{C as __pageData,q as default};
