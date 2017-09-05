function scriptListRunner (){
	var dirPath = new Folder ("C:\\Program Files\\Adobe\\Adobe After Effects CC 2015.3\\Support Files\\Scripts");
	var scriptList = dirPath.getFiles('*.jsx');

	function runScript(_path)
			{
				var scriptFile = new File(_path);
				scriptFile.open();
				eval(scriptFile.read());
				scriptFile.close();
			}

	var Node = function (name) {
	    this.children = [];
	    this.name = name;
	}

	Node.prototype = {
	    add: function (child) {
	        this.children.push(child);
	    },
	    remove: function (child) {
	        var length = this.children.length;
	        for (var i = 0; i < length; i++) {
	            if (this.children[i] === child) {
	                this.children.splice(i, 1);
	                return;
	            }
	        }
	    },
	    getChild: function (i) {
	        return this.children[i];
	    },
	    hasChildren: function () {
	        return this.children.length > 0;
	    }
	}

	function ST(_parrent, _text){
	        this.text = _text;
	        var st = _parrent.add("statictext",undefined,this.text);
	};

	function ET(_parrent, _et_Text){
	        this.etText = _et_Text;
	        var et = _parrent.add("edittext",undefined,this.etText);
	        et.characters = 20;
	};

	function BTN(_parrent, _label, handler){
	        var btn = _parrent.add("button",undefined, _label);
	        this.button = btn;
	        btn.size = [350,23];
	};

	BTN.prototype = {
	        event: function (_line) {
	           this.button.onClick = function(){runScript(_line)}
	        }
	};

	function LineStrokeComponent (_parrent, _st_text, _et_text, _btn_label){
	        this.parrent = _parrent;
	        this.st_text = _st_text
	        this.et_text = _et_text
	        this.btn_label = _btn_label
	        var g = this.parrent.add("group");

	        var st = new ST(g, this.st_text);
	        //var et = new ET (g, this.et_text);
	        var btn = new BTN (g, this.btn_label);
	        this.but = btn;
	};

	var node_element = []


	var w = new Window ("palette");

	var g = w.add("group", undefined, "main group");
	g.orientation = "column";

	for(var i = 0; i <=scriptList.length-1; i++) {
	    var n = new LineStrokeComponent(g,"","", scriptList[i].displayName);
	    n.but.event(scriptList[i].absoluteURI);
	    node_element[i] = new Node(scriptList[i].displayName);
	}

	w.show()
};
