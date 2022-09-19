//TODO изменить импорты, чтобы не импортить целый модуль, а только нужную часть
//TODO gallery на prod выдает ошибку из-за того, что не понимает const, вот сука
//TODO уменьшить размер vendors
//TODO fix header
// TODO не работает data-src не видит в Prod
import headerFix from "../../blocks/header/header";
import { initSwiper } from "../../blocks/home/slider/slider";
import "../../blocks/home/popup/popup";
import mixitUp from "../../blocks/home/gallery/gallery";


headerFix();
initSwiper();
mixitUp();
