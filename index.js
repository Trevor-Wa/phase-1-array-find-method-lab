function superbowlWin(record){
    let winRes = record.find(array => array.result === 'W')
    if (winRes){
        return winRes.year;
    }
}