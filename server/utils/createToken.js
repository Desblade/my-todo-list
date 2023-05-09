const jwt = require('jsonwebtoken');

const createToken = (payload) => new Promise((resolve, reject) => {
    jwt.sign(
        payload,
        process.env.SECRET_KEY,
        {
            expiresIn: '4h',
        },
        (err, data) => {
            if (err) {
                return reject(err);
            }
            resolve(data);
        }
    )
});

module.exports = {
    createToken,
};
