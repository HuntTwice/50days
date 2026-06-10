//通过 id 查找元素
let item = document.getElementById('item');

//通过类名查找元素
let boxArr = document.getElementsByClassName('box');

//通过标签名查找元素
let pArr = document.getElementsByTagName('p');


//元素选择器
let leftBarArr = document.querySelectorAll('#container>.left-bar');
leftBarEle = leftBarArr.item(0);
// 修改标签内的文本
item.innerText = 'hello,world'


// 修改一个DOM节点的文本内容，还可以直接通过HTML片段修改DOM节点内部的子树
item.innerHTML = "<h1>沉没成本不参与重大决策</h1>"

let container = document.querySelector('#container');
let text = document.getElementById('text');
container.appendChild(text)

let poemText = document.createElement('p');
poemText.innerText = "年年岁岁花相似,岁岁年年人不同";
poemText.id = 'poem'
container.appendChild(poemText)


let pinkBox = document.createElement('div');
pinkBox.style.background = "pink";
pinkBox.style.width = "200px";
pinkBox.style.height = "100px";
container.insertBefore(pinkBox, leftBarEle);


function changeText(e) {
    e.innerHTML = "Hi,Jack!"
}


let tom = document.getElementById("tom");
tom.onclick = function () {
    alert("Hi,I am Tom")
};
// 箭头函数定义在全局，所以 this 就是全局的 this（浏览器中是 window）
tom.addEventListener('click',()=>{
    alert("Hi,I am Tom")
})

