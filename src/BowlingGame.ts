export class BowlingGame {

    rolls: Array<number>;

    constructor() {
        this.rolls = [];
    }

    roll(pins: number) {
        this.rolls.push(pins);
    }

    score(): number {
        let score = 0;
        let i = 0;
        for (let frame = 0; frame < 10; frame++) {
            if (this.isStrike(i)) {
                i += 1
                score += 10 + this.scoreForFrame(i);
            } else if (this.isSpare(i)) {
                score += 10 + this.rolls[i + 2];
                i += 2;
            } else {
                score += this.scoreForFrame(i);
                i += 2;
            }

        }
        return score;
    }

    private scoreForFrame(i: number) {
        return this.rolls[i] + this.rolls[i + 1];
    }

    private isSpare(i: number) {
        return this.scoreForFrame(i) == 10;
    }

    private isStrike(i: number) {
        return this.rolls[i] == 10;
    }
}
