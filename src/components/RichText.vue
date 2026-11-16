<script setup>
import { RouterLink } from 'vue-router';

// Renders a text field that is either a plain string or an array mixing
// strings with { label, project } links to an entry on /projects.
defineProps({
    text: { type: [String, Array], required: true },
});
</script>

<template>
    <template v-if="typeof text === 'string'">{{ text }}</template>
    <template v-for="(part, index) in text" v-else :key="index">
        <template v-if="typeof part === 'string'">{{ part }}</template>
        <RouterLink v-else :to="{ path: '/projects', hash: `#${part.project}` }" class="link">{{ part.label }}</RouterLink>
    </template>
</template>
