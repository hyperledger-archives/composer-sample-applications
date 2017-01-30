#!/usr/bin/env node
/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
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
