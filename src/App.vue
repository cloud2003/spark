<template>
  <div id="app">
    <aside class="sidebar">
      <header class="sidebar__header">
        SPARK
      </header>
      <nav class="sidebar__nav">
        <ul class="sidebar__nav__list">
          <li class="sidebar__nav__item">Один</li>
          <li class="sidebar__nav__item">Два</li>
          <li class="sidebar__nav__item">Три</li>
        </ul>
      </nav>
    </aside>
    <main class="main-container">
      <div class="main-container__header">
        menu
      </div>

      {{ msg }}
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
