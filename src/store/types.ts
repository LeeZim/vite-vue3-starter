import userStoreModuleTypes from './modules/types'

export default interface RootStareTypes {
  count: number
}

export interface AllStateTypes extends RootStareTypes {
  userStoreModule: userStoreModuleTypes
}
