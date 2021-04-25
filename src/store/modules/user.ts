// store模块
// 注意 方法命名不要重复

import { Module } from 'vuex'
import userStoreModuleTypes from './types'
import RootStateTypes from '../types'

const userStoreModule: Module<userStoreModuleTypes, RootStateTypes> = {
  namespaced: true,
  state: {
    count: 0
  },
  mutations: {
    // mutations内无法调用自己的方法，不建议在此处写异步操作
    userStoreIncrement(state: any) {
      state.count += 1
      console.log(state.count)
    }
  },
  actions: {
    // 执行mutations里面的方法 异步操作放在actions
    userStoreIncrement(context: any) {
      context.commit('userStoreIncrement')
    }
  },
  getters: {
    userStoreDouble(state: any) {
      return 2 * state.count
    }
  }
}

export default userStoreModule
