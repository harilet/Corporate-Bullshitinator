<script setup lang="ts">
import { reactive } from 'vue'
import { getQuote } from './assets/scripts/get-quotes'

let quote = reactive({
  quote: ''
})

function getQuotesData() {
  quote.quote = '------------------'
  getQuote().then((data) => {
    quote.quote = data
  })
}

getQuotesData()
</script>

<template>
  <div class="main">
    <div class="center-main">
      <div>
        {{ quote.quote }}
      </div>

      <div @click="getQuotesData()" class="button-sty">Update</div>
    </div>
  </div>
  <div class="foot-note">
    <div>
      Text API:
      <a style="color: #ffff4d" href="https://github.com/sameerkumar18/corporate-bs-generator-api">
        github
      </a>
    </div>
  </div>
</template>

<style>
.main {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  background-color: #252e42;
  color: #e5e6e9;
}

.center-main {
  font-size: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  border-radius: 20px;
  background-color: #2f3b52;
}

.button-sty {
  cursor: pointer;
  margin-top: 2rem;
  padding: 1rem;
  color: #252e42;
  background-color: #ffff4d;
  display: flex;
  align-items: center;
  justify-items: center;
}

.foot-note {
  color: #e5e6e9;
  background-color: #2f3b52;
  border-radius: 5px;
  padding: 5px;
  position: fixed;
  bottom: 0;
  right: 0;
}
</style>
