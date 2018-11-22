import Positions from "../AI/positions/Positions";
import Commands from "../AI/commands/Commands";

class CommandQueue {
   private elements: any = [];
   private commandId: number = 1;

   insert(efficiency: number, commands: Commands) {
        this.elements.push({
            efficiency: efficiency,
            commands: commands,
            commandId: this.commandId,
        });
        this.commandId += 1;
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
            if(el.commandId === max.commandId) {
              return false;
            }
            return true;
        });
        return max.commands;
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

export default CommandQueue;