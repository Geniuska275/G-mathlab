

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
}

function hyPo(){
    var hypotenuse=Number(document.getElementById("hyp").value);
        document.getElementById("h").innerHTML=hypotenuse;
}

function opP(){
    var opposite=Number(document.getElementById("opp").value);
        document.getElementById("o").innerHTML=opposite;
}
function adJ(){
    var Adjacent=Number(document.getElementById("adj").value);
        document.getElementById("a").innerHTML=Adjacent;
}

 function pythaGoras(){
    var o=Number(document.getElementById("opp").value);
    var a=Number(document.getElementById("adj").value);
    var calc= o*o + a*a
     var ans=Math.sqrt(calc);
     document.getElementById("answer").innerHTML=ans;
 }
 function deLete(){
     const clear=""
     document.getElementById("answer").innerHTML=clear;
     document.getElementById("a").innerHTML=clear;
     document.getElementById("o").innerHTML=clear;
    }

 
 function oppAns(){
    const h=Number(document.getElementById("hy").value);
    const a=Number(document.getElementById("ad").value);
    const calc=h*h - a*a
    const ans=Math.sqrt(calc);
    document.getElementById("oppanswer").innerHTML=ans;
 }

 function hyP(){
    const hypotenuse=Number(document.getElementById("hy").value);
        document.getElementById("hypo").innerHTML=hypotenuse;
}
function adjA(){
    const Adj=Number(document.getElementById("ad").value);
    console.log(Adj)
       document.getElementById("hypot").innerHTML=Adj;
}
function cleAr(){
    const clear=""
    document.getElementById("hypot").innerHTML=clear;
    document.getElementById("hypo").innerHTML=clear;
    document.getElementById("oppanswer").innerHTML=clear;
   }
   function adJace(){
    const h=Number(document.getElementById("hypotenuse").value);
    const o=Number(document.getElementById("Opposite").value);
    const calc=h*h - o*o
    const ans=Math.sqrt(calc);
    document.getElementById("z").innerHTML=ans;
    console.log(ans)
 }

 function hypoT(){
    const hyp=Number(document.getElementById("hypotenuse").value);
       document.getElementById("hypote").innerHTML=hyp;
}
function oPP(){
    const opp=Number(document.getElementById("Opposite").value);
       document.getElementById("opposit").innerHTML=opp;
}
function canCel(){
    const clear=""
    document.getElementById("opposit").innerHTML=clear;
    document.getElementById("hypote").innerHTML=clear;
    document.getElementById("z").innerHTML=clear;
   }

   function hSIN(){
    const Adjacent=Number(document.getElementById("s").value);
        document.getElementById("g").innerHTML=Adjacent;
}

function oSIN(){
    const Adjacent=Number(document.getElementById("h").value);
        document.getElementById("k").innerHTML=Adjacent;
}
function sOH(){
 const x=Number(document.getElementById("s").value);
 const y=Number(document.getElementById("h").value);
 const number=x/y;
 const calc=Math.asin(number)
 const string=calc.toString();
 document.getElementById("i").innerHTML=string;
}
function cAncel(){
    const clear="";
  document.getElementById('k').innerHTML=clear;
  document.getElementById('g').innerHTML=clear;
  document.getElementById('i').innerHTML=clear;
}

$(document).ready(function(){
    $("#hide").mouseover(function(){
        $("#show").toggle();
    });
});

$(document).ready(function(){
    $("#an").click(function(){
        $("#i").toggle(3000);
    });
});
function cAt(){
    const Adja=Number(document.getElementById("m").value);
        document.getElementById("p").innerHTML=Adja;
}
function rAt(){
    const Adjcent=Number(document.getElementById("n").value);
        document.getElementById("q").innerHTML=Adjcent;
}
function dAtee(){
    const Ad=Number(document.getElementById("ze").value);
      document.getElementById("ge").innerHTML=Ad;
}
 function cosineRule(){
     const b=Number(document.getElementById("m").value);
     const a=Number(document.getElementById("n").value);
     const angle=Number(document.getElementById("ze").value);
     const c=b*b + a*a -2*b*a*Math.cos(angle*Math.PI/180);
     const calc=Math.sqrt(c);
     document.getElementById("ki").innerHTML= calc;
 }

 function cLear(){
    const clear="";
  document.getElementById('q').innerHTML=clear;
  document.getElementById('p').innerHTML=clear;
  document.getElementById('ge').innerHTML=clear;
  document.getElementById('m').value=clear;
  document.getElementById('n').value=clear;
  document.getElementById('ze').value=clear;
}

$(document).ready(function(){
    $("#at").click(function(){
        $("#ki").toggle(3000);
    });
});