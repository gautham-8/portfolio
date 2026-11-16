import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { tagSlug } from '../lib/tags';

// Tag filtering shared by /projects and /skills. `items` is a list of
// { slugs: Set } objects. The selection lives in the URL (?tags=python,react)
// so a filtered view can be shared or bookmarked.
export function useTagFilter(items) {
    const route = useRoute();
    const router = useRouter();

    const selected = computed(() => {
        const raw = route.query.tags;
        return new Set(typeof raw === 'string' && raw ? raw.split(',') : []);
    });

    function matching(slugs) {
        return items.filter((item) => [...slugs].every((slug) => item.slugs.has(slug)));
    }

    const visible = computed(() => matching(selected.value));

    function isSelected(tag) {
        return selected.value.has(tagSlug(tag));
    }

    // How many items would remain if this tag were added to the selection.
    function countWith(tag) {
        return matching(new Set(selected.value).add(tagSlug(tag))).length;
    }

    function setTags(slugs) {
        router.replace({ query: slugs.size ? { tags: [...slugs].join(',') } : {} });
    }

    function toggle(tag) {
        const next = new Set(selected.value);
        const slug = tagSlug(tag);
        if (!next.delete(slug)) next.add(slug);
        setTags(next);
    }

    function clear() {
        setTags(new Set());
    }

    return { selected, visible, isSelected, countWith, toggle, clear };
}
