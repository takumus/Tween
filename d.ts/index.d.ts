import CubicBezier from 'cubic-bezier';
export default class Tween {
    constructor(props: Props);
    public: any;
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
