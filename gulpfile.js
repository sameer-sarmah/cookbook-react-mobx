"use strict";

var gulp = require("gulp");

gulp.task("build",function(){
    require('./scripts/build');
});

gulp.task("serve",function(){
    require('./scripts/start');
});

gulp.task("default", ["build"]);
