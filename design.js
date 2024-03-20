var slist=[0,1,2,3,4,5,6,'w'];
var toss=Math.ceil(Math.random()*2);
console.log(toss);
updatestrike();
function updatestrike(){
   if(toss==1)
     {
       document.getElementById("sub").value="CSK Batting";
     }
     else{
        document.getElementById("sub").value="MI Batting";
     }
}
var count1=0;
var count2=0;
var w1count=0;
var w2count=0;
var team1scores=0;
var team2scores=0;
var team1=[];
var team2=[];
function updatematch()
{
    if(toss==1)
    {
        if(count1!=6 && w1count!=2)
        {
            var s=slist[Math.ceil(Math.random()*7)];
            team1.push(s);
            if(s=='w')
            {
                w1count++;
            }
            else{
                team1scores=team1scores+parseInt(s);
                document.getElementById("tm1").textContent=team1scores;
            }
            count1++;
            updatescores();  
        }
        else
        {
            if(team2scores==0)
            {
              toss=2;
              updatestrike();
            }
            else{
                if(team1scores<team2scores)
                {
                    document.getElementById("result").textContent="MI WON";
                }
               else if(team1scores>team2scores)
                {
                    document.getElementById("result").textContent="CSK WON";
                }
                else
                {
                    document.getElementById("result").textContent="MATCH DRAW!!";
                }
            }
        }
             
    }
    else{
        if(toss==2)
        {
            if(count2!=6 && w2count!=2)
           {
            var s=slist[Math.floor(Math.random()*7)];
            team2.push(s);
            if(s=='w')
            {
                w2count++;
            }
            else
            {
                team2scores=team2scores+parseInt(s);
                document.getElementById("tm2").textContent=team2scores;
            }
            count2++;
            updatescores();  
           }
        else
        {
            if(team1scores==0)
            {
              toss=1;
              updatestrike();
            }
            else{
                if(team1scores<team2scores)
                {
                    document.getElementById("result").textContent="MI WON";
                }
               else if(team1scores>team2scores)
                {
                    document.getElementById("result").textContent="CSK WON";
                }
                else
                {
                    document.getElementById("result").textContent="MATCH DRAW!!";
                }
            }
        }
             
      }

    }
}
function updatescores()
{
    var teamvalue1=document.getElementById("t1").children;
    for(let i=0;i<team1.length;i++)
    {
        teamvalue1[i].textContent=team1[i];
    }
    var teamvalue2=document.getElementById("t2").children;
    for(let i=0;i<team2.length;i++)
    {
        teamvalue2[i].textContent=team2[i];
    }
}