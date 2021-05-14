
// TODO: 还需要添加屏幕尺寸变化, 以及手机设备的关联 还有  H5版本的尺寸

const math = {
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
                moving: false,
            },
            rAF: null,
            parallax: null,
            lastOffset: 0,
            shouldSlide: true,
        }
    },
    methods: {
        on() {
            console.log(this.dom.content[0].scrollWidth, this.dom.el.clientWidth);
            this.bounds.min = -(this.dom.content[0].scrollWidth - this.dom.el.clientWidth / 2);
            this.bounds.max = this.dom.el.clientWidth / 2;
            this.requestAnimationFrame()
        },
        slideToOffset(offset) {
            this.data.current = offset;
        },
            drag(e) {
              this.data.current = this.lastOffset + e.clientX - this.data.on;
              this.clamp();
            },
            clamp() {
                console.log(this.data.current);
                // this.data.current = Math.min(Math.max(this.data.current, this.bounds.min), this.bounds.max)
            },
            run() {
              this.data.last.one = math.lerp(this.data.last.one, this.data.current, 0.085);
              this.data.last.one = Math.floor(this.data.last.one * 100) / 100;

              this.data.last.two = math.lerp(this.data.last.two, this.data.current, 0.08);
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
            if (this.shouldSlide) {
                this.state.dragging = true;
                this.data.on = e.clientX;
                // TODO: 这里是否需要复位
                console.log(e);
                this.resetAll();
            }
        },
            mouseUp() {
              this.state.dragging = false;
              this.lastOffset = this.data.current;
              // TODO:
              //   window.scrollTo(0, this.data.current)
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
