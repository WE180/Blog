---
title: CentOS 8 镜像
date: 2022-02-19
categories: Linux
tags:
  - Linux
  - CentOS
---

::: tip
通知：CentOS 8 操作系统版本结束了生命周期（EOL），Linux 社区已不再维护该操作系统版本。建议您切换到 Anolis 或 Alinux。如果您的业务过渡期仍需要使用 CentOS 8 系统中的一些安装包，请根据下文切换 CentOS 8 的源。
:::

## 配置方法

### 备份

```shell
mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup
```

### 下载 [repo](https://mirrors.aliyun.com/repo/)

centos8（centos8 官方源已下线，建议切换 centos-vault 源）

```shell
 wget -O /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-vault-8.5.2111.repo
```

### 清除 yum 缓存再重新生成 yum 缓存

```shell
yum clean all
yum makecache
```

### 其他

非阿里云 ECS 用户会出现 Couldn't resolve host 'mirrors.cloud.aliyuncs.com' 信息，不影响使用。用户也可自行修改相关配置

```shell
sed -i -e '/mirrors.cloud.aliyuncs.com/d' -e '/mirrors.aliyuncs.com/d' /etc/yum.repos.d/CentOS-Base.repo
```
