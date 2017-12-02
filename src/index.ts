import CubicBezier from 'cubic-bezier';
export default class Tween {
    private updateCallback: (props: Object) => void;
    private completeCallback: () => void;
    constructor(props: Props) {
        console.log(props);
    }
    public update(callback: (props: Object) => void) {
        this.updateCallback = callback;
    }
    public complete(callback: () => void) {
        this.completeCallback = callback;
    }
    public start() {
    }
}
export function tick() {
    
}
export type Props = {
    duration: number,
    easing: EasingFunction,
    from: Object
    to: Object
};
export type EasingFunction = (n: number) => number;
export const cubicBezier = CubicBezier;

// samples
export const easings = {
    
}