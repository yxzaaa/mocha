// ���� gulp
var gulp = require('gulp');

// �������
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// ���ű�
gulp.task('hint', function() {
    gulp.src('./js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// ����Sass
gulp.task('sass', function() {
    gulp.src('./scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'));
});

// �ϲ���ѹ���ļ�
gulp.task('scripts', function() {
    gulp.src(['./js/jquery.js', './js/index.js'])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist'));
});

// Ĭ������
gulp.task('default', function(){
    gulp.run('sass', 'scripts');

    // �����ļ��仯
    gulp.watch('./js/*.js', function(){
        gulp.run('sass', 'scripts');
    });
});