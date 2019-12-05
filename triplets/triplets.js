// Complete the compareTriplets function below.
function compareTriplets(a, b) {
    let finalScore = [0,0];

    a.forEach((rating, i) => {
        (a[i] > b[i]) && finalScore[0]++;
        (a[i] < b[i]) && finalScore[1]++;
    });

    return finalScore;
}
