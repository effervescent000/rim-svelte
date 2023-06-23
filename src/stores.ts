import { writable, derived } from 'svelte/store';

import type { Zone } from './interfaces';

import { pawnStore } from './store-helpers';
import WarningsBuilder from './builders/warnings-builder';

// pawn stores
export const colonistStore = pawnStore();
export const prisonerStore = pawnStore();
export const slaveStore = pawnStore();
export const mapPawns = pawnStore();
export const selectedPawns = pawnStore();

// other save data stores
export const modList = writable<string[]>([]);
export const growingZones = writable<Zone[]>([]);

// general purpose stores
export const warnings = derived(
	[colonistStore, prisonerStore, slaveStore, growingZones],
	([$colonistStore, $prisonerStore, $slaveStore, $growingZones]) => {
		const wb = new WarningsBuilder({
			growingZones: $growingZones,
			colonists: $colonistStore,
			prisoners: $prisonerStore,
			slaves: $slaveStore
		});
		wb.calculateNutrition();
		return wb.warnings;
	}
);
