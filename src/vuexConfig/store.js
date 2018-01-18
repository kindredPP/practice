import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    count: 1
}
const mutations = {
    add(state, n) {
        state.count += n;
    },
    reduce(state) {
        state.count -= 1;
    }
}
const getters = {
    count: function(state){
        return state.count += 100;//每次count 的值发生变化的时候，都会进行加100的操作。
    }
}
const actions = {
    addAction(context) {
        setTimeout(function(){//模拟异步
            context.commit('add', 10)
        }, 3000)
    },
    reduceAction({commit}) {
        commit('reduce')
    }
}
export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})
/* 
const moduleA = {
    state, mutations, getters, actions
}

export default new Vuex.Store({
    modules: {
        a: moduleA
    }
}) */