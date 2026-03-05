# 圆周运动

### （Claude Opus 4.6 生成）

---

## 开场

同学们好！今天我们来学习**圆周运动的运动学**。

在上一章中，我们已经学过了直线运动——位移、速度、加速度这些概念大家都很熟悉了。但是，自然界中大量的运动并不是沿直线进行的。地球绕太阳转、电子在磁场中偏转、汽车转弯、风扇叶片旋转……这些都是**圆周运动**或者包含圆周运动成分的运动。

今天这节课有三个核心目标：

1. **学会用角量来描述圆周运动**。
2. **用三种不同的数学工具描述同一个运动**——直角坐标、极坐标、复数表示，让大家体会到"坐标选择是人的自由，物理规律不变"。
3. **严格推导出向心加速度和切向加速度的公式**

好，我们开始。

---

## 一、圆周运动的角量描述

### 1.1 为什么需要角量？

假设一个质点在半径为 $R$ 的圆上运动。我们当然可以用直角坐标 $(x, y)$ 来描述它的位置，但这需要两个坐标。而实际上，一旦知道了圆的半径 $R$，质点的位置只需要**一个参数**就能完全确定——那就是它相对于某个参考方向转过的**角度** $\theta$。

这就是为什么我们要引入角量：**对于圆周运动，角量是最经济、最自然的描述方式。**

### 1.2 三个基本角量的定义

我们类比直线运动来定义三个角量：

**（1）角位移 $\Delta\theta$**

定义：质点在时间 $\Delta t$ 内转过的角度。

单位：弧度（rad）。

它和线量的关系非常简单。大家回忆一下弧度的定义：弧长等于半径乘以弧度角。所以：

$$\Delta s = R \cdot \Delta\theta$$

这里 $\Delta s$ 是质点沿圆弧走过的路程。

**（2）角速度 $\omega$**

定义：角位移对时间的导数，描述转动的快慢。

$$\omega = \frac{d\theta}{dt} = \dot{\theta}$$

单位：rad/s。

> 这里我们使用**牛顿的记号**：$\dot{\theta}$ 表示 $\theta$ 对时间 $t$ 求一阶导数。以后我们会经常用这个记号，因为在力学中时间导数非常常见。

角速度和线速度的关系：将 $\Delta s = R\,\Delta\theta$ 两边对时间求导：

$$v = \frac{ds}{dt} = R\frac{d\theta}{dt} = R\omega$$

即：

$$\boxed{v = R\omega}$$

这个公式告诉我们：**同一根转轴上，离轴越远的点，线速度越大**。这就是为什么旋转木马外圈比内圈感觉更快。

**（3）角加速度 $\beta$**

定义：角速度对时间的导数，描述转动快慢的变化率。

$$\beta = \frac{d\omega}{dt} = \frac{d^2\theta}{dt^2} = \ddot{\theta}$$

单位：rad/s²。

它和切向加速度（即沿轨迹切线方向的加速度）的关系：对 $v = R\omega$ 两边对时间求导：

$$a_\tau = \frac{dv}{dt} = R\frac{d\omega}{dt} = R\beta$$

即：

$$\boxed{a_\tau = R\beta}$$

我把这三组关系整理成一个表格：

| 角量                             | 定义               | 与线量的关系                 |
| -------------------------------- | ------------------ | ---------------------------- |
| 角位移 $\Delta\theta$            | 转过的角度         | $\Delta s = R\,\Delta\theta$ |
| 角速度 $\omega = \dot{\theta}$   | 角位移对时间的导数 | $v = R\omega$                |
| 角加速度 $\beta = \ddot{\theta}$ | 角速度对时间的导数 | $a_\tau = R\beta$            |

大家看，这些关系全都是通过一个**公共因子 $R$** 来联系的，非常整齐。这就是角量的好处——简单、统一。

### 1.3 角速度矢量与叉积表达

接下来我要讲一个非常重要的东西：**角速度其实是一个矢量**。

你可能会问：角速度不就是一个数吗？有正有负，正代表逆时针，负代表顺时针，不就够了吗？

在二维平面内确实够了。但是在三维空间中，旋转可以绕任意轴进行，光一个正负号不够描述——我们还需要知道**转轴的方向**。

所以，我们定义**角速度矢量** $\vec{\omega}$：

- **大小**：$|\vec{\omega}| = \omega$，就是角速度的绝对值
- **方向**：沿转轴，按**右手定则**确定——右手四指沿旋转方向弯曲，大拇指所指方向就是 $\vec{\omega}$ 的方向

有了角速度矢量的概念，我们可以写出一个非常漂亮的公式：

$$\boxed{\vec{v} = \vec{\omega} \times \vec{r}}$$

其中 $\vec{r}$ 是从转轴上任意一点到质点的位置矢量。

**为什么这个公式是对的？** 我们来验证两件事：

**验证大小：**

$$|\vec{v}| = |\vec{\omega}||\vec{r}|\sin\phi$$

其中 $\phi$ 是 $\vec{\omega}$ 和 $\vec{r}$ 之间的夹角。而 $|\vec{r}|\sin\phi$ 恰好是质点到转轴的**垂直距离**，也就是圆周运动的半径 $R$。所以：

$$|\vec{v}| = \omega R$$

这和我们前面得到的 $v = R\omega$ 完全一致！✓

**验证方向：**

由叉积的右手定则，$\vec{\omega} \times \vec{r}$ 的方向垂直于 $\vec{\omega}$ 和 $\vec{r}$ 所在的平面，指向切线方向。这正是速度的方向！✓

> **重要提示**：$\vec{v} = \vec{\omega} \times \vec{r}$ 这个公式具有**普适性**，它不仅适用于简单的圆周运动，在三维刚体转动中同样成立。今天的圆周运动只是它最简单的特例。大家先在这个简单情形中理解它，以后学刚体转动时会再用到。

---

## 二、三种等价的数学描述

> 接下来是今天的**核心内容**。我要用三种不同的数学工具来描述同一个圆周运动，让大家看看相同的物理如何穿上不同的"数学外衣"。

### 2.1 视角一：直角坐标描述——"笨拙但诚实"

这是最直接的方法。我们取圆心为原点，建立 $xOy$ 直角坐标系，规定逆时针为 $\theta$ 增大的方向。

**位置矢量：**

质点在圆上的位置由角度 $\theta(t)$ 确定，其直角坐标为：

$$\vec{r}(t) = R\cos\theta(t)\,\hat{i} + R\sin\theta(t)\,\hat{j}$$

这里 $\hat{i}$ 和 $\hat{j}$ 分别是 $x$ 和 $y$ 方向的单位矢量，它们是**固定不动**的——不管质点怎么运动，$\hat{i}$ 始终指向右，$\hat{j}$ 始终指向上。

**求速度——对位置求时间导数：**

$$\vec{v} = \frac{d\vec{r}}{dt}$$

我们来逐项求导。注意 $R$ 是常数，$\theta$ 是 $t$ 的函数，$\hat{i}$ 和 $\hat{j}$ 是常矢量（导数为零）。由链式法则：

$$\frac{d}{dt}[R\cos\theta(t)] = -R\sin\theta \cdot \dot{\theta}$$

$$\frac{d}{dt}[R\sin\theta(t)] = R\cos\theta \cdot \dot{\theta}$$

所以：

$$\boxed{\vec{v} = R\dot{\theta}\,(-\sin\theta\,\hat{i} + \cos\theta\,\hat{j})}$$

我们可以验证速度的大小：

$$|\vec{v}| = R\dot{\theta}\sqrt{\sin^2\theta + \cos^2\theta} = R\dot{\theta} = R\omega \quad \checkmark$$

**求加速度——对速度再求时间导数：**

$$\vec{a} = \frac{d\vec{v}}{dt}$$

这一步需要用乘积法则，因为 $\dot{\theta}$、$\sin\theta$、$\cos\theta$ 都是 $t$ 的函数。我们仔细来做：

$$\vec{v} = R\dot{\theta}\,(-\sin\theta\,\hat{i} + \cos\theta\,\hat{j})$$

对 $t$ 求导：

$$\vec{a} = R\ddot{\theta}\,(-\sin\theta\,\hat{i} + \cos\theta\,\hat{j}) + R\dot{\theta}\,\frac{d}{dt}(-\sin\theta\,\hat{i} + \cos\theta\,\hat{j})$$

第二项中：

$$\frac{d}{dt}(-\sin\theta) = -\cos\theta \cdot \dot{\theta}, \qquad \frac{d}{dt}(\cos\theta) = -\sin\theta \cdot \dot{\theta}$$

代入：

$$\vec{a} = R\ddot{\theta}\,(-\sin\theta\,\hat{i} + \cos\theta\,\hat{j}) + R\dot{\theta}^2\,(-\cos\theta\,\hat{i} - \sin\theta\,\hat{j})$$

整理一下，把它写成两项：

$$\boxed{\vec{a} = \underbrace{-R\dot{\theta}^2\,(\cos\theta\,\hat{i} + \sin\theta\,\hat{j})}_{\text{第一项}} + \underbrace{R\ddot{\theta}\,(-\sin\theta\,\hat{i} + \cos\theta\,\hat{j})}_{\text{第二项}}}$$

现在请大家仔细**辨认**这两项的物理含义：

- **第一项**：$(\cos\theta\,\hat{i} + \sin\theta\,\hat{j})$ 是什么方向？这是从原点指向质点的方向！前面的系数是 $-R\dot{\theta}^2$，负号表示**指向圆心**。所以第一项就是**法向加速度**（向心加速度），大小为 $R\omega^2$。

- **第二项**：$(-\sin\theta\,\hat{i} + \cos\theta\,\hat{j})$ 是什么方向？这个方向和速度方向相同，是**切线方向**。所以第二项就是**切向加速度**，大小为 $R\ddot{\theta} = R\beta$。

好的，我们用直角坐标成功地推导出了向心加速度和切向加速度！但大家有没有发现一个问题？

**每一步计算都拖着 $\sin\theta$、$\cos\theta$**，写了一大堆三角函数，物理图像反而被淹没在数学细节中了。最后我们还得"辨认"哪些组合代表径向、哪些代表切向。

这就引出了一个自然的问题：**有没有一种方法，让坐标轴"跟着质点一起转"，这样径向和切向就自动分开了？**

答案是肯定的——这就是极坐标方法。

---

### 2.2 视角二：极坐标描述——"会转动的基矢量"

#### （a）极坐标基矢量的定义

在极坐标中，我们定义两个**随角度 $\theta$ 变化的单位矢量**：

$$\hat{e}_r = \cos\theta\,\hat{i} + \sin\theta\,\hat{j}$$

$$\hat{e}_\theta = -\sin\theta\,\hat{i} + \cos\theta\,\hat{j}$$

它们的几何含义非常清楚：

- $\hat{e}_r$ 是**径向单位矢量**：从原点指向质点的方向，即"向外"。
- $\hat{e}_\theta$ 是**切向单位矢量**：垂直于 $\hat{e}_r$，指向 $\theta$ 增大的方向，即"逆时针切线方向"。

大家可以验证两件事：

1. 它们是**单位矢量**：$|\hat{e}_r| = \sqrt{\cos^2\theta + \sin^2\theta} = 1$，$|\hat{e}_\theta|$ 同理为1。 ✓

2. 它们**互相垂直**：$\hat{e}_r \cdot \hat{e}_\theta = \cos\theta(-\sin\theta) + \sin\theta\cos\theta = 0$。 ✓

所以 $\{\hat{e}_r, \hat{e}_\theta\}$ 构成一组**正交归一基**，和 $\{\hat{i}, \hat{j}\}$ 一样好用——只不过它们会**随着质点一起转动**。

这里有一个非常重要的事情要注意：如果大家回头看前面直角坐标的结果，会发现：

- $(\cos\theta\,\hat{i} + \sin\theta\,\hat{j})$ 不就是 $\hat{e}_r$ 吗？
- $(-\sin\theta\,\hat{i} + \cos\theta\,\hat{j})$ 不就是 $\hat{e}_\theta$ 吗？

所以前面我们"辨认"了半天的结果，用极坐标来写一目了然！

#### （b）关键推导：基矢量对时间的导数

接下来是**整堂课最关键的推导**。由于 $\hat{e}_r$ 和 $\hat{e}_\theta$ 是随时间变化的（因为 $\theta$ 随时间变化），我们必须知道它们对时间的导数是什么。

**求 $\dfrac{d\hat{e}_r}{dt}$：**

$$\frac{d\hat{e}_r}{dt} = \frac{d}{dt}(\cos\theta\,\hat{i} + \sin\theta\,\hat{j})$$

$$= -\sin\theta\cdot\dot{\theta}\,\hat{i} + \cos\theta\cdot\dot{\theta}\,\hat{j}$$

$$= \dot{\theta}\,(-\sin\theta\,\hat{i} + \cos\theta\,\hat{j})$$

$$= \dot{\theta}\,\hat{e}_\theta$$

**求 $\dfrac{d\hat{e}_\theta}{dt}$：**

$$\frac{d\hat{e}_\theta}{dt} = \frac{d}{dt}(-\sin\theta\,\hat{i} + \cos\theta\,\hat{j})$$

$$= -\cos\theta\cdot\dot{\theta}\,\hat{i} - \sin\theta\cdot\dot{\theta}\,\hat{j}$$

$$= -\dot{\theta}\,(\cos\theta\,\hat{i} + \sin\theta\,\hat{j})$$

$$= -\dot{\theta}\,\hat{e}_r$$

我们得到了两个极其重要的公式：

$$\boxed{\frac{d\hat{e}_r}{dt} = \dot{\theta}\,\hat{e}_\theta, \qquad \frac{d\hat{e}_\theta}{dt} = -\dot{\theta}\,\hat{e}_r}$$

**为什么这两个公式如此重要？** 因为之后所有的速度、加速度推导都建立在它们之上。我把它们称为这堂课的**"发动机"**。

**深层理解——为什么导数一定垂直于自身？**

大家想想：$\hat{e}_r$ 是**单位矢量**，它的长度始终是1。所以 $|\hat{e}_r|^2 = \hat{e}_r \cdot \hat{e}_r = 1$。两边对时间求导：

$$2\hat{e}_r \cdot \frac{d\hat{e}_r}{dt} = 0$$

这意味着 $\dfrac{d\hat{e}_r}{dt}$ **一定垂直于** $\hat{e}_r$！

在二维平面中，垂直于 $\hat{e}_r$ 的方向只有 $\pm\hat{e}_\theta$，所以 $\dfrac{d\hat{e}_r}{dt}$ 必然是 $\hat{e}_\theta$ 方向的。这是**纯粹的几何结论**，不依赖任何具体的运动形式。

类似地，$\dfrac{d\hat{e}_\theta}{dt}$ 一定垂直于 $\hat{e}_\theta$，所以只能沿 $\hat{e}_r$ 方向。

换句话说：**单位矢量变化时，只能改变方向，不能改变大小，所以它的变化率一定垂直于自身。** 这是一个非常深刻的几何洞察。

> 🔗 **高阶观念（点到为止）**：在更高级的数学中，"对基矢量求导会产生其他基矢量的线性组合"这件事有一个专门的名字，叫做**"联络"（connection）**。它是微分几何和广义相对论的数学基础之一。大家现在看到的 $\dfrac{d\hat{e}_r}{dt} = \dot{\theta}\,\hat{e}_\theta$ 就是联络最朴素、最直观的例子。这些内容将来在理论物理课上会深入学习，现在大家只需要知道这个思想的根源在这里。

#### （c）速度与加速度的自然分解

有了基矢量的导数公式这个"发动机"，推导速度和加速度就变得非常干净了。

**位置矢量：**

在极坐标中，位置矢量写为：

$$\vec{r} = r\,\hat{e}_r$$

对于圆周运动，$r = R$ 是常数。但我们先写一般情况（$r$ 可变），这样推导出的公式更加普适。

**速度：对位置矢量求时间导数。**

$$\vec{v} = \frac{d\vec{r}}{dt} = \frac{d}{dt}(r\,\hat{e}_r)$$

用乘积法则：

$$\vec{v} = \dot{r}\,\hat{e}_r + r\,\frac{d\hat{e}_r}{dt}$$

代入我们的"发动机"公式 $\dfrac{d\hat{e}_r}{dt} = \dot{\theta}\,\hat{e}_\theta$：

$$\boxed{\vec{v} = \dot{r}\,\hat{e}_r + r\dot{\theta}\,\hat{e}_\theta}$$

- 第一项 $\dot{r}\,\hat{e}_r$：**径向速度**，描述质点远离/靠近原点的快慢。
- 第二项 $r\dot{\theta}\,\hat{e}_\theta$：**横向速度**（切向速度），描述质点绕原点转动的快慢。

**对于圆周运动**，$r = R = \text{const}$，所以 $\dot{r} = 0$：

$$\vec{v} = R\omega\,\hat{e}_\theta$$

速度完全沿切线方向，大小为 $R\omega$。和我们之前的结论一致！

**加速度：对速度再求时间导数。**

$$\vec{a} = \frac{d\vec{v}}{dt} = \frac{d}{dt}(\dot{r}\,\hat{e}_r + r\dot{\theta}\,\hat{e}_\theta)$$

我们逐项展开。这里需要仔细应用乘积法则——注意每一项都有两到三个因子依赖于 $t$。

**第一项** $\dfrac{d}{dt}(\dot{r}\,\hat{e}_r)$：

$$= \ddot{r}\,\hat{e}_r + \dot{r}\,\frac{d\hat{e}_r}{dt} = \ddot{r}\,\hat{e}_r + \dot{r}\dot{\theta}\,\hat{e}_\theta$$

**第二项** $\dfrac{d}{dt}(r\dot{\theta}\,\hat{e}_\theta)$：

这里有三个因子 $r$、$\dot{\theta}$、$\hat{e}_\theta$，但我们可以先用乘积法则处理两个标量和一个矢量：

$$= (\dot{r}\dot{\theta} + r\ddot{\theta})\,\hat{e}_\theta + r\dot{\theta}\,\frac{d\hat{e}_\theta}{dt}$$

代入"发动机"公式 $\dfrac{d\hat{e}_\theta}{dt} = -\dot{\theta}\,\hat{e}_r$：

$$= (\dot{r}\dot{\theta} + r\ddot{\theta})\,\hat{e}_\theta + r\dot{\theta}(-\dot{\theta}\,\hat{e}_r)$$

$$= -r\dot{\theta}^2\,\hat{e}_r + (\dot{r}\dot{\theta} + r\ddot{\theta})\,\hat{e}_\theta$$

**合并两项**，将 $\hat{e}_r$ 和 $\hat{e}_\theta$ 方向分别收集：

$$\vec{a} = (\ddot{r} - r\dot{\theta}^2)\,\hat{e}_r + (r\ddot{\theta} + 2\dot{r}\dot{\theta})\,\hat{e}_\theta$$

即：

$$\boxed{\vec{a} = \underbrace{(\ddot{r} - r\dot{\theta}^2)}_{\text{径向分量}}\,\hat{e}_r + \underbrace{(r\ddot{\theta} + 2\dot{r}\dot{\theta})}_{\text{横向分量}}\,\hat{e}_\theta}$$

这就是极坐标下**一般平面运动**的加速度公式。请大家把这个公式记下来，它是一个非常通用的结果。

**现在我们代入圆周运动的特殊条件：** $r = R = \text{const}$，于是 $\dot{r} = 0$，$\ddot{r} = 0$：

$$\vec{a} = (0 - R\dot{\theta}^2)\,\hat{e}_r + (R\ddot{\theta} + 0)\,\hat{e}_\theta$$

$$\boxed{\vec{a} = -R\omega^2\,\hat{e}_r + R\beta\,\hat{e}_\theta}$$

结果清晰明了：

- **径向分量**（向心加速度）：$a_n = R\omega^2 = \dfrac{v^2}{R}$，方向**指向圆心**（因为有负号，而 $\hat{e}_r$ 指向外）。
- **切向分量**（切向加速度）：$a_\tau = R\beta$，方向沿**切线**。

大家注意！**$a_n = \dfrac{v^2}{R}$ 不是一个需要背诵的公式——它是数学推导的必然结果！** 只要你掌握了基矢量的导数公式，这个结果是自动出来的。

> **顺便一提**：一般公式中的 $2\dot{r}\dot{\theta}$ 项被称为**"科里奥利项"**。当质点在旋转参考系中有径向运动时（$\dot{r} \neq 0$），这一项就会出现。地球上的台风旋转、傅科摆的偏转，都和它有关。这个内容我们将在动力学中学习**非惯性系**时讨论。

---

### 2.3 视角三：复数表示——"最优雅的一行"

最后，我给大家展示一种最简洁的方法——复数方法。

#### （a）基本思想：将平面运动嵌入复平面

大家都学过复数。复平面上，一个复数 $z = x + iy$ 可以看作平面上一个点 $(x, y)$。欧拉公式告诉我们：

$$e^{i\theta} = \cos\theta + i\sin\theta$$

所以，圆周运动的位置可以用一个复数来表示：

$$z(t) = R\,e^{i\theta(t)}$$

就这**一行**，把位置写完了。对比直角坐标的写法 $\vec{r} = R\cos\theta\,\hat{i} + R\sin\theta\,\hat{j}$，实部就是 $x$ 坐标，虚部就是 $y$ 坐标。

#### （b）速度——对 $z$ 求时间导数

$$\dot{z} = \frac{d}{dt}\left(R\,e^{i\theta(t)}\right) = R \cdot i\dot{\theta} \cdot e^{i\theta} = iR\dot{\theta}\,e^{i\theta}$$

这里用了链式法则：$\dfrac{d}{dt}e^{i\theta} = i\dot{\theta}\,e^{i\theta}$。

速度的大小：$|\dot{z}| = R|\dot{\theta}| \cdot |e^{i\theta}| = R\omega$，因为 $|e^{i\theta}| = 1$。✓

**物理解读——乘以 $i$ 的几何含义：**

乘以 $i$ 在复平面上意味着什么？把 $e^{i\theta}$ 乘以 $i = e^{i\pi/2}$，得到 $e^{i(\theta + \pi/2)}$，即**逆时针旋转90°**！

所以 $\dot{z} = iR\dot{\theta}\,e^{i\theta}$ 这个公式在说：**速度的方向是位置矢量方向逆时针旋转90°**——也就是切线方向！一切都在一个乘以 $i$ 里面了。

#### （c）加速度——再求一次导数

$$\ddot{z} = \frac{d}{dt}\left(iR\dot{\theta}\,e^{i\theta}\right)$$

$$= iR\ddot{\theta}\,e^{i\theta} + iR\dot{\theta}\cdot i\dot{\theta}\,e^{i\theta}$$

$$= iR\ddot{\theta}\,e^{i\theta} + i^2 R\dot{\theta}^2\,e^{i\theta}$$

注意 $i^2 = -1$：

$$= iR\ddot{\theta}\,e^{i\theta} - R\dot{\theta}^2\,e^{i\theta}$$

提取公因子 $e^{i\theta}$：

$$\boxed{\ddot{z} = (-R\dot{\theta}^2 + iR\ddot{\theta})\,e^{i\theta}}$$

#### （d）物理解读

$e^{i\theta}$ 代表径向方向（从原点指向质点），$ie^{i\theta}$ 代表切向方向（逆时针转90°）。所以：

$$\ddot{z} = \underbrace{(-R\dot{\theta}^2)}_{\text{径向系数（向心）}} \cdot e^{i\theta} + \underbrace{(R\ddot{\theta})}_{\text{切向系数}} \cdot ie^{i\theta}$$

- 径向分量（$e^{i\theta}$ 的系数）：$-R\omega^2$，负号表示指向圆心 → **向心加速度** $a_n = R\omega^2 = v^2/R$
- 切向分量（$ie^{i\theta}$ 的系数）：$R\ddot{\theta} = R\beta$ → **切向加速度**

**和极坐标得到的结果完全一致！** 但这里只用了两行代数，没有任何分量计算，没有基矢量导数的记忆——向心和切向**自动分离**。

#### （e）为什么要学复数方法？

你可能会问：这个方法这么好，为什么不一开始就教？

因为复数方法有一个**局限**：它只适用于**二维平面运动**。三维运动中没有这样简单的复数对应（虽然有四元数，但那是更高阶的话题）。

但在二维问题中，复数方法极其强大。特别是大家到了大二学习**电路分析**时，会遇到**相量法（phasor method）**——用 $e^{i\omega t}$ 表示正弦稳态电路的响应。那个方法的数学本质和我们今天讲的完全一样！所以你可以认为，今天学的是相量法的**力学原型**。

---

### 2.4 三种方法对照总结

我们用三种方法描述了**同一个物理现象**，得到了**完全相同的结果**。让我们把它们放在一起比较：

|              | 直角坐标                       | 极坐标                                    | 复数                                      |
| ------------ | ------------------------------ | ----------------------------------------- | ----------------------------------------- |
| **基矢量**   | $\hat{i}, \hat{j}$（固定不动） | $\hat{e}_r, \hat{e}_\theta$（随质点转动） | $e^{i\theta}, ie^{i\theta}$（随质点转动） |
| **优势**     | 通用性强，初学友好             | 径向/切向自然分解                         | 代数计算极简                              |
| **劣势**     | 圆周问题中计算繁琐             | 需记住基矢量的导数                        | 仅限于二维平面                            |
| **后续应用** | 一般运动学                     | 天体力学、极坐标系问题                    | 电路相量法、信号处理                      |

> **核心信息**：物理本身只有一个。$a_n = v^2/R$ 不管你用什么坐标都是那个结果。数学表述的选择是一种**策略**——就像走路时选哪条路一样，目的地是同一个，但有的路更快、更优雅。学会根据问题特点选择合适的数学工具，是物理学学习中一项非常重要的能力。

---

## 三、习题演练（约15分钟）

### 习题1

> 圆周运动，$R = 0.5\,\text{m}$，$\theta(t) = 2t^2 + 3t + 1$（rad）。求：
>
> （1）$t = 2\,\text{s}$ 时的角速度和角加速度；
>
> （2）$t = 2\,\text{s}$ 时质点的速度和加速度。

**解：**

**（1）求角速度和角加速度**

角速度是 $\theta$ 对时间的一阶导数：

$$\omega = \dot{\theta} = \frac{d}{dt}(2t^2 + 3t + 1) = 4t + 3 \quad (\text{rad/s})$$

角加速度是 $\theta$ 对时间的二阶导数：

$$\beta = \ddot{\theta} = \frac{d}{dt}(4t + 3) = 4 \quad (\text{rad/s}^2)$$

在 $t = 2\,\text{s}$ 时：

$$\boxed{\omega\big|_{t=2} = 4 \times 2 + 3 = 11 \;\text{rad/s}}$$

$$\boxed{\beta\big|_{t=2} = 4 \;\text{rad/s}^2}$$

注意角加速度是常数——这其实是一个**匀变速转动**（类比匀变速直线运动）。

**（2）求速度和加速度**

线速度大小：

$$v = R\omega = 0.5 \times 11 = 5.5 \;\text{m/s}$$

方向：沿切线方向（$\hat{e}_\theta$ 方向）。

加速度由两个分量组成：

**向心加速度（法向加速度）：**

$$a_n = R\omega^2 = 0.5 \times 11^2 = 0.5 \times 121 = 60.5 \;\text{m/s}^2$$

方向：指向圆心（$-\hat{e}_r$ 方向）。

**切向加速度：**

$$a_\tau = R\beta = 0.5 \times 4 = 2 \;\text{m/s}^2$$

方向：沿切线方向（$\hat{e}_\theta$ 方向）。

**总加速度的大小：**

由于向心加速度和切向加速度互相垂直，总加速度大小用勾股定理：

$$a = \sqrt{a_n^2 + a_\tau^2} = \sqrt{60.5^2 + 2^2} = \sqrt{3660.25 + 4} = \sqrt{3664.25} \approx 60.53 \;\text{m/s}^2$$

$$\boxed{v = 5.5 \;\text{m/s}, \quad a_n = 60.5 \;\text{m/s}^2, \quad a_\tau = 2 \;\text{m/s}^2, \quad a \approx 60.5 \;\text{m/s}^2}$$

可以看到，这个时刻向心加速度远大于切向加速度，说明加速度主要用来改变速度的方向，而不是改变速度的大小。

---

### 习题2

> 圆周运动，$R = 2\,\text{m}$，切向加速度 $a_\tau = 3\,\text{m/s}^2$（常数），质点从静止出发。问：何时总加速度与半径方向的夹角为45°？

**解：**

**分析问题：** 总加速度与半径方向（即向心方向）的夹角为45°，意味着向心加速度和切向加速度的大小相等。

画一个加速度分解图：总加速度 $\vec{a}$ 是向心加速度 $\vec{a}_n$（沿半径指向圆心）和切向加速度 $\vec{a}_\tau$（沿切线方向）的矢量和。它们互相垂直，所以：

$$\tan\alpha = \frac{a_\tau}{a_n}$$

其中 $\alpha$ 是总加速度与半径方向（向心方向）的夹角。

题目要求 $\alpha = 45°$，所以：

$$\tan 45° = 1 = \frac{a_\tau}{a_n}$$

$$\Longrightarrow \quad a_n = a_\tau = 3 \;\text{m/s}^2$$

**建立方程：** 质点从静止出发，切向加速度恒定，所以这是匀变速转动。

切向加速度恒为 $a_\tau = 3\,\text{m/s}^2$，由 $a_\tau = \dfrac{dv}{dt}$，从静止出发积分得：

$$v = a_\tau \cdot t = 3t$$

向心加速度：

$$a_n = \frac{v^2}{R} = \frac{(3t)^2}{2} = \frac{9t^2}{2}$$

令 $a_n = a_\tau$：

$$\frac{9t^2}{2} = 3$$

$$t^2 = \frac{2}{3}$$

$$\boxed{t = \sqrt{\frac{2}{3}} = \frac{\sqrt{6}}{3} \approx 0.816 \;\text{s}}$$

> **物理讨论**：在 $t < \sqrt{2/3}\,\text{s}$ 时，$a_n < a_\tau$，总加速度主要由切向分量主导（加速度更偏切线方向——主要在加速）。在 $t > \sqrt{2/3}\,\text{s}$ 后，$a_n > a_\tau$（因为 $a_n \propto t^2$ 增长得更快），总加速度越来越偏向圆心方向——速度越大，"拐弯"需要的向心加速度就越大。当 $t \to \infty$ 时，加速度几乎完全沿向心方向。

---

## 四、重点总结

### 核心公式

**1. 角量与线量的对应关系：**

$$\Delta s = R\,\Delta\theta, \qquad v = R\omega, \qquad a_\tau = R\beta$$

**2. 角速度矢量与速度的叉积关系：**

$$\vec{v} = \vec{\omega} \times \vec{r}$$

**3. 极坐标基矢量的时间导数（"发动机"公式）：**

$$\frac{d\hat{e}_r}{dt} = \dot{\theta}\,\hat{e}_\theta, \qquad \frac{d\hat{e}_\theta}{dt} = -\dot{\theta}\,\hat{e}_r$$

> 记忆方法：单位矢量的导数一定垂直于自身。$\hat{e}_r$ 变化生成 $\hat{e}_\theta$（正号），$\hat{e}_\theta$ 变化生成 $-\hat{e}_r$（负号，类比 $\cos$ 求导出 $-\sin$）。

**4. 圆周运动的加速度分解：**

$$\vec{a} = -R\omega^2\,\hat{e}_r + R\beta\,\hat{e}_\theta$$

- **向心加速度**（指向圆心）：$a_n = R\omega^2 = \dfrac{v^2}{R}$
- **切向加速度**（沿切线方向）：$a_\tau = R\beta$
- **总加速度大小**：$a = \sqrt{a_n^2 + a_\tau^2}$

**5. 极坐标下一般平面运动的加速度（推广公式）：**

$$\vec{a} = (\ddot{r} - r\dot{\theta}^2)\,\hat{e}_r + (r\ddot{\theta} + 2\dot{r}\dot{\theta})\,\hat{e}_\theta$$

### 核心思想

| 要点                     | 内容                                                         |
| ------------------------ | ------------------------------------------------------------ |
| **坐标选择是自由的**     | 直角坐标、极坐标、复数三种方法描述同一个物理现象，结果完全一致。选择坐标是"策略"，不是"物理" |
| **向心加速度的来源**     | $a_n = v^2/R$ 不是经验公式，而是对位置矢量求两次时间导数的数学必然结果 |
| **基矢量会"动"**         | 极坐标的核心困难和核心优势都在于基矢量随时间变化。掌握基矢量的导数公式是解题的关键 |
| **匀速圆周 vs 变速圆周** | 匀速圆周：$\beta = 0$，只有向心加速度。变速圆周：两种加速度同时存在 |

---

**本节课结束。谢谢大家！**