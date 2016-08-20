var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('index', function () {
   gulp.src('src/index.html')
       .pipe(gulp.dest('dist'))
});

gulp.task('sass', function () {
    gulp.src('src/main.scss')
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(gulp.dest('dist/css/'))
});

gulp.task('watch',function () {
    gulp.watch('src/index.html', ['index']);
    gulp.watch('src/**/*.scss', ['sass']);
});

gulp.task('build', ['index', 'sass']);