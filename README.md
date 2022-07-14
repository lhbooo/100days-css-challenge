# 100 days css challenge

# Day1

* z-index 只能在定位元素上有效

* div 和 它的伪元素的 z-index 属性，无论如何设置，貌似伪元素的一直处于上层。

# Day2

* no-animation： 闭合和展开时都需要有动画，当两个状态都有动画时，那么就会出现一个问题：第一次进场会先触发一次动画。
那么如何避免第一次进场的动画呢？可以给元素增加一个 class 使 animation 为 none， 并想办法让其生效，比如加 !important。这样第一次就会不会触发了。

* mixin 传参

```scss
@mixin animation-expand($name, $top, $deg) {
  animation: $name 1s;
  @keyframes #{$name} {
    0% {
      top: 23px;
      transform: rotate($deg);
    }
    50% {
      top: 23px;
      transform: rotate(0deg);
    }
    100% {
      top: $top;
    }
  }
}
```
