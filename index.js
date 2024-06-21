
let page = $(".page");
let button =  $(".btn");


if ($(button[0]).css('z-index') == 3) {
    $(page[0]).css('z-index', 3);
    $(page[0]).css('display', '');
    $(page[1]).css('display', 'none');
    $(page[2]).css('display', 'none');
}

$(button[0]).on("click", ()=> {
    $(button[0]).css('z-index',3);
    $(page[0]).css('z-index', 3);
    $(page[0]).fadeIn();
    $(page[0]).css('display', '');

    $(button[1]).css('z-index',2);
    $(page[1]).css('z-index', 2);
    $(page[1]).css('display', 'none');

    $(button[2]).css('z-index',1);
    $(page[2]).css('z-index', 1);
    $(page[2]).css('display', 'none');
} );
$(button[1]).on("click", ()=> {
    $(button[0]).css('z-index',2);
    $(page[0]).css('z-index', 2);
    $(page[0]).css('display', 'none');

    $(button[1]).css('z-index',3);
    $(page[1]).css('z-index', 3);
    $(page[1]).fadeIn();
    $(page[1]).css('display', '');

    $(button[2]).css('z-index',1);
    $(page[2]).css('z-index', 1);
    $(page[2]).css('display', 'none');
} );
$(button[2]).on("click", ()=> {
    $(button[0]).css('z-index',1);
    $(page[0]).css('z-index', 1);
    $(page[0]).css('display', 'none');

    $(button[1]).css('z-index',2);
    $(page[1]).css('z-index', 2);
    $(page[1]).css('display', 'none');

    $(button[2]).css('z-index',3);
    $(page[2]).css('z-index', 3);
    $(page[2]).fadeIn();
    $(page[2]).css('display', '');
} );


$(button[0]).on("mouseover", ()=> {
    $(button[0]).css('z-index',3);

    $(button[1]).css('z-index',2);

    $(button[2]).css('z-index',1);
} );
$(button[1]).on("mouseover", ()=> {
    $(button[0]).css('z-index',2);

    $(button[1]).css('z-index',3);

    $(button[2]).css('z-index',1);
} );
$(button[2]).on("mouseover", ()=> {
    $(button[0]).css('z-index',1);

    $(button[1]).css('z-index',2);

    $(button[2]).css('z-index',3);
} );



$(button[0]).on("mouseout", ()=> {
    if ($(page[0]).css('z-index') == 3) {
        $(button[0]).css('z-index',3);
        $(button[1]).css('z-index',2);
        $(button[2]).css('z-index',1);
        
    }
    if ($(page[1]).css('z-index') == 3) {
        $(button[0]).css('z-index',2);
        $(button[1]).css('z-index',3);
        $(button[2]).css('z-index',1);
    }
    if ($(page[2]).css('z-index') == 3) {
        $(button[0]).css('z-index',1);
        $(button[1]).css('z-index',2);
        $(button[2]).css('z-index',3);
    }
   
} );
$(button[1]).on("mouseout", ()=> {
    if ($(page[0]).css('z-index') == 3) {
        $(button[0]).css('z-index',3);
        $(button[1]).css('z-index',2);
        $(button[2]).css('z-index',1);
        
    }
    if ($(page[1]).css('z-index') == 3) {
        $(button[0]).css('z-index',2);
        $(button[1]).css('z-index',3);
        $(button[2]).css('z-index',1);
    }
    if ($(page[2]).css('z-index') == 3) {
        $(button[0]).css('z-index',1);
        $(button[1]).css('z-index',2);
        $(button[2]).css('z-index',3);
    }
} );
$(button[2]).on("mouseout", ()=> {
    if ($(page[0]).css('z-index') == 3) {
        $(button[0]).css('z-index',3);
        $(button[1]).css('z-index',2);
        $(button[2]).css('z-index',1);
        
    }
    if ($(page[1]).css('z-index') == 3) {
        $(button[0]).css('z-index',2);
        $(button[1]).css('z-index',3);
        $(button[2]).css('z-index',1);
    }
    if ($(page[2]).css('z-index') == 3) {
        $(button[0]).css('z-index',1);
        $(button[1]).css('z-index',2);
        $(button[2]).css('z-index',3);
    }
} );