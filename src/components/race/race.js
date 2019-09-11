import { Validator } from 'jsonschema';
import RaceSchema from './race-schema.json'

export default class Race {
    constructor() {
    }
    validate() {
        const v = new Validator();
        const { errors } = v.validate(this, RaceSchema);
        return errors.length === 0;
    }
}