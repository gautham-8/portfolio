<script setup>
import { ref, watch } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { useTheme } from '../composables/useTheme';
import { RESUME_URL, profile } from '../data/profile';

const { theme, toggleTheme } = useTheme();

const LINKS = [
    { label: 'Education', to: { path: '/', hash: '#education' } },
    { label: 'Experience', to: { path: '/', hash: '#experience' } },
    { label: 'Projects', to: '/projects', page: true },
    { label: 'Skills', to: '/skills', page: true },
];

// Below the md breakpoint the links collapse into a Menu panel.
const menuOpen = ref(false);
const route = useRoute();
watch(() => route.fullPath, () => (menuOpen.value = false));
</script>

<template>
    <header class="sticky top-0 z-20 border-b border-rule bg-paper/90 backdrop-blur">
        <div class="mx-auto flex h-14 w-full max-w-page items-center justify-between gap-4 px-5 sm:px-8">
            <RouterLink to="/" class="font-medium tracking-tight hover:text-accent">
                {{ profile.name }}
            </RouterLink>

            <div class="flex items-center gap-4 text-[0.9375rem] md:gap-7">
                <nav aria-label="Main" class="hidden items-center gap-7 md:flex">
                    <RouterLink
                        v-for="link in LINKS"
                        :key="link.label"
                        :to="link.to"
                        class="hover:text-accent"
                        :active-class="link.page ? 'text-accent' : ''"
                    >
                        {{ link.label }}
                    </RouterLink>
                    <a :href="RESUME_URL" target="_blank" rel="noopener" class="flex items-center gap-1.5 hover:text-accent">
                        Resume
                        <span class="kbd" title="Press R to open the resume">R</span>
                    </a>
                </nav>

                <button
                    type="button"
                    class="rounded md:-mr-1.5 p-1.5 text-muted hover:text-accent"
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

                <button
                    type="button"
                    class="-mr-1.5 rounded p-1.5 hover:text-accent md:hidden"
                    :aria-expanded="menuOpen"
                    aria-controls="mobile-menu"
                    :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
                    @click="menuOpen = !menuOpen"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" aria-hidden="true">
                        <path v-if="menuOpen" d="M6 6l12 12M18 6L6 18" />
                        <path v-else d="M4 7h16M4 12h16M4 17h16" />
                    </svg>
                </button>
            </div>
        </div>

        <nav v-if="menuOpen" id="mobile-menu" aria-label="Main" class="border-t border-rule md:hidden">
            <ul class="mx-auto w-full max-w-page px-5 py-3 font-serif text-2xl sm:px-8">
                <li v-for="link in LINKS" :key="link.label">
                    <RouterLink :to="link.to" class="block py-2 hover:text-accent" @click="menuOpen = false">
                        {{ link.label }}
                    </RouterLink>
                </li>
                <li>
                    <a :href="RESUME_URL" target="_blank" rel="noopener" class="block py-2 hover:text-accent" @click="menuOpen = false">
                        Resume <span aria-hidden="true">↗</span>
                    </a>
                </li>
            </ul>
        </nav>
    </header>
</template>
