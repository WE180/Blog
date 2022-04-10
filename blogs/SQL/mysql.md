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

