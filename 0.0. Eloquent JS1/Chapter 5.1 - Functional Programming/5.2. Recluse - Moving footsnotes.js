function extractFootnotes(paragraphs) {
    var footnotes = [];
    var currentNote = 0;

    function replaceFootnote(fragment) {
        if (fragment.type == "footnote") {
            currentNote++;
            footnotes.push(fragment);
            fragment.number =currentNote;
            return {type: "reference", number: currentNote};
        }
        else {
            return fragment;
        }
    }

    forEach(paragraphs, function(paragraph) {
        paragraph.content = map(replaceFootnote, paragraph.content);
    });

    return footnotes;
}