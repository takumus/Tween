import CubicBezier from 'cubic-bezier';
declare class Tween<P extends Object> {
    private duration;
    private from;
    private to;
    private easing;
    private static _id;
    private updateCallback;
    private completeCallback;
    private startTime;
    id: number;
    constructor(duration: number, from: P, to: P, easing?: Tween.EasingFunction);
    update(callback: (props: P) => void): this;
    complete(callback: () => void): this;
    start(): void;
    __update(time: number): boolean;
    __complete(): void;
}
declare namespace Tween {
    function tick(): void;
    type EasingFunction = (n: number) => number;
    const cb: typeof CubicBezier;
    const easings: {
        linear: (n: any) => any;
        in: {
            sine: (x: number) => number;
            cubic: (x: number) => number;
            quint: (x: number) => number;
            circ: (x: number) => number;
            quad: (x: number) => number;
            quart: (x: number) => number;
            expo: (x: number) => number;
            back: (x: number) => number;
        };
        out: {
            sine: (x: number) => number;
            cubic: (x: number) => number;
            quint: (x: number) => number;
            circ: (x: number) => number;
            quad: (x: number) => number;
            quart: (x: number) => number;
            expo: (x: number) => number;
            back: (x: number) => number;
        };
        inOut: {
            sine: (x: number) => number;
            cubic: (x: number) => number;
            quint: (x: number) => number;
            circ: (x: number) => number;
            quad: (x: number) => number;
            quart: (x: number) => number;
            expo: (x: number) => number;
            back: (x: number) => number;
        };
    };
}
export default Tween;
