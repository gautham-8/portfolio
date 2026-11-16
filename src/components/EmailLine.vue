<script setup>
import { ref } from 'vue';
import { emailAddress, emailDisplay } from '../data/profile';

// Shows the address in "[at] / [dot]" form; clicking copies the real one.
const props = defineProps({
    email: { type: Object, required: true },
});

const copied = ref(false);

async function copy() {
    await navigator.clipboard.writeText(emailAddress(props.email));
    copied.value = true;
    setTimeout(() => (copied.value = false), 1800);
}
</script>

<template>
    <button type="button" class="group inline-flex flex-wrap items-baseline gap-x-3 text-left" title="Copy address" @click="copy">
        <span class="link">{{ emailDisplay(email) }}</span>
        <span class="label normal-case tracking-normal" aria-live="polite">{{ copied ? 'Copied' : 'Click to copy' }}</span>
    </button>
</template>
