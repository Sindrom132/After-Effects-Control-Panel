function scriptListRunner(){
	var dirPath = new Folder ("C:\\Program Files\\Adobe\\Adobe After Effects CC 2015.3\\Support Files\\Scripts");
	var scriptList = dirPath.getFiles('*.jsx');

  var inputText;
	var totalResult = [];

	function runScript(_name)
	    {
	        var scriptFile = new File(_name);
	        scriptFile.open();
	        eval(scriptFile.read());
	        scriptFile.close();
	    }

	var w = new Window ("dialog");

  var et = w.add("edittext",undefined, '');
  et.alignment = "fill";
  et.active = true;
  var but = w.add("button",undefined,"Ok");
  but.alignment = "fill";

  et.addEventListener("changing", smartSearch);

	var myList = w.add ("listbox");
	myList.size = [300,600]

function smartSearch (){

  et.onChanging = function (){

    for(var i = 0; i <=scriptList.length-1; i++) {
    inputText = et.text;
    var re = new RegExp(inputText, 'i');
    var result = scriptList[i].displayName.match(re);
    if(result != null) {
      var totalRes = myList.find (scriptList[i].displayName);
        myList.selection = totalRes
    }
  }
  };
};

    if(et.text == ""){
      for(var i = 0; i <=scriptList.length-1; i++) {
        myList.add("item", scriptList[i].displayName);
        totalResult.push(scriptList[i].absoluteURI);
      }
    } else {
      smartSearch;
    }

  but.onClick = function (){
    var p = myList.selection.index;
    var path = totalResult[p];
    runScript(path);
    w.hide();
  };

	w.show ();
};
