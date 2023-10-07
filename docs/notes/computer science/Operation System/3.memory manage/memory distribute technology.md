# 内存分配方法

![](https://skywalkerch-1303839378.cos.ap-nanjing.myqcloud.com/mypicbed202307021002502.png)

## 连续分配管理方式

### 🍡单一连续分配

内存仅分为系统区和用户区，**用户区仅有一道用户程序**

- 优点：没有外部碎片
- 缺点：仅适用于单用户，单任务的操作系统，且有内部碎片，存储器利用率极低

### 🍭固定分区分配

将内存空间划分为若干大小固定的分区，且**每个分区仅仅装入一道作业**。

- 分区大小相等：程序太小，则造成大量内部碎片，浪费；程序太大一个分区装不下，缺乏灵活性。
- 分区大小不等：一般划分为多个较小的分区，适量的中等分区，和少量的大分区。

>固定分区分配是用于**多道程序环境最简单的分配方法**，优点是无外部碎片，但一个分区仅有一个任务，因此内存利用率很低

### 🧁动态分区分配

在进程装入内存时，根据进程的需要，**动态**地为进程分配内存，分区的大小和数目可随时改变。

- 优点：按需分配，无内部碎片
- 缺点：进程结束调出内存后，会留下一堆**外部碎片**–>可通过**紧凑技术**来解决。

#### 🍢动态分区分配策略

- 首次适应： 空闲分区按地址递增连接；分配时一顺查找直到可以分配
- 邻近适应： 空闲分区按地址递增连接，且形成一个**循环查找路径**；分配时从上一次查找结束的位置开始一顺查找直到可以分配
- 最佳适应：空闲空间按容量**递增**的顺序形成空闲分区链；依次查找。
- 最坏适应：空闲空间按容量**递减**的顺序形成空闲分区链；依次查找。

## 离散分配管理方式

### 🍉分页式

- 页面(页): **进程**中的块
- 页框(页帧): **内存**中的块
- 块(盘块): 外部磁盘的块
- 页表：为了便于在内存中找到进程的每个页面所对应的物理块，系统为每个进程建立一张页表[^1]，记录页面在内存中对应的物理块的地址，页表一般存放在内存当中。

地址结构：

包含两部分：前一部分为页号，后一部分为页内偏移量

![](https://skywalkerch-1303839378.cos.ap-nanjing.myqcloud.com/mypicbed202307030038228.png)

> **注意**： 是**地址结构**决定了虚拟内存的寻址空间大小，(而不是简单的内存与外存容量相加)

eg：一个逻辑地址总位数为32位，前20位为页号，后12位为页内偏移量。其逻辑地址结构如下表格：

| 31 …12位 |   11…0位    |
| :------: | :---------: |
|  页号P   | 页内偏移量W |

> 由于页帧的大小是不变的，这个大小计算机知道，因此只需要给出逻辑地址，计算机就可以算出页内偏移量和页号

基本地址变换机构如下

![](https://skywalkerch-1303839378.cos.ap-nanjing.myqcloud.com/mypicbed202307022337560.jpg)

### 🍓分段式

分段管理方式考虑了用户和程序员，以满足方便编程，信息保护和共享，动态增长和动态链接等多方面的需要。

分段是将用户进程分为几个自然段，例如分为数据段，代码段，栈段，等，类似于汇编语言的section。

由于每个段的大小不一定相同，因此段表不仅要说明段号对应的物理地址还要说明段的长度，计算机利用段表中的段长才能计算出逻辑地址中的段内偏移量和段号。

![](https://skywalkerch-1303839378.cos.ap-nanjing.myqcloud.com/mypicbed202307022336680.png)

![](https://skywalkerch-1303839378.cos.ap-nanjing.myqcloud.com/mypicbed202307022336527.png)

### 🥝段页式

作业空间被分成若干段，每一段分成若干大小相同的页。对于物理内存来说仍然和分页存储管理一样门将物理内存分为大小相同的块（页框）

![](https://skywalkerch-1303839378.cos.ap-nanjing.myqcloud.com/mypicbed202307022335829.jpg)

由上述示意图可以看出，进程每个段都有一个段表，用来记录每一段对应的页表的起始地址，根据这个起始地址和页号找到某页框的物理地址。

段页式的逻辑地址结构如下

| 段号S | 页号P | 页内偏移量W |
| :---: | :---: | :---------: |

![](https://skywalkerch-1303839378.cos.ap-nanjing.myqcloud.com/mypicbed202307022347330.png)

[^1]: 一个进程含有多个页面，因此对应一个页表。


