//TODO изменить импорты, чтобы не импортить целый модуль, а только нужную часть
//TODO прописать для всех картинок width , height
//TODO допилить popup
//TODO gallery на prod выдает ошибку из-за того, что не понимает const, вот сука
//TODO уменьшить размер vendors
//TODO fix header
import headerFix from "../../blocks/header/header";
import { initSwiper } from "../../blocks/home/slider/slider";
import "../../blocks/header/header-popup/popup";
import mixitUp from "../../blocks/home/gallery/gallery";


headerFix();
initSwiper();
mixitUp();

