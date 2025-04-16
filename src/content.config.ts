import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// id ref = EN_Personalities.json
// model ref = ScenarioModelCodeAddressable.json

// S = main story
// E = side story
// D = dungeon story
// P = id story

// Schema

const commonSchema = z.object({
	dataList: z.array(
		z.object({
			id: z.number().optional(),
			place: z.string().or(z.number()).optional(),
			model: z.string().optional(),
			teller: z.string().optional(),
			title: z.string().optional(),
			content: z.string().optional()
		})
	)
});

// Helper

function createIdentityCollection(id_pattern: string) {
	return defineCollection({
		loader: glob({ pattern: `EN_P${id_pattern}[0-9][0-9].json`, base: './src/assets/limbusData/' }),
		schema: commonSchema
	});
}

function createMainChapterCollection(ep_pattern: string) {
	return defineCollection({
		loader: glob({
			pattern: `EN_S${ep_pattern}[0-9][0-9][A-Z].json`,
			base: './src/assets/limbusData/'
		}),
		schema: commonSchema
	});
}

// Collections

export const collections = {
	yi_sang: createIdentityCollection('101'),
	faust: createIdentityCollection('102'),
	don_quixote: createIdentityCollection('103'),
	ryōshū: createIdentityCollection('104'),
	meursault: createIdentityCollection('105'),
	hong_lu: createIdentityCollection('106'),
	heathcliff: createIdentityCollection('107'),
	ishmael: createIdentityCollection('108'),
	rodion: createIdentityCollection('109'),
	sinclair: createIdentityCollection('110'),
	outis: createIdentityCollection('111'),
	gregor: createIdentityCollection('112'),
	S0: createMainChapterCollection('0'),
	S1: createMainChapterCollection('1'),
	S2: createMainChapterCollection('2'),
	S3: createMainChapterCollection('3'),
	S4: createMainChapterCollection('4'),
	S5: createMainChapterCollection('5'),
	S6: createMainChapterCollection('6'),
	S7: createMainChapterCollection('7')
} as const;
