export class ColourDefinition {
    _red: number;
    _green: number;
    _blue: number;

    constructor(red:number, green: number, blue: number){
        this._red = red;
        this._green = green;
        this._blue = blue;

        console.log("in colour def constructor");
        console.log(this._blue);
    }

    toString(): string{
        console.log("tostring is returning");
        console.log("" + 
        this._red + 
        this._green +
        this._blue)
        return "" + 
            this._red + 
            this._green +
            this._blue
    }

    scaleInt(num: number){
        return num / 10 * 255;
    }

    getRed(){
        return this.scaleInt(this._red);
    }

    getBlue(){
        return this.scaleInt(this._blue);
    }
    getGreen(){
        return this.scaleInt(this._green);
    }

    toColourString():string{
        var r = this.getRed();
        var g= this.getGreen();
        var b = this.getBlue();
        return `rgb(${r},${g},${b})`;
    
    }
}