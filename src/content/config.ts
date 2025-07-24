
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

// 'posts' 라는 이름의 컬렉션을 정의합니다.
const postsCollection = defineCollection({
  // Zod를 사용하여 프론트매터의 타입을 검사하고 정의합니다.
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string().default('Lopyad'),
    tags: z.array(z.string()).optional(),
    thumbnail: z.string().optional(), // Revert to string type
  }),
});

// 'collections' 객체에 정의한 컬렉션을 내보냅니다.
export const collections = {
  posts: postsCollection,
};
