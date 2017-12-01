var insert_point = document.getElementById('report_unit_movie');
var impracticable = document.getElementsByClassName('impracticable'); 
var movie_count = 0;
var test_count = 0;
for(let i in impracticable){
  if(impracticable[i].textContent){
    if(impracticable[i].textContent[0]=== "視"){
      movie_count++;
    }
    if(impracticable[i].textContent[0] === "受"){
      test_count++; 
    }
  }
}
var count_code =
  `<div class='section'><h1>Count</h1><h2>Movie：${movie_count}</h2><h2>Test：${test_count}</h2></div>`;
insert_point.insertAdjacentHTML("beforeBegin",count_code);
