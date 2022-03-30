// harapriya


document.getElementById("btn1").addEventListener("click",function(){
    nxtbut();
})

document.getElementById("btn2").addEventListener("click",function(){
    prvbut();
})

var count=1;
function nxtbut()
{
    if(count==6)
    {
        count=1;
    }
    else
    {
        count++;
    }
    display()
}

function prvbut()
{
    if(count==1)
    {
        count=6;
    }
    else
    {
        count--;
    }
    display()
}

function display()
{
    var val=document.querySelectorAll("#allimg > div");
    // console.log(val.length)

    for(var i=0;i<val.length;i++)
    {
        if(i+1==count)
        {
            val[i].style.display="block";
            //console.log(val[i])
        }
        else
        {
            val[i].style.display="none";
        }
    }
}
setInterval(nxtbut,3000)



// harapriya