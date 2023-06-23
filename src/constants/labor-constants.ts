import { MODS } from './mods-constants';
import { SKILLS } from './skills-constants';

export const LABOR_CATEGORIES = {
	violent: { value: 'Violent', skills: [SKILLS.shooting.name, SKILLS.melee.name] },
	firefighting: { value: 'Firefighting' },
	caring: { value: 'Caring', skills: [SKILLS.medicine.name] },
	plantWork: { value: 'Plant Work', skills: [SKILLS.plants.name] },
	social: { value: 'Social', skills: [SKILLS.social.name] },
	dumb: { value: 'Dumb Labor' },
	skilled: {
		value: 'Skilled Labor',
		skills: [SKILLS.crafting.name, SKILLS.cooking.name, SKILLS.intellectual.name]
	},
	intellectual: { value: 'Intellectual', skills: [SKILLS.intellectual.name] },
	animals: { value: 'Animals', skills: [SKILLS.animals.name] },
	cooking: { value: 'Cooking', skills: [SKILLS.cooking.name] },
	hauling: { value: 'Hauling' },
	cleaning: { value: 'Cleaning' },
	mining: { value: 'Mining', skills: [SKILLS.mining.name] },
	art: { value: 'Art', skills: [SKILLS.artistic.name] }
};

export const LABORS_OBJ = {
	firefighting: { name: 'Firefight', allDo: true },
	patient: { name: 'Patient', allDo: true },
	medicine: { name: 'Doctor', skill: SKILLS.medicine.name },
	bedRest: { name: 'Bed rest', allDo: true },
	haulPlus: { name: 'Haul+', source: MODS.allowTool },
	childcare: { name: 'Childcare', source: MODS.biotech, skill: SKILLS.social.name },
	basic: { name: 'Basic', allDo: true },
	wardening: { name: 'Warden', skill: 'Social' },
	handling: { name: 'Handle', skill: 'Animals' },
	entertaining: { name: 'Entertain', source: MODS.hospitality, skill: 'Social' },
	cooking: { name: 'Cook', skill: 'Cooking' },
	hunting: { name: 'Hunt', skill: 'Shooting' },
	construction: { name: 'Construct', skill: 'Construction' },
	growing: { name: 'Grow', skill: 'Plants' },
	mining: { name: 'Mine', skill: 'Mining' },
	quarrying: { name: 'Quarry', source: MODS.quarry, skill: 'Mining' },
	plantCutting: { name: 'Plant cut' },
	smithing: { name: 'Smith', skill: 'Crafting' },
	tailoring: { name: 'Tailor', skill: 'Crafting' },
	art: { name: 'Art', skill: 'Artistic' },
	crafting: { name: 'Craft', skill: 'Crafting' },
	hauling: { name: 'Haul' },
	cleaning: { name: 'Clean' },
	genetics: { name: 'Genetics', source: MODS.vanillaGeneticsExpanded, skill: 'Intellectual' },
	researching: { name: 'Research', skill: 'Intellectual' },
	managing: { name: 'Managing', source: MODS.colonyManager, skill: 'Intellectual' },
	writing: { name: 'Writing', source: MODS.vanillaBooksExpanded, skill: 'Intellectual' }
};

export const BASE_GAME_LABORS = [
	{
		name: LABORS_OBJ.firefighting.name,
		allDo: true,
		categories: [LABOR_CATEGORIES.firefighting],
		maxPrio: true
	},
	{ name: 'Patient', allDo: true, maxPrio: true },
	{
		name: 'Doctor',
		skill: SKILLS.medicine.name,
		categories: [LABOR_CATEGORIES.caring],
		maxPrio: true
	},
	{ name: 'Bed rest', allDo: true },
	{ name: 'Basic', allDo: true, maxPrio: true },
	{ name: 'Warden', skill: 'Social', categories: [LABOR_CATEGORIES.social] },
	{ name: 'Handle', skill: 'Animals', categories: [LABOR_CATEGORIES.animals] },
	{
		name: 'Cook',
		skill: 'Cooking',
		categories: [LABOR_CATEGORIES.cooking, LABOR_CATEGORIES.skilled],
		focusTask: true
	},
	{ name: 'Hunt', skill: 'Shooting', categories: [LABOR_CATEGORIES.violent], focusTask: true },
	{ name: 'Construct', skill: 'Construction', focusTask: true },
	{ name: 'Grow', skill: SKILLS.plants.name, focusTask: true },
	{ name: 'Mine', skill: 'Mining' },
	{ name: 'Plant cut', skill: SKILLS.plants.name },
	{ name: 'Smith', skill: 'Crafting' },
	{ name: 'Tailor', skill: 'Crafting' },
	{ name: 'Art', skill: 'Artistic' },
	{ name: 'Craft', skill: 'Crafting' },
	{ name: 'Haul', allDo: true, categories: [LABOR_CATEGORIES.dumb, LABOR_CATEGORIES.hauling] },
	{ name: 'Clean', allDo: true, categories: [LABOR_CATEGORIES.dumb, LABOR_CATEGORIES.cleaning] },
	{
		name: 'Research',
		skill: 'Intellectual',
		categories: [LABOR_CATEGORIES.intellectual],
		focusTask: true
	}
];

export const MOD_LABORS = () => ({
	childcare: { name: 'Childcare', source: MODS.biotech, skill: SKILLS.social.name },
	haulPlus: { name: 'Haul+', source: MODS.allowTool },
	hiddenLabor: { name: 'Hidden', source: MODS.allowTool },
	entertaining: {
		name: 'Entertain',
		source: MODS.hospitality,
		skill: 'Social',
		categories: [LABOR_CATEGORIES.social]
	},
	quarrying: { name: 'Quarry', source: MODS.quarry, skill: 'Mining' },
	genetics: {
		name: 'Genetics',
		source: MODS.vanillaGeneticsExpanded,
		skill: 'Intellectual',
		categories: [LABOR_CATEGORIES.intellectual]
	},
	managing: {
		name: 'Managing',
		source: MODS.colonyManager,
		skill: 'Intellectual',
		categories: [LABOR_CATEGORIES.intellectual]
	},
	writing: {
		name: 'Writing',
		source: MODS.vanillaBooksExpanded,
		skill: 'Intellectual',
		categories: [LABOR_CATEGORIES.intellectual]
	},
	fishing: {
		name: 'Fishing',
		source: MODS.vanillaFishingExpanded,
		skill: SKILLS.animals.name,
		categories: [LABOR_CATEGORIES.animals]
	}
});
