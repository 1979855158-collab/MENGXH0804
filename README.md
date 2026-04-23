# 孟祥昊 (Meng Xianghao) | 交互与体验设计作品集

这是一个基于极简暗黑与红色冲突美学风格打造的个人作品集网站。它展示了在数字交互、物理空间与产品逻辑领域的探索与项目成果。

## 🎨 设计语言

- **主色调**: 极简深黑 (`#000000` / `#080808`) 与 亮白色 (`#ffffff`) 
- **点缀色**: 强调色暗红 (`#8B0000`)
- **排版**: 现代、无渲染、大面积留白的瑞士风格排版
- **动画**: 柔和的进入动画与平移交互效果，提升浏览的沉浸感

## 🛠 技术栈

本项目采用了现代化的前端技术栈构建：

- **核心框架**: [React 19](https://react.dev/)
- **类型系统**: [TypeScript](https://www.typescriptlang.org/)
- **构建工具**: [Vite 6](https://vitejs.dev/) - 极速的前端构建工具
- **样式框架**: [Tailwind CSS v4](https://tailwindcss.com/) - 实用优先的 CSS 框架
- **动画引擎**: [Motion (Framer Motion)](https://motion.dev/) - 声明式的 React 动画库
- **图标库**: [Lucide React](https://lucide.dev/) - 干净利落的开源图标

## 🚀 快速开始

想要在本地运行、预览或开发此项目，请按照以下步骤操作：

### 1. 环境准备

确保您的电脑上已安装 [Node.js](https://nodejs.org/) (推荐 v20.x 或更高版本)。本项目包含 `.nvmrc` 文件，如果您使用 `nvm`，可直接运行 `nvm use`。

### 2. 安装依赖

```bash
npm install
# 或者使用 yarn / pnpm
yarn install
pnpm install
```

### 3. 环境配置 (非必填)

复制环境变量示例文件：

```bash
cp .env.example .env
```
本项目默认不需要复杂的环境变量即可运行。如果后续集成了真实的 AI API，可以在 `.env` 中配置 `GEMINI_API_KEY`。

### 4. 启动开发服务器

```bash
npm run dev
```

启动后，在浏览器中打开 `http://localhost:3000` 即可预览网站。由于使用了 Vite，您在代码中的任何修改都会实现真正的模块热替换（HMR），即时反馈在页面上。

## ⚙️ 如何修改内容

所有展示的数据内容目前维护在单页面的顶端，方便快速修改和迭代：

由于项目的轻量化设计，所有的项目和动态信息均在 `src/App.tsx` 中的配置数组中定义。

1. **修改项目经历**: 在 `src/App.tsx` 中找到 `const projects: Project[] = [...]` 数组。按照接口字段（`title`, `category`, `description`, `image`, `detailImages`, `fullDescription`）更新您的图文数据。
2. **修改个人动态**: 在 `src/App.tsx` 中找到 `const activities: Activity[] = [...]` 数组。
3. **修改全局暗黑样式**: 样式变量配置在 `src/index.css`，您可以更改 `@theme` 下的颜色值（例如 `--color-accent-red: #8B0000;`）调整网站的基调。

## 📦 编译与部署

本项目是典型的静态单页应用 (SPA)，可以轻松部署到任何静态资源托管平台。

### 本地构建

```bash
npm run build
```
执行完毕后，所有优化后的静态文件都会生成在 `dist/` 目录下。

### 本地预览生产构建产物

```bash
npm run preview
```

### 推荐的部署方式

#### 1. 部署到 Vercel (最简单，推荐)

项目根目录已经提供了 `vercel.json`，包含了针对单页应用的重定向配置。
- 登录 [Vercel](https://vercel.com/)
- 点击 "Add New Project"，导入您的 GitHub 仓库
- 框架预设 (Framework Preset) 选择 **Vite**
- 点击 "Deploy" 即可极速上线。

#### 2. 部署到 Netlify

-登录 Netlify，导入 GitHub 仓库。
- **Build command**: `npm run build`
- **Publish directory**: `dist`

#### 3. 部署到 GitHub Pages

在 `package.json` 中添加您的网页链接根路径：
```json
// vite.config.ts 添加 base
export default defineConfig({
  base: '/your-repo-name/', 
  // ...
})
```
然后可使用 `gh-pages` 库推送到 gh-pages 分支，即可在 `https://<用户名>.github.io/<仓库名>` 访问。

---

> 设计源于对真实世界的反复咀嚼。
> 欢迎 Fork 并定制你自己的极简专属主页！
