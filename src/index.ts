import CubicBezier from 'cubic-bezier';
class Tween {
    private static _id: number = 0;
    private updateCallback: Tween.UpdateFunction;
    private completeCallback: () => void;
    private startTime: number;
    public id: number;
    constructor(private props: Tween.Props) {
        this.startTime = -1;
        this.id = Tween._id++;
        this.update(() => {});
        this.complete(() => {});
        props.easing = props.easing ? props.easing : Tween.easings.linear;
    }
    public update(callback: Tween.UpdateFunction) {
        this.updateCallback = callback;
        return this;
    }
    public complete(callback: () => void) {
        this.completeCallback = callback;
        return this;
    }
    public start() {
        this.startTime = Date.now();
        TweenManager.add(this);
    }
    public __update(time: number) {
        let progress = this.props.easing((time - this.startTime) / this.props.duration);
        if (progress >= 1) {
            progress = 1;
            this.updateCallback(this.props.to);
            this.completeCallback();
            return true;
        }
        const props = {};
        for (const key in this.props.from) {
            props[key] = (1 - progress) * this.props.from[key] + this.props.to[key] * progress;
        }
        this.updateCallback(props);
        return false;
    }
}
const TweenManager = new class {
    private tweens: {[id: number]: Tween;};
    constructor() {
        this.tweens = {};
    }
    public tick() {
        const now = Date.now();
        for (const id in this.tweens) {
            const completed = this.tweens[id].__update(now);
            if (completed) delete this.tweens[id];
        }
    }
    public add(tween: Tween) {
        this.tweens[tween.id] = tween;
    }
}
namespace Tween {
    export function hello () {

    }
    export function tick() {
        TweenManager.tick();
    }
    // types
    export type Props = {
        duration: number,
        easing: EasingFunction,
        from: Object
        to: Object
    };
    export type EasingFunction = (n: number) => number;
    export type UpdateFunction = (props: Object) => void;
    
    export const cb = CubicBezier;
    // samples
    export const easings = {
        linear: (n) => n,
        in: {
            sine: cb(0.47, 0, 0.745, 0.715),
            cubic: cb(0.55, 0.055, 0.675, 0.19),
            quint: cb(0.755, 0.05, 0.855, 0.06),
            circ: cb(0.6, 0.04, 0.98, 0.335),
            quad: cb(0.55, 0.085, 0.68, 0.53),
            quart: cb(0.895, 0.03, 0.685, 0.22),
            expo: cb(0.95, 0.05, 0.795, 0.035),
            back: cb(0.6, -0.28, 0.735, 0.045)
        },
        out: {
            sine: cb(0.39, 0.575, 0.565, 1),
            cubic: cb(0.215, 0.61, 0.355, 1),
            quint: cb(0.23, 1, 0.32, 1),
            circ: cb(0.075, 0.82, 0.165, 1),
            quad: cb(0.25, 0.46, 0.45, 0.94),
            quart: cb(0.165, 0.84, 0.44, 1),
            expo: cb(0.19, 1, 0.22, 1),
            back: cb(0.175, 0.885, 0.32, 1.275)
        },
        inOut: {
            sine: cb(0.445, 0.05, 0.55, 0.95),
            cubic: cb(0.645, 0.045, 0.355, 1),
            quint: cb(0.86, 0, 0.07, 1),
            circ: cb(0.785, 0.135, 0.15, 0.86),
            quad: cb(0.455, 0.03, 0.515, 0.955),
            quart: cb(0.77, 0, 0.175, 1),
            expo: cb(1, 0, 0, 1),
            back: cb(0.68, -0.55, 0.265, 1.55)
        },
    }
}

export default Tween;