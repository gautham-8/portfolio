<script setup>
import { RouterLink } from 'vue-router';
import { isLinked } from '../lib/catalog';
import { tagSlug } from '../lib/tags';

// A skill or area name. Links to /skills filtered by that tag when there is
// work behind it; otherwise it is plain text.
defineProps({
    tag: { type: String, required: true },
});
</script>

<template>
    <RouterLink
        v-if="isLinked(tag)"
        :to="{ path: '/skills', query: { tags: tagSlug(tag) } }"
        class="tag-link"
        :title="`See where I have used ${tag}`"
    >{{ tag }}</RouterLink>
    <span v-else>{{ tag }}</span>
</template>

<style scoped>
.tag-link {
    text-decoration: underline dotted;
    text-decoration-color: var(--rule);
    text-underline-offset: 0.25em;
    transition: color 0.15s ease;
}

.tag-link:hover {
    color: var(--accent);
    text-decoration-color: var(--accent);
}
</style>
