let gulp = require("gulp");
let sass = require("gulp-sass");
let minify = require('gulp-minify');
let concat = require('gulp-concat');
let sourcemaps = require("gulp-sourcemaps");
let babel = require("gulp-babel");
let sequence = require('run-sequence');
let ts = require('gulp-typescript');

gulp.task("transpileJs", function () {
    return gulp.src("src/scripts/*.js")
      .pipe(sourcemaps.init())
      .pipe(babel())
      .pipe(concat("main.js"))
      .pipe(sourcemaps.write("."))
      .pipe(gulp.dest("dist"));
  });


gulp.task("sass", function(){
    return gulp.src('./src/assets/stylesheets/*.scss')
    .pipe(concat('main.css'))
    .pipe(minify())
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest('./dist'));
});
gulp.task('js:watch', function () {
    gulp.watch('./src/scripts/*.js', ['transpileJs']);
});
gulp.task('sass:watch', function () {
    gulp.watch('./src/assets/stylesheets/*.scss', ['sass']);
});
gulp.task('html:watch', function () {
    gulp.watch('./src/pages/*.html', ['copy:pages']);
 
});

gulp.task('copy:pages', function(){
    return gulp.src("src/pages/*.html")
    .pipe(gulp.dest("dist"))
});
gulp.task('copy:images', function(){
    return gulp.src(
        [
            "src/assets/images/*.jpg", "src/assets/images/*.jpeg", 
            "src/assets/images/*.png"
        ]
    ).pipe(gulp.dest("dist/assets/images"))
});
gulp.task('default', 
    [
        'copy:pages', 'copy:images', 
        'sass', 'sass:watch', 'html:watch', 
        'transpileJs', 'js:watch'
    ]
);
