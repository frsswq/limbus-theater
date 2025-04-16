import type { ImageMetadata } from 'astro';
import { storyLog } from '@/data/images';
import { identityImages } from '@/data/images';
import imageData from '@assets/limbusData/ScenarioModelCodeAddressable.json';
import unknownSprite from '@assets/limbusImages/icons/storyLog/Other/None_Extra.png';

export function getStoryLogImage(modelName: string | null | undefined): ImageMetadata {
	if (!modelName) return unknownSprite;
	const imageEntry = imageData.assetData.find((item) => item.name === modelName);
	const spritePath = imageEntry?.portraitSpritePath;
	if (!spritePath) return unknownSprite;

	const targetFile = `${spritePath}.png`;
	const foundImage = Object.entries(storyLog).find(([key]) => key.includes(targetFile))?.[1];

	return (foundImage as ImageMetadata) || unknownSprite;
}

export function getIdentityImages(id: string | null | undefined): ImageMetadata | null {
	if (!id) return null;

	const identityNumber = id.match(/\d{5}/)?.[0];
	if (!identityNumber) return null;

	const foundImage = Object.entries(identityImages).find(([path]) =>
		path.includes(`/${identityNumber}_`)
	)?.[1];

	return foundImage as ImageMetadata;
}

export function formatToDisplayName(name: string): string {
	return name
		.split('_')
		.map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');
}
