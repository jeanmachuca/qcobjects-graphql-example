#!/usr/bin/env node
/**
 * QCObjects CLI 0.1.x
 * ________________
 *
 * Author: Jean Machuca <correojean@gmail.com>
 *
 * Cross Browser Javascript Framework for MVC Patterns
 * QuickCorp/QCObjects is licensed under the
 * GNU Lesser General Public License v3.0
 * [LICENSE] (https://github.com/QuickCorp/QCObjects/blob/master/LICENSE.txt)
 *
 * Permissions of this copyleft license are conditioned on making available
 * complete source code of licensed works and modifications under the same
 * license or the GNU GPLv3. Copyright and license notices must be preserved.
 * Contributors provide an express grant of patent rights. However, a larger
 * work using the licensed work through interfaces provided by the licensed
 * work may be distributed under different terms and without source code for
 * the larger work.
 *
 * Copyright (C) 2015 Jean Machuca,<correojean@gmail.com>
 *
 * Everyone is permitted to copy and distribute verbatim copies of this
 * license document, but changing it is not allowed.
*/
"use strict";
const path = require('path');
const absolutePath = path.resolve( __dirname, "./" );
const templatePath = path.resolve( __dirname, "./templates/apps/" )+'/'

require('qcobjects');

CONFIG.set('projectPath',`${process.cwd()}/`);
CONFIG.set('private-key-pem','localhost-privkey.pem');
CONFIG.set('private-cert-pem','localhost-cert.pem');
CONFIG.set('domain','localhost');

try {
  const _config = require(CONFIG.get('projectPath')+'config.json');
  logger.debug('Loading settings from your config.json');
  for (var k in _config){
    CONFIG.set(k,_config[k]);
  }
  if (typeof CONFIG.get('backend') != 'undefined'){
    global.set('backendAvailable',true);

    if (typeof CONFIG.get('basePath') != 'undefined'){
      logger.debug(`Changing the current directory: ${process.cwd()}`);
      try {
        process.chdir(CONFIG.get('basePath'));
        logger.debug(`New directory: ${process.cwd()}`);
      } catch (err) {
        logger.warn(`It was impossible to change the current chdir: ${err}`);
      }
    }
  }
}catch (e){
  logger.debug('No config.json file in your project');
}

const { execSync } = require('child_process');
// stderr is sent to stderr of parent process
// you can set options.stdio if you want it to go elsewhere
let stdout = execSync('openssl req -x509 -newkey rsa:2048 -nodes -sha256 -subj \'/CN='+CONFIG.get('domain')+'\'  -keyout '+CONFIG.get('private-key-pem')+' -out '+CONFIG.get('private-cert-pem'));
