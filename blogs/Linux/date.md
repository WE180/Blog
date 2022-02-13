---
title: CentOS 8 时间同步
date: 2022-02-13
categories: Linux
---

## chrony 同步时间

### 安装
```shell
yum install -y chrony
```

### 同步时间

- 临时同步

```shell
chronyd -q 'server ntp.ntsc.ac.cn iburst'
```

- 永久同步时间

```shell
vim /etc/chrony.conf
```

 修改 `chrony.conf `  修改第三行为  `pool ntp.ntsc.ac.cn iburst`

```
# Use public servers from the pool.ntp.org project.
# Please consider joining the pool (http://www.pool.ntp.org/join.html).
pool 2.centos.pool.ntp.org iburst

# Record the rate at which the system clock gains/losses time.
driftfile /var/lib/chrony/drift

# Allow the system clock to be stepped in the first three updates
# if its offset is larger than 1 second.
makestep 1.0 3

# Enable kernel synchronization of the real-time clock (RTC).
rtcsync

# Enable hardware timestamping on all interfaces that support it.
#hwtimestamp *

# Increase the minimum number of selectable sources required to adjust
# the system clock.
#minsources 2

# Allow NTP client access from local network.
#allow 192.168.0.0/16

# Serve time even if not synchronized to a time source.
#local stratum 10

# Specify file containing keys for NTP authentication.
keyfile /etc/chrony.keys

# Get TAI-UTC offset and leap seconds from the system tz database.
leapsectz right/UTC

# Specify directory for log files.
logdir /var/log/chrony

# Select which information is logged.
#log measurements statistics tracking
```

### 重启服务

```shell
 systemctl restart chronyd
```

### 查看同步状态

```shell
chronyc tracking
```
