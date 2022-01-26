---
title: Windows Terminal 美化
date: 2021-04-27
categories: Windows
tags:
 - terminal
---

## PowerShell

### 下载
在 PowerShell 的 [github](https://github.com/PowerShell/PowerShell) 中，找到需要的版本进行下载 <br>
![](https://images.sudk.top/1619533415638.png)
[PowerShell7 稳定版](https://github.com/PowerShell/PowerShell/releases/download/v7.1.3/PowerShell-7.1.3-win-x64.msi) <br>
[PowerShell7 预览版](https://github.com/PowerShell/PowerShell/releases/download/v7.2.0-preview.5/PowerShell-7.2.0-preview.5-win-x64.msi)



## Windows Terminal

### 安装
Windows Terminal 在 Microsoft Store 中下载



## [starship](https://starship.rs/zh-CN/guide/) 美化

### 前置要求

- 安装一个 [Nerd Font](https://www.nerdfonts.com/font-downloads) 的字体，并在终端启用（例如，可以尝试使用 [Fira Code Nerd Font](https://www.nerdfonts.com/font-downloads) 字体）。

### 开始安装

1. 安装 **starship** 二进制文件：

   #### 通过软件包管理器安装

   使用 [Scoop](https://scoop.sh)：

   ```powershell
   scoop install starship
   ```

2. 将初始化脚本添加到您的 shell 的配置文件：

   #### Powershell

   将以下内容添加到 `Microsoft.PowerShell_profile.ps1`。 你可以在 PowerShell 通过 `$PROFILE` 变量来查询文件的位置。 对于 -Nix 来说，通常文件路径是 `~\Documents\PowerShell\Microsoft.PowerShell_profile.ps1` 或 `~/.config/powershell/Microsoft.PowerShell_profile.ps1`。

   ```sh
   Invoke-Expression (&starship init powershell)
   ```



## Windows Terminal 设置

### 设置

1. 打开 `Windows Terminal`，点开设置

<img src="https://images.sudk.top/1620221983961.png" style="zoom:33%;" />

2. 常规设置

   命令行是安装 `PowerShell` 目录

<img src="https://images.sudk.top/1620222527694.png" style="zoom:50%;" />

3. 外观设置

<img src="https://images.sudk.top/1620222547176.png" style="zoom:50%;" />

### 效果图

![](https://images.sudk.top/1620222866614.png)

