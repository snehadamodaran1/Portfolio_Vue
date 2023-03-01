<template>
  <div id="app">
   <Navigator/>
    <Home />
    <About />
    <Projects />
    <Contact />
  </div>
</template>

<script>
import Navigator from './components/Navigator'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
export default {
  name: 'App',
  components: {
    Navigator,
    Home,
    About,
    Projects,
    Contact
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
  padding: 0px;
}
</style>
