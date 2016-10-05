import Puzzle from '../models/Puzzle';

class Validation{
    isLevelValid(level){
        (!Puzzle.isValidLevel(level))
    }
}

export default Validation;