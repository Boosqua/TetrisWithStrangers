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
        setInterval(function () {
            _this.piece.rotation = (_this.piece.rotation + 1) % 4;
        }, 500);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXRyaXMtd2l0aC1zdHJhbmdlcnMvLi9zcmMvZ2FtZS9nYW1lLnRzIiwid2VicGFjazovL3RldHJpcy13aXRoLXN0cmFuZ2Vycy8uL3NyYy9nYW1lL3BpZWNlcy9qLnRzIiwid2VicGFjazovL3RldHJpcy13aXRoLXN0cmFuZ2Vycy8uL3NyYy9nYW1lL3BpZWNlcy9waWVjZS50cyIsIndlYnBhY2s6Ly90ZXRyaXMtd2l0aC1zdHJhbmdlcnMvLi9zcmMvZ2FtZS91dGlscy9jYW52YXNfdXRpbC50cyIsIndlYnBhY2s6Ly90ZXRyaXMtd2l0aC1zdHJhbmdlcnMvLi9zcmMvZ2FtZS91dGlscy90ZXN0LnRzIiwid2VicGFjazovL3RldHJpcy13aXRoLXN0cmFuZ2Vycy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly90ZXRyaXMtd2l0aC1zdHJhbmdlcnMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGV0cmlzLXdpdGgtc3RyYW5nZXJzL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMEVBQTBCO0FBRTFCLGlGQUErQjtBQUMvQixJQUFNLFNBQVMsR0FBVyxRQUFRLENBQUM7QUFFbkM7SUFRRyxjQUFZLE1BQXlCO1FBQXJDLGlCQVlDO1FBWEUsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBNkIsQ0FBQztRQUMvRCxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQzVCLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssR0FBRyxFQUFFO1FBQzlCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxXQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLGNBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN0QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN0QyxXQUFXLENBQUM7WUFDVCxLQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDdEQsQ0FBQyxFQUFFLEdBQUcsQ0FBQztRQUNQLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRUQsc0JBQU8sR0FBUDs7UUFFRyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztRQUM3QixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1FBQzVCLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEIsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUU7UUFDMUMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDMUMsSUFBSSxHQUFHLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUN4QixVQUFJLENBQUMsR0FBRyxFQUFDLFNBQVMsMkJBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFLLEdBQUcsR0FBQztTQUMzRDtRQUNELHFCQUFxQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEMsQ0FBQztJQUNELFVBQVU7SUFDVix1QkFBUSxHQUFSO1FBQ0csSUFBSSxDQUFDLEdBQVcsQ0FBQyxDQUFDO1FBRWxCLE9BQU8sQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUM7WUFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUM7WUFDL0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNsQixDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQztTQUNsQjtJQUNKLENBQUM7SUFDSixXQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkRELCtFQUEyQjtBQUMzQjtJQUErQixxQkFBSztJQUdqQyxXQUFZLEtBQWE7UUFBekIsWUFDRyxrQkFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUUsS0FBSyxDQUFDLFNBR2xDO1FBRkUsS0FBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDbEIsS0FBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7O0lBQzFCLENBQUM7SUFDRCx1QkFBVyxHQUFYO1FBQ0csUUFBTyxJQUFJLENBQUMsUUFBUSxFQUFDO1lBQ2xCLEtBQUssQ0FBQztnQkFDSCxPQUFPO29CQUNKO3dCQUNHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7cUJBQ2hDO29CQUNEO3dCQUNHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztxQkFDN0M7b0JBQ0Q7d0JBQ0csSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO3FCQUM3QztvQkFDRDt3QkFDRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSztxQkFDMUQ7aUJBQ0g7WUFDSixLQUFLLENBQUM7Z0JBQ0gsT0FBTztvQkFDSjt3QkFDRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO3FCQUNoQztvQkFDRDt3QkFDRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUs7cUJBQzdDO29CQUNEO3dCQUNHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSztxQkFDN0M7b0JBQ0Q7d0JBQ0csSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUs7cUJBQzFEO2lCQUNIO1lBQ0osS0FBSyxDQUFDO2dCQUNILE9BQU87b0JBQ0o7d0JBQ0csSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztxQkFDaEM7b0JBQ0Q7d0JBQ0csSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO3FCQUM3QztvQkFDRDt3QkFDRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7cUJBQzdDO29CQUNEO3dCQUNHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLO3FCQUMxRDtpQkFDSDtZQUNKLEtBQUssQ0FBQztnQkFDSCxPQUFPO29CQUNKO3dCQUNHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7cUJBQ2hDO29CQUNEO3dCQUNHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSztxQkFDN0M7b0JBQ0Q7d0JBQ0csSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLO3FCQUM3QztvQkFDRDt3QkFDRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSztxQkFDMUQ7aUJBQ0g7WUFDSjtnQkFDRyxNQUFLO1NBQ1Y7SUFDSixDQUFDO0lBQ0osUUFBQztBQUFELENBQUMsQ0ExRThCLGVBQUssR0EwRW5DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRUQ7SUFLRyxlQUNHLE1BQXdCLEVBQ3hCLEtBQWEsRUFDYixPQUFzQjtRQUF0Qix3Q0FBc0I7UUFFdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLO1FBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLDBDQUF5QztRQUM5RCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sRUFBQyxpQ0FBaUM7UUFDeEQsSUFBSSxDQUFDLElBQUksRUFBRTtJQUNkLENBQUM7SUFFRCxvQkFBSSxHQUFKO1FBQ0csSUFBSSxJQUFJLEdBQVUsSUFBSTtRQUN0QixXQUFXLENBQUM7WUFDVCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDckMsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQUVELG9CQUFJLEdBQUosVUFBSyxHQUE2QixFQUFFLEdBQXFCO1FBQ3RELEdBQUcsQ0FBQyxRQUFRLE9BQVosR0FBRyxpQkFBYSxHQUFHLEdBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxJQUFDO0lBQy9DLENBQUM7SUFDSixZQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDdkJELFNBQWdCLGVBQWUsQ0FDNUIsS0FBYSxFQUNiLE1BQXFCO0lBRXJCLElBQU0sTUFBTSxHQUFXLEVBQUU7SUFDekIsTUFBTSxDQUFDLE9BQU8sQ0FBRSxVQUFDLEtBQWE7UUFDM0IsSUFBSSxNQUFNLEdBQW9CLElBQUksZUFBZSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNoRSxJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNoQixHQUFHLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN0QixHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2pDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDbkMsR0FBRyxDQUFDLFNBQVMsQ0FBQztRQUNkLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxNQUFNLENBQUM7SUFDMUIsQ0FBQyxDQUFDO0lBQ0YsT0FBTyxNQUFNO0FBQ2hCLENBQUM7QUFoQkQsMENBZ0JDOzs7Ozs7Ozs7Ozs7O0FDbkJELGdHQUFzRDtBQUN0RCxJQUFNLE1BQU0sR0FBRyxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUM7QUFDdEUsU0FBd0IsUUFBUSxDQUFDLE1BQXlCLEVBQUUsS0FBWTtJQUNyRSxJQUFJLE1BQU0sR0FDViw2QkFBZSxDQUFDLEtBQUssRUFBRSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUMvRSxJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xDLFVBQVU7SUFDVix5Q0FBeUM7SUFDekMsNkNBQTZDO0lBQzdDLGlEQUFpRDtJQUNqRCxpREFBaUQ7SUFDakQsV0FBVztJQUNYLCtDQUErQztJQUMvQyxtREFBbUQ7SUFDbkQsaURBQWlEO0lBQ2pELHFEQUFxRDtJQUNyRCxNQUFNO0lBQ04sZ0RBQWdEO0lBQ2hELGdEQUFnRDtJQUNoRCxvREFBb0Q7SUFDcEQsZ0RBQWdEO0lBQ2hELFFBQVE7SUFDUixpREFBaUQ7SUFDakQscURBQXFEO0lBQ3JELHFEQUFxRDtJQUNyRCx5REFBeUQ7SUFDekQsT0FBTztJQUNQLHlEQUF5RDtJQUN6RCx5REFBeUQ7SUFDekQseURBQXlEO0lBQ3pELHlEQUF5RDtJQUN6RCxPQUFPLE1BQU07QUFDaEIsQ0FBQztBQTlCRCwyQkE4QkM7Ozs7Ozs7Ozs7Ozs7QUNoQ0QsMEVBQStCO0FBRS9CLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRTtJQUMzQyxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBc0IsQ0FBQztJQUNsRSxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUNyRCxNQUFNLENBQUMsS0FBSyxHQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUM7SUFFcEQsSUFBTSxJQUFJLEdBQVMsSUFBSSxjQUFJLENBQUMsTUFBTSxDQUFDO0FBQ3RDLENBQUMsQ0FBQzs7Ozs7OztVQ1JGO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7VUNyQkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE8gZnJvbSBcIi4vcGllY2VzL2pcIlxuaW1wb3J0IHsgYmxvY2tzIH0gZnJvbSBcIi4vdXRpbHMvY2FudmFzX3V0aWxcIjtcbmltcG9ydCB0ZXN0IGZyb20gXCIuL3V0aWxzL3Rlc3RcIlxuY29uc3QgRk9OVFNUWUxFOiBzdHJpbmcgPSBcIk9zd2FsZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEXG4gICB3aWR0aDogbnVtYmVyO1xuICAgaGVpZ2h0OiBudW1iZXI7XG4gICBzY2FsZTogbnVtYmVyXG4gICAvLyB0ZXN0aW5nXG4gICBwaWVjZTogTztcbiAgIGJsb2NrczogYmxvY2tzXG4gICBjb25zdHJ1Y3RvcihjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KXtcbiAgICAgIHRoaXMuY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJykgYXMgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICAgICAgdGhpcy53aWR0aCA9IGNhbnZhcy53aWR0aDtcbiAgICAgIHRoaXMuaGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcbiAgICAgIHRoaXMuc2NhbGUgPSBjYW52YXMud2lkdGggLyAxMFxuICAgICAgdGhpcy5waWVjZSA9IG5ldyBPKHRoaXMuc2NhbGUpXG4gICAgICB0aGlzLmJsb2NrcyA9IHRlc3QoY2FudmFzLCB0aGlzLnNjYWxlKVxuICAgICAgdGhpcy5hbmltYXRlID0gdGhpcy5hbmltYXRlLmJpbmQodGhpcylcbiAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgIHRoaXMucGllY2Uucm90YXRpb24gPSAodGhpcy5waWVjZS5yb3RhdGlvbiArIDEpICUgNFxuICAgICAgfSwgNTAwKVxuICAgICAgdGhpcy5hbmltYXRlKCk7XG4gICB9XG5cbiAgIGFuaW1hdGUoKTogdm9pZHtcblxuICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuc2NhbGUgKiA0KVxuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJncmV5XCI7XG4gICAgICB0aGlzLmN0eC5maWxsUmVjdCgwLCB0aGlzLnNjYWxlICogNCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgdGhpcy5kcmF3R3JpZCgpO1xuICAgICAgbGV0IGNvb3JkaW5hdGVzID0gdGhpcy5waWVjZS5jb29yZGluYXRlcygpXG4gICAgICBmb3IoIGxldCBpID0gMDsgaSA8IGNvb3JkaW5hdGVzLmxlbmd0aDsgaSsrICl7XG4gICAgICAgICBsZXQgcG9zID0gY29vcmRpbmF0ZXNbaV1cbiAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmJsb2Nrc1t0aGlzLnBpZWNlLmNvbG9yXSwgLi4ucG9zKVxuICAgICAgfVxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZSlcbiAgIH1cbiAgIC8vIHRlc3RpbmdcbiAgIGRyYXdHcmlkKCk6dm9pZHtcbiAgICAgIGxldCBpOiBudW1iZXIgPSAwO1xuXG4gICAgICB3aGlsZSggaSA8PSB0aGlzLndpZHRoKXtcbiAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnd2hpdGUnO1xuICAgICAgICAgdGhpcy5jdHgubW92ZVRvKGksIDApO1xuICAgICAgICAgdGhpcy5jdHgubGluZVRvKGksIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuICAgICAgICAgaSArPSB0aGlzLnNjYWxlO1xuICAgICAgfVxuICAgfVxufVxuIiwiaW1wb3J0IFBpZWNlIGZyb20gJy4vcGllY2UnXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKIGV4dGVuZHMgUGllY2V7XG4gICByb3RhdGlvbjogbnVtYmVyXG4gICBjb2xvcjogc3RyaW5nXG4gICBjb25zdHJ1Y3RvcihzY2FsZTogbnVtYmVyKXtcbiAgICAgIHN1cGVyKFtzY2FsZSAqIDQsIHNjYWxlXSwgc2NhbGUpXG4gICAgICB0aGlzLnJvdGF0aW9uID0gMDtcbiAgICAgIHRoaXMuY29sb3IgPSBcIiM3MkNCM0JcIjtcbiAgIH1cbiAgIGNvb3JkaW5hdGVzKCk6IEFycmF5PFtudW1iZXIsIG51bWJlcl0+e1xuICAgICAgc3dpdGNoKHRoaXMucm90YXRpb24pe1xuICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIHRoaXMuY2VudGVyWzBdLCB0aGlzLmNlbnRlclsxXVxuICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIHRoaXMuY2VudGVyWzBdICsgdGhpcy5zY2FsZSwgdGhpcy5jZW50ZXJbMV1cbiAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICB0aGlzLmNlbnRlclswXSAtIHRoaXMuc2NhbGUsIHRoaXMuY2VudGVyWzFdXG4gICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgdGhpcy5jZW50ZXJbMF0gLSB0aGlzLnNjYWxlLCB0aGlzLmNlbnRlclsxXSAtIHRoaXMuc2NhbGVcbiAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIF1cbiAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICB0aGlzLmNlbnRlclswXSwgdGhpcy5jZW50ZXJbMV1cbiAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICB0aGlzLmNlbnRlclswXSwgdGhpcy5jZW50ZXJbMV0gKyB0aGlzLnNjYWxlXG4gICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgdGhpcy5jZW50ZXJbMF0sIHRoaXMuY2VudGVyWzFdIC0gdGhpcy5zY2FsZVxuICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIHRoaXMuY2VudGVyWzBdIC0gdGhpcy5zY2FsZSwgdGhpcy5jZW50ZXJbMV0gKyB0aGlzLnNjYWxlXG4gICAgICAgICAgICAgICBdXG4gICAgICAgICAgICBdXG4gICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgdGhpcy5jZW50ZXJbMF0sIHRoaXMuY2VudGVyWzFdXG4gICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgdGhpcy5jZW50ZXJbMF0gLSB0aGlzLnNjYWxlLCB0aGlzLmNlbnRlclsxXVxuICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIHRoaXMuY2VudGVyWzBdICsgdGhpcy5zY2FsZSwgdGhpcy5jZW50ZXJbMV1cbiAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICB0aGlzLmNlbnRlclswXSArIHRoaXMuc2NhbGUsIHRoaXMuY2VudGVyWzFdICsgdGhpcy5zY2FsZVxuICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgXVxuICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIHRoaXMuY2VudGVyWzBdLCB0aGlzLmNlbnRlclsxXVxuICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIHRoaXMuY2VudGVyWzBdLCB0aGlzLmNlbnRlclsxXSAtIHRoaXMuc2NhbGVcbiAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICB0aGlzLmNlbnRlclswXSwgdGhpcy5jZW50ZXJbMV0gKyB0aGlzLnNjYWxlXG4gICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgdGhpcy5jZW50ZXJbMF0gKyB0aGlzLnNjYWxlLCB0aGlzLmNlbnRlclsxXSAtIHRoaXMuc2NhbGVcbiAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIF1cbiAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVha1xuICAgICAgfVxuICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBpZWNlIHtcbiAgIHBvczogW251bWJlciwgbnVtYmVyXTtcbiAgIGNlbnRlcjogW251bWJlciwgbnVtYmVyXTtcbiAgIHNjYWxlOiBudW1iZXI7XG4gICBmYWxsSW50OiBudW1iZXI7XG4gICBjb25zdHJ1Y3RvcihcbiAgICAgIGNlbnRlcjogW251bWJlciwgbnVtYmVyXSwgXG4gICAgICBzY2FsZTogbnVtYmVyLCBcbiAgICAgIGZhbGxJbnQ6IG51bWJlciA9IDEwMDBcbiAgICAgICl7XG4gICAgICB0aGlzLnNjYWxlID0gc2NhbGVcbiAgICAgIHRoaXMuY2VudGVyID0gY2VudGVyOy8vIHdpbGwgcHJvYmFibHkgcGFzcyBpbiBmcm9tIGNoaWxkIGNsYXNzXG4gICAgICB0aGlzLmZhbGxJbnQgPSBmYWxsSW50IC8vc2V0IHVwIGZvciBwbGF5ZXIgb3B0aW9ucyBsYXRlclxuICAgICAgdGhpcy5mYWxsKClcbiAgIH1cblxuICAgZmFsbCgpOiB2b2lke1xuICAgICAgbGV0IHRoYXQ6IFBpZWNlID0gdGhpc1xuICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgdGhhdC5jZW50ZXJbMV0gKz0gKHRoYXQuc2NhbGUgLyA0KVxuICAgICAgfSwgdGhhdC5mYWxsSW50KVxuICAgfVxuXG4gICBkcmF3KGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBwb3M6IFtudW1iZXIsIG51bWJlcl0pOiB2b2lke1xuICAgICAgY3R4LmZpbGxSZWN0KC4uLnBvcywgdGhpcy5zY2FsZSwgdGhpcy5zY2FsZSlcbiAgIH1cbn0iLCJleHBvcnQgaW50ZXJmYWNlIGJsb2Nrc3tcbiAgIFtjb2xvcnM6IHN0cmluZ106IE9mZnNjcmVlbkNhbnZhc1xufVxuZXhwb3J0IGZ1bmN0aW9uIG9mZlNjcmVlblJlbmRlcihcbiAgIHNjYWxlOiBudW1iZXIsIFxuICAgY29sb3JzOiBBcnJheTxzdHJpbmc+XG4gICApOiBibG9ja3N7XG4gICBjb25zdCBibG9ja3M6IGJsb2NrcyA9IHt9XG4gICBjb2xvcnMuZm9yRWFjaCggKGNvbG9yOiBzdHJpbmcpID0+IHtcbiAgICAgIGxldCBjYW52YXM6IE9mZnNjcmVlbkNhbnZhcyA9IG5ldyBPZmZzY3JlZW5DYW52YXMoc2NhbGUsIHNjYWxlKTtcbiAgICAgIGxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIHNjYWxlLCBzY2FsZSk7XG4gICAgICBjdHguc3Ryb2tlUmVjdCgwLCAwLCBzY2FsZSwgc2NhbGUpO1xuICAgICAgY3R4LmNsb3NlUGF0aDtcbiAgICAgIGJsb2Nrc1tjb2xvcl0gPSBjYW52YXM7XG4gICB9KVxuICAgcmV0dXJuIGJsb2Nrc1xufSIsImltcG9ydCB7IG9mZlNjcmVlblJlbmRlciwgYmxvY2tzIH1mcm9tIFwiLi9jYW52YXNfdXRpbFwiXG5jb25zdCBDT0xPUlMgPSBbXCIjMDM0MUFFXCIsIFwiIzcyQ0IzQlwiLCBcIiNGRkQ1MDBcIiwgXCIjRkY5NzFDXCIsIFwiI0ZGMzIxM1wiXVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGVzdERyYXcoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgc2NhbGU6bnVtYmVyKTogYmxvY2tze1xuICAgbGV0IGJsb2NrczogYmxvY2tzID0gXG4gICBvZmZTY3JlZW5SZW5kZXIoc2NhbGUsIFtcIiMwMzQxQUVcIiwgXCIjNzJDQjNCXCIsIFwiI0ZGRDUwMFwiLCBcIiNGRjk3MUNcIiwgXCIjRkYzMjEzXCJdKVxuICAgbGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAvLyAvLyBMaW5lXG4gICAvLyBjdHguZHJhd0ltYWdlKGJsb2Nrc1tDT0xPUlNbMF1dLCAwLCAwKVxuICAgLy8gY3R4LmRyYXdJbWFnZShibG9ja3NbQ09MT1JTWzBdXSwgMCwgc2NhbGUpXG4gICAvLyBjdHguZHJhd0ltYWdlKGJsb2Nrc1tDT0xPUlNbMF1dLCAwLCAyICogc2NhbGUpXG4gICAvLyBjdHguZHJhd0ltYWdlKGJsb2Nrc1tDT0xPUlNbMF1dLCAwLCAzICogc2NhbGUpXG4gICAvLyAvLyBibG9ja1xuICAgLy8gY3R4LmRyYXdJbWFnZShibG9ja3NbQ09MT1JTWzFdXSwgMipzY2FsZSwgMClcbiAgIC8vIGN0eC5kcmF3SW1hZ2UoYmxvY2tzW0NPTE9SU1sxXV0sIDIqc2NhbGUsIHNjYWxlKVxuICAgLy8gY3R4LmRyYXdJbWFnZShibG9ja3NbQ09MT1JTWzFdXSwgMyAqIHNjYWxlLCAwKVxuICAgLy8gY3R4LmRyYXdJbWFnZShibG9ja3NbQ09MT1JTWzFdXSwgMyAqIHNjYWxlLCBzY2FsZSlcbiAgIC8vIC8vVFxuICAgLy8gY3R4LmRyYXdJbWFnZShibG9ja3NbQ09MT1JTWzJdXSwgNSogc2NhbGUsIDApXG4gICAvLyBjdHguZHJhd0ltYWdlKGJsb2Nrc1tDT0xPUlNbMl1dLCA2KiBzY2FsZSwgMClcbiAgIC8vIGN0eC5kcmF3SW1hZ2UoYmxvY2tzW0NPTE9SU1syXV0sIDYqIHNjYWxlLCBzY2FsZSlcbiAgIC8vIGN0eC5kcmF3SW1hZ2UoYmxvY2tzW0NPTE9SU1syXV0sIDcqIHNjYWxlLCAwKVxuICAgLy8gLy8gMiBcbiAgIC8vIGN0eC5kcmF3SW1hZ2UoYmxvY2tzW0NPTE9SU1szXV0sIDAsIDUgKiBzY2FsZSlcbiAgIC8vIGN0eC5kcmF3SW1hZ2UoYmxvY2tzW0NPTE9SU1szXV0sIHNjYWxlLCA1ICogc2NhbGUpXG4gICAvLyBjdHguZHJhd0ltYWdlKGJsb2Nrc1tDT0xPUlNbM11dLCBzY2FsZSwgNiAqIHNjYWxlKVxuICAgLy8gY3R4LmRyYXdJbWFnZShibG9ja3NbQ09MT1JTWzNdXSwgMiAqIHNjYWxlLCA2ICogc2NhbGUpXG4gICAvLyAvLyBMXG4gICAvLyBjdHguZHJhd0ltYWdlKGJsb2Nrc1tDT0xPUlNbNF1dLCA0ICogc2NhbGUsIDUgKiBzY2FsZSlcbiAgIC8vIGN0eC5kcmF3SW1hZ2UoYmxvY2tzW0NPTE9SU1s0XV0sIDQgKiBzY2FsZSwgNiAqIHNjYWxlKVxuICAgLy8gY3R4LmRyYXdJbWFnZShibG9ja3NbQ09MT1JTWzRdXSwgNCAqIHNjYWxlLCA3ICogc2NhbGUpXG4gICAvLyBjdHguZHJhd0ltYWdlKGJsb2Nrc1tDT0xPUlNbNF1dLCA1ICogc2NhbGUsIDcgKiBzY2FsZSlcbiAgIHJldHVybiBibG9ja3Ncbn0iLCJpbXBvcnQgR2FtZSAgZnJvbSBcIi4vZ2FtZS9nYW1lXCJcbmltcG9ydCB0ZXN0RHJhdyBmcm9tIFwiLi9nYW1lL3V0aWxzL3Rlc3RcIlxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZVwiKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcbiAgIGNhbnZhcy5oZWlnaHQgPSBNYXRoLmZsb29yKHdpbmRvdy5pbm5lckhlaWdodCAqIC44MCk7XG4gICBjYW52YXMud2lkdGggPSAgTWF0aC5mbG9vcihjYW52YXMuaGVpZ2h0IC8gMjQpICogMTA7XG5cbiAgIGNvbnN0IGdhbWU6IEdhbWUgPSBuZXcgR2FtZShjYW52YXMpIFxufSkiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9