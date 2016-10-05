import Puzzle from '../Puzzle'

test('Puzzle.getByLevel', () => {
    var test = function (level) {
        var puzzles = Puzzle.getByLevel(level);
        // check uniqueness of puzzle numbers
        expect(new Set(puzzles.map(x => x.num)).size).toBe(puzzles.length);
        puzzles.forEach(x=> expect(x.level).toBe(level))
    }

    test(Puzzle.level.beginner);
    test(Puzzle.level.master);
    test(Puzzle.level.expert);
});


test('Puzzle.isValidLevel', () => {
    expect(Puzzle.isValidLevel('beginner')).toBe(true);
    expect(Puzzle.isValidLevel('master')).toBe(true);
    expect(Puzzle.isValidLevel('expert')).toBe(true);
    expect(Puzzle.isValidLevel('other')).toBe(false);
    expect(Puzzle.isValidLevel(undefined)).toBe(false);
    expect(Puzzle.isValidLevel(null)).toBe(false);
});

test('Puzzle.isValidPuzzleNumber', () => {
    var test = function (level) {
        expect(Puzzle.isValidPuzzleNumber(level, 1)).toBe(true);
        expect(Puzzle.isValidPuzzleNumber(level, '1')).toBe(true);
        expect(Puzzle.isValidPuzzleNumber(level, '500')).toBe(false);
        expect(Puzzle.isValidPuzzleNumber(level, '-1')).toBe(false);
        expect(Puzzle.isValidPuzzleNumber(level, '0')).toBe(false);
        expect(Puzzle.isValidPuzzleNumber(level, 'xxx')).toBe(false);
        expect(Puzzle.isValidPuzzleNumber(level, null)).toBe(false);
        expect(Puzzle.isValidPuzzleNumber(level, undefined)).toBe(false);
    }

    test(Puzzle.level.beginner);
    test(Puzzle.level.master);
    test(Puzzle.level.expert);

    expect(Puzzle.isValidPuzzleNumber('xxx', '1')).toBe(false);
});

