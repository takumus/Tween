# Tween
## github
<https://github.com/takumus/Tween>
## これは何
Tweenライブラリ作ってみたかった
## インストール
`npm install tween --registry http://npm.takumus.com`  
tsの人はこっちも↓  
`npm install @types/tween --registry http://npm.takumus.com`
## 使い方
```js
import Tween from 'tween';

// tickを呼ぶことで動く
function update() {
    Tween.tick();
    requestAnimationFrame(update);
}
update();

// 簡単サンプル
new Tween({
    duration: 1000, // 1秒間
    easing: Tween.easings.in.quad, //イージング関数
    from: {x: 200, y: 300},
    to: {x: 400, y: 100}
})
.update((props) => {
    console.log(props.x, props.y)
})
.complete(() => {
    console.log('complete!')
})
.start();

// 自前の３次ベジェを使う場合
new Tween({
    duration: 1000, // 1秒間
    easing: Tween.cb(1, 0, 0, 1), //イージング関数
    from: {x: 200, y: 300},
    to: {x: 400, y: 100}
})
.update((props) => {
    console.log(props.x, props.y)
})
.complete(() => {
    console.log('complete!')
})
.start();
```
