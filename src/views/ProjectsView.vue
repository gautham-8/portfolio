<script setup>
import { RouterLink } from 'vue-router';
import ProjectRow from '../components/ProjectRow.vue';
import TagFilter from '../components/TagFilter.vue';
import { useTagFilter } from '../composables/useTagFilter';
import { projectTags, projects, tagGroups } from '../data/projects';
import { tagSlug } from '../lib/tags';

const items = projects.map((project) => ({
    project,
    slugs: new Set(projectTags(project).map(tagSlug)),
}));

const filter = useTagFilter(items);
</script>

<template>
    <section class="pb-10 pt-16 md:pt-24" aria-labelledby="projects-title">
        <h1 id="projects-title" class="font-serif text-[clamp(2.5rem,7vw,4.25rem)] leading-[1.05] tracking-[-0.02em]">
            Projects
        </h1>
        <p class="mt-5 max-w-2xl text-muted">
            Everything I have built outside of my job: research, hackathons and club work.
            Pick tags to narrow the list. Selecting more than one shows projects that match all of them.
            To see my work experience by skill as well, use the
            <RouterLink to="/skills" class="link text-ink">skills page</RouterLink>.
        </p>
    </section>

    <section class="border-t border-rule py-8" aria-label="Filter projects by tag">
        <TagFilter :groups="tagGroups" :filter="filter" />
        <p class="mt-6 flex flex-wrap items-baseline gap-x-4 text-[0.9375rem] text-muted" aria-live="polite">
            <span>Showing {{ filter.visible.value.length }} of {{ projects.length }}</span>
            <button v-if="filter.selected.value.size" type="button" class="link text-ink" @click="filter.clear">
                Clear filters
            </button>
        </p>
    </section>

    <section class="pb-20" aria-label="Project list">
        <div v-for="item in filter.visible.value" :key="item.project.id" class="border-t border-rule py-10">
            <ProjectRow :project="item.project" />
        </div>
        <p v-if="!filter.visible.value.length" class="border-t border-rule py-10 text-muted">
            No projects match those tags.
        </p>
    </section>
</template>
