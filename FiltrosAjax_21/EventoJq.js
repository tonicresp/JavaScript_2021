$(document).ready(function(){  
    var i = 0;  
    var j = 0;
    $("div.overout").mouseover(function(){  
        $("#mover").text("mouseover");  
        $("#nummover").text(++i);  
        $('p').css({"background-color": "#9cf", "font-style": "italic"});
    })  
    .mouseout(function(){  
        $("#mout").text("mouseout");  
        $("#nummout").text(++j);
        $('p').css({"background-color": "", "font-style": ""});
    });  
});  