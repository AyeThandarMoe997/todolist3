<template>
  <test-list></test-list>
  <item-list></item-list>
  <ul>
    <li v-for="item in items" :key="item.title"> {{item.title}} </li>
  </ul>
</template>

<script>
import TestList from './components/TestList.vue'
import ItemList from './components/ItemList.vue'

export default ({
  name: "App",
  components: {TestList, ItemList},
  data() {
    return {
      items: [
        {
          title: 'Make todo list',
          completed: true
        },
        {
          title: 'Go skydiving',
          completed: false
        }
      ]
    }
  }
})
</script>



<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

body {
  background-color: #abc;
}

*, h1, button {
  font-family: 'Nunito', sans-serif;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-active {
  opacity: 0;
}

.tasks {
  width: 100%;
  max-width: 45rem;
  padding: 1em;
  margin: 1em auto;
  overflow: auto;
  background-color: white;
  box-shadow: 0px .25rem 1rem rgba(black, .25);
}

.tasks__list {
  clear: both;
}

.tasks__item {
  margin-bottom: .5em;
  position: relative;
}

.tasks__item__toggle {
  cursor: pointer;
  width: 100%;
  text-align: left;
  padding: .85em 2.25em .85em 1em;
  background-color: rgba(black, .05);
  border: 1px solid rgba(black, .1);
}

.tasks__item__toggle:hover {
  background-color: rgba(black, .1);
  border-color: rgba(black, .15)
}

.tasks__item__toggle--completed {
  text-decoration: line-through;
  background-color: rgba(green, .15);
  border-color: rgba(green, .2);
}

.task__item__toggle--complete:hover {
  background-color: rgba(green, .25);
  border-color: rgba(green, .3);
}

.tasks__item__remove {
  position: absolute;
  height: 100%;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
}

.tasks__item__remove i {
  vertical-align: middle;
}
</style>
