'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var fs = require('fs');
var mkdirp = require('mkdirp');

var folders = [ 'src/main/coffee', 'src/main/js', 'src/main/resources',
                'src/test/coffee', 'src/test/js', 'src/test/resources', 
                'src/build/docker'];

// var globalDeps = ['gajino'];
var globalDeps = ['coffee-script', 'gulp', 'gulp-cli'];
// var devDeps = ['dajino'];
var devDeps = ['coffee-script', 'gulp', 'gulp-coffee', 'gulp-changed', 'gulp-exec', 'gulp-mocha', 'gulp-nodemon', 'mocha', 'should'];
// var deps = ['ajino'];
var deps = [];

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to ' + chalk.red('generator-mavenjs') + ' generator. A simple hack for structuring nodejs apps in the style of Maven!'
    ));

    this.argument('project', { type: String, required: true });

    done();
  },

  writing: function () {
    var done = this.async();

    this.log("creating project files...");

    if ( this.appname !== this.project ) {
      if (! fs.existsSync( this.project ) ) {
        this.log("Folder does not exist... creating...");
        mkdirp( this.destinationPath(this.project) );
        this.destinationRoot( this.destinationPath(this.project) );
      }
    } else {
      this.destinationRoot( this.destinationPath() );
    }

    this.log("creating project at " + this.destinationPath());

    var self = this;
    this.log("creating project folders...");
    folders.forEach( function( folder ) {
      mkdirp( self.destinationPath( folder ) );
    })

    this.log("copying project files...");
    this.fs.copyTpl(this.templatePath(), this.destinationPath(), { project : { name : this.project } } );

    done();
  },

  install: function () {
    this.log("initializing npm...\n\n");
    this.spawnCommandSync('npm', ['init', this.destinationPath()]);

    this.log("installing all dependencies...");
    this.npmInstall(globalDeps, { global : true });
    this.npmInstall(devDeps, { 'saveDev' : true } );
    this.npmInstall(deps, {} );
  }
});
