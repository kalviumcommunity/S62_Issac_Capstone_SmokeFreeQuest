const allowedOrigins = require("./aloowedOrigins");


const credentials = (req, res, next) => {
    const origin = req.headers.origin;
    if(allowedOrigins.includes(origin)){
        res.header("Access-Control-Allow-Credentials", "true");
        res.header("Access-Control-Allow-Origin", origin);
    }
    next();
}

module.exports = credentials;