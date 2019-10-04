class TicTacToe {
  constructor() {
    this.currentPlayerSymbol = "x";
    this.field = [["", "", ""], ["", "", ""], ["", "", ""]];
  }

  getCurrentPlayerSymbol() {
    return this.currentPlayerSymbol;
  }

  nextTurn(rowIndex, columnIndex) {
    if (this.field[rowIndex][columnIndex] == "") {
      this.field[rowIndex][columnIndex] = this.currentPlayerSymbol;
      this.currentPlayerSymbol = this.currentPlayerSymbol == "x" ? "o" : "x";
    }
  }

  isFinished() {
    if (this.getWinner() != null) return true;
    else return this.noMoreTurns();
  }

  getWinner() {
    if (
      this.field[0][0] + this.field[0][1] + this.field[0][2] == "xxx" ||
      this.field[0][0] + this.field[0][1] + this.field[0][2] == "ooo"
    )
      return this.field[0][0];
    if (
      this.field[1][0] + this.field[1][1] + this.field[1][2] == "xxx" ||
      this.field[1][0] + this.field[1][1] + this.field[1][2] == "ooo"
    )
      return this.field[1][0];
    if (
      this.field[2][0] + this.field[2][1] + this.field[2][2] == "xxx" ||
      this.field[2][0] + this.field[2][1] + this.field[2][2] == "ooo"
    )
      return this.field[2][0];

    if (
      this.field[0][0] + this.field[1][0] + this.field[2][0] == "xxx" ||
      this.field[0][0] + this.field[1][0] + this.field[2][0] == "ooo"
    )
      return this.field[0][0];
    if (
      this.field[0][1] + this.field[1][1] + this.field[2][1] == "xxx" ||
      this.field[0][1] + this.field[1][1] + this.field[2][1] == "ooo"
    )
      return this.field[0][1];
    if (
      this.field[0][2] + this.field[1][2] + this.field[2][2] == "xxx" ||
      this.field[0][2] + this.field[1][2] + this.field[2][2] == "ooo"
    )
      return this.field[0][2];

    if (
      this.field[0][0] + this.field[1][1] + this.field[2][2] == "xxx" ||
      this.field[0][0] + this.field[1][1] + this.field[2][2] == "ooo"
    )
      return this.field[1][1];
    if (
      this.field[2][0] + this.field[1][1] + this.field[0][2] == "xxx" ||
      this.field[2][0] + this.field[1][1] + this.field[0][2] == "ooo"
    )
      return this.field[1][1];

    return null;
  }

  noMoreTurns() {
    let k = 0;
    for (let i = 0; i < 3; i++)
      for (let j = 0; j < 3; j++) if (this.field[i][j] == "") k++;
    if (k == 0) return true;
    else return false;
  }

  isDraw() {
    if (this.getWinner() != null) return false;
    else return this.noMoreTurns();
  }

  getFieldValue(rowIndex, colIndex) {
    if (this.field[rowIndex][colIndex] != "")
      return this.field[rowIndex][colIndex];
    else return null;
  }
}

module.exports = TicTacToe;
