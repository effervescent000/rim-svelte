import type { Pawn } from './interfaces';
import { pawnStore } from './store-helpers';

export const colonistStore = (pawns: Pawn[]) => pawnStore(pawns);
export const prisonerStore = (pawns: Pawn[]) => pawnStore(pawns);
export const slaveStore = (pawns: Pawn[]) => pawnStore(pawns);
export const hostileStore = (pawns: Pawn[]) => pawnStore(pawns);
export const visitorStore = (pawns: Pawn[]) => pawnStore(pawns);
