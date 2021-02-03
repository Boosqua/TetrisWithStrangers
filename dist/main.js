"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var game_1 = require("./game/game");
document.addEventListener("DOMContentLoaded", function () {
    console.log('loaded');
    var canvas = document.getElementById("game");
    var ctx = canvas.getContext('2d');
    var game = new game_1.Game(ctx);
    // TESTING
    // GRID
    var width = canvas.width;
    var height = canvas.height;
    var gridScale = canvas.width / 10;
    var i = 0;
    while (i <= width) {
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.moveTo(i, 0);
        ctx.lineTo(i, height);
        ctx.stroke();
        i += gridScale;
    }
    // PIECES
    // LONG PIECE;
    function drawLongPiece(ctx) {
        var pos = [width / 5, 300];
        var center = [pos[0], pos[1] + gridScale * 2];
        var moves = {
            1: function () {
                ctx.beginPath();
                ctx.strokeStyle = "red";
                ctx.fillStyle = "red";
                ctx.moveTo.apply(ctx, center);
                ctx.lineTo(center[0], center[1] + gridScale * 2);
                ctx.lineTo(center[0] + gridScale, center[1] + gridScale * 2);
                ctx.lineTo(center[0] + gridScale, center[1] - gridScale * 2);
                ctx.lineTo(center[0], center[1] - gridScale * 2);
                ctx.lineTo.apply(ctx, center);
                ctx.fill();
                ctx.stroke();
            },
            2: function () {
                ctx.beginPath();
                ctx.strokeStyle = "green";
                ctx.moveTo.apply(ctx, center);
                ctx.lineTo(center[0] + gridScale * 2, center[1]);
                ctx.lineTo(center[0] + gridScale * 2, center[1] + gridScale);
                ctx.lineTo(center[0] - gridScale * 2, center[1] + gridScale);
                ctx.lineTo(center[0] - gridScale * 2, center[1]);
                ctx.lineTo.apply(ctx, center);
                ctx.stroke();
            },
            3: function () {
            },
            4: function () {
            }
        };
        moves[1]();
        moves[2]();
    }
    drawLongPiece(ctx);
});
