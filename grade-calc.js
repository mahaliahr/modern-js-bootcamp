let gradeCalc = function (studentScore, totalScore) {
    let actualScore = studentScore / totalScore * 100
    let letterGrade = ''
    
    if (actualScore >= 90) {
        letterGrade = 'A'
    } else if (actualScore >= 80) {
        letterGrade = 'B'
    } else if (actualScore >= 70) {
        letterGrade = 'C'
    } else if (actualScore >= 60) {
        letterGrade = 'D'
    } else {
        letterGrade = 'F'
    }

    return `You got a ${letterGrade} (${actualScore}%)!`
}

/* let gradeCalc = function (studentScore, totalScore) {
    let actualScore = studentScore / totalScore * 100

    if (actualScore >= 90) {
        return `You got a A (${actualScore}%)!`
    } else if (actualScore >= 80) {
        return `You got a B (${actualScore}%)!`
    } else if (actualScore >= 70) {
        return `You got a C (${actualScore}%)!`
    } else if (actualScore >= 60) {
        return `You got a D (${actualScore}%)!`
    } else {
        return `You got a F (${actualScore}%)!`
    }
} */

console.log(gradeCalc(70, 80))