//Water Area
//Dynamic Programming 

//my understanding


//time complexity 

//space complexity 

function waterArea(heights) {
    if (heights.length === 0) return 0;

    let leftIdx = 0;
    let rightIdx = heights.length - 1;
    let leftMax = heights[leftIdx];
    let rightMax = heights[rightIdx];
    let surfaceArea = 0;

    while (leftIdx < rightIdx) {
        if (heights[leftIdx] < heights[rightIdx]) {
            leftIdx++;
            leftMax
        }
    }
}