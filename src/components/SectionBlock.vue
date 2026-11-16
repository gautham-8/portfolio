<script setup>
defineProps({
    id: { type: String, required: true },
    title: { type: String, required: true },
});
</script>

<template>
    <section
        :id="id"
        v-reveal
        :aria-labelledby="`${id}-title`"
        class="grid gap-x-10 gap-y-6 border-t border-rule py-12 md:grid-cols-[10rem_minmax(0,1fr)] md:py-16"
    >
        <h2 :id="`${id}-title`" class="label self-start md:sticky md:top-20 md:pt-1.5">
            {{ title }}
        </h2>
        <div>
            <slot />
        </div>
    </section>
</template>
