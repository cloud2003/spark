<template>
  <div id="app">
    <aside class="sidebar">
      <header class="sidebar__header">
        SPARK
      </header>
      <nav class="sidebar__nav">
        <ul class="sidebar__nav__list">
          <li class="sidebar__nav__item"><router-link to="/hello">HelloWorld</router-link></li>
          <li class="sidebar__nav__item"><router-link to="/about">About</router-link></li>
          <!--<li class="sidebar__nav__item">Три *</li>-->
        </ul>
      </nav>
    </aside>
    <main class="main-container">
      <div class="main-container__header">
        menu {{ msg }}
      </div>

      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Spark'
    }
  }
}
</script>
