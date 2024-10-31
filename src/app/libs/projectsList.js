import BookiSiteScreen from "../../assets/pictures/images/screen_site_booki.png";
import portfolioSiteScreeshot from "../../assets/pictures/images/screenshot_site_portfolio.png";
import dgtSaasScreeshot from "../../assets/pictures/images/dgt_calculator.png";
import canoeForSaleScreen from "../../assets/pictures/images/canoe_for_sale.png";

export const PROJECTS_LIST = [
    {
        title: 'booki',
        desc: "Site fictif de recherche d'hébergement",
        src: BookiSiteScreen,
        path: "/booki",
    }, {
        title: 'portfolio',
        desc: "Site portfolio",
        src: portfolioSiteScreeshot,
        path: "/portfolio",
    }, {
        title: 'DGT Calculator',
        desc: "SaaS qui calcule la concentration de micropolluants",
        src: dgtSaasScreeshot,
        path: "/saas-dgt",
    }, {
        title: 'Canoe for sale',
        desc: "Plateforme de vente de canoës-kayaks",
        src: canoeForSaleScreen,
        path: "/canoe-for-sale",
    },
    
];