#!/usr/bin/env node
'use strict';

const meow = require('meow')
const prisjakt = require('./index.js')
const chalk = require('chalk')

const cli = meow(`
	Usage
	  $ prisjakt <sökord>
	Example
	  $ prisjakt hifiman 400
`)

if(cli.input.length > 0) {
  prisjakt(cli.input.join(' '))
} else {
  console.log(chalk.bold.red('Fel: ') + 'Du behöver ange minst ett ord att söka efter. Om du behöver hjälp: ' + chalk.green('prisjakt --help'))
}
