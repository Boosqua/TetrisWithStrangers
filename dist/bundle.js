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
var j_1 = __webpack_require__(/*! ./pieces/j */ "./src/game/pieces/j.ts");
var test_1 = __webpack_require__(/*! ./utils/test */ "./src/game/utils/test.ts");
var FONTSTYLE = "Oswald";
var Game = /** @class */ (function () {
    function Game(canvas) {
        var _this = this;
        this.ctx = canvas.getContext('2d');
        this.width = canvas.width;
        this.height = canvas.height;
        this.scale = canvas.width / 10;
        this.piece = new j_1.default(this.scale);
        this.blocks = test_1.default(canvas, this.scale);
        this.animate = this.animate.bind(this);
        setTimeout(function () { _this.piece.move("d"); }, 500);
        setTimeout(function () { _this.piece.stop(); }, 2500);
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

/***/ "./src/game/pieces/j.ts":
/*!******************************!*\
  !*** ./src/game/pieces/j.ts ***!
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
var J = /** @class */ (function (_super) {
    __extends(J, _super);
    function J(scale) {
        var _this = _super.call(this, [scale * 4, scale], scale) || this;
        _this.rotation = 0;
        _this.color = "#72CB3B";
        return _this;
    }
    J.prototype.coordinates = function () {
        switch (this.rotation) {
            case 0:
                return [
                    [
                        this.center[0], this.center[1]
                    ],
                    [
                        this.center[0] + this.scale, this.center[1]
                    ],
                    [
                        this.center[0] - this.scale, this.center[1]
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
                        this.center[0], this.center[1] + this.scale
                    ],
                    [
                        this.center[0], this.center[1] - this.scale
                    ],
                    [
                        this.center[0] - this.scale, this.center[1] + this.scale
                    ]
                ];
            case 2:
                return [
                    [
                        this.center[0], this.center[1]
                    ],
                    [
                        this.center[0] - this.scale, this.center[1]
                    ],
                    [
                        this.center[0] + this.scale, this.center[1]
                    ],
                    [
                        this.center[0] + this.scale, this.center[1] + this.scale
                    ]
                ];
            case 3:
                return [
                    [
                        this.center[0], this.center[1]
                    ],
                    [
                        this.center[0], this.center[1] - this.scale
                    ],
                    [
                        this.center[0], this.center[1] + this.scale
                    ],
                    [
                        this.center[0] + this.scale, this.center[1] - this.scale
                    ]
                ];
            default:
                break;
        }
    };
    return J;
}(piece_1.default));
exports.default = J;


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
    function Piece(center, scale, fallInt) {
        if (fallInt === void 0) { fallInt = 1000; }
        this.scale = scale;
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
    Piece.prototype.move = function (input) {
        var _this = this;
        switch (input) {
            case "d":
                this.center[0] = this.center[0] + this.scale;
                this.timeoutId = setTimeout(function () {
                    _this.timeoutId = setInterval(function () {
                        _this.center[0] += _this.scale;
                    }, 300);
                }, 700);
                break;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXRyaXMtd2l0aC1zdHJhbmdlcnMvLi9zcmMvZ2FtZS9nYW1lLnRzIiwid2VicGFjazovL3RldHJpcy13aXRoLXN0cmFuZ2Vycy8uL3NyYy9nYW1lL3BpZWNlcy9qLnRzIiwid2VicGFjazovL3RldHJpcy13aXRoLXN0cmFuZ2Vycy8uL3NyYy9nYW1lL3BpZWNlcy9waWVjZS50cyIsIndlYnBhY2s6Ly90ZXRyaXMtd2l0aC1zdHJhbmdlcnMvLi9zcmMvZ2FtZS91dGlscy9jYW52YXNfdXRpbC50cyIsIndlYnBhY2s6Ly90ZXRyaXMtd2l0aC1zdHJhbmdlcnMvLi9zcmMvZ2FtZS91dGlscy90ZXN0LnRzIiwid2VicGFjazovL3RldHJpcy13aXRoLXN0cmFuZ2Vycy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly90ZXRyaXMtd2l0aC1zdHJhbmdlcnMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGV0cmlzLXdpdGgtc3RyYW5nZXJzL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMEVBQTBCO0FBRTFCLGlGQUErQjtBQUMvQixJQUFNLFNBQVMsR0FBVyxRQUFRLENBQUM7QUFFbkM7SUFRRyxjQUFZLE1BQXlCO1FBQXJDLGlCQVdDO1FBVkUsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBNkIsQ0FBQztRQUMvRCxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQzVCLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssR0FBRyxFQUFFO1FBQzlCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxXQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLGNBQUks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QUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7OztVQ3JCQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTyBmcm9tIFwiLi9waWVjZXMvalwiXG5pbXBvcnQgeyBibG9ja3MgfSBmcm9tIFwiLi91dGlscy9jYW52YXNfdXRpbFwiO1xuaW1wb3J0IHRlc3QgZnJvbSBcIi4vdXRpbHMvdGVzdFwiXG5jb25zdCBGT05UU1RZTEU6IHN0cmluZyA9IFwiT3N3YWxkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkRcbiAgIHdpZHRoOiBudW1iZXI7XG4gICBoZWlnaHQ6IG51bWJlcjtcbiAgIHNjYWxlOiBudW1iZXJcbiAgIC8vIHRlc3RpbmdcbiAgIHBpZWNlOiBPO1xuICAgYmxvY2tzOiBibG9ja3NcbiAgIGNvbnN0cnVjdG9yKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpe1xuICAgICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKSBhcyBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gICAgICB0aGlzLndpZHRoID0gY2FudmFzLndpZHRoO1xuICAgICAgdGhpcy5oZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xuICAgICAgdGhpcy5zY2FsZSA9IGNhbnZhcy53aWR0aCAvIDEwXG4gICAgICB0aGlzLnBpZWNlID0gbmV3IE8odGhpcy5zY2FsZSlcbiAgICAgIHRoaXMuYmxvY2tzID0gdGVzdChjYW52YXMsIHRoaXMuc2NhbGUpXG4gICAgICB0aGlzLmFuaW1hdGUgPSB0aGlzLmFuaW1hdGUuYmluZCh0aGlzKVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7dGhpcy5waWVjZS5tb3ZlKFwiZFwiKX0sIDUwMCApXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHt0aGlzLnBpZWNlLnN0b3AoKX0sIDI1MDApXG4gICAgICB0aGlzLmFuaW1hdGUoKTtcbiAgIH1cblxuICAgYW5pbWF0ZSgpOiB2b2lke1xuXG4gICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgICAgdGhpcy5jdHguZmlsbFJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5zY2FsZSAqIDQpXG4gICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImdyZXlcIjtcbiAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KDAsIHRoaXMuc2NhbGUgKiA0LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICB0aGlzLmRyYXdHcmlkKCk7XG4gICAgICBsZXQgY29vcmRpbmF0ZXMgPSB0aGlzLnBpZWNlLmNvb3JkaW5hdGVzKClcbiAgICAgIGZvciggbGV0IGkgPSAwOyBpIDwgY29vcmRpbmF0ZXMubGVuZ3RoOyBpKysgKXtcbiAgICAgICAgIGxldCBwb3MgPSBjb29yZGluYXRlc1tpXVxuICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuYmxvY2tzW3RoaXMucGllY2UuY29sb3JdLCAuLi5wb3MpXG4gICAgICB9XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlKVxuICAgfVxuICAgLy8gdGVzdGluZ1xuICAgZHJhd0dyaWQoKTp2b2lke1xuICAgICAgbGV0IGk6IG51bWJlciA9IDA7XG5cbiAgICAgIHdoaWxlKCBpIDw9IHRoaXMud2lkdGgpe1xuICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICd3aGl0ZSc7XG4gICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oaSwgMCk7XG4gICAgICAgICB0aGlzLmN0eC5saW5lVG8oaSwgdGhpcy5oZWlnaHQpO1xuICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG4gICAgICAgICBpICs9IHRoaXMuc2NhbGU7XG4gICAgICB9XG4gICB9XG59XG4iLCJpbXBvcnQgUGllY2UgZnJvbSAnLi9waWVjZSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEogZXh0ZW5kcyBQaWVjZXtcbiAgIHJvdGF0aW9uOiBudW1iZXJcbiAgIGNvbG9yOiBzdHJpbmdcbiAgIGNvbnN0cnVjdG9yKHNjYWxlOiBudW1iZXIpe1xuICAgICAgc3VwZXIoW3NjYWxlICogNCwgc2NhbGVdLCBzY2FsZSlcbiAgICAgIHRoaXMucm90YXRpb24gPSAwO1xuICAgICAgdGhpcy5jb2xvciA9IFwiIzcyQ0IzQlwiO1xuICAgfVxuICAgY29vcmRpbmF0ZXMoKTogQXJyYXk8W251bWJlciwgbnVtYmVyXT57XG4gICAgICBzd2l0Y2godGhpcy5yb3RhdGlvbil7XG4gICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgdGhpcy5jZW50ZXJbMF0sIHRoaXMuY2VudGVyWzFdXG4gICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgdGhpcy5jZW50ZXJbMF0gKyB0aGlzLnNjYWxlLCB0aGlzLmNlbnRlclsxXVxuICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIHRoaXMuY2VudGVyWzBdIC0gdGhpcy5zY2FsZSwgdGhpcy5jZW50ZXJbMV1cbiAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICB0aGlzLmNlbnRlclswXSAtIHRoaXMuc2NhbGUsIHRoaXMuY2VudGVyWzFdIC0gdGhpcy5zY2FsZVxuICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgXVxuICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIHRoaXMuY2VudGVyWzBdLCB0aGlzLmNlbnRlclsxXVxuICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIHRoaXMuY2VudGVyWzBdLCB0aGlzLmNlbnRlclsxXSArIHRoaXMuc2NhbGVcbiAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICB0aGlzLmNlbnRlclswXSwgdGhpcy5jZW50ZXJbMV0gLSB0aGlzLnNjYWxlXG4gICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgdGhpcy5jZW50ZXJbMF0gLSB0aGlzLnNjYWxlLCB0aGlzLmNlbnRlclsxXSArIHRoaXMuc2NhbGVcbiAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIF1cbiAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICB0aGlzLmNlbnRlclswXSwgdGhpcy5jZW50ZXJbMV1cbiAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICB0aGlzLmNlbnRlclswXSAtIHRoaXMuc2NhbGUsIHRoaXMuY2VudGVyWzFdXG4gICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgdGhpcy5jZW50ZXJbMF0gKyB0aGlzLnNjYWxlLCB0aGlzLmNlbnRlclsxXVxuICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIHRoaXMuY2VudGVyWzBdICsgdGhpcy5zY2FsZSwgdGhpcy5jZW50ZXJbMV0gKyB0aGlzLnNjYWxlXG4gICAgICAgICAgICAgICBdXG4gICAgICAgICAgICBdXG4gICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgdGhpcy5jZW50ZXJbMF0sIHRoaXMuY2VudGVyWzFdXG4gICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgdGhpcy5jZW50ZXJbMF0sIHRoaXMuY2VudGVyWzFdIC0gdGhpcy5zY2FsZVxuICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIHRoaXMuY2VudGVyWzBdLCB0aGlzLmNlbnRlclsxXSArIHRoaXMuc2NhbGVcbiAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICB0aGlzLmNlbnRlclswXSArIHRoaXMuc2NhbGUsIHRoaXMuY2VudGVyWzFdIC0gdGhpcy5zY2FsZVxuICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgXVxuICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICB9XG4gICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGllY2Uge1xuICAgcG9zOiBbbnVtYmVyLCBudW1iZXJdO1xuICAgY2VudGVyOiBbbnVtYmVyLCBudW1iZXJdO1xuICAgc2NhbGU6IG51bWJlcjtcbiAgIGZhbGxJbnQ6IG51bWJlcjtcbiAgIGludGVydmFsSWQ6IE5vZGVKUy5UaW1lb3V0O1xuICAgdGltZW91dElkOiBOb2RlSlMuVGltZW91dDtcbiAgIGNvbnN0cnVjdG9yKFxuICAgICAgY2VudGVyOiBbbnVtYmVyLCBudW1iZXJdLCBcbiAgICAgIHNjYWxlOiBudW1iZXIsIFxuICAgICAgZmFsbEludDogbnVtYmVyID0gMTAwMFxuICAgICAgKXtcbiAgICAgIHRoaXMuc2NhbGUgPSBzY2FsZVxuICAgICAgdGhpcy5jZW50ZXIgPSBjZW50ZXI7Ly8gd2lsbCBwcm9iYWJseSBwYXNzIGluIGZyb20gY2hpbGQgY2xhc3NcbiAgICAgIHRoaXMuZmFsbEludCA9IGZhbGxJbnQgLy9zZXQgdXAgZm9yIHBsYXllciBvcHRpb25zIGxhdGVyXG4gICAgICB0aGlzLmZhbGwoKVxuICAgfVxuXG4gICBmYWxsKCk6IHZvaWR7XG4gICAgICBsZXQgdGhhdDogUGllY2UgPSB0aGlzXG4gICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICB0aGF0LmNlbnRlclsxXSArPSAodGhhdC5zY2FsZSAvIDQpXG4gICAgICB9LCB0aGF0LmZhbGxJbnQpXG4gICB9XG4gICBtb3ZlKGlucHV0OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIHN3aXRjaCAoaW5wdXQpIHtcbiAgICAgICAgIGNhc2UgXCJkXCI6XG4gICAgICAgICAgICB0aGlzLmNlbnRlclswXSA9IHRoaXMuY2VudGVyWzBdICsgdGhpcy5zY2FsZVxuICAgICAgICAgICAgdGhpcy50aW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgIHRoaXMudGltZW91dElkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgdGhpcy5jZW50ZXJbMF0gKz0gdGhpcy5zY2FsZSBcbiAgICAgICAgICAgICAgIH0sIDMwMClcbiAgICAgICAgICAgIH0sIDcwMClcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgfVxuICAgc3RvcCgpe1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dElkKVxuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVvdXRJZClcbiAgIH1cbiAgIGRyYXcoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHBvczogW251bWJlciwgbnVtYmVyXSk6IHZvaWR7XG4gICAgICBjdHguZmlsbFJlY3QoLi4ucG9zLCB0aGlzLnNjYWxlLCB0aGlzLnNjYWxlKVxuICAgfVxufSIsImV4cG9ydCBpbnRlcmZhY2UgYmxvY2tze1xuICAgW2NvbG9yczogc3RyaW5nXTogT2Zmc2NyZWVuQ2FudmFzXG59XG5leHBvcnQgZnVuY3Rpb24gb2ZmU2NyZWVuUmVuZGVyKFxuICAgc2NhbGU6IG51bWJlciwgXG4gICBjb2xvcnM6IEFycmF5PHN0cmluZz5cbiAgICk6IGJsb2Nrc3tcbiAgIGNvbnN0IGJsb2NrczogYmxvY2tzID0ge31cbiAgIGNvbG9ycy5mb3JFYWNoKCAoY29sb3I6IHN0cmluZykgPT4ge1xuICAgICAgbGV0IGNhbnZhczogT2Zmc2NyZWVuQ2FudmFzID0gbmV3IE9mZnNjcmVlbkNhbnZhcyhzY2FsZSwgc2NhbGUpO1xuICAgICAgbGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICBjdHguZmlsbFJlY3QoMCwgMCwgc2NhbGUsIHNjYWxlKTtcbiAgICAgIGN0eC5zdHJva2VSZWN0KDAsIDAsIHNjYWxlLCBzY2FsZSk7XG4gICAgICBjdHguY2xvc2VQYXRoO1xuICAgICAgYmxvY2tzW2NvbG9yXSA9IGNhbnZhcztcbiAgIH0pXG4gICByZXR1cm4gYmxvY2tzXG59IiwiaW1wb3J0IHsgb2ZmU2NyZWVuUmVuZGVyLCBibG9ja3MgfWZyb20gXCIuL2NhbnZhc191dGlsXCJcbmNvbnN0IENPTE9SUyA9IFtcIiMwMzQxQUVcIiwgXCIjNzJDQjNCXCIsIFwiI0ZGRDUwMFwiLCBcIiNGRjk3MUNcIiwgXCIjRkYzMjEzXCJdXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0ZXN0RHJhdyhjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBzY2FsZTpudW1iZXIpOiBibG9ja3N7XG4gICBsZXQgYmxvY2tzOiBibG9ja3MgPSBcbiAgIG9mZlNjcmVlblJlbmRlcihzY2FsZSwgW1wiIzAzNDFBRVwiLCBcIiM3MkNCM0JcIiwgXCIjRkZENTAwXCIsIFwiI0ZGOTcxQ1wiLCBcIiNGRjMyMTNcIl0pXG4gICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgIC8vIC8vIExpbmVcbiAgIC8vIGN0eC5kcmF3SW1hZ2UoYmxvY2tzW0NPTE9SU1swXV0sIDAsIDApXG4gICAvLyBjdHguZHJhd0ltYWdlKGJsb2Nrc1tDT0xPUlNbMF1dLCAwLCBzY2FsZSlcbiAgIC8vIGN0eC5kcmF3SW1hZ2UoYmxvY2tzW0NPTE9SU1swXV0sIDAsIDIgKiBzY2FsZSlcbiAgIC8vIGN0eC5kcmF3SW1hZ2UoYmxvY2tzW0NPTE9SU1swXV0sIDAsIDMgKiBzY2FsZSlcbiAgIC8vIC8vIGJsb2NrXG4gICAvLyBjdHguZHJhd0ltYWdlKGJsb2Nrc1tDT0xPUlNbMV1dLCAyKnNjYWxlLCAwKVxuICAgLy8gY3R4LmRyYXdJbWFnZShibG9ja3NbQ09MT1JTWzFdXSwgMipzY2FsZSwgc2NhbGUpXG4gICAvLyBjdHguZHJhd0ltYWdlKGJsb2Nrc1tDT0xPUlNbMV1dLCAzICogc2NhbGUsIDApXG4gICAvLyBjdHguZHJhd0ltYWdlKGJsb2Nrc1tDT0xPUlNbMV1dLCAzICogc2NhbGUsIHNjYWxlKVxuICAgLy8gLy9UXG4gICAvLyBjdHguZHJhd0ltYWdlKGJsb2Nrc1tDT0xPUlNbMl1dLCA1KiBzY2FsZSwgMClcbiAgIC8vIGN0eC5kcmF3SW1hZ2UoYmxvY2tzW0NPTE9SU1syXV0sIDYqIHNjYWxlLCAwKVxuICAgLy8gY3R4LmRyYXdJbWFnZShibG9ja3NbQ09MT1JTWzJdXSwgNiogc2NhbGUsIHNjYWxlKVxuICAgLy8gY3R4LmRyYXdJbWFnZShibG9ja3NbQ09MT1JTWzJdXSwgNyogc2NhbGUsIDApXG4gICAvLyAvLyAyIFxuICAgLy8gY3R4LmRyYXdJbWFnZShibG9ja3NbQ09MT1JTWzNdXSwgMCwgNSAqIHNjYWxlKVxuICAgLy8gY3R4LmRyYXdJbWFnZShibG9ja3NbQ09MT1JTWzNdXSwgc2NhbGUsIDUgKiBzY2FsZSlcbiAgIC8vIGN0eC5kcmF3SW1hZ2UoYmxvY2tzW0NPTE9SU1szXV0sIHNjYWxlLCA2ICogc2NhbGUpXG4gICAvLyBjdHguZHJhd0ltYWdlKGJsb2Nrc1tDT0xPUlNbM11dLCAyICogc2NhbGUsIDYgKiBzY2FsZSlcbiAgIC8vIC8vIExcbiAgIC8vIGN0eC5kcmF3SW1hZ2UoYmxvY2tzW0NPTE9SU1s0XV0sIDQgKiBzY2FsZSwgNSAqIHNjYWxlKVxuICAgLy8gY3R4LmRyYXdJbWFnZShibG9ja3NbQ09MT1JTWzRdXSwgNCAqIHNjYWxlLCA2ICogc2NhbGUpXG4gICAvLyBjdHguZHJhd0ltYWdlKGJsb2Nrc1tDT0xPUlNbNF1dLCA0ICogc2NhbGUsIDcgKiBzY2FsZSlcbiAgIC8vIGN0eC5kcmF3SW1hZ2UoYmxvY2tzW0NPTE9SU1s0XV0sIDUgKiBzY2FsZSwgNyAqIHNjYWxlKVxuICAgcmV0dXJuIGJsb2Nrc1xufSIsImltcG9ydCBHYW1lICBmcm9tIFwiLi9nYW1lL2dhbWVcIlxuaW1wb3J0IHRlc3REcmF3IGZyb20gXCIuL2dhbWUvdXRpbHMvdGVzdFwiXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICBsZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lXCIpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xuICAgY2FudmFzLmhlaWdodCA9IE1hdGguZmxvb3Iod2luZG93LmlubmVySGVpZ2h0ICogLjgwKTtcbiAgIGNhbnZhcy53aWR0aCA9ICBNYXRoLmZsb29yKGNhbnZhcy5oZWlnaHQgLyAyNCkgKiAxMDtcblxuICAgY29uc3QgZ2FtZTogR2FtZSA9IG5ldyBHYW1lKGNhbnZhcykgXG59KSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbiJdLCJzb3VyY2VSb290IjoiIn0=