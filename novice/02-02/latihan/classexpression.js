/**
 * 
 */

// unnamed
let RectangleClassUnnamed = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};
console.log(RectangleClassUnnamed.name);
// output: "Rectangle"

// named
let RectangleClassNamed = class RectangleNamed {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};
console.log(RectangleClassNamed.name);
// output: "Rectangle2"