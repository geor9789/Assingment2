// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Home',
    backgroundImage: 'Pictures/SkiBackground.jpg'
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Tab 1',
    window:win1
});

var label1 = Titanium.UI.createLabel({
	color:'#FFFFFF',
	text:'Get You Lift Tickets Here!',
	font:{fontSize:30,fontStyle:'Calibri'},
	textAlign:'center',
	width:'auto',
	top: 10
});

win1.add(label1);


var win2 = Titanium.UI.createWindow({  
    title:'Info',
    backgroundColor:'#70AAFF'
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Tab 2',
    window:win2
});

var label2 = Titanium.UI.createLabel({
	color:'#FFFFFF',
	text:'More Info Here:',
	font:{fontSize:30,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto',
	top: 20
});

win2.add(label2);

var switchOrientation = Ti.UI.createButton({
	title: 'Make Landscape',
	Bottom: 10,
	right: 10
});
switchOrientation.addEventListener('click', rotateLayout);
win1.add(switchOrientation);

function rotateLayout(){
	win1.orientation = 'horizontal';
	switchOrientation.hide();
}

var NextButton = Ti.UI.createButton({
	title: 'Switch',
	Bottom: 5,
	left: 5
});
NextButton.addEventListener('click', switchpages);
win1.add(NextButton);

function switchpages(){
	win2.open();
}

var switchButton = Ti.UI.createButton({
	title: 'Switch',
	Bottom: 5,
	left: 5
});
switchButton.addEventListener('click', switchBack);
win2.add(switchButton);

function switchBack(){
	win1.open();
	win2.close();
}
win1.open();
