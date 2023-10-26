<template>
  <section>
    <nav class="navbar navbar-expand-lg navbar-light bg-light bg-white pt-lg-40 pb-lg-40 pt-30 pb-50">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="/src/assets/logo.svg" alt="logo" />
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto text-lg gap-lg-0 gap-2">

            <Menu to="/" title="Home" :namePath="['/']" />
            <Menu to="/games" title="Games" :namePath="['games']" />
            <Menu to="/rewards" title="Rewards" :namePath="['rewards']" />
            <Menu to="/discover" title="Discover" :namePath="['discover']" />
            <Menu to="/global-rank" title="Global Rank" :namePath="['global-rank']" />
            
            <AuthNavbar isLogin />
          </ul>
        </div>
      </div>
    </nav>
  </section>
</template>

<script setup>
  import Menu from '@/components/Micro/MenuNavbar.vue'
  import AuthNavbar from '@/components/Micro/AuthNavbar.vue'
</script>