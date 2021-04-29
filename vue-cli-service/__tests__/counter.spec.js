import { shallowMount, createLocalVue, mount } from '@vue/test-utils'
import Vuex from 'vuex'
import App from '../src/components/Counter.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Counter.vue', () => {
  let actions
  let store

  // コンポーネントがマウントされ、ラッパが作成されます。
  const wrapper = mount(App)

  // wrapper.vmを 介して実際の Vue インスタンスにアクセスできます
  const vm = wrapper.vm

  console.log(wrapper.html())

  it('vue contains div', ()=>{
    // div
    expect(wrapper.find('div').exists()).toBeTruthy()
  })

  it('add 1 after button click', ()=>{
    expect(wrapper.vm.count).toBe(0)
    const button = wrapper.find('button')
    button.trigger('click')
    expect(wrapper.vm.count).toBe(1)
    expect(wrapper.element).toMatchSnapshot()
  })

})
