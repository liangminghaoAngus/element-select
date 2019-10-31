# element-select
基于 elementUI-msgbox 扩展的 msg-select 组件

# 官方组件
![alert](https://github.com/liangminghaoAngus/element-select/blob/master/%24alert.png "alert")
### alert 提示框

![confirm](https://github.com/liangminghaoAngus/element-select/blob/master/%24confirm.png "confirm")
### confirm 确认框

![input](https://github.com/liangminghaoAngus/element-select/blob/master/%24input.png "input")
### input 输入框

# 如果出现了选择并确认的需求，不想放在页面上 
整一个，反正官方也说了，支持「自定义」

## 效果图
![show](https://github.com/liangminghaoAngus/element-select/blob/master/show.gif "show")

## 暂时支持
调用 ```$select``` 后，目前只有 ```confirm```的做了处理返回```{action: "confirm", value: xxx}```


# 如何使用 use
在 「.vue」 文件中 
in your 「.vue」 file

参数设置：参考官方
[link](https://element.eleme.cn/#/zh-CN/component/message-box#options "link")


```
import '@/components/SelectMsg/index'

export default {
  name: "dddddd",
  data() {
    return {};
  },
  mounted() {
  
    this.$select({
      title: "配置的select",
      list: [
        {
          label: "选项1",
          value: 1
        },
        {
          label: "选项2",
          value: 2
        }
      ]
    }).then(v => {
      console.log(v);
    });
    
  },
  methods: {}
};
```
