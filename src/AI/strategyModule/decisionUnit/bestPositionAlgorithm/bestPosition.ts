import { computerUnits } from "../../../../store/unit/units";
import { initialMap } from "../../../../map/createMap/initialMap";
import PriorityQueue from "../../../../store/queues/PriorityQueue";


export const bestPosition = () => {
    let positionsQueue = new PriorityQueue();
    for(let unit of computerUnits) {
        for(let node of initialMap) {
            
            positionsQueue.insert
        }
    }
}

const addAllUnitPositions = () => {

}