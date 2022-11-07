class Square {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.pos = this.currPos();
        this.move1 = this.pos1();
        this.move2 = this.pos2();
        this.move3 = this.pos3();
        this.move4 = this.pos4();
        this.move5 = this.pos5();
        this.move6 = this.pos6();
        this.move7 = this.pos7();
        this.move8 = this.pos8();
        this.start = null;
        this.end = null;
        this.prev = null;
    }

    currPos(x = this.x, y = this.y) {
        let position = [x, y];
        return position;
    }

    pos1(x = this.x, y = this.y) {
        // 1,2 🠆🠅🠅 ⮭

        if (x + 1 < 8 && y + 2 < 8) {
            let newX = x + 1;
            let newY = y + 2;
            return (this.move1 = [newX, newY]);
            // return (this.pos = [newX, newY]);
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

    knightMoves([x, y], [endX, endY]) {
        let knight = new Square(x, y);
        let begin = [x, y];
        let target = [endX, endY];

        knight.start = begin;
        knight.pos = begin;
        knight.end = target;
        console.log(knight.start);

        function finished() {
            if (x === endX && y === endY) {
                // if begin === target
                // if at target
                // console.log(begin);
                console.log(knight.end);
                console.log("done");
                return "done";
            }
        }

        finished();
        // console.log(finished());
        // if (x === endX && y === endY) {
        //     // if at target
        //     // console.log(begin);
        //     console.log(this.end);
        //     return console.log("done");
        // } else
        if (finished() === "done") {
            console.log("path found");
        } else if (finished() !== "done") {
            // knight.counter++;
            // console.log(knight.counter);
            if (endX - x >= 0) {
                //1234
            } else {
                //5678
            }
            // }
            // } else if (x + 1 === endX && y + 2 === endY) {
            // if 1 move away
            // let xx = x + 1;
            // let yy = y + 2;
            // knight.x = xx;
            // knight.y = yy;
            // knight.pos = [xx, yy];
            // console.log("pos1");
            // console.log(knight.pos);
            // console.log(knight.move1);
            // console.log(knight.move8);
            console.log(knight);
            let possibleMoves = [
                knight.move1,
                knight.move2,
                knight.move3,
                knight.move4,
                knight.move5,
                knight.move6,
                knight.move7,
                knight.move8,
            ];
            console.log(possibleMoves);

            let onlyMovesQueue = [];
            for (let i = 0; i < possibleMoves.length; i++) {
                // console.log(possibleMoves[i]);
                // console.log(possibleMoves);
                if (possibleMoves[i] !== null) {
                    console.log(`move ${i + 1} is possible`);
                    // let newX = possibleMoves[i][0];
                    // let newY = possibleMoves[i][1];
                    onlyMovesQueue.push(possibleMoves[i]);
                    // knight.pos = [newX, newY];
                    // let newRoot = knight.pos;
                    // console.log(newRoot);
                    // console.log(onlyMovesQueue);
                    // return this.knightMoves(newRoot, target);
                }
            }
            if (onlyMovesQueue !== []) {
                for (let i = onlyMovesQueue.length; i > 0; i--) {
                    // console.log(onlyMovesQueue[i]);

                    // console.log(`move ${i + 1} is possible`);
                    let newX = onlyMovesQueue[i - 1][0];
                    let newY = onlyMovesQueue[i - 1][1];
                    // onlyMovesQueue.push(possibleMoves[i]);
                    let firstMove = onlyMovesQueue.pop(); //[i - 1]; //.shift();
                    console.log(firstMove);
                    knight.pos = [newX, newY];
                    let newRoot = knight.pos;
                    console.log(newRoot);
                    console.log(knight.pos);
                    // console.log(onlyMovesQueue);
                    // return this.knightMoves(newRoot, target);
                    if (onlyMovesQueue.length > 0) {
                        // console.log(newRoot);
                        // return onlyMovesQueue[i - 1];
                        // return this.knightMoves(newRoot, target);
                    }
                }
            }
            // if (knight.move1 !== null) {
            //     console.log("move1 available");
            //     let newX = knight.move1[0];
            //     let newY = knight.move1[1];
            //     knight.pos = [newX, newY];
            //     let newRoot = knight.pos;
            //     // console.log(knight.pos);
            //     console.log(newRoot);
            //     return this.knightMoves(newRoot, target);
            // }
            // if (knight.move2 !== null) {
            //     console.log("move2 available");
            //     let newX = knight.move2[0];
            //     let newY = knight.move2[1];
            //     knight.pos = [newX, newY];
            //     let newRoot = knight.pos;
            //     console.log(newRoot);
            //     return this.knightMoves(newRoot, target);
            // }
            return knight.pos;
        }
    }
}

class Game {
    constructor() {
        this.game = this.gameboard();
    }
    gameboard() {
        // let gbx = 8;
        // let gby = 8;
        for (let y = 7; y > -1; y--) {
            // console.log(y);
            let arr = [];
            let objArr = [];
            for (let x = 0; x < 8; x++) {
                // let square = [x, y];
                arr.push(`[${x},${y}]`);
                // arr.push(square);
                let newSqr = new Square(x, y);
                objArr.push(newSqr);
                // console.log(newSqr);
            }
            // console.log(arr); // visual chessboard with x,y coordinates
            console.log(objArr);
        }
    }
}

let game1 = new Game();
// game1.gameboard();

// class Knight {
//     constructor(x, y) {
//         // this.pos = [x, y];
//         this.start = [x, y];
//         this.end = null;
//     }

//     knightMoves([x, y], [newX, newY]) {
//         let knight = new Knight(x, y);
//         let begin = [x, y];
//         let target = [newX, newY];
//         this.start = begin;
//         this.end = target;

//         if (x === newX && y === newY) {
//             // console.log(begin);
//             console.log(this.end);
//             return console.log("done");
//         }
//     }
// }

let knight1 = new Square(0, 0);

// knight1.knightMoves([0, 0], [0, 0]);
knight1.knightMoves([7, 7], [6, 5]);
// knight1.knightMoves([0, 0], [2, 1]);
// knight1.knightMoves([0, 0], [3, 3]);
// knight1.knightMoves([0, 0], [4, 4]);
// knight1.move1;
// console.log(knight1.move1[1]);
