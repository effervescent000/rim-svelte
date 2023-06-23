import { mean, quantile } from 'simple-statistics';

import { BASE_GAME_LABORS, MOD_LABORS } from '../constants/labor-constants';
import { MODS } from '../constants/mods-constants';
import { SKILLS_ARRAY } from '../constants/skills-constants';
import type { LaborCategoryParams, LaborParams, Pawn } from '../interfaces';
import { BACKSTORIES_LOOKUP } from '../constants/backstories-constants';

export const buildLabors = (modList: Array<string>) => {
	const labors: Array<LaborParams> = [...BASE_GAME_LABORS];
	const modLabors: {
		[key: string]: LaborParams;
	} = MOD_LABORS();
	modList.forEach((mod) => {
		switch (mod) {
			case MODS.biotech:
				labors.push(modLabors.childcare);
				break;
			case MODS.allowTool:
				labors.push(modLabors.haulPlus);
				labors.push(modLabors.hiddenLabor);
				break;
			case MODS.colonyManager:
				labors.push(modLabors.managing);
				break;
			case MODS.hospitality:
				labors.push(modLabors.entertaining);
				break;
			case MODS.quarry:
				labors.push(modLabors.quarrying);
				break;
			case MODS.vanillaBooksExpanded:
				labors.push(modLabors.writing);
				break;
			case MODS.vanillaFishingExpanded:
				labors.push(modLabors.fishing);
				break;
			case MODS.vanillaGeneticsExpanded:
				labors.push(modLabors.genetics);
				break;
			default:
				break;
		}
	});
	return [
		labors,
		labors.reduce(
			(total, cur) => ({ ...total, [cur.name]: cur }),
			{} as { [key: string]: LaborParams }
		)
	] as [Array<LaborParams>, { [key: string]: LaborParams }];
};

export const buildColonyStats = (pawns: Pawn[]) => {
	let allSkills: Record<string, Record<string, any>[]> = {};
	pawns.forEach(
		({
			skills: {
				skills: { li: skills }
			}
		}) => {
			skills.forEach((skill) => {
				allSkills = {
					...allSkills,
					[skill.def]: allSkills[skill.def]
						? [...allSkills[skill.def], { level: skill.level, passion: skill.passion }]
						: [{ level: skill.level, passion: skill.passion }]
				};
			});
		}
	);
	const stats = SKILLS_ARRAY.map((skill) => ({
		name: skill,
		average: mean(allSkills[skill].map(({ level }) => +level || 0)),
		upperQuantile: quantile(
			allSkills[skill].map(({ level }) => +level || 0),
			0.75
		)
	}));
	return stats.reduce((total, cur) => ({ ...total, [cur.name]: cur }), {});
};

const makeIncapableSkillsArray = (childhood: string, adulthood: string | undefined) => [
	...(childhood ? BACKSTORIES_LOOKUP[childhood] || [] : []),
	...(adulthood ? BACKSTORIES_LOOKUP[adulthood] || [] : [])
];

export const getIncapableLabors = (
	{ story: { childhood, adulthood } }: Pawn,
	laborsOnly = false
): string[] | Array<LaborCategoryParams> => {
	const labors = makeIncapableSkillsArray(childhood, adulthood);
	if (!laborsOnly) return labors;
	return labors.reduce((total, cur) => [...total, cur.value], [] as Array<string>);
};

export const makeValues = (baseValue: number, modifiers = {}) => ({
	colonistValue: baseValue,
	slaveValue: baseValue,
	...modifiers
});

export const getSkills = (pawn: Pawn) => pawn.skills.skills.li;
