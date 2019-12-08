#!/usr/bin/env node

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
