<template>
  <li class="nav-item my-auto ms-lg-20" v-if="!isLogin">
    <router-link class="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill"
      to="/sign-in" role="button">
      Sign In
    </router-link>
  </li>

  <li class="nav-item my-auto dropdown d-flex" v-if="isLogin">
    <div class="vertical-line d-lg-block d-none"> </div>
    <div>
      <a class="dropdown-toggle ms-lg-40" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="/src/assets/img/avatar-1.png" width="40" height="40" class="rounded-circle" alt="" />
      </a>

      <ul class="dropdown-menu border-0" aria-labelledby="dropdownMenuLink">
        <li>
          <router-link to="/member" class="dropdown-item text-lg color-palette-2">
            My Profile
          </router-link>
        </li>
        <li>
          <router-link to="/wallet" class="dropdown-item text-lg color-palette-2">
            Wallet
          </router-link>
        </li>
        <li>
          <router-link to="/member/edit-profile" class="dropdown-item text-lg color-palette-2">
            Account Settings
          </router-link>
        </li>
        <li>
          <router-link to="/sign-in" class="dropdown-item text-lg color-palette-2">
            Log Out
          </router-link>
        </li>
      </ul>
    </div>
  </li>
</template>

<script>
  export default {
    props: {
      isLogin: {
        type: Boolean,
      }
    }
  }
</script>