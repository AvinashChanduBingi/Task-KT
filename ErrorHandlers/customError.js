

class CustomError extends Error
{
    constructor(message,statusCode)
    {
        super(message);
        this.name = "Custom Error";
        this.statusCode = statusCode;
    }
}

module.exports = CustomError;