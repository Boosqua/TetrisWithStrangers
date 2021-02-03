/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/game/game.ts":
/*!**************************!*\
  !*** ./src/game/game.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var Game = /** @class */ (function () {
    function Game(ctx) {
        this.ctx = ctx;
    }
    return Game;
}());
exports.default = Game;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var game_1 = __webpack_require__(/*! ./game/game */ "./src/game/game.ts");
document.addEventListener("DOMContentLoaded", function () {
    console.log('loaded');
    var canvas = document.getElementById("game");
    var ctx = canvas.getContext('2d');
    var game = new game_1.default(ctx);
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
        // moves[1]();
        // moves[2]();
    }
    drawLongPiece(ctx);
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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXRyaXMtd2l0aC1zdHJhbmdlcnMvLi9zcmMvZ2FtZS9nYW1lLnRzIiwid2VicGFjazovL3RldHJpcy13aXRoLXN0cmFuZ2Vycy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly90ZXRyaXMtd2l0aC1zdHJhbmdlcnMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGV0cmlzLXdpdGgtc3RyYW5nZXJzL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtJQUVHLGNBQVksR0FBNkI7UUFDdEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHO0lBQ2pCLENBQUM7SUFDSixXQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUNMRCwwRUFBK0I7QUFDL0IsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFO0lBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDO0lBQ3JCLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFzQixDQUFDO0lBQ2xFLElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUE2QixDQUFDO0lBQzlELElBQU0sSUFBSSxHQUFTLElBQUksY0FBSSxDQUFDLEdBQUcsQ0FBQztJQUNoQyxVQUFVO0lBQ1YsT0FBTztJQUNQLElBQU0sS0FBSyxHQUFXLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDbkMsSUFBTSxNQUFNLEdBQVcsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNyQyxJQUFNLFNBQVMsR0FBVyxNQUFNLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUM1QyxJQUFJLENBQUMsR0FBVyxDQUFDLENBQUM7SUFFbEIsT0FBTyxDQUFDLElBQUksS0FBSyxFQUFDO1FBQ2YsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2hCLEdBQUcsQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDO1FBQzFCLEdBQUcs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QUFDO0lBQ0QsYUFBYSxDQUFDLEdBQUcsQ0FBQztBQUNyQixDQUFDLENBQUM7Ozs7Ozs7VUN6RUY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7OztVQ3JCQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEXG4gICBjb25zdHJ1Y3RvcihjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCl7XG4gICAgICB0aGlzLmN0eCA9IGN0eFxuICAgfVxufVxuIiwiaW1wb3J0IEdhbWUgIGZyb20gXCIuL2dhbWUvZ2FtZVwiXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICBjb25zb2xlLmxvZygnbG9hZGVkJylcbiAgIGxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWVcIikgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XG4gICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJykgYXMgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICAgY29uc3QgZ2FtZTogR2FtZSA9IG5ldyBHYW1lKGN0eClcbiAgIC8vIFRFU1RJTkdcbiAgIC8vIEdSSURcbiAgIGNvbnN0IHdpZHRoOiBudW1iZXIgPSBjYW52YXMud2lkdGg7XG4gICBjb25zdCBoZWlnaHQ6IG51bWJlciA9IGNhbnZhcy5oZWlnaHQ7XG4gICBjb25zdCBncmlkU2NhbGU6IG51bWJlciA9IGNhbnZhcy53aWR0aCAvIDEwO1xuICAgbGV0IGk6IG51bWJlciA9IDA7XG5cbiAgIHdoaWxlKCBpIDw9IHdpZHRoKXtcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdibGFjayc7XG4gICAgICBjdHgubW92ZVRvKGksIDApO1xuICAgICAgY3R4LmxpbmVUbyhpLCBoZWlnaHQpO1xuICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgaSArPSBncmlkU2NhbGU7XG4gICB9XG5cblxuICAgLy8gUElFQ0VTXG4gICAvLyBMT05HIFBJRUNFO1xuICAgZnVuY3Rpb24gZHJhd0xvbmdQaWVjZShjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCk6IHZvaWQge1xuICAgICAgbGV0IHBvczogQXJyYXk8bnVtYmVyPiA9IFt3aWR0aCAvIDUsIDMwMF1cbiAgICAgIGNvbnN0IGNlbnRlcjogW251bWJlciwgbnVtYmVyXSA9IFtwb3NbMF0sIHBvc1sxXSArIGdyaWRTY2FsZSAqIDJdXG4gICAgICBpbnRlcmZhY2UgZHJhd0Z1bmN7XG4gICAgICAgICAoKTogdm9pZFxuICAgICAgfVxuICAgICAgaW50ZXJmYWNlIG1vdmVzIHtcbiAgICAgICAgIDE6IGRyYXdGdW5jLFxuICAgICAgICAgMjogZHJhd0Z1bmMsXG4gICAgICAgICAzOiBkcmF3RnVuYyxcbiAgICAgICAgIDQ6IGRyYXdGdW5jXG4gICAgICB9XG4gICAgICBjb25zdCBtb3ZlczogbW92ZXMgPSB7XG4gICAgICAgICAxOiAoKSA9PiB7IC8vIHNwYXduaW5nIHBvc2l0aW9uXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcInJlZFwiO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmVkXCI7XG4gICAgICAgICAgICBjdHgubW92ZVRvKC4uLmNlbnRlcik7XG4gICAgICAgICAgICBjdHgubGluZVRvKGNlbnRlclswXSwgY2VudGVyWzFdICsgZ3JpZFNjYWxlICogMik7XG4gICAgICAgICAgICBjdHgubGluZVRvKGNlbnRlclswXSArIGdyaWRTY2FsZSwgY2VudGVyWzFdICsgZ3JpZFNjYWxlICogMik7XG4gICAgICAgICAgICBjdHgubGluZVRvKGNlbnRlclswXSArIGdyaWRTY2FsZSwgY2VudGVyWzFdIC0gZ3JpZFNjYWxlICogMik7XG4gICAgICAgICAgICBjdHgubGluZVRvKGNlbnRlclswXSwgY2VudGVyWzFdIC0gZ3JpZFNjYWxlICogMik7XG4gICAgICAgICAgICBjdHgubGluZVRvKC4uLmNlbnRlcilcbiAgICAgICAgICAgIGN0eC5maWxsKClcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKVxuICAgICAgICAgfSxcbiAgICAgICAgIDI6ICgpID0+IHtcbiAgICAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiZ3JlZW5cIjtcbiAgICAgICAgICAgICAgIGN0eC5tb3ZlVG8oLi4uY2VudGVyKTtcbiAgICAgICAgICAgICAgIGN0eC5saW5lVG8oY2VudGVyWzBdICsgZ3JpZFNjYWxlICogMiwgY2VudGVyWzFdKTtcbiAgICAgICAgICAgICAgIGN0eC5saW5lVG8oY2VudGVyWzBdICsgZ3JpZFNjYWxlICogMiwgY2VudGVyWzFdICsgZ3JpZFNjYWxlKTtcbiAgICAgICAgICAgICAgIGN0eC5saW5lVG8oY2VudGVyWzBdIC0gZ3JpZFNjYWxlICogMiwgY2VudGVyWzFdICsgZ3JpZFNjYWxlKTtcbiAgICAgICAgICAgICAgIGN0eC5saW5lVG8oY2VudGVyWzBdIC0gZ3JpZFNjYWxlICogMiwgY2VudGVyWzFdKVxuICAgICAgICAgICAgICAgY3R4LmxpbmVUbyguLi5jZW50ZXIpO1xuICAgICAgICAgICAgICAgY3R4LnN0cm9rZSgpXG4gICAgICAgICB9LFxuICAgICAgICAgMzogKCkgPT4ge1xuXG4gICAgICAgICB9LFxuICAgICAgICAgNDogKCkgPT4ge1xuXG4gICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBtb3Zlc1sxXSgpO1xuICAgICAgLy8gbW92ZXNbMl0oKTtcbiAgIH1cbiAgIGRyYXdMb25nUGllY2UoY3R4KVxufSkiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9