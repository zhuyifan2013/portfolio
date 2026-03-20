import fs from 'node:fs';
import type { CollectionEntry } from 'astro:content';

export const formatNoteDateTime = (date: Date) =>
  new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(date);

export const getNoteTimes = async (note: CollectionEntry<'notes'>) => {
  try {
    const fileUrl = new URL(`../content/${note.collection}/${note.id}`, import.meta.url);
    const stats = await fs.promises.stat(fileUrl);
    return { createdAt: stats.birthtime, updatedAt: stats.mtime };
  } catch {
    const fallback = new Date();
    return { createdAt: fallback, updatedAt: fallback };
  }
};
