import Puzzle from '../models/Puzzle'

class UIUtils {

    static linkToPlayGame(puzzle) {
        return '#/' + puzzle.level + '/' + puzzle.num + '/play';
    }

    static linkToContinue(puzzle) {
        return '#/' + puzzle.level + '/' + puzzle.num + '/continue';
    }

    static puzzleTitle(puzzle) {
        switch (puzzle.level) {
            case Puzzle.level.beginner:
                return "Простое задание " + puzzle.num;
            case Puzzle.level.master:
                return "Трудное задание " + puzzle.num;
            default:
                return "Очень сложное задание " + puzzle.num;
        }

    }
}

export default UIUtils;

