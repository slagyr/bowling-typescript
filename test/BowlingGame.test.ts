import {BowlingGame} from "../src/BowlingGame";


function rollMany(game: BowlingGame, rolls: number, pins: number) {
    for (let i = 0; i < rolls; i++) {
        game.roll(pins);
    }
}

let game = null;

describe("Bowling Game", () => {

    beforeEach(() => {
        game = new BowlingGame();
    })

    it("gutter game", () => {
        rollMany(game, 20, 0);
        expect(game.score()).toEqual(0);
    });

    it("all ones", () => {
        rollMany(game, 20, 1);
        expect(game.score()).toEqual(20);
    });

    it("spare", () => {
        rollMany(game, 3, 5);
        rollMany(game, 17, 0)
        expect(game.score()).toEqual(20);
    });

    it("strike", () => {
        game.roll(10);
        game.roll(2);
        game.roll(3);
        rollMany(game, 16, 0)
        expect(game.score()).toEqual(20);
    });


    it("all spares", () => {
        rollMany(game, 22, 5)
        expect(game.score()).toEqual(150);
    });

    it("perfect game", () => {
       rollMany(game, 12, 10)
       expect(game.score()).toEqual(300);
    });

    it("heart breaker", () => {
        rollMany(game, 11, 10)
        game.roll(9);
        expect(game.score()).toEqual(299);
    });

});

