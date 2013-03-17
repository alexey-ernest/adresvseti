// PODLEN.info main javascript

$(document).ready(function () {

	// search
	initSearch();

	// css fixes
	initCssFixes();

	// buttons
	initButtons();

    // tabs
    initTabs();
	
	// catalog tree
	initCatalogTree();
	
	// tab blocks
	initTabBlocks();
	
	// city list
	initCityList();
	
	// catalog buttons
	initCatalogButtons();
});


//------------------------------------------------------------------------------------------------------------
// Search
//------------------------------------------------------------------------------------------------------------

function initSearch() {
	$("#search-input").focus();
}


//------------------------------------------------------------------------------------------------------------
// Css fixes
//------------------------------------------------------------------------------------------------------------

function initCssFixes() {
	
	// min and max width for viewport in IE6
	if ($.browser.msie)
	{
		var version = $.browser.version;
		var majorVersion = version.substring(0, version.indexOf('.'));

		if (majorVersion < 7)
		{
			// IE < 7
			$(window).resize(initSizeConstraints);
			initSizeConstraints();
		}
	}
}

// IE 6 min-width and max-width hacks
function initSizeConstraints() {
	
	// viewport
	var viewPortMinWidth = 1200;
	var viewPortMaxWidth = 1560;
	$('.viewport').css("width", ((document.documentElement.clientWidth || document.body.clientWidth) < viewPortMinWidth) ? viewPortMinWidth + 'px' : ((document.body.clientWidth > viewPortMaxWidth) ? viewPortMaxWidth + 'px' : '100%'));
}

//------------------------------------------------------------------------------------------------------------
// Buttons
//------------------------------------------------------------------------------------------------------------

function initButtons()
{
	$(".button").button();
}

//------------------------------------------------------------------------------------------------------------
// Tabs
//------------------------------------------------------------------------------------------------------------

function initTabs()
{
	$(".tabs").tabs({
		select: function(event, ui) {
			var url = $.data(ui.tab, 'load.tabs');
			if( url ) {
				location.href = url;
				return false;
			}
			return true;
    	}
	});
}

//------------------------------------------------------------------------------------------------------------
// Catalog tree
//------------------------------------------------------------------------------------------------------------

function initCatalogTree()
{
	$("#catalog-tree").treeview({
		persist: "location",
		collapsed: true,
		unique: false,
		animated: "fast"
	});
}


//------------------------------------------------------------------------------------------------------------
// Tab blocks
//------------------------------------------------------------------------------------------------------------

function initTabBlocks()
{
	$(".tab-block").append('<div class="block-border left"></div><div class="block-border right"></div>');
}

//------------------------------------------------------------------------------------------------------------
// City list
//------------------------------------------------------------------------------------------------------------

var cityPopupWrapperId = "#city-popup-wrapper";
var citySelectedId = "#city-selected";

function initCityList() {
    
    // city list
	$(citySelectedId).click(function(e) {
		e.preventDefault();
		$(cityPopupWrapperId).toggleClass("open");
	});
	
    $(citySelectedId).mouseenter(function (e) {
        $(cityPopupWrapperId).addClass("open");
    });
	
	$(cityPopupWrapperId).mouseleave(function (e) {
        $(cityPopupWrapperId).removeClass("open");
    });
}



//------------------------------------------------------------------------------------------------------------
// Catalog buttons
//------------------------------------------------------------------------------------------------------------

function initCatalogButtons() {
	var $buttonsPanel = $('#catalog-buttons');
	
	$buttonsPanel.find('#catalog-button-table').button({
	});
	
	$buttonsPanel.find('#catalog-button-map').button({
	});
	
	$buttonsPanel.find('#catalog-button-fav').button({
		icons: {
			primary: "ui-icon-star"
		},
		text: false
	});
	
	$buttonsPanel.find('#catalog-button-info').button({
		icons: {
			primary: "ui-icon-info"
		},
		text: false
	});
	
	$buttonsPanel.find('#catalog-button-add').button({
		icons: {
			primary: "ui-icon-plusthick"
		},
		text: false
	});
	
	$buttonsPanel.find('#catalog-button-del').button({
		icons: {
			primary: "ui-icon-closethick"
		},
		text: false
	});
	
	$buttonsPanel.find('#catalog-button-more').button({
		icons: {
			primary: "ui-icon-folder-collapsed",
			secondary: "ui-icon-triangle-1-s"
		},
		text: false
	});
	
	$buttonsPanel.find('#catalog-button-print').button({
		icons: {
			primary: "ui-icon-print"
		}
	});
}