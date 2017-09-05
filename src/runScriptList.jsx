function scriptListRunner(){
	var dirPath = new Folder ("C:\\Program Files\\Adobe\\Adobe After Effects CC 2015.3\\Support Files\\Scripts");
	var scriptList = dirPath.getFiles('*.jsx');

	var totalResult = [];

	function runScript(_name)
	    {
	        var scriptFile = new File(_name);
	        scriptFile.open();
	        eval(scriptFile.read());
	        scriptFile.close();
	    }

	var w = new Window ("dialog");
	var myList = w.add ("listbox");
	myList.size = [200,600]

	for(var i = 0; i <=scriptList.length-1; i++) {
	    myList.add("item", scriptList[i].displayName);
	    totalResult.push(scriptList[i].absoluteURI);
	 }

	myList.onChange = function ()
	{
	    var p = myList.selection.index;
	    var path = totalResult[p];
	    runScript(path);
	    w.hide();
	}

	w.show ();
};
