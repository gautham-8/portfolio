<script setup>
// The chip panel used on /projects and /skills. Takes the object returned by
// useTagFilter. Tags with nothing behind them (isLinked false) render as plain
// text; tags that would leave zero results are disabled.
defineProps({
    groups: { type: Array, required: true },
    filter: { type: Object, required: true },
    isLinked: { type: Function, default: () => true },
});
</script>

<template>
    <div>
        <div v-for="group in groups" :key="group.label" class="mb-4 grid gap-x-10 gap-y-2 md:grid-cols-[10rem_minmax(0,1fr)]">
            <h2 class="label pt-1.5">{{ group.label }}</h2>
            <ul class="flex flex-wrap gap-2">
                <li v-for="tag in group.tags" :key="tag">
                    <button
                        v-if="isLinked(tag)"
                        type="button"
                        class="tag"
                        :aria-pressed="filter.isSelected(tag)"
                        :disabled="!filter.isSelected(tag) && filter.countWith(tag) === 0"
                        @click="filter.toggle(tag)"
                    >
                        {{ tag }}
                    </button>
                    <span v-else class="tag-plain">{{ tag }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.tag {
    @apply rounded-full border border-rule px-3 py-1 font-mono text-xs text-ink transition-colors;
}

.tag:hover:not(:disabled):not([aria-pressed='true']) {
    @apply border-accent text-accent;
}

.tag[aria-pressed='true'] {
    @apply border-accent bg-accent text-paper;
}

.tag:disabled {
    @apply cursor-not-allowed text-muted opacity-45;
}

.tag-plain {
    @apply inline-block px-1.5 py-1 font-mono text-xs text-muted;
}
</style>
