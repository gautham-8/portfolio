<script setup>
import { onBeforeUnmount, onMounted } from 'vue'
import { RouterView } from 'vue-router'
import InkTrail from './components/InkTrail.vue'
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
import { RESUME_URL } from './data/profile'

// Pressing R anywhere opens the resume, unless the visitor is typing.
function onKeyup(event) {
  if (event.metaKey || event.ctrlKey || event.altKey) return
  if (event.target.closest?.('input, textarea, select, [contenteditable]')) return
  if (event.key.toLowerCase() === 'r') {
    window.open(RESUME_URL, '_blank', 'noopener')
  }
}

onMounted(() => window.addEventListener('keyup', onKeyup))
onBeforeUnmount(() => window.removeEventListener('keyup', onKeyup))
</script>

<template>
  <InkTrail />
  <div class="relative z-10 flex min-h-screen flex-col">
    <SiteHeader />
    <main class="mx-auto w-full max-w-page flex-1 px-5 sm:px-8">
      <RouterView />
    </main>
    <SiteFooter />
  </div>
</template>
