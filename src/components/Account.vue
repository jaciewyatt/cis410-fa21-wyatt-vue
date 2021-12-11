<template>
  <div>
    <h1>Account</h1>
    <hr />
    <h3>{{ firstName }}'s Webinars</h3>

    <p v-if="accountError" class="text-danger">
      Cannot get your account information. Please try again later.
    </p>

    <table v-if="webinarsByUser" class="table">
      <thead>
        <th>Title</th>
        <th>Date</th>
        <th>Length</th>
      </thead>
      <tbody>
        <tr v-for="thisWebinar in webinarsByUser" :key="thisWebinar.WebinarPK">
          <th>
            <router-link :to="`/webinars/${thisWebinar.WebinarFK}`">{{
              thisWebinar.Title
            }}</router-link>
          </th>
          <th>{{ thisWebinar.Date }}</th>
          <th>{{ thisWebinar.Length }}</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      webinarsByUser: null,
      accountError: false,
    };
  },
  computed: {
    firstName() {
      console.log("here is the store so far", this.$store.state);
      return this.$store.state.user.NameFirst;
    },
  },
  created() {
    axios
      .get("/webinars/me", {
        headers: {
          Authorization: `Bearer ${this.$store.state.token}`,
        },
      })
      .then((theResponse) => {
        console.log("here is the response", theResponse);
        this.webinarsByUser = theResponse.data;
      })
      .catch(() => {
        this.accountError = true;
      });
  },
};
</script>

<style></style>
