## 引入
```javascript
import PriceEncode from './price_encode'
import PriceDecode from './price_decode'
import PriceFixed from './price_fixed'
import PricePercentage from './price_percentage'
import TelEncode from './tel_encode'
import AcountNumber from './acount_number'
```

## 金额-格式化
```typescript
// 价格-加密
PriceEncode(
  price: string,    // 例如: 3600.01
  fixed: number=2   // 默认保留小数点后2位
);
/* 价格-解密 */
PriceDecode(
  price: string,    // 例如: 3,600.01
  fixed: number=2   // 默认保留小数点后2位
);
/* 价格-不四舍五入 */
PriceFixed(
  price: number,    // 例如: 3600.015
  num: number=2     // 默认保留小数点后2位
);
```

## 比较增长(百分比)
```typescript
PricePercentage(n1: number, n2: number);
```

## 电话号码
```typescript
TelEncode(tel: string, delimiter: string=' ');
```

## 银行卡号
```typescript
AcountNumber(num: string, delimiter: string=' ');
```
