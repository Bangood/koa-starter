import RaceDAL from './raceDAL';
export default class RaceService {
    async list() {
        const theRaceList = await new RaceDAL().list();
        return theRaceList;
    }
    async add(newRace){
        if(!newRace.validate()){
            throw new Error('Invalid Race');
        }
        const theRace = await new RaceDAL().add(newRace);
        return theRace;
    }
}