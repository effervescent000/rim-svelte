import { writable } from 'svelte/store';
import type { Pawn } from './interfaces';

export const pawnStore = () => writable([] as Pawn[]);
