1, 运行下面的代码

```shell
npm init -y

npm install --save-dev jasmine
npx jasmine init

npm install --save-dev jest
```

2, 在 package.json 文件里面，修改：

```json
"scripts": {
    "test": "jest --coverage"
}
// 或者 
"scripts": {
    "test": "jasmine"
}
```

3，在 package.json 文件里面，添加：

```json
"jest": {
    "testRegex": "(spec/.*|(\\.|/)(test|spec))\\.js$",
    "coverageDirectory": "./coverage"
}
```

4, 在vs code 里面添加插件

```shell
ext install ryanluker.vscode-coverage-gutters
```

5, js 函数放在 root directory 下面， 测试的 js 放在 test 或者 spec 文件架下面

6, 运行 npm run test