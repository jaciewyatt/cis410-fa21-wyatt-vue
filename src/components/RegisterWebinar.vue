<template>
  <div>
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <div class="card">
          <div class="card-body">
            <h4>Create a Review</h4>
            <form id="review-form" @submit.prevent="submitRegister">
              <div class="mb-3">
                <label for="nameFirst-input" class="form-label"
                  >First Name</label
                ><input
                  type="number"
                  class="form-control"
                  id="nameFirst-input"
                  required=""
                  min="1"
                  max="10"
                  v-model="nameFirst"
                />
              </div>

              <div class="mb-3">
                <label for="nameLast-input" class="form-label">Last Name</label
                ><input
                  type="number"
                  class="form-control"
                  id="nameLast-input"
                  required=""
                  min="1"
                  max="10"
                  v-model="nameLast"
                />
              </div>

              <div class="mb-3">
                <label for="email-input" class="form-label">Email</label
                ><input
                  type="text"
                  row="3"
                  class="form-control"
                  id="email-input"
                  required=""
                  v-model="email"
                />
              </div>

              <button type="submit" class="btn btn-primary">
                Submit Review</button
              ><button
                v-on:click="cancelRegister"
                type="clear"
                class="btn btn-outline-danger"
              >
                Cancel
              </button>
              <p v-if="errorMessage" class="form-text text-danger">
                {{ errorMessage }}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      nameFirst: null,
      nameLast: null,
      email: "",
      errorMessage: null,
    };
  },
  methods: {
    submitRegister() {
      let myRegister = {
        nameFirst: this.nameFirst,
        nameLast: this.nameLast,
        email: this.email,
        webinarFK: this.$route.params.pk,
      };

      axios
        .post("/register", myRegister, {
          headers: { Authorization: `Bearer ${this.$store.state.token}` },
        })
        .then(() => {
          this.$router.replace("/account");
        })
        .catch(() => {
          this.errorMessage =
            "Unable to create a review, please try again later";
        });
    },
    cancelRegister() {
      this.$router.go(-1);
    },
  },
};
</script>

<style>
button {
  margin-right: 5px;
}
</style>
