//낮, 밤으로 테마를 변화시켜주는 함수
//추가로, a tag 가 붙은, 즉 하이퍼링크들의 글자 색을 테마에 맞게 변경시킨다.
var Links = {
  setColor:function (color){
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while(i < alist.length){
    //     alist[i].style.color = color;
    //     i = i + 1;
    //   }
    $('a').css('color', color);
  }
}
var Body = {
  setColor:function (color){
    //document.querySelector('body').style.color = color;
    $('body'),css('color', color);
  },
  setBackgroundColor:function (color){
    //document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color);
  }
}
function nightDayHandler(self){
  var target = document.querySelector('body');
  if(self.value === 'night') {
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value = 'day'

    Links.setColor('powderblue');
  } else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = 'night'

    Links.setColor('blue');
  }
}
