<template>
  <table class="CSSProperties">
    <thead>
      <tr>
        <th scope="col">CSS className</th>
        <th scope="col">Properties</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in data">
        <td>{{ item.className }}</td>
        <td>{{ item.value }}</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  props: {
    data: Array
  }
}
</script>


<style lang="scss">
  table.CSSProperties {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    th {
      text-align: left;
      padding: 8px;
    }
    td {
      padding: 8px;
    }
  }
</style>