const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
const gcmq = require('gulp-group-css-media-queries');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rigger = require('gulp-rigger');


const config = {
    src: './',
    css: {
        watch: './app/sass/**/*.+(sass|scss)',
        src: './app/sass/styles.sass',
        dest: './css'
    },
    html: {
        src: '*.html'
    },
    js: {
        src: './js',
        watch: './app/js/**/*.js'
    }
};

gulp.task('sass', function () {
    gulp.src(config.src + config.css.src)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(gcmq())
        .pipe(autoprefixer({
            browsers: ['> 0.1%'],
            cascade: false
        }))
        .pipe(cleanCSS({
            level: 0
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.src + config.css.dest))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('watch', ['browserSync', 'sass'], function () {
    gulp.watch(config.src + config.html.src, browserSync.reload);
    gulp.watch(config.src + config.css.watch, ['sass']);
    gulp.watch(config.src + config.js.watch, ['scripts']);
});

gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: config.src
        }
    });
});

gulp.task('scripts', function () {
    return gulp.src([
        "./app/js/main.js"
    ])
        .pipe(rigger())
        .pipe(concat('scripts.min.js'))
        //.pipe(uglify())
        .pipe(gulp.dest('./js'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('build', ['sass', 'scripts'], function() {

    var buildFiles = gulp.src([
        '*.html',
        '.htaccess',
    ]).pipe(gulp.dest('dist'));

    var buildCss = gulp.src([
        './css/styles.css',
    ]).pipe(gulp.dest('dist/css'));

    var buildJs = gulp.src([
        './js/scripts.min.js',
    ]).pipe(gulp.dest('dist/js'));

    var buildFonts = gulp.src([
        './fonts/**/*',
    ]).pipe(gulp.dest('dist/fonts'));
    var buildFonts = gulp.src([
        './images/**/*',
    ]).pipe(gulp.dest('dist/images'));

});

// gulp.task('removedist', function() { return del.sync('dist'); });
// gulp.task('clearcache', function () { return cache.clearAll(); });