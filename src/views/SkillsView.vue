<script setup>
import { computed } from 'vue';
import ProjectRow from '../components/ProjectRow.vue';
import TagFilter from '../components/TagFilter.vue';
import { useTagFilter } from '../composables/useTagFilter';
import { catalog, isLinked, skillTagGroups } from '../lib/catalog';

const filter = useTagFilter(catalog);

const hasSelection = computed(() => filter.selected.value.size > 0);

function ofKind(kind) {
    return filter.visible.value.filter((item) => item.kind === kind).map((item) => item.data);
}

const roles = computed(() => ofKind('role'));
const projects = computed(() => ofKind('project'));
const certifications = computed(() => ofKind('certification'));
const schools = computed(() => ofKind('education'));
</script>

<template>
    <section class="pb-10 pt-16 md:pt-24" aria-labelledby="skills-title">
        <h1 id="skills-title" class="font-serif text-[clamp(2.5rem,7vw,4.25rem)] leading-[1.05] tracking-[-0.02em]">
            Skills
        </h1>
        <p class="mt-5 max-w-2xl text-muted">
            Pick a skill to see where I have used it: jobs, projects, certifications and coursework.
            Selecting more than one shows work that used all of them. Skills shown without an outline
            are ones I know but have not tied to a specific entry on this site.
        </p>
    </section>

    <section class="border-t border-rule py-8" aria-label="Filter by skill">
        <TagFilter :groups="skillTagGroups" :filter="filter" :is-linked="isLinked" />
        <p v-if="hasSelection" class="mt-6 flex flex-wrap items-baseline gap-x-4 text-[0.9375rem] text-muted" aria-live="polite">
            <span>{{ filter.visible.value.length }} {{ filter.visible.value.length === 1 ? 'match' : 'matches' }}</span>
            <button type="button" class="link text-ink" @click="filter.clear">Clear filters</button>
        </p>
    </section>

    <div v-if="hasSelection" class="pb-20">
        <section v-if="roles.length" class="result-group" aria-labelledby="skills-experience">
            <h2 id="skills-experience" class="label self-start md:pt-1.5">Experience</h2>
            <div class="space-y-10">
                <article v-for="role in roles" :key="role.id">
                    <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                        <h3 class="font-serif text-2xl leading-snug">
                            {{ role.title }}, {{ role.job.company }}
                        </h3>
                        <p class="label">{{ role.start }} – {{ role.end }}</p>
                    </div>
                    <ul class="mt-3 max-w-3xl list-disc space-y-2.5 pl-5 marker:text-rule">
                        <li v-for="point in role.points" :key="point">{{ point }}</li>
                    </ul>
                </article>
            </div>
        </section>

        <section v-if="projects.length" class="result-group" aria-labelledby="skills-projects">
            <h2 id="skills-projects" class="label self-start md:pt-1.5">Projects</h2>
            <div class="space-y-12">
                <ProjectRow v-for="project in projects" :key="project.id" :project="project" />
            </div>
        </section>

        <section v-if="certifications.length" class="result-group" aria-labelledby="skills-certifications">
            <h2 id="skills-certifications" class="label self-start md:pt-1.5">Certifications</h2>
            <ul class="max-w-3xl space-y-2">
                <li v-for="cert in certifications" :key="cert.id" class="flex flex-wrap items-baseline justify-between gap-x-4">
                    <span>
                        <a :href="cert.url" target="_blank" rel="noopener" class="link">{{ cert.title }}</a><span class="text-muted">, {{ cert.issuer }}</span>
                    </span>
                    <span class="label">{{ cert.date }}</span>
                </li>
            </ul>
        </section>

        <section v-if="schools.length" class="result-group" aria-labelledby="skills-education">
            <h2 id="skills-education" class="label self-start md:pt-1.5">Coursework</h2>
            <ul class="max-w-3xl space-y-4">
                <li v-for="school in schools" :key="school.id">
                    <p>{{ school.degree }}, {{ school.school }}</p>
                    <p class="text-[0.9375rem] text-muted">
                        {{ school.details.find((detail) => detail.label === 'Coursework')?.text }}
                    </p>
                </li>
            </ul>
        </section>

        <p v-if="!filter.visible.value.length" class="border-t border-rule py-10 text-muted">
            Nothing on this site uses all of those together.
        </p>
    </div>
    <p v-else class="border-t border-rule pb-24 pt-10 text-muted">
        Nothing selected yet. Choose a skill above.
    </p>
</template>

<style scoped>
.result-group {
    @apply grid gap-x-10 gap-y-6 border-t border-rule py-10 md:grid-cols-[10rem_minmax(0,1fr)];
}
</style>
