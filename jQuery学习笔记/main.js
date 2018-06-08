$(document).ready(function(){
    console.log("Hello World!");
    $("p").click(function(event){
        alert("Thanks for visiting!");
    })
})

$(document).ready(function(){
    $(".list li").click(function(){
        var i = $(this).index();
        console.log( $(".list li").get(i) );
    })
    console.log( $(".list li:first-child") );
    console.log( $(".list li:last-child") );
    console.log( $(".list li:odd") );
    console.log( $(".list li:even") );    
    console.log( $(".list li:nth-child(1)") );    
    console.log( $(".list li:nth-child(2)") );        
    console.log( $(".list li:eq(0)") );
    console.log( $(".list li:eq(1)") );    
    console.log( $(".list").children() );

    console.log($(".grandfather").children());
    // $(".img1").attr('src','http://77music2.oss-cn-hangzhou.aliyuncs.com/data/attachment/forum/201212/07/1648185l7cb8vkz95lkp9k.jpg')
    $(".img1").attr({
        'src':'http://77music2.oss-cn-hangzhou.aliyuncs.com/data/attachment/forum/201212/07/1648185l7cb8vkz95lkp9k.jpg',
        'title':'周杰伦2'
    });

    console.log( $(".input1").val() );
    console.log( $(".input2").val() );
    console.log( $(".input3").val() );    

    console.log($(".box1").html());
    console.log($(".box2").text());

    $(".box2").html("Kyrie Irving");
    $(".box1").text("Lebron James");
    $(".box1").html("<p1>LBJ</p2>");
    $(".box1").text();

    $("body").css('backgroundColor',"#00f");

    $(".box3").height(50);
    $(".box3").width(50);
    $(".box3").css('backgroundColor',"#f00");
    console.log( $(".box3").width() );
    console.log( $(".box3").height() );

    $("body").append( $(".box3").clone() ) ;
    $(".box1").empty();
})

console.log( $(document).scrollTop() );

