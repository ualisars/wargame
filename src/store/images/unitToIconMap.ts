import { swordIconImage, spearIconImage, spearAndShieldIconImage } from "./unitIconImages";

export let unitToIconMap:any;

export const fillUnitToIconMap = () => {
    unitToIconMap = {
        'Archers': swordIconImage,
        'HeavyCavalry': swordIconImage,
        'Hoplites': spearAndShieldIconImage,
        'LightCavalry': swordIconImage,
        'LightInfantry': swordIconImage,
        'HeavyInfantry': swordIconImage,
        'Militia': swordIconImage,
        'Peltasts': swordIconImage,
        'Pikemen': spearIconImage,
        'Scouts': swordIconImage
    }
}