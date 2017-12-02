import CubicBezier from 'cubic-bezier';
export default class Tween {
    private updateCallback;
    private completeCallback;
    constructor(props: Props);
    update(callback: (props: Object) => void): void;
    complete(callback: () => void): void;
    start(): void;
}
export declare type Props = {
    duration: number;
    easing: EasingFunction;
    from: Object;
    to: Object;
};
export declare type EasingFunction = (n: number) => number;
export declare const cubicBezier: typeof CubicBezier;
export declare const easings: {};
