import { writable, derived } from 'svelte/store';
import { browser } from '$app/environment';

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

const DEFAULT_CONFIG = {
	growingSeason: 60,
	pctNutritionFromGrowing: 0.5
};

const getConfig = () => {
	if (browser) {
		const rawConfig = localStorage.getItem('config');
		if (rawConfig) {
			return JSON.parse(rawConfig);
		}
	}
	return DEFAULT_CONFIG;
};

export const config = writable<Record<string, any>>(getConfig());
config.subscribe((val) => {
	// console.log(val);
	if (browser) {
		localStorage.setItem('config', JSON.stringify(val));
	}
});

export const warnings = derived(
	[colonistStore, prisonerStore, slaveStore, growingZones, config],
	([$colonistStore, $prisonerStore, $slaveStore, $growingZones, $config]) => {
		const wb = new WarningsBuilder({
			growingZones: $growingZones,
			colonists: $colonistStore,
			prisoners: $prisonerStore,
			slaves: $slaveStore,
			config: $config
		});
		wb.calculateNutrition();
		console.log('Updating warning store');
		return wb.warnings;
	}
);
