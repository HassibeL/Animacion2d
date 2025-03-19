console.log('Hass');

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

console.log(canvas);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let circleColors = {};

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function drawComp(ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.fillStyle = '#847B71';
    ctx.rect(0, 370, 410, 410);
    ctx.fill();

    // Dibuja las líneas primero
    function blackLine1(x, y1, y2, color) {
        ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.strokeStyle = color;
        ctx.moveTo(x, y1);
        ctx.lineTo(x, y2);
        ctx.stroke();
    }

    const startX = 14;
    const startY = 382;
    const offsets = [0, 9, 18, 28, 38, 48, 58, 68, 78];
    const endYs = [470, 449, 439, 435, 435, 435, 436, 445, 457];

    offsets.forEach((offset, index) => {
        blackLine1(startX + offset, startY, endYs[index], "black");
    });

    function drawMultipleLines0(xPositions, yStart, yEndValues) {
        ctx.lineWidth = 5;
        ctx.strokeStyle = "black";
        xPositions.forEach((x, index) => {
            ctx.beginPath();
            ctx.moveTo(x, yStart);
            ctx.lineTo(x, yEndValues[index]);
            ctx.stroke();
        });
    }

    drawMultipleLines0([14, 90, 23, 32, 42, 52, 62, 72, 82, 92], 720, [570, 549, 539, 535, 535, 535, 536, 545, 557]);

    function drawMultipleLines1(xPositions, yStart, yEndValues) {
        ctx.lineWidth = 5;
        ctx.strokeStyle = "black";
        xPositions.forEach((x, index) => {
            ctx.beginPath();
            ctx.moveTo(x + 102, yStart - 100);
            ctx.lineTo(x + 102, yEndValues[index] - 90);
            ctx.stroke();
        });
    }

    drawMultipleLines1([14, 23, 32, 42, 52, 62, 72, 82, 92], 720, [570, 549, 539, 535, 535, 535, 536, 545, 557]);

    function drawMultipleLines2(xPositions, yStart, yEndValues) {
        ctx.lineWidth = 5;
        ctx.strokeStyle = "black";
        xPositions.forEach((x, index) => {
            ctx.beginPath();
            ctx.moveTo(x + 102, yStart);
            ctx.lineTo(x + 102, yEndValues[index]);
            ctx.stroke();
        });
    }

    drawMultipleLines2([14, 23, 32, 42, 52, 62, 72, 82, 92], 770, [724, 740, 747, 750, 752, 752, 748, 742, 725]);

    function drawMultipleLines(xPositions, yStart, yEndValues) {
        ctx.lineWidth = 5;
        ctx.strokeStyle = "black";
        xPositions.forEach((x, index) => {
            ctx.beginPath();
            ctx.moveTo(x + 205, yStart - 50);
            ctx.lineTo(x + 205, yEndValues[index] - 50);
            ctx.stroke();
        });
    }

    drawMultipleLines([14, 23, 32, 42, 52, 62, 72, 82, 92], 720, [490, 505, 509, 515, 515, 513, 512, 503, 485]);

    function blackLine(x, y1, y2, color) {
        ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.strokeStyle = color;
        ctx.moveTo(x + 305, y1 + 10);
        ctx.lineTo(x + 305, y2 + 45);
        ctx.stroke();
    }

    offsets.forEach((offset, index) => {
        blackLine(startX + offset, startY, endYs[index], "black");
    });

    function drawMultipleLinesmil(xPositions, yStart, yEndValues) {
        ctx.lineWidth = 5;
        ctx.strokeStyle = "black";
        xPositions.forEach((x, index) => {
            ctx.beginPath();
            ctx.moveTo(x + 305, yStart + 40);
            ctx.lineTo(x + 305, yEndValues[index] + 40);
            ctx.stroke();
        });
    }

    drawMultipleLinesmil([14, 23, 32, 42, 52, 62, 72, 82, 92], 720, [570, 549, 539, 535, 535, 535, 536, 545, 557]);

    function lineasAparte(x) {
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 5;
        ctx.moveTo(x, 382);
        ctx.lineTo(x, 770);
        ctx.stroke();
    }

    lineasAparte(105);
    lineasAparte(205);
    lineasAparte(308);

    // Dibuja los círculos después de las líneas
    function drawCircle(x, y, radius, key) {
        ctx.beginPath();
        ctx.fillStyle = circleColors[key] || 'black';
        ctx.lineWidth = 5;
        ctx.ellipse(x, y, radius, radius, 0, 0, Math.PI * 2);
        ctx.fill();
    }

    function drawStrokeCircle(x, y, radius, key) {
        ctx.beginPath();
        ctx.strokeStyle = circleColors[key] || 'black';
        ctx.lineWidth = 5;
        ctx.ellipse(x, y, radius, radius, 0, 0, Math.PI * 2);
        ctx.stroke();
    }

    drawStrokeCircle(55, 475, 41, 'circle1');
    drawCircle(53, 570, 43, 'circle2');
    drawCircle(53, 725, 43, 'circle3');
    drawCircle(155, 384, 43, 'circle4');
    drawCircle(155, 477, 43, 'circle5');
    drawCircle(155, 6620, 43, 'circle6');
    drawStrokeCircle(155, 712, 41, 'circle7');
    drawStrokeCircle(257, 425, 41, 'circle8');
    drawCircle(257, 678, 43, 'circle9');
    drawCircle(257, 771, 43, 'circle10');
    drawCircle(359, 382, 43, 'circle11');
    drawStrokeCircle(359, 520, 41, 'circle12');
    drawCircle(359, 610, 43, 'circle13');
    drawCircle(359, 770, 43, 'circle14');
    }
    
    function handleMouseMove(event) {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    function checkCircleHover(x, y, radius, key) {
        if (Math.pow(mouseX - x, 2) + Math.pow(mouseY - y, 2) < Math.pow(radius, 2)) {
            circleColors[key] = getRandomColor();
            drawComp(ctx);
            return true;
        }
        return false;
    }
    
    checkCircleHover(55, 475, 41, 'circle1') 
    checkCircleHover(53, 570, 43, 'circle2') 
    checkCircleHover(53, 725, 43, 'circle3') 
    checkCircleHover(155, 384, 43, 'circle4') 
    checkCircleHover(155, 477, 43, 'circle5') 
    checkCircleHover(155, 620, 43, 'circle6') 
    checkCircleHover(155, 712, 41, 'circle7') 
    checkCircleHover(257, 425, 41, 'circle8') 
    checkCircleHover(257, 678, 43, 'circle9') 
    checkCircleHover(257, 771, 43, 'circle10') 
    checkCircleHover(359, 382, 43, 'circle11') 
    checkCircleHover(359, 520, 41, 'circle12') 
    checkCircleHover(359, 610, 43, 'circle13') 
    checkCircleHover(359, 770, 43, 'circle14');

}

canvas.addEventListener('mousemove', handleMouseMove);
drawComp(ctx);

