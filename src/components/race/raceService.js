import RaceDAL from './raceDAL';
import { BadRequest } from '../../utils/Error';
export default class RaceService {
    async list() {
        const theRaceList = await new RaceDAL().list();
        return theRaceList;
    }
    async add(newRace) {
        const errors = newRace.validate();
        if (errors.length !== 0) {
            throw new BadRequest(errors);
        }
        const theRace = await new RaceDAL().add(newRace);
        return theRace;
    }
}