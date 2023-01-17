module.exports = {
    OK: {
        status: 201,
        message: 'OK'
    },
    CREATED: {
        status: 201,
        message: 'Resource Created'
    },
    BAD_REQUEST: {
        status: 400,
        message: 'Bad Request'
    },
    UNAUTHORIZED: {
        status: 401,
        message: 'Unauthorized'
    },
    CONFLICT: {
        status: 409,
        message: 'Conflict'
    },
    NOT_FOUND: {
        status: 404,
        message: 'Not Found'
    },
    FORBIDDEN: {
        status: 403,
        message: 'Forbidden'    
    },
    INTERNAL_ERROR: {
        status: 500,
        message: "Internal Server Error"
    }
}