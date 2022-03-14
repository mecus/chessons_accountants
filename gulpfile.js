// let gulp = require("gulp");
// let sass = require("gulp-sass");
let minify = require('gulp-minify');
let concat = require('gulp-concat');
let sourcemaps = require("gulp-sourcemaps");
let babel = require("gulp-babel");
let sequence = require('run-sequence');
let ts = require('gulp-typescript');
let plumber = require('gulp-plumber');

const sass = require('gulp-sass')(require('sass'));
const { src, dest, watch, series } = require('gulp');

function transpileJs() {
    return src("src/scripts/*.js")
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(concat("main.js"))
        .pipe(sourcemaps.write("."))
        .pipe(dest("dist"));
};


function gulpsass(){
    return src('./src/assets/stylesheets/*.scss')
    .pipe(concat('main.css'))
    .pipe(minify())
    .pipe(sass().on("error", sass.logError))
    .pipe(dest('./dist'));
};

function jswatch() {
    return watch('./src/scripts/*.js', ['transpileJs']);
};
function sasswatch() {
    watch('./src/assets/stylesheets/*.scss', ['sass'], function(cb){
        return cb();
    });
};
function htmlwatch() {
    return watch('./src/pages/*.html', ['copy:pages']);
 
};

function copypages(){
    return src("src/pages/*.html")
    .pipe(dest("dist"))
};
function copyimages(){
    return src(
        [
            "src/assets/images/*.jpg", "src/assets/images/*.jpeg", 
            "src/assets/images/*.png"
        ]
    ).pipe(dest("dist/assets/images"))
};
function copypwa(){
    return src(["src/pwa/*.js", "src/pwa/*.json"])
        .pipe(dest("dist"))
};
exports.default = series(copypages, copyimages, copypwa, gulpsass, 
     transpileJs);
// gulp.task('default', 
//     [
//         'copy:pages', 'copy:images', 'copy:pwa-code',
//         'sass', 'sass:watch', 'html:watch', 
//         'transpileJs', 'js:watch'
//     ]
// );
