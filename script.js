$('.start-btn').click( function() {
    $("#home").removeClass("show");
    $("#home").addClass("hidden");
    $("#enarksi").addClass("show");
    console.log("start");
} );


$('.about-btn').click( function() {
    $("#home").removeClass("show");
    $("#home").addClass("hidden");
    $("#about").addClass("show");
    console.log("about");
} );


$('.credits-btn').click( function() {
    $("#home").addClass("hidden");
    $("#home").removeClass("show");
    $("#credits").addClass("show");
    console.log("credits");
} );



$('.back').click( function() {
    $("#home").removeClass("hidden");
    $("#home").addClass("show");
    $("#enarksi").removeClass("show");
    $("#about").removeClass("show");
    $("#credits").removeClass("show");
    console.log("back");
} );


/////////////////



const timer = ms => new Promise(res => setTimeout(res, ms))

var enarksii = ["images/enarksi2.png" , "images/enarksi3.png", "images/enarksi4.png", "images/enarksi5.png", "images/enarksi1.png"];
var credd = ["images/cred2.png" , "images/cred3.png", "images/cred4.png", "images/cred5.png", "images/cred.png", "images/cred6.png"];

var logoo = ["images/18m1.png" ,"images/18m2.png" ,"images/18m3.png"  ,"images/18m5.png" ,"images/18m6.png" ];

var pouu = ["images/pou1.png" ,"images/pou2.png" ,"images/pou3.png"  ,"images/pou4.png" ];


var startt = ["images/start.png" ,"images/start2.png" ,"images/start3.png"  ,"images/start4.png","images/start5.png" ];





async function enarksi(){

        for (let i = 0; i < 5; i++) {
                document.getElementById("enarksi").src = enarksii[i];
                await timer(150); // then the created Promise can be awaited
              
        }

    

}


async function cred(){

        for (let i = 0; i < 5; i++) {
                document.getElementById("cred").src = credd[i];
                await timer(145); // then the created Promise can be awaited
              
        }
        cred();
    

}

cred();


async function logo(){

        for (let i = 0; i < 5; i++) {
                document.getElementById("logo").src = logoo[i];
                await timer(170); // then the created Promise can be awaited
              
        }
        logo();
    

}

logo();

async function pou(){

        for (let i = 0; i < 3; i++) {
                document.getElementById("pou").src = pouu[i];
                await timer(170); // then the created Promise can be awaited
              
        }
        pou();
    

}

pou();



async function start(){

        for (let i = 0; i < 3; i++) {
                document.getElementById("start").src = startt[i];
                await timer(170); // then the created Promise can be awaited
              
        }
        start();
    

}

start();

