# GitHub Pages 部署指南

## 步骤

### 1. 在 GitHub 上创建仓库
访问 GitHub 并创建名为 `YunhaoXu.github.io` 的仓库（如果还没创建）

### 2. 初始化 Git 并推送代码

在项目目录下运行以下命令：

```bash
# 初始化 Git 仓库
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit: Portfolio website"

# 添加远程仓库
git remote add origin https://github.com/YunhaoXu/YunhaoXu.github.io.git

# 推送到 GitHub
git push -u origin main
```

注意：如果默认分支是 `master` 而不是 `main`，需要先重命名：
```bash
git branch -M main
```

### 3. 在 GitHub 仓库中配置 Pages

1. 访问：https://github.com/YunhaoXu/YunhaoXu.github.io/settings/pages
2. 在 "Build and deployment" 部分：
   - Source: 选择 "GitHub Actions"
3. 保存设置

### 4. 等待部署完成

- 推送代码后，GitHub Actions 会自动构建和部署
- 访问 https://github.com/YunhaoXu/YunhaoXu.github.io/actions 查看部署进度
- 通常需要 2-5 分钟

### 5. 访问您的网站

部署成功后，访问：
```
https://yunhaoXu.github.io
```

## 更新网站

以后要更新网站内容，只需：

```bash
git add .
git commit -m "Update content"
git push
```

GitHub Actions 会自动重新部署。

## 故障排除

如果部署失败：
1. 检查 Actions 标签页的错误日志
2. 确保 Pages 设置为 "GitHub Actions"
3. 确保仓库是公开的（或者有 GitHub Pro）

## 本地测试

在推送前本地测试构建：

```bash
npm run build
```

如果构建成功，部署也应该成功。

