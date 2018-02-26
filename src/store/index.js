import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  list: [],
  mock: [
      {
          title: 'title 1',
      },
      {
          title: 'title 2',
      },
  ]
}

const mutations = {

}

const actions = {
    load: (store) => {
        setTimeout(() => {
            store.state.list = store.state.mock;
            store.state.list.push({title: 'Some new title'});
        }, 2000);
    }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
