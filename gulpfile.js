var gulp = require('gulp');
var sass = require('gulp-sass');
var sassLint = require('gulp-sass-lint');


gulp.task('index', function () {
   gulp.src('src/index.html')
       .pipe(gulp.dest('dist'))
});

gulp.task('images', function () {
    gulp.src('src/img/*.jpg')
        .pipe(gulp.dest('dist/img'))
});

gulp.task('sass-lint', function () {
    return gulp.src(['src/**/*.scss'])
        .pipe(sassLint({
            options: {
                formatter: 'stylish'
            }
        }))
        .pipe(sassLint.format())
        .pipe(sassLint.failOnError())
});

gulp.task('sass',['sass-lint'], function () {
    gulp.src('src/main.scss')
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(gulp.dest('dist/css/'))
});

gulp.task('watch',function () {
    gulp.watch('src/index.html', ['index']);
    gulp.watch('src/**/*.scss', ['sass']);
});

gulp.task('vendor-css-bootstrap', function () {
    gulp.src('node_modules/bootstrap/dist/css/bootstrap.css')
        .pipe(gulp.dest('dist/css'));
});

gulp.task('vendor-js-bootstrap', function () {
    gulp.src('node_modules/bootstrap/dist/js/bootstrap.min.js')
        .pipe(gulp.dest('dist/js'));
});

gulp.task('vendor-js-jquery', function () {
    gulp.src('node_modules/jquery-custom/jquery.1/dist/jquery.min.js')
        .pipe(gulp.dest('dist/js'));
});


gulp.task('build', ['vendor-css-bootstrap', 'vendor-js-bootstrap', 'index', 'sass', 'images', 'vendor-js-jquery']);