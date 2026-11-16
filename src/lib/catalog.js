import { certifications, education, experience, skills } from '../data/profile';
import { projectTags, projects } from '../data/projects';
import { tagSlug, uniqueInOrder } from './tags';

// Everything on the site that can back up a skill, in one flat list.
// /skills filters this list; a skill is only clickable if something here has it.
function entry(kind, id, tags, data) {
    return { kind, id, data, slugs: new Set(tags.map(tagSlug)) };
}

const roles = experience.flatMap((job) =>
    job.roles.map((role) => entry('role', role.id, [...role.areas, ...role.skills], { ...role, job })),
);

export const catalog = [
    ...roles,
    ...projects.map((project) => entry('project', project.id, projectTags(project), project)),
    ...certifications.map((cert) => entry('certification', cert.id, cert.skills, cert)),
    ...education.map((school) => entry('education', school.id, school.skills, school)),
];

const linkedSlugs = new Set(catalog.flatMap((item) => [...item.slugs]));

export function isLinked(tag) {
    return linkedSlugs.has(tagSlug(tag));
}

const areas = uniqueInOrder([
    ...experience.flatMap((job) => job.roles.map((role) => role.areas)),
    ...projects.map((project) => project.areas),
]);

export const skillTagGroups = [
    { label: 'Area', tags: areas },
    ...skills.map((group) => ({ label: group.group, tags: group.items })),
];
