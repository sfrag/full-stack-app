var jwt = require('jsonwebtoken');
var SEED = require('../config/config').SEED;


// ==
//  Verificar token (MIDDELWRE) 
//  El middleware actua por orden en el código, por eso lo ponemos despues del get, porque el get no queremos
//  que tenga la revisión de token
// ==

exports.verificaToken = function(req, res, next) {

    var token = req.query.token;
    
    jwt.verify( token, SEED, (err, decoded)=>{
        if(err){
            return res.status(401).json({
                ok: false,
                mensaje: 'Token incorrecto',
                errors: err
            });
        }
        
        req.usuario = decoded.usuario;

        next();


    });

}

    
