import {
    RESUME_URL,
    awards,
    certifications,
    education,
    emailDisplay,
    experience,
    plainText,
    profile,
    publications,
    skills,
} from '../data/profile';
import { projects } from '../data/projects';

// Builds a plain Markdown version of the whole site from the same data the
// pages render, so the export cannot drift from what is on screen.
export function siteAsMarkdown() {
    const out = [];
    const push = (...lines) => out.push(...lines);

    push(`# ${profile.name}`, '', profile.headline, '', profile.availability, '', `Based in ${profile.location}, and open to relocating. ${profile.work_authorization}`, '');
    push(
        [
            ...profile.links.map((link) => `[${link.label}](${link.url})`),
            `[Resume](${RESUME_URL})`,
        ].join(' | '),
        '',
        `Email: ${profile.emails.map(emailDisplay).join(', ')}`,
        '',
    );

    push('## About', '');
    profile.about.forEach((paragraph) => push(paragraph, ''));

    push('## Education', '');
    education.forEach((entry) => {
        push(`### ${entry.degree}`);
        push(`${entry.school} | ${entry.start} to ${entry.end}${entry.end_note ? ` (${entry.end_note})` : ''}`);
        if (entry.note) push(entry.note);
        push('');
        entry.details.forEach((detail) => push(`- ${detail.label}: ${plainText(detail.text)}`));
        push('');
    });

    push('## Experience', '');
    experience.forEach((job) => {
        job.roles.forEach((role) => {
            push(`### ${role.title}, ${job.company} (${job.company_note})`);
            push(`${role.start} to ${role.end} | ${job.location}`, '');
            role.points.forEach((point) => push(`- ${point}`));
            push('', `Skills: ${role.skills.join(', ')}`, '');
        });
    });

    push('## Projects', '');
    projects.forEach((project) => {
        push(`### ${project.title}${project.when ? ` (${project.when})` : ''}`, '', project.summary, '');
        project.points.forEach((point) => push(point, ''));
        if (project.note) push(project.note, '');
        push(`Tech stack: ${project.stack.join(', ')}`);
        if (project.links.length) {
            push(`Links: ${project.links.map((link) => `[${link.label}](${link.url})`).join(', ')}`);
        }
        push('');
    });

    push('## Publications', '');
    publications.forEach((paper) => push(`- [${paper.title}](${paper.url}). ${paper.venue}, ${paper.date}.`));
    push('');

    push('## Awards', '');
    awards.forEach((award) => push(`- ${award.title}, ${award.issuer} (${award.date}). ${plainText(award.text)}`));
    push('');

    push('## Certifications', '');
    certifications.forEach((cert) => push(`- [${cert.title}](${cert.url}), ${cert.issuer} (${cert.date})`));
    push('');

    push('## Skills', '');
    skills.forEach((group) => push(`- ${group.group}: ${group.items.join(', ')}`));
    push('');

    return out.join('\n');
}
