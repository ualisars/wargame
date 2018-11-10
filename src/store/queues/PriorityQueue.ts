import Positions from "../AI/positions/Positions";

class PriorityQueue {
   private elements: any = [];
   private positionId: number = 1;

   insert(efficiency: number, positions: Positions) {
        this.elements.push({
            efficiency: efficiency,
            positions: positions,
            positionId: this.positionId
        });
        this.positionId += 1;
    }
    
    extractMax() {
        let max = this.elements[0];
        let maxIndex = 0;
        for(let i = 1; i < this.elements.length; ++i) {
            if(this.elements[i].efficiency > max.efficiency) {
                max = this.elements[i];
                maxIndex = i;
            }
        }
        this.elements = this.elements.filter((el: any) => {
            if(el.positionId === max.positionId) {
              return false;
            }
            return true;
        });
        return max;
    }

    isEmpty() {
        if(this.elements.length === 0) {
            return true;
        } else {
            return false;
        }
    }

    clearElements() {
        this.elements = [];
    }
}

export default PriorityQueue;