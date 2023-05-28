const matrixService = () => {
  const showMatrix = () => {
    return {
      name: 'matrix_1',
      indexColumn: 0,
      indexLine: 0,
      indexLevel: 0,
    }
  }

  return {
    showMatrix,
  }
}

export default matrixService();