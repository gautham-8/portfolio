<script setup>
import { projectTags } from '../data/projects';
import TagLink from './TagLink.vue';

defineProps({
    project: { type: Object, required: true },
});
</script>

<template>
    <article
        :id="project.id"
        class="grid gap-x-10 gap-y-5"
        :class="{ 'md:grid-cols-[minmax(0,1fr)_15rem]': project.image }"
    >
        <div class="max-w-3xl">
            <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 class="font-serif text-2xl leading-snug">{{ project.title }}</h3>
                <p v-if="project.when" class="label">{{ project.when }}</p>
            </div>

            <p class="mt-3">{{ project.summary }}</p>
            <p v-for="point in project.points" :key="point" class="mt-3 text-muted">{{ point }}</p>
            <p v-if="project.note" class="mt-3 text-sm text-muted">{{ project.note }}</p>

            <ul class="mt-4 flex flex-wrap gap-x-3 gap-y-1.5" aria-label="Tags">
                <li v-for="tag in projectTags(project)" :key="tag" class="font-mono text-xs text-muted">
                    <TagLink :tag="tag" />
                </li>
            </ul>

            <p v-if="project.links.length" class="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-[0.9375rem]">
                <a v-for="link in project.links" :key="link.url" :href="link.url" target="_blank" rel="noopener" class="link">
                    {{ link.label }} <span aria-hidden="true">↗</span>
                </a>
            </p>
        </div>

        <a
            v-if="project.image"
            :href="project.links[0].url"
            target="_blank"
            rel="noopener"
            class="order-first block self-start overflow-hidden rounded-sm border border-rule md:order-none"
            tabindex="-1"
            aria-hidden="true"
        >
            <img
                :src="project.image"
                alt=""
                loading="lazy"
                width="1280"
                height="800"
                class="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 hover:scale-[1.03]"
            />
        </a>
    </article>
</template>
