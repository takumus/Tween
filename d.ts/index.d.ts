import CubicBezier from 'cubic-bezier';
export default class Tween {
    private props;
    private static _id;
    private updateCallback;
    private completeCallback;
    private startTime;
    id: number;
    constructor(props: Props);
    update(callback: UpdateFunction): this;
    complete(callback: () => void): this;
    start(): void;
    __update(time: number): boolean;
}
export declare function tick(): void;
export declare type Props = {
    duration: number;
    easing: EasingFunction;
    from: Object;
    to: Object;
};
export declare type EasingFunction = (n: number) => number;
export declare type UpdateFunction = (props: Object) => void;
export declare const cb: typeof CubicBezier;
export declare const easings: {
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
