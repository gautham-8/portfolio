// v-reveal: fades an element up the first time it scrolls into view.
// The CSS for .reveal is switched off under prefers-reduced-motion.
let observer;

function getObserver() {
    if (!observer) {
        observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                });
            },
            { rootMargin: '0px 0px -8% 0px' },
        );
    }
    return observer;
}

export const reveal = {
    mounted(el) {
        el.classList.add('reveal');
        getObserver().observe(el);
    },
    unmounted(el) {
        observer?.unobserve(el);
    },
};
