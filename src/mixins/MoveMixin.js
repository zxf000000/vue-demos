
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

import {TweenLite} from 'gsap';

/**
 * 对于 H5 的支持应该是
 * 1. 取消 hover 选项
 * 2. 用 canClick 来判断是否可以点击, canClick 由触摸到滑动结束的距离决定
 * 3. 取消 在图片上不能拖动的设定
 * @type {{data(): {dom: null, data: null, parallax: null, rAF: null, el: null, bounds: null, lastOffset: number, state: {dragging: boolean, moving: boolean}, canSlide: boolean, content: null, wheelData: {totalDelta: number, threshold: number}, isTouchMove: boolean}, methods: {slideToOffset(*): void, wheelChange(*): void, mouseMove(*=): void, mouseUp(): void, run(): void, drag(*): void, requestAnimationFrame(): void, mouseDown(*): void, clamp(): void, on(): void}, mounted(): void}}
 */

const MoveMixin = {
    data() {
        return {
            el: null,
            content: null,
            dom: null,
            data: null,
            bounds: null,
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
        }
    },
    methods: {
        on() {
            this.bounds.min = -(this.dom.content[0].scrollWidth - this.dom.el.clientWidth / 2);
            this.bounds.max = this.dom.el.clientWidth / 2;
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
              this.data.current = this.lastOffset + e.clientX - this.data.on;
              this.clamp();
            },
            clamp() {
                this.data.current = Math.min(Math.max(this.data.current, this.bounds.min), this.bounds.max)
            },
            run() {
              this.data.last.one = math.lerp(this.data.last.one, this.data.current, this.isTouchMove ? 0.065 : 0.1);
              this.data.last.one = Math.floor(this.data.last.one * 100) / 100;

              this.data.last.two = math.lerp(this.data.last.two, this.data.current, 0.065);
              this.data.last.two = Math.floor(this.data.last.two * 100) / 100;

              const diff = this.data.current - this.data.last.one;
              const acc = diff / config.width;
              const velo =+ acc;
              const bounce = 1 - Math.abs(velo * 0.55);
              // const skew = velo *7.5;
              TweenLite.set(this.dom.content[0], {
                  x: this.data.last.one.toFixed(2),
              })
                this.dom.elems.forEach(item => {
                    TweenLite.set(item, {
                        scale: bounce
                    })
                })
              this.requestAnimationFrame();
            },
        mouseDown(e) {
            console.log(this.canSlide);
            if (this.canSlide) {
                this.resetAll();
                this.state.dragging = true;
                this.data.on = e.clientX;
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
        this.el = this.$refs.container;
        this.content = [this.$refs.pics];
        this.dom = {
            el: this.el,
            content: this.content,
            elems: [...this.$refs.picCard.map(item => {
                return item.$el;
            })],
            handle: this.$refs.scrollBar,
        };
        this.data = {
            total: this.dom.elems.length - 1,
            current: 0,
            last: {
                one: 0,
                two: 0,
            },
            on: 0,
            off: 0,
        };
        this.bounds = {
            elem: 0,
            content: 0,
            width: 0,
            max: 0,
            min: 0,
        };
        this.state = {
            dragging: false,
        };
        this.on();
    }
}

export default MoveMixin;
