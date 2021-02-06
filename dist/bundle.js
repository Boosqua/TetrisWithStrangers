/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/game/game.ts":
/*!**************************!*\
  !*** ./src/game/game.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var z_1 = __webpack_require__(/*! ./pieces/z */ "./src/game/pieces/z.ts");
var test_1 = __webpack_require__(/*! ./utils/test */ "./src/game/utils/test.ts");
var FONTSTYLE = "Oswald";
var Game = /** @class */ (function () {
    function Game(canvas) {
        var _this = this;
        this.ctx = canvas.getContext('2d');
        this.width = canvas.width;
        this.height = canvas.height;
        this.scale = canvas.width / 10;
        this.piece = new z_1.default(this.scale);
        this.blocks = test_1.default(canvas, this.scale);
        this.piece.rotation++;
        this.piece.rotation++;
        this.piece.rotation++;
        setTimeout(function () { _this.piece.move("right"); }, 500);
        // setTimeout(() => {this.piece.stop()}, 2500)
        this.animate = this.animate.bind(this);
        this.animate();
    }
    Game.prototype.animate = function () {
        var _a;
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 0, this.width, this.scale * 4);
        this.ctx.fillStyle = "grey";
        this.ctx.fillRect(0, this.scale * 4, this.width, this.height);
        this.drawGrid();
        var coordinates = this.piece.coordinates();
        for (var i = 0; i < coordinates.length; i++) {
            var pos = coordinates[i];
            (_a = this.ctx).drawImage.apply(_a, __spreadArrays([this.blocks[this.piece.color]], pos));
        }
        requestAnimationFrame(this.animate);
    };
    // testing
    Game.prototype.drawGrid = function () {
        var i = 0;
        while (i <= this.width) {
            this.ctx.beginPath();
            this.ctx.strokeStyle = 'white';
            this.ctx.moveTo(i, 0);
            this.ctx.lineTo(i, this.height);
            this.ctx.stroke();
            i += this.scale;
        }
    };
    return Game;
}());
exports.default = Game;


/***/ }),

/***/ "./src/game/pieces/piece.ts":
/*!**********************************!*\
  !*** ./src/game/pieces/piece.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports) {


var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var Piece = /** @class */ (function () {
    function Piece(center, scale, mapEdge, fallInt) {
        if (fallInt === void 0) { fallInt = 1000; }
        this.scale = scale;
        this.mapEdge = mapEdge;
        this.rotation = 0;
        this.center = center; // will probably pass in from child class
        this.fallInt = fallInt; //set up for player options later
        this.fall();
    }
    Piece.prototype.fall = function () {
        var that = this;
        setInterval(function () {
            that.center[1] += (that.scale / 4);
        }, that.fallInt);
    };
    Piece.prototype.checkMapEdge = function (direction) {
        if (direction === "right") {
            return this.mapEdge[direction][this.rotation] * this.scale > this.center[0];
        }
        else {
            return this.mapEdge[direction][this.rotation] * this.scale < this.center[0];
        }
    };
    Piece.prototype.validMove = function (direction) {
        return this.checkMapEdge(direction);
    };
    Piece.prototype.move = function (direction) {
        var that = this;
        switch (direction) {
            case "right":
                that.center[0] = that.center[0] + that.scale;
                if (!that.validMove(direction)) {
                    break;
                }
                that.timeoutId = setTimeout(function () {
                    that.timeoutId = setInterval(function () {
                        that.center[0] += that.scale;
                        if (!that.validMove(direction)) {
                            that.stop();
                        }
                    }, 100);
                }, 100);
                break;
            case "left":
                that.center[0] = that.center[0] - this.scale;
                if (!that.validMove(direction)) {
                    break;
                }
                that.timeoutId = setTimeout(function () {
                    that.timeoutId = setInterval(function () {
                        that.center[0] -= that.scale;
                        if (!that.validMove(direction)) {
                            that.stop();
                        }
                    }, 100);
                }, 100);
            default:
                break;
        }
    };
    Piece.prototype.stop = function () {
        clearTimeout(this.timeoutId);
        clearInterval(this.timeoutId);
    };
    Piece.prototype.draw = function (ctx, pos) {
        ctx.fillRect.apply(ctx, __spreadArrays(pos, [this.scale, this.scale]));
    };
    return Piece;
}());
exports.default = Piece;


/***/ }),

/***/ "./src/game/pieces/z.ts":
/*!******************************!*\
  !*** ./src/game/pieces/z.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var piece_1 = __webpack_require__(/*! ./piece */ "./src/game/pieces/piece.ts");
var Z = /** @class */ (function (_super) {
    __extends(Z, _super);
    function Z(scale) {
        var _this = this;
        var mapEdge = {
            right: {
                0: 8,
                1: 8,
                2: 8,
                3: 9
            },
            left: {
                0: 1,
                1: 0,
                2: 1,
                3: 1
            }
        };
        _this = _super.call(this, [scale * 4, scale], scale, mapEdge) || this;
        _this.rotation = 0;
        _this.color = "#72CB3B";
        return _this;
    }
    Z.prototype.coordinates = function () {
        switch (this.rotation) {
            case 0:
            case 2:
                return [
                    [
                        this.center[0], this.center[1]
                    ],
                    [
                        this.center[0] + this.scale, this.center[1]
                    ],
                    [
                        this.center[0], this.center[1] - this.scale
                    ],
                    [
                        this.center[0] - this.scale, this.center[1] - this.scale
                    ]
                ];
            case 1:
                return [
                    [
                        this.center[0], this.center[1]
                    ],
                    [
                        this.center[0] + this.scale, this.center[1]
                    ],
                    [
                        this.center[0] + this.scale, this.center[1] - this.scale
                    ],
                    [
                        this.center[0], this.center[1] + this.scale
                    ]
                ];
            case 3:
                return [
                    [
                        this.center[0], this.center[1]
                    ],
                    [
                        this.center[0] - this.scale, this.center[1]
                    ],
                    [
                        this.center[0] - this.scale, this.center[1] + this.scale
                    ],
                    [
                        this.center[0], this.center[1] - this.scale
                    ]
                ];
            default:
                break;
        }
    };
    return Z;
}(piece_1.default));
exports.default = Z;


/***/ }),

/***/ "./src/game/utils/canvas_util.ts":
/*!***************************************!*\
  !*** ./src/game/utils/canvas_util.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.offScreenRender = void 0;
function offScreenRender(scale, colors) {
    var blocks = {};
    colors.forEach(function (color) {
        var canvas = new OffscreenCanvas(scale, scale);
        var ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.fillRect(0, 0, scale, scale);
        ctx.strokeRect(0, 0, scale, scale);
        ctx.closePath;
        blocks[color] = canvas;
    });
    return blocks;
}
exports.offScreenRender = offScreenRender;


/***/ }),

/***/ "./src/game/utils/test.ts":
/*!********************************!*\
  !*** ./src/game/utils/test.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var canvas_util_1 = __webpack_require__(/*! ./canvas_util */ "./src/game/utils/canvas_util.ts");
var COLORS = ["#0341AE", "#72CB3B", "#FFD500", "#FF971C", "#FF3213"];
function testDraw(canvas, scale) {
    var blocks = canvas_util_1.offScreenRender(scale, ["#0341AE", "#72CB3B", "#FFD500", "#FF971C", "#FF3213"]);
    var ctx = canvas.getContext("2d");
    // // Line
    // ctx.drawImage(blocks[COLORS[0]], 0, 0)
    // ctx.drawImage(blocks[COLORS[0]], 0, scale)
    // ctx.drawImage(blocks[COLORS[0]], 0, 2 * scale)
    // ctx.drawImage(blocks[COLORS[0]], 0, 3 * scale)
    // // block
    // ctx.drawImage(blocks[COLORS[1]], 2*scale, 0)
    // ctx.drawImage(blocks[COLORS[1]], 2*scale, scale)
    // ctx.drawImage(blocks[COLORS[1]], 3 * scale, 0)
    // ctx.drawImage(blocks[COLORS[1]], 3 * scale, scale)
    // //T
    // ctx.drawImage(blocks[COLORS[2]], 5* scale, 0)
    // ctx.drawImage(blocks[COLORS[2]], 6* scale, 0)
    // ctx.drawImage(blocks[COLORS[2]], 6* scale, scale)
    // ctx.drawImage(blocks[COLORS[2]], 7* scale, 0)
    // // 2 
    // ctx.drawImage(blocks[COLORS[3]], 0, 5 * scale)
    // ctx.drawImage(blocks[COLORS[3]], scale, 5 * scale)
    // ctx.drawImage(blocks[COLORS[3]], scale, 6 * scale)
    // ctx.drawImage(blocks[COLORS[3]], 2 * scale, 6 * scale)
    // // L
    // ctx.drawImage(blocks[COLORS[4]], 4 * scale, 5 * scale)
    // ctx.drawImage(blocks[COLORS[4]], 4 * scale, 6 * scale)
    // ctx.drawImage(blocks[COLORS[4]], 4 * scale, 7 * scale)
    // ctx.drawImage(blocks[COLORS[4]], 5 * scale, 7 * scale)
    return blocks;
}
exports.default = testDraw;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var game_1 = __webpack_require__(/*! ./game/game */ "./src/game/game.ts");
document.addEventListener("DOMContentLoaded", function () {
    var canvas = document.getElementById("game");
    canvas.height = Math.floor(window.innerHeight * .80);
    canvas.width = Math.floor(canvas.height / 24) * 10;
    var game = new game_1.default(canvas);
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXRyaXMtd2l0aC1zdHJhbmdlcnMvLi9zcmMvZ2FtZS9nYW1lLnRzIiwid2VicGFjazovL3RldHJpcy13aXRoLXN0cmFuZ2Vycy8uL3NyYy9nYW1lL3BpZWNlcy9waWVjZS50cyIsIndlYnBhY2s6Ly90ZXRyaXMtd2l0aC1zdHJhbmdlcnMvLi9zcmMvZ2FtZS9waWVjZXMvei50cyIsIndlYnBhY2s6Ly90ZXRyaXMtd2l0aC1zdHJhbmdlcnMvLi9zcmMvZ2FtZS91dGlscy9jYW52YXNfdXRpbC50cyIsIndlYnBhY2s6Ly90ZXRyaXMtd2l0aC1zdHJhbmdlcnMvLi9zcmMvZ2FtZS91dGlscy90ZXN0LnRzIiwid2VicGFjazovL3RldHJpcy13aXRoLXN0cmFuZ2Vycy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly90ZXRyaXMtd2l0aC1zdHJhbmdlcnMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGV0cmlzLXdpdGgtc3RyYW5nZXJzL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMEVBQTBCO0FBRTFCLGlGQUErQjtBQUMvQixJQUFNLFNBQVMsR0FBVyxRQUFRLENBQUM7QUFFbkM7SUFRRyxjQUFZLE1BQXlCO1FBQXJDLGlCQWNDO1FBYkUsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBNkIsQ0FBQztRQUMvRCxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQzVCLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssR0FBRyxFQUFFO1FBQzlCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxXQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLGNBQUks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QVMsSUFBSSxjQUFJLENBQUMsTUFBTSxDQUFDO0FBQ3RDLENBQUMsQ0FBQzs7Ozs7OztVQ1JGO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7VUNyQkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE8gZnJvbSBcIi4vcGllY2VzL3pcIlxuaW1wb3J0IHsgYmxvY2tzIH0gZnJvbSBcIi4vdXRpbHMvY2FudmFzX3V0aWxcIjtcbmltcG9ydCB0ZXN0IGZyb20gXCIuL3V0aWxzL3Rlc3RcIlxuY29uc3QgRk9OVFNUWUxFOiBzdHJpbmcgPSBcIk9zd2FsZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEXG4gICB3aWR0aDogbnVtYmVyO1xuICAgaGVpZ2h0OiBudW1iZXI7XG4gICBzY2FsZTogbnVtYmVyXG4gICAvLyB0ZXN0aW5nXG4gICBwaWVjZTogTztcbiAgIGJsb2NrczogYmxvY2tzXG4gICBjb25zdHJ1Y3RvcihjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KXtcbiAgICAgIHRoaXMuY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJykgYXMgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICAgICAgdGhpcy53aWR0aCA9IGNhbnZhcy53aWR0aDtcbiAgICAgIHRoaXMuaGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcbiAgICAgIHRoaXMuc2NhbGUgPSBjYW52YXMud2lkdGggLyAxMFxuICAgICAgdGhpcy5waWVjZSA9IG5ldyBPKHRoaXMuc2NhbGUpXG4gICAgICB0aGlzLmJsb2NrcyA9IHRlc3QoY2FudmFzLCB0aGlzLnNjYWxlKVxuICAgICAgdGhpcy5waWVjZS5yb3RhdGlvbisrXG4gICAgICB0aGlzLnBpZWNlLnJvdGF0aW9uKytcbiAgICAgIHRoaXMucGllY2Uucm90YXRpb24rK1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7dGhpcy5waWVjZS5tb3ZlKFwicmlnaHRcIil9LCA1MDAgKVxuICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB7dGhpcy5waWVjZS5zdG9wKCl9LCAyNTAwKVxuICAgICAgdGhpcy5hbmltYXRlID0gdGhpcy5hbmltYXRlLmJpbmQodGhpcylcbiAgICAgIHRoaXMuYW5pbWF0ZSgpO1xuICAgfVxuXG4gICBhbmltYXRlKCk6IHZvaWR7XG4gICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgICAgdGhpcy5jdHguZmlsbFJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5zY2FsZSAqIDQpXG4gICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImdyZXlcIjtcbiAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KDAsIHRoaXMuc2NhbGUgKiA0LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICB0aGlzLmRyYXdHcmlkKCk7XG4gICAgICBsZXQgY29vcmRpbmF0ZXMgPSB0aGlzLnBpZWNlLmNvb3JkaW5hdGVzKClcbiAgICAgIGZvciggbGV0IGkgPSAwOyBpIDwgY29vcmRpbmF0ZXMubGVuZ3RoOyBpKysgKXtcbiAgICAgICAgIGxldCBwb3MgPSBjb29yZGluYXRlc1tpXVxuICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuYmxvY2tzW3RoaXMucGllY2UuY29sb3JdLCAuLi5wb3MpXG4gICAgICB9XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlKVxuICAgfVxuICAgLy8gdGVzdGluZ1xuICAgZHJhd0dyaWQoKTp2b2lke1xuICAgICAgbGV0IGk6IG51bWJlciA9IDA7XG5cbiAgICAgIHdoaWxlKCBpIDw9IHRoaXMud2lkdGgpe1xuICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICd3aGl0ZSc7XG4gICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oaSwgMCk7XG4gICAgICAgICB0aGlzLmN0eC5saW5lVG8oaSwgdGhpcy5oZWlnaHQpO1xuICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG4gICAgICAgICBpICs9IHRoaXMuc2NhbGU7XG4gICAgICB9XG4gICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQaWVjZSB7XG4gICBwb3M6IFtudW1iZXIsIG51bWJlcl07XG4gICBjZW50ZXI6IFtudW1iZXIsIG51bWJlcl07XG4gICBzY2FsZTogbnVtYmVyO1xuICAgcm90YXRpb246IG51bWJlcjtcbiAgIGZhbGxJbnQ6IG51bWJlcjtcbiAgIHRpbWVvdXRJZDogTm9kZUpTLlRpbWVvdXQ7XG4gICBtYXBFZGdlOiB7XG4gICAgICBcInJpZ2h0XCI6IHtcbiAgICAgICAgIFtudW1iZXI6IG51bWJlcl06IG51bWJlclxuICAgICAgfSxcbiAgICAgIFwibGVmdFwiOiB7XG4gICAgICAgICBbbnVtYmVyOiBudW1iZXJdOiBudW1iZXJcbiAgICAgIH1cbiAgIH1cbiAgIGNvbnN0cnVjdG9yKFxuICAgICAgY2VudGVyOiBbbnVtYmVyLCBudW1iZXJdLCBcbiAgICAgIHNjYWxlOiBudW1iZXIsXG4gICAgICBtYXBFZGdlOiB7XG4gICAgICAgICBcInJpZ2h0XCI6IHtcbiAgICAgICAgICAgIFtudW1iZXI6IG51bWJlcl06IG51bWJlclxuICAgICAgICAgfSxcbiAgICAgICAgIFwibGVmdFwiOiB7XG4gICAgICAgICAgICBbbnVtYmVyOiBudW1iZXJdOiBudW1iZXJcbiAgICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBmYWxsSW50OiBudW1iZXIgPSAxMDAwXG4gICAgICApe1xuICAgICAgdGhpcy5zY2FsZSA9IHNjYWxlXG4gICAgICB0aGlzLm1hcEVkZ2UgPSBtYXBFZGdlXG4gICAgICB0aGlzLnJvdGF0aW9uID0gMDtcbiAgICAgIHRoaXMuY2VudGVyID0gY2VudGVyOy8vIHdpbGwgcHJvYmFibHkgcGFzcyBpbiBmcm9tIGNoaWxkIGNsYXNzXG4gICAgICB0aGlzLmZhbGxJbnQgPSBmYWxsSW50IC8vc2V0IHVwIGZvciBwbGF5ZXIgb3B0aW9ucyBsYXRlclxuICAgICAgdGhpcy5mYWxsKClcbiAgIH1cblxuICAgZmFsbCgpOiB2b2lke1xuICAgICAgbGV0IHRoYXQ6IFBpZWNlID0gdGhpc1xuICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgdGhhdC5jZW50ZXJbMV0gKz0gKHRoYXQuc2NhbGUgLyA0KVxuICAgICAgfSwgdGhhdC5mYWxsSW50KVxuICAgfVxuICAgY2hlY2tNYXBFZGdlKGRpcmVjdGlvbjogXCJyaWdodFwiIHwgXCJsZWZ0XCIpOiBib29sZWFue1xuICAgICAgaWYoZGlyZWN0aW9uID09PSBcInJpZ2h0XCIpe1xuICAgICAgICAgcmV0dXJuIHRoaXMubWFwRWRnZVtkaXJlY3Rpb25dW3RoaXMucm90YXRpb25dICogdGhpcy5zY2FsZSA+IHRoaXMuY2VudGVyWzBdXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgcmV0dXJuIHRoaXMubWFwRWRnZVtkaXJlY3Rpb25dW3RoaXMucm90YXRpb25dICogdGhpcy5zY2FsZSA8IHRoaXMuY2VudGVyWzBdXG4gICAgICB9XG4gICB9XG4gICB2YWxpZE1vdmUoZGlyZWN0aW9uOiBcInJpZ2h0XCIgfCBcImxlZnRcIik6IGJvb2xlYW57XG4gICAgICByZXR1cm4gdGhpcy5jaGVja01hcEVkZ2UoZGlyZWN0aW9uKTtcbiAgIH1cbiAgIG1vdmUoZGlyZWN0aW9uOiBcInJpZ2h0XCIgfCBcImxlZnRcIik6IHZvaWQge1xuICAgICAgbGV0IHRoYXQgPSB0aGlzXG4gICAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgICAgICAgY2FzZSBcInJpZ2h0XCI6XG4gICAgICAgICAgICB0aGF0LmNlbnRlclswXSA9IHRoYXQuY2VudGVyWzBdICsgdGhhdC5zY2FsZVxuICAgICAgICAgICAgaWYoIXRoYXQudmFsaWRNb3ZlKGRpcmVjdGlvbikpe1xuICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoYXQudGltZW91dElkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICB0aGF0LnRpbWVvdXRJZCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgIHRoYXQuY2VudGVyWzBdICs9IHRoYXQuc2NhbGUgXG4gICAgICAgICAgICAgICAgICBpZighdGhhdC52YWxpZE1vdmUoZGlyZWN0aW9uKSl7XG4gICAgICAgICAgICAgICAgICAgICB0aGF0LnN0b3AoKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgfSwgMTAwKVxuICAgICAgICAgICAgfSwgMTAwKVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICBjYXNlIFwibGVmdFwiOlxuICAgICAgICAgICAgdGhhdC5jZW50ZXJbMF0gPSB0aGF0LmNlbnRlclswXSAtIHRoaXMuc2NhbGVcblxuICAgICAgICAgICAgaWYoICF0aGF0LnZhbGlkTW92ZShkaXJlY3Rpb24pICl7XG4gICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhhdC50aW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgIHRoYXQudGltZW91dElkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgdGhhdC5jZW50ZXJbMF0gLT0gdGhhdC5zY2FsZVxuICAgICAgICAgICAgICAgICAgaWYoIXRoYXQudmFsaWRNb3ZlKGRpcmVjdGlvbikpe1xuICAgICAgICAgICAgICAgICAgICAgdGhhdC5zdG9wKClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIH0sIDEwMClcbiAgICAgICAgICAgIH0sIDEwMClcbiAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgIH1cbiAgIHN0b3AoKXtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRJZClcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lb3V0SWQpXG4gICB9XG4gICBkcmF3KGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBwb3M6IFtudW1iZXIsIG51bWJlcl0pOiB2b2lke1xuICAgICAgY3R4LmZpbGxSZWN0KC4uLnBvcywgdGhpcy5zY2FsZSwgdGhpcy5zY2FsZSlcbiAgIH1cbn0iLCJpbXBvcnQgUGllY2UgZnJvbSAnLi9waWVjZSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFogZXh0ZW5kcyBQaWVjZXtcbiAgIHJvdGF0aW9uOiBudW1iZXJcbiAgIGNvbG9yOiBzdHJpbmdcbiAgIGNvbnN0cnVjdG9yKHNjYWxlOiBudW1iZXIpe1xuICAgICAgbGV0IG1hcEVkZ2UgPSB7XG4gICAgICAgICByaWdodDp7XG4gICAgICAgICAgICAwOiA4LFxuICAgICAgICAgICAgMTogOCxcbiAgICAgICAgICAgIDI6IDgsXG4gICAgICAgICAgICAzOiA5XG4gICAgICAgICB9LFxuICAgICAgICAgbGVmdDp7XG4gICAgICAgICAgICAwOiAxLFxuICAgICAgICAgICAgMTogMCxcbiAgICAgICAgICAgIDI6IDEsXG4gICAgICAgICAgICAzOiAxXG4gICAgICAgICB9XG4gICAgICB9XG4gICAgICBzdXBlcihbc2NhbGUgKiA0LCBzY2FsZV0sIHNjYWxlLCBtYXBFZGdlKVxuICAgICAgdGhpcy5yb3RhdGlvbiA9IDA7XG4gICAgICB0aGlzLmNvbG9yID0gXCIjNzJDQjNCXCI7XG4gICB9XG4gICBjb29yZGluYXRlcygpOiBBcnJheTxbbnVtYmVyLCBudW1iZXJdPntcbiAgICAgIHN3aXRjaCh0aGlzLnJvdGF0aW9uKXtcbiAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICB0aGlzLmNlbnRlclswXSwgdGhpcy5jZW50ZXJbMV1cbiAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICB0aGlzLmNlbnRlclswXSArIHRoaXMuc2NhbGUsIHRoaXMuY2VudGVyWzFdXG4gICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgdGhpcy5jZW50ZXJbMF0sIHRoaXMuY2VudGVyWzFdIC0gdGhpcy5zY2FsZVxuICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIHRoaXMuY2VudGVyWzBdIC0gdGhpcy5zY2FsZSwgdGhpcy5jZW50ZXJbMV0gLSB0aGlzLnNjYWxlXG4gICAgICAgICAgICAgICBdXG4gICAgICAgICAgICBdXG4gICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgdGhpcy5jZW50ZXJbMF0sIHRoaXMuY2VudGVyWzFdXG4gICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgdGhpcy5jZW50ZXJbMF0gKyB0aGlzLnNjYWxlLCB0aGlzLmNlbnRlclsxXVxuICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIHRoaXMuY2VudGVyWzBdICsgdGhpcy5zY2FsZSwgdGhpcy5jZW50ZXJbMV0gLSB0aGlzLnNjYWxlXG4gICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgdGhpcy5jZW50ZXJbMF0sIHRoaXMuY2VudGVyWzFdICsgdGhpcy5zY2FsZVxuICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgXVxuICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIHRoaXMuY2VudGVyWzBdLCB0aGlzLmNlbnRlclsxXVxuICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIHRoaXMuY2VudGVyWzBdIC0gdGhpcy5zY2FsZSwgdGhpcy5jZW50ZXJbMV1cbiAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICB0aGlzLmNlbnRlclswXSAtIHRoaXMuc2NhbGUsIHRoaXMuY2VudGVyWzFdICsgdGhpcy5zY2FsZVxuICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIHRoaXMuY2VudGVyWzBdLCB0aGlzLmNlbnRlclsxXSAtIHRoaXMuc2NhbGVcbiAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIF1cbiAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVha1xuICAgICAgfVxuICAgfVxufSIsImV4cG9ydCBpbnRlcmZhY2UgYmxvY2tze1xuICAgW2NvbG9yczogc3RyaW5nXTogT2Zmc2NyZWVuQ2FudmFzXG59XG5leHBvcnQgZnVuY3Rpb24gb2ZmU2NyZWVuUmVuZGVyKFxuICAgc2NhbGU6IG51bWJlciwgXG4gICBjb2xvcnM6IEFycmF5PHN0cmluZz5cbiAgICk6IGJsb2Nrc3tcbiAgIGNvbnN0IGJsb2NrczogYmxvY2tzID0ge31cbiAgIGNvbG9ycy5mb3JFYWNoKCAoY29sb3I6IHN0cmluZykgPT4ge1xuICAgICAgbGV0IGNhbnZhczogT2Zmc2NyZWVuQ2FudmFzID0gbmV3IE9mZnNjcmVlbkNhbnZhcyhzY2FsZSwgc2NhbGUpO1xuICAgICAgbGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICBjdHguZmlsbFJlY3QoMCwgMCwgc2NhbGUsIHNjYWxlKTtcbiAgICAgIGN0eC5zdHJva2VSZWN0KDAsIDAsIHNjYWxlLCBzY2FsZSk7XG4gICAgICBjdHguY2xvc2VQYXRoO1xuICAgICAgYmxvY2tzW2NvbG9yXSA9IGNhbnZhcztcbiAgIH0pXG4gICByZXR1cm4gYmxvY2tzXG59IiwiaW1wb3J0IHsgb2ZmU2NyZWVuUmVuZGVyLCBibG9ja3MgfWZyb20gXCIuL2NhbnZhc191dGlsXCJcbmNvbnN0IENPTE9SUyA9IFtcIiMwMzQxQUVcIiwgXCIjNzJDQjNCXCIsIFwiI0ZGRDUwMFwiLCBcIiNGRjk3MUNcIiwgXCIjRkYzMjEzXCJdXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0ZXN0RHJhdyhjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBzY2FsZTpudW1iZXIpOiBibG9ja3N7XG4gICBsZXQgYmxvY2tzOiBibG9ja3MgPSBcbiAgIG9mZlNjcmVlblJlbmRlcihzY2FsZSwgW1wiIzAzNDFBRVwiLCBcIiM3MkNCM0JcIiwgXCIjRkZENTAwXCIsIFwiI0ZGOTcxQ1wiLCBcIiNGRjMyMTNcIl0pXG4gICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgIC8vIC8vIExpbmVcbiAgIC8vIGN0eC5kcmF3SW1hZ2UoYmxvY2tzW0NPTE9SU1swXV0sIDAsIDApXG4gICAvLyBjdHguZHJhd0ltYWdlKGJsb2Nrc1tDT0xPUlNbMF1dLCAwLCBzY2FsZSlcbiAgIC8vIGN0eC5kcmF3SW1hZ2UoYmxvY2tzW0NPTE9SU1swXV0sIDAsIDIgKiBzY2FsZSlcbiAgIC8vIGN0eC5kcmF3SW1hZ2UoYmxvY2tzW0NPTE9SU1swXV0sIDAsIDMgKiBzY2FsZSlcbiAgIC8vIC8vIGJsb2NrXG4gICAvLyBjdHguZHJhd0ltYWdlKGJsb2Nrc1tDT0xPUlNbMV1dLCAyKnNjYWxlLCAwKVxuICAgLy8gY3R4LmRyYXdJbWFnZShibG9ja3NbQ09MT1JTWzFdXSwgMipzY2FsZSwgc2NhbGUpXG4gICAvLyBjdHguZHJhd0ltYWdlKGJsb2Nrc1tDT0xPUlNbMV1dLCAzICogc2NhbGUsIDApXG4gICAvLyBjdHguZHJhd0ltYWdlKGJsb2Nrc1tDT0xPUlNbMV1dLCAzICogc2NhbGUsIHNjYWxlKVxuICAgLy8gLy9UXG4gICAvLyBjdHguZHJhd0ltYWdlKGJsb2Nrc1tDT0xPUlNbMl1dLCA1KiBzY2FsZSwgMClcbiAgIC8vIGN0eC5kcmF3SW1hZ2UoYmxvY2tzW0NPTE9SU1syXV0sIDYqIHNjYWxlLCAwKVxuICAgLy8gY3R4LmRyYXdJbWFnZShibG9ja3NbQ09MT1JTWzJdXSwgNiogc2NhbGUsIHNjYWxlKVxuICAgLy8gY3R4LmRyYXdJbWFnZShibG9ja3NbQ09MT1JTWzJdXSwgNyogc2NhbGUsIDApXG4gICAvLyAvLyAyIFxuICAgLy8gY3R4LmRyYXdJbWFnZShibG9ja3NbQ09MT1JTWzNdXSwgMCwgNSAqIHNjYWxlKVxuICAgLy8gY3R4LmRyYXdJbWFnZShibG9ja3NbQ09MT1JTWzNdXSwgc2NhbGUsIDUgKiBzY2FsZSlcbiAgIC8vIGN0eC5kcmF3SW1hZ2UoYmxvY2tzW0NPTE9SU1szXV0sIHNjYWxlLCA2ICogc2NhbGUpXG4gICAvLyBjdHguZHJhd0ltYWdlKGJsb2Nrc1tDT0xPUlNbM11dLCAyICogc2NhbGUsIDYgKiBzY2FsZSlcbiAgIC8vIC8vIExcbiAgIC8vIGN0eC5kcmF3SW1hZ2UoYmxvY2tzW0NPTE9SU1s0XV0sIDQgKiBzY2FsZSwgNSAqIHNjYWxlKVxuICAgLy8gY3R4LmRyYXdJbWFnZShibG9ja3NbQ09MT1JTWzRdXSwgNCAqIHNjYWxlLCA2ICogc2NhbGUpXG4gICAvLyBjdHguZHJhd0ltYWdlKGJsb2Nrc1tDT0xPUlNbNF1dLCA0ICogc2NhbGUsIDcgKiBzY2FsZSlcbiAgIC8vIGN0eC5kcmF3SW1hZ2UoYmxvY2tzW0NPTE9SU1s0XV0sIDUgKiBzY2FsZSwgNyAqIHNjYWxlKVxuICAgcmV0dXJuIGJsb2Nrc1xufSIsImltcG9ydCBHYW1lICBmcm9tIFwiLi9nYW1lL2dhbWVcIlxuaW1wb3J0IHRlc3REcmF3IGZyb20gXCIuL2dhbWUvdXRpbHMvdGVzdFwiXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICBsZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lXCIpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xuICAgY2FudmFzLmhlaWdodCA9IE1hdGguZmxvb3Iod2luZG93LmlubmVySGVpZ2h0ICogLjgwKTtcbiAgIGNhbnZhcy53aWR0aCA9ICBNYXRoLmZsb29yKGNhbnZhcy5oZWlnaHQgLyAyNCkgKiAxMDtcblxuICAgY29uc3QgZ2FtZTogR2FtZSA9IG5ldyBHYW1lKGNhbnZhcykgXG59KSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbiJdLCJzb3VyY2VSb290IjoiIn0=