---
title: MySQL
date: 2022-04-10
categories: SQL
tags:
 - SQL
---

## 方法

### 解析 XML

```sql
SET @XML = '<a class="c1">
  <b class="c2">b1</b>
  <b class="c3">b2</b>
  <b class="c4">
    <c>c</c>
  </b>
</a>';

SELECT
	ExtractValue ( @XML, '//a/@class' ) AS val1,
	ExtractValue ( @XML, '//a/b' ) AS val2,
	ExtractValue ( @XML, '//b' ) AS val3,
	ExtractValue ( @XML, '//b/@class' ) AS val4,
	ExtractValue ( @XML, '//b/c' ) AS val5;
	
```

| val1 | val2                  | val3                  | val4     | val5 |
| :--- | :-------------------- | :-------------------- | :------- | :--- |
| c1   | b1 b2 <br/>     <br/> | b1 b2 <br/>     <br/> | c2 c3 c4 | c    |

### 拷贝表结构

```sql
create table new_table like old_table;
```

### 拷贝表结构和数据

```sql
create table new_table as select * from old_table;
```

### 修改表名

```sql
rename table old_table to new_table
```



## 函数

### 日期函数

```sql
# 获取当前日期
SELECT curdate();

# 获取当前日期时间
select now();
select current_timestamp();
select current_timestamp;
select localtime();
select localtime;
select localtimestamp();
select localtimestamp;

# 获取当前时间
select curtime();
select current_time();
select current_time;

# 获取日期 2020-07-12
SELECT date('2020-07-12 10:11:22');

# 获取时间 10:11:22
SELECT time('2020-07-12 10:11:22');

# 获取年份 2020
SELECT year('2020-07-12 10:11:22');

# 获取季度 3
SELECT quarter('2020-07-12 10:11:22');

# 获取月份 7
SELECT month('2020-07-12 10:11:22');

# 获取周 28
SELECT week('2020-07-12 10:11:22');

# 是否是今天
select to_days('2022-10-07 18:25:02') = to_days(now()) 'isToday';

# 是否是昨天
select to_days('2022-10-07 18:25:02') = (to_days(now()) - 1) 'isYesterday';

# 是否是同一周
select yearweek('2022-10-07 18:25:02') = yearweek(now()) 'sameWeek';

# 是否是同一个月
select date_format('2022-10-07 18:25:02', '%Y%m') = date_format(curDate(), '%Y%m') 'sameMonth';

# 是否是去年
select year('2022-10-07 18:25:02') = YEAR(date_sub(now(), interval 1 year)) 'isLastYear';

# 昨天、今天、明天
select date_sub(curDate(), interval 1 day) 'yesterday',
       curDate()                           'today',
       date_add(curDate(), INTERVAL 1 day) 'tomorrow';

# 一小时前、半小时前、现在、半小时后、一小时后
select date_sub(now(), interval 1 hour) 'now - 1h',
       date_sub(now(), interval 30 minute) 'now - 30m',
       now() 'now',
       date_sub(now(), interval -30 minute) 'now + 30m',
       date_add(now(), interval 1 hour) 'now + 1h';

# 两个日期之间的天数 2
SELECT datediff('2020-07-12','2020-07-10');
```

