const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
function getLoopArray(start, end) {
  var start = start || 0;
  var end = end || 1;
  var array = [];
  for (var i = start; i <= end; i++) {
    array.push(formatNumber(i));
  }
  return array;
}
function getNewTimeArry() {
  // 当前时间的处理
  var newDate = new Date();
  var hour = formatNumber(newDate.getHours()),
    minu = formatNumber(newDate.getMinutes()),
    seco = formatNumber(newDate.getSeconds());

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
module.exports = {
  timePicker: timePicker
}
