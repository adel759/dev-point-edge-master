﻿//Coded By Adel Rehan
$(function(){
    if (!$.sceditor) return;
    $.sceditor.defaultOptions.fonts += ',Tahoma';
    $.sceditor.defaultOptions.fonts += ',Droid Arabic Kufi';
    $.sceditor.defaultOptions.fonts += ',FontAwesome';
});
$(function(){
    $(function(){
        $('<div class="sceditor-group"><a class="sceditor-button sceditor-button-note" unselectable="on" title="Note"><div unselectable="on" style="cursor: pointer!important;opacity:1!important;background-image:url(http://a7la.pe.hu/bbcodes/note.png)">Note</div></a></div>').insertBefore('.sceditor-group:last');

        $('.sceditor-button-note').click(function(){
            $('#text_editor_textarea').sceditor("instance").insertText('<div class="note"><p>','</p></div>');
        });

        $('<a class="sceditor-button sceditor-button-warning" unselectable="on" title="Warning"><div unselectable="on" style="cursor: pointer!important;opacity:1!important;background-image:url(http://a7la.pe.hu/bbcodes/warning.png)">Warning</div></a>').insertAfter('.sceditor-button-note').click(function(){
            $('#text_editor_textarea').sceditor("instance").insertText('<div class="warning"><p>','</p></div>');
        });

        $('<a class="sceditor-button sceditor-button-information" unselectable="on" title="Information"><div unselectable="on" style="cursor: pointer!important;opacity:1!important;background-image:url(http://a7la.pe.hu/bbcodes/information.png)">Information</div></a>').insertAfter('.sceditor-button-warning').click(function(){
            $('#text_editor_textarea').sceditor("instance").insertText('<div class="information"><p>','</p></div>');
        });

        $('<a class="sceditor-button sceditor-button-download" unselectable="on" title="Download"><div unselectable="on" style="cursor: pointer!important;opacity:1!important;background-image:url(http://a7la.pe.hu/bbcodes/download.png)">Download</div></a>').insertAfter('.sceditor-button-information').click(function(){
            $('#text_editor_textarea').sceditor("instance").insertText('<div class="download"><p>','</p></div>');
        });

        $('<a class="sceditor-button sceditor-button-new" unselectable="on" title="New"><div unselectable="on" style="cursor: pointer!important;opacity:1!important;background-image:url(http://a7la.pe.hu/bbcodes/new.png)">New</div></a>').insertAfter('.sceditor-button-download').click(function(){
            $('#text_editor_textarea').sceditor("instance").insertText('<div class="new"><p>','</p></div>');
        });

        $('<a class="sceditor-button sceditor-button-solved" unselectable="on" title="Solved"><div unselectable="on" style="cursor: pointer!important;opacity:1!important;background-image:url(http://a7la.pe.hu/bbcodes/solved.png)">Solved</div></a>').insertAfter('.sceditor-button-new').click(function(){
            $('#text_editor_textarea').sceditor("instance").insertText('<div class="solved"><p>','</p></div>');
        });

        $('<a class="sceditor-button sceditor-button-hashtag" unselectable="on" title="Hashtag"><div unselectable="on" style="cursor: pointer!important;opacity:1!important;background-image:url(http://a7la.pe.hu/bbcodes/hashtag.png)">Hashtag</div></a>').insertAfter('.sceditor-button-solved').click(function(){
            $('#text_editor_textarea').sceditor("instance").insertText('<span class="tag">#','</span>');
        });

        $('<a class="sceditor-button sceditor-button-tagfriend" unselectable="on" title="Tag friend"><div unselectable="on" style="cursor: pointer!important;opacity:1!important;background-image:url(http://a7la.pe.hu/bbcodes/tag%20friend.png)">Tag friend</div></a>').insertAfter('.sceditor-button-hashtag').click(function(){
            $('#text_editor_textarea').sceditor("instance").insertText('<span class="tag_friend">@"','"</span>');
        });

        $('<a class="sceditor-button sceditor-button-blockquote" unselectable="on" title="Block Quote"><div unselectable="on" style="cursor: pointer!important;opacity:1!important;background-image:url(http://a7la.pe.hu/bbcodes/block%20quote.png)">Block Quote</div></a>').insertAfter('.sceditor-button-tagfriend').click(function(){
            $('#text_editor_textarea').sceditor("instance").insertText('<div class="quoteContainer"><div class="quote2">','</div></div>');
        });

        $('<a class="sceditor-button sceditor-button-blockquote2" unselectable="on" title="Block Quote 2"><div unselectable="on" style="cursor: pointer!important;opacity:1!important;background-image:url(http://a7la.pe.hu/bbcodes/block%20quote%202.png)">Block Quote 2</div></a>').insertAfter('.sceditor-button-blockquote').click(function(){
            $('#text_editor_textarea').sceditor("instance").insertText('<div class="quoteContainer2"><div>','</div></div>');
        });

        $('<a class="sceditor-button sceditor-button-headlineblock" unselectable="on" title="Headline Block"><div unselectable="on" style="cursor: pointer!important;opacity:1!important;background-image:url(http://a7la.pe.hu/bbcodes/headline%20block.png)">Headline Block</div></a>').insertAfter('.sceditor-button-blockquote2').click(function(){
            $('#text_editor_textarea').sceditor("instance").insertText('<h3 class="headlineblock">','</h3>');
        });

        $('.sceditor-button-source').click(function(){
            $('.sceditor-button-note').removeClass('disabled');
            $('.sceditor-button-warning').removeClass('disabled');
            $('.sceditor-button-information').removeClass('disabled');
            $('.sceditor-button-download').removeClass('disabled');
            $('.sceditor-button-new').removeClass('disabled');
            $('.sceditor-button-solved').removeClass('disabled');
            $('.sceditor-button-hashtag').removeClass('disabled');
            $('.sceditor-button-tagfriend').removeClass('disabled');
            $('.sceditor-button-blockquote').removeClass('disabled');
            $('.sceditor-button-blockquote2').removeClass('disabled');
            $('.sceditor-button-headlineblock').removeClass('disabled');
        });
    });
});
(function() {
            var config = {
                button_title : 'الوجوه الضاحكة',
                auto_close : false,
                async_load : true,

                emoji_size : 16, // 16, 36, or 72
                emoji_list : '\uD83D\uDE00 \uD83D\uDE01 \uD83D\uDE02 \uD83D\uDE03 \uD83D\uDE04 \uD83D\uDE05 \uD83D\uDE06 \uD83D\uDE09 \uD83D\uDE0A \uD83D\uDE0B \uD83D\uDE0E \uD83D\uDE0D \uD83D\uDE18 \uD83D\uDE17 \uD83D\uDE19 \uD83D\uDE1A \u263A\uFE0F \uD83D\uDE07 \uD83D\uDE10 \uD83D\uDE11 \uD83D\uDE36 \uD83D\uDE0F \uD83D\uDE23 \uD83D\uDE25 \uD83D\uDE2E \uD83D\uDE2F \uD83D\uDE2A \uD83D\uDE2B \uD83D\uDE34 \uD83D\uDE0C \uD83D\uDE1B \uD83D\uDE1C \uD83D\uDE1D \uD83D\uDE12 \uD83D\uDE13 \uD83D\uDE14 \uD83D\uDE15 \uD83D\uDE16 \uD83D\uDE37 \uD83D\uDE32 \uD83D\uDE1E \uD83D\uDE1F \uD83D\uDE24 \uD83D\uDE22 \uD83D\uDE2D \uD83D\uDE26 \uD83D\uDE27 \uD83D\uDE28 \uD83D\uDE29 \uD83D\uDE2C \uD83D\uDE30 \uD83D\uDE31 \uD83D\uDE33 \uD83D\uDE35 \uD83D\uDE21 \uD83D\uDE20 \uD83D\uDC7F \uD83D\uDE08 \uD83D\uDC66 \uD83D\uDC67 \uD83D\uDC68 \uD83D\uDC69 \uD83D\uDC74 \uD83D\uDC75 \uD83D\uDC76 \uD83D\uDC71 \uD83D\uDC6E \uD83D\uDC72 \uD83D\uDC73 \uD83D\uDC77 \uD83D\uDC78 \uD83D\uDC82 \uD83C\uDF85 \uD83D\uDC7C \uD83D\uDC6F \uD83D\uDC86 \uD83D\uDC87 \uD83D\uDC70 \uD83D\uDE4D \uD83D\uDE4E \uD83D\uDE45 \uD83D\uDE46 \uD83D\uDC81 \uD83D\uDE4B \uD83D\uDE47 \uD83D\uDE4C \uD83D\uDE4F \uD83D\uDC64 \uD83D\uDC65 \uD83D\uDEB6 \uD83C\uDFC3 \uD83D\uDC83 \uD83D\uDC8F \uD83D\uDC91 \uD83D\uDC6A \uD83D\uDC6B \uD83D\uDC6C \uD83D\uDC6D \uD83D\uDCAA \uD83D\uDC48 \uD83D\uDC49 \u261D\uFE0F \uD83D\uDC46 \uD83D\uDC47 \u270C\uFE0F \u270A \u270B \uD83D\uDC4A \uD83D\uDC4C \uD83D\uDC4D \uD83D\uDC4E \uD83D\uDC4B \uD83D\uDC4F \uD83D\uDC50 \uD83D\uDC85 \uD83D\uDC63 \uD83D\uDC40 \uD83D\uDC42 \uD83D\uDC43 \uD83D\uDC45 \uD83D\uDC44 \uD83D\uDC8B \uD83D\uDC98 \u2764\uFE0F \uD83D\uDC93 \uD83D\uDC94 \uD83D\uDC95 \uD83D\uDC96 \uD83D\uDC97 \uD83D\uDC99 \uD83D\uDC9A \uD83D\uDC9B \uD83D\uDC9C \uD83D\uDC9D \uD83D\uDC9E \uD83D\uDC9F \uD83D\uDC8C \uD83D\uDCA7 \uD83D\uDCA4 \uD83D\uDCA2 \uD83D\uDCA3 \uD83D\uDCA5 \uD83D\uDCA6 \uD83D\uDCA8 \uD83D\uDCAB \uD83D\uDCAC \uD83D\uDCAD \uD83D\uDC53 \uD83D\uDC54 \uD83D\uDC55 \uD83D\uDC56 \uD83D\uDC57 \uD83D\uDC58 \uD83D\uDC59 \uD83D\uDC5A \uD83D\uDC5B \uD83D\uDC5C \uD83D\uDC5D \uD83C\uDF92 \uD83D\uDC5E \uD83D\uDC5F \uD83D\uDC60 \uD83D\uDC61 \uD83D\uDC62 \uD83D\uDC51 \uD83D\uDC52 \uD83C\uDFA9 \uD83D\uDC84 \uD83D\uDC8D \uD83D\uDC8E \uD83D\uDC79 \uD83D\uDC7A \uD83D\uDC7B \uD83D\uDC80 \uD83D\uDC7D \uD83D\uDC7E \uD83D\uDCA9 \uD83D\uDC35 \uD83D\uDE48 \uD83D\uDE49 \uD83D\uDE4A \uD83D\uDC12 \uD83D\uDC36 \uD83D\uDC15 \uD83D\uDC29 \uD83D\uDC3A \uD83D\uDC31 \uD83D\uDE38 \uD83D\uDE39 \uD83D\uDE3A \uD83D\uDE3B \uD83D\uDE3C \uD83D\uDE3D \uD83D\uDE3E \uD83D\uDE3F \uD83D\uDE40 \uD83D\uDC08 \uD83D\uDC2F \uD83D\uDC05 \uD83D\uDC06 \uD83D\uDC34 \uD83D\uDC0E \uD83D\uDC2E \uD83D\uDC02 \uD83D\uDC03 \uD83D\uDC04 \uD83D\uDC37 \uD83D\uDC16 \uD83D\uDC17 \uD83D\uDC3D \uD83D\uDC0F \uD83D\uDC11 \uD83D\uDC10 \uD83D\uDC2A \uD83D\uDC2B \uD83D\uDC18 \uD83D\uDC2D \uD83D\uDC01 \uD83D\uDC00 \uD83D\uDC39 \uD83D\uDC30 \uD83D\uDC07 \uD83D\uDC3B \uD83D\uDC28 \uD83D\uDC3C \uD83D\uDC3E \uD83D\uDC14 \uD83D\uDC13 \uD83D\uDC23 \uD83D\uDC24 \uD83D\uDC25 \uD83D\uDC26 \uD83D\uDC27 \uD83D\uDC38 \uD83D\uDC0A \uD83D\uDC22 \uD83D\uDC0D \uD83D\uDC32 \uD83D\uDC09 \uD83D\uDC33 \uD83D\uDC0B \uD83D\uDC2C \uD83D\uDC1F \uD83D\uDC20 \uD83D\uDC21 \uD83D\uDC19 \uD83D\uDC1A \uD83D\uDC0C \uD83D\uDC1B \uD83D\uDC1C \uD83D\uDC1D \uD83D\uDC1E \uD83D\uDC90 \uD83C\uDF38 \uD83D\uDCAE \uD83C\uDF39 \uD83C\uDF3A \uD83C\uDF3B \uD83C\uDF3C \uD83C\uDF37 \uD83C\uDF31 \uD83C\uDF32 \uD83C\uDF33 \uD83C\uDF34 \uD83C\uDF35 \uD83C\uDF3E \uD83C\uDF3F \uD83C\uDF40 \uD83C\uDF41 \uD83C\uDF42 \uD83C\uDF43 \uD83C\uDF47 \uD83C\uDF48 \uD83C\uDF49 \uD83C\uDF4A \uD83C\uDF4B \uD83C\uDF4C \uD83C\uDF4D \uD83C\uDF4E \uD83C\uDF4F \uD83C\uDF50 \uD83C\uDF51 \uD83C\uDF52 \uD83C\uDF53 \uD83C\uDF45 \uD83C\uDF46 \uD83C\uDF3D \uD83C\uDF44 \uD83C\uDF30 \uD83C\uDF5E \uD83C\uDF56 \uD83C\uDF57 \uD83C\uDF54 \uD83C\uDF5F \uD83C\uDF55 \uD83C\uDF72 \uD83C\uDF71 \uD83C\uDF58 \uD83C\uDF59 \uD83C\uDF5A \uD83C\uDF5B \uD83C\uDF5C \uD83C\uDF5D \uD83C\uDF60 \uD83C\uDF62 \uD83C\uDF63 \uD83C\uDF64 \uD83C\uDF65 \uD83C\uDF61 \uD83C\uDF66 \uD83C\uDF67 \uD83C\uDF68 \uD83C\uDF69 \uD83C\uDF6A \uD83C\uDF82 \uD83C\uDF70 \uD83C\uDF6B \uD83C\uDF6C \uD83C\uDF6D \uD83C\uDF6E \uD83C\uDF6F \uD83C\uDF7C \u2615 \uD83C\uDF75 \uD83C\uDF76 \uD83C\uDF77 \uD83C\uDF78 \uD83C\uDF79 \uD83C\uDF7A \uD83C\uDF7B \uD83C\uDF74 \uD83C\uDF73 \uD83C\uDF0D \uD83C\uDF0E \uD83C\uDF0F \uD83C\uDF10 \uD83C\uDF0B \uD83D\uDDFB \uD83C\uDFE0 \uD83C\uDFE1 \u26EA \uD83C\uDFE2 \uD83C\uDFE3 \uD83C\uDFE4 \uD83C\uDFE5 \uD83C\uDFE6 \uD83C\uDFE8 \uD83C\uDFE9 \uD83C\uDFEA \uD83C\uDFEB \uD83C\uDFEC \uD83C\uDFED \uD83C\uDFEF \uD83C\uDFF0 \uD83D\uDC92 \uD83D\uDDFC \uD83D\uDDFD \uD83D\uDDFE \u26F2 \u26FA \uD83C\uDF01 \uD83C\uDF03 \uD83C\uDF04 \uD83C\uDF05 \uD83C\uDF06 \uD83C\uDF07 \uD83C\uDF09 \uD83C\uDF0A \u2668\uFE0F \uD83D\uDDFF \uD83C\uDF0C \uD83C\uDFA0 \uD83C\uDFA1 \uD83C\uDFA2 \uD83D\uDC88 \uD83C\uDFAA \uD83C\uDFAD \uD83C\uDFA8 \uD83C\uDFB0 \uD83D\uDE82 \uD83D\uDE83 \uD83D\uDE84 \uD83D\uDE85 \uD83D\uDE86 \uD83D\uDE87 \uD83D\uDE88 \uD83D\uDE89 \uD83D\uDE8A \uD83D\uDE9D \uD83D\uDE9E \uD83D\uDE8B \uD83D\uDE8C \uD83D\uDE8D \uD83D\uDE8E \uD83D\uDE8F \uD83D\uDE90 \uD83D\uDE91 \uD83D\uDE92 \uD83D\uDE93 \uD83D\uDE94 \uD83D\uDE95 \uD83D\uDE96 \uD83D\uDE97 \uD83D\uDE98 \uD83D\uDE99 \uD83D\uDE9A \uD83D\uDE9B \uD83D\uDE9C \uD83D\uDEB2 \uD83D\uDEB3 \u26FD \uD83D\uDEA8 \u2693 \uD83D\uDD31 \u26F5 \uD83D\uDEA3 \uD83D\uDEA4 \uD83D\uDEA2 \u2708\uFE0F \uD83D\uDCBA \uD83D\uDE81 \uD83D\uDE9F \uD83D\uDEA0 \uD83D\uDEA1 \uD83D\uDE80 \uD83C\uDFE7 \uD83D\uDEAE \uD83D\uDEA5 \uD83D\uDEA6 \uD83D\uDEA7 \uD83D\uDEAB \uD83D\uDEAD \uD83D\uDEAF \uD83D\uDEB0 \uD83D\uDEB1 \uD83D\uDEB7 \uD83D\uDEB8 \u267F \uD83D\uDEB9 \uD83D\uDEBA \uD83D\uDEBB \uD83D\uDEBC \uD83D\uDEBE \uD83D\uDEC2 \uD83D\uDEC3 \uD83D\uDEC4 \uD83D\uDEC5 \u26A0\uFE0F \u26D4 \uD83D\uDEAA \uD83D\uDEBD \uD83D\uDEBF \uD83D\uDEC0 \uD83D\uDEC1 \u231B \u23F3 \u231A \u23F0 \uD83D\uDD5B \uD83D\uDD67 \uD83D\uDD50 \uD83D\uDD5C \uD83D\uDD51 \uD83D\uDD5D \uD83D\uDD52 \uD83D\uDD5E \uD83D\uDD53 \uD83D\uDD5F \uD83D\uDD54 \uD83D\uDD60 \uD83D\uDD55 \uD83D\uDD61 \uD83D\uDD56 \uD83D\uDD62 \uD83D\uDD57 \uD83D\uDD63 \uD83D\uDD58 \uD83D\uDD64 \uD83D\uDD59 \uD83D\uDD65 \uD83D\uDD5A \uD83D\uDD66 \u2648 \u2649 \u264A \u264B \u264C \u264D \u264E \u264F \u2650 \u2651 \u2652 \u2653 \u26CE \uD83C\uDF11 \uD83C\uDF12 \uD83C\uDF13 \uD83C\uDF14 \uD83C\uDF15 \uD83C\uDF16 \uD83C\uDF17 \uD83C\uDF18 \uD83C\uDF19 \uD83C\uDF1A \uD83C\uDF1B \uD83C\uDF1C \u2600\uFE0F \uD83C\uDF1D \uD83C\uDF1E \u2601\uFE0F \u26C5 \uD83C\uDF00 \uD83C\uDF08 \uD83C\uDF02 \u2614 \u2744\uFE0F \u26C4 \uD83C\uDF1F \uD83C\uDF20 \uD83D\uDD25 \uD83C\uDF83 \uD83C\uDF84 \uD83C\uDF86 \uD83C\uDF87 \u2728 \uD83C\uDF88 \uD83C\uDF89 \uD83C\uDF8A \uD83C\uDF8B \uD83C\uDF8C \uD83C\uDF8D \uD83C\uDF8E \uD83C\uDF8F \uD83C\uDF90 \uD83C\uDF91 \uD83C\uDF93 \uD83C\uDFAF \uD83C\uDFB4 \uD83C\uDF80 \uD83C\uDF81 \uD83C\uDFAB \u26BD \u26BE \uD83C\uDFC0 \uD83C\uDFC8 \uD83C\uDFC9 \uD83C\uDFBE \uD83C\uDFB1 \uD83C\uDFB3 \u26F3 \uD83C\uDFA3 \uD83C\uDFBD \uD83C\uDFBF \uD83C\uDFC2 \uD83C\uDFC4 \uD83C\uDFC7 \uD83C\uDFCA \uD83D\uDEB4 \uD83D\uDEB5 \uD83C\uDFC6 \uD83C\uDFAE \uD83C\uDFB2 \u2660\uFE0F \u2665\uFE0F \u2666\uFE0F \u2663\uFE0F \uD83C\uDCCF \uD83C\uDC04 \uD83D\uDD07 \uD83D\uDD08 \uD83D\uDD09 \uD83D\uDD0A \uD83D\uDCE2 \uD83D\uDCE3 \uD83D\uDCEF \uD83D\uDD14 \uD83D\uDD15 \uD83D\uDD00 \uD83D\uDD01 \uD83D\uDD02 \u25B6\uFE0F \u23E9 \u25C0\uFE0F \u23EA \uD83D\uDD3C \u23EB \uD83D\uDD3D \u23EC \uD83C\uDFBC \uD83C\uDFB5 \uD83C\uDFB6 \uD83C\uDFA4 \uD83C\uDFA7 \uD83C\uDFB7 \uD83C\uDFB8 \uD83C\uDFB9 \uD83C\uDFBA \uD83C\uDFBB \uD83D\uDCFB \uD83D\uDCF1 \uD83D\uDCF3 \uD83D\uDCF4 \uD83D\uDCF2 \uD83D\uDCF5 \u260E\uFE0F \uD83D\uDCDE #\u20E3\uFE0F 0\u20E3\uFE0F 1\u20E3\uFE0F 2\u20E3\uFE0F 3\u20E3\uFE0F 4\u20E3\uFE0F 5\u20E3\uFE0F 6\u20E3\uFE0F 7\u20E3\uFE0F 8\u20E3\uFE0F 9\u20E3\uFE0F \uD83D\uDD1F \uD83D\uDCF6 \uD83D\uDCDF \uD83D\uDCE0 \uD83D\uDD0B \uD83D\uDD0C \uD83D\uDCBB \uD83D\uDCBD \uD83D\uDCBE \uD83D\uDCBF \uD83D\uDCC0 \uD83C\uDFA5 \uD83C\uDFA6 \uD83C\uDFAC \uD83D\uDCFA \uD83D\uDCF7 \uD83D\uDCF9 \uD83D\uDCFC \uD83D\uDD05 \uD83D\uDD06 \uD83D\uDD0D \uD83D\uDD0E \uD83D\uDD2C \uD83D\uDD2D \uD83D\uDCE1 \uD83D\uDCA1 \uD83D\uDD26 \uD83C\uDFEE \uD83D\uDCD4 \uD83D\uDCD5 \uD83D\uDCD6 \uD83D\uDCD7 \uD83D\uDCD8 \uD83D\uDCD9 \uD83D\uDCDA \uD83D\uDCD3 \uD83D\uDCD2 \uD83D\uDCC3 \uD83D\uDCDC \uD83D\uDCC4 \uD83D\uDCF0 \uD83D\uDCD1 \uD83D\uDD16 \uD83D\uDCB0 \uD83D\uDCB4 \uD83D\uDCB5 \uD83D\uDCB6 \uD83D\uDCB7 \uD83D\uDCB8 \uD83D\uDCB1 \uD83D\uDCB2 \uD83D\uDCB3 \uD83D\uDCB9 \u2709\uFE0F \uD83D\uDCE7 \uD83D\uDCE8 \uD83D\uDCE9 \uD83D\uDCE4 \uD83D\uDCE5 \uD83D\uDCE6 \uD83D\uDCEB \uD83D\uDCEA \uD83D\uDCEC \uD83D\uDCED \uD83D\uDCEE \u270F\uFE0F \u2712\uFE0F \uD83D\uDCDD \uD83D\uDCBC \uD83D\uDCC1 \uD83D\uDCC2 \uD83D\uDCC5 \uD83D\uDCC6 \uD83D\uDCC7 \uD83D\uDCC8 \uD83D\uDCC9 \uD83D\uDCCA \uD83D\uDCCB \uD83D\uDCCC \uD83D\uDCCD \uD83D\uDCCE \uD83D\uDCCF \uD83D\uDCD0 \uD83D\uDCDB \u2702\uFE0F \uD83D\uDD12 \uD83D\uDD13 \uD83D\uDD0F \uD83D\uDD10 \uD83D\uDD11 \uD83D\uDD28 \uD83D\uDD27 \uD83D\uDD29 \uD83D\uDD17 \uD83D\uDC89 \uD83D\uDC8A \uD83D\uDD2A \uD83D\uDD2B \uD83D\uDEAC \uD83C\uDFC1 \uD83D\uDEA9 \uD83C\uDDE8\uD83C\uDDF3 \uD83C\uDDEB\uD83C\uDDF7 \uD83C\uDDE9\uD83C\uDDEA \uD83C\uDDEE\uD83C\uDDF9 \uD83C\uDDEF\uD83C\uDDF5 \uD83C\uDDF7\uD83C\uDDFA \uD83C\uDDF0\uD83C\uDDF7 \uD83C\uDDEA\uD83C\uDDF8 \uD83C\uDDEC\uD83C\uDDE7 \uD83C\uDDFA\uD83C\uDDF8 \u2B06\uFE0F \u2197\uFE0F \u27A1\uFE0F \u2198\uFE0F \u2B07\uFE0F \u2199\uFE0F \u2B05\uFE0F \u2196\uFE0F \u2195\uFE0F \u2194\uFE0F \u21A9\uFE0F \u21AA\uFE0F \u2934\uFE0F \u2935\uFE0F \uD83D\uDD03 \uD83D\uDD04 \uD83D\uDD19 \uD83D\uDD1A \uD83D\uDD1B \uD83D\uDD1C \uD83D\uDD1D \uD83D\uDD30 \uD83D\uDD2E \uD83D\uDD2F \u267B\uFE0F \u26A1 \u2B50 \u2B55 \u2705 \u2611\uFE0F \u2714\uFE0F \u2716\uFE0F \u274C \u274E \u2795 \u2796 \u2797 \u27B0 \u27BF \u303D\uFE0F \u2733\uFE0F \u2734\uFE0F \u2747\uFE0F \u203C\uFE0F \u2049\uFE0F \u2753 \u2754 \u2755 \u2757 \u3030\uFE0F \u00A9\uFE0F \u00AE\uFE0F \u2122\uFE0F \uD83D\uDCAF \uD83D\uDD1E \uD83D\uDD20 \uD83D\uDD21 \uD83D\uDD22 \uD83D\uDD23 \uD83D\uDD24 \uD83C\uDD70\uFE0F \uD83C\uDD8E \uD83C\uDD71\uFE0F \uD83C\uDD91 \uD83C\uDD92 \uD83C\uDD93 \u2139\uFE0F \uD83C\uDD94 \u24C2\uFE0F \uD83C\uDD95 \uD83C\uDD96 \uD83C\uDD7E\uFE0F \uD83C\uDD97 \uD83C\uDD7F\uFE0F \uD83C\uDD98 \uD83C\uDD99 \uD83C\uDD9A \uD83C\uDE01 \uD83C\uDE02\uFE0F \uD83C\uDE37\uFE0F \uD83C\uDE36 \uD83C\uDE2F \uD83C\uDE50 \uD83C\uDE39 \uD83C\uDE1A \uD83C\uDE32 \uD83C\uDE51 \uD83C\uDE38 \uD83C\uDE34 \uD83C\uDE33 \u3297\uFE0F \u3299\uFE0F \uD83C\uDE3A \uD83C\uDE35 \u25AA\uFE0F \u25AB\uFE0F \u25FB\uFE0F \u25FC\uFE0F \u25FD \u25FE \u2B1B \u2B1C \uD83D\uDD36 \uD83D\uDD37 \uD83D\uDD38 \uD83D\uDD39 \uD83D\uDD3A \uD83D\uDD3B \uD83D\uDCA0 \uD83D\uDD18 \uD83D\uDD32 \uD83D\uDD33 \u26AA \u26AB \uD83D\uDD34 \uD83D\uDD35 \uE50A \uD83C\uDDE6 \uD83C\uDDE7 \uD83C\uDDE8 \uD83C\uDDE9 \uD83C\uDDEA \uD83C\uDDEB \uD83C\uDDEC \uD83C\uDDED \uD83C\uDDEE \uD83C\uDDEF \uD83C\uDDF0 \uD83C\uDDF1 \uD83C\uDDF2 \uD83C\uDDF3 \uD83C\uDDF4 \uD83C\uDDF5 \uD83C\uDDF6 \uD83C\uDDF7 \uD83C\uDDF8 \uD83C\uDDF9 \uD83C\uDDFA \uD83C\uDDFB \uD83C\uDDFC \uD83C\uDDFD \uD83C\uDDFE \uD83C\uDDFF'
            },

            script = document.createElement('SCRIPT');
            script.type = 'text/javascript';
            script.src = 'http://twemoji.maxcdn.com/twemoji.min.js';

            document.getElementsByTagName('HEAD')[0].appendChild(script);
            document.write('<style type="text/css">.sceditor-button-twemoji div{background:url(http://twemoji.maxcdn.com/16x16/1f600.png)!important}.sceditor-twemoji{width:220px;height:250px;overflow-y:auto}.sceditor-twemoji img{cursor:pointer;padding:3px}.sceditor-twemoji img:hover{opacity:.7}</style>');

            $(function(){
                if ($.sceditor) {

                    // create sceditor button and drop down
                    $.sceditor.command.set('twemoji', {
                        dropDown : function(editor, caller, callback) {

                            if (!fa_twemoji.element) {
                                fa_twemoji.element = document.createElement('DIV');
                                fa_twemoji.element.innerHTML = twemoji.parse(fa_twemoji.emoji_list, {
                                    size : fa_twemoji.emoji_size,
                                    attributes : function() {
                                        return {
                                            style : 'display:none;'
                                        };
                                    }
                                }).replace(/\s(?=<|$)/g, '');

                                // load handler for images to lighten the deployment of emoji
                                // it displays and loads one image at a time rather all at once which can make the browser unresponsive
                                if (fa_twemoji.async_load) {
                                    fa_twemoji.image = {
                                        collection : $('img', fa_twemoji.element),
                                        index : 0,
                                        timeout : [0, 6000], // timeout after 6000 attempts on 1 image

                                        load : window.setInterval(function() {
                                            if (fa_twemoji.image.collection[fa_twemoji.image.index].complete) {
                                                fa_twemoji.image.index++;

                                                if (fa_twemoji.image.collection[fa_twemoji.image.index]) {
                                                    fa_twemoji.image.collection[fa_twemoji.image.index].style.display = '';
                                                    fa_twemoji.image.timeout[0] = 0;
                                                } else {
                                                    window.clearInterval(fa_twemoji.image.load);
                                                    fa_twemoji.image.load = 'COMPLETE';
                                                }

                                            } else if (++fa_twemoji.image.timeout[0] > fa_twemoji.image.timeout[1]) {
                                                window.clearInterval(fa_twemoji.image.load);
                                                fa_twemoji.image.load = 'ERROR';
                                            }
                                        }, 10)
                                };

                                fa_twemoji.image.collection[fa_twemoji.image.index].style.display = ''; // start loading
                                } else {
                                    $('img', fa_twemoji.element).show();
                                }
                            }

                            $(fa_twemoji.element).click(function(e) {
                                var target = e.target;
                                if (target.tagName == 'IMG') {
                                    callback(target.src);
                                    fa_twemoji.auto_close && editor.closeDropDown(true);
                                }
                            });

                            editor.createDropDown(caller, 'twemoji', fa_twemoji.element);
                        },

                        // wysiwyg
                        exec : function(c) {
                            var e = this;
                            $.sceditor.command.get('twemoji').dropDown(e, c, function(icon) {
                                e.insert('&nbsp;[img]' + icon + '[/img]&nbsp;', '', true, true, true);
                            });
                        },

                        // source
                        txtExec : function(c) {
                            var e = this;
                            $.sceditor.command.get('twemoji').dropDown(e, c, function(icon) {
                                e.insert(' [img]' + icon + '[/img] ', '', true, true, true);
                            });
                        },

                        tooltip : fa_twemoji.button_title
                    });

                    toolbar = toolbar.replace(/date,/,'twemoji,date,'); // add the button to the toolbar
                }
            });

            if (!window.fa_twemoji) {
                window.fa_twemoji = config;
            }
        }());
$(function(){$(function(){

          if ($("#text_editor_textarea").length != 0) {
            $.sceditor.command.get('color')._menu  = function (editor, caller, callback) {
              var mColorBasic = [],
                html = $('<div />');

        // Lista de Colores

              mColorBasic["Black"] = "Black";
              mColorBasic["Sienna"] = "Sienna";
              mColorBasic["DarkOliveGreen"] = "DarkOliveGreen";
              mColorBasic["DarkGreen"] = "DarkGreen";
              mColorBasic["DarkSlateBlue"] = "DarkSlateBlue";
              mColorBasic["Navy"] = "Navy";
              mColorBasic["Indigo"] = "Indigo";
              mColorBasic["DarkSlateGray"] = "DarkSlateGray";

              mColorBasic["DarkRed"] = "DarkRed";
              mColorBasic["DarkOrange"] = "DarkOrange";
              mColorBasic["Olive"] = "Olive";
              mColorBasic["Green"] = "Green";
              mColorBasic["Teal"] = "Teal";
              mColorBasic["Blue"] = "Blue";
              mColorBasic["SlateGray"] = "SlateGray";
              mColorBasic["DimGray"] = "DimGray";

              mColorBasic["Red"] = "Red";
              mColorBasic["SandyBrown"] = "SandyBrown";
              mColorBasic["YellowGreen"] = "YellowGreen";
              mColorBasic["SeaGreen"] = "SeaGreen";
              mColorBasic["MediumTurquoise"] = "MediumTurquoise";
              mColorBasic["RoyalBlue"] = "RoyalBlue";
              mColorBasic["Purple"] = "Purple";
              mColorBasic["Gray"] = "Gray";

              mColorBasic["Magenta"] = "Magenta";
              mColorBasic["Orange"] = "Orange";
              mColorBasic["Yellow"] = "Yellow";
              mColorBasic["Lime"] = "Lime";
              mColorBasic["Cyan"] = "Cyan";
              mColorBasic["DeepSkyBlue"] = "DeepSkyBlue";
              mColorBasic["DarkOrchid"] = "DarkOrchid";
              mColorBasic["Silver"] = "Silver";

              mColorBasic["Pink"] = "Pink";
              mColorBasic["Wheat"] = "Wheat";
              mColorBasic["LemonChiffon"] = "LemonChiffon";
              mColorBasic["PaleGreen"] = "PaleGreen";
              mColorBasic["PaleTurquoise"] = "PaleTurquoise";
              mColorBasic["LightBlue"] = "LightBlue";
              mColorBasic["Plum"] = "Plum";
              mColorBasic["White"] = "White";

        // Fin de la lista de colores


             for(key in mColorBasic) html.append('<div class="color-option" title="' + key + '"><span color="' + mColorBasic[key] + '" style="background-color: ' + mColorBasic[key] + ' !important;"></span></div>');

              html.find('span').click(function(e) {
                callback($(this).attr('color'));
                editor.closeDropDown(true);
                e.preventDefault();
              });

              editor.createDropDown(caller, "color-picker", html);
            }
          }
})});
$(function() {
    if(window._userdata && _userdata.page_desktop) window.location = _userdata.page_desktop;
});
$(function() {
  if (_userdata.user_id == 1 && !my_getcookie('fae_update_alerted')) {

    $.get('https://raw.githubusercontent.com/adel759/dev-point-edge/master/javascripts/version-data.js', function(d) {
      var script = document.createElement('SCRIPT');
      script.type = 'text/javascript';
      script.text = d.replace(/forumactif_edge_version_data/, 'fae_github_version_data');
      document.body.appendChild(script);

      if (forumactif_edge_version_data.length < fae_github_version_data.length) {
        alert('An update has been found for Dev-Point Edge. When you\'re ready, please proceed to your DPE Control Panel and click "Check for updates" to begin the update process.');
      }

      my_setcookie('fae_update_alerted', '1');
    });

  }
});
//Coded By Adel Rehan
