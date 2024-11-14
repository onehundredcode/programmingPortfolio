<template>
  <div class="home">
    <div class="dashboard-header">
    <h1>Welcome to Your Data Dashboard</h1>
  </div>
  <div class="dashboard-content">
    <div class="metrics">
      <MetricCard :title="'Revenue'" :value="metrics.revenue"/>
      <MetricCard :title="'Users'" :value="metrics.users" />
      <MetricCard :title="'Conversions'" :value="metrics.conversions"/>
    </div>
    <div class="charts">
      <!--add charts here-->
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import MetricCard from '@/components/MetricCard.vue'

@Options({
  components: {
    MetricCard
  }
})
export default class HomeView extends Vue {
  metrics = {
    revenue: 12000,
    users: 250,
    conversions: 8
  };
}
</script>
