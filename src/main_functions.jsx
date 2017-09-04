#include "library/myModalWindows.jsx";
var gimmePath = "C:\\Users\\AslanZubairaev\\Documents\\myProject\\QuickPanel\\src\\library\\addScripts\\rd_GimmePropPath.jsx";

﻿var EffectsNames = {
	'noise': 'ADBE Noise',
	'hue': 'ADBE HUE SATURATION',
    'tint': 'ADBE Tint',
    'flares': 'VIDEOCOPILOT OpticalFlares',
    'saber': 'VIDEOCOPILOT LightSaber',
    'clb': 'ADBE Camera Lens Blur',
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
var date = new Date();

function addZeros(n, needLength) {
  needLength = needLength || 2;
  n = String(n);
  while (n.length < needLength) {
    n = "0" + n;
  }
  return n;
};

var dateMarker = date.getDate()+'.'+addZeros(date.getMonth(), 2)+'.'+date.getFullYear();

#include "main_res.jsx"; // Resurce UI hyper text
#include "expressions.jsx";
#include "library/myModalWindows.jsx";

// == Служебные Функции =====================================================================================

function writeString(_string){
	writeLn(_string.name + ' Добавлен');
};

function Add_AE(name, property) {
	this.name = name;
	this.property = property;
	this.create = function () {
		var comp = app.project.activeItem
		if (comp != null && comp instanceof CompItem) {
			app.beginUndoGroup("Отмена: Создать Element 3D");
			var solid = comp.layers.addSolid([1,1,1], name, 1920, 1080, 1, 30);
			//var effectsGroup = app.project.activeItem.selectedLayers;
			solid.Effects.addProperty(property);
			app.endUndoGroup();
		}  else {
			newCompPrompt();
		};
	};
};

function Add_SE(name, property, bool) {
	this.name = name;
	this.property = property;
	this.create = function (){
		var comp = app.project.activeItem
		if (comp != null && comp instanceof CompItem) {
			app.beginUndoGroup("Отмена последнего действия");
				var solid = app.project.activeItem.layers.addSolid([1,1,1], name, 1920, 1080, 1, 30);
				solid.adjustmentLayer = bool;
				solid.Effects.addProperty(property);
			app.endUndoGroup();
		}else{
			newCompPrompt();
		};
	};
};

function Lounch_Script(_path) {
	this._path = _path;
	this.create = function (){
			app.beginUndoGroup("Отмена последнего действия");
				eval(_path);
			app.endUndoGroup();
	};
};

function Add_SE_on_AL(property){
	this.property = property;
	this.create = function (){
		var comp = app.project.activeItem;
		if (comp != null && comp instanceof CompItem) {
            var layers = app.project.activeItem.selectedLayers;
		    app.beginUndoGroup("Отмена последнего действия");
                for (var i = 0; i < layers.length; i++) {
                    layers[i].Effects.addProperty(property);
                };
		    app.endUndoGroup();
		    //app.executeCommand(2163);
		} else {
			newCompPrompt();
		};
	};
};

function newCompPrompt(){
	var x = xConfirm("В проекте нет композиции...",'Хотите создать Новую Композицию?');
	if (x) {
		newcomp();
	};
};

function SetExpression(exp) {
	this.create = function myFunc (){
		var comp = app.project.activeItem;
		var layers = app.project.activeItem.selectedLayers;
		var Property;
		if (layers){
		    app.beginUndoGroup("Отмена Wiggle выражения");
		    try{
			    var prop = comp.selectedLayers[0].selectedProperties;
			    var properties = [];
			    for (i = 0; i < prop.length; i++){
			          properties.push(prop[i]);
			          properties[i].expression = exp;
			    };
			} catch(err){};
		    app.endUndoGroup();
		};
	}
};

function findCompByName (_name){
	for(var i = 1; i <= app.project.numItems; i++){
		if (app.project.item(i).name == _name && app.project.item(i) instanceof FolderItem) {
			return app.project.item(i);
		};
	};
};

function checking_and_createFolder(_folder_name){
    var pictureFolder = findCompByName (_folder_name);
    if(pictureFolder == undefined){
         var pictureFolder = app.project.items.addFolder(_folder_name);
    };
    return pictureFolder;
};

function notPlugin(){
	xAlert("Эффект не установлен");
};

// == Large Function ===============================================================================

function get_shots() {

	var importOpt, fileName, extPrep, ext, newFile;

	localFolder = new Folder("~/Documents/User Snapshots");
	grabFiles = localFolder.getFiles();
	grabFilesLength = grabFiles.length;

	var snapshots = findCompByName ("Snapshots");

	if(snapshots == undefined){
	     var snapshots = app.project.items.addFolder("Snapshots");
	};

	for (var i = snapshots.numItems; i > 0; i --) {
	 snapshots.item(i).remove();
	};

	for(var i=0; i<grabFilesLength; i++){
		fileName = grabFiles[i].displayName;
		extPrep = fileName.split(".");
		ext = extPrep[extPrep.length-1].toLowerCase();
		if(ext == "png" || ext == "PNG"){
			writeLn(fileName);
	     importOpt = new ImportOptions(grabFiles[i]);
	     newFile = app.project.importFile(importOpt);
	     newFile.parentFolder = snapshots;
		};
	};

};

// == Функции Кнопок ========================================================================================

function openproject(){
	app.executeCommand(3);
};

function import_footage(){
	var myProj = app.project;
    var myComp = myProj.activeItem;
	var arr = File.openDialog("Выбрать файлы...",'*.*', true);
	for(var i=0; i<=arr.length-1; i++){
        fileName = arr[i].displayName;
        extPrep = fileName.split(".");
        ext = extPrep[extPrep.length-1].toLowerCase();
        $.writeln(ext);
        if(ext == "png" || ext == "PNG" || ext == "jpeg" || ext == "jpg" || ext == "tga" || ext == "exr"){
             importOpt_p = new ImportOptions(arr[i]);
             newFile = app.project.importFile(importOpt_p);
             var p_folder = checking_and_createFolder('Pictures')
             newFile.parentFolder = p_folder;
		} else if (ext == "obj"){
             mportOpt_obj = new ImportOptions(arr[i]);
             newFile = app.project.importFile(mportOpt_obj);
             var p_folder = checking_and_createFolder('OBJ')
             newFile.parentFolder = p_folder;
         } else if (ext == "ai"){
             mportOpt_ai = new ImportOptions(arr[i]);
             newFile = app.project.importFile(mportOpt_ai);
             var p_folder = checking_and_createFolder('AI');
             newFile.parentFolder = p_folder;
         } else if (ext == "psd"){
             mportOpt_psd = new ImportOptions(arr[i]);
             newFile = app.project.importFile(mportOpt_psd);
             var p_folder = checking_and_createFolder('PSD')
             newFile.parentFolder = p_folder;
         } else if (ext == "mov" || ext == "mpeg" || ext == "mp4" || ext == "h.264"){
             mportOpt_video = new ImportOptions(arr[i]);
             newFile = app.project.importFile(mportOpt_video);
             var p_folder = checking_and_createFolder('Video')
             newFile.parentFolder = p_folder;
         } else if (ext == "mp3" || ext == "wav"){
             mportOpt_audio = new ImportOptions(arr[i]);
             newFile = app.project.importFile(mportOpt_audio);
             var p_folder = checking_and_createFolder('Audio')
             newFile.parentFolder = p_folder;
         };
	};
};

function newproject(){
	var project = app.newProject();
	var q = xConfirm('Создание нового проекта...','Вы хотите сохранить проект?');
	if (q) {
		project.save();
	};
};

function newcomp(){
	var folder = checking_and_createFolder('!_COMPS');

	function newcomp(){
		var comp = app.project.items.addComp("Main_Comp",1920,1080,1,30,25);
		comp.openInViewer();
	    comp.parentFolder = folder;
	};

	newcomp();
};

function newSolid() {
	var activeComp = app.project.activeItem;
	var solid = activeComp.layers.addSolid([1,1,1], "Solid", activeComp.width, activeComp.height, 1, 30);
	writeString(solid);
};

function newAdjustment() {
	var adjustment = app.project.activeItem.layers.addSolid([1,1,1], "Adjustment Layer", 1920, 1080, 1, 30);
	adjustment.adjustmentLayer = true;
	writeString(adjustment);
};

function newNull() {
	var comp = app.project.activeItem;
    duration = comp.duration;
    var layers = app.project.activeItem.selectedLayers;
	var nullLayer = comp.layers.addNull(duration);
	if (layers){
	    for (var i = 0; i < layers.length; i++) {
	   		layers[i].parent = nullLayer;
		};
	};
	writeString(nullLayer);
};

function newcamera() {
	var comp = app.project.activeItem;
	var cameraLayer = comp.layers.addCamera("Camera", [comp.width/2, comp.height/2]);
	writeLn('Камера Добавлена');
};

function newtext(_text) {
	var text = app.project.activeItem.layers.addText('');
	text.active = true;
	writeString(text);
};

function snapShot(){
    var myProj = app.project;
    var myComp = myProj.activeItem;
    if (myComp) {
        var theLocation;
        var folder = new Folder('~/Documents/User Snapshots');
        if (!folder.exists){folder.create()};
        var fileName = myComp.name + '_' + dateMarker;
        theLocation = File('~/Documents/User Snapshots/'+fileName+'.png');
        if (theLocation.exists){
            var fname = xPrompt ("Создание скриншота...","Введите имя файла...");
            var fn = fname + '_' + dateMarker;
            theLocation = File('~/Documents/User Snapshots/'+fn+'.png');
        };
        if(myComp instanceof CompItem){
            myComp.saveFrameToPng(myComp.time, theLocation);
        };
        var snapshotsFolder = checking_and_createFolder('Snapshots');

        var importOptions = new ImportOptions(theLocation);
        var shotFile = myProj.importFile (importOptions);
        shotFile.parentFolder = snapshotsFolder;
    } else {
        xAlert('Нет активной композиции...');
    };
};

function openSnapshotsFolder (){
	var path = '~/Documents/User Snapshots';
	var folder = Folder(path);
	if (folder.exists) {
		folder.execute();
	};
};

// == Функции Field Text ========================================================================

function addEffects(){
	this.create = function () {
		var field = myPanel.grp_footer.buttonGroup.footerGroup.myEditText.text;
		var matchName = EffectsNames.field;
		alert(matchName);
		for (var key in EffectsNames) {
			if(field == key){
				var comp = app.project.activeItem;
				if (comp != null && comp instanceof CompItem) {
		            var layers = app.project.activeItem.selectedLayers;
				    app.beginUndoGroup("Отмена последнего действия");
		                for (var i = 0; i < layers.length; i++) {
		                    layers[i].Effects.addProperty(matchName);
		                };
				    app.endUndoGroup();
				    myPanel.grp_footer.buttonGroup.footerGroup.myEditText.text = '';
				};
	    	};
		}

	};
};


// == Effects ===================================================================================

var addLevel = new Add_SE_on_AL("ADBE Easy Levels2");

var addTint = new Add_SE_on_AL("ADBE Tint");

var addHueSaturation = new Add_SE_on_AL("ADBE HUE SATURATION");

var addBrightnessContrast = new Add_SE_on_AL("ADBE Brightness & Contrast 2");

var addColorBalance = new Add_SE_on_AL("ADBE Color Balance 2");

var addFractalNoise = new Add_SE_on_AL("ADBE Fractal Noise");

var addRepetile = new Add_SE_on_AL("CC RepeTile");

var addSimpleShoker = new Add_SE_on_AL("ADBE Simple Choker");

var addGradientRamp = new Add_SE_on_AL("ADBE Ramp");

var addGrid = new Add_SE_on_AL("ADBE Grid");

var addMosaic = new Add_SE_on_AL("ADBE Mosaic");

var addCameraBlur = new Add_SE_on_AL("ADBE Camera Lens Blur");

var glow = new Add_SE_on_AL("ADBE Glo2");

var addDropShadow = new Add_SE_on_AL("ADBE Drop Shadow");

var addOpticalFlares = new Add_SE_on_AL("VIDEOCOPILOT OpticalFlares");

var add3DStroke = new Add_SE_on_AL("tc 3DStrokePath");

var addShine = new Add_SE_on_AL("tc Shine");

var addSharpen = new Add_SE_on_AL("ADBE Sharpen");

var addNoise = new Add_SE_on_AL("ADBE Noise");

var addCurves = new Add_SE_on_AL("ADBE CurvesCustom");

var addToner = new Add_SE_on_AL("CC Toner");

var addFill = new Add_SE_on_AL("ADBE Fill");

var addFastBlur = new Add_SE_on_AL("ADBE Fast Blur");

var addInvert = new Add_SE_on_AL("ADBE Invert");

var addFindEdges = new Add_SE_on_AL("ADBE Find Edges");

var addUnsharpMask = new Add_SE_on_AL('ADBE Unsharp Mask2')

var addElement = new Add_AE("Element", "VIDEOCOPILOT 3DArray", false);

var addOpticalFlares = new Add_AE("Optical Flares", "VIDEOCOPILOT OpticalFlares", false);

var addParticular = new Add_AE("Particular","tc Particular", false);

var addForm = new Add_AE("Form","tc Form",false);

var addLooks = new Add_SE_on_AL("ADBE Glo2-0003");



// == Scripts Functions ===========================================================================

function runScript()
		{
			var scriptFile = new File(gimmePath);
			scriptFile.open();
			eval(scriptFile.read());
			scriptFile.close();
		}

// == Settings Functions ===========================================================================

function cs(){
	app.executeCommand(2007);
};

function ss(){
	app.executeCommand(2021);
};

function cams(){
	app.executeCommand(app.findMenuCommandId("Camera Settings..."));
};

function render(){
	app.executeCommand(2161);
};

// == System Function ==============================================================================

function cleanCache(){
	app.executeCommand(10200);
};

function fitToWith(){
	app.executeCommand(2732);
};

function fitToHeight(){
	app.executeCommand(2733);
};

function enable_time_remapping(){
	app.executeCommand(2153);
};


// == Expression ===================================================================================

var setWiggle = new SetExpression(wiggle_exp);
var setBounce = new SetExpression(bounce_exp);









// Песочница ======================================================================================
