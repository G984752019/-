const APPLICATION_KEY = "0be41d19127cd50000037677b603a764bd7fa60924e1105d2b5b249c9d5bb2db";
const CLIENT_KEY = "b9fe1ad51a1fb943e0271cc06ffa0cc28a2062bde1954622ce83792fe89259e7";
const ncmb = new NCMB(APPLICATION_KEY,CLIENT_KEY);
const DBName = "HighScore";
let ScoreClass = ncmb.DataStore(DBName);

    ScoreClass
      .order("HighScore")
      .fetchAll()
      .then(function(results){
        highScore.textContent = results[0].HighScore;
      })
      .catch(function(err){
        console.log("GET ERROR:" + err);
      });

function save(){
  let score = new ScoreClass();
  let key = "HighScore";
  //const time = document.getElementById('time');
  //let value = time.value;
  let value = parseInt((now.getTime() - start.getTime()) / 1000);
  score.set(key, value);
  score.save()
  .then(function(){
    console.log("SAVE COMPLETE" + value);
  })
  .catch(function(err){
    console.log("SAVE ERROR:" + err);
  });
}

function load(){
  let value = parseInt((now.getTime() - start.getTime()) / 1000);
  ScoreClass
  .order("HighScore")
  .fetchAll()
  .then(function(results){
      if(results[0].HighScore > value){
        alert("High score!! :" + value);
        highScore.textContent = value;
      }
  })
  .catch(function(err){
    console.log("GET ERROR:" + err);
  });
}
