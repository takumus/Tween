import CubicBezier from 'cubic-bezier';
declare class Tween {
    private props;
    private static _id;
    private updateCallback;
    private completeCallback;
    private startTime;
    id: number;
    constructor(props: Tween.Props);
    update(callback: Tween.UpdateFunction): this;
    complete(callback: () => void): this;
    start(): void;
    __update(time: number): boolean;
}
declare namespace Tween {
    function hello(): void;
    function tick(): void;
    type Props = {
        duration: number;
        easing: EasingFunction;
        from: Object;
        to: Object;
    };
    type EasingFunction = (n: number) => number;
    type UpdateFunction = (props: Object) => void;
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
