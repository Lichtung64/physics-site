# 物理小站

大学物理教师个人网站，基于 VitePress 构建。

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run docs:dev

# 构建静态文件
npm run docs:build

# 预览构建结果
npm run docs:preview
```

## 添加新内容

### 添加课程章节

1. 在 `docs/courses/` 目录下创建 `.md` 文件
2. 在 `docs/.vitepress/config.mts` 中添加侧边栏链接

### 添加文章

1. 在 `docs/articles/` 目录下创建 `.md` 文件
2. 在 `docs/articles/index.md` 中添加文章链接

### 添加下载文件

1. 将文件放入 `public/files/` 目录
2. 在 `docs/resources.md` 中添加下载链接

## 部署

推送到 GitHub 后，GitHub Actions 会自动部署到 GitHub Pages。

## 数学公式

支持 LaTeX 语法：

- 行内公式：`$E = mc^2$` → $E = mc^2$
- 块级公式：
  ```
  $$
  \int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
  $$
  ```

## License

MIT
