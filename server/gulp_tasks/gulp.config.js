const path = require('path');

class SeedConfig {
  constructor() {
    this.src = 'src';
    this.test = 'test';
    this.dist = 'dist';
    this.configRelativePath = 'shared/configurations';

    this.tsFiles = [
      path.join(this.src, '**/*.ts')
    ];
    this.tsTestFiles = [
      path.join(this.test, '**/*.ts')
    ];
    this.additionalTsFiles = [];
  }
}

const seedConfig = new SeedConfig();

class ModeConfig {
  constructor(src, mode, tsFiles) {
    this.dest = path.join(seedConfig.dist, mode);
    this.src = src;
    this.srcDest = path.join(this.dest, this.src);
    this.configFile = path.join(seedConfig.src, seedConfig.configRelativePath, 'config.' + mode + '.json');
    this.configDest = path.join(this.srcDest, seedConfig.configRelativePath);
    this.tsFiles = tsFiles;
    this.additionalTsFiles = seedConfig.additionalTsFiles;
    this.tsConfigFile = 'tsconfig.json';
  }
}

class DevModeConfig extends ModeConfig {
  constructor() {
    super(seedConfig.src, 'dev', seedConfig.tsFiles);
    // Override your config here
  }
}

class ProdModeConfig extends ModeConfig {
  constructor() {
    super(seedConfig.src, 'prod', seedConfig.tsFiles);
    // Override your config here
  }
}

class TestModeConfig extends ModeConfig {
  constructor() {
    super(seedConfig.test, 'test', seedConfig.tsTestFiles);
    // Override your config here
  }
}

module.exports = function () {
  var dev = new DevModeConfig();
  var prod = new ProdModeConfig();
  var test = new TestModeConfig();

  var config = {
    dev: dev,
    prod: prod,
    test: test
  };

  return config;
};
