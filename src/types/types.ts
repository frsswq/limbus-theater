import type { CollectionEntry } from 'astro:content';

export type CommonItem = {
	id?: number;
	place?: string;
	model?: string;
	teller?: string;
	title?: string;
	content: string;
};

export type PersonalityItem = {
	id: number;
	title: string;
	name: string;
	nameWithTitle: string;
	desc: string;
};

export const IDENTITIES = [
	'yi_sang',
	'faust',
	'don_quixote',
	'ryōshū',
	'meursault',
	'hong_lu',
	'heathcliff',
	'ishmael',
	'rodion',
	'sinclair',
	'outis',
	'gregor'
] as const;

export type IdentityStoryKey = (typeof IDENTITIES)[number];

export const MAIN_STORIES = ['S0', 'S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7'] as const;

export type MainStoryKey = (typeof MAIN_STORIES)[number];

export type MainStory = CollectionEntry<MainStoryKey> & {
	data: {
		dataList: CommonItem[];
	};
};

export type IdentitiesStory = CollectionEntry<IdentityStoryKey> & {
	data: {
		dataList: CommonItem[];
	};
};
