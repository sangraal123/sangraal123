import { defineCollection } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { z } from 'astro/zod';

export const collections = {
	docs: defineCollection({
		loader: docsLoader(),
		schema: docsSchema({
			extend: z.object({
				lesson: z.object({
					prerequisite: z.string().min(1),
					output: z.string().min(1),
					completion: z.string().min(1),
					environment: z.string().min(1),
					effort: z.string().min(1),
					cost: z.string().min(1),
				}).optional(),
			}),
		}),
	}),
};
