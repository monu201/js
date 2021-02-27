var result=0;
var q1=document.getElementsByClassName("1st");
var q2=document.getElementsByClassName("2nd");
var q3=document.getElementsByClassName("3rd");
var q4=document.getElementsByClassName("4th");
var q5=document.getElementsByClassName("5th");
var s=document.querySelector("#sub");
var b=document.getElementsByTagName("button")[0];
var i=0;

s.addEventListener("click",function()
{
     for (i=0;i<4;i++)
     {
         if(q1[i]==q1[0] && q1[i].checked==true)
         {
           result=result+0;
           break;
         }
        else if(q1[i]==q1[1] && q1[i].checked==true)
         {
           result=result+1;
           break;
         }
        else if(q1[i]==q1[2] && q1[i].checked==true)
         {
           result=result+2;
           break;
         }
         else if(q1[i]==q1[3] && q1[i].checked==true)
         {
           result=result+3;
           break;
         }
     }
     for (i=0;i<4;i++)
     {
         if(q2[i]==q2[0] && q2[i].checked==true)
         {
           result=result+0;
           break;
         }
         else if(q2[i]==q2[1] && q2[i].checked==true)
         {
           result=result+1;
           break;
         }
        else if(q2[i]==q2[2] && q2[i].checked==true)
         {
           result=result+2;
           break;
         }
         else if(q2[i]==q2[3] && q2[i].checked==true)
         {
           result=result+3;
           break;
         }
     }
     for (i=0;i<4;i++)
     {
         if(q3[i]== q3[0]  && q3[i].checked==true)
         {
           result=result+0;
           break;
         }
         else if(q3[i]==q3[1] && q3[i].checked==true)
         {
           result=result+1;
           break;
         }
        else if(q3[i]==q3[2] && q3[i].checked==true)
         {
           result=result+2;
           break;
         }
         else if(q3[i]==q3[3] && q3[i].checked==true)
         {
           result=result+3;
           break;
         }
     }
     for (i=0;i<4;i++)
     {
         if(q4[i]==q4[0] && q4[i].checked==true)
         {
            result=result+0;
            break;
         }
         else if(q4[i]==q4[1] && q4[i].checked==true)
         {
           result=result+1;
           break;
         }
        else if(q4[i]==q4[2] && q4[i].checked==true)
         {
           result=result+2;
           break;
         }
         else if(q4[i]==q4[3] && q4[i].checked==true)
         {
           result=result+3;
           break;
         }
     }
     for (var i=0;i<4;i++)
     {
         if(q5[i]==q5[0] && q5[i].checked==true)
         {
            result=result+0;
            break;
         }
         else if(q5[i]==q5[1] && q5[i].checked==true)
         {
           result=result+1;
           break;
         }
        else if(q5[i]==q5[2] && q5[i].checked==true)
         {
           result=result+2;
           break;
         }
         else if(q5[i]==q5[3] && q5[i].checked==true)
         {
           result=result+3;
           break;
         }
     }
     
     document.getElementById("res").innerText=result+" points";
     result=0;

})

b.addEventListener("click",function()
{
  document.getElementById("res").innerText="";
  result=0;
})

