# arrow-function-this
無名関数とアロー関数とで関数内のthisの値の違い

```.sh
git clone https://github.com/walk8243/arrow-function-this.git
cd arrow-function-this
npm start
```

## 無名関数の場合
無名関数内でのthisの値は、レシーバ（左辺）の親になる。
もしもレシーバが存在しない場合は、グローバル（`Object [global]`）となる。

```.sh
npm run anonymous
```

## アロー関数の場合
アロー関数内でのthisの値は、その関数のスコープ内のthisと同じになる。
もしもグローバルスコープで宣言された場合は、空オブジェクト（`{}`）となる。

```.sh
npm run arrow
```
