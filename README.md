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

# Day3

* clip-path 绘制图形

* 利用 transform: rotate、transform-origin 使太阳沿轨迹运行

* 小山影子

# day6

* 可以利用 css 的 `visibility: visible` 和 `visibility: hidden` 在 hover 时进行显隐切换

* scss 继承样式
```scss
.line-blue {
  @extend .line-red;
  polyline {
    stroke: $blue;
  }
}
```

# day7

* div 做成圆形边框，transform: rotate，进行旋转，加上过渡即可。

* 卡片右侧白边框，若对第二个盒子设置 border，可能会导致三个盒子高度不同。可以给第二个盒子加个 margin ，保证三个盒子同高。

* calc 带单位计算，`width: calc(70px + 6px * $num);`

# day8

* 时间线

# day9

* 乳状液体动效：① `filter: blur()` 将元素进行模糊处理；② 父元素使用 `filter: contrast()` 进行对比度处理。

  模糊处理之前，相邻元素的每个像素都会很明显的区分来：
  
  ![image](https://user-images.githubusercontent.com/51857421/180601042-0af82c0b-bebf-4674-aeba-0324bfd3173b.png)

  模糊处理后的元素的相邻像素不会区分的很明显：
  
  ![image](https://user-images.githubusercontent.com/51857421/180601031-b6a2536b-9b29-4990-adfc-e88749ab5178.png)
  
  再给父元素加上 `filter: contrast(25)` 进行对比度处理，类似于一个鸡蛋的形状就出来了。
  
  ![image](https://user-images.githubusercontent.com/51857421/180600960-f1bcaa1e-b8e4-47ee-8f50-c0917ca049f6.png)

# day12

本想用 `transition` 替代 `animation`。但若使用 `transition`， 图片放大后，层级会置于底层，所以需要利用 `animation` 修改层级。

另一个点是对 scss `@for` `@if` 的运用，将如下 scss 代码使用计算得出相应的代码
``` scss
.pic-1 {
  transform-origin: 0 0;
}
.pic-2 {
  transform-origin: 50% 0;
}
.pic-3 {
  transform-origin: 100% 0;
}
.pic-4 {
  transform-origin: 0 50%;
}
.pic-5 {
  transform-origin: 50% 50%;
}
.pic-6 {
  transform-origin: 100% 50%;
}
.pic-7 {
  transform-origin: 0 100%;
}
.pic-8 {
  transform-origin: 50% 100%;
}
.pic-9 {
  transform-origin: 100% 100%;
}
```

使用 `@for`、 `@if`：

```scss
@for $i from 1 through $rows * $columns {
  @if ($row * $rows) < $i{
    // $row 表示当前行 
    $row: $row+ 1;
  }
  // 根据当前行，计算是第几列
  $column: $i - (($row - 1) * 3);

  $top: 50% * ($row - 1);
  $left: 50% * ($column - 1);
  .pic-#{$i} {
    transform-origin: $left $top;
  }
}
```

# day13

自行车动画，能想到是用 scale，但是如何控制只让上面缩放，不让下面缩放呢?
利用 transform-origin， 改变动画原点，即可实现。