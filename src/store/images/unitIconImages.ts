import { loadImage } from "../../utils";
import { units } from "../unit/units";
import { moveIconSrc, fightIconSrc } from "../../UI/battleUI/unitPanel/icon/iconSettings";

export let unitIconImages: any = {};
export let movementIconImage: any;
export let fightIconImage: any;

export const loadIcons = () => {
    loadFightIconImage();
    loadMovementIconImage();
}

export const loadUnitIcons = () => {
    return new Promise(resolve => {
        loadUnitIconImages().then(() => {
            resolve();
        });
    });
}

const loadMovementIconImage = () => {
    loadImage(moveIconSrc, (err: any, img: any) => {
        movementIconImage = img;
        
    });
}

const loadFightIconImage = () => {
    loadImage(fightIconSrc, (err: any, img: any) => {
        fightIconImage = img;
    });
}

const loadUnitIconImages = (i: number = 0) => {
    return new Promise(resolve => {
        if(i === units.length) {
            resolve();
        }
        loadImage(units[i].imgSrc, (err: any, img: any) => {
            unitIconImages[units[i].name] = img;
            resolve(loadUnitIconImages(i + 1));
        });
    });
}

