<script setup>
import { RouterLink } from 'vue-router';
import EmailLine from '../components/EmailLine.vue';
import ProjectRow from '../components/ProjectRow.vue';
import RichText from '../components/RichText.vue';
import SectionBlock from '../components/SectionBlock.vue';
import TagLink from '../components/TagLink.vue';
import {
    RESUME_URL,
    awards,
    certifications,
    education,
    experience,
    profile,
    publications,
    skills,
} from '../data/profile';
import { featuredProjects, projects } from '../data/projects';
</script>

<template>
    <section class="pb-14 pt-16 md:pb-20 md:pt-24" aria-labelledby="intro-title">
        <h1 id="intro-title" class="font-serif text-[clamp(2.75rem,8vw,5.25rem)] leading-[1.02] tracking-[-0.02em]">
            {{ profile.name }}
        </h1>
        <p class="mt-6 max-w-3xl font-serif text-[clamp(1.375rem,3vw,1.875rem)] leading-snug text-muted">
            {{ profile.headline }}
        </p>

        <p class="mt-10 flex max-w-2xl items-baseline gap-3">
            <span class="relative top-[-0.1em] h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden="true" />
            <span>
                {{ profile.availability }}
                <span class="mt-2 block text-[0.9375rem] text-muted">
                    Based in {{ profile.location }}, and open to relocating. {{ profile.work_authorization }}
                </span>
            </span>
        </p>

        <p class="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
            <a :href="RESUME_URL" target="_blank" rel="noopener" class="inline-flex items-center gap-2">
                <span class="link">Resume <span aria-hidden="true">↗</span></span>
                <span class="kbd hidden md:inline-flex" title="Press R to open the resume">R</span>
            </a>
            <a v-for="link in profile.links" :key="link.url" :href="link.url" target="_blank" rel="noopener" class="link">
                {{ link.label }} <span aria-hidden="true">↗</span>
            </a>
            <RouterLink :to="{ hash: '#contact' }" class="link">Email</RouterLink>
        </p>
    </section>

    <SectionBlock id="about" title="About">
        <div class="max-w-2xl space-y-5">
            <p v-for="paragraph in profile.about" :key="paragraph">{{ paragraph }}</p>
        </div>
    </SectionBlock>

    <SectionBlock id="education" title="Education">
        <div class="space-y-10">
            <div v-for="entry in education" :key="entry.school">
                <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 class="font-serif text-2xl leading-snug">
                        <a :href="entry.school_url" target="_blank" rel="noopener" class="link">{{ entry.school }}</a>
                    </h3>
                    <p class="label">
                        {{ entry.start }} – {{ entry.end }}<template v-if="entry.end_note"> ({{ entry.end_note }})</template>
                    </p>
                </div>
                <p class="mt-1">{{ entry.degree }}</p>
                <p v-if="entry.note" class="text-muted">{{ entry.note }}</p>
                <dl class="mt-4 max-w-3xl space-y-2 text-[0.9375rem]">
                    <div v-for="detail in entry.details" :key="detail.label" class="grid gap-x-4 sm:grid-cols-[6.5rem_minmax(0,1fr)]">
                        <dt class="label pt-1">{{ detail.label }}</dt>
                        <dd><RichText :text="detail.text" /></dd>
                    </div>
                </dl>
            </div>
        </div>
    </SectionBlock>

    <SectionBlock id="experience" title="Experience">
        <div v-for="job in experience" :key="job.company">
            <p class="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <a :href="job.company_url" target="_blank" rel="noopener" class="link font-serif text-2xl">{{ job.company }}</a>
                <span class="text-muted">{{ job.company_note }} · {{ job.location }}</span>
            </p>

            <div v-for="role in job.roles" :key="role.title" class="mt-8">
                <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 class="text-lg font-medium">{{ role.title }}</h3>
                    <p class="label">{{ role.start }} – {{ role.end }}</p>
                </div>
                <ul class="mt-3 max-w-3xl list-disc space-y-2.5 pl-5 marker:text-rule">
                    <li v-for="point in role.points" :key="point">{{ point }}</li>
                </ul>
                <ul class="mt-4 flex flex-wrap gap-x-3 gap-y-1.5 font-mono text-xs text-muted" aria-label="Skills used">
                    <li v-for="skill in role.skills" :key="skill"><TagLink :tag="skill" /></li>
                </ul>
            </div>
        </div>
    </SectionBlock>

    <SectionBlock id="projects" title="Projects">
        <div class="space-y-12">
            <ProjectRow v-for="project in featuredProjects" :key="project.id" :project="project" />
        </div>
        <p class="mt-12">
            <RouterLink to="/projects" class="link font-serif text-xl">
                All {{ projects.length }} projects, filterable by tag <span aria-hidden="true">→</span>
            </RouterLink>
        </p>
    </SectionBlock>

    <SectionBlock id="publications" title="Publications">
        <ul class="max-w-3xl space-y-7">
            <li v-for="paper in publications" :key="paper.url">
                <a :href="paper.url" target="_blank" rel="noopener" class="link font-serif text-xl leading-snug">{{ paper.title }}</a>
                <p class="mt-1.5 text-[0.9375rem] text-muted">{{ paper.venue }}, {{ paper.date }}</p>
            </li>
        </ul>
    </SectionBlock>

    <SectionBlock id="awards" title="Awards">
        <ul class="max-w-3xl space-y-6">
            <li v-for="award in awards" :key="award.title">
                <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 class="font-medium">{{ award.title }}</h3>
                    <p class="label">{{ award.date }}</p>
                </div>
                <p class="text-[0.9375rem] text-muted">{{ award.issuer }}</p>
                <p class="mt-1 text-[0.9375rem]"><RichText :text="award.text" /></p>
            </li>
        </ul>
    </SectionBlock>

    <SectionBlock id="certifications" title="Certifications">
        <ul class="max-w-3xl space-y-3">
            <li v-for="cert in certifications" :key="cert.id" class="flex flex-wrap items-baseline justify-between gap-x-4">
                <span>
                    <a :href="cert.url" target="_blank" rel="noopener" class="link">{{ cert.title }}</a><span class="text-muted">, {{ cert.issuer }}</span>
                </span>
                <span class="label">{{ cert.date }}</span>
            </li>
        </ul>
    </SectionBlock>

    <SectionBlock id="skills" title="Skills">
        <dl class="max-w-3xl space-y-3">
            <div v-for="group in skills" :key="group.group" class="grid gap-x-6 sm:grid-cols-[11rem_minmax(0,1fr)]">
                <dt class="font-medium">{{ group.group }}</dt>
                <dd class="text-muted [&_a]:text-ink">
                    <template v-for="(item, index) in group.items" :key="item">
                        <TagLink :tag="item" /><template v-if="index < group.items.length - 1">, </template>
                    </template>
                </dd>
            </div>
        </dl>
        <p class="mt-8 text-[0.9375rem] text-muted">
            Underlined skills link to the work that used them. The
            <RouterLink to="/skills" class="link text-ink">skills page</RouterLink> lets you combine several.
        </p>
    </SectionBlock>

    <SectionBlock id="contact" title="Contact">
        <p class="max-w-2xl font-serif text-2xl leading-snug">
            {{ profile.contact_line }}
        </p>
        <ul class="mt-6 space-y-2">
            <li v-for="email in profile.emails" :key="email.user">
                <EmailLine :email="email" />
            </li>
        </ul>
        <p class="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
            <a v-for="link in profile.links" :key="link.url" :href="link.url" target="_blank" rel="noopener" class="link">
                {{ link.label }} <span aria-hidden="true">↗</span>
            </a>
            <a :href="RESUME_URL" target="_blank" rel="noopener" class="link">Resume <span aria-hidden="true">↗</span></a>
        </p>
    </SectionBlock>
</template>
