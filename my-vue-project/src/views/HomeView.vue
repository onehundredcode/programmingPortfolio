<template>
  <div class="home">
    <div class="dashboard-header">
    <h1>Welcome to Your Data Dashboard!</h1>
  </div>
  <div class="dashboard-content">
    <div class="metrics">
      <MetricCard :title="'Average Revenue:'" :value="metrics.revenue"/>
      <MetricCard :title="'Average Users:'" :value="metrics.users" />
      <MetricCard :title="'Average Conversions:'" :value="metrics.conversions"/>
    </div>
    <div class="charts">
      <!--Bar Chart Example-->
      <apexchart type="bar" :options="barChartOptions" :series="barChartSeries" />

      <!--Line Chart Example-->
      <apexchart type="line" :options="lineChartOptions" :series="lineChartSeries" />
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import MetricCard from '@/components/MetricCard.vue'
import ApexChart from 'vue3-apexcharts'

@Options({
  components: {
    MetricCard,
    apexchart: ApexChart
  }
})
export default class HomeView extends Vue {
  // Metric values for your MetricCard components
  metrics = {
    revenue: 12000,
    users: 250,
    conversions: 8
  };

  // Bar chart data and configuration
  barChartSeries = [
    {
      name: 'Revenue',
      data: [10000, 12000, 9000, 14000, 13000, 11000, 15000]
    }
  ];

  barChartOptions = {
    chart: {
      id: 'revenue-bar'
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
    },
    title: {
      text: 'Monthly Revenue',
      align: 'center'
    }
  };

  // Line chart data and configuration

  lineChartSeries = [
    {
      name: 'Users',
      data: [200, 250, 210, 300, 280, 320, 350]
    }
  ];

  lineChartOptions = {
    chart: {
      toolbar: {
        show: false
      },
      id: 'user-line'
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
    },
    title: {
      text: 'Monthly Active Users',
      align: 'center'
    }
  };
}
</script>

<style scoped>
.dashboard-header {
  text-align: center;
  margin-bottom: 20px;
}

.dashboard-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.metrics {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}

.charts {
  display: flex;
  gap: 20px;
}
</style>
