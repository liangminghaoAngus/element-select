# element-select
基于 elementUI-msgbox 扩展的 msg-select 组件

# 官方组件
![alert](https://github.com/liangminghaoAngus/element-select/edit/master/$alert.png "alert")
### alert 提示框

![confirm](https://github.com/liangminghaoAngus/element-select/edit/master/$confirm.png "confirm")
### confirm 确认框

![input](https://github.com/liangminghaoAngus/element-select/edit/master/$input.png "input")
### input 输入框

# 如何使用 use
在 「.vue」 文件中 
in your 「.vue」 file

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
