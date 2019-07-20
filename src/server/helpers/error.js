// Client Errors 4xx

export class ClientError extends Error {

    constructor(msg, code = 400) {
        super(msg);
        this.code = code;
    }

}

export class BadRequestError extends Error {

    constructor(msg, code = 400) {
        super(msg);
        this.code = code;
    }

}

export class UnauthorizedError extends Error {

    constructor(msg, code = 401) {
        super(msg);
        this.code = code;
    }

}

export class ForbiddenError extends Error {

    constructor(msg, code = 403) {
        super(msg);
        this.code = code;
    }

}

export class NotFoundError extends Error {

    constructor(msg, code = 404) {
        super(msg);
        this.code = code;
    }

}

export class TeapotError extends Error {

    constructor(msg = '') {
        super(`I'm a teapot - ${msg} RFC 2324`);
        this.code = 418;
    }

}

// Server Errors 5xx

export class InternalServerError extends Error {

    constructor(msg, code = 500) {
        super(msg);
        this.code = code;
    }

}

export class ServerError extends Error {

    constructor(msg, code = 500) {
        super(msg);
        this.code = code;
    }

}
