<template>
  <section id="feature" class="feature pt-50 pb-50">
    <div class="container-fluid">
      <h2 class="text-4xl fw-bold color-palette-1 text-center mb-30">It’s Really That<br> Easy to Win the Game
      </h2>
      <div class="row gap-lg-0 gap-4" data-aos="fade-up">
        <div v-for="(item, key) in collection" class="col-lg-4" :key="key">
          <div class="card feature-card border-0">
            <img :src="item.image" width="80" height="80"  class="mb-30" />
            <p class="fw-semibold text-2xl mb-2 color-palette-1">{{ item.title }}</p>
            <p class="text-lg color-palette-1 mb-0" v-html="item.description"></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        collection: [
          {
            image: `/src/assets/icon/ic-step-1.svg`,
            title: `1. Start`,
            description: `Pilih salah satu game<br />yang ingin kamu top up`
          },
          {
            image: `/src/assets/icon/ic-step-2.svg`,
            title: `2. Fill Up`,
            description: `Top up sesuai dengan<br />nominal yang sudah tersedia`
          },
          {
            image: `/src/assets/icon/ic-step-3.svg`,
            title: `3. Be a Winner`,
            description: `Siap digunakan untuk<br />improve permainan kamu`
          }
        ]
      }
    }
  }
</script>