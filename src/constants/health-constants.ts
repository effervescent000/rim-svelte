import type { LifeStage } from '../interfaces';

import { DAY } from './generic-constants';

export const LIFE_STAGES: Array<LifeStage> = [
	{ key: 'Adult', minAge: DAY * 60 * 16, bodySize: 1 },
	{ key: 'Child', minAge: DAY * 60 * 3, bodySize: 0.5, nutritionMod: 1 },
	{ key: 'Baby', minAge: 0, bodySize: 0.2, nutritionMod: 0.62 }
];
