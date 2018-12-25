import Positions from "../AI/positions/Positions";


class PriorityQueue {
    private elements: any = []
    insert(key: any, priority: Number) {
        this.elements.push({
            key: key,
            value: priority
        });
    }

    update(key: any, newPriority: Number) {
        for(let element of this.elements) {
            if(element.key == key) {
                element.value = newPriority; 
            }
        }
    }

    extractMax() {
        let max = this.elements[0];
        let maxIndex = 0;
        for(let i = 1; i < this.elements.length; ++i) {
            if(this.elements[i].value > max.value) {
                max = this.elements[i];
                maxIndex = i;
            }
        }
        this.elements = this.elements.filter((el: any) => {
            if(el.key === max.key) {
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
}

export default PriorityQueue;