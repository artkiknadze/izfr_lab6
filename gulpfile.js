const gulp = require("gulp");
const minify = require("gulp-minify");
const concat = require("gulp-concat");
const ts = require("gulp-typescript");

gulp.task("build", (done) => {
  gulp
    .src(["./web/*.ts"])
    .pipe(ts())
    .pipe(minify({ noSource: true }))
    .pipe(concat("bundle.js"))
    .pipe(gulp.dest("dist"));
  done();
});
