<template>
  <v-simple-table fixed-header height="300px">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Title</th>
          <th class="text-left">Figure</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in stats" :key="item.name">
          <td>{{ item.title }}</td>
          <td>{{ item.figure }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
  export default {
    data () {
      return {
        stats: [
          {
            title: 'Confirmed',
            figure: 0,
          },
          {
            title: 'Recovered',
            figure: 0,
          },
          {
            title: 'Deaths',
            figure: 0,
          },
        
     
        ],
      }
    },
  }
</script>