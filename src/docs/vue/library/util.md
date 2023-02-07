## 引入
```javascript
import Trim from '@/library/trim'
import LTrim from '@/library/trim_left'
import RTrim from '@/library/trim_right'
import Explode from '@/library/explode'
import Implode from '@/library/implode'
import ArrayUnique from '@/library/array_unique'

import IsMobile from '@/library/is_mobile'

import RegRight from '@/library/reg_right'
import RegTest from '@/library/reg_test'

import TelCall from '@/library/tel_call'
import TelHide from '@/library/tel_hide'

import UrlEncode from '@/library/url_encode'
import UrlDecode from '@/library/url_decode'

import Base64Encode from '@/library/base64_encode'
import Base64Decode from '@/library/base64_decode'
import Base64Type from '@/library/base64_type'
```

## Trim 去首尾字符
```javascript
Trim(str: string, glue: string='\\s');
LTrim(str: string, glue: string='\\s');
RTrim(str: string, glue: string='\\s');
```

## 数组-转换
```javascript
// 字符串 to 数组
Explode('-', 'php-python-java')
// 数组 to 字符串
Implode(' ', ['php', 'python', 'java']);
```

## 数组-去重
```typescript
ArrayUnique(
  arr: Array<Object>,   //数组
);
```

## 是否手机系统
```typescript
IsMobile();
```

## 正则-公共
```typescript
RegRight(
  name: string,           //项目: uname、tel、email、vcode、passwd
  val: string,            //内容
  isMsg: boolean=false,   //错误提示
);
```

## 正则-验证
```typescript
RegTest(
  reg: RegExp,     //正则
  val: string,     //内容
);
```

## Url-编码
```javascript
UrlEncode(
  data: string, //数据
);
```
## Url-解码
```javascript
UrlDecode(
  data: string, //数据
);
```

## Base64-编码
```typescript
Base64Encode(data: string);
```
## Base64-解码
```typescript
Base64Decode(base64: string);
```
## Base64-类型
```typescript
Base64ExtType(ext: string);
```