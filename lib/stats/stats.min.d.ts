// Type definitions for lib/stats/stats.min.js
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare namespace Stats{
	// Stats.Panel.!ret
	
	/**
	 * 
	 */
	interface PanelRet {
		
		/**
		 * 
		 */
		dom : {
						
			/**
			 * 
			 */
			width : number;
						
			/**
			 * 
			 */
			height : number;
		}
				
		/**
		 * 
		 * @param f 
		 * @param v 
		 */
		update(f : number, v : number): void;
	}
}
// Stats.!ret

/**
 * 
 */
declare interface Ret {
		
	/**
	 * 
	 */
	REVISION : number;
		
	/**
	 * 
	 * @param a 
	 * @return  
	 */
	addPanel(a : /* Stats.Panel.!ret */ any): /* Stats.Panel.!ret */ any;
		
	/**
	 * 
	 * @param a 
	 */
	showPanel(a : number): void;
		
	/**
	 * 
	 */
	begin(): void;
		
	/**
	 * 
	 * @return  
	 */
	end(): number;
		
	/**
	 * 
	 */
	update(): void;
		
	/**
	 * 
	 */
	setMode : /* Stats.!ret.showPanel */ any;
}
/**
 * 
 */
declare interface Stats {
		
	/**
	 * 
	 * @return  
	 */
	new (): Ret;
}
declare const Stats: Stats;


/**
 * 
 */
declare namespace Stats{
		
	/**
	 * 
	 */
	interface Panel {
				
		/**
		 * 
		 * @param h 
		 * @param k 
		 * @param l 
		 * @return  
		 */
		new (h : string, k : string, l : string): Stats.PanelRet;
	}

}
