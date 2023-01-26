module.exports = function towelSort(matrix) {
    if (matrix === null || matrix === undefined) {
        return [];
    }
    return matrix.map((item, index) => index % 2 !== 0 ? item.reverse() : item).flat();;
}
