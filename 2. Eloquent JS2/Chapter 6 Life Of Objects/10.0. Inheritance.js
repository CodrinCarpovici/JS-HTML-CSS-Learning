/*
JavaScript’s prototype system makes it possible to create a new class,
much like the old class, but with new definitions for some of its 
properties. The prototype for the new class derives from the old prototype
but adds a new definition for, say, the set method.
In object-oriented programming terms, this is called inheritance. The
new class inherits properties and behavior from the old class.
*/

class Matrix {
    constructor(width, height, element = (x, y) => undefined) {
        this.width = width;
        this.height = height;
        this.content = [];

        for(let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                this.content[y * width + x] = element(x, y);
            }
        }
    }

    get(x, y) {
        return this.content[y * this.width + x];
    }
    set(x, y, value) {
        this.content[y * this.width + x] = value;
    }
}

class SymmetricMatrix extends Matrix {
/*
The use of the word extends indicates that this class shouldn’t be
directly based on the default Object prototype but on some other class.
This is called the superclass. The derived class is the subclass.
*/
    constructor(size, element = (x, y) => undefined) {
        super(size, size, (x, y) => {
            if (x < y) return element(y, x);
            else return element(x, y);
        });
    }
    set(x, y, value) {
        super.set(x, y, value);
        if(x != y) {
            super.set(y, x, value);
        }
    }
}

let matrix = new SymmetricMatrix(5, (x, y) => `${x},${y}`);
console.log(matrix.get(2, 3));
// → 3,2


