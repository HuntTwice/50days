let aroundText = ["四十年来家国", "三千里第山河", "凤阁龙楼连霄汉", "玉树琼枝作烟萝", "几曾识干戈", "一旦归为臣虏", "沈腰潘鬓消磨", "最是仓皇辞庙日", "教坊尤奏别离歌", "垂泪对宫娥"];
let colors = ["yellow", "pink", "gray", "tomato", 'lightpink', 'lavender', 'lightsalmon', 'cadetblue', 'darkseagreen', 'gold',]
let round = document.querySelector(".roundComponent");
let preBtn = document.querySelector("#btn-pre");
let nextBtn = document.querySelector("#btn-next");

let index = 0;
nextBtn.addEventListener('click', () => {
    index++;
    if (index > aroundText.length) index = 0;
    round.textContent = aroundText[index];
    round.style.background = colors[index];
})

preBtn.addEventListener('click',()=>{
    index--;
    if (index < 0) index = aroundText.length;
    round.textContent = aroundText[index];
    round.style.background = colors[index];
})