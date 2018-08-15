// Type definitions for lib/Detector/Detector.js
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped
declare namespace Detector{
	// Detector.getWebGLErrorMessage.!ret
	
	/**
	 * 
	 */
	interface GetWebGLErrorMessageRet {
				
		/**
		 * 
		 */
		id : string;
				
		/**
		 * 
		 */
		innerHTML : string;
	}
}

/**
 * @author alteredq / http://alteredqualia.com/
 * @author mr.doob / http://mrdoob.com/
 */
declare namespace Detector{
		
	/**
	 * 
	 */
	export var canvas : boolean;
		
	/**
	 * 
	 */
	export var webgl : boolean;
		
	/**
	 * 
	 */
	export var workers : boolean;
		
	/**
	 * 
	 * @return  
	 */
	function getWebGLErrorMessage(): Detector.GetWebGLErrorMessageRet;
		
	/**
	 * 
	 * @param parameters 
	 */
	function addGetWebGLMessage(parameters : any): void;
}
