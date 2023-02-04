const User = require('../models/User')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = (req, res) => {
    let user = new User();
    user.username = req.body.username;
    user.password = bcrypt.hashSync(req.body.password, 10);
    user.save().then(r => {
        return res.sendStatus(204);
    })
        .catch(err => {
            return res.sendStatus(500).json(err);
        });
}

const login = (req, res) => {
    User.findOne({username: req.body.username},
        (err, user) => {
            if (err) {
                return res.sendStatus(401);
            }
            if (bcrypt.compareSync(req.body.password, user.password)) {
                let payload = { subject: user._id };
                let jwtToken = jwt.sign(payload, 'secretKey', { expiresIn: 120 })
                res.cookie(`sessionId`,jwtToken, { httpOnly: true });
                res.cookie(`sessionInfo`, payload)
                return res.sendStatus(204);
            }
            return res.sendStatus(401);
        }
    );
}
const login1 =  (req, res) => {
    User.findOne({ username : req.body.username },
    (err, user) => {
        if(err) {
            return res.sendStatus(500).json(err);
        }
        if(!user) {
            return res.sendStatus(404);
        }
        if(bcrypt.compareSync(req.body.password, user.password)) {
            return res.sendStatus(204);
        }
        return res.sendStatus(401);
    });
    /*.then(user => {
        if(!user) {
            return res.sendStatus(404);
        }
        if(bcrypt.compareSync(req.body.password, user.password)) {
            return res.sendStatus(200);
        }
        return res.sendStatus(401);
    })*/
}

module.exports = { register, login }