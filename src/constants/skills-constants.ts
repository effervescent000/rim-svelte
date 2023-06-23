export const MAJOR_PASSION_VALUE = 5;
export const MINOR_PASSION_VALUE = 2;

// these are a combination of the raw learning multiplier + what I think the mood/recreation boost is worth
export const MAJOR_PASSION_MODIFIER = 1.5 + 2;
export const MINOR_PASSION_MODIFIER = 1 + 1;
export const NO_PASSION_MODIFIER = 0.35;

export const MINIMUM_USEFUL_SKILL_LEVEL = 4;

export const SKILLS = {
	shooting: { name: 'Shooting' },
	melee: { name: 'Melee' },
	construction: { name: 'Construction' },
	mining: { name: 'Mining' },
	cooking: { name: 'Cooking' },
	plants: { name: 'Plants' },
	animals: { name: 'Animals' },
	crafting: { name: 'Crafting' },
	artistic: { name: 'Artistic' },
	medicine: { name: 'Medicine' },
	social: { name: 'Social' },
	intellectual: { name: 'Intellectual' }
};

export const SKILLS_ARRAY = Object.values(SKILLS).map(({ name }) => name);
