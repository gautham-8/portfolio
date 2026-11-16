<script setup>
import { RouterLink } from 'vue-router';
import { useTheme } from '../composables/useTheme';
import { RESUME_URL, profile } from '../data/profile';

const { theme, toggleTheme } = useTheme();
</script>

<template>
    <header class="sticky top-0 z-20 border-b border-rule bg-paper/90 backdrop-blur">
        <div class="mx-auto flex h-14 w-full max-w-page items-center justify-between gap-4 px-5 sm:px-8">
            <RouterLink to="/" class="font-medium tracking-tight hover:text-accent">
                {{ profile.name }}
            </RouterLink>

            <nav aria-label="Main" class="flex items-center gap-5 text-[0.9375rem] sm:gap-7">
                <RouterLink :to="{ path: '/', hash: '#education' }" class="hidden hover:text-accent md:inline">
                    Education
                </RouterLink>
                <RouterLink :to="{ path: '/', hash: '#experience' }" class="hidden hover:text-accent md:inline">
                    Experience
                </RouterLink>
                <RouterLink to="/projects" class="hover:text-accent" active-class="text-accent">
                    Projects
                </RouterLink>
                <RouterLink to="/skills" class="hover:text-accent" active-class="text-accent">
                    Skills
                </RouterLink>
                <a :href="RESUME_URL" target="_blank" rel="noopener" class="hidden items-center gap-1.5 hover:text-accent sm:flex">
                    Resume
                    <span class="kbd hidden md:inline-flex" title="Press R to open the resume">R</span>
                </a>
                <button
                    type="button"
                    class="-mr-1.5 rounded p-1.5 text-muted hover:text-accent"
                    :aria-label="theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'"
                    @click="toggleTheme"
                >
                    <svg v-if="theme === 'dark'" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" aria-hidden="true">
                        <circle cx="12" cy="12" r="4" />
                        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M6.3 17.7l-1.4 1.4M19.1 4.9l-1.4 1.4" />
                    </svg>
                    <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z" />
                    </svg>
                </button>
            </nav>
        </div>
    </header>
</template>
