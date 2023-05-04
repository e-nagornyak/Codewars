function getGrade(score1, score2, score3) {
    const averageScore = (score1 + score2 + score3) / 3;
    switch (true) {
        case averageScore >= 90 && averageScore <= 100:
            return 'A';
        case averageScore >= 80 && averageScore < 90:
            return 'B';
        case averageScore >= 70 && averageScore < 80:
            return 'C';
        case averageScore >= 60 && averageScore < 70:
            return 'D';
        default:
            return 'F';
    }
}

console.log(getGrade(1, 2, 3));