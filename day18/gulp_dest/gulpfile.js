const gulp = require('gulp')
const jshint = require('gulp-jshint')
const babel = require('gulp-babel');
const browserify = require('gulp-browserify');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify')
const less = require('gulp-less');
const LessAutoprefix = require('less-plugin-autoprefix')
const autoprefix = new LessAutoprefix({
    browsers: ['last 2 versions']
}); // 所有内核的浏览器往前兼容两个版本
const concat = require('gulp-concat');
const cssmin = require('gulp-cssmin');


gulp.task('jshint', function () {
    // 将你的任务的任务代码放在这
    return gulp.src('./src/js/*.js')
        .pipe(jshint({
            esversion: 6, //使用es6语法,
            asi: true, //可以不添加分号
            eqeqeq: true, // 必须使用 全等===
        }))
        .pipe(jshint.reporter('default')); // gulp插件中查看
});

gulp.task('babel', () =>
    gulp.src('./src/js/*.js')
    .pipe(babel({ //进行语法转换
        presets: ['@babel/env']
    }))
    .pipe(gulp.dest('build/js')) //输出到指定目录
);

gulp.task('browserify', function () {
    return gulp.src('./build/js/app.js')
        .pipe(browserify()) //将CommonJs语法转换为浏览器能识别的语法
        .pipe(rename('built.js')) //为了防止冲突将文件重命名
        .pipe(gulp.dest('build/js')) //输出到指定位置
});

gulp.task('uglify', function () {
    return gulp.src('build/js/built.js')
        .pipe(uglify()) //压缩js
        .pipe(rename('dist.min.js'))
        .pipe(gulp.dest('dist/js'))
});

gulp.task('less', function () {
    return gulp.src('./src/less/*.less')
        .pipe(less({
            plugins: [autoprefix] //自动扩展前缀
        }))
        .pipe(gulp.dest('./build/css'));
});
gulp.task('concat', function () {
    return gulp.src('./build/css/*.css')
        .pipe(concat('built.css'))
        .pipe(gulp.dest('./build/css'));
});

gulp.task('cssmin', function () {
    return gulp.src('build/css/built.css')
        .pipe(cssmin())
        .pipe(rename('dist.min.css'))
        .pipe(gulp.dest('dist/css'));
});
gulp.task('default', gulp.series('jshint', 'babel', 'browserify', 'uglify', 'less', 'concat','cssmin'))