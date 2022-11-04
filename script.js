class Square {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.pos = [x, y];
        this.move1 = this.pos1();
        this.move2 = this.pos2();
        this.move3 = this.pos3();
        this.move4 = this.pos4();
        this.move5 = this.pos5();
        this.move6 = this.pos6();
        this.move7 = this.pos7();
        this.move8 = this.pos8();
    }

    pos1(x = this.x, y = this.y) {
        // 1,2 🠆🠅🠅 ⮭

        if (x + 1 < 8 && y + 2 < 8) {
            let newX = x + 1;
            let newY = y + 2;
            return (this.move1 = [newX, newY]);
        }
        return null;
    }

    pos2(x = this.x, y = this.y) {
        // 2,1 🠆🠆🠅 ⮫

        if (x + 2 < 8 && y + 1 < 8) {
            let newX = x + 2;
            let newY = y + 1;
            return (this.move2 = [newX, newY]);
        }
        return null;
    }

    pos3(x = this.x, y = this.y) {
        // 2,-1  🠆🠆🠇 ⮩

        if (x + 2 < 8 && y - 1 > -1) {
            let newX = x + 2;
            let newY = y - 1;
            return (this.move3 = [newX, newY]);
        }
        return null;
    }

    pos4(x = this.x, y = this.y) {
        // 1,-2  🠆🠇🠇 ⮯

        if (x + 1 < 8 && y - 2 > -1) {
            let newX = x + 1;
            let newY = y - 2;
            return (this.move4 = [newX, newY]);
        }
        return null;
    }

    pos5(x = this.x, y = this.y) {
        // -1,-2  🠄🠇🠇 ⮮

        if (x - 1 > -1 && y - 2 > -1) {
            let newX = x - 1;
            let newY = y - 2;
            return (this.move5 = [newX, newY]);
        }
        return null;
    }

    pos6(x = this.x, y = this.y) {
        // -2,-1  🠄🠄🠇 ⮨

        if (x - 2 > -1 && y - 1 > -1) {
            let newX = x - 2;
            let newY = y - 1;
            return (this.move6 = [newX, newY]);
        }
        return null;
    }

    pos7(x = this.x, y = this.y) {
        // -2,1  🠄🠄🠅 ⮪

        if (x - 2 > -1 && y + 1 < 8) {
            let newX = x - 2;
            let newY = y + 1;
            return (this.move7 = [newX, newY]);
        }
        return null;
    }

    pos8(x = this.x, y = this.y) {
        // -1,2  🠄🠅🠅 ⮬

        if (x - 1 > -1 && y + 2 < 8) {
            let newX = x - 1;
            let newY = y + 2;
            return (this.move8 = [newX, newY]);
        }
        return null;
    }
}

const gameboard = () => {
    // let gbx = 8;
    // let gby = 8;
    for (let y = 7; y > -1; y--) {
        // console.log(y);
        let arr = [];
        let objArr = [];
        for (let x = 0; x < 8; x++) {
            // let square = [x, y];
            arr.push(`${x},${y}`);
            // arr.push(square);
            let newSqr = new Square(x, y);
            objArr.push(newSqr);
            // console.log(newSqr);
        }
        // console.log(arr); // visual chessboard with x,y coordinates
        console.log(objArr);
    }
};

gameboard();
