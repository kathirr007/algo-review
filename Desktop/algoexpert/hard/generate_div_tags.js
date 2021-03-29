//General Div Tags
//Recursion

//my understanding 
//we are going to get one input this input is going to represent how many div tags all our outputs strings must contain
//a div tag is an opening tag and closing tag
//so if numberoftags = 3, we need three opening and three closing tags
//we need match tags as well, with every opening tag we need a closing tag to come right after, no two consecutive opening / closing tags
//more tags more arrangements more hard it gets
//we will recursively generate all of the strings
//we need to start by defining our recursive algo --> rec(prefix, opening, closing)
//prefix can be anything, opening and closing will tell us how much more we need
//we will start with our prefix = ", closing is 3, opening is 3"
//prefix --> "<div<div>", opening -> 1, closing -> 3
//you can add another opening but now we hav e to add three closing in a row
//rec(prefix + "<div>", opening - 1, closing)
//rec(",3,3") --> rec("<div>", 2, 3) --> rec("<div><div>", 1, 3), if opening is less than closed we make another recursive call rec("<div></div>", 2, 2)
//rec("<div><div>", 1, 3) --> rec("<div><div><div", 0, 3) 
//rec("<div><div>", 1, 3) --> rec("<div><div><div></div", 0, 2)
//so on 

//time complexity 
//O(2n)!/((n!(n+1)))

//space complexity 
//O(2n)!/((n!(n+1)))s


function generateDivTags(numberOfTags) {
    const matchedDivTags = [];
    generateDivTagsFromPrefix(numberOfTags, numberOfTags, '', matchedDivTags);
    return matchedDivTags;
}

function generateDivTagsFromPrefix(openingTagsNeeded, closingTagsNeeded, prefix, result) {
    if (openingTagesNeeded > 0) {
        const newPrefix = prefix + '<div>';
        generateDivTagsFromPrefix(openingTagsNeeded - 1, closingTagsNeeded - 1, newPrefix, result);
    }

    if (openingTagsNeeded < closingTagsNeeded) {
        const newPrefix = prefix + '<div>';
        generateDivTagsFromPrefix(openingTagsNeeded, closingTagsNeeded - 1, newPrefix, result);
    }

    if (closingTagsNeeded === 0) result.push(prefix);

}