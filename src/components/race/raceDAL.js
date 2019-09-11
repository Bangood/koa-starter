import mongoose from 'mongoose';
import MongoDB from '../../utils/MongoDB';

const RaceSchema = new mongoose.Schema({
    name: {
        type: String,
        default: ''
    }
}, { versionKey: false });
const Race = MongoDB.getInstance().model('Race', RaceSchema);
export default class RaceDAL {
    constructor() { }
    async list() {
        return await Race.find();
    }
    async add(newRace) {

        let entity = new Race(newRace);
        return await entity.save();
    }
}