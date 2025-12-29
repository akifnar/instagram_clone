<template>
  <nav class="app">
    <MasterHeader />

    <main class="main">
      <Container>
        <router-view />
      </Container>
    </main>
  </nav>
</template>

<script>
import MasterHeader from './components/MasterHeader.vue'
import Container from './components/CompContainer.vue'
export default {
  name: 'App',
  components: {
    Container,
    MasterHeader
  }
}
</script>
<style scoped>
.main {
  padding-top: 40px;
}
</style>
