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
var piece_1 = __webpack_require__(/*! ./pieces/piece */ "./src/game/pieces/piece.ts");
var FONTSTYLE = "Oswald";
var Game = /** @class */ (function () {
    function Game(canvas) {
        this.ctx = canvas.getContext('2d');
        this.width = canvas.width;
        this.height = canvas.height;
        this.startRunning = false;
        this.startAnimation = null;
        this.gridScale = canvas.width / 10;
        this.startCompleted = false;
        this.animate = this.animate.bind(this);
        this.piece = new piece_1.default(this.gridScale);
        this.animate();
    }
    Game.prototype.animate = function () {
        var _a, _b;
        this.ctx.save();
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 0, this.width, this.gridScale * 4);
        this.ctx.fillStyle = "grey";
        this.ctx.fillRect(0, this.gridScale * 4, this.width, this.height);
        this.ctx.restore();
        this.drawGrid();
        if (!this.startRunning) {
            this.startRunning = true;
            this.startAnimation = this.animateStartValues();
        }
        if (!this.startCompleted)
            this.drawStart();
        // testing
        this.ctx.save();
        var i = 0;
        var pos = __spreadArrays(this.piece.pos);
        this.ctx.strokeStyle = "pink";
        (_a = this.ctx).strokeRect.apply(_a, __spreadArrays(pos, [this.gridScale * 4, this.gridScale * 4]));
        this.ctx.restore();
        while (this.startCompleted && i < 4) {
            this.ctx.fillStyle = "yellow";
            this.piece.draw(this.ctx, pos);
            pos[1] += this.gridScale;
            i++;
        }
        i = 0;
        this.ctx.restore();
        this.ctx.strokeStyle = "rgba(0, 0, 0)";
        (_b = this.ctx).strokeRect.apply(_b, __spreadArrays(this.piece.pos, [this.gridScale, this.gridScale * 4]));
        while (i < 4) {
            this.ctx.beginPath();
            this.ctx.moveTo(this.piece.pos[0], this.piece.pos[1] + this.gridScale * (i + 1));
            this.ctx.lineTo(this.piece.pos[0] + this.gridScale, this.piece.pos[1] + this.gridScale * (i + 1));
            this.ctx.stroke();
            i++;
        }
        requestAnimationFrame(this.animate);
    };
    Game.prototype.drawStart = function () {
        this.ctx.save();
        this.ctx.fillStyle = "black";
        this.ctx.font = this.startAnimation.size + "px " + FONTSTYLE;
        this.ctx.textAlign = "center";
        // this.ctx.fillText(this.startAnimation.value, this.width / 2, this.height / 2)
        this.ctx.fillText(this.startAnimation.value, this.width / 2, this.height / 2);
        this.ctx.restore();
    };
    Game.prototype.animateStartValues = function () {
        var _this = this;
        var fontSize = this.width * .25;
        var animation = { value: "3 . . .", size: fontSize };
        var decrement = setInterval(function () { animation.size -= fontSize * .04; }, 40);
        setTimeout(function () {
            animation.value = "2 . . .";
            animation.size = fontSize;
        }, 1000);
        setTimeout(function () {
            animation.value = "1 . . .";
            animation.size = fontSize;
        }, 2000);
        setTimeout(function () {
            animation.value = "START";
            animation.size = fontSize * 1.2;
            clearInterval(decrement);
        }, 3000);
        setTimeout(function () {
            animation.value = "";
            _this.startCompleted = true;
        }, 3500);
        return animation;
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
            i += this.gridScale;
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
    function Piece(gridScale, fallInt, center) {
        if (fallInt === void 0) { fallInt = 1000; }
        if (center === void 0) { center = null; }
        this.gridScale = gridScale;
        this.pos = [4 * gridScale, 0];
        this.center = center; // will probably pass in from child class
        this.fallInt = fallInt; //set up for player options later
        this.fall();
    }
    Piece.prototype.fall = function () {
        var that = this;
        setInterval(function () {
            that.pos[1] += (that.gridScale / 4);
        }, that.fallInt);
    };
    Piece.prototype.draw = function (ctx, pos) {
        ctx.fillRect.apply(ctx, __spreadArrays(pos, [this.gridScale, this.gridScale]));
    };
    return Piece;
}());
exports.default = Piece;


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
    canvas.height = window.innerHeight * .80;
    canvas.width = canvas.height / 24 * 10;
    var game = new game_1.default(canvas);
    // TESTING
    // GRID
    // const width: number = canvas.width;
    // let ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    // const height: number = canvas.height;
    // const gridScale: number = canvas.width / 10;
    // ctx.fillStyle = "pink"
    // ctx.fillRect(gridScale * 5, 0, gridScale * 4, gridScale)
    // // ctx.strokeStyle = "rgba(0, 0, 0, 0.1)"
    // ctx.globalAlpha = .7
    // ctx.strokeRect(gridScale * 5, 0, gridScale * 4, gridScale)
    // ctx.beginPath();
    // ctx.strokeStyle = "rgba (0, 0, 0, .1)";
    // // ctx.shadowColor = "rgba(0, 0, 0, 1)"
    // // ctx.shadowBlur = 4
    // // ctx.shadowOffsetY = -1
    // ctx.moveTo(gridScale * 5, gridScale)
    // ctx.lineTo(gridScale * 9, gridScale)
    // ctx.stroke()
    // // ctx.closePath()
    // // ctx.restore()
    // ctx.beginPath();
    // // ctx.strokeStyle = "rgba (0, 0, 0, .01)"
    // // ctx.shadowColor = "rgba(0, 0, 0, 1)"
    // // ctx.shadowBlur = 4
    // // ctx.shadowOffsetX = 1
    // // ctx.lineWidth = 2
    // ctx.moveTo(gridScale * 6, 0)
    // ctx.lineTo(gridScale * 6, gridScale)
    // ctx.stroke()
    // ctx.closePath()
    // ctx.beginPath()
    // ctx.moveTo(gridScale * 7, 0)
    // ctx.lineTo(gridScale * 7, gridScale)
    // ctx.stroke()
    // ctx.beginPath()
    // ctx.moveTo(gridScale * 8, 0)
    // ctx.lineTo(gridScale * 8, gridScale)
    // ctx.stroke()
    // ctx.beginPath();
    // ctx.moveTo(gridScale * 5, gridScale)
    // ctx.lineTo(gridScale * 7, gridScale)
    // ctx.shadowColor = "rgba(109, 87, 91, 0.815)";
    // ctx.shadowColor = "rgba(0, 0, 0, 0.9)";
    // ctx.lineWidth = 2
    // ctx.shadowBlur = 2;
    // ctx.shadowOffsetX = 0;
    // ctx.shadowOffsetY = -2;
    // ctx.stroke()
    // ctx.shadowColor = "rgba(0, 0, 0, 0)"
    // ctx.lineWidth = 1
    // ctx.fillRect(gridScale * 6, 0, gridScale, gridScale)
    // ctx.strokeStyle = "rgba(0, 0, 0, 0.541)"
    // ctx.strokeRect(gridScale * 6, 0, gridScale, gridScale)
    // ctx.shadowColor = "rgba(0, 0, 0, 0.9)";
    // ctx.lineWidth = 2
    // ctx.shadowBlur = 2;
    // ctx.shadowOffsetX = 0;
    // ctx.shadowOffsetY = -2;
    // ctx.stroke()
    // ctx.shadowColor = "rgba(0, 0, 0, 0)"
    // ctx.lineWidth = 1
    // ctx.moveTo(gridScale * 6, gridScale)
    // ctx.lineTo(gridScale * 7, gridScale)
    // ctx.shadowColor = "rgba(0, 0, 0, 0.9)";
    // ctx.lineWidth = 2
    // ctx.shadowBlur = 2;
    // ctx.shadowOffsetX = 0;
    // ctx.shadowOffsetY = -2;
    // ctx.stroke()
    // ctx.shadowColor = "rgba(0, 0, 0, 0)"
    // ctx.lineWidth = 1
    // console.log(ctx.lineWidth)
    // ctx.shadowBlur = 0
    // ctx.shadowOffsetX = 0;
    // ctx.shadowOffsetY = 0;
    // ctx.moveTo(gridScale * 5, 0);
    // ctx.lineTo(gridScale * 6, 0);
    // ctx.lineTo(gridScale * 6, gridScale);
    // ctx.shadowColor = "blue";
    // ctx.shadowBlur = 0;
    // ctx.shadowOffsetX = 5;
    // ctx.shadowOffsetY = 5;
    // ctx.lineTo(gridScale * 5, gridScale);
    // ctx.stroke()
    // ctx.shadowBlur = 0
    // ctx.shadowOffsetX = 0;
    // ctx.shadowOffsetY = 0;
    // ctx.lineTo(gridScale * 5, 0);
    // ctx.lineTo(gridScale * 6, 0)
    // ctx.stroke();
    // ctx.fill();
    // ctx.beginPath();
    // ctx.moveTo(gridScale * 6, gridScale);
    // ctx.lineTo(gridScale * 5, gridScale)
    // ctx.shadowColor = "rgb(168, 127, 134)";
    // ctx.shadowBlur = 1;
    // ctx.shadowOffsetX = 0;
    // ctx.shadowOffsetY = -.5;
    // ctx.stroke()
    // PIECES
    // LONG PIECE;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXRyaXMtd2l0aC1zdHJhbmdlcnMvLi9zcmMvZ2FtZS9nYW1lLnRzIiwid2VicGFjazovL3RldHJpcy13aXRoLXN0cmFuZ2Vycy8uL3NyYy9nYW1lL3BpZWNlcy9waWVjZS50cyIsIndlYnBhY2s6Ly90ZXRyaXMtd2l0aC1zdHJhbmdlcnMvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vdGV0cmlzLXdpdGgtc3RyYW5nZXJzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RldHJpcy13aXRoLXN0cmFuZ2Vycy93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNGQUFrQztBQUVsQyxJQUFNLFNBQVMsR0FBVyxRQUFRLENBQUM7QUFHbkM7SUFVRyxjQUFZLE1BQXlCO1FBQ2xDLElBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQTZCLENBQUM7UUFDL0QsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUM1QixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztRQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxLQUFLLEdBQUcsRUFBRTtRQUNsQyxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztRQUM1QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN0QyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksZUFBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDdEMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxzQkFBTyxHQUFQOztRQUNH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Q3BCLDZCQUE2QjtJQUM3QixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixnQ0FBZ0M7SUFDaEMsZ0NBQWdDO0lBQ2hDLHdDQUF3QztJQUN4Qyw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsd0NBQXdDO0lBQ3hDLGVBQWU7SUFDZixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixnQ0FBZ0M7SUFDaEMsK0JBQStCO0lBQy9CLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsbUJBQW1CO0lBRW5CLHdDQUF3QztJQUN4Qyx1Q0FBdUM7SUFDdkMsMENBQTBDO0lBQzFDLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsMkJBQTJCO0lBQzNCLGVBQWU7SUFDZixTQUFTO0lBQ1QsY0FBYztBQUNqQixDQUFDLENBQUM7Ozs7Ozs7VUNoSEY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7OztVQ3JCQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGllY2UgZnJvbSBcIi4vcGllY2VzL3BpZWNlXCJcblxuY29uc3QgRk9OVFNUWUxFOiBzdHJpbmcgPSBcIk9zd2FsZFwiO1xuaW50ZXJmYWNlIHN0YXJ0VmFsdWVzeyB2YWx1ZTogc3RyaW5nLCBzaXplOiBudW1iZXJ9XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkRcbiAgIHdpZHRoOiBudW1iZXI7XG4gICBoZWlnaHQ6IG51bWJlcjtcbiAgIHN0YXJ0QW5pbWF0aW9uOiBzdGFydFZhbHVlcztcbiAgIHN0YXJ0UnVubmluZzogYm9vbGVhbjtcbiAgIHN0YXJ0Q29tcGxldGVkOiBib29sZWFuO1xuICAgZ3JpZFNjYWxlOiBudW1iZXJcbiAgIC8vIHRlc3RpbmdcbiAgIHBpZWNlOiBQaWVjZVxuICAgY29uc3RydWN0b3IoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCl7XG4gICAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpIGFzIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcbiAgICAgIHRoaXMud2lkdGggPSBjYW52YXMud2lkdGg7XG4gICAgICB0aGlzLmhlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XG4gICAgICB0aGlzLnN0YXJ0UnVubmluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5zdGFydEFuaW1hdGlvbiA9IG51bGw7XG4gICAgICB0aGlzLmdyaWRTY2FsZSA9IGNhbnZhcy53aWR0aCAvIDEwXG4gICAgICB0aGlzLnN0YXJ0Q29tcGxldGVkID0gZmFsc2U7XG4gICAgICB0aGlzLmFuaW1hdGUgPSB0aGlzLmFuaW1hdGUuYmluZCh0aGlzKVxuICAgICAgdGhpcy5waWVjZSA9IG5ldyBQaWVjZSh0aGlzLmdyaWRTY2FsZSlcbiAgICAgIHRoaXMuYW5pbWF0ZSgpO1xuICAgfVxuXG4gICBhbmltYXRlKCk6IHZvaWR7XG4gICAgICB0aGlzLmN0eC5zYXZlKClcbiAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICB0aGlzLmN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmdyaWRTY2FsZSAqIDQpXG4gICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImdyZXlcIjtcbiAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KDAsIHRoaXMuZ3JpZFNjYWxlICogNCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgdGhpcy5jdHgucmVzdG9yZSgpXG4gICAgICB0aGlzLmRyYXdHcmlkKCk7XG4gICAgICBpZighdGhpcy5zdGFydFJ1bm5pbmcpe1xuICAgICAgICAgdGhpcy5zdGFydFJ1bm5pbmcgPSB0cnVlO1xuICAgICAgICAgdGhpcy5zdGFydEFuaW1hdGlvbiA9IHRoaXMuYW5pbWF0ZVN0YXJ0VmFsdWVzKCk7XG4gICAgICB9XG4gICAgICBpZiggIXRoaXMuc3RhcnRDb21wbGV0ZWQgKSB0aGlzLmRyYXdTdGFydCgpXG4gICAgICAvLyB0ZXN0aW5nXG4gICAgICB0aGlzLmN0eC5zYXZlKClcbiAgICAgIGxldCBpOiBudW1iZXIgPSAwXG4gICAgICBsZXQgcG9zOiBbbnVtYmVyLCBudW1iZXJdID0gWy4uLnRoaXMucGllY2UucG9zXVxuICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBcInBpbmtcIlxuICAgICAgdGhpcy5jdHguc3Ryb2tlUmVjdCguLi5wb3MsIHRoaXMuZ3JpZFNjYWxlICogNCwgdGhpcy5ncmlkU2NhbGUgKiA0KVxuICAgICAgdGhpcy5jdHgucmVzdG9yZSgpXG4gICAgICB3aGlsZSggdGhpcy5zdGFydENvbXBsZXRlZCAmJiBpIDwgNCApe1xuICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ5ZWxsb3dcIlxuICAgICAgICAgdGhpcy5waWVjZS5kcmF3KHRoaXMuY3R4LCBwb3MpXG4gICAgICAgICBwb3NbMV0gKz0gdGhpcy5ncmlkU2NhbGU7XG4gICAgICAgICBpKytcbiAgICAgIH1cbiAgICAgIGkgPSAwO1xuICAgICAgdGhpcy5jdHgucmVzdG9yZSgpXG4gICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IFwicmdiYSgwLCAwLCAwKVwiXG4gICAgICB0aGlzLmN0eC5zdHJva2VSZWN0KC4uLnRoaXMucGllY2UucG9zLCB0aGlzLmdyaWRTY2FsZSwgdGhpcy5ncmlkU2NhbGUgKiA0KVxuICAgICAgd2hpbGUoaSA8IDQpe1xuICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICB0aGlzLmN0eC5tb3ZlVG8odGhpcy5waWVjZS5wb3NbMF0sIHRoaXMucGllY2UucG9zWzFdICsgdGhpcy5ncmlkU2NhbGUgKiggaSArIDEpIClcbiAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLnBpZWNlLnBvc1swXSArIHRoaXMuZ3JpZFNjYWxlLCB0aGlzLnBpZWNlLnBvc1sxXSArIHRoaXMuZ3JpZFNjYWxlICogKGkgKyAxKSApXG4gICAgICAgICB0aGlzLmN0eC5zdHJva2UoKVxuICAgICAgICAgaSsrXG4gICAgICB9XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlKVxuICAgfVxuICAgZHJhd1N0YXJ0KCk6IHZvaWR7XG4gICAgICB0aGlzLmN0eC5zYXZlKClcbiAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIlxuICAgICAgdGhpcy5jdHguZm9udCA9IGAke3RoaXMuc3RhcnRBbmltYXRpb24uc2l6ZX1weCAke0ZPTlRTVFlMRX1gO1xuICAgICAgdGhpcy5jdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgIC8vIHRoaXMuY3R4LmZpbGxUZXh0KHRoaXMuc3RhcnRBbmltYXRpb24udmFsdWUsIHRoaXMud2lkdGggLyAyLCB0aGlzLmhlaWdodCAvIDIpXG4gXG4gICAgICB0aGlzLmN0eC5maWxsVGV4dCh0aGlzLnN0YXJ0QW5pbWF0aW9uLnZhbHVlLCB0aGlzLndpZHRoIC8gMiwgdGhpcy5oZWlnaHQgLyAyKVxuICAgICAgdGhpcy5jdHgucmVzdG9yZSgpXG4gICB9XG4gICBhbmltYXRlU3RhcnRWYWx1ZXMoKTogc3RhcnRWYWx1ZXMge1xuICAgICAgbGV0IGZvbnRTaXplOiBudW1iZXIgPSB0aGlzLndpZHRoICogLjI1XG4gICAgICBjb25zdCBhbmltYXRpb246IHN0YXJ0VmFsdWVzID0ge3ZhbHVlOiBcIjMgLiAuIC5cIiwgc2l6ZTogZm9udFNpemV9XG4gICAgICBsZXQgZGVjcmVtZW50ID0gc2V0SW50ZXJ2YWwoKCkgPT4geyBhbmltYXRpb24uc2l6ZSAtPSBmb250U2l6ZSAqIC4wNH0sIDQwKVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICBhbmltYXRpb24udmFsdWUgPSBcIjIgLiAuIC5cIlxuICAgICAgICAgYW5pbWF0aW9uLnNpemUgPSBmb250U2l6ZTtcbiAgICAgIH0sIDEwMDApXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgIGFuaW1hdGlvbi52YWx1ZSA9IFwiMSAuIC4gLlwiXG4gICAgICAgICBhbmltYXRpb24uc2l6ZSA9IGZvbnRTaXplO1xuICAgICAgfSwgMjAwMClcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgYW5pbWF0aW9uLnZhbHVlID0gXCJTVEFSVFwiXG4gICAgICAgICBhbmltYXRpb24uc2l6ZSA9IGZvbnRTaXplICogMS4yO1xuICAgICAgICAgY2xlYXJJbnRlcnZhbChkZWNyZW1lbnQpXG4gICAgICB9LCAzMDAwKVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICBhbmltYXRpb24udmFsdWUgPSBcIlwiXG4gICAgICAgICB0aGlzLnN0YXJ0Q29tcGxldGVkID0gdHJ1ZVxuICAgICAgfSwgMzUwMClcbiAgICAgIHJldHVybiBhbmltYXRpb247XG4gICB9XG4gICAvLyB0ZXN0aW5nXG4gICBkcmF3R3JpZCgpOnZvaWR7XG4gICAgICBsZXQgaTogbnVtYmVyID0gMDtcblxuICAgICAgd2hpbGUoIGkgPD0gdGhpcy53aWR0aCl7XG4gICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJ3doaXRlJztcbiAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbyhpLCAwKTtcbiAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyhpLCB0aGlzLmhlaWdodCk7XG4gICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcbiAgICAgICAgIGkgKz0gdGhpcy5ncmlkU2NhbGU7XG4gICAgICB9XG4gICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQaWVjZSB7XG4gICBwb3M6IFtudW1iZXIsIG51bWJlcl07XG4gICBjZW50ZXI6IFtudW1iZXIsIG51bWJlcl0gfCB2b2lkO1xuICAgZ3JpZFNjYWxlOiBudW1iZXJcbiAgIGZhbGxJbnQ6IG51bWJlclxuICAgY29uc3RydWN0b3IoZ3JpZFNjYWxlOiBudW1iZXIsIGZhbGxJbnQ6IG51bWJlciA9IDEwMDAsIGNlbnRlcjogW251bWJlciwgbnVtYmVyXSA9IG51bGwpe1xuICAgICAgdGhpcy5ncmlkU2NhbGUgPSBncmlkU2NhbGVcbiAgICAgIHRoaXMucG9zID0gWzQgKiBncmlkU2NhbGUsIDBdXG4gICAgICB0aGlzLmNlbnRlciA9IGNlbnRlcjsvLyB3aWxsIHByb2JhYmx5IHBhc3MgaW4gZnJvbSBjaGlsZCBjbGFzc1xuICAgICAgdGhpcy5mYWxsSW50ID0gZmFsbEludCAvL3NldCB1cCBmb3IgcGxheWVyIG9wdGlvbnMgbGF0ZXJcbiAgICAgIHRoaXMuZmFsbCgpXG4gICB9XG5cbiAgIGZhbGwoKTogdm9pZHtcbiAgICAgIGxldCB0aGF0OiBQaWVjZSA9IHRoaXNcbiAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgIHRoYXQucG9zWzFdICs9ICh0aGF0LmdyaWRTY2FsZSAvIDQpXG4gICAgICB9LCB0aGF0LmZhbGxJbnQpXG4gICB9XG5cbiAgIGRyYXcoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHBvczogW251bWJlciwgbnVtYmVyXSk6IHZvaWR7XG4gICAgICBjdHguZmlsbFJlY3QoLi4ucG9zLCB0aGlzLmdyaWRTY2FsZSwgdGhpcy5ncmlkU2NhbGUpXG4gICB9XG59IiwiaW1wb3J0IEdhbWUgIGZyb20gXCIuL2dhbWUvZ2FtZVwiXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICBsZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lXCIpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xuICAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAqIC44MDtcbiAgIGNhbnZhcy53aWR0aCA9ICBjYW52YXMuaGVpZ2h0IC8gMjQgKiAxMDtcbiAgIGNvbnN0IGdhbWU6IEdhbWUgPSBuZXcgR2FtZShjYW52YXMpXG5cblxuICAgLy8gVEVTVElOR1xuICAgLy8gR1JJRFxuICAgLy8gY29uc3Qgd2lkdGg6IG51bWJlciA9IGNhbnZhcy53aWR0aDtcbiAgIC8vIGxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKSBhcyBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gICAvLyBjb25zdCBoZWlnaHQ6IG51bWJlciA9IGNhbnZhcy5oZWlnaHQ7XG4gICAvLyBjb25zdCBncmlkU2NhbGU6IG51bWJlciA9IGNhbnZhcy53aWR0aCAvIDEwO1xuICAgLy8gY3R4LmZpbGxTdHlsZSA9IFwicGlua1wiXG4gICAvLyBjdHguZmlsbFJlY3QoZ3JpZFNjYWxlICogNSwgMCwgZ3JpZFNjYWxlICogNCwgZ3JpZFNjYWxlKVxuICAgLy8gLy8gY3R4LnN0cm9rZVN0eWxlID0gXCJyZ2JhKDAsIDAsIDAsIDAuMSlcIlxuICAgLy8gY3R4Lmdsb2JhbEFscGhhID0gLjdcbiAgIC8vIGN0eC5zdHJva2VSZWN0KGdyaWRTY2FsZSAqIDUsIDAsIGdyaWRTY2FsZSAqIDQsIGdyaWRTY2FsZSlcbiAgIC8vIGN0eC5iZWdpblBhdGgoKTtcbiAgIC8vIGN0eC5zdHJva2VTdHlsZSA9IFwicmdiYSAoMCwgMCwgMCwgLjEpXCI7XG4gICAvLyAvLyBjdHguc2hhZG93Q29sb3IgPSBcInJnYmEoMCwgMCwgMCwgMSlcIlxuICAgLy8gLy8gY3R4LnNoYWRvd0JsdXIgPSA0XG4gICAvLyAvLyBjdHguc2hhZG93T2Zmc2V0WSA9IC0xXG5cbiAgIC8vIGN0eC5tb3ZlVG8oZ3JpZFNjYWxlICogNSwgZ3JpZFNjYWxlKVxuICAgLy8gY3R4LmxpbmVUbyhncmlkU2NhbGUgKiA5LCBncmlkU2NhbGUpXG4gICAvLyBjdHguc3Ryb2tlKClcbiAgIC8vIC8vIGN0eC5jbG9zZVBhdGgoKVxuICAgLy8gLy8gY3R4LnJlc3RvcmUoKVxuICAgLy8gY3R4LmJlZ2luUGF0aCgpO1xuICAgLy8gLy8gY3R4LnN0cm9rZVN0eWxlID0gXCJyZ2JhICgwLCAwLCAwLCAuMDEpXCJcbiAgIC8vIC8vIGN0eC5zaGFkb3dDb2xvciA9IFwicmdiYSgwLCAwLCAwLCAxKVwiXG4gICAvLyAvLyBjdHguc2hhZG93Qmx1ciA9IDRcbiAgIC8vIC8vIGN0eC5zaGFkb3dPZmZzZXRYID0gMVxuICAgLy8gLy8gY3R4LmxpbmVXaWR0aCA9IDJcbiAgIC8vIGN0eC5tb3ZlVG8oZ3JpZFNjYWxlICogNiwgMClcbiAgIC8vIGN0eC5saW5lVG8oZ3JpZFNjYWxlICogNiwgZ3JpZFNjYWxlKVxuICAgLy8gY3R4LnN0cm9rZSgpXG4gICAvLyBjdHguY2xvc2VQYXRoKClcbiAgIC8vIGN0eC5iZWdpblBhdGgoKVxuICAgLy8gY3R4Lm1vdmVUbyhncmlkU2NhbGUgKiA3LCAwKVxuICAgLy8gY3R4LmxpbmVUbyhncmlkU2NhbGUgKiA3LCBncmlkU2NhbGUpXG4gICAvLyBjdHguc3Ryb2tlKClcbiAgIC8vIGN0eC5iZWdpblBhdGgoKVxuICAgLy8gY3R4Lm1vdmVUbyhncmlkU2NhbGUgKiA4LCAwKVxuICAgLy8gY3R4LmxpbmVUbyhncmlkU2NhbGUgKiA4LCBncmlkU2NhbGUpXG4gICAvLyBjdHguc3Ryb2tlKClcbiAgIC8vIGN0eC5iZWdpblBhdGgoKTtcbiAgIC8vIGN0eC5tb3ZlVG8oZ3JpZFNjYWxlICogNSwgZ3JpZFNjYWxlKVxuICAgLy8gY3R4LmxpbmVUbyhncmlkU2NhbGUgKiA3LCBncmlkU2NhbGUpXG4gICAvLyBjdHguc2hhZG93Q29sb3IgPSBcInJnYmEoMTA5LCA4NywgOTEsIDAuODE1KVwiO1xuICAgLy8gY3R4LnNoYWRvd0NvbG9yID0gXCJyZ2JhKDAsIDAsIDAsIDAuOSlcIjtcbiAgIC8vIGN0eC5saW5lV2lkdGggPSAyXG4gICAvLyBjdHguc2hhZG93Qmx1ciA9IDI7XG4gICAvLyBjdHguc2hhZG93T2Zmc2V0WCA9IDA7XG4gICAvLyBjdHguc2hhZG93T2Zmc2V0WSA9IC0yO1xuICAgLy8gY3R4LnN0cm9rZSgpXG4gICAvLyBjdHguc2hhZG93Q29sb3IgPSBcInJnYmEoMCwgMCwgMCwgMClcIlxuICAgLy8gY3R4LmxpbmVXaWR0aCA9IDFcbiAgIC8vIGN0eC5maWxsUmVjdChncmlkU2NhbGUgKiA2LCAwLCBncmlkU2NhbGUsIGdyaWRTY2FsZSlcbiAgIC8vIGN0eC5zdHJva2VTdHlsZSA9IFwicmdiYSgwLCAwLCAwLCAwLjU0MSlcIlxuICAgLy8gY3R4LnN0cm9rZVJlY3QoZ3JpZFNjYWxlICogNiwgMCwgZ3JpZFNjYWxlLCBncmlkU2NhbGUpXG4gICAvLyBjdHguc2hhZG93Q29sb3IgPSBcInJnYmEoMCwgMCwgMCwgMC45KVwiO1xuICAgLy8gY3R4LmxpbmVXaWR0aCA9IDJcbiAgIC8vIGN0eC5zaGFkb3dCbHVyID0gMjtcbiAgIC8vIGN0eC5zaGFkb3dPZmZzZXRYID0gMDtcbiAgIC8vIGN0eC5zaGFkb3dPZmZzZXRZID0gLTI7XG4gICAvLyBjdHguc3Ryb2tlKClcbiAgIC8vIGN0eC5zaGFkb3dDb2xvciA9IFwicmdiYSgwLCAwLCAwLCAwKVwiXG4gICAvLyBjdHgubGluZVdpZHRoID0gMVxuICAgLy8gY3R4Lm1vdmVUbyhncmlkU2NhbGUgKiA2LCBncmlkU2NhbGUpXG4gICAvLyBjdHgubGluZVRvKGdyaWRTY2FsZSAqIDcsIGdyaWRTY2FsZSlcbiAgIC8vIGN0eC5zaGFkb3dDb2xvciA9IFwicmdiYSgwLCAwLCAwLCAwLjkpXCI7XG4gICAvLyBjdHgubGluZVdpZHRoID0gMlxuICAgLy8gY3R4LnNoYWRvd0JsdXIgPSAyO1xuICAgLy8gY3R4LnNoYWRvd09mZnNldFggPSAwO1xuICAgLy8gY3R4LnNoYWRvd09mZnNldFkgPSAtMjtcbiAgIC8vIGN0eC5zdHJva2UoKVxuICAgLy8gY3R4LnNoYWRvd0NvbG9yID0gXCJyZ2JhKDAsIDAsIDAsIDApXCJcbiAgIC8vIGN0eC5saW5lV2lkdGggPSAxXG4gICAvLyBjb25zb2xlLmxvZyhjdHgubGluZVdpZHRoKVxuICAgLy8gY3R4LnNoYWRvd0JsdXIgPSAwXG4gICAvLyBjdHguc2hhZG93T2Zmc2V0WCA9IDA7XG4gICAvLyBjdHguc2hhZG93T2Zmc2V0WSA9IDA7XG4gICAvLyBjdHgubW92ZVRvKGdyaWRTY2FsZSAqIDUsIDApO1xuICAgLy8gY3R4LmxpbmVUbyhncmlkU2NhbGUgKiA2LCAwKTtcbiAgIC8vIGN0eC5saW5lVG8oZ3JpZFNjYWxlICogNiwgZ3JpZFNjYWxlKTtcbiAgIC8vIGN0eC5zaGFkb3dDb2xvciA9IFwiYmx1ZVwiO1xuICAgLy8gY3R4LnNoYWRvd0JsdXIgPSAwO1xuICAgLy8gY3R4LnNoYWRvd09mZnNldFggPSA1O1xuICAgLy8gY3R4LnNoYWRvd09mZnNldFkgPSA1O1xuICAgLy8gY3R4LmxpbmVUbyhncmlkU2NhbGUgKiA1LCBncmlkU2NhbGUpO1xuICAgLy8gY3R4LnN0cm9rZSgpXG4gICAvLyBjdHguc2hhZG93Qmx1ciA9IDBcbiAgIC8vIGN0eC5zaGFkb3dPZmZzZXRYID0gMDtcbiAgIC8vIGN0eC5zaGFkb3dPZmZzZXRZID0gMDtcbiAgIC8vIGN0eC5saW5lVG8oZ3JpZFNjYWxlICogNSwgMCk7XG4gICAvLyBjdHgubGluZVRvKGdyaWRTY2FsZSAqIDYsIDApXG4gICAvLyBjdHguc3Ryb2tlKCk7XG4gICAvLyBjdHguZmlsbCgpO1xuICAgLy8gY3R4LmJlZ2luUGF0aCgpO1xuXG4gICAvLyBjdHgubW92ZVRvKGdyaWRTY2FsZSAqIDYsIGdyaWRTY2FsZSk7XG4gICAvLyBjdHgubGluZVRvKGdyaWRTY2FsZSAqIDUsIGdyaWRTY2FsZSlcbiAgIC8vIGN0eC5zaGFkb3dDb2xvciA9IFwicmdiKDE2OCwgMTI3LCAxMzQpXCI7XG4gICAvLyBjdHguc2hhZG93Qmx1ciA9IDE7XG4gICAvLyBjdHguc2hhZG93T2Zmc2V0WCA9IDA7XG4gICAvLyBjdHguc2hhZG93T2Zmc2V0WSA9IC0uNTtcbiAgIC8vIGN0eC5zdHJva2UoKVxuICAgLy8gUElFQ0VTXG4gICAvLyBMT05HIFBJRUNFO1xufSkiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9