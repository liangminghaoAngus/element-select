// Vue.prototype.$select = 
import Vue from 'vue';
import vm from '@/main'
import SelectMsg from './SelectMsg'

const h = vm.$createElement;

Vue.prototype.$select = createSelectBox

/**
 * 
 * @param {*} option 继承 $msg
 * @param {*} option.value  select 绑定的值
 * @param {string} option.placeholder  select 绑定的 placeholder 填充内容
 * @param {Array} option.list  select 的可选值
 * @returns {Promise} 
 */
function createSelectBox(option) {
  if (typeof option.message != 'undefined') delete option.message
  let value = option.value || '';
  return vm.$msgbox({
      ...option,
      showCancelButton: true,
      beforeClose: async (action, instance, done) => {
        if (action !== "confirm") {
          done()
        }
        if (option.list.filter(v => v.value == value).length == 0) {
          return
        }
        done();
      },
      message: h(SelectMsg, {
        props: {
          selectOption: option.list,
          placeholder: option.placeholder || '',
        },
        on: {
          changeinfo: (val) => {
            value = val
          }
        }
      })
    })
    .then(v => {
      // console.log(v);
      return Promise.resolve({
        action: v,
        value
      })
    })
    .catch(e => {
      // console.log(e);
      if (e === 'cancel') {
        return Promise.resolve({
          action: e,
          value
        })
      } else {
        return Promise.reject('error')
      }
    })
}
