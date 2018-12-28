import { initializeMap } from "../src/map/createMap/initialMap";

describe('initialize map', () => {
    initializeMap().then(
        () => {
            console.log('map initialized');
        }
    );
});
