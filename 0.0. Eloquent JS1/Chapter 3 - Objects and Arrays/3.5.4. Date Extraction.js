//Date Extraction

function extractDate(paragraph) {
    function numberAt(start, length) {
        return Number(paragraph.slice(start, start + length));
    }
    return new Date(numberAt(11, 4), numberAt(8, 2) + 1, numberAt(5, 2));
}

