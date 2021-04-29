import { shallowMount, createLocalVue, mount } from '@vue/test-utils'
import Vuex from 'vuex'
import App from '../src/components/App.vue'
import index from '../src/store/index'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('App.vue', () => {
  let actions
  let store

  beforeEach(() => {
    actions = {
      SOME_ACTION: jest.fn()
    };
    store = new Vuex.Store({
      state: {},
      actions
    });
  });

  // コンポーネントがマウントされ、ラッパが作成されます。
  const wrapper = mount(App, {
    localVue,
    store
  })

  // wrapper.vmを 介して実際の Vue インスタンスにアクセスできます
  const vm = wrapper.vm

  console.log(wrapper.html())

  it('vue contains h2', ()=>{
    // h2
    expect(wrapper.find('h2').exists()).toBeTruthy()
  })

  it('vue contains Products in h2', ()=>{
    // Products in h2
    expect(wrapper.find('h2').text()).toEqual('Products')
  })

  it('', ()=>{
      actions.created()
      console.log(wrapper.vm.$store)
  })

})
