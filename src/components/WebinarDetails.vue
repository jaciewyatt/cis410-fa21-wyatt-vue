<template>
  <div>
    <div class="card">
      <div class="card-body">
        <h2 class="text-primary">{{ webinar.Title }}</h2>
        <br />

        <p>
          Zoom Link: <br /><strong>{{ webinar.ZoomLink }}</strong>
        </p>
        <p>
          Date: <br /><strong>{{ formattedDate }}</strong>
        </p>
        <p>
          Length (min)<br /><strong>{{ webinar.Length }}</strong>
        </p>
      </div>
    </div>
    <br />

    <router-link v-if="auth" :to="`/webinars/${this.$route.params.pk}/register`"
      ><button class="btn btn-success">Register</button>
    </router-link>

    <router-link v-else :to="`/login`"
      ><button class="btn btn-outline-success">Signin to Register</button>
    </router-link>
    <br /><br />
    <router-view />
  </div>
</template>

<script>
export default {
  computed: {
    webinar() {
      let allWebinars = this.$store.state.webinars;

      let thisWebinar = allWebinars.find((aWebinar) => {
        return aWebinar.WebinarPK == this.$route.params.pk;
      });
      return thisWebinar;
    },
    formattedDate() {
      return new Intl.DateTimeFormat("en-GB", {
        dateStyle: "full",
        timeStyle: "long",
      }).format(this.webinar.Date);
    },
    auth() {
      return this.$store.state.token;
    },
  },
};
</script>

<style></style>
