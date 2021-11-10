let timer = null;//何もない
function init() {
  if (timer == null) {
    start = new Date();
    time();
    gameStart();
  }
}

function gameStart() {
  let random = Math.floor(Math.random() * size * size);
  let qNum = Math.floor(Math.random() * q.length);
  for (let i = 0; i<size*size; i++){
      let s = document.createElement("span");
      s.textContent = q[qNum][0];
      s.setAttribute("id", "num" + i);
      s.addEventListener('click',function(){
        if ( this.textContent == q[qNum][1]){
          //alert("正解！！");
          count ++;
          correct.play();
          while(cells.firstChild){//cellsの中身が存在する限り...
            cells.removeChild(cells.firstChild);
          }

          if(count == MAX){
            counter();
            gameClear();
          }else{
            gameStart();
          }
        }else{
          //alert("不正解！！");
          wrong.play();
        }
      });
      cells.appendChild(s);
    if(i % size == (size - 1)){
      const br = document.createElement("br");
      cells.appendChild(br);
    }
  }
  let ans = document.getElementById("num" + random);
  ans.textContent = q[qNum][1];
  //console.log(qNum);
}

function time() {
  now = new Date();
  let eTime = parseInt((now.getTime() - start.getTime()) / 1000);
  score.textContent = eTime;
  timer = setTimeout("time()", 1000);
}

function stop() {
  clearTimeout(timer);
  eTime = 0;
  score.textContent = eTime;
  timer = null;
}

function reset(){
  size = 5;
  document.getElementById('level').innerText = '普通';
  count = 0;
}

function gameClear(){
  reset();
  stop();
  alert("GAME CLEAR!!");
}

function counter(){
  let prevtime = parseInt((now.getTime() - start.getTime()) / 1000);;
  prevTime.textContent = prevtime;
  //prevlevel.textContent = prevLevel;
}

function easy() {
  if(timer == null){
    size = 3;
    document.getElementById('level').innerText = '簡単';
    //let prevLevel = '簡単';
  }
}

function normal() {
  if(timer == null){
    size = 5;
    document.getElementById('level').innerText = '普通';
    //let prevLevel = "普通";
  }
}

function hard() {
  if(timer == null){
    size = 7;
    document.getElementById('level').innerText = '難しい';
    //let prevLevel = "難しい";
  }
}
