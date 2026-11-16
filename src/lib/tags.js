// Turns a tag label into the slug used in URLs: "Node.js" -> "node-js".
export function tagSlug(tag) {
    return tag
        .toLowerCase()
        .replace(/\+/g, 'p')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');
}

export function uniqueInOrder(lists) {
    return [...new Set(lists.flat())];
}
