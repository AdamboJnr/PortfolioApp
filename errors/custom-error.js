
class CustomApiError extends Error{
    constructor(message, statusCode){
        super(message)
        this.statusCode = statusCode
    }
}

const createCustomError = (message, code) => {
    return new CustomApiError(message, code)
}

module.exports = { createCustomError, CustomApiError }