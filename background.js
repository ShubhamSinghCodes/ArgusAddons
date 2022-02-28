console.log('Hello world');
var s = document.createElement('script');
s.src = 'https://raw.githubusercontent.com/ShubhamSinghCodes/ArgusAddons/main/inject.js';
s.onload = function() {
    this.remove();
};
(document.head || document.documentElement).appendChild(s);
console.log(window.location.href);
if (window.location.href == 'http://argusaddons.pythonanywhere.com/' || window.location.href == 'https://argusaddons.pythonanywhere.com/') {
    var main = document.getElementById('addoncheck');
    main.innerHTML = '<span style="color: #00ff00;">Yes, ArgusAddons <em><strong>is</strong></em> installed.</span>';
    console.log("Yay, ArgusAddons is installed!");
}
game="jss12"
more="jss12"
function change() {
    var sidebar = document.getElementsByClassName("MuiList-root jss15 MuiList-padding");
    function replaceHTML(i) {
        sidebar[i].innerHTML = '<a href="/" style="text-decoration: none;"><div class="MuiButtonBase-root MuiListItem-root MuiListItem-gutters MuiListItem-button" tabindex="0" role="button" aria-disabled="false"><div class="" title="Dashboard"><img src="https://argusaddons.pythonanywhere.com/preview/home.png" style="     height: 170%;     width: 170%; "></div><span class="MuiTouchRipple-root"></span></div></a><a href="/homework" style="text-decoration: none;"><div class="MuiButtonBase-root MuiListItem-root MuiListItem-gutters MuiListItem-button" tabindex="0" role="button" aria-disabled="false"><div class="" title="Homework"><img src="https://argusaddons.pythonanywhere.com/preview/homework.png" style="     height: 170%;     width: 170%; "></div><span class="MuiTouchRipple-root"></span></div></a><a href="/listing-pa" style="text-decoration: none;"><div class="MuiButtonBase-root MuiListItem-root MuiListItem-gutters MuiListItem-button" tabindex="0" role="button" aria-disabled="false"><div class="" title="Online Assessment"><img src="https://argusaddons.pythonanywhere.com/preview/exam.png" style="     height: 170%;     width: 170%; "></div><span class="MuiTouchRipple-root"></span></div></a><a href="/learning-network" style="text-decoration: none;"><div class="MuiButtonBase-root MuiListItem-root MuiListItem-gutters MuiListItem-button" tabindex="0" role="button" aria-disabled="false"><div class="" title="Learning Network"><img src="https://argusaddons.pythonanywhere.com/preview/learningnet.png" style="     height: 170%;     width: 170%; "></div><span class="MuiTouchRipple-root"></span></div></a><a href="/portfolio" style="text-decoration: none;"><div class="MuiButtonBase-root MuiListItem-root jss29 MuiListItem-gutters MuiListItem-button" tabindex="0" role="button" aria-disabled="false"><div class="" title="Portfolio"><img src="https://argusaddons.pythonanywhere.com/preview/portfolio.png" style="     height: 170%;     width: 170%; "></div><span class="MuiTouchRipple-root"></span></div></a><a href="/online-classes" style="text-decoration: none;"><div class="MuiButtonBase-root MuiListItem-root MuiListItem-gutters MuiListItem-button" tabindex="0" role="button" aria-disabled="false"><div class="" title="Online Classes"><img src="https://argusaddons.pythonanywhere.com/preview/class.png" style="     height: 170%;     width: 170%; "></div><span class="MuiTouchRipple-root"></span></div></a><a href="/help-faq" style="text-decoration: none;"><div class="MuiButtonBase-root MuiListItem-root MuiListItem-gutters MuiListItem-button" tabindex="0" role="button" aria-disabled="false"><div class="" title="Help &amp; FAQ"><img src="https://argusaddons.pythonanywhere.com/preview/faq.png" style="     height: 170%;     width: 170%; "></div><span class="MuiTouchRipple-root"></span></div></a><a href="/logout" style="text-decoration: none;"><div class="MuiButtonBase-root MuiListItem-root MuiListItem-gutters MuiListItem-button" tabindex="0" role="button" aria-disabled="false"><div class="" title="Logout"><img src="https://argusaddons.pythonanywhere.com/preview/logout.png" style="     height: 170%;     width: 170%; "></div><span class="MuiTouchRipple-root"></span></div></a><span class="material-icons MuiIcon-root fa fa-angle-right" aria-hidden="true" style="left: 50px; bottom: 22px; position: fixed; color: white;"></span><a class="jss22" href="/profile"><li class="MuiListItem-root"><div class="MuiAvatar-root MuiAvatar-circle jss16"><img src="https://argusaddons.pythonanywhere.com/preview/profile.png" style="     height: 170%;     width: 170%; "></div></li></a><a href="https://web.zoment.com/euro/web/NoticeBoard" style="text-decoration: none;"><div class="MuiButtonBase-root MuiListItem-root MuiListItem-gutters MuiListItem-button" tabindex="0" role="button" aria-disabled="false"><div class="" title="Webgenie"><img src="https://web.zoment.com/euro/web/apple-touch-icon-57x57.png" style="width: 170%;height: 170%;" onclick="window.open(" https:="" web.zoment.com="" euro="" web="" noticeboard")"=""></div><span class="MuiTouchRipple-root"></span></div></a><a href="/more" style="text-decoration: none;"><div class="MuiButtonBase-root MuiListItem-root MuiListItem-gutters MuiListItem-button" tabindex="0" role="button" aria-disabled="false"><div class="" title="More"><img src="https://argusaddons.pythonanywhere.com/preview/more.png" style="     height: 170%;     width: 170%; "></div><span class="MuiTouchRipple-root"></span></div></a>';
    }
    for (var i = 0; i < sidebar.length; i++) {
        replaceHTML(i);
    }
    if (window.location.href == 'https://euro.learnindialearn.in/none') {
        var main = document.getElementsByClassName("jss12");
        function replaceHTML(i) {
            main[i].innerHTML = '';
        }
        var arrayLength = main.length;
        for (var i = 0; i < arrayLength; i++) {
            replaceHTML(i);
        }
    }
    if (window.location.href == 'http://argusaddons.pythonanywhere.com/') {
        var main = document.getElementById('addoncheck');
         main.innerHTML = '<span style="color: #00ff00;">Yes, ArgusAddons <em><strong>is</strong></em> installed.</span>';
        console.log("Yay, ArgusAddons is installed!");
    }
    if (window.location.href == 'https://euro.learnindialearn.in/game') {
        var main = document.getElementsByClassName(game);
        function replaceHTML(i) {
            main[i].innerHTML = '<iframe src="https://scratch.mit.edu/projects/60917032/embed" allowtransparency="true" frameborder="0" scrolling="no" allowfullscreen="true" style="height: -webkit-fill-available;width: -webkit-fill-available;"></iframe>';
            game=""
        }
        var arrayLength = main.length;
        for (var i = 0; i < arrayLength; i++) {
            replaceHTML(i);
        }
    }
    if (window.location.href == 'https://euro.learnindialearn.in/more') {
        var main = document.getElementsByClassName(more);
        function replaceHTML(i) {
            main[i].innerHTML = '<h1>Parent Argus links:</h1><p><a href="/parentDashboard">Dashboard</a></p><p><a href="/parentCorner">Parent Corner</a></p><p><a href="/learningAnalytics">Learning Analytics</a></p><p><a href="/assignment/homework">Homework</a></p><p><a href="/assesment">Exam report</a></p><p><a href="/teacher-detail">Teacher Detail</a></p><p><a href="/report-card">Report Card</a></p><div style="display: none;", id="hiddenlinks"><h1>Teacher Argus links:</h1><p><a href="/courses/recommended">Recommended courses (extra learning stuff)</a></p><p><a href="/examination/digital-evaluation">Evaluate Exams (not working, but try it out anyway)</a></p><p><a href="/teacher-leader-board">Teacher Leaderboard (exactly what it sounds like)</a></p><p><a href="/listing-blogs">Blogs (for <em>teachers</em>?)</a></p><p><a href="/observation">Observation (not working, IDK what, probably remarks about the class)</a></p><p><a href="/lessonplan">Lesson Plan (not working, tells syllabus)</a></p><p><a href="/circular">Circulars (not working, post circulars)</a></p><p><a href="/homework-assign">Assign HW (not working, exactly what it sounds like)</a></p></div>';
            if ( window.addEventListener ) {    var kkeys = [], konami = "38,38,40,40,37,39,37,39,66,65";    window.addEventListener("keydown", function(e){        console.log(kkeys);        kkeys.push( e.keyCode );        if ( kkeys.toString().indexOf( konami ) >= 0 ){            document.getElementById("hiddenlinks").style.display="inherit";            kkeys = [];        }    }, true);}
            more=""
        }
        var arrayLength = main.length;
        for (var i = 0; i < arrayLength; i++) {
            replaceHTML(i);
        }
    }
}
change();
setInterval(function() {
    try {
        var elem = document.getElementById('busy-indicator');
        elem.parentElement.removeChild(elem);
    } catch (error) {
        console.log(error);
    }
}, 1);
setInterval(change, 1000);
