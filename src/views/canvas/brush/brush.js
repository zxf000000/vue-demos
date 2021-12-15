/**
 * requestAnimationFrame
 */
window.requestAnimationFrame = (function(){
    return  window.requestAnimationFrame       ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        window.oRequestAnimationFrame      ||
        window.msRequestAnimationFrame     ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();


/**
 * Brush
 */
let Brush = (function () {

    /**
     * @constructor
     * @public
     */
    function Brush(x, y, color, size, inkAmount) {
        this.x = x || 0;
        this.y = y || 0;
        if (color !== undefined) this.color = color;
        if (size !== undefined) this.size = size;
        if (inkAmount !== undefined) this.inkAmount = inkAmount;

        this._drops = [];
        this._resetTip();
    }

    Brush.prototype = {
        _SPLASHING_BRUSH_SPEED: 75,
        x: 0,
        y: 0,
        color: '#000',
        size: 10,
        inkAmount: 5,
        splashing: true,
        dripping: true,
        _latestPos: null,
        _strokeId: null,
        _drops: null,

        isStroke: function () {
            return Boolean(this._strokeId);
        },

        startStroke: function () {
            if (this.isStroke()) return;

            this._resetTip();

            // http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript
            this._strokeId = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r, v;
                r = Math.random() * 16 | 0;
                v = c === 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        },

        endStroke: function () {
            this._strokeId = this._latestPos = null;
        },

        render: function (ctx, x, y) {
            let isStroke = this.isStroke(),
                dx, dy,
                i, len;

            if (!this._latestPos) this._latestPos = {};
            this._latestPos.x = this.x;
            this._latestPos.y = this.y;
            this.x = x;
            this.y = y;

            if (isStroke) {
                let tip = this._tip,
                    dist;

                dx = this.x - this._latestPos.x;
                dy = this.y - this._latestPos.y;
                dist = Math.sqrt(dx * dx + dy * dy);


                for (i = 0, len = tip.length; i < len; i++) {
                    tip[i].render(ctx, dx, dy, dist);
                }
            }
        },

        dispose: function () {
            this._tip.length = this._drops.length = 0;
        },

        _resetTip: function () {
            let tip = this._tip = [],
                rad = this.size * 0.5,
                x0, y0, a0, x1, y1, a1, cv, sv,
                i, len;

            a1 = Math.PI * 2 * Math.random();
            len = rad * rad * Math.PI / this.inkAmount | 0;
            if (len < 1) len = 1;

            for (i = 0; i < len; i++) {
                x0 = rad * Math.random();
                y0 = x0 * 0.5;
                a0 = Math.PI * 2 * Math.random();
                x1 = x0 * Math.sin(a0);
                y1 = y0 * Math.cos(a0);
                cv = Math.cos(a1);
                sv = Math.sin(a1);

                tip.push(new Hair(
                    this.x + x1 * cv - y1 * sv,
                    this.y + x1 * sv + y1 * cv,
                    this.inkAmount,
                    this.color
                ));
            }
        }
    };


    /**
     * Hair
     * @private
     */
    function Hair(x, y, inkAmount, color) {
        this.x = x || 0;
        this.y = y || 0;
        this.inkAmount = inkAmount;
        this.color = color;

        this._latestPos = {x: this.x, y: this.y};
    }

    Hair.prototype = {
        x: 0,
        y: 0,
        inkAmount: 7,
        color: '#000',
        _latestPos: null,

        render: function (ctx, offsetX, offsetY, offsetLength) {
            this._latestPos.x = this.x;
            this._latestPos.y = this.y;
            this.x += offsetX;
            this.y += offsetY;

            var per = offsetLength ? this.inkAmount / offsetLength : 0;
            if (per > 1) per = 1;
            else if (per < 0) per = 0;

            ctx.save();
            ctx.lineCap = ctx.lineJoin = 'round';
            ctx.strokeStyle = this.color;
            ctx.lineWidth = this.inkAmount * per;
            ctx.beginPath();
            ctx.moveTo(this._latestPos.x, this._latestPos.y);
            ctx.lineTo(this.x, this.y);
            ctx.stroke();
            ctx.restore();
        }
    };

    return Brush;

})();

export default Brush;
