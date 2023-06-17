import { writable } from 'svelte/store';

import type { Warning, Zone } from './interfaces';

import { pawnStore } from './store-helpers';

// pawn stores
export const colonistStore = pawnStore();
export const prisonerStore = pawnStore();
export const slaveStore = pawnStore();
export const mapPawns = pawnStore();

// other save data stores
export const modList = writable<string[]>([]);
export const growingZones = writable<Zone[]>([]);

// general purpose stores
export const warnings = writable<Warning[]>([]);
