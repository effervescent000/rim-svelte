import { LIFE_STAGES } from '../constants/health-constants';
import type { LifeStage, Pawn } from '../interfaces';

export const getName = ({ name }: Pawn) => name.nick || `${name.first} ${name.last}`;

export const roundToTwoDecimals = (num: number) => Math.round(num * 100) / 100;

export const getNutritionRequired = (pawn: Pawn) => {
	// TODO also look at traits (for Gourmand)
	const {
		ageTracker: { ageBiologicalTicks },
		gender,
		healthTracker: {
			hediffSet: {
				hediffs: { li: hediffs }
			}
		}
	} = pawn;
	const age = LIFE_STAGES.find(({ minAge }) => ageBiologicalTicks > minAge) as LifeStage;
	const breastfeedingNutrition = () => {
		if (gender !== 'Female' || !hediffs) return 0;
		if (!Array.isArray(hediffs)) {
			return hediffs.def === 'Lactating' ? 0.5 : 0;
		} else {
			const lactatingHediff = hediffs.find(({ def }) => def === 'Lactating');
			return lactatingHediff ? 0.5 : 0;
		}
	};
	return 1.6 * age.bodySize * (age.nutritionMod || 1) + breastfeedingNutrition();
};
