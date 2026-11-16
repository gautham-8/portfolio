<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { useTheme } from '../composables/useTheme';

// A thin pen stroke that follows the cursor and dries out in under half a
// second. Only runs for mouse users who have not asked for reduced motion.
const LIFETIME_MS = 420;
const MAX_WIDTH = 2.4;

const canvas = ref(null);
const { theme } = useTheme();

let ctx;
let color = '';
let points = [];
let frame = 0;
let enabled = false;

function readColor() {
    color = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();
}

function resize() {
    const ratio = window.devicePixelRatio || 1;
    canvas.value.width = window.innerWidth * ratio;
    canvas.value.height = window.innerHeight * ratio;
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
}

function draw(now) {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    points = points.filter((point) => now - point.t < LIFETIME_MS);

    ctx.strokeStyle = color;
    ctx.lineCap = 'round';
    for (let i = 1; i < points.length; i++) {
        if (points[i].start) continue;
        const life = 1 - (now - points[i].t) / LIFETIME_MS;
        ctx.globalAlpha = life * 0.55;
        ctx.lineWidth = Math.max(0.4, life * MAX_WIDTH);
        ctx.beginPath();
        ctx.moveTo(points[i - 1].x, points[i - 1].y);
        ctx.lineTo(points[i].x, points[i].y);
        ctx.stroke();
    }

    // Stop the loop once the stroke has fully faded; the next move restarts it.
    frame = points.length ? requestAnimationFrame(draw) : 0;
}

function onMove(event) {
    const now = performance.now();
    const last = points[points.length - 1];
    // A long pause or a jump (cursor re-entering the window) starts a new
    // stroke instead of drawing a straight line across the page.
    const start =
        !last || now - last.t > 90 || Math.hypot(event.clientX - last.x, event.clientY - last.y) > 160;
    points.push({ x: event.clientX, y: event.clientY, t: now, start });
    if (!frame) frame = requestAnimationFrame(draw);
}

onMounted(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!finePointer || reducedMotion) return;

    enabled = true;
    ctx = canvas.value.getContext('2d');
    readColor();
    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMove, { passive: true });
});

onBeforeUnmount(() => {
    if (!enabled) return;
    cancelAnimationFrame(frame);
    window.removeEventListener('resize', resize);
    window.removeEventListener('mousemove', onMove);
});

watch(theme, () => enabled && readColor(), { flush: 'post' });
</script>

<template>
    <canvas ref="canvas" aria-hidden="true" class="pointer-events-none fixed inset-0 z-0 h-full w-full" />
</template>
