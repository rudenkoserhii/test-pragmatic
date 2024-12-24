import {
    faApple,
    faAirbnb,
    faPaypal,
    faGoogle,
    faAmazon,
    faSpotify,
    faYoutube,
    faVimeo,
    faUber,
    faAtlassian,
    faWaze,
    faMedium,
    faShopify,
    faUps,
    faDropbox,
    faPinterest,
    faCcVisa,
    faPlaystation,
    faXbox,
    faUpwork,
} from '@fortawesome/free-brands-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';


const iconMap: { [key: string]: FontAwesomeIconProps['icon'] } = {
    apple: faApple,
    airbnb: faAirbnb,
    paypal: faPaypal,
    google: faGoogle,
    amazon: faAmazon,
    spotify: faSpotify,
    youtube: faYoutube,
    vimeo: faVimeo,
    uber: faUber,
    atlassian: faAtlassian,
    waze: faWaze,
    medium: faMedium,
    shopify: faShopify,
    ups: faUps,
    dropbox: faDropbox,
    pinterest: faPinterest,
    'cc-visa': faCcVisa,
    playstation: faPlaystation,
    xbox: faXbox,
    upwork: faUpwork,
};

export const getIcon = (icon: string) => iconMap[icon.toLowerCase()] || faShoppingCart;