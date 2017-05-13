// Standard send_to_editor replacer
function sendToEditor(h) {

	var ed, mce = typeof(tinymce) != 'undefined', qt = typeof(QTags) != 'undefined';

	if ( !wpActiveEditor ) {
		if ( mce && tinymce.activeEditor ) {
			ed = tinymce.activeEditor;
			wpActiveEditor = ed.id;
		} else if ( !qt ) {
			return false;
		}
	} else if ( mce ) {
		if ( tinymce.activeEditor && (tinymce.activeEditor.id == 'mce_fullscreen' || tinymce.activeEditor.id == 'wp_mce_fullscreen') )
			ed = tinymce.activeEditor;
		else
			ed = tinymce.get(wpActiveEditor);
	}

	if ( ed && !ed.isHidden() ) {
		// restore caret position on IE
		if ( tinymce.isIE && ed.windowManager.insertimagebookmark )
			ed.selection.moveToBookmark(ed.windowManager.insertimagebookmark);

		if ( h.indexOf('[caption') !== -1 ) {
			if ( ed.wpSetImgCaption )
				h = ed.wpSetImgCaption(h);
		} else if ( h.indexOf('[gallery') !== -1 ) {
			if ( ed.plugins.wpgallery )
				h = ed.plugins.wpgallery._do_gallery(h);
		} else if ( h.indexOf('[embed') === 0 ) {
			if ( ed.plugins.wordpress )
				h = ed.plugins.wordpress._setEmbed(h);
		}

		ed.execCommand('mceInsertContent', false, h);
	} else if ( qt ) {
		QTags.insertContent(h);
	} else {
		document.getElementById(wpActiveEditor).value += h;
	}

	try{tb_remove();}catch(e){};
}

// Media manager handler
var media_frame = null;
var media_link = '';
function showMediaManager(el, hideType) {
	"use strict";

	media_link = jQuery(el);
	// If the media frame already exists, reopen it.
	if ( media_frame ) {
		media_frame.open();
		return false;
	}

	// Create the media frame.
	media_frame = wp.media({
		// Set the title of the modal.
		title: media_link.data('choose'),
		// Multiple choise
		multiple: media_link.data('multiple') === true ? 'add' : false,
		// Customize the submit button.
		button: {
			// Set the text of the button.
			text: media_link.data('update'),
			// Tell the button not to close the modal, since we're
			// going to refresh the page when the image is selected.
			close: true
		}
	});

	// When an image is selected, run a callback.
	media_frame.on( 'select', function() {
		"use strict";
		// Grab the selected attachment.
		var field = jQuery("#"+media_link.data('linked-field')).eq(0);
		var attachment = '';
		if (media_link.data('multiple')==true) {
			media_frame.state().get('selection').map( function( att ) {
				attachment += (attachment ? "\n" : "") + att.toJSON().url;
			});
			var val = field.val();
			attachment = val + (val ? "\n" : '') + attachment;
		} else {
			attachment = media_frame.state().get('selection').first().toJSON().url;
		}
		field.val(attachment);
		field.trigger('change');
	});

	// Finally, open the modal.
	media_frame.open();
	return false;
}
jQuery('input#inherit_header').change(function(){
	var chkd = jQuery(this).get(0).checked;
	if(chkd === false) {
		jQuery('#wp-tiny-wrap').next().hide();
	}
	else {
		jQuery('#wp-tiny-wrap').next().show();
	}
});