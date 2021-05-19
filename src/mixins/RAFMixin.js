
// TODO: 还需要添加屏幕尺寸变化, 以及手机设备的关联 还有  H5版本的尺寸

const math = {
    // 线性插值,根据时间缓慢移动
    lerp: (a, b, n) => {
        return (1 - n) * a + n * b
    },
    norm: (value, min, max) => {
        return (value - min) / (max - min)
    }
}

const config = {
    height: window.innerHeight,
    width: window.innerWidth
}

import { TweenLite } from 'gsap';

const RAFMixin = {
    data() {
        return {
            el: null,
            content: null,
            dom: null,
            data: {
                current: 0,
                last: 0,
                on: 0,
                off: 0,
                bounce: 0,
            },
            bounds: {
                elem: 0,
                content: 0,
                width: 0,
                max: 0,
                min: 0,
            },
            state: {
                dragging: false,
            },
            rAF: null,
            parallax: null,
            lastOffset: 0,
            wheelData: {
                threshold: 600,
                totalDelta: 0,
            },
            isTouchMove: false,
            canSlide: true,
            isVertical: false,
        }
    },
    methods: {
        on() {
            if (this.isVertical) {
                this.bounds.min = -(this.dom.content.scrollHeight - this.dom.el.clientHeight / 2);
                this.bounds.max = this.dom.el.clientHeight / 2;
            } else {
                this.bounds.min = -(this.dom.content.scrollWidth - this.dom.el.clientWidth / 2);
                this.bounds.max = this.dom.el.clientWidth / 2;
            }
            this.requestAnimationFrame()
        },
        slideToOffset(offset) {
            this.isTouchMove = false;
            this.data.current = offset;

        },
        wheelChange(e) {
            // this.isTouchMove = true;
            this.resetAll();
            this.wheelData.totalDelta += e.deltaY;
            if (Math.abs(this.wheelData.totalDelta) >= this.wheelData.threshold) {
                this.data.current = this.lastOffset + this.wheelData.totalDelta;
                this.lastOffset = this.data.current;
                this.clamp();
                this.wheelData.totalDelta = 0;
            }
        },
        drag(e) {
            if (!this.canSlide) return;
            if (this.isVertical) {
                this.data.current = this.lastOffset + e.clientY - this.data.on;
            } else {
                this.data.current = this.lastOffset + e.clientX - this.data.on;
            }
            this.clamp();
        },
        clamp() {
            this.data.current = Math.min(Math.max(this.data.current, this.bounds.min), this.bounds.max)
        },
        run() {
            this.data.last = math.lerp(this.data.last, this.data.current, 0.085);
            this.data.last = Math.floor(this.data.last * 100) / 100;
            const diff = this.data.current - this.data.last;
            const acc = this.isVertical ? diff / config.height :  diff / config.width;
            const velo =+ acc;
            this.data.bounce = 1 - Math.abs(velo * 0.55);
            // const skew = velo *7.5;
            if (this.isVertical) {
                console.log(this.data.last);
                TweenLite.set(this.dom.content, {
                    y: this.data.last.toFixed(2),
                })
            } else {
                TweenLite.set(this.dom.content, {
                    x: this.data.last.toFixed(2),
                })
            }
            if (typeof this.didRun !== 'undefined') {
                this.didRun();
            }
            this.requestAnimationFrame();
        },
        mouseDown(e) {
            if (this.canSlide) {
                this.resetAll();
                this.state.dragging = true;
                this.data.on = this.isVertical ? e.clientY : e.clientX;
            }
        },
        mouseUp() {
            this.state.dragging = false;
            this.lastOffset = this.data.current;
        },
        mouseMove(e) {
            if (!this.state.dragging) return;
            this.drag(e);
        },
        requestAnimationFrame() {
            this.rAF = requestAnimationFrame(this.run);
        }

    },
    mounted() {
    }
}

export default RAFMixin;
