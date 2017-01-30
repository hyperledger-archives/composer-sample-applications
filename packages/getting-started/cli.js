#!/usr/bin/env node
/*
 * IBM Confidential
 * OCO Source Materials
 * IBM Concerto - Blockchain Solution Framework
 * Copyright IBM Corp. 2016
 * The source code for this program is not published or otherwise
 * divested of its trade secrets, irrespective of what has
 * been deposited with the U.S. Copyright Office.
 */

'use strict';

const winston = require('winston');

process.on('uncaughtException', function (err) {
    console.log( 'Uncaught Exception: ' + err.stack);
});

winston.loggers.add('application', {
    console: {
        level: 'silly',
        colorize: true,
        label: 'Handel'
    }
});

const LOG = winston.loggers.get('application');

LOG.info('IBM Concerto: Handel appliation');

require('yargs')
  .usage ('IBM Concerto: handel <participant> <action>')
  .commandDir('lib/cmds')
  .demand(1,'Please specify a partipant, for example:   handel landregistry <action>')
  .help()
  .strict()
  .recommendCommands()
  .epilogue('For more information visit us at https://pages.github.ibm.com/Blockchain-WW-Labs/Concerto/')
  .argv;
