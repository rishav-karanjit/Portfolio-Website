var $home = $('#Home');

$home.waypoint(function(){
    $('.nav li a.active').removeClass('active');
    var $parent = document.getElementsByTagName("a[href='#Home']");
    $('.nav li a[href="#Home"]').addClass('active');
})

var $div = $('#AboutMe');

$div.waypoint(function(){
    $('.nav li a.active').removeClass('active');
    var $parent = document.getElementsByTagName("a[href='#AboutMe']");
    $('.nav li a[href="#AboutMe"]').addClass('active');
})

var $skills = $('#Skills');

$skills.waypoint(function(){
    $('.nav li a.active').removeClass('active');
    var $parent = document.getElementsByTagName("a[href='#Skills']");
    $('.nav li a[href="#Skills"]').addClass('active');
})

var $Projects = $('#Projects');

$Projects.waypoint(function(){
    $('.nav li a.active').removeClass('active');
    var $parent = document.getElementsByTagName("a[href='#Projects']");
    $('.nav li a[href="#Projects"]').addClass('active');
})

var $Academics = $('#Academics');

$Academics.waypoint(function(){
    $('.nav li a.active').removeClass('active');
    var $parent = document.getElementsByTagName("a[href='#Academics']");
    $('.nav li a[href="#Academics"]').addClass('active');
})

var $WorkExperience = $('#WorkExperience');

$WorkExperience.waypoint(function(){
    $('.nav li a.active').removeClass('active');
    var $parent = document.getElementsByTagName("a[href='#WorkExperience']");
    $('.nav li a[href="#WorkExperience"]').addClass('active');
})