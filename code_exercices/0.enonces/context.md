# Le mot-clé this

### 1. Qu'affiche ce code ?

```js
(function () {
    console.log(this);
}())
```

```js
(function () {
    console.log(this); // prints object[global] or Window
}())
```

### 2. Qu'affiche ce code ?

```js
function assign() {
    this.value = 'hello';
}

assign();
console.log(value);
```

```js
function assign() {
    this.value = 'hello'; // "this" is bound to global scope (globalThis or Window)
}

assign();
console.log(value); // prints 'hello'
```

### 3. Qu'affiche ce code ?

```js
this.hello = 'Bonjour';
console.log(hello); // ReferenceError ou 'Bonjour'
```

```
Sur nodejs, this représente un objet global et la récupération de la valeur de hello ne default pas sur cet objet. En effet this est un objet différent de global ou globalThis. Sur un navigateur, elle default sur Window.
```

### 4. Qu'affiche ce code ?

```js
globalThis.value = 'hello'; // globalThis is now standardized
console.log(value);
```

### 5. Qu'affiche ce code ?

```js
'use strict';
(function () {
    console.log(this);
}())
```

```js
'use strict';
(function () {
    console.log(this); // prints undefined
}())
```

### 6. Qu'affiche ce code ?

```js
'use strict';
(function () {
    console.log(globalThis);
}())
```


