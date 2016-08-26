var gulp = require('gulp');
var sass = require('gulp-sass');
var sassLint = require('gulp-sass-lint');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');

gulp.task('index', function () {
   gulp.src('src/index.html')
       .pipe(gulp.dest('dist'))
});

gulp.task('images-jpg', function () {
    gulp.src('src/img/**/*')
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

gulp.task('autoprefixer', function () {
    return gulp.src('./dist/css/main.css')
        .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
        .pipe(gulp.dest('./dist'));
});

gulp.task('sass',['sass-lint'], function () {
    gulp.src('src/main.scss')
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
        .pipe(gulp.dest('./dist/css'))
    .pipe(gulp.dest('dist/css/'))
});

gulp.task('watch',function () {
    gulp.watch('src/index.html', ['index']);
    gulp.watch('src/**/*.scss', ['sass']);
});

gulp.task('vendor-libraries', function () {
    gulp.src('node_modules/bootstrap/dist/css/bootstrap.css')
        .pipe(gulp.dest('dist/css'));
    gulp.src('node_modules/bootstrap/dist/js/bootstrap.min.js')
        .pipe(gulp.dest('dist/js'));
    gulp.src('node_modules/jquery/dist/jquery.min.js')
        .pipe(gulp.dest('dist/js'));
});


gulp.task('build', ['vendor-libraries', 'index', 'sass', 'images-jpg']);