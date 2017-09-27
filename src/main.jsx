{
   function myScript(thisObj) {

      function shiftState() {
                 var myKeyState = ScriptUI.environment.keyboardState;
                 if(myKeyState.shiftKey == true) {return 1;
                 } else {
                 return 0;
                 }
       };

      function ctrlState() {
                var myKeyState = ScriptUI.environment.keyboardState;
                if(myKeyState.ctrlKey == true) {return 1;
                } else {
                return 0;
                }
      };

      function myScript_buildUI(thisObj) {
                var myPanel = (thisObj instanceof Panel) ? thisObj : new Window("palette", "Panel Name", [0, 0, 300, 300]);

                #include "main_res.jsx"; // Resurce UI hyper text

                // Adds resource string to panel

                myPanel.grp = myPanel.add(res);
                myPanel.grp.buttonGroup.compositionGroup.nc_button.helpTip = "Hello World!";
                // DropDownList default selection

                // Assign function to UI elements

                #include "main_functions.jsx"; // All functions

                myPanel.grp.buttonGroup.projectGroup.np_button.onClick = newproject;
                myPanel.grp.buttonGroup.projectGroup.op_button.onClick = openproject;
                myPanel.grp.buttonGroup.projectGroup.ip_button.onClick = import_footage;

                myPanel.grp.buttonGroup.compositionGroup.nc_button.onClick = function(){
                                                                                        if(shiftState()==1){
                                                                                          cs();
                                                                                        } else {
                                                                                          if(ctrlState() == 1){
                                                                                            cs();
                                                                                        } else {
                                                                                          newcomp();
                                                                                        }
                                                                                      }
                                                                                    };

                myPanel.grp.buttonGroup.solidGroup.solidGroup_1.ns_button.onClick = function(){
                                                                                        if(shiftState()==1){
                                                                                          ss();
                                                                                        } else {
                                                                                          if(ctrlState() == 1){
                                                                                            alert("CTRL");
                                                                                        } else {
                                                                                          newSolid();
                                                                                        }
                                                                                      }
                                                                                    };

                myPanel.grp.buttonGroup.solidGroup.solidGroup_1.ajmt_button.onClick = function(){
                                                                                        if(shiftState()==1){
                                                                                          ss();
                                                                                        } else {
                                                                                          if(ctrlState() == 1){
                                                                                            alert("CTRL");
                                                                                        } else {
                                                                                          newAdjustment();
                                                                                        }
                                                                                      }
                                                                                    };
                myPanel.grp.buttonGroup.solidGroup.solidGroup_2.null_button.onClick = newNull;
                myPanel.grp.buttonGroup.solidGroup.solidGroup_2.ncamera_button.onClick = function(){
                                                                                        if(shiftState()==1){
                                                                                          ss();
                                                                                        } else {
                                                                                          if(ctrlState() == 1){
                                                                                            alert("CTRL");
                                                                                        } else {
                                                                                          newcamera();
                                                                                        }
                                                                                      }
                                                                                    };;
                myPanel.grp.buttonGroup.solidGroup.solidGroup_2.text_button.onClick = newtext;


                myPanel.grp.buttonGroup.footerGroup.snapShotGroup.schot_button.onClick = snapShot;
                myPanel.grp.buttonGroup.footerGroup.snapShotGroup.shots_folder_button.onClick = openSnapshotsFolder;

                myPanel.grp.buttonGroup.effectsGroup.sEffectsGroup.LCTF.levels_button.onClick = addLevel.create;
                myPanel.grp.buttonGroup.effectsGroup.sEffectsGroup.LCTF.curves_button.onClick = addCurves.create;
                myPanel.grp.buttonGroup.effectsGroup.sEffectsGroup.LCTF.toner_button.onClick = addToner.create;
                myPanel.grp.buttonGroup.effectsGroup.sEffectsGroup.LCTF.tint_button.onClick = addTint.create;

                myPanel.grp.buttonGroup.effectsGroup.sEffectsGroup.FHBC.fill_button.onClick = addFill.create;
                myPanel.grp.buttonGroup.effectsGroup.sEffectsGroup.FHBC.hue_button.onClick = addHueSaturation.create;
                myPanel.grp.buttonGroup.effectsGroup.sEffectsGroup.FHBC.brightnes_button.onClick = addBrightnessContrast.create;
                myPanel.grp.buttonGroup.effectsGroup.sEffectsGroup.FHBC.color_b_button.onClick = addColorBalance.create;

                myPanel.grp.buttonGroup.effectsGroup.sEffectsGroup.IFRS.invert_button.onClick = addInvert.create;
                myPanel.grp.buttonGroup.effectsGroup.sEffectsGroup.IFRS.fractal_n_button.onClick = addFractalNoise.create;
                myPanel.grp.buttonGroup.effectsGroup.sEffectsGroup.IFRS.repetile_button.onClick = addRepetile.create;
                myPanel.grp.buttonGroup.effectsGroup.sEffectsGroup.IFRS.shoker_button.onClick = addSimpleShoker.create;

                myPanel.grp.buttonGroup.effectsGroup.sEffectsGroup.GGFM.gradient_button.onClick = addGradientRamp.create;
                myPanel.grp.buttonGroup.effectsGroup.sEffectsGroup.GGFM.Grid_button.onClick = addGrid.create;
                myPanel.grp.buttonGroup.effectsGroup.sEffectsGroup.GGFM.findEdge_button.onClick = addFindEdges.create;
                myPanel.grp.buttonGroup.effectsGroup.sEffectsGroup.GGFM.mosaic_button.onClick = addMosaic.create;

                myPanel.grp.buttonGroup.effectsGroup.sEffectsGroup.FLGD.fastBlur_button.onClick = addFastBlur.create;
                myPanel.grp.buttonGroup.effectsGroup.sEffectsGroup.FLGD.LensBlur_button.onClick = addCameraBlur.create;
                myPanel.grp.buttonGroup.effectsGroup.sEffectsGroup.FLGD.glow_button.onClick = glow.create;
                myPanel.grp.buttonGroup.effectsGroup.sEffectsGroup.FLGD.dropShadow_button.onClick = addDropShadow.create;
                myPanel.grp.buttonGroup.effectsGroup.aEffectGroup.EO.element_button.onClick = function(){
                                                                                                if(addElement.name === "Element") {
                                                                                                    var sel_layer = app.project.activeItem.selectedLayers;
                                                                                                    var sel_index = sel_layer[0].index + 1
                                                                                                    addElement.create();
                                                                                                    addElement.effect.property("VIDEOCOPILOT 3DArray-1802").setValue(sel_index);
                                                                                                    sel_layer[0].enabled =  false;
                                                                                                }
                                                                                              };
                myPanel.grp.buttonGroup.effectsGroup.aEffectGroup.EO.opticaFlares_button.onClick = addOpticalFlares.create;

                myPanel.grp.buttonGroup.effectsGroup.aEffectGroup.PFTS.particular_button.onClick = addParticular.create;
                myPanel.grp.buttonGroup.effectsGroup.aEffectGroup.PFTS.form_button.onClick = addForm.create;
                myPanel.grp.buttonGroup.effectsGroup.aEffectGroup.PFTS.strokeTrid_button.onClick = add3DStroke.create;
                myPanel.grp.buttonGroup.effectsGroup.aEffectGroup.PFTS.Shine_button.onClick = addShine.create;

                myPanel.grp.buttonGroup.effectsGroup.USNC.unsharpMask_button.onClick = addUnsharpMask.create;
                myPanel.grp.buttonGroup.effectsGroup.USNC.sharpen_button.onClick = addSharpen.create;
                myPanel.grp.buttonGroup.effectsGroup.USNC.noise_button.onClick = addNoise.create;
                myPanel.grp.buttonGroup.effectsGroup.USNC.chroma_button.onClick = notPlugin.create;


                myPanel.grp.buttonGroup.expressionGroup.wiggle_button.onClick = setWiggle.create;
                myPanel.grp.buttonGroup.expressionGroup.bounce_button.onClick = setBounce.create;

                myPanel.grp.buttonGroup.scriptsGroup.gimme_button.onClick = gimme.runScript;
                myPanel.grp.buttonGroup.scriptsGroup.scriptList_button.onClick = runScript;
                //myPanel.grp.buttonGroup.scriptsGroup.gimme_button.onClick =

                myPanel.grp.buttonGroup.settigsGroup.nsSettings_button.onClick = ss;
                myPanel.grp.buttonGroup.settigsGroup.ncSettings_button.onClick = cs;
                myPanel.grp.buttonGroup.settigsGroup.cSettings_button.onClick = cams;
                myPanel.grp.buttonGroup.settigsGroup.addToRender_button.onClick = render;

                myPanel.grp.buttonGroup.systemGroup.time_Remapping_button.onClick = enable_time_remapping;
                myPanel.grp.buttonGroup.systemGroup.fitToWith_button.onClick = fitToWith;
                myPanel.grp.buttonGroup.systemGroup.fitToHeight_button.onClick = fitToHeight;
                myPanel.grp.buttonGroup.systemGroup.purgeAllMemoryCache_button.onClick = cleanCache;

                //myPanel.grp.buttonGroup.footerGroup.myEditText.onChanging = addEffects.create;






                // Setup panel sizing and make panel resizable
                myPanel.layout.layout(true);
                myPanel.grp.minimumSize = myPanel.grp.size;
                myPanel.layout.resize();
                myPanel.onResizing = myPanel.onResize = function () {this.layout.resize();}

                return myPanel;
      }

      // Build script panel
      var myScriptPal = myScript_buildUI(thisObj);

      if ((myScriptPal != null) && (myScriptPal instanceof Window)) {
          myScriptPal.center();
          myScriptPal.show();
       }
   }

   // Execute script
   myScript(this);
}
