import {Arr} from '../Utils'

class Puzzle {

    static getByLevel(level) {
        var result = [];
        Puzzle.storage.forEach(function (value, key, map) {
            if (value.level === level) {
                result.push(value);
            }
        });
        return result;

    }

    static get(level, puzzleNumber) {
        return Puzzle.getById(Puzzle.getId(level, puzzleNumber));
    }

    static getById(id) {
        return Puzzle.storage.get(id);
    }

    static getId(level, puzzleNumber) {
        return level + "-" + puzzleNumber;
    }

    static createModel(level, num, labels) {
        return {
            level: level,
            num: num,
            labels: labels,
            id: Puzzle.getId(level, num),
        }
    }

    static isValidLevel(level) {
        //return Boolean(level) && typeof Object.keys(Puzzle.level).find((value, index) => value === level) !== 'undefined';
        return Boolean(level) && Arr.contains(Object.keys(Puzzle.level), x => Puzzle.level[x] === level);
    }



    static isValidPuzzleNumber(level, puzzleNumber) {
        return Boolean(puzzleNumber) && Puzzle.isValidLevel(level) && Arr.contains(Puzzle.getByLevel(level), x => x.num == puzzleNumber);
            //typeof Puzzle.getByLevel(level).find(x => x.num == puzzleNumber) !== 'undefined';
    }
}

Puzzle.level = {
    beginner: 'beginner',
    master: 'master',
    expert: 'expert',
}

Puzzle.storage = new Map();
Puzzle.storage.set("beginner-1", Puzzle.createModel(Puzzle.level.beginner, 1, ["A", "B"]));
Puzzle.storage.set("beginner-2", Puzzle.createModel(Puzzle.level.beginner, 2, ["A", "C"]));
Puzzle.storage.set("beginner-3", Puzzle.createModel(Puzzle.level.beginner, 3, ["C", "D"]));
Puzzle.storage.set("beginner-4", Puzzle.createModel(Puzzle.level.beginner, 4, ["E", "G"]));

Puzzle.storage.set("master-1", Puzzle.createModel(Puzzle.level.master, 1, ["A", "B", "D"]));
Puzzle.storage.set("master-2", Puzzle.createModel(Puzzle.level.master, 2, ["A", "C", "E"]));
Puzzle.storage.set("master-3", Puzzle.createModel(Puzzle.level.master, 3, ["C", "D", "F"]));

Puzzle.storage.set("expert-1", Puzzle.createModel(Puzzle.level.expert, 1, ["A", "B", "D", "E"]));
Puzzle.storage.set("expert-2", Puzzle.createModel(Puzzle.level.expert, 2, ["A", "C", "E", "F"]));
Puzzle.storage.set("expert-3", Puzzle.createModel(Puzzle.level.expert, 3, ["C", "D", "F", "G"]));

export default Puzzle;