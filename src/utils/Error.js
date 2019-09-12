import ExtendableError from 'es6-error';
export class BadRequest extends ExtendableError {
    constructor(validationErrors) {
        super('Bad Request');

        const formattedErrors = [];

        validationErrors.forEach((validationError) => {
            formattedErrors.push({message:validationError.stack});
        });

        this.body = {
            errors: formattedErrors,
        };
        this.status = 400;
    }
};
export class Unauthorized extends ExtendableError {
    constructor(message) {
        super(message);
        this.body = {
            errors: [{
                message,
            }],
        };
        this.status = 401;
    }
};
export class Forbidden extends ExtendableError {
    constructor(message) {
        super(message);
        this.body = {
            errors: [{
                message,
            }],
        };
        this.status = 403;
    }
};