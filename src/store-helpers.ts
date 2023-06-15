import { readable } from 'svelte/store';
import type { Pawn } from './interfaces';

export const pawnStore = (pawnList: Pawn[]) =>
	readable([] as Pawn[], (set) => {
		set(pawnList);
	});
