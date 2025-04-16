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

export const MAIN_STORIES = ['s0', 's1', 's2', 's3', 's4', 's5', 's6', 's7'] as const;

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
