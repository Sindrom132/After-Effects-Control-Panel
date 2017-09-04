// == Проверка папки сохранения скриншотов ===============================================================
function snapshots_folder(){
	var folder = new Folder('/c/Users/AslanZubairaev/Documents/User Snapshots');
	if (!folder.exists){folder.create()};
    var folder_Path = folder.path;
};
