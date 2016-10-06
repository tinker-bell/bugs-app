class UIUtils{
    
    static linkToPlayGame(puzzle){
        return '#/' + puzzle.level + '/' + puzzle.num + '/play';
    } 

    static linkToContinue(puzzle){
        return '#/' + puzzle.level + '/' + puzzle.num + '/continue';
    }
}

export default UIUtils;

