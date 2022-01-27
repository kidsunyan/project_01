window.onload = function () {

    var middle = document.querySelector('.grid-middle');
    var as = document.querySelectorAll('.grid-middle>a');
    middle.onmouseover = function () {
        for (var i = 0; i < as.length; i++) {
            as[i].style.display = 'block';
        }
    }
    middle.onmouseout = function () {
        for (var i = 0; i < as.length; i++) {
            as[i].style.display = 'none';
        }
    }
    var cirtle = document.querySelector('.cirtle');
   
    var turn=document.querySelector('.turn');
    //克隆第一张图片
    var first=turn.children[0].cloneNode(true);
    turn.append(first); 
    var imgs = document.querySelectorAll('.turn img');

    for (var j = 0; j < imgs.length-1; j++) {
        var li = document.createElement('li');
        cirtle.append(li);
        li.setAttribute('index',j);
        li.onclick = function () {
            for (var i = 0; i < imgs.length-1; i++) {
                cirtle.children[i].className = '';
            }
            this.className = 'current';
            var index=this.getAttribute('index');
            num=index;
            count=index;
            animation(turn,-index*790);
        }
    }
    cirtle.children[0].className = 'current';
    var arrowright=document.querySelector('.arrow-r');
    
    var num=0;
    var count=0
    arrowright.onclick=function()
    {   if(num==imgs.length-1)
        {
            turn.style.left=0;
            num=0;
        }
         num++;
        animation(turn,-num*790);
        count++;
        if(count==imgs.length-1)
        {
            count=0;
        }
       
        for(var i=0;i<imgs.length-1;i++)
        {
            cirtle.children[i].className='';
        }
        cirtle.children[count].className='current';

    }
    
    var arrowleft=document.querySelector('.arrow-l');
    arrowleft.onclick=function()
    {   if(num==imgs.length-1)
        {
            turn.style.left=0;
            num=0;
        }
         num++;
        animation(turn,-num*790);
        count++;
        if(count==imgs.length-1)
        {
            count=0;
        }
       
        for(var i=0;i<imgs.length-1;i++)
        {
            cirtle.children[i].className='';
        }
        cirtle.children[count].className='current';

    }
  
    
}
