class SimulationNodes {

    private maxSize: number = 1000;
    private top = -1;
    private elements: any[] = [];
   
    isEmpty() {
        if(this.top === -1) {
            return true;
        } else {
            return false;
        }
    }
    
    push(x: any) {
        if(this.top === this.maxSize) {
            return new Error('Stack overflow');
        } else {
            this.top += 1;
            this.elements[this.top] = x;
        }
    }

    moveTop(position: number) {
        if(position >= -1 && position <= this.maxSize) {
            this.top = position;
        }
    }

    pop() {
        if(this.isEmpty()) {
            return new Error('Stack underflow');
        } else {
            this.top -= 1;
            return this.elements[this.top + 1];
        }
    }
}

export default SimulationNodes;