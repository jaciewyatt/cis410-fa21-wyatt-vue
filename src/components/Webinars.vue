<template>
  <div>
    <h1>Webinars</h1>
    <hr />
    <table class="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Date</th>
          <th>Length</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="aWebinar in theWebinars" :key="aWebinar.WebinarPK">
          <th>{{ aWebinar.Title }}</th>
          <th>{{ aWebinar.Date }}</th>
          <th>{{ aWebinar.Length }}</th>
          <th>
            <router-link :to="`/webianrs/${aWebinar.WebinarPK}`"
              ><button class="btn btn=primary">Details</button></router-link
            >
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  computed: {
    theWebinars() {
      return this.webinars.state.webinars;
    },
  },
};
</script>

<style></style>
