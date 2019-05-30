function withData(param) {
  return param < 10 ? '0' + param : '' + param;
}
function getLoopArray(start, end) {
  var start = start || 0;
  var end = end || 1;
  var array = [];
  for (var i = start; i <= end; i++) {
    array.push(withData(i));
  }
  return array;
}
function getNewTimeArry() {
  // 当前时间的处理
  var newDate = new Date();
  var hour = withData(newDate.getHours()),
    minu = withData(newDate.getMinutes()),
    seco = withData(newDate.getSeconds());

  return [hour, minu, seco];
}
function timePicker(date) {
  // 返回默认显示的数组和联动数组的声明
  var time = [];
  var timeArray = [[], [], []];
  // 默认开始显示数据
  var defaultTime = date ? [...date.split(':')] : getNewTimeArry();
  // 处理联动列表数据
  /*时分秒*/
  timeArray[0] = getLoopArray(0, 23);
  timeArray[1] = getLoopArray(0, 59);
  timeArray[2] = getLoopArray(0, 59);
  timeArray.forEach((current, index) => {
    time.push(current.indexOf(defaultTime[index]));
  });
  return {
    timeArray: timeArray,
    time:time,
  }
}

function timeResult(time){
  var timeArray = time;
  if (timeArray[0] < 10){
    timeArray[0] = '0' +timeArray[0];
  }
  if (timeArray[1] < 10) {
    timeArray[1] = '0' + timeArray[1];
  }
  if (timeArray[2] < 10) {
    timeArray[2] = '0' + timeArray[2];
  }
  return timeArray[0] + ":" + timeArray[1] + ":" + timeArray[2];
}
module.exports = {
  timePicker: timePicker
}
