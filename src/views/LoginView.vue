<script lang="ts">
import { DataStore } from "@aws-amplify/datastore";
import { UserProfile } from "../models";

export default {
  data() {
    return {
      loading: false,
      username: "",
    };
  },
  methods: {
    DoLogin() {
      (async () => {
        try {
          await DataStore.save(
            new UserProfile({
              first_name: this.username,
              last_name: "TRU"
            })
          );

          const models = await DataStore.query(UserProfile);
          console.log(models);
        } catch (ex) {
          console.log(ex);
        }
      })();
    },
  },
};
</script>

<template>
  <form>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        x-model="username"
      />
      <div id="emailHelp" class="form-text">
        We'll never share your email with anyone else.
      </div>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" />
    </div>
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1" />
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="button" @click="DoLogin" class="btn btn-primary">
      Login
    </button>
  </form>
</template>
