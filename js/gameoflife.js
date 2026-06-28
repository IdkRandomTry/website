// Conway's Game of Life
class GameOfLife {
  constructor(canvasId, width = 100, height = 100, cellSize = 2) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.width = width;
    this.height = height;
    this.cellSize = cellSize;
    
    this.canvas.width = width * cellSize;
    this.canvas.height = height * cellSize;
    
    this.grid = this.createGrid();
    this.randomizeGrid();
    this.animate();
  }

  createGrid() {
    return Array(this.height).fill(null).map(() => 
      Array(this.width).fill(0)
    );
  }

  randomizeGrid() {
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        this.grid[y][x] = Math.random() > 0.8 ? 1 : 0;
      }
    }
  }

  countNeighbors(x, y) {
    let count = 0;
    for (let dy = -1; dy <= 1; dy++) {
      for (let dx = -1; dx <= 1; dx++) {
        if (dx === 0 && dy === 0) continue;
        const nx = (x + dx + this.width) % this.width;
        const ny = (y + dy + this.height) % this.height;
        count += this.grid[ny][nx];
      }
    }
    return count;
  }

  step() {
    const newGrid = this.createGrid();
    
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        const neighbors = this.countNeighbors(x, y);
        const alive = this.grid[y][x];

        if (alive && (neighbors === 2 || neighbors === 3)) {
          newGrid[y][x] = 1;
        } else if (!alive && neighbors === 3) {
          newGrid[y][x] = 1;
        } else {
          newGrid[y][x] = 0;
        }
      }
    }
    
    this.grid = newGrid;
  }

  draw() {
    this.ctx.fillStyle = '#f0f0f0';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    
    this.ctx.fillStyle = 'rgba(0, 102, 204, 0.3)';
    
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        if (this.grid[y][x]) {
          this.ctx.fillRect(
            x * this.cellSize,
            y * this.cellSize,
            this.cellSize - 1,
            this.cellSize - 1
          );
        }
      }
    }
  }

  animate() {
    this.draw();
    this.step();
    setTimeout(() => this.animate(), 200);
  }
}

// Initialize Game of Life when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('gameoflife-canvas');
  if (canvas) {
    // Responsive cellSize: larger on mobile, smaller on desktop
    const cellSize = window.innerWidth < 768 ? 12 : 5;
    const width = Math.floor(canvas.parentElement.clientWidth / cellSize);
    const height = Math.floor(window.innerHeight / cellSize);
    new GameOfLife('gameoflife-canvas', width, height, cellSize);
  }
});
