---
title: Linux 常用命令
date: 2022-04-19
categories: Linux
tags:
  - Linux
---

### 文件目录操作

#### mkdir

- **-p** ：确保目录名称存在，不存在的就建一个
- **-m** ：建立目录的同时设置目录的权限

```shell
# 在当前目录中建立下建立 tmp 和 tmp 下的 test 目录，并且只有文件主有读、写和执行权限，其他人无权访问
mkdir -p -m 700 tmp/test
```

#### mv

- **-b** ：当目标文件或目录存在时，在执行覆盖前，会为其创建一个备份。

```shell
# 重命名文件
mv file_1.txt file_2.txt
# 重命名目录
mv directory_1/ directory_2/
# 将目录 /usr/men 中的所有文件移到当前目录
mv /usr/men/* .
# 复制时创建备份
mv -bv *.txt /home/office
```

#### cp

- **-a** ：此参数的效果和同时指定"-dpR"参数相同
- **-d** ：当复制符号连接时，把目标文件或目录也建立为符号连接，并指向与源文件或目录连接的原始文件或目录
- **-p** ：保留源文件或目录的属性
- **-R/r** ：递归处理，将指定目录下的所有文件与子目录一并处理；

```shell
# 将 packageA 下的所有文件拷贝到 packageB 中
cp -r /home/packageA/* /home/cp/packageB
# 将 packageA 文件夹拷贝到 packageB 中
cp -r /home/packageA /home/packageB
```

#### ls

### 文件与目录

### 文件属性

### 查看文件内容

### 查找命令或文件

### 压缩打包

### 上传下载

### 网络

### 磁盘查看

### 防火墙

