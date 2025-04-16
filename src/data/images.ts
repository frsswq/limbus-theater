export const storyLog = import.meta.glob('@assets/limbusImages/icons/storyLog/**/*.png', {
	eager: true,
	import: 'default'
});

export const identityImages = import.meta.glob(
	'@assets/limbusImages/identities/**/[0-9][0-9][0-9][0-9][0-9]_gacksung.png',
	{ eager: true, import: 'default' }
);
