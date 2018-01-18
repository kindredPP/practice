<template>
    <div>
        <h2>VuexDemo</h2>
        <h3>{{msg}}</h3>
        <hr/>
        <h3>normal) {{$store.state.count}}</h3>
       <!--  <h4>module) {{$store.state.a.count}}</h4> -->
        <h5>compute: {{count}}</h5>
        <div>
            <button @click="$store.commit('add', 10)">+</button>
            <button @click="$store.commit('reduce')">-</button>
            <button @click="reduce">-</button>
        </div>
        <div>
            <button @click="addAction">+</button>
            <button @click="reduceAction">-</button>
        </div>
        
    </div>
</template>

<script>
import store from './../../vuexConfig/store'
import {mapState, mapMutations, mapGetters, mapActions} from 'vuex'
export default {
    data () {
        return {
            msg: 'hello'
        }
    },
    store,
    /* computed: {
        count () {
            return this.$store.state.count
        }
    } */
    /* computed: mapState({
        count: function(state){//state => state.count;
            return state.count;
        }
    }) */
    /* computed: mapState(["count"]), //三种均可 */
    computed: {
        ...mapState(["count"]),
        ...mapGetters(["count"]),
       /*  count() {
            return this.$store.getters.count;
        } */
       /* count() {
            return this.$store.state.a.count;
        } */
    },
    methods: {
        ...mapMutations(['add', 'reduce']),
        ...mapActions([
            'addAction', 'reduceAction'
        ])
    }
}
</script>

<style>

</style>
