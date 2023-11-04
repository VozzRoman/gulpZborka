/*
(i) Код попадает в итоговый файл, только когда вызвана фунция,
например flsFunction.spoller();
или когда импортирован весь файл, например import "files/script.js";
Неиспользуемый (не вызванный) в код не попадает
Для того что бы добавить файл или модуль нужно его расскоментировать.
*/

//Подключение основного фалф js
import "./modules/jquery-3.6.0.min.js";
//Подключение плагинов_______________________________________________


import * as flsfunctions from "./modules/functions.js";

//Проверка потдержка Webp---------------------
flsfunctions.isWebp();

//Бургер--------------------------------------
flsfunctions.menuBurger();

//imgIbg Адаптив картинок---------------------
//flsfunctions.imgIbg();

//Табы для меню-------------------------------
//flsfunctions.tabsMenu();

//SwiperSlider--------------------------------

//import "./modules/swiper.min.js";

//flsfunctions.swiperSlider();

//Аккордион - Спойлер-------------------------

//flsfunctions.accordinoSpiler();

//Динамический адаптив------------------------
//import "./modules/DynamicAdapt.js";

//PopUpMenu-----------------------------------

//flsfunctions.popUpMenu();





 
