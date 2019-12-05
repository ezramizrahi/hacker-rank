function diagonalDifference(arr) {
    // Write your code here
    return Math.abs(arr.reduce((acc, curr, i) => acc += curr[i] - curr.reverse()[i], 0));
}
