import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.bf97371d.js";const g=JSON.parse('{"title":"33.程序员应如何理解多态？","description":"","frontmatter":{},"headers":[],"relativePath":"33.-cheng-xu-yuan-ying-ru-he-li-jie-duo-tai.md","filePath":"33.-cheng-xu-yuan-ying-ru-he-li-jie-duo-tai.md"}'),l={name:"33.-cheng-xu-yuan-ying-ru-he-li-jie-duo-tai.md"},p=e(`<h1 id="_33-程序员应如何理解多态" tabindex="-1">33.程序员应如何理解多态？ <a class="header-anchor" href="#_33-程序员应如何理解多态" aria-label="Permalink to &quot;33.程序员应如何理解多态？&quot;">​</a></h1><p>面向对象编程领域有个非常重要的概念，那就是多态，但是你真的理解这到底是什么意思吗？程序员该如何理解多态？ </p><h2 id="英文中的多态" tabindex="-1">英文中的多态 <a class="header-anchor" href="#英文中的多态" aria-label="Permalink to &quot;英文中的多态&amp;#x20;&quot;">​</a></h2><p>多态一词其英文为“polymorphism”，在讲解多态之前让我们来分析一下这个单词。 </p><p>这个单词其实包含了两部分，一部分是poly；另一部分是morph，这两个词在希腊语中是很多词的词根。</p><ol><li>poly，在希腊语中原指许多的意思，包含poly这个词根的有：polygon，即多边形；polygolt， 即多语言。 </li><li>morph，原指形态，包含morph这个词根的有：morphology，即形态学；morpheus，即希腊 神话中的梦神，可以幻化成任何形态，值得一提的是，电影《黑客帝国》找到Neo的男主角之一 就叫morpheus，中文译作了墨菲斯。</li></ol><p>现在这两个单词拼凑在一起的polymorphism意思就直白多了，在编程语言当中，多态是指用相同的<strong>接口</strong>去表示不同的<strong>实现</strong>。 </p><h2 id="加一点代码-为什么使用多态" tabindex="-1">加一点代码：为什么使用多态 <a class="header-anchor" href="#加一点代码-为什么使用多态" aria-label="Permalink to &quot;加一点代码：为什么使用多态&amp;#x20;&quot;">​</a></h2><p>让我们用一点代码来说明问题，假设代码中有三个class: 自行车(Bicycle)、汽车(Car)和卡车(Truck)，这三个class分别有这样三个实现：Ride()、Run()、Launch()，实际上都是让它们发动起来，如果没有多态的话我们该怎样开动它们呢？(注意这里没有采用特定语言，因为多态是一个通用的概念)</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 实现</span></span>
<span class="line"><span style="color:#e1e4e8;">Bicycle bicyle = new Bicycle();</span></span>
<span class="line"><span style="color:#e1e4e8;">Car car = new Car();</span></span>
<span class="line"><span style="color:#e1e4e8;">Truck truck = new Truck();</span></span>
<span class="line"><span style="color:#e1e4e8;">// 使用部分</span></span>
<span class="line"><span style="color:#e1e4e8;">bicyle.Ride();</span></span>
<span class="line"><span style="color:#e1e4e8;">car.Run();</span></span>
<span class="line"><span style="color:#e1e4e8;">truck.Launch();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 实现</span></span>
<span class="line"><span style="color:#24292e;">Bicycle bicyle = new Bicycle();</span></span>
<span class="line"><span style="color:#24292e;">Car car = new Car();</span></span>
<span class="line"><span style="color:#24292e;">Truck truck = new Truck();</span></span>
<span class="line"><span style="color:#24292e;">// 使用部分</span></span>
<span class="line"><span style="color:#24292e;">bicyle.Ride();</span></span>
<span class="line"><span style="color:#24292e;">car.Run();</span></span>
<span class="line"><span style="color:#24292e;">truck.Launch();</span></span></code></pre></div><p>注意，以上代码包含了两部分：<strong>一部分是类的实现；另一部分是类的使用，意识到这一点对于理解多态非常关键</strong>。 </p><p>现在我们已经知道了使用类的代码包含两部分，在这样的代码实现中如果Bicyle的接口修改了，那么<strong>使用部分的代码同样需要修改</strong>，这是程序员所不想看到的。如果有多态会怎样呢？ </p><p>实际上自行车(Bicycle)、汽车(Car)和卡车(Truck)都是交通工具(Vehicle)，把它们发动起来都是让它们Run起来，因此，如果有多态的话我们可以这样写代码：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 实现部分</span></span>
<span class="line"><span style="color:#e1e4e8;">List&lt;Vehicle&gt; vehicles = { new Bicycle(),</span></span>
<span class="line"><span style="color:#e1e4e8;"> new Car(),</span></span>
<span class="line"><span style="color:#e1e4e8;"> new Truck() };</span></span>
<span class="line"><span style="color:#e1e4e8;">// 使用部分</span></span>
<span class="line"><span style="color:#e1e4e8;">for (v : vechicles)</span></span>
<span class="line"><span style="color:#e1e4e8;"> v.Run();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 实现部分</span></span>
<span class="line"><span style="color:#24292e;">List&lt;Vehicle&gt; vehicles = { new Bicycle(),</span></span>
<span class="line"><span style="color:#24292e;"> new Car(),</span></span>
<span class="line"><span style="color:#24292e;"> new Truck() };</span></span>
<span class="line"><span style="color:#24292e;">// 使用部分</span></span>
<span class="line"><span style="color:#24292e;">for (v : vechicles)</span></span>
<span class="line"><span style="color:#24292e;"> v.Run();</span></span></code></pre></div><p>怎么样，代码是不是一下就简洁多了，<strong>最棒的是不管实现部分代码怎么改动都不会影响到使用部分的代码</strong>，实际上你可以往vehicles中增加任意多对象都不会影响到使用部分，这就是设计模式当中所谓的&quot;<strong>只针对抽象编程，而不是针对实现编程</strong>&quot;。 </p><p>因此我们可以看到，尽管自行车、汽车、卡车是不同的东西，但是当我们将其抽象为交通工具后就可以<strong>一视同仁</strong>的对待它们，这就是多态。 </p><p>现在你应该理解什么是多态以及为什么需要多态了吧。 </p><p>当然为了实现多态，类的定义要稍稍改动一下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">class Vehicle { // 新增抽象类</span></span>
<span class="line"><span style="color:#e1e4e8;"> void Run() {}</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">class Bicycle: Vehicle {</span></span>
<span class="line"><span style="color:#e1e4e8;"> void Run() {......} // Ride修改为Run</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">class Car: Vehicle{</span></span>
<span class="line"><span style="color:#e1e4e8;"> voie Run() {......} // 无需改动</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">class Truck: Vehicle {</span></span>
<span class="line"><span style="color:#e1e4e8;"> void Run() {......} // Launch修改为Run</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">class Vehicle { // 新增抽象类</span></span>
<span class="line"><span style="color:#24292e;"> void Run() {}</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">class Bicycle: Vehicle {</span></span>
<span class="line"><span style="color:#24292e;"> void Run() {......} // Ride修改为Run</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">class Car: Vehicle{</span></span>
<span class="line"><span style="color:#24292e;"> voie Run() {......} // 无需改动</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">class Truck: Vehicle {</span></span>
<span class="line"><span style="color:#24292e;"> void Run() {......} // Launch修改为Run</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>实际上如果你仔细想想的话整数和浮点数就是一种多态，因为你可以把一个整数和一个浮点数相加，也就是以相同的方式使用它们，尽管整数和浮点数是两个不同的数据类型。</p><h2 id="有趣的类比" tabindex="-1">有趣的类比 <a class="header-anchor" href="#有趣的类比" aria-label="Permalink to &quot;有趣的类比&amp;#x20;&quot;">​</a></h2><p>接下来使用一个类比来加深大家对多态的理解。 </p><p>假如美国总统想使用多态的话他该怎么用呢？ </p><p>首先，美国总统有许多幕僚：五角大楼部长(Military Advisers)、司法部部长(Legal Advisers)、能源部部长(Energy)、医疗健康部长(Medical Advisers)等等。 </p><p>在编程领域中实现与使用应该尽可能隔离，就像你不能指望总统精通每一件事一样，美国总统不是这些领域的专家，总统不熟悉的东西很多，但他知道一件事：如何运转一个国家，如果没有多态的话总统该怎样运转一个国家呢？</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">class President {</span></span>
<span class="line"><span style="color:#e1e4e8;"> void RunCountry() {</span></span>
<span class="line"><span style="color:#e1e4e8;"> // 总统根据每个人的身份来告诉它们该做些什么</span></span>
<span class="line"><span style="color:#e1e4e8;"> // 五角大楼部长Tom</span></span>
<span class="line"><span style="color:#e1e4e8;"> tom.IncreaseTroopNumbers();</span></span>
<span class="line"><span style="color:#e1e4e8;"> tom.ImproveSecurity();</span></span>
<span class="line"><span style="color:#e1e4e8;"> // 能源部部长Jerry</span></span>
<span class="line"><span style="color:#e1e4e8;"> jerry.FindOil();</span></span>
<span class="line"><span style="color:#e1e4e8;"> jerry.buildMoreOilShip();</span></span>
<span class="line"><span style="color:#e1e4e8;"> // 医疗健康部长John</span></span>
<span class="line"><span style="color:#e1e4e8;"> John.IncreasePremiums();</span></span>
<span class="line"><span style="color:#e1e4e8;"> John.AddPreexistingConditions();</span></span>
<span class="line"><span style="color:#e1e4e8;"> }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">class President {</span></span>
<span class="line"><span style="color:#24292e;"> void RunCountry() {</span></span>
<span class="line"><span style="color:#24292e;"> // 总统根据每个人的身份来告诉它们该做些什么</span></span>
<span class="line"><span style="color:#24292e;"> // 五角大楼部长Tom</span></span>
<span class="line"><span style="color:#24292e;"> tom.IncreaseTroopNumbers();</span></span>
<span class="line"><span style="color:#24292e;"> tom.ImproveSecurity();</span></span>
<span class="line"><span style="color:#24292e;"> // 能源部部长Jerry</span></span>
<span class="line"><span style="color:#24292e;"> jerry.FindOil();</span></span>
<span class="line"><span style="color:#24292e;"> jerry.buildMoreOilShip();</span></span>
<span class="line"><span style="color:#24292e;"> // 医疗健康部长John</span></span>
<span class="line"><span style="color:#24292e;"> John.IncreasePremiums();</span></span>
<span class="line"><span style="color:#24292e;"> John.AddPreexistingConditions();</span></span>
<span class="line"><span style="color:#24292e;"> }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>在这里我们可以看到，总统正在事实亲力亲为：总统即需要了解增加军队数量又需要知道去哪里开采更多石油，这就意味着如果中东政策改变后总统必须修改其下发的命令，同样五角大楼部长Tom类也要修改。实际上我们想要的是只改变五角大楼部长Tom类而不应该修改总统类，因为总统是很忙的，总统不应该关心这些具体细节，总统想要的只是发出命令，剩下的就交给这些部长了，这样总统就有更多的时间去打高尔夫啦 😃 </p><p>为了让总统有时间去打高尔夫，使用多态是一个很好的办法。 </p><p>多态本质上就是让我们实现一个抽象类或者更具体的就是给出一组通用的接口(common interface)，也就是让各个部长Tom、Jerry、John实现一个接口，姑且就叫“Advise()”，这样总统的任务就简单多了：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">class President {</span></span>
<span class="line"><span style="color:#e1e4e8;">   void RunCountry(Ministers ministers) {</span></span>
<span class="line"><span style="color:#e1e4e8;">     for (m : ministers)</span></span>
<span class="line"><span style="color:#e1e4e8;">       m.Advise();</span></span>
<span class="line"><span style="color:#e1e4e8;">   }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">class President {</span></span>
<span class="line"><span style="color:#24292e;">   void RunCountry(Ministers ministers) {</span></span>
<span class="line"><span style="color:#24292e;">     for (m : ministers)</span></span>
<span class="line"><span style="color:#24292e;">       m.Advise();</span></span>
<span class="line"><span style="color:#24292e;">   }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>因此我们可以看到总统实际上不需要关心细节，所有细节都交给各个部长；总统需要做的就是找到各个部长然后听取它们的意见即可。</p><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&amp;#x20;&quot;">​</a></h2><p>在这里我们详细讲解了面向对象编程领域中一个非常重要的概念，多态。 </p><p>多态可以让程序员针对抽象而不是具体实现来编程，这样的代码会有更好的可扩展性。 </p><p>当然为了使用多态你需要进行抽象，也就是定义一个接口让不同的对象去实现，这样从这个接口的角度看各个对象就一样了，因此可以以一致的方式来使用这些不同类型的对象，这就是多态的威力。 </p><p>今天就到这了，希望这篇文章能帮到你。</p>`,36),o=[p];function c(i,r,t,y,d,u){return n(),a("div",null,o)}const v=s(l,[["render",c]]);export{g as __pageData,v as default};
