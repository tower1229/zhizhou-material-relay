# zhizhou-material-relay

一个面向 PC 的大包业务组件库

## 调试

启动调试

```
fie start             # 打开开发环境，运行所有组件
fie start <compName>  # 打开开发环境，运行特定组件(更快)
```

构建

```
fie build
```

### 元数据类型

```
ID("主键"), 0
TEXT("文本"),0
TEXTAREA("文本域"),0
SINGLE_CHOICE("单选"),0
MULTI_CHOICE("多选"),0
INTEGER("整数"),0
DECIMAL("实数"),0
DATE("日期"),00
TIME("时间"),0
MONEY("货币"),0
AUTO_NO("自动编号"),
RELATIONSHIP("关联关系"),0
QUOTE("引用关系"),
ITEM_DETAIL("主子明细"),
COMPUTE("计算类型"),
PHONE("电话"),0
EMAIL("邮件"),0
WEBSITE("网址"),0
FILE("文件"),0
PERCENT("百分比"),
BOOL("布尔类型"),0
GEO_POSITION("地址位置"),
SINGLE_CHOICE_TREE("单选下拉树"),0
MULTI_CHOICE_TREE("多选下拉树"),0
ID_CARD("身份证号"),0
CHILDREN("子项");
IMAGE("图片");
```
