export default class Strategy {

    private offensive: number = 0; // show how offensive AI should behave
    private defensive: number = 0; // show how defensive AI should behave
    private pace: number = 0; // show the pace (low point is slow, high pont - fast)
    private separation: number = 0; // how close AI will position its units

    constructor(offensive:number=0, defensive:number=0, pace:number=0, separation:number=0) {
        this.offensive = offensive;
        this.defensive = defensive;
        this.pace = pace;
        this.separation = separation;
    }

    setOffensivePoints = (points: number) => {
        if(points > 0 && points <= 100) {
           this.offensive = points;
        }
    }

    setDefensivePoints = (points: number) => {
        if(points > 0 && points <= 100) {
           this.defensive = points;
        }
    }

    setPacePoints = (points: number) => {
        if(points > 0 && points <= 100) {
           this.pace = points;
        }
    }

    setSeparationPoints = (points: number) => {
        if(points > 0 && points <= 100) {
           this.separation = points;
        }
    }

    getOffensivePoints() {
        return this.offensive;
    }

    getDefensivePoints() {
        return this.defensive;
    }

    getPacePoints() {
        return this.pace;
    }

    getSeparationPoints() {
        return this.separation;
    }
}