import replace from "gulp-replace"; //поиск и замена
import plumber from "gulp-plumber"; //Оброботка ошибок
import notify from "gulp-notify"; //Сообщения подсказки
import browsersync from "browser-sync"; //Локальный сервер
import newer from "gulp-newer"; // Проверка обновления картинок ВебП
import ifplugin from "gulp-if"; // условное ветление


//Экспортируем обьект
export const plugins = {
    replace:replace,
    plumber:plumber,
    notify:notify,
    browsersync:browsersync,
    newer:newer,
    if:ifplugin
}