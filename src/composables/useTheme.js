import { ref } from 'vue';

const STORAGE_KEY = 'theme';
const systemDark = window.matchMedia('(prefers-color-scheme: dark)');

function storedChoice() {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored === 'light' || stored === 'dark' ? stored : null;
    } catch {
        return null;
    }
}

// The visitor's system setting wins until they pick a theme themselves.
const theme = ref(storedChoice() ?? (systemDark.matches ? 'dark' : 'light'));

function apply(value) {
    document.documentElement.dataset.theme = value;
}

apply(theme.value);

systemDark.addEventListener('change', (event) => {
    if (storedChoice()) return;
    theme.value = event.matches ? 'dark' : 'light';
    apply(theme.value);
});

function toggleTheme() {
    theme.value = theme.value === 'dark' ? 'light' : 'dark';
    apply(theme.value);
    try {
        localStorage.setItem(STORAGE_KEY, theme.value);
    } catch {
        // Private mode: the choice just lasts for this visit.
    }
}

export function useTheme() {
    return { theme, toggleTheme };
}
