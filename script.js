let drawBoard = document.querySelector(".draw-board")

// make a 16x16 grid
for (let j = 1; j <= 16; j++) {
    let line = document.createElement("div");
    line.style = "display: flex;"

    for (let i = 1; i <= 16; i++) {
        let pixel = document.createElement('div');
        let height = drawBoard.offsetHeight / 16;
        let width = drawBoard.offsetWidth / 16;
        pixel.className += "pixel"
        pixel.style = `height: ${height}px; width: ${width}px`

        line.appendChild(pixel)
    }

    drawBoard.appendChild(line) }