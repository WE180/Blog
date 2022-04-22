---
title: Linux 常用命令
date: 2022-04-20
categories: Linux
tags:
  - Linux
---

### 用户&用户组

#### useradd 

#### userdel 

#### usermod 

#### passwd 

#### su

#### groupadd

#### groupdel

$ useradd 选项 用户名:添加用户账号
$ userdel 选项 用户名:删除用户帐号
$ usermod 选项 用户名:修改帐号
$ passwd 用户名:更改或创建用户的密码
$ passwd -S 用户名 :显示用户账号密码信息
$ passwd -d 用户名: 清除用户密码
$ su - 用户名：切换登录用户

```bash
# 增加一个新的用户组
$ groupadd 选项 用户组

# 要删除一个已有的用户组
$ groupdel 用户组

# 修改用户组的属性
$ groupmod 选项 用户组
```



### 权限

#### chmod

- **-R** ：对目录以及目录下的文件递归执行更改权限操作

```shell
chmod [ugoa] [+-=] [rwx] dirname/filename
- u: 拥有者
- g: 所属群组
- o: 其他人
- a: 所有人
- +: 添加权限
- -: 移除权限
- =: 设定权限

# 将文件 file.txt 设为所有人皆可读取
chmod a+r file.txt
# 当前用户具有所有权限，组用户有读写权限，其他用户只有读权限
chmod u=rwx, g=rw, o=r file.txt
# 将 file.txt 文件的权限修改为 -rwxr-xr--
chmod 754 file.txt
```

#### chown



### 文件与目录

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

扩展

- 蓝色：目录
- 绿色：可执行文件
- 白色：一般性文件，如文本文件，配置文件等
- 红色：压缩文件或归档文件
- 浅蓝色：链接文件
- 红色闪烁：链接文件存在问题
- 黄色：设备文件
- 青黄色：管道文件

#### tree

- **-L** ：制目录显示层级
- **-f** ：在每个文件或目录之前，显示完整的相对路径名称
- **-i** ：不以阶梯状列出文件和目录名称
- **-I** ：忽略当前目录文件夹

```shell
# 列出目录/private/ 第一级文件名
tree  /private/ -L 1
# 非树状结构列出目录/private/下的所有文件
tree -if /private/
# 忽略当前目录文件夹 node_modules
tree -I node_modules
```

#### ln

- **-s** ：软链接

```shell
# 给 source.file 创建软链 link.file（写绝对路径）
ln -s /tmp/source.file /tmp/ln/link.file 
# 给 source.dir 创建软链 link.dir（目标目录在建立连接之前不能存在，但要保证它的上级目录存在）
ln -s /tmp/source.dir/ /tmp/ln/link.dir/
```

### 查看文件内容

cat

tac

more

less

head

tail 

cut



### 查找命令或文件

which
whereis
locate
find

fd

### 压缩打包

tar

zip\unzip

gzip、zcat、zmore、zless 



### 上传下载

rz

sz

scp

### 网络

### 磁盘查看

### 防火墙

### 查看进程

ps
top
pstree
netstat

### 查看端口

### 查看cpu

### 查看io

### 查看内存

### 查看磁盘

### ssh
