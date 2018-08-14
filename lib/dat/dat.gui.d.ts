// Type definitions for lib/dat/dat.gui.js
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped
declare namespace dat.color.Color{
	// dat.color.Color.recalculateRGB.!
	
	/**
	 * 
	 */
	interface RecalculateRGB {
				
		/**
		 * 
		 * @return  
		 */
		get(): /* !this.__state.<i> */ any;
				
		/**
		 * 
		 * @param v 
		 */
		set(v : any): void;
	}
}
declare namespace dat.color.Color{
	// dat.color.Color.recalculateRGB.!1
	type RecalculateRGB1 = string;
}
declare namespace dat.color.Color{
	// dat.color.Color.recalculateRGB.!2
	type RecalculateRGB2 = number;
}
declare namespace dat.color.Color{
	// dat.color.Color.recalculateHSV.!
	
	/**
	 * 
	 */
	interface RecalculateHSV {
				
		/**
		 * 
		 * @return  
		 */
		get(): /* !this.__state.<i> */ any;
				
		/**
		 * 
		 * @param v 
		 */
		set(v : any): void;
	}
}
declare namespace dat.color.Color{
	// dat.color.Color.COMPONENTS.<i>
	type COMPONENTSI = string;
}
declare namespace dat.color.math{
	// dat.color.math.hsv_to_rgb.!ret
	
	/**
	 * 
	 */
	interface Hsv_to_rgbRet {
				
		/**
		 * 
		 */
		r : number;
				
		/**
		 * 
		 */
		g : number;
				
		/**
		 * 
		 */
		b : number;
	}
}
declare namespace dat.color.math{
	// dat.color.math.rgb_to_hsv.!
	type Rgb_to_hsv = number;
}
declare namespace dat.color.math{
	// dat.color.math.rgb_to_hsv.!1
	type Rgb_to_hsv1 = number;
}
declare namespace dat.color.math{
	// dat.color.math.rgb_to_hsv.!ret
	
	/**
	 * 
	 */
	interface Rgb_to_hsvRet {
				
		/**
		 * 
		 */
		h : number;
				
		/**
		 * 
		 */
		s : number;
				
		/**
		 * 
		 */
		v : number;
	}
}
declare namespace dat.color.math{
	// dat.color.math.rgb_to_hex.!ret
	type Rgb_to_hexRet = number;
}
declare namespace dat.color.math{
	// dat.color.math.component_from_hex.!1
	type Component_from_hex1 = number;
}
declare namespace dat.color.math{
	// dat.color.math.component_from_hex.!ret
	type Component_from_hexRet = number;
}
declare namespace dat.color.math{
	// dat.color.math.hex_with_component.!
	type Hex_with_component = number;
}
declare namespace dat.color.math{
	// dat.color.math.hex_with_component.!1
	type Hex_with_component1 = number;
}
declare namespace dat.color.math{
	// dat.color.math.hex_with_component.!ret
	type Hex_with_componentRet = number;
}
declare namespace dat.color{
	// dat.color.interpret.!ret
	type InterpretRet = boolean;
}
declare namespace dat.controllers{
	// dat.controllers.OptionController.!2
	
	/**
	 * 
	 */
	interface OptionController2 {
	}
}
declare namespace dat.controllers{
	// dat.controllers.NumberController.!ret
	
	/**
	 * 
	 */
	interface NumberControllerRet {
				
		/**
		 * 
		 */
		__impliedStep : number;
				
		/**
		 * 
		 */
		__precision : number;
	}
}
declare namespace dat.controllers{
	// dat.controllers.NumberControllerBox.!2
	
	/**
	 * 
	 */
	interface NumberControllerBox2 {
	}
}
declare namespace dat.controllers{
	// dat.controllers.FunctionController.!2
	type FunctionController2 = string;
}
declare namespace dat.dom.dom{
	// dat.dom.dom.makeSelectable.!
	
	/**
	 * 
	 */
	interface MakeSelectable {
				
		/**
		 * 
		 * @return  
		 */
		onselectstart(): dat.dom.dom.MakeSelectable.OnselectstartRet;
				
		/**
		 * 
		 */
		unselectable : string;
	}
}
declare namespace dat.dom.dom.MakeSelectable{
	// dat.dom.dom.makeSelectable.!.onselectstart.!ret
	type OnselectstartRet = boolean;
}
declare namespace dat.dom.dom{
	// dat.dom.dom.makeSelectable.!1
	type MakeSelectable1 = boolean;
}
declare namespace dat.dom.dom{
	// dat.dom.dom.makeFullscreen.!1
	type MakeFullscreen1 = boolean;
}
declare namespace dat.dom.dom{
	// dat.dom.dom.makeFullscreen.!2
	type MakeFullscreen2 = boolean;
}
declare namespace dat.dom.dom{
	// dat.dom.dom.fakeEvent.!1
	type FakeEvent1 = string;
}
declare namespace dat.dom.dom{
	// dat.dom.dom.fakeEvent.!2
	
	/**
	 * 
	 */
	interface FakeEvent2 {
	}
}
declare namespace dat.dom.dom{
	// dat.dom.dom.fakeEvent.!3
	
	/**
	 * 
	 */
	interface FakeEvent3 {
		
		/**
		 * 
		 */
		parent : {
						
			/**
			 * 
			 */
			closed : boolean;
						
			/**
			 * 
			 */
			getSaveObject : /*no type*/{};
						
			/**
			 * 
			 */
			revert : /*no type*/{};
						
			/**
			 * 
			 */
			useLocalStorage : boolean;
						
			/**
			 * 
			 */
			add : /* dat.GUI.parent.add */ any;
						
			/**
			 * 
			 */
			addColor : /* dat.GUI.parent.addColor */ any;
						
			/**
			 * 
			 */
			remove : /* dat.GUI.parent.remove */ any;
						
			/**
			 * 
			 */
			destroy : /* dat.GUI.parent.destroy */ any;
						
			/**
			 * 
			 */
			addFolder : /* dat.GUI.parent.addFolder */ any;
						
			/**
			 * 
			 */
			removeFolder : /* dat.GUI.parent.removeFolder */ any;
						
			/**
			 * 
			 */
			open : /* dat.GUI.parent.open */ any;
						
			/**
			 * 
			 */
			close : /* dat.GUI.parent.close */ any;
						
			/**
			 * 
			 */
			onResize : /* dat.GUI.parent.onResize */ any;
						
			/**
			 * 
			 */
			onResizeDebounced : /* dat.GUI.parent.onResizeDebounced */ any;
						
			/**
			 * 
			 */
			remember : /* dat.GUI.parent.remember */ any;
						
			/**
			 * 
			 */
			getRoot : /* dat.GUI.parent.getRoot */ any;
						
			/**
			 * 
			 */
			save : /* dat.GUI.parent.save */ any;
						
			/**
			 * 
			 */
			saveAs : /* dat.GUI.parent.saveAs */ any;
						
			/**
			 * 
			 */
			listen : /* dat.GUI.parent.listen */ any;
						
			/**
			 * 
			 */
			updateDisplay : /* dat.GUI.parent.updateDisplay */ any;
		}
				
		/**
		 * 
		 */
		closed : boolean;
		
		/**
		 * 
		 */
		load : {
						
			/**
			 * 
			 */
			preset : string;
		}
				
		/**
		 * 
		 */
		resizable : boolean;
				
		/**
		 * 
		 */
		scrollable : boolean;
	}
}
declare namespace dat.dom.dom.FakeEvent3.parent{
	// dat.dom.dom.fakeEvent.!3.parent.getSaveObject.!ret
	
	/**
	 * 
	 */
	interface GetSaveObjectRet {
				
		/**
		 * 
		 */
		closed : boolean;
		
		/**
		 * 
		 */
		remembered : {
		}
				
		/**
		 * 
		 */
		folders : /* dat.GUI.parent.getSaveObject.!ret.folders */ any;
	}
}
declare namespace dat.dom.dom.FakeEvent3.parent{
	// dat.dom.dom.fakeEvent.!3.parent.revert.!
	
	/**
	 * 
	 */
	interface Revert {
		
		/**
		 * 
		 */
		GUI : {
						
			/**
			 * 
			 */
			CLASS_AUTO_PLACE : string;
						
			/**
			 * 
			 */
			CLASS_AUTO_PLACE_CONTAINER : string;
						
			/**
			 * 
			 */
			CLASS_MAIN : string;
						
			/**
			 * 
			 */
			CLASS_CONTROLLER_ROW : string;
						
			/**
			 * 
			 */
			CLASS_TOO_TALL : string;
						
			/**
			 * 
			 */
			CLASS_CLOSED : string;
						
			/**
			 * 
			 */
			CLASS_CLOSE_BUTTON : string;
						
			/**
			 * 
			 */
			CLASS_CLOSE_TOP : string;
						
			/**
			 * 
			 */
			CLASS_CLOSE_BOTTOM : string;
						
			/**
			 * 
			 */
			CLASS_DRAG : string;
						
			/**
			 * 
			 */
			DEFAULT_WIDTH : number;
						
			/**
			 * 
			 */
			TEXT_CLOSED : string;
						
			/**
			 * 
			 */
			TEXT_OPEN : string;
						
			/**
			 * 
			 */
			toggleHide : /* dat.GUI.toggleHide */ any;
						
			/**
			 * 
			 */
			_keydownHandler : /* dat.GUI._keydownHandler */ any;
			
			/**
			 * 
			 */
			prototype : {
			}
		}
	}
}
declare namespace dat.dom.dom{
	// dat.dom.dom.bind.!
	
	/**
	 * 
	 */
	interface Bind {
				
		/**
		 * 
		 */
		innerHTML : string;
				
		/**
		 * 
		 */
		className : string;
	}
}
declare namespace dat.dom.dom{
	// dat.dom.dom.bind.!1
	type Bind1 = string;
}
declare namespace dat.dom.dom{
	// dat.dom.dom.bind.!2
	type Bind2 = ((e : any) => dat.dom.dom.bind.Bind2Ret);
}
declare namespace dat.dom.dom.bind{
	// dat.dom.dom.bind.!2.!ret
	type Bind2Ret = boolean;
}
declare namespace dat.dom.dom{
	// dat.dom.dom.bind.!3
	type Bind3 = boolean;
}
declare namespace dat.dom.dom{
	// dat.dom.dom.unbind.!1
	type Unbind1 = string;
}
declare namespace dat.dom.dom{
	// dat.dom.dom.unbind.!2
	type Unbind2 = ((e : any) => dat.dom.dom.unbind.Unbind2Ret);
}
declare namespace dat.dom.dom.unbind{
	// dat.dom.dom.unbind.!2.!ret
	type Unbind2Ret = boolean;
}
declare namespace dat.dom.dom{
	// dat.dom.dom.unbind.!3
	type Unbind3 = boolean;
}
declare namespace dat.dom.dom{
	// dat.dom.dom.addClass.!1
	type AddClass1 = string;
}
declare namespace dat.dom.dom{
	// dat.dom.dom.removeClass.!
	
	/**
	 * 
	 */
	interface RemoveClass {
	}
}
declare namespace dat.dom.dom{
	// dat.dom.dom.removeClass.!1
	type RemoveClass1 = string;
}
declare namespace dat.dom.dom{
	// dat.dom.dom.hasClass.!ret
	type HasClassRet = boolean;
}
declare namespace dat.dom.dom{
	// dat.dom.dom.getWidth.!ret
	type GetWidthRet = number;
}
declare namespace dat.dom.dom{
	// dat.dom.dom.getHeight.!ret
	type GetHeightRet = number;
}
declare namespace dat.dom.dom{
	// dat.dom.dom.getOffset.!ret
	
	/**
	 * 
	 */
	interface GetOffsetRet {
				
		/**
		 * 
		 */
		left : number;
				
		/**
		 * 
		 */
		top : number;
	}
}
declare namespace dat.dom.dom{
	// dat.dom.dom.isActive.!
	
	/**
	 * 
	 */
	interface IsActive {
				
		/**
		 * 
		 */
		type : string;
				
		/**
		 * 
		 */
		rel : string;
	}
}
declare namespace dat.dom.dom{
	// dat.dom.dom.isActive.!ret
	type IsActiveRet = boolean;
}
declare namespace dat.gui{
	// dat.gui.GUI.!
	
	/**
	 * 
	 */
	interface GUI {
		
		/**
		 * 
		 */
		parent : {
						
			/**
			 * 
			 */
			closed : boolean;
						
			/**
			 * 
			 */
			getSaveObject : /*no type*/{};
						
			/**
			 * 
			 */
			useLocalStorage : boolean;
						
			/**
			 * 
			 */
			add : /* dat.GUI.parent.add */ any;
						
			/**
			 * 
			 */
			addColor : /* dat.GUI.parent.addColor */ any;
						
			/**
			 * 
			 */
			remove : /* dat.GUI.parent.remove */ any;
						
			/**
			 * 
			 */
			destroy : /* dat.GUI.parent.destroy */ any;
						
			/**
			 * 
			 */
			addFolder : /* dat.GUI.parent.addFolder */ any;
						
			/**
			 * 
			 */
			removeFolder : /* dat.GUI.parent.removeFolder */ any;
						
			/**
			 * 
			 */
			open : /* dat.GUI.parent.open */ any;
						
			/**
			 * 
			 */
			close : /* dat.GUI.parent.close */ any;
						
			/**
			 * 
			 */
			onResize : /* dat.GUI.parent.onResize */ any;
						
			/**
			 * 
			 */
			onResizeDebounced : /* dat.GUI.parent.onResizeDebounced */ any;
						
			/**
			 * 
			 */
			remember : /* dat.GUI.parent.remember */ any;
						
			/**
			 * 
			 */
			getRoot : /* dat.GUI.parent.getRoot */ any;
						
			/**
			 * 
			 */
			save : /* dat.GUI.parent.save */ any;
						
			/**
			 * 
			 */
			saveAs : /* dat.GUI.parent.saveAs */ any;
						
			/**
			 * 
			 */
			revert : /* dat.GUI.parent.revert */ any;
						
			/**
			 * 
			 */
			listen : /* dat.GUI.parent.listen */ any;
						
			/**
			 * 
			 */
			updateDisplay : /* dat.GUI.parent.updateDisplay */ any;
		}
				
		/**
		 * 
		 */
		closed : boolean;
		
		/**
		 * 
		 */
		load : {
						
			/**
			 * 
			 */
			preset : string;
		}
				
		/**
		 * 
		 */
		resizable : boolean;
				
		/**
		 * 
		 */
		scrollable : boolean;
	}
}
declare namespace dat.gui.GUI.parent{
	// dat.gui.GUI.!.parent.getSaveObject.!ret
	
	/**
	 * 
	 */
	interface GetSaveObjectRet {
				
		/**
		 * 
		 */
		closed : boolean;
		
		/**
		 * 
		 */
		remembered : {
		}
				
		/**
		 * 
		 */
		folders : /* dat.GUI.parent.getSaveObject.!ret.folders */ any;
	}
}
declare namespace dat{
	// dat.GUI.!
	
	/**
	 * 
	 */
	export interface GUI {

		/**
		 * 
		 */
		parent : {
						
			/**
			 * 
			 */
			closed : boolean;
						
			/**
			 * 
			 */
			getSaveObject : /*no type*/{};
						
			/**
			 * 
			 */
			useLocalStorage : boolean;
						
			/**
			 * 
			 */
			add : /* dat.GUI.parent.add */ any;
						
			/**
			 * 
			 */
			addColor : /* dat.GUI.parent.addColor */ any;
						
			/**
			 * 
			 */
			remove : /* dat.GUI.parent.remove */ any;
						
			/**
			 * 
			 */
			destroy : /* dat.GUI.parent.destroy */ any;
						
			/**
			 * 
			 */
			addFolder : /* dat.GUI.parent.addFolder */ any;
						
			/**
			 * 
			 */
			removeFolder : /* dat.GUI.parent.removeFolder */ any;
						
			/**
			 * 
			 */
			open : /* dat.GUI.parent.open */ any;
						
			/**
			 * 
			 */
			close : /* dat.GUI.parent.close */ any;
						
			/**
			 * 
			 */
			onResize : /* dat.GUI.parent.onResize */ any;
						
			/**
			 * 
			 */
			onResizeDebounced : /* dat.GUI.parent.onResizeDebounced */ any;
						
			/**
			 * 
			 */
			remember : /* dat.GUI.parent.remember */ any;
						
			/**
			 * 
			 */
			getRoot : /* dat.GUI.parent.getRoot */ any;
						
			/**
			 * 
			 */
			save : /* dat.GUI.parent.save */ any;
						
			/**
			 * 
			 */
			saveAs : /* dat.GUI.parent.saveAs */ any;
						
			/**
			 * 
			 */
			revert : /* dat.GUI.parent.revert */ any;
						
			/**
			 * 
			 */
			listen : /* dat.GUI.parent.listen */ any;
						
			/**
			 * 
			 */
			updateDisplay : /* dat.GUI.parent.updateDisplay */ any;
		}
				
		/**
		 * 
		 */
		closed : boolean;
		
		/**
		 * 
		 */
		load : {
						
			/**
			 * 
			 */
			preset : string;
		}
				
		/**
		 * 
		 */
		resizable : boolean;
				
		/**
		 * 
		 */
		scrollable : boolean;
	}
}
// declare namespace dat.GUI.parent{
// 	// dat.GUI.!.parent.getSaveObject.!ret
//
// 	/**
// 	 *
// 	 */
// 	interface GetSaveObjectRet {
//
// 		/**
// 		 *
// 		 */
// 		closed : boolean;
//
// 		/**
// 		 *
// 		 */
// 		remembered : {
// 		}
//
// 		/**
// 		 *
// 		 */
// 		folders : /* dat.GUI.parent.getSaveObject.!ret.folders */ any;
// 	}
// }
declare namespace dat.controllers.BooleanController.__gui{
	// dat.controllers.BooleanController.__gui.getSaveObject.!ret
	
	/**
	 * 
	 */
	interface GetSaveObjectRet {
				
		/**
		 * 
		 */
		closed : boolean;
		
		/**
		 * 
		 */
		remembered : {
		}
				
		/**
		 * 
		 */
		folders : /* dat.GUI.parent.getSaveObject.!ret.folders */ any;
	}
}
declare namespace dat.controllers.BooleanController{
	// dat.controllers.BooleanController.min.!ret
	type MinRet = number;
}
// declare namespace dat.GUI.parent{
// 	// dat.GUI.parent.getSaveObject.!ret
//
// 	/**
// 	 *
// 	 */
// 	interface GetSaveObjectRet {
//
// 		/**
// 		 *
// 		 */
// 		closed : boolean;
//
// 		/**
// 		 *
// 		 */
// 		remembered : {
// 		}
//
// 		/**
// 		 *
// 		 */
// 		folders : /*no type*/any;
// 	}
// 	interface GUI {
//
//     }
// }

/**
 * 
 */
declare namespace dat{
	
	interface GUI {
		
    }
	/**
	 * 
	 */
	namespace color{
		
		/**
		 * 
		 */
		interface Color {
						
			/**
			 * 
			 */
			new ();
						
			/**
			 * 
			 * @param color 
			 * @param component 
			 * @param componentHexIndex 
			 */
			recalculateRGB(color : dat.color.Color.RecalculateRGB, component : dat.color.Color.RecalculateRGB1, componentHexIndex : dat.color.Color.RecalculateRGB2): void;
						
			/**
			 * 
			 * @param color 
			 */
			recalculateHSV(color : dat.color.Color.RecalculateHSV): void;
						
			/**
			 * 
			 */
			COMPONENTS : Array<dat.color.Color.COMPONENTSI>;
						
			/**
			 * 
			 */
			__state : boolean;
						
			/**
			 * 
			 */
			v : number;
						
			/**
			 * 
			 */
			s : number;
						
			/**
			 * 
			 */
			h : number;
		}
		
		/**
		 * 
		 */
		namespace math{
						
			/**
			 * 
			 * @param h 
			 * @param s 
			 * @param v 
			 * @return  
			 */
			function hsv_to_rgb(h : any, s : any, v : any): dat.color.math.Hsv_to_rgbRet;
						
			/**
			 * 
			 * @param r 
			 * @param g 
			 * @param b 
			 * @return  
			 */
			function rgb_to_hsv(r : dat.color.math.Rgb_to_hsv, g : dat.color.math.Rgb_to_hsv1, b : any): dat.color.math.Rgb_to_hsvRet;
						
			/**
			 * 
			 * @param r 
			 * @param g 
			 * @param b 
			 * @return  
			 */
			function rgb_to_hex(r : any, g : any, b : any): dat.color.math.Rgb_to_hexRet;
						
			/**
			 * 
			 * @param hex 
			 * @param componentIndex 
			 * @return  
			 */
			function component_from_hex(hex : any, componentIndex : dat.color.math.Component_from_hex1): dat.color.math.Component_from_hexRet;
						
			/**
			 * 
			 * @param hex 
			 * @param componentIndex 
			 * @param value 
			 * @return  
			 */
			function hex_with_component(hex : dat.color.math.Hex_with_component, componentIndex : dat.color.math.Hex_with_component1, value : any): dat.color.math.Hex_with_componentRet;
		}
				
		/**
		 * 
		 * @return  
		 */
		function interpret(): dat.color.InterpretRet;
	}
	
	/**
	 * 
	 */
	namespace controllers{
				
		/**
		 * 
		 */
		interface Controller {
						
			/**
			 * 
			 * @param object 
			 * @param property 
			 * @return  
			 */
			new (object : any, property : any): Controller;
		}

		
		/**
		 * 
		 */
		interface BooleanController {
						
			/**
			 * 
			 * @param object 
			 * @param property 
			 * @return  
			 */
			new (object : any, property : any): /* !this */ any;
			
			/**
			 * 
			 */
			__gui : {
								
				/**
				 * 
				 */
				closed : boolean;
								
				/**
				 * 
				 */
				getSaveObject : /*no type*/{};
								
				/**
				 * 
				 */
				useLocalStorage : boolean;
								
				/**
				 * 
				 */
				add : /* dat.GUI.parent.add */ any;
								
				/**
				 * 
				 */
				addColor : /* dat.GUI.parent.addColor */ any;
								
				/**
				 * 
				 */
				remove : /* dat.GUI.parent.remove */ any;
								
				/**
				 * 
				 */
				destroy : /* dat.GUI.parent.destroy */ any;
								
				/**
				 * 
				 */
				addFolder : /* dat.GUI.parent.addFolder */ any;
								
				/**
				 * 
				 */
				removeFolder : /* dat.GUI.parent.removeFolder */ any;
								
				/**
				 * 
				 */
				open : /* dat.GUI.parent.open */ any;
								
				/**
				 * 
				 */
				close : /* dat.GUI.parent.close */ any;
								
				/**
				 * 
				 */
				onResize : /* dat.GUI.parent.onResize */ any;
								
				/**
				 * 
				 */
				onResizeDebounced : /* dat.GUI.parent.onResizeDebounced */ any;
								
				/**
				 * 
				 */
				remember : /* dat.GUI.parent.remember */ any;
								
				/**
				 * 
				 */
				getRoot : /* dat.GUI.parent.getRoot */ any;
								
				/**
				 * 
				 */
				save : /* dat.GUI.parent.save */ any;
								
				/**
				 * 
				 */
				saveAs : /* dat.GUI.parent.saveAs */ any;
								
				/**
				 * 
				 */
				revert : /* dat.GUI.parent.revert */ any;
								
				/**
				 * 
				 */
				listen : /* dat.GUI.parent.listen */ any;
								
				/**
				 * 
				 */
				updateDisplay : /* dat.GUI.parent.updateDisplay */ any;
			}
						
			/**
			 * 
			 * @return  
			 */
			min(): dat.controllers.BooleanController.MinRet;
		}
		
		/**
		 * 
		 */
		interface OptionController {
						
			/**
			 * 
			 * @param object 
			 * @param property 
			 * @param opts 
			 * @return  
			 */
			new (object : any, property : any, opts : any): /* !this */ any;
		}
		
		/**
		 * 
		 */
		interface StringController {
						
			/**
			 * 
			 * @param object 
			 * @param property 
			 * @return  
			 */
			new (object : any, property : any): /* !this */ any;
		}
		
		/**
		 * 
		 */
		interface NumberController {
						
			/**
			 * 
			 * @param object 
			 * @param property 
			 * @param params 
			 * @return  
			 */
			new (object : any, property : any, params : any): /* !this */ any;
		}
		
		/**
		 * 
		 */
		interface NumberControllerBox extends dat.controllers.NumberController {
						
			/**
			 * 
			 * @param object 
			 * @param property 
			 * @param params 
			 * @return  
			 */
			new (object : any, property : any, params : any): /* !this */ any;
						
			/**
			 * 
			 */
			__truncationSuspended : boolean;
		}
		
		/**
		 * 
		 */
		interface NumberControllerSlider extends dat.controllers.NumberController {
						
			/**
			 * 
			 * @param object 
			 * @param property 
			 * @param min 
			 * @param max 
			 * @param step 
			 * @return  
			 */
			new (object : any, property : any, min : any, max : any, step : any): /* !this */ any;
		}
		
		/**
		 * 
		 */
		interface FunctionController {
						
			/**
			 * 
			 * @param object 
			 * @param property 
			 * @param text 
			 * @return  
			 */
			new (object : any, property : any, text : string): /* !this */ any;
		}
		
		/**
		 * 
		 */
		interface ColorController {
						
			/**
			 * 
			 * @param object 
			 * @param property 
			 * @return  
			 */
			new (object : any, property : any): /* !this */ any;
						
			/**
			 * 
			 */
			__color : dat.color.Color;
						
			/**
			 * 
			 */
			__field_knob_border : string;
						
			/**
			 * 
			 */
			__input_textShadow : string;
		}
	}
	
	/**
	 * 
	 */
	namespace dom{
		
		/**
		 * 
		 */
		namespace dom{
						
			/**
			 * 
			 * @param elem 
			 * @param selectable 
			 */
			function makeSelectable(elem : dat.dom.dom.MakeSelectable, selectable : dat.dom.dom.MakeSelectable1): void;
						
			/**
			 * 
			 * @param elem 
			 * @param hor 
			 * @param vert 
			 */
			function makeFullscreen(elem : any, hor : dat.dom.dom.MakeFullscreen1, vert : dat.dom.dom.MakeFullscreen2): void;
						
			/**
			 * 
			 * @param elem 
			 * @param eventType 
			 * @param pars 
			 * @param aux 
			 */
			function fakeEvent(elem : any, eventType : dat.dom.dom.FakeEvent1, pars : dat.dom.dom.FakeEvent2, aux : dat.dom.dom.FakeEvent3): void;
						
			/**
			 * 
			 * @param elem 
			 * @param event 
			 * @param func 
			 * @param newBool 
			 * @return  
			 */
			function bind(elem : dat.dom.dom.Bind, event : dat.dom.dom.Bind1, func : (() => void) | ((e : any) => boolean) | Bind2, newBool : dat.dom.dom.Bind3): /* dat.dom.dom */ any;
						
			/**
			 * 
			 * @param elem 
			 * @param event 
			 * @param func 
			 * @param newBool 
			 * @return  
			 */
			function unbind(elem : any, event : dat.dom.dom.Unbind1, func : dat.dom.dom.Unbind2, newBool : dat.dom.dom.Unbind3): /* dat.dom.dom */ any;
						
			/**
			 * 
			 * @param elem 
			 * @param className 
			 * @return  
			 */
			function addClass(elem : any, className : dat.dom.dom.AddClass1): /* dat.dom.dom */ any;
						
			/**
			 * 
			 * @param elem 
			 * @param className 
			 * @return  
			 */
			function removeClass(elem : dat.dom.dom.RemoveClass, className : dat.dom.dom.RemoveClass1): /* dat.dom.dom */ any;
						
			/**
			 * 
			 * @param elem 
			 * @param className 
			 * @return  
			 */
			function hasClass(elem : any, className : any): dat.dom.dom.HasClassRet;
						
			/**
			 * 
			 * @param elem 
			 * @return  
			 */
			function getWidth(elem : any): dat.dom.dom.GetWidthRet;
						
			/**
			 * 
			 * @param elem 
			 * @return  
			 */
			function getHeight(elem : any): dat.dom.dom.GetHeightRet;
						
			/**
			 * 
			 * @param el 
			 * @return  
			 */
			function getOffset(el : any): dat.dom.dom.GetOffsetRet;
						
			/**
			 * 
			 * @param elem 
			 * @return  
			 */
			function isActive(elem : dat.dom.dom.IsActive): dat.dom.dom.IsActiveRet;
		}
	}
	
	/**
	 * 
	 */
	namespace gui{
		
		/**
		 * 
		 */
		var GUI : {
						
			/**
			 * 
			 */
			CLASS_AUTO_PLACE : string;
						
			/**
			 * 
			 */
			CLASS_AUTO_PLACE_CONTAINER : string;
						
			/**
			 * 
			 */
			CLASS_MAIN : string;
						
			/**
			 * 
			 */
			CLASS_CONTROLLER_ROW : string;
						
			/**
			 * 
			 */
			CLASS_TOO_TALL : string;
						
			/**
			 * 
			 */
			CLASS_CLOSED : string;
						
			/**
			 * 
			 */
			CLASS_CLOSE_BUTTON : string;
						
			/**
			 * 
			 */
			CLASS_CLOSE_TOP : string;
						
			/**
			 * 
			 */
			CLASS_CLOSE_BOTTOM : string;
						
			/**
			 * 
			 */
			CLASS_DRAG : string;
						
			/**
			 * 
			 */
			DEFAULT_WIDTH : number;
						
			/**
			 * 
			 */
			TEXT_CLOSED : string;
						
			/**
			 * 
			 */
			TEXT_OPEN : string;
						
			/**
			 * 
			 */
			toggleHide : /* dat.GUI.toggleHide */ any;
						
			/**
			 * 
			 */
			_keydownHandler : /* dat.GUI._keydownHandler */ any;
			
			/**
			 * 
			 */
			prototype : {
			}
		}
	}
	
	/**
	 * 
	 */
	interface GUI {
				
		/**
		 * 
		 * @param pars 
		 */
		new (pars : /* dat.GUI.! */ any);
				
		/**
		 * 
		 */
		toggleHide(): void;
				
		/**
		 * 
		 */
		CLASS_AUTO_PLACE : string;
				
		/**
		 * 
		 */
		CLASS_AUTO_PLACE_CONTAINER : string;
				
		/**
		 * 
		 */
		CLASS_MAIN : string;
				
		/**
		 * 
		 */
		CLASS_CONTROLLER_ROW : string;
				
		/**
		 * 
		 */
		CLASS_TOO_TALL : string;
				
		/**
		 * 
		 */
		CLASS_CLOSED : string;
				
		/**
		 * 
		 */
		CLASS_CLOSE_BUTTON : string;
				
		/**
		 * 
		 */
		CLASS_CLOSE_TOP : string;
				
		/**
		 * 
		 */
		CLASS_CLOSE_BOTTOM : string;
				
		/**
		 * 
		 */
		CLASS_DRAG : string;
				
		/**
		 * 
		 */
		DEFAULT_WIDTH : number;
				
		/**
		 * 
		 */
		TEXT_CLOSED : string;
				
		/**
		 * 
		 */
		TEXT_OPEN : string;
				
		/**
		 * 
		 * @param e 
		 */
		_keydownHandler(e : any): void;
				
		/**
		 * 
		 */
		__controllers : Array<any>;
				
		/**
		 * 
		 */
		__rememberedObjects : Array<any>;
				
		/**
		 * 
		 */
		__rememberedObjectIndecesToControllers : Array<any>;
				
		/**
		 * 
		 */
		__listening : Array<any>;
		
		/**
		 * 
		 */
		// parent : {
		//
		// 	/**
		// 	 *
		// 	 * @param object
		// 	 * @param property
		// 	 * @return
		// 	 */
		// 	add(object : any, property : any): any;
		// 	/**
		// 	 *
		// 	 */
		// 	add();
		//
		// 	/**
		// 	 *
		// 	 * @param object
		// 	 * @param property
		// 	 * @return
		// 	 */
		// 	addColor(object : any, property : any): any;
		// 	/**
		// 	 *
		// 	 */
		// 	addColor();
		//
		// 	/**
		// 	 *
		// 	 * @param controller
		// 	 */
		// 	remove(controller : any): void;
		//
		// 	/**
		// 	 *
		// 	 */
		// 	destroy(): void;
		//
		// 	/**
		// 	 *
		// 	 * @param name
		// 	 * @return
		// 	 */
		// 	addFolder(name : any): dat.GUI.parent.GUI;
		//
		// 	/**
		// 	 *
		// 	 * @param folder
		// 	 */
		// 	removeFolder(folder : any): void;
		//
		// 	/**
		// 	 *
		// 	 */
		// 	open(): void;
		//
		// 	/**
		// 	 *
		// 	 */
		// 	closed : boolean;
		//
		// 	/**
		// 	 *
		// 	 */
		// 	close(): void;
		//
		// 	/**
		// 	 *
		// 	 */
		// 	onResize(): void;
		//
		// 	/**
		// 	 *
		// 	 */
		// 	onResizeDebounced(): void;
		//
		// 	/**
		// 	 *
		// 	 */
		// 	remember(): void;
		//
		// 	/**
		// 	 *
		// 	 * @return
		// 	 */
		// 	getRoot(): /* !this */ any;
		//
		// 	/**
		// 	 *
		// 	 * @return
		// 	 */
		// 	getSaveObject(): dat.GUI.parent.GetSaveObjectRet;
		//
		// 	/**
		// 	 *
		// 	 */
		// 	save(): void;
		//
		// 	/**
		// 	 *
		// 	 * @param presetName
		// 	 */
		// 	saveAs(presetName : any): void;
		//
		// 	/**
		// 	 *
		// 	 * @param gui
		// 	 */
		// 	revert(gui : any): void;
		//
		// 	/**
		// 	 *
		// 	 * @param controller
		// 	 */
		// 	listen(controller : any): void;
		//
		// 	/**
		// 	 *
		// 	 */
		// 	updateDisplay(): void;
		//
		// 	/**
		// 	 *
		// 	 */
		// 	useLocalStorage : boolean;
		// }
				
		/**
		 * 
		 */
		scrollable : boolean;
				
		/**
		 * 
		 */
		preset : string;
				
		/**
		 * 
		 */
		width : number;
				
		/**
		 * 
		 */
		closed : boolean;
		
		/**
		 * 
		 */
		load : {
						
			/**
			 * 
			 */
			preset : string;
		}
				
		/**
		 * 
		 */
		useLocalStorage : boolean;
				
		/**
		 * 
		 */
		__resizeHandler(): void;
				
		/**
		 * 
		 */
		saveToLocalStorageIfPossible(): void;
	}
	
	
	/**
	 * 
	 */
	export var __esModule : boolean;
	
	/**
	 * 
	 */
	//  var default :{
	//			
	// 	/**
	// 	 * 
	// 	 */
	// 	color : /* dat.color */ any;
	//			
	// 	/**
	// 	 * 
	// 	 */
	// 	controllers : /* dat.controllers */ any;
	//			
	// 	/**
	// 	 * 
	// 	 */
	// 	dom : /* dat.dom */ any;
	//			
	// 	/**
	// 	 * 
	// 	 */
	// 	gui : /* dat.gui */ any;
	//			
	// 	/**
	// 	 * 
	// 	 */
	// 	GUI : /* dat.GUI */ any;
	// }
		
}
