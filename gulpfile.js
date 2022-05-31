// Папка исходника
let source_folder = "#src";

// Папка продакшена
let project_folder = "dist";

// Пути к файлам и папкам
let path = {
    // Пути к папкам продакшена
    build: {
        html: project_folder + "/",
        css: project_folder + "/css/",
        js:  project_folder + "/js/",
        img:  project_folder + "/img/",
        fonts:  project_folder + "/fonts/",
    },
    // Пути до исходников
    src: {
        html: source_folder + "/*.html",
        css: source_folder + "/scss/style.scss",
        js:  source_folder + "/js/script.js",
        img:  source_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
        fonts:  source_folder + "/fonts/*.ttf",
    },
    // Пути до файлов, за изменениями которых нужно следить
    watch: {
        html: source_folder + "/**/*.html",
        css: source_folder + "/scss/**/*.scss",
        js:  source_folder + "/js/**/*.js",
        img:  source_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
    },
    // Путь к папке проекта, которую нужно удалять каждый раз при запуске
    clean: "./" + project_folder + "/",
};

// Команды для задач
let { src, dest } = require('gulp'),
    gulp = require ('gulp'),
    browsersync = require("browser-sync").create(),
    fileinclude = require("gulp-file-include");

// Live-сервер для разработки
function browserSync () {
    browsersync.init ({
        server:{
            baseDir: "./" + project_folder + "/"
        },
        port:3000,
        notify:false
    })
};

// Копируем файлы html из #src в dist
function html() {
    return src(path.src.html)
        .pipe(fileinclude())
        .pipe(dest(path.build.html))
        .pipe(browsersync.stream())
};

let build = gulp.series(html);
let watch = gulp.parallel(build, browserSync);


exports.default = watch;
exports.watch = watch;
exports.build = build;
exports.html = html;
