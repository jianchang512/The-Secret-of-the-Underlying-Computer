import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "计算机底层的秘密",
  description: "计算机底层的秘密",
  themeConfig: {
    logo:"/logo.jpg",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '开始阅读', link: '/SUMMARY.md' },
	  {text:"On Java8(Java编程思想)",link:'https://onjava8.wonyes.org'},
	  {text:"原创画作",link:'https://www.wonyes.org'}
    ],

    sidebar: [
      {
        text: '目录',
        items: [

{text:"1.你管这破玩意叫CPU？",link:"1.-ni-guan-zhe-po-wan-yi-jiao-cpu.md"},
{text:"2.你管这破玩意叫线程？",link:"2.-ni-guan-zhe-po-wan-yi-jiao-xian-cheng.md"},
{text:"3.执行I/O操作时底层发生了什么？",link:"3.-zhi-hang-io-cao-zuo-shi-di-ceng-fa-sheng-le-shi-mo.md"},
{text:"4.从小白到高手，你需要理解同步与异步",link:"4.-cong-xiao-bai-dao-gao-shou-ni-xu-yao-li-jie-tong-bu-yu-yi-bu.md"},
{text:"5.你管这破玩意叫IO多路复用？",link:"5.-ni-guan-zhe-po-wan-yi-jiao-io-duo-lu-fu-yong.md"},
{text:"6.CPU是如何理解01二进制的？",link:"6.cpu-shi-ru-he-li-jie-01-er-jin-zhi-de.md"},
{text:"7.CPU空闲时在干嘛？",link:"7.cpu-kong-xian-shi-zai-gan-ma.md"},
{text:"8.编译器是如何工作的？",link:"8.-bian-yi-qi-shi-ru-he-gong-zuo-de.md"},
{text:"9.函数运行时在内存中是什么样子？",link:"9.-han-shu-yun-hang-shi-zai-nei-cun-zhong-shi-shi-mo-yang-zi.md"},
{text:"10.彻底理解回调函数",link:"10.-che-di-li-jie-hui-tiao-han-shu.md"},
{text:"11.自己动手实现malloc内存分配器",link:"11.-zi-ji-dong-shou-shi-xian-malloc-nei-cun-fen-pei-qi.md"},
{text:"12.线程池是如何实现的？",link:"12.-xian-cheng-chi-shi-ru-he-shi-xian-de.md"},
{text:"13.线程安全代码到底是怎么编写的？",link:"13.-xian-cheng-an-quan-dai-ma-dao-di-shi-zen-mo-bian-xie-de.md"},
{text:"14.程序员应如何理解协程",link:"14.-cheng-xu-yuan-ying-ru-he-li-jie-xie-cheng.md"},
{text:"15.十个内存引发的大坑",link:"15.-shi-ge-nei-cun-yin-fa-de-da-keng.md"},
{text:"16.CPU是如何读写内存的？",link:"16.cpu-shi-ru-he-du-xie-nei-cun-de.md"},
{text:"17.CPU与分支预测",link:"17.cpu-yu-fen-zhi-yu-ce.md"},
{text:"18.CPU进化论：复杂指令集的诞生",link:"18.cpu-jin-hua-lun-fu-za-zhi-ling-ji-de-dan-sheng.md"},
{text:"19.CPU进化论：精简指令集的诞生",link:"19.cpu-jin-hua-lun-jing-jian-zhi-ling-ji-de-dan-sheng.md"},
{text:"20.CPU核数与线程数有什么关系？",link:"20.cpu-he-shu-yu-xian-cheng-shu-you-shi-mo-guan-xi.md"},
{text:"21.你管这破玩意叫mmap？",link:"21.-ni-guan-zhe-po-wan-yi-jiao-mmap.md"},
{text:"22.彻底理解零拷贝",link:"22.-che-di-li-jie-ling-kao-bei.md"},
{text:"23.操作系统与内核有什么区别？",link:"23.-cao-zuo-xi-tong-yu-nei-he-you-shi-mo-qu-bie.md"},
{text:"24.彻底理解树的递归遍历",link:"24.-che-di-li-jie-shu-de-di-gui-bian-li.md"},
{text:"25.CPU寄存器是如何装入结构体的？",link:"25.cpu-ji-cun-qi-shi-ru-he-zhuang-ru-jie-gou-ti-de.md"},
{text:"26.CPU可以跑多快？从地球到火星的距离告诉你",link:"26.cpu-ke-yi-pao-duo-kuai-cong-di-qiu-dao-huo-xing-de-ju-li-gao-su-ni.md"},
{text:"27.回调函数实现的原理是什么？",link:"27.-hui-tiao-han-shu-shi-xian-de-yuan-li-shi-shi-mo.md"},
{text:"28.程序员还需要理解汇编吗？",link:"28.-cheng-xu-yuan-huan-xu-yao-li-jie-hui-bian-ma.md"},
{text:"29.什么是异步编程？",link:"29.-shi-mo-shi-yi-bu-bian-cheng.md"},
{text:"30.彻底理解C语言中的指针",link:"30.-che-di-li-jiecyu-yan-zhong-de-zhi-zhen.md"},
{text:"31.程序员应如何理解标准库",link:"31.-cheng-xu-yuan-ying-ru-he-li-jie-biao-zhun-ku.md"},
{text:"32.程序员应如何理解头文件？",link:"32.-cheng-xu-yuan-ying-ru-he-li-jie-tou-wen-jian.md"},
{text:"33.程序员应如何理解多态？",link:"33.-cheng-xu-yuan-ying-ru-he-li-jie-duo-tai.md"},
{text:"34.为什么抽象在计算机科学中如此重要？",link:"34.-wei-shi-mo-chou-xiang-zai-ji-suan-ji-ke-xue-zhong-ru-ci-zhong-yao.md"},
{text:"35.彻底理解堆",link:"35.-che-di-li-jie-dui.md"},
{text:"36.彻底理解链表",link:"36.-che-di-li-jie-lian-biao.md"},
{text:"37.知乎回答",link:"37.-zhi-hu-hui-da.md"}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/jianchang512/gitbook' }
    ]
  }
})
