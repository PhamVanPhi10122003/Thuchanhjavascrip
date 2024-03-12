//Functional inheritance
class square {
    constructor (width){
        this.width = width;
    }
    getArea(){
        document.write('Square of this ${this.width * this.width}');
        return this.width * this.width;
    }
}

class cube extends square {
    constructor(width) {
        super(width);
    }

    squareArea = this.getArea();
    getvolume(){
        document.write('Volume  of this ${this.squareArea + this.witdh}');
        return this.squareArea * this.width;
    }
}
var mycube = new cube(5);
mycube.getvolume();