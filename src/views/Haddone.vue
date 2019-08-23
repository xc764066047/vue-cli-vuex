<template>
  <div class="listbox">
    <ul v-for="(data, index) in donelist">
      <li key="index" class="list" :class="{completelist:data.isChecked}">
        <input type="checkbox" v-model="data.isChecked" />
        {{data.text}}
      </li>
    </ul>
  </div>
</template>

<style scoped>
  .listbox {
    width: 40%;
    margin: 0 auto;
  }
  .list {
    list-style: none;
    display: flex;
    justify-content: space-between;
  }
  .completelist {
    text-decoration: line-through;
  }
</style>


<script>
import { mapGetters } from 'vuex';

export default {
  // 多个属性用这种写法
  computed: mapGetters({
      donelist: 'doneList'
  })
}

// 第二种写法，只适用于单个属性
//   computed: {
//     ...mapState(['list'])
//   }


</script>



