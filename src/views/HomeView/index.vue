<template>
  <div class="home">
    <div class="timeline">
      <h1>Home</h1>

      <CompAvatar :size="80"></CompAvatar>
    </div>
    <div class="sidebar">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
        esse, inventore labore magnam magni omnis provident sed sint. Aliquid
        cupiditate earum, nostrum officiis quae quidem quo. Eveniet ipsa
        possimus quam!
      </p>
    </div>
  </div>
</template>

<script>
import CompAvatar from '@/components/CompAvatar.vue'

export default {
  name: 'HomeView',
  components: { CompAvatar }
}
</script>

<style scoped>
.home {
  max-width: 605px;
  margin-left: auto;
  margin-right: auto;

  @media (--t) {
    max-width: none;
    display: grid;
    grid-template-columns: 1fr 295px;
    grid-gap: 30px;
  }
}

.sidebar {
  display: none;
  @media (--t) {
    display: block;
  }
}
</style>
