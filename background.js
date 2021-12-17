console.log('Hello world');
function change() {
	var sidebar = document.getElementsByClassName("MuiList-root jss15 MuiList-padding");
	function replaceHTML(i) {
		sidebar[i].innerHTML = '<a href="/" style="text-decoration: none;"><div class="MuiButtonBase-root MuiListItem-root MuiListItem-gutters MuiListItem-button" tabindex="0" role="button" aria-disabled="false"><div class="MuiListItemIcon-root" title="Dashboard"><img src="https://argusaddons.pythonanywhere.com/preview/home.png" style="     height: 30%;     width: 30%; "></div><span class="MuiTouchRipple-root"></span></div></a><a href="/homework" style="text-decoration: none;"><div class="MuiButtonBase-root MuiListItem-root MuiListItem-gutters MuiListItem-button" tabindex="0" role="button" aria-disabled="false"><div class="MuiListItemIcon-root" title="Homework"><img src="https://argusaddons.pythonanywhere.com/preview/homework.png" style="     height: 30%;     width: 30%; "></div><span class="MuiTouchRipple-root"></span></div></a><a href="/listing-pa" style="text-decoration: none;"><div class="MuiButtonBase-root MuiListItem-root MuiListItem-gutters MuiListItem-button" tabindex="0" role="button" aria-disabled="false"><div class="MuiListItemIcon-root" title="Online Assessment"><img src="https://argusaddons.pythonanywhere.com/preview/exam.png" style="     height: 30%;     width: 30%; "></div><span class="MuiTouchRipple-root"></span></div></a><a href="/learning-network" style="text-decoration: none;"><div class="MuiButtonBase-root MuiListItem-root MuiListItem-gutters MuiListItem-button" tabindex="0" role="button" aria-disabled="false"><div class="MuiListItemIcon-root" title="Learning Network"><img src="https://argusaddons.pythonanywhere.com/preview/learningnet.png" style="     height: 30%;     width: 30%; "></div><span class="MuiTouchRipple-root"></span></div></a><a href="/portfolio" style="text-decoration: none;"><div class="MuiButtonBase-root MuiListItem-root jss29 MuiListItem-gutters MuiListItem-button" tabindex="0" role="button" aria-disabled="false"><div class="MuiListItemIcon-root" title="Portfolio"><img src="https://argusaddons.pythonanywhere.com/preview/portfolio.png" style="     height: 30%;     width: 30%; "></div><span class="MuiTouchRipple-root"></span></div></a><a aria-current="page" class="jss28" href="/online-classes" style="text-decoration: none;"><div class="MuiButtonBase-root MuiListItem-root MuiListItem-gutters MuiListItem-button" tabindex="0" role="button" aria-disabled="false"><div class="MuiListItemIcon-root" title="Online Classes"><img src="https://argusaddons.pythonanywhere.com/preview/class.png" style="     height: 30%;     width: 30%; "></div><span class="MuiTouchRipple-root"></span></div></a><a href="/help-faq" style="text-decoration: none;"><div class="MuiButtonBase-root MuiListItem-root MuiListItem-gutters MuiListItem-button" tabindex="0" role="button" aria-disabled="false"><div class="MuiListItemIcon-root" title="Help &amp; FAQ"><img src="https://argusaddons.pythonanywhere.com/preview/faq.png" style="     height: 30%;     width: 30%; "></div><span class="MuiTouchRipple-root"></span></div></a><a href="/logout" style="text-decoration: none;"><div class="MuiButtonBase-root MuiListItem-root MuiListItem-gutters MuiListItem-button" tabindex="0" role="button" aria-disabled="false"><div class="MuiListItemIcon-root" title="Logout"><img src="https://argusaddons.pythonanywhere.com/preview/logout.png" style="     height: 30%;     width: 30%; "></div><span class="MuiTouchRipple-root"></span></div></a><span class="material-icons MuiIcon-root fa fa-angle-right" aria-hidden="true" style="left: 50px; bottom: 22px; position: fixed; color: white;"></span><a class="jss22" href="/profile"><li class="MuiListItem-root"><div class="MuiAvatar-root MuiAvatar-circle jss16"><p style="font-size: smaller;">Profile</p></div></li></a><a href="https://web.zoment.com/euro/web/NoticeBoard" style="text-decoration: none;"><div class="MuiButtonBase-root MuiListItem-root MuiListItem-gutters MuiListItem-button" tabindex="0" role="button" aria-disabled="false"><div class="MuiListItemIcon-root" title="Webgenie"><img src="https://web.zoment.com/euro/web/apple-touch-icon-57x57.png" style="width: 30%;height: 30%;" onclick="window.open(" https:="" web.zoment.com="" euro="" web="" noticeboard")"=""></div><span class="MuiTouchRipple-root"></span></div></a>';
	}
	for (var i = 0; i < sidebar.length; i++) {
		replaceHTML(i);
	}
	if (window.location.href == 'https://euro.learnindialearn.in/none') {
        var main = document.getElementsByClassName("jss12");
        function replaceHTML(i) {
               	main[i].innerHTML = ''
        }
        var arrayLength = main.length;
        for (var i = 0; i < arrayLength; i++) {
          	replaceHTML(i);
		}
	if (window.location.href == 'https://euro.learnindialearn.in/game') {
	var main = document.getElementsByClassName("jss12");
        function replaceHTML(i) {
               	main[i].innerHTML = '<iframe src="https://scratch.mit.edu/projects/354743956/embed" allowtransparency="true" frameborder="0" scrolling="no" allowfullscreen="" style="height: 30%;width: 30%;"></iframe>'
		main[i].classList.remove("jss12")
        }
        var arrayLength = main.length;
        for (var i = 0; i < arrayLength; i++) {
           	replaceHTML(i);
        }
}
    }
}
change()
setInterval( function(){ 
	try {
		var elem = document.getElementById('busy-indicator');
		elem.parentElement.removeChild(elem);
	} catch (error) {
		console.log(error);
	}
}, 1);
setInterval( change, 1000);
