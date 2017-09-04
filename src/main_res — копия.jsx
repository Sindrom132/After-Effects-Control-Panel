res = "group{orientation:'column', alignment:['fill', 'fill'], alignChildren:['fill', 'fill'],\
        buttonGroup: Group{\
            orientation:'column', alignment:['fill', 'top'], alignChildren:['fill', 'top'],\
            projectGroup: Group{\
                text: 'Project Control', orientation: 'row',\
                np_button: Button{text:'New Project', alignment:['fill','center']},\
                op_button: Button{text:'Open Project', alignment:['fill','center']},\
                ip_button: Button{text:'Import', alignment:['fill','center']},\
            },\
            separator: Group{\
                alignment:['fill', 'fill'], alignChildren:['fill', 'fill'],\
                s_panel: Panel{size: ['','']},\
            },\
            compositionGroup: Group{\
                text: 'Composition Control', orientation: 'row',\
                nc_button: Button{text:'New Composition', alignment:['fill','center'], size: ['100','25']},\
            },\
            separator: Group{\
                alignment:['fill', 'fill'], alignChildren:['fill', 'fill'],\
                s_panel: Panel{size: ['','']},\
            },\
            solidGroup: Panel{\
                text: 'Layers Controls', orientation: 'column', alignment:['fill', 'fill'], alignChildren:['fill', 'fill'],\
                solidGroup_1: Group{\
                    orientation: 'row',\
                    ns_button: Button{text:'Solid', alignment:['fill','center']},\
                    ajmt_button: Button{text:'Adjustment layer', alignment:['fill','center']},\
                },\
                solidGroup_2: Group{\
                    orientation: 'row',\
                    null_button: Button{text:'Null layer', alignment:['fill','center']},\
                    ncamera_button: Button{text:'Camera', alignment:['fill','center']},\
                    text_button: Button{text:'Text', alignment:['fill','center']},\
                },\
            },\
            effectsGroup: Group{\
                text: 'Effects', orientation: 'column', alignment:['fill', 'fill'], alignChildren:['fill', 'fill'],\
                sEffectsGroup: Panel{\
                  text: 'Prodaction', orientation: 'row',\
                    orientation: 'column', alignment:['fill', 'fill'], alignChildren:['fill', 'fill'],\
                    LCTF: Group{\
                        orientation: 'row', alignment:['fill', 'fill'], alignChildren:['fill', 'fill'],\
                        levels_button: Button{text:'Levels', alignment:['fill','center']},\
                        curves_button: Button{text:'Curves', alignment:['fill','center']},\
                        toner_button: Button{text:'Toner', alignment:['fill','center']},\
                        tint_button: Button{text:'Tint', alignment:['fill','center']},\
                    },\
                    FHBC: Group{\
                        fill_button: Button{text:'Fill', alignment:['fill','center']},\
                        hue_button: Button{text:'Hue/Saturation', alignment:['fill','center']},\
                        brightnes_button: Button{text:'Bright/Contrast', alignment:['fill','center']},\
                        color_b_button: Button{text:'Color Balance', alignment:['fill','center']},\
                    },\
                    IFRS: Group{\
                        invert_button: Button{text:'Invert', alignment:['fill','center']},\
                        fractal_n_button: Button{text:'Fractal Noise', alignment:['fill','center']},\
                        repetile_button: Button{text:'CC Repetile', alignment:['fill','center']},\
                        shoker_button: Button{text:'Simple Shoker', alignment:['fill','center']},\
                    },\
                    GGFM: Group{\
                        gradient_button: Button{text:'Grasient Ramp', alignment:['fill','center']},\
                        Grid_button: Button{text:'Grid', alignment:['fill','center']},\
                        findEdge_button: Button{text:'Finde Edge', alignment:['fill','center']},\
                        mosaic_button: Button{text:'Mosaic', alignment:['fill','center']},\
                    },\
                    FLGD: Group{\
                        fastBlur_button: Button{text:'Fast Blur', alignment:['fill','center']},\
                        LensBlur_button: Button{text:'Camera Blur', alignment:['fill','center']},\
                        glow_button: Button{text:'Glow', alignment:['fill','center']},\
                        dropShadow_button: Button{text:'Drop Shadow', alignment:['fill','center']},\
                    },\
                },\
                aEffectGroup: Panel{\
                  text: 'Generate', orientation: 'row',\
                    orientation: 'column', alignment:['fill', 'fill'], alignChildren:['fill', 'fill'],\
                    EO: Group{\
                      element_button: Button{text:'Element', alignment:['fill','center']},\
                      opticaFlares_button: Button{text:'Optical Flares', alignment:['fill','center']},\
                    },\
                    PFTS: Group{\
                        particular_button: Button{text:'Particular', alignment:['fill','center']},\
                        form_button: Button{text:'Form', alignment:['fill','center']},\
                        strokeTrid_button: Button{text:'3D Stroke', alignment:['fill','center']},\
                        Shine_button: Button{text:'Shine', alignment:['fill','center']},\
                    },\
                },\
                USNC: Panel{\
                  text: 'Finalize', orientation: 'row',\
                    unsharpMask_button: Button{text:'Unsharp Mask', alignment:['fill','center']},\
                    sharpen_button: Button{text:'Sharpen', alignment:['fill','center']},\
                    noise_button: Button{text:'Noise', alignment:['fill','center']},\
                    chroma_button: Button{text:'Chroma', alignment:['fill','center']},\
                },\
            },\
            expressionGroup: Panel{\
                text: 'Expressions', orientation: 'row',\
                wiggle_button: Button{text:'Wiggle', alignment:['fill','center']},\
                bounce_button: Button{text:'Bounce', alignment:['fill','center']},\
            },\
            scriptsGroup: Panel{\
                text: 'Scripts', orientation: 'row',\
                gimme_button: Button{text:'Gimme Prop Path', alignment:['fill','center']},\
                empty_button: Button{text:'empty', alignment:['fill','center']},\
            },\
            systemGroup: Panel{\
                text: 'Settings', orientation: 'row',\
                time_Remapping_button: Button{text:'Time Remapping', alignment:['fill','center']},\
                fitToWith_button: Button{text:'Fit To Width', alignment:['fill','center']},\
                fitToHeight_button: Button{text:'Fit To Height', alignment:['fill','center']},\
                purgeAllMemoryCache_button: Button{text:'Clean Cache', alignment:['fill','center']},\
            },\
            separator: Group{\
                alignment:['fill', 'fill'], alignChildren:['fill', 'fill'],\
                s_panel: Panel{size: ['','']},\
            },\
            footerGroup: Group{\
                orientation:'column', alignment:['fill', 'bottom'], alignChildren:['fill', 'bottom'],\
	                snapShotGroup: Group{\
	                	orientation: 'row', alignment:['fill', 'bottom'], alignChildren:['fill', 'bottom'],\
	                	schot_button: Button{text:'Snapshot', alignment:['fill','center'], size: ['100','25']},\
	                	shots_folder_button: Button{text:'Snapshots Folder', alignment:['fill','center'], size: ['0','25']},\
	                },\
                myEditText: EditText{text:'', size: ['','20'], alignment: ['fill', 'bottom']},\
            },\
            settigsGroup: Group{\
                text: 'Settings', orientation: 'column', alignment:['fill', 'bottom'], alignChildren:['fill', 'bottom']\
                orientation: 'row',\
                ncSettings_button: Button{text:'Comp Settings', alignment:['fill','center']},\
                nsSettings_button: Button{text:'Layer Settins', alignment:['fill','center']},\
                cSettings_button: Button{text:'Cam Settings', alignment:['fill','center']},\
                addToRender_button: Button{text:'Render', alignment:['fill','center']},\
            },\
        },\
}"
