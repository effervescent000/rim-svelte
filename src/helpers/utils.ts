import type { Pawn } from '../interfaces';

export const getName = ({ name }: Pawn) => name.nick || `${name.first} ${name.last}`;
