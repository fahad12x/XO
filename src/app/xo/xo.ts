import { Component } from '@angular/core';

@Component({
  selector: 'app-xo',
  templateUrl: './xo.html',
  styleUrls: ['./xo.css']
})
export class Xo {
  board: string[] = new Array(9).fill('');
  currentPlayer: 'X' | 'O' = 'X';
  winner: string | null = null;
  losser: string | null = null;

  draw: string | null = null;

makeMove(index: number): void {
  if (this.board[index] === '' && !this.winner) {
    this.board[index] = this.currentPlayer;
    this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';

    const winChecks = [
      index == 0 && (this.checkTopRow() || this.checkLeftColumn() || this.checkDiagonal1()),
      index == 1 && (this.checkTopRow() || this.checkMiddleColumn()),
      index == 2 && (this.checkTopRow() || this.checkRightColumn() || this.checkDiagonal2()),
      index == 3 && (this.checkMiddleRow() || this.checkLeftColumn()),
      index == 4 && (this.checkMiddleRow() || this.checkMiddleColumn() || this.checkDiagonal1() || this.checkDiagonal2()),
      index == 5 && (this.checkMiddleRow() || this.checkRightColumn()),
      index == 6 && (this.checkBottomRow() || this.checkLeftColumn() || this.checkDiagonal2()),
      index == 7 && (this.checkBottomRow() || this.checkMiddleColumn()),
      index == 8 && (this.checkBottomRow() || this.checkRightColumn() || this.checkDiagonal1())
    ];
    if (winChecks.some(Boolean)) {
      this.winner = this.board[index];
      this.losser = this.winner === 'X' ? 'O' : 'X';
    } else if (this.board.every(cell => cell !== '')) {
      this.draw = 'Draw';
    }
  }
}

resetGame(): void {
  this.board = new Array(9).fill('');
  this.currentPlayer = 'X';
  this.winner = null;
  this.losser = null;
  this.draw = null;
}

  checkTopRow(): boolean {
    return this.board[0] === this.board[1] && this.board[1] === this.board[2] && this.board[0] !== '';
  }
  checkMiddleRow(): boolean {
    return this.board[3] === this.board[4] && this.board[4] === this.board[5] && this.board[3] !== '';
  }

  checkBottomRow(): boolean {
    return this.board[6] === this.board[7] && this.board[7] === this.board[8] && this.board[6] !== '';
  }

  
  checkLeftColumn(): boolean {
    return this.board[0] === this.board[3] && this.board[3] === this.board[6] && this.board[0] !== '';
  }

  checkMiddleColumn(): boolean {
    return this.board[1] === this.board[4] && this.board[4] === this.board[7] && this.board[1] !== '';
  }

  checkRightColumn(): boolean {
    return this.board[2] === this.board[5] && this.board[5] === this.board[8] && this.board[2] !== '';
  }

  checkDiagonal1(): boolean {
    return this.board[0] === this.board[4] && this.board[4] === this.board[8] && this.board[0] !== '';
  }

  checkDiagonal2(): boolean {
    return this.board[2] === this.board[4] && this.board[4] === this.board[6] && this.board[2] !== '';
  }
}
