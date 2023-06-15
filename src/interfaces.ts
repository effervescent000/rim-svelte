import type { PawnName } from './types';

export interface IProficiency {
	key: string;
	label?: string;
	prereqs?: string[];
	xp: number;
}

interface HediffParams {
	$?: { Class: string };
	def: string;
	severity: string;
}

export interface SkillParams {
	level: number;
	passion?: string;
	def: string;
}

export interface StringIndexedValues {
	[key: string]: number;
}

export interface IPawnValues {
	colonistValue: number;
	slaveValue: number;
}

export interface ProficiencyValueMapping {
	[key: string]: {
		value: (arg1?: Pawn) => IPawnValues;
		label?: string;
		prereqs?: string[];
		xp: number;
	};
}

export interface TraitValueMapping {
	[key: string]: {
		name: string;
		value: (arg1?: Pawn, arg2?: TraitParams) => IPawnValues;
		source?: string;
	};
}

export interface TraitParams {
	def: string;
	sourceGene?: string;
	suppressedBy?: string;
	degree?: number;
}

export interface IParamDef {
	def: string;
	xpEarned?: number;
	complete?: boolean;
}

export interface Pawn extends MinimalThing {
	ageTracker: { ageBiologicalTicks: number };
	guest: { guestStatus: string; hostFaction: string };
	gender?: string;
	healthTracker: { hediffSet: { hediffs: { li?: Array<HediffParams> | HediffParams } } };
	kindDef: string;
	name: { first: string; last: string; nick?: string };
	skills: { skills: { li: Array<SkillParams> } };
	story: {
		childhood: string;
		adulthood?: string;
		traits: { allTraits: { li: Array<TraitParams> | TraitParams } };
		bodyType: string;
		headGraphicPath: string;
		hairDef: string;
		hairColor: string;
		melanin: string;
	};
	workSettings: {
		priorities: {
			vals: {
				li: Array<number>;
			};
		};
	};
	proficiencies: { li: IParamDef[] };
}

export interface WorkPriorityParams {
	name: PawnName;
	priorities: Array<SinglePrioParams>;
}

interface SinglePrioParams {
	labor: string;
	currentPrio: number;
}

export interface LaborParams {
	name: string;
	allDo?: boolean;
	categories?: Array<LaborCategoryParams>;
	maxPrio?: boolean;
	skill?: string;
	focusTask?: boolean;
	source?: string;
}

export interface LaborLookupParams {
	[key: string]: LaborParams;
}

export interface LaborCategoryParams {
	value: string;
	skills?: Array<string>;
}

export interface BackstoryParams {
	name: string;
	incapable?: Array<LaborCategoryParams>;
}

export interface BackstoryLookupParams {
	[key: string]: Array<LaborCategoryParams>;
}

export interface LifeStageParams {
	bodySize: number;
	nutritionMod?: number;
	minAge: number;
	key: string;
}

interface MinimalThing {
	def: string;
	id: string;
	pos: string;
}

export interface RawSaveData {
	savegame: {
		game: {
			maps: {
				li: {
					areaManager: {
						areas: {
							li: {
								id: number;
								innerGrid: {
									trueCount: number;
								};
							}[];
						};
					};
					things: {
						thing: Pawn[];
					};
					zoneManager: {
						allZones: {
							li: {
								id: number;
								baseLabel: string;
								cells: {
									li: string[];
								};
								plantDefToGrow?: string;
							}[];
						};
					};
				};
			};
			world: {
				factionManager: {
					allFactions: {
						li: Record<string, any>[];
					};
				};
			};
		};
		meta: {
			gameVersion: string;
			modIds: {
				li: string[];
			};
		};
	};
}
