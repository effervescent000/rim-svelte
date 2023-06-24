import type { BackstoryLookupParams, BackstoryParams } from '../interfaces';
import { LABOR_CATEGORIES } from './labor-constants';

const CHILDHOOD_BACKSTORIES: Array<BackstoryParams> = [
	{ name: 'CultChild3', incapable: [LABOR_CATEGORIES.intellectual] },
	{ name: 'MedicalAssistant12', incapable: [LABOR_CATEGORIES.firefighting] },
	{
		name: 'TestSubject15',
		incapable: [LABOR_CATEGORIES.firefighting, LABOR_CATEGORIES.caring, LABOR_CATEGORIES.social]
	},
	{ name: 'Bookworm19', incapable: [LABOR_CATEGORIES.dumb] },
	{ name: 'StudentEngineer34', incapable: [LABOR_CATEGORIES.dumb] },
	{ name: 'Killer41', incapable: [LABOR_CATEGORIES.social] },
	{ name: 'Scout44', incapable: [LABOR_CATEGORIES.art, LABOR_CATEGORIES.intellectual] },
	{ name: 'SoldiersKid55', incapable: [LABOR_CATEGORIES.plantWork, LABOR_CATEGORIES.animals] },
	{
		name: 'ScienceProdigy65',
		incapable: [LABOR_CATEGORIES.firefighting, LABOR_CATEGORIES.violent]
	},
	{
		name: 'JoywireAddict76',
		incapable: [LABOR_CATEGORIES.intellectual, LABOR_CATEGORIES.cleaning]
	}
];

const ADULT_BACKSTORIES = [
	{
		name: 'Assassin20',
		incapable: [
			LABOR_CATEGORIES.caring,
			LABOR_CATEGORIES.social,
			LABOR_CATEGORIES.cooking,
			LABOR_CATEGORIES.plantWork,
			LABOR_CATEGORIES.skilled,
			LABOR_CATEGORIES.dumb,
			LABOR_CATEGORIES.intellectual
		]
	},
	{ name: 'TournamentFighter28', incapable: [LABOR_CATEGORIES.skilled] },
	{
		name: 'ConstructionEngineer32',
		incapable: [LABOR_CATEGORIES.intellectual, LABOR_CATEGORIES.cooking]
	},
	{ name: 'Healer35', incapable: [LABOR_CATEGORIES.mining, LABOR_CATEGORIES.dumb] }
];

export const BACKSTORIES_LOOKUP: BackstoryLookupParams = [
	...CHILDHOOD_BACKSTORIES,
	...ADULT_BACKSTORIES
].reduce((total, cur) => ({ ...total, [cur.name]: cur.incapable }), {});
