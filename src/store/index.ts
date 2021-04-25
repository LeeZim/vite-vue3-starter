import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import RootStateTypes, { AllStateTypes } from './types'

import userStoreModule from './modules/user'

// Create a new store instance.
export const store = createStore<RootStateTypes>({
  state: {
    count: 0
  },
  mutations: {
    // mutations内无法调用自己的方法，不建议在此处写异步操作
    increment(state) {
      state.count += 1
    }
  },
  actions: {
    // 执行mutations里面的方法 异步操作放在actions
    increment(context) {
      context.commit('increment')
    }
  },
  getters: {
    double(state) {
      return 2 * state.count
    }
  },
  modules: {
    userStoreModule
  }
})

export const key: InjectionKey<Store<RootStateTypes>> = Symbol('vue-store')

export function useStore<T = AllStateTypes>() {
  return baseUseStore<T>(key)
}
