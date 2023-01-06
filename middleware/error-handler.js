const { CustomApiError } = require('../errors/custom-error')

const errorHandlerMiddleware = (err, req, res, next) => {
    if(err instanceof CustomApiError){
        return res.status(err.statusCode).json(err.message)
    }

    return res.status(500).json({ message: 'Something went wrong, Please try again later'})
}

module.exports = errorHandlerMiddleware