#!/usr/bin/env node
'use strict';

const meow = require('meow')
const prisjakt = require('./index.js')

const cli = meow(`
	Usage
	  $ prisjakt <sökord>
	Example
	  $ prisjakt 'hifiman 400'
`)

prisjakt(cli.input.join(' '))
