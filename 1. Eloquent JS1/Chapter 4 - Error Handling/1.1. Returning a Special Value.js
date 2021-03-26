function between(string, start, end) {
    var startAt = string.indexOf(start);
    if (startAt == -1) //we check wheter the value is not a string and adjust 
        return undefined;
    startAt += start.length;

    var endAt = string.indexOf(end, startAt);
    if (endAt == -1)
        return undefined;

    return string.slice(startAt, endAt);
}