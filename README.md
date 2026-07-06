# Resume

龚桂兵的在线简历静态站点，部署在 GitHub Pages。

## 目录结构

```text
.
├── index.html              # 页面入口，仅保留 HTML 壳
├── src/
│   ├── data.js             # 简历结构化内容
│   ├── main.js             # 页面渲染与交互逻辑
│   └── styles.css          # 页面样式
├── assets/
│   └── wechat.jpg          # 联系方式二维码
├── .github/workflows/      # GitHub Pages 部署流程
├── .nojekyll               # 禁用 Jekyll 处理
└── vercel.json             # 兼容 Vercel 静态部署
```

## 本地预览

无需构建工具，启动任意静态文件服务器即可：

```powershell
python -m http.server 58345 --bind 127.0.0.1
```

然后访问 `http://127.0.0.1:58345/`。

## 内容维护

- 简历文字、项目、文章、技能等信息集中维护在 `src/data.js`。
- 页面结构与交互逻辑集中维护在 `src/main.js`。
- 视觉样式集中维护在 `src/styles.css`。