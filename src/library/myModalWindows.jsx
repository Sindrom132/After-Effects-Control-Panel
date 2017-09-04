function xPrompt (_action,_text){
	var w = new Window("dialog", _action, undefined, {closeButton: false});
    w.size = ['400','100'];
		var g = w.add("group");
		g.orientation = "column";
        g.alignment = ["fill",""];
        g.alignChildren = ["center",""];
	        var st = g.add("staticText",undefined, _text);
	        var et = g.add("editText",undefined,"");
            //et.alignment = ["fill",""];
	        et.characters = 50;
	        et.active = true;
	        var okButton = g.add("button",undefined,"Ok");
	w.show();
	return et.text;
};

function xConfirm (_action,_text){
    var bool;
	var w = new Window("dialog", _action, undefined, {closeButton: false});
    w.size = ['400','100'];
		var g = w.add("group");
		g.orientation = "column";
        g.alignment = ["fill",""];
        g.alignChildren = ["center",""];
	        var st = g.add("staticText",undefined, _text);
	        var gb = w.add("group",undefined,"");
		        var okButton = gb.add("button",undefined,"Да", {name: "Ok"});
		        var cancelButton = gb.add("button",undefined,"Нет", {name: "Cancel"});
                okButton.onClick= function(){bool = true; w.close()};
                cancelButton.onClick = function(){bool = false; w.close()};
	w.show();
    return bool;
};

function xAlert (_text){
	var w = new Window("dialog", "Предупреждение!", undefined, {closeButton: false});
    w.size = ['400','100'];
        var g = w.add("group");
        g.alignment = ["fill",""];
        g.alignChildren = ["center",""];
	        var st = g.add("staticText",undefined, _text);
            st.alignvent = ["fill","fill"];
	        var gb = w.add("group",undefined,"");
		    var okButton = gb.add("button",undefined,"Ok");
	w.show();
};
