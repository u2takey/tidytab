<template>
  <a @click="toggleView" title="Toggle">
    <span>{{groupView}}</span>
  </a>
</template>

<script>
import store, { TAB_GROUP_VIEWS } from '../store/index.js'
import { mapState } from 'vuex'

export default {
  methods: {
    toggleView () {
      const view = this.tabGroupView === TAB_GROUP_VIEWS[0]
                   ? TAB_GROUP_VIEWS[1] : this.tabGroupView === TAB_GROUP_VIEWS[1]
                   ? TAB_GROUP_VIEWS[2] : TAB_GROUP_VIEWS[0]
      store.commit('SET_TAB_GROUP_VIEW', view)
    }
  },
  computed: {
    ...mapState([ 'tabGroupView' ]),

    groupView () {
      if(this.tabGroupView === TAB_GROUP_VIEWS[1]){
        return 'GroupByDay'
      }else if (this.tabGroupView === TAB_GROUP_VIEWS[2]){
        return 'GroupByMonth'
      }else{
        return 'GroupByTidy'
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "../styles/settings";
</style>
