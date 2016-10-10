import Puzzle from '../models/Puzzle'
import Games from '../models/Games'

class UIUtils {

    static linkToRestartGame(puzzle) {
        return puzzle ? '#/' + puzzle.level + '/' + puzzle.num + '/' + Games.action.restart : null;
    }

    static linkToPlayGame(puzzle) {
        return puzzle ? '#/' + puzzle.level + '/' + puzzle.num : null;
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

