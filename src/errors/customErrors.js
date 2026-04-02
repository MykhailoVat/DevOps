class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.status = 400;
    }
}

class InvariantError extends Error {
    constructor(message) {
        super(message);
        this.status = 400;
    }
}

export { ValidationError , InvariantError};