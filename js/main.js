/**
 * Created by Ishan Joshi on 14/08/14.
 */
var min = 15;
var max = 28;


if(localStorage.accessible == true){
    console.log("true");
}
else{
    localStorage.accessible = false;
}

function increaseFontSize()
{
    var p = document.getElementsByTagName("body");
    for(i=0; i< p.length; i++)
    {
        if(p[i].style.fontSize)
        {
            var s = parseInt(p[i].style.fontSize.replace("px", ""));
        }
        else
        {
            var s = 12;
        }
        if(s!=max)
        {
            s++;
        }
        p[i].style.fontSize = s+"px";

    }
}

function decreaseFontSize()
{
    var p = document.getElementsByTagName("body");
    for(i=0; i< p.length; i++)
    {
        if(p[i].style.fontSize)
        {
            var s = parseInt(p[i].style.fontSize.replace("px", ""));
        }
        else
        {
            var s = 12;
        }
        if(s!=min)
        {
            s--;
        }
        p[i].style.fontSize = s+"px";

    }
}

function clickShow(clicked, showed, toggleTime)
{
    $(clicked).click(function ()
    {
        $(showed).toggle(toggleTime);

    });
}

$(".cds").hover(function (){
    $(".description").toggle(300);
});

/*clickShow("#email", "#emailUsFormContainer", 300);
clickShow("#close", "#emailUsFormContainer", 300);*/

$("#ea").click(function(){
    localStorage.accessible = true;
    console.log("ee");
    $('*').addClass("shdow");
});

