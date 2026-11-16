<script setup>
import { ref } from 'vue';
import { siteAsMarkdown } from '../lib/markdown';

// Copies the whole site as Markdown, handy for pasting into notes or an LLM.
const copied = ref(false);

async function copy() {
    await navigator.clipboard.writeText(siteAsMarkdown());
    copied.value = true;
    setTimeout(() => (copied.value = false), 1800);
}

function view() {
    const blob = new Blob([siteAsMarkdown()], { type: 'text/plain;charset=utf-8' });
    window.open(URL.createObjectURL(blob), '_blank', 'noopener');
}
</script>

<template>
    <span class="inline-flex items-center gap-2">
        <button type="button" class="link" @click="copy">
            <span aria-live="polite">{{ copied ? 'Copied to clipboard' : 'Copy this site as Markdown' }}</span>
        </button>
        <span class="text-muted" aria-hidden="true">/</span>
        <button type="button" class="link" @click="view">view</button>
    </span>
</template>
