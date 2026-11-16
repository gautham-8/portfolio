<script setup>
import CopyMarkdown from './CopyMarkdown.vue';
</script>

<template>
    <footer class="border-t border-rule">
        <div class="mx-auto flex w-full max-w-page flex-col gap-2 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <p>Built with Vue, Vite and Tailwind CSS.</p>
            <CopyMarkdown />
        </div>
    </footer>
</template>
