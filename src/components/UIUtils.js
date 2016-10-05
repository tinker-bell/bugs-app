class UIUtils{
    
    static linkToPlayGame(puzzle){
        return '#/' + puzzle.level + '/' + puzzle.num + '/play';
    } 

    static linkToReplay(puzzle){
        return '#/' + puzzle.level + '/' + puzzle.num + '/replay';
    }

    static linkToContinue(puzzle){
        return '#/' + puzzle.level + '/' + puzzle.num + '/continue';
    }
}

export default UIUtils;

