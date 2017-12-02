# Tween
## github
<https://github.com/takumus/Tween>
## これは何
Tweenライブラリ作ってみたかった
## インストール
`npm install tween --registry http://npm.takumus.com`
## 使い方(予定)
```js
new Tween({
    duration,
    easing, 
    from: {x: 0},
    to: {x: 10}
})
.update((props) => {

})
.complete(() => {

})
.start();

```
