---
title: CentOS 源
date: 2022-02-19
categories: Linux
tags:
  - Linux
  - CentOS
---

## 备份

```shell
mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup
mv /etc/yum.repos.d/epel.repo /etc/yum.repos.d/epel.repo.backup
mv /etc/yum.repos.d/epel-testing.repo /etc/yum.repos.d/epel-testing.repo.backup
```

## 下载

下载 repo 到 /etc/yum.repos.d/

### CentOS  镜像

#### **CentOS 8**

```shell
wget -O /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-vault-8.5.2111.repo
```

#### **CentOS 7**

```shell
wget -O /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-7.repo
```

#### CentOS 6

```shell
wget -O /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-vault-6.10.repo
```

### Epel 镜像

#### **CentOS 8**

```shell
# 安装 epel 配置包
yum install -y https://mirrors.aliyun.com/epel/epel-release-latest-8.noarch.rpm

# 将 repo 配置中的地址替换为阿里云镜像站地址
sed -i 's|^#baseurl=https://download.example/pub|baseurl=https://mirrors.aliyun.com|' /etc/yum.repos.d/epel*
sed -i 's|^metalink|#metalink|' /etc/yum.repos.d/epel*
```

#### **CentOS 7**

```shell
wget -O /etc/yum.repos.d/epel.repo https://mirrors.aliyun.com/repo/epel-7.repo
```

#### CentOS 6

```shell
wget -O /etc/yum.repos.d/epel.repo https://mirrors.aliyun.com/repo/epel-archive-6.repo
```

### 生成缓存

```shell
yum clean all && yum makecache
```

### 其他

非阿里云 ECS 用户会出现 Couldn't resolve host 'mirrors.cloud.aliyuncs.com' 信息，不影响使用。用户也可自行修改相关配置

```shell
sed -i -e '/mirrors.cloud.aliyuncs.com/d' -e '/mirrors.aliyuncs.com/d' /etc/yum.repos.d/CentOS-Base.repo
```

### 参考

[centos](https://developer.aliyun.com/mirror/centos)

[epel](https://developer.aliyun.com/mirror/epel)

