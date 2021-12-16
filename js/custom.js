$(document).ready(function(){
    /*
    css('스타일 속성', '스타일 값').css('스타일 속성', '스타일 값').css('스타일 속성', '스타일 값')...
    css({'스타일 속성':'스타일 값','스타일 속성':'스타일 값','스타일 속성':'스타일 값','스타일 속성':'스타일 값'})
    attr({'속성': '값','속성': '값','속성': '값'})
    attr('속성명'): 속성명에 해당하는 값을 얻는다.
    */
    $('ul li').css({'margin-right' : '50px', 'color' : 'blue'});
    $('.btn1').click(function(){
        $('img').attr({'src' : 'imgs/bg2.jpg', 'alt' : '시계'});
    });
    $('.btn2').click(function(){
        $('img').attr({'src' : 'imgs/bg3.jpg', 'alt' : '시계'});
        var value = $('img').attr('src');
        alert(value);
    });

    $('ul.box li').eq(4).css({'color' : 'green'});
    $('ul.box li').find('strong').css({'color' : 'red'});
});