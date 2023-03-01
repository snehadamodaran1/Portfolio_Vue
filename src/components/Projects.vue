<template>
  <section id="projects" class="projects">
    <div class="main-container"></div>
  </section>
</template>

<script>
export default {
  name: 'projects',
  data () {
    return {
      title: 'Projects'
    }
  }
}
</script>

<style>
.projects {
  background: yellow;
  /* #fafafa; */
  padding: 6rem 0;
  height: 80vh;
}
.main-container {
  max-width: 120rem;
  margin: auto;
  width: 92%;
}
</style>
