---
title: Upgrade CentOS 8 to CentOS Stream
date: 2022-02-19
categories: Linux
tags:
  - Linux
  - CentOS
---

::: tip
众所周知，CentOS 8 已经在 2021 年 12 月 31 日达到了它的 EOL，现在是时候把你的 CentOS 8 Linux 升级到 CentOS Stream 了，这是 CentOS 项目的未来。CentOS 已经将重点从 CentOS 转移到 CentOS stream，这是一个介于 Fedora 和 RHEL 之间的中流。如果你打算将 CentOS 7 升级到 CentOS 8，那么最好跳过升级到 CentOS 8，因为 CentOS 7 将获得到 2024 年的支持! 如果不可避免地要升级，那么请按以下方法升级到 CentOS Stream
:::

### Update your CentOS 8 to the latest release

```shell
 dnf update -y
```

### 查看版本

```shell
# more /etc/redhat-release
CentOS Linux release 8.5.2111
```

### 更新软件包

```shell
dnf swap centos-linux-repos centos-stream-repos
```

### 将安装的软件包同步到最新的可用版本

```shell
dnf distro-sync
```

### 查看系统版本

```shell
# more /etc/redhat-release
CentOS Stream release 8
```
