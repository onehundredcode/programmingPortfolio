<template>
    <div class="metric-card">
        <h3>{{ title }}</h3>
        <p>{{ value }}</p>
    </div>
</template>

<script lang="ts">
export default {
  props: {
    title: String,
    value: Number
  }
}
</script>

<style scoped>
.metric-card {
    border: 1px solid #ccc;
    padding: 20px;
    margin: 10px;
    width: 200px;
    text-align: center;
}
</style>
