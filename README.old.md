# goit-react-hw-02-feedback

https://app.schoology.com/link?a=1859624276&path=https%3A%2F%2Fgithub.com%2Fgoitacademy%2Freact-homework%2Ftree%2Fmaster%2Fhomework-02

# Create React App

npx create-react-app имя*папки*проекта
Для того чтобы создать приложение в текущей папке, вместо имени проекта ставится точка. Например:
npx create-react-app .
Это можно использовать когда был склонирован репозиторий и в его локальной версии инициализируется приложение.

npm start
npm test

# Настройка линтеров (pre-commit хуков)

Instruction:
https://app.schoology.com/course/5015846687/materials?f=462580557

Repository:
https://github.com/goitacademy/react-lint-staged-workshop

Create .huskyrc :
https://github.com/luxplanjay/react-18/blob/02-%D1%81%D1%82%D0%B8%D0%BB%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82/.huskyrc

Create .lintstagedrc :
https://github.com/luxplanjay/react-18/blob/02-%D1%81%D1%82%D0%B8%D0%BB%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82/.lintstagedrc

# prop-types https://www.npmjs.com/package/prop-types

npm install --save prop-types

# Emotion package

npm i @emotion/styled @emotion/react

# Деплой приложения на Github Pages https://drive.google.com/file/d/1EOewQyS7V9SHsUbbycwgTNqB59jwhFnG/view

Chek in package.json:
"scripts": {
"start": "react-scripts start",
"build": "react-scripts build",
"test": "react-scripts test",
"eject": "react-scripts eject"
},

1. npm run build

2. https://create-react-app.dev/ > Docs > Deployment > GitHub Pages >
   1)"homepage": "https://Olena-P.github.io/goit-react-hw-02-feedback", > npm run build > the correct paths to the repository in the index.html folder >
   2)npm install --save gh-pages > add in "scripts": { "predeploy": "npm run build", "deploy": "gh-pages -d build"} >
   3)npm run deploy

# Пуш на GitHub

1. Cделать ветку в мастере:
   git checkout -b <без скобочек пишешь название ветки, которую хочешь получиить>
   ты оказываешься в новой ветке - делашь все нужные изменения.
2. Когда готова делать коммит:
   git add .
   git commit -m "тут внутри скобочек пишешь коммит который хочешь"
3. Если надо пушишь ветку -
   git push origin <название ветки которую хочешь пушить без скобочек>

# Как сдавать домашнее задание https://drive.google.com/file/d/1LxvTTqaXt74DkqDEmCk29MVT9EF0b3Zq/view
