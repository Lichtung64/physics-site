---
title: 量子力学的路径积分表述
---

# 量子力学的路径积分表述

**作者**：物理小站  
**日期**：2024-03-15  
**分类**：量子力学

---

## 引言

费曼在 1948 年提出的路径积分表述是量子力学的第三种等价表述（另外两种是薛定谔的波动力学和海森堡的矩阵力学）。路径积分提供了一种直观而深刻的方式来理解量子力学，也是量子场论和现代物理的基石之一。

---

## 从经典力学到量子力学

在经典力学中，粒子沿着使作用量取极值的路径运动（最小作用量原理）：

$$S = \int_{t_1}^{t_2} L(q, \dot{q}, t) \, dt$$

其中 $L = T - V$ 是拉格朗日量。

费曼的核心洞见是：在量子力学中，粒子不再沿着单一确定的路径运动，而是同时"探索"所有可能的路径。每条路径贡献一个振幅，最终的量子振幅是所有路径振幅的和。

---

## 路径积分的定义

从时刻 $t_a$ 位置 $x_a$ 到时刻 $t_b$ 位置 $x_b$ 的跃迁振幅为：

$$K(x_b, t_b; x_a, t_a) = \int \mathcal{D}[x(t)] \, e^{iS[x(t)]/\hbar}$$

这里 $\mathcal{D}[x(t)]$ 表示对所有可能的路径积分，$S[x(t)]$ 是每条路径对应的作用量。

### 离散化理解

将时间分成 $N$ 个小区间 $\epsilon = (t_b - t_a)/N$：

$$K \approx \lim_{N \to \infty} \left(\frac{m}{2\pi i \hbar \epsilon}\right)^{N/2} \int \cdots \int dx_1 \cdots dx_{N-1} \, e^{iS/\hbar}$$

---

## 自由粒子的路径积分

对于自由粒子，$L = \frac{1}{2}m\dot{x}^2$，作用量为：

$$S = \int_{t_a}^{t_b} \frac{1}{2}m\dot{x}^2 \, dt$$

可以严格计算得到：

$$K(x_b, t_b; x_a, t_a) = \sqrt{\frac{m}{2\pi i \hbar (t_b - t_a)}} \exp\left[\frac{im(x_b - x_a)^2}{2\hbar(t_b - t_a)}\right]$$

这与薛定谔方程的自由粒子解完全一致。

---

## 谐振子的路径积分

一维谐振子的拉格朗日量：

$$L = \frac{1}{2}m\dot{x}^2 - \frac{1}{2}m\omega^2 x^2$$

通过路径积分可以推导出谐振子的能级：

$$E_n = \hbar\omega\left(n + \frac{1}{2}\right)$$

---

## 路径积分的意义

### 物理意义

1. **量子叠加**：所有路径同时存在，贡献叠加
2. **经典极限**：当 $\hbar \to 0$，只有经典路径附近贡献显著（稳定相位近似）
3. **对称性分析**：拉格朗日量的对称性直接对应守恒量

### 数学优势

1. **相对论协变性**：更容易推广到量子场论
2. **微扰展开**：自然导出 Feynman 图
3. **统计力学联系**：Wick 转动后与配分函数相关

---

## 应用

### 量子场论

场的路径积分：

$$Z = \int \mathcal{D}[\phi] \, e^{iS[\phi]/\hbar}$$

### 统计力学

Wick 转动 $t \to -i\tau$：

$$Z = \int \mathcal{D}[\phi] \, e^{-S_E[\phi]/\hbar}$$

这是统计配分函数的形式。

---

## 参考文献

1. R.P. Feynman, A.R. Hibbs, *Quantum Mechanics and Path Integrals*
2. L.S. Schulman, *Techniques and Applications of Path Integration*
3. M. Kaku, *Quantum Field Theory: A Modern Introduction*

---

::: info 相关文章
- [对称性与守恒律](/articles/symmetry-conservation)
- [统计物理中的相变理论](/articles/phase-transition)
:::
