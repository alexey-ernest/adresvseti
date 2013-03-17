/**
 * WARNING! THIS IS A GENERATED FILE, AND WILL BE RE-GENERATED EACH TIME THE
 * AJAXBRIDGE IS RUN.
 *
 * You should keep your javascript code inside this file as light as possible, 
 * and rather keep the body of your Ajax application in separate *.js files. 
 *
 * Do make a backup of your changes, before re-generating this file (AjaxBridge 
 * will display a warning message to you).
 *
 * Please refer to the built-in documentation inside the AjaxBridge application 
 * for help on using this file.
 */
 
 
/**
 * Application "uploader.mxml"
 */

/**
 * The "uploader" javascript namespace. All the functions/variables you
 * have selected under the "uploader.mxml" in the tree will be
 * available as static members of this namespace object.
 */
uploader = {};


/**
 * Listen for the instantiation of the Flex application over the bridge
 */
FABridge.addInitializationCallback("b_uploader", uploaderReady);


/**
 * Hook here all the code that must run as soon as the "uploader" class
 * finishes its instantiation over the bridge.
 *
 * For basic tasks, such as running a Flex method on the click of a javascript
 * button, chances are that both Ajax and Flex may well have loaded before the 
 * user actually clicks the button.
 *
 * However, using the "uploaderReady()" is the safest way, as it will 
 * let Ajax know that involved Flex classes are available for use.
 */
function uploaderReady() {

	// Initialize the "root" object. This represents the actual 
	// "uploader.mxml" flex application.
	b_uploader_root = FABridge["b_uploader"].root();
	

	// Global variables in the "uploader.mxml" application (converted 
	// to getters and setters)

	// Global functions in the "uploader.mxml" application

	uploader.getAllowedFileTypes = function() {
		return b_uploader_root.getAllowedFileTypes();
	};

	uploader.getBackgroundAlpha = function() {
		return b_uploader_root.getBackgroundAlpha();
	};

	uploader.getBackgroundColor = function() {
		return b_uploader_root.getBackgroundColor();
	};

	uploader.getBorderAlpha = function() {
		return b_uploader_root.getBorderAlpha();
	};

	uploader.getBorderColor = function() {
		return b_uploader_root.getBorderColor();
	};

	uploader.getBorderVisible = function() {
		return b_uploader_root.getBorderVisible();
	};

	uploader.getBorderWeight = function() {
		return b_uploader_root.getBorderWeight();
	};

	uploader.getCellPadding = function() {
		return b_uploader_root.getCellPadding();
	};

	uploader.getCornerRadius = function() {
		return b_uploader_root.getCornerRadius();
	};

	uploader.getDecodingImagesIOErrorMessage = function() {
		return b_uploader_root.getDecodingImagesIOErrorMessage();
	};

	uploader.getDecodingImagesMessage = function() {
		return b_uploader_root.getDecodingImagesMessage();
	};

	uploader.getMaxQuantity = function() {
		return b_uploader_root.getMaxQuantity();
	};

	uploader.getMaxQuantityReachedErrorMessage = function() {
		return b_uploader_root.getMaxQuantityReachedErrorMessage();
	};

	uploader.getMaxTargetDataSize = function() {
		return b_uploader_root.getMaxTargetDataSize();
	};

	uploader.getMaxTargetDataSizeExceedErrorMessage = function() {
		return b_uploader_root.getMaxTargetDataSizeExceedErrorMessage();
	};

	uploader.getReadingFilesIOErrorMessage = function() {
		return b_uploader_root.getReadingFilesIOErrorMessage();
	};

	uploader.getReadingFilesMessage = function() {
		return b_uploader_root.getReadingFilesMessage();
	};

	uploader.getReadingFilesSecurityErrorMessage = function() {
		return b_uploader_root.getReadingFilesSecurityErrorMessage();
	};

	uploader.getRedirectUrl = function() {
		return b_uploader_root.getRedirectUrl();
	};

	uploader.getSelectButtonLabel = function() {
		return b_uploader_root.getSelectButtonLabel();
	};

	uploader.getTargetDimension = function() {
		return b_uploader_root.getTargetDimension();
	};

	uploader.getTargetQualityOfJPEG = function() {
		return b_uploader_root.getTargetQualityOfJPEG();
	};

	uploader.getTargetThumbDimension = function() {
		return b_uploader_root.getTargetThumbDimension();
	};

	uploader.getTargetUrl = function() {
		return b_uploader_root.getTargetUrl();
	};

	uploader.getTextColor = function() {
		return b_uploader_root.getTextColor();
	};

	uploader.getTextFontFamily = function() {
		return b_uploader_root.getTextFontFamily();
	};

	uploader.getTextFontSize = function() {
		return b_uploader_root.getTextFontSize();
	};

	uploader.getTextFontWeight = function() {
		return b_uploader_root.getTextFontWeight();
	};

	uploader.getUploadingFilesIOErrorMessage = function() {
		return b_uploader_root.getUploadingFilesIOErrorMessage();
	};

	uploader.getUploadingFilesMessage = function() {
		return b_uploader_root.getUploadingFilesMessage();
	};

	uploader.getUploadingFilesSecurityErrorMessage = function() {
		return b_uploader_root.getUploadingFilesSecurityErrorMessage();
	};

	uploader.getVars = function() {
		return b_uploader_root.getVars();
	};

	uploader.getWindowBorderColor = function() {
		return b_uploader_root.getWindowBorderColor();
	};

	uploader.getWindowBorderWeight = function() {
		return b_uploader_root.getWindowBorderWeight();
	};

	uploader.getWindowContentColor = function() {
		return b_uploader_root.getWindowContentColor();
	};

	uploader.getWindowContentPadding = function() {
		return b_uploader_root.getWindowContentPadding();
	};

	uploader.getWindowTextColor = function() {
		return b_uploader_root.getWindowTextColor();
	};

	uploader.setAllowedFileTypes = function(argArray) {
		b_uploader_root.setAllowedFileTypes(argArray);
	};

	uploader.setBackgroundAlpha = function(argNumber) {
		b_uploader_root.setBackgroundAlpha(argNumber);
	};

	uploader.setBackgroundColor = function(argUint) {
		b_uploader_root.setBackgroundColor(argUint);
	};

	uploader.setBorderAlpha = function(argNumber) {
		b_uploader_root.setBorderAlpha(argNumber);
	};

	uploader.setBorderColor = function(argUint) {
		b_uploader_root.setBorderColor(argUint);
	};

	uploader.setBorderVisible = function(argBoolean) {
		b_uploader_root.setBorderVisible(argBoolean);
	};

	uploader.setBorderWeight = function(argUint) {
		b_uploader_root.setBorderWeight(argUint);
	};

	uploader.setCellPadding = function(argUint) {
		b_uploader_root.setCellPadding(argUint);
	};

	uploader.setCornerRadius = function(argNumber) {
		b_uploader_root.setCornerRadius(argNumber);
	};

	uploader.setDecodingImagesIOErrorMessage = function(argString) {
		b_uploader_root.setDecodingImagesIOErrorMessage(argString);
	};

	uploader.setDecodingImagesMessage = function(argString) {
		b_uploader_root.setDecodingImagesMessage(argString);
	};

	uploader.setMaxQuantity = function(argUint) {
		b_uploader_root.setMaxQuantity(argUint);
	};

	uploader.setMaxQuantityReachedErrorMessage = function(argString) {
		b_uploader_root.setMaxQuantityReachedErrorMessage(argString);
	};

	uploader.setMaxTargetDataSize = function(argUint) {
		b_uploader_root.setMaxTargetDataSize(argUint);
	};

	uploader.setMaxTargetDataSizeExceedErrorMessage = function(argString) {
		b_uploader_root.setMaxTargetDataSizeExceedErrorMessage(argString);
	};

	uploader.setReadingFilesIOErrorMessage = function(argString) {
		b_uploader_root.setReadingFilesIOErrorMessage(argString);
	};

	uploader.setReadingFilesMessage = function(argString) {
		b_uploader_root.setReadingFilesMessage(argString);
	};

	uploader.setReadingFilesSecurityErrorMessage = function(argString) {
		b_uploader_root.setReadingFilesSecurityErrorMessage(argString);
	};

	uploader.setRedirectUrl = function(argString) {
		b_uploader_root.setRedirectUrl(argString);
	};

	uploader.setSelectButtonLabel = function(argString) {
		b_uploader_root.setSelectButtonLabel(argString);
	};

	uploader.setTargetDimension = function(argUint) {
		b_uploader_root.setTargetDimension(argUint);
	};

	uploader.setTargetQualityOfJPEG = function(argUint) {
		b_uploader_root.setTargetQualityOfJPEG(argUint);
	};

	uploader.setTargetThumbDimension = function(argUint) {
		b_uploader_root.setTargetThumbDimension(argUint);
	};

	uploader.setTextColor = function(argUint) {
		b_uploader_root.setTextColor(argUint);
	};

	uploader.setTextFontFamily = function(argString) {
		b_uploader_root.setTextFontFamily(argString);
	};

	uploader.setTextFontSize = function(argNumber) {
		b_uploader_root.setTextFontSize(argNumber);
	};

	uploader.setTextFontWeight = function(argString) {
		b_uploader_root.setTextFontWeight(argString);
	};

	uploader.setUploadingFilesIOErrorMessage = function(argString) {
		b_uploader_root.setUploadingFilesIOErrorMessage(argString);
	};

	uploader.setUploadingFilesMessage = function(argString) {
		b_uploader_root.setUploadingFilesMessage(argString);
	};

	uploader.setUploadingFilesSecurityErrorMessage = function(argString) {
		b_uploader_root.setUploadingFilesSecurityErrorMessage(argString);
	};

	uploader.setVars = function(argString) {
		b_uploader_root.setVars(argString);
	};

	uploader.setWindowBorderColor = function(argUint) {
		b_uploader_root.setWindowBorderColor(argUint);
	};

	uploader.setWindowBorderWeight = function(argUint) {
		b_uploader_root.setWindowBorderWeight(argUint);
	};

	uploader.setWindowContentColor = function(argUint) {
		b_uploader_root.setWindowContentColor(argUint);
	};

	uploader.setWindowContentPadding = function(argUint) {
		b_uploader_root.setWindowContentPadding(argUint);
	};

	uploader.setWindowTextColor = function(argUint) {
		b_uploader_root.setWindowTextColor(argUint);
	};

	uploader.upload = function() {
		b_uploader_root.upload();
	};

}
