import Image from "next/image";

import clipboard from "../../assets/pictures/icons/clipboard-icon.png";
import chat from "../../assets/pictures/icons/dark-chat-icon.png";
import diamond from "../../assets/pictures/icons/diamond-icon.png";
import mail from "../../assets/pictures/icons/mail-icon.png";
import upArrow from "../../assets/pictures/icons/up-arrow-icon.png";

import js from "../../assets/pictures/logos/js-logo.png";
import illustrator from "../../assets/pictures/logos/ai_icon.png";
import css from "../../assets/pictures/logos/css3-logo.png";
import eclipse from "../../assets/pictures/logos/eclipse-logo.png";
import figma from "../../assets/pictures/logos/figma-logo.png";
import gitHub from "../../assets/pictures/logos/github-logo.png";
import html from "../../assets/pictures/logos/html5-logo.png";
import java from "../../assets/pictures/logos/java-logo.png";
import linkedin from "../../assets/pictures/logos/linkedin-logo.png";
import nextjs from "../../assets/pictures/logos/nextjs-icon.png";
import php from "../../assets/pictures/logos/php-logo.png";
import reactjs from "../../assets/pictures/logos/reactjs-logo.png";
import sass from "../../assets/pictures/logos/sass-logo.png";
import vscode from "../../assets/pictures/logos/vscode-logo.png";
import jira from "../../assets/pictures/logos/jira-logo.png";
import sql from "../../assets/pictures/logos/sql-logo.png";
import tailwind from "../../assets/pictures/logos/tailwindcss-mark.svg";

/**Return the next component 'image' with path that point to the right path.
 * 
 * @param {Object} describingText
 * @param {String} describingText.toolName Tool name to return the right image.
 * @returns {import("react").ReactElement}
 */
export function ChooseTheRightLogo({toolName}) {
    let formattedTextToTest = toolName.toLowerCase().replaceAll(".", "");
    let imagePath;

    switch (formattedTextToTest) {
        case "html":
            imagePath = html;
            break;
        case "css":
            imagePath = css;
            break;
        case "javascript":
            imagePath = js; 
            break;
        case "scss":
            imagePath = sass;
            break;
        case "php":
            imagePath = php;
            break;
        case "java":
            imagePath = java;
            break;
        case "sql":
            imagePath = sql;
            break;
    // Frameworks part
        case "reactjs":
            imagePath = reactjs;
            break;
        case "nextjs":
            imagePath = nextjs;
            break;
        case "tailwind css":
            imagePath = tailwind;
            break;
    // Tools part
            case "vs code":
            imagePath = vscode;
            break;
            case "github":
            imagePath = gitHub;
            break;
            case "figma":
            imagePath = figma;
            break;
            case "illustrator":
            imagePath = illustrator;
            break;
            case "ide eclipse":
            imagePath = eclipse;
            break;
            case "jira":
            imagePath = jira;
            break;
        
        default:
            imagePath = html;
            break;
    }
    
    return <Image src={imagePath} alt={`Logo de ${toolName}`} className={`h-8 rounded-xl ${imagePath == java ? "w-6" : "w-8"}`} width={35} height={35}/>
}

/**
 * 
 * @param {Object} param0 
 * @param {String} param0.sectionName
 */
export function SearchTheRightIcon({sectionName}) {
    let iconPath;
    let formattedsectionTextToTest = sectionName.toLowerCase();
    switch (formattedsectionTextToTest) {
        case "compétences":
            iconPath = diamond;
            break;
        case "projets":
            iconPath = clipboard;
            break;
        default:
            break;
    }

    return <Image src={iconPath} alt={`Logo de ${sectionName}`} className={`h-6 w-6`} width={35} height={35}/>
}