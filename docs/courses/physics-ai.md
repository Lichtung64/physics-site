# 物理与AI

## 课程简介

人工智能正在深刻改变物理学的研究范式。本课程介绍机器学习和深度学习在物理问题中的应用，包括数据驱动建模、物理信息神经网络、强化学习等方法。

---

## 教学内容

### 第一章：机器学习基础

- 监督学习、无监督学习、强化学习
- 线性回归与逻辑回归
- 过拟合与正则化
- 交叉验证
- 模型评估指标

**均方误差：**

$$L = \frac{1}{n}\sum_{i=1}^{n}(y_i - \hat{y}_i)^2$$

### 第二章：神经网络基础

- 感知机与多层感知机
- 激活函数（Sigmoid, ReLU, tanh）
- 反向传播算法
- 梯度下降优化器
- 批归一化

**反向传播：**

$$\frac{\partial L}{\partial w_{ij}} = \frac{\partial L}{\partial a_j} \cdot \frac{\partial a_j}{\partial w_{ij}}$$

### 第三章：深度学习进阶

- 卷积神经网络 (CNN)
- 循环神经网络 (RNN/LSTM)
- Transformer 架构
- 注意力机制
- 自监督学习

### 第四章：物理信息神经网络 (PINN)

- 物理约束的引入
- 偏微分方程求解
- 自动微分
- 数据与方程的融合
- 应用案例

**PINN 损失函数：**

$$L = L_{data} + \lambda L_{PDE}$$

其中 $L_{data}$ 为数据损失，$L_{PDE}$ 为方程残差损失。

### 第五章：数据驱动物理建模

- 从数据发现物理规律
- 符号回归
- 奇异谱分析
- 动力学系统识别
- 相空间重构

### 第六章：强化学习与物理

- MDP 框架
- Q-Learning 与 Deep Q-Network
- 策略梯度方法
- 在控制问题中的应用
- 量子强化学习

**Q-Learning 更新：**

$$Q(s,a) \leftarrow Q(s,a) + \alpha[r + \gamma \max_{a'} Q(s',a') - Q(s,a)]$$

---

## 项目实践

### 项目1：基于 PINN 求解热传导方程

使用物理信息神经网络求解一维热传导方程：

$$\frac{\partial u}{\partial t} = \alpha \frac{\partial^2 u}{\partial x^2}$$

### 项目2：神经网络预测混沌系统

训练 LSTM 网络预测 Lorenz 系统的演化轨迹：

$$\begin{cases}
\dot{x} = \sigma(y - x) \\
\dot{y} = x(\rho - z) - y \\
\dot{z} = xy - \beta z
\end{cases}$$

---

## 参考资料

1. 《Deep Learning》- Goodfellow et al.
2. 《Physics-Informed Machine Learning》- Raissi et al.
3. 《Machine Learning for Physics》- Carleo et al.

---

## 常用工具

| 工具 | 用途 | 链接 |
|-----|------|------|
| PyTorch | 深度学习框架 | pytorch.org |
| JAX | 自动微分 | jax.readthedocs.io |
| DeepXDE | PINN 库 | deepxde.readthedocs.io |
| NumPy | 数值计算 | numpy.org |

::: warning 前置知识
本课程需要一定的 Python 编程基础和线性代数知识。
:::
