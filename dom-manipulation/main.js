var numTimes = 0;
var queryHot = document.querySelector('.hot-button');
var queryClick = document.querySelector('.click-count');

function test(event) {
  numTimes += 1;
  queryClick.textContent = `Clicks: ${numTimes}`;
  if (numTimes < 4) {
    queryHot.className = 'hot-button cold';
  } else if (numTimes >= 4 && numTimes < 7) {
    queryHot.className = 'hot-button cool';
  } else if (numTimes >= 7 && numTimes < 10) {
    queryHot.className = 'hot-button tepid';
  } else if (numTimes >= 10 && numTimes < 13) {
    queryHot.className = 'hot-button warm';
  } else if (numTimes >= 13 && numTimes < 16) {
    queryHot.className = 'hot-button hot';
  } else { queryHot.className = 'hot-button nuclear'; }
  return queryHot;
}
queryHot.addEventListener('click', test);
