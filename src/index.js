// You should implement your task here.

module.exports = function towelSort(matrix) {
    let result = "";
    if (!matrix || matrix.length <= 0) {
        return [];
    } else {
        result = matrix.map((element, index) => {
            if (index % 2) {
                return element.sort((a, b) => b - a)
            } else {
                return element.sort((a, b) => a - b)
            }
        })
    }
    return result.join(',').split(',')
}
