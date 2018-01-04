'use strict';

const strictUriEncode = require('strict-uri-encode')
const opn = require('opn')

module.exports = frase => {
    opn('https://www.prisjakt.nu/#rparams=ss=' + strictUriEncode(frase))
    return process.exit()
}
