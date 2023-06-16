import {
	AQUATIC_GROWING_ZONE,
	COLONIST,
	GROWING_ZONE,
	HUMAN_CONSTANT,
	MAN_IN_BLACK,
	PLAYER_COLONY,
	SLAVE
} from '../constants/generic-constants';
import type { RawSaveData } from '../interfaces';

export const processSaveFile = (save: RawSaveData) => {
	const world = save.savegame.game.world;
	const factions = world.factionManager.allFactions.li;
	const playerFactions = factions.filter(({ def }) => def === PLAYER_COLONY);
	const mapPawns = save.savegame.game.maps.li.things.thing.filter(
		({ def, guest, kindDef }) =>
			def === HUMAN_CONSTANT &&
			((kindDef !== COLONIST && kindDef !== SLAVE && kindDef !== MAN_IN_BLACK) ||
				guest.hostFaction !== 'null')
	);
	const colonists = save.savegame.game.maps.li.things.thing.filter(
		({ def, guest, kindDef }) =>
			def === HUMAN_CONSTANT &&
			(kindDef === COLONIST || kindDef === MAN_IN_BLACK) &&
			guest.hostFaction === 'null' &&
			!guest.guestStatus
	);
	const slaves = save.savegame.game.maps.li.things.thing.filter(
		({ def, guest, kindDef }) =>
			def === HUMAN_CONSTANT &&
			kindDef === COLONIST &&
			guest.guestStatus &&
			guest.guestStatus === SLAVE
	);
	const prisoners = save.savegame.game.maps.li.things.thing.filter(
		({ def, guest }) =>
			def === HUMAN_CONSTANT && guest.guestStatus && guest.guestStatus === 'Prisoner'
	);
	const modList = Array.isArray(save.savegame.meta.modIds.li)
		? save.savegame.meta.modIds.li
		: [save.savegame.meta.modIds.li];
	const growingZones = save.savegame.game.maps.li.zoneManager.allZones.li.filter(({ baseLabel }) =>
		[GROWING_ZONE, AQUATIC_GROWING_ZONE].includes(baseLabel)
	);
	const homeZoneSize = +save.savegame.game.maps.li.areaManager.areas.li[0].innerGrid.trueCount;

	return {
		factions,
		playerFactions,
		mapPawns,
		colonists,
		prisoners,
		slaves,
		modList,
		growingZones,
		homeZoneSize,
		initialized: true
	};
};
