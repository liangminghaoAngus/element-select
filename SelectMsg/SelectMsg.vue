<template>
  <div>
    <el-select
      v-model="insideValue"
      :placeholder="placeholder"
      style="width:100%"
    >
      <el-option
        v-for="(option,index) in selectOption"
        :key="'op1'+index"
        :label="option.label"
        :value="option.value"
      ></el-option>
    </el-select>
  </div>
  </div>
</template>

<script>
export default {
  name: "ddsss",
  props: {
    /**
     * option 下拉菜单的选项
     */
    selectOption: {
      type: Array,
      default() {
        return [];
      }
    },
    placeholder: {
      type: String,
      default: ""
    },
  },
  watch:{
    insideValue(){
      this.$emit('changeinfo',this.insideValue)
    }
  },
  data() {
    return {
      insideValue:''
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped>
</style>
