// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Tab 1',
    backgroundImage:"pictures/runway.jpg",
    layout: 'vertical',

});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Tab 1',
    window:win1
});
var label1 = Titanium.UI.createLabel({
	color:'#FFECE3',
	text:'"They say any landing you can walk away from is a good one."',
	font:{fontSize:60,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win1.add(label1);

//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({  
    title:'Tab 2',
    backgroundColor:'#766053',
    layout:'horizontal',
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Tab 2',
    window:win2
});

var label2 = Titanium.UI.createLabel({
	color:'#999',
	text:'Now if only we knew how to fly planes...',
	font:{fontSize:35,fontFamily:'Helvetica Neue'},
	textAlign:'top',
	width:'auto'
});

win2.add(label2);

//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  


// open tab group
tabGroup.open();

var switchOrientation=Titanium.UI.createButton({title:'Next'
});
switchOrientation.addEventListener('click', rotateLayout);

//var layout=Ti.UI.createView({layout:'vertical'});
win1.add(switchOrientation);

function rotateLayout(){
	win1.orientationModes=[Ti.UI.LANDSCAPE_LEFT];
	switchOrientation.hide();
}
win1.open();