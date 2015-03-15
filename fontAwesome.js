$(function() {

    //Wait for Pinegrow to wake-up
    $('body').one('pinegrow-ready', function(e, pinegrow) {

        //Create new Pinegrow framework object
        var f = new PgFramework('fontAwesome', 'fontAwesome');

        //This will prevent activating multiple versions of this framework being loaded
        f.type = 'fontAwesome';
        f.allow_single_type = true;
        f.user_lib = true;

        var comp_comp1 = new PgComponentType('comp1', 'fa');
        comp_comp1.code = '<span class="fa">Icon</span>';
        comp_comp1.parent_selector = null;
        f.addComponentType(comp_comp1);

        var comp_comp2 = new PgComponentType('comp2', 'glass');
        comp_comp2.code = '<span class="fa fa-glass"></span>';
        comp_comp2.parent_selector = null;
        f.addComponentType(comp_comp2);

        var comp_comp3 = new PgComponentType('comp3', 'music');
        comp_comp3.code = '<span class="fa fa-music"></span>';
        comp_comp3.parent_selector = null;
        f.addComponentType(comp_comp3);

        var comp_comp4 = new PgComponentType('comp4', 'search');
        comp_comp4.code = '<span class="fa fa-search"></span>';
        comp_comp4.parent_selector = null;
        f.addComponentType(comp_comp4);

        var comp_comp5 = new PgComponentType('comp5', 'envelope-o');
        comp_comp5.code = '<span class="fa fa-envelope-o"></span>';
        comp_comp5.parent_selector = null;
        f.addComponentType(comp_comp5);

        var comp_comp6 = new PgComponentType('comp6', 'heart');
        comp_comp6.code = '<span class="fa fa-heart"></span>';
        comp_comp6.parent_selector = null;
        f.addComponentType(comp_comp6);

        var comp_comp7 = new PgComponentType('comp7', 'star');
        comp_comp7.code = '<span class="fa fa-star"></span>';
        comp_comp7.parent_selector = null;
        f.addComponentType(comp_comp7);

        var comp_comp8 = new PgComponentType('comp8', 'star-o');
        comp_comp8.code = '<span class="fa fa-star-o"></span>';
        comp_comp8.parent_selector = null;
        f.addComponentType(comp_comp8);

        var comp_comp9 = new PgComponentType('comp9', 'user');
        comp_comp9.code = '<span class="fa fa-user"></span>';
        comp_comp9.parent_selector = null;
        f.addComponentType(comp_comp9);

        var comp_comp10 = new PgComponentType('comp10', 'film');
        comp_comp10.code = '<span class="fa fa-film"></span>';
        comp_comp10.parent_selector = null;
        f.addComponentType(comp_comp10);

        var comp_comp11 = new PgComponentType('comp11', 'th-large');
        comp_comp11.code = '<span class="fa fa-th-large"></span>';
        comp_comp11.parent_selector = null;
        f.addComponentType(comp_comp11);

        var comp_comp12 = new PgComponentType('comp12', 'th');
        comp_comp12.code = '<span class="fa fa-th"></span>';
        comp_comp12.parent_selector = null;
        f.addComponentType(comp_comp12);

        var comp_comp13 = new PgComponentType('comp13', 'th-list');
        comp_comp13.code = '<span class="fa fa-th-list"></span>';
        comp_comp13.parent_selector = null;
        f.addComponentType(comp_comp13);

        var comp_comp14 = new PgComponentType('comp14', 'check');
        comp_comp14.code = '<span class="fa fa-check"></span>';
        comp_comp14.parent_selector = null;
        f.addComponentType(comp_comp14);

        var comp_comp15 = new PgComponentType('comp15', 'remove');
        comp_comp15.code = '<span class="fa fa-remove"></span>';
        comp_comp15.parent_selector = null;
        f.addComponentType(comp_comp15);

        var comp_comp16 = new PgComponentType('comp16', 'close');
        comp_comp16.code = '<span class="fa fa-close"></span>';
        comp_comp16.parent_selector = null;
        f.addComponentType(comp_comp16);

        var comp_comp17 = new PgComponentType('comp17', 'times');
        comp_comp17.code = '<span class="fa fa-times"></span>';
        comp_comp17.parent_selector = null;
        f.addComponentType(comp_comp17);

        var comp_comp18 = new PgComponentType('comp18', 'search-plus');
        comp_comp18.code = '<span class="fa fa-search-plus"></span>';
        comp_comp18.parent_selector = null;
        f.addComponentType(comp_comp18);

        var comp_comp19 = new PgComponentType('comp19', 'search-minus');
        comp_comp19.code = '<span class="fa fa-search-minus"></span>';
        comp_comp19.parent_selector = null;
        f.addComponentType(comp_comp19);

        var comp_comp20 = new PgComponentType('comp20', 'power-off');
        comp_comp20.code = '<span class="fa fa-power-off"></span>';
        comp_comp20.parent_selector = null;
        f.addComponentType(comp_comp20);

        var comp_comp21 = new PgComponentType('comp21', 'signal');
        comp_comp21.code = '<span class="fa fa-signal"></span>';
        comp_comp21.parent_selector = null;
        f.addComponentType(comp_comp21);

        var comp_comp22 = new PgComponentType('comp22', 'gear');
        comp_comp22.code = '<span class="fa fa-gear"></span>';
        comp_comp22.parent_selector = null;
        f.addComponentType(comp_comp22);

        var comp_comp23 = new PgComponentType('comp23', 'cog');
        comp_comp23.code = '<span class="fa fa-cog"></span>';
        comp_comp23.parent_selector = null;
        f.addComponentType(comp_comp23);

        var comp_comp24 = new PgComponentType('comp24', 'trash-o');
        comp_comp24.code = '<span class="fa fa-trash-o"></span>';
        comp_comp24.parent_selector = null;
        f.addComponentType(comp_comp24);

        var comp_comp25 = new PgComponentType('comp25', 'home');
        comp_comp25.code = '<span class="fa fa-home"></span>';
        comp_comp25.parent_selector = null;
        f.addComponentType(comp_comp25);

        var comp_comp26 = new PgComponentType('comp26', 'file-o');
        comp_comp26.code = '<span class="fa fa-file-o"></span>';
        comp_comp26.parent_selector = null;
        f.addComponentType(comp_comp26);

        var comp_comp27 = new PgComponentType('comp27', 'clock-o');
        comp_comp27.code = '<span class="fa fa-clock-o"></span>';
        comp_comp27.parent_selector = null;
        f.addComponentType(comp_comp27);

        var comp_comp28 = new PgComponentType('comp28', 'road');
        comp_comp28.code = '<span class="fa fa-road"></span>';
        comp_comp28.parent_selector = null;
        f.addComponentType(comp_comp28);

        var comp_comp29 = new PgComponentType('comp29', 'download');
        comp_comp29.code = '<span class="fa fa-download"></span>';
        comp_comp29.parent_selector = null;
        f.addComponentType(comp_comp29);

        var comp_comp30 = new PgComponentType('comp30', 'arrow-circle-o-down');
        comp_comp30.code = '<span class="fa fa-arrow-circle-o-down"></span>';
        comp_comp30.parent_selector = null;
        f.addComponentType(comp_comp30);

        var comp_comp31 = new PgComponentType('comp31', 'arrow-circle-o-up');
        comp_comp31.code = '<span class="fa fa-arrow-circle-o-up"></span>';
        comp_comp31.parent_selector = null;
        f.addComponentType(comp_comp31);

        var comp_comp32 = new PgComponentType('comp32', 'inbox');
        comp_comp32.code = '<span class="fa fa-inbox"></span>';
        comp_comp32.parent_selector = null;
        f.addComponentType(comp_comp32);

        var comp_comp33 = new PgComponentType('comp33', 'play-circle-o');
        comp_comp33.code = '<span class="fa fa-play-circle-o"></span>';
        comp_comp33.parent_selector = null;
        f.addComponentType(comp_comp33);

        var comp_comp34 = new PgComponentType('comp34', 'rotate-right');
        comp_comp34.code = '<span class="fa fa-rotate-right"></span>';
        comp_comp34.parent_selector = null;
        f.addComponentType(comp_comp34);

        var comp_comp35 = new PgComponentType('comp35', 'repeat');
        comp_comp35.code = '<span class="fa fa-repeat"></span>';
        comp_comp35.parent_selector = null;
        f.addComponentType(comp_comp35);

        var comp_comp36 = new PgComponentType('comp36', 'refresh');
        comp_comp36.code = '<span class="fa fa-refresh"></span>';
        comp_comp36.parent_selector = null;
        f.addComponentType(comp_comp36);

        var comp_comp37 = new PgComponentType('comp37', 'list-alt');
        comp_comp37.code = '<span class="fa fa-list-alt"></span>';
        comp_comp37.parent_selector = null;
        f.addComponentType(comp_comp37);

        var comp_comp38 = new PgComponentType('comp38', 'lock');
        comp_comp38.code = '<span class="fa fa-lock"></span>';
        comp_comp38.parent_selector = null;
        f.addComponentType(comp_comp38);

        var comp_comp39 = new PgComponentType('comp39', 'flag');
        comp_comp39.code = '<span class="fa fa-flag"></span>';
        comp_comp39.parent_selector = null;
        f.addComponentType(comp_comp39);

        var comp_comp40 = new PgComponentType('comp40', 'headphones');
        comp_comp40.code = '<span class="fa fa-headphones"></span>';
        comp_comp40.parent_selector = null;
        f.addComponentType(comp_comp40);

        var comp_comp41 = new PgComponentType('comp41', 'volume-off');
        comp_comp41.code = '<span class="fa fa-volume-off"></span>';
        comp_comp41.parent_selector = null;
        f.addComponentType(comp_comp41);

        var comp_comp42 = new PgComponentType('comp42', 'volume-down');
        comp_comp42.code = '<span class="fa fa-volume-down"></span>';
        comp_comp42.parent_selector = null;
        f.addComponentType(comp_comp42);

        var comp_comp43 = new PgComponentType('comp43', 'volume-up');
        comp_comp43.code = '<span class="fa fa-volume-up"></span>';
        comp_comp43.parent_selector = null;
        f.addComponentType(comp_comp43);

        var comp_comp44 = new PgComponentType('comp44', 'qrcode');
        comp_comp44.code = '<span class="fa fa-qrcode"></span>';
        comp_comp44.parent_selector = null;
        f.addComponentType(comp_comp44);

        var comp_comp45 = new PgComponentType('comp45', 'barcode');
        comp_comp45.code = '<span class="fa fa-barcode"></span>';
        comp_comp45.parent_selector = null;
        f.addComponentType(comp_comp45);

        var comp_comp46 = new PgComponentType('comp46', 'tag');
        comp_comp46.code = '<span class="fa fa-tag"></span>';
        comp_comp46.parent_selector = null;
        f.addComponentType(comp_comp46);

        var comp_comp47 = new PgComponentType('comp47', 'tags');
        comp_comp47.code = '<span class="fa fa-tags"></span>';
        comp_comp47.parent_selector = null;
        f.addComponentType(comp_comp47);

        var comp_comp48 = new PgComponentType('comp48', 'book');
        comp_comp48.code = '<span class="fa fa-book"></span>';
        comp_comp48.parent_selector = null;
        f.addComponentType(comp_comp48);

        var comp_comp49 = new PgComponentType('comp49', 'bookmark');
        comp_comp49.code = '<span class="fa fa-bookmark"></span>';
        comp_comp49.parent_selector = null;
        f.addComponentType(comp_comp49);

        var comp_comp50 = new PgComponentType('comp50', 'print');
        comp_comp50.code = '<span class="fa fa-print"></span>';
        comp_comp50.parent_selector = null;
        f.addComponentType(comp_comp50);

        var comp_comp51 = new PgComponentType('comp51', 'camera');
        comp_comp51.code = '<span class="fa fa-camera"></span>';
        comp_comp51.parent_selector = null;
        f.addComponentType(comp_comp51);

        var comp_comp52 = new PgComponentType('comp52', 'font');
        comp_comp52.code = '<span class="fa fa-font"></span>';
        comp_comp52.parent_selector = null;
        f.addComponentType(comp_comp52);

        var comp_comp53 = new PgComponentType('comp53', 'bold');
        comp_comp53.code = '<span class="fa fa-bold"></span>';
        comp_comp53.parent_selector = null;
        f.addComponentType(comp_comp53);

        var comp_comp54 = new PgComponentType('comp54', 'italic');
        comp_comp54.code = '<span class="fa fa-italic"></span>';
        comp_comp54.parent_selector = null;
        f.addComponentType(comp_comp54);

        var comp_comp55 = new PgComponentType('comp55', 'text-height');
        comp_comp55.code = '<span class="fa fa-text-height"></span>';
        comp_comp55.parent_selector = null;
        f.addComponentType(comp_comp55);

        var comp_comp56 = new PgComponentType('comp56', 'text-width');
        comp_comp56.code = '<span class="fa fa-text-width"></span>';
        comp_comp56.parent_selector = null;
        f.addComponentType(comp_comp56);

        var comp_comp57 = new PgComponentType('comp57', 'align-left');
        comp_comp57.code = '<span class="fa fa-align-left"></span>';
        comp_comp57.parent_selector = null;
        f.addComponentType(comp_comp57);

        var comp_comp58 = new PgComponentType('comp58', 'align-center');
        comp_comp58.code = '<span class="fa fa-align-center"></span>';
        comp_comp58.parent_selector = null;
        f.addComponentType(comp_comp58);

        var comp_comp59 = new PgComponentType('comp59', 'align-right');
        comp_comp59.code = '<span class="fa fa-align-right"></span>';
        comp_comp59.parent_selector = null;
        f.addComponentType(comp_comp59);

        var comp_comp60 = new PgComponentType('comp60', 'align-justify');
        comp_comp60.code = '<span class="fa fa-align-justify"></span>';
        comp_comp60.parent_selector = null;
        f.addComponentType(comp_comp60);

        var comp_comp61 = new PgComponentType('comp61', 'list');
        comp_comp61.code = '<span class="fa fa-list"></span>';
        comp_comp61.parent_selector = null;
        f.addComponentType(comp_comp61);

        var comp_comp62 = new PgComponentType('comp62', 'dedent');
        comp_comp62.code = '<span class="fa fa-dedent"></span>';
        comp_comp62.parent_selector = null;
        f.addComponentType(comp_comp62);

        var comp_comp63 = new PgComponentType('comp63', 'outdent');
        comp_comp63.code = '<span class="fa fa-outdent"></span>';
        comp_comp63.parent_selector = null;
        f.addComponentType(comp_comp63);

        var comp_comp64 = new PgComponentType('comp64', 'indent');
        comp_comp64.code = '<span class="fa fa-indent"></span>';
        comp_comp64.parent_selector = null;
        f.addComponentType(comp_comp64);

        var comp_comp65 = new PgComponentType('comp65', 'video-camera');
        comp_comp65.code = '<span class="fa fa-video-camera"></span>';
        comp_comp65.parent_selector = null;
        f.addComponentType(comp_comp65);

        var comp_comp66 = new PgComponentType('comp66', 'photo');
        comp_comp66.code = '<span class="fa fa-photo"></span>';
        comp_comp66.parent_selector = null;
        f.addComponentType(comp_comp66);

        var comp_comp67 = new PgComponentType('comp67', 'image');
        comp_comp67.code = '<span class="fa fa-image"></span>';
        comp_comp67.parent_selector = null;
        f.addComponentType(comp_comp67);

        var comp_comp68 = new PgComponentType('comp68', 'picture-o');
        comp_comp68.code = '<span class="fa fa-picture-o"></span>';
        comp_comp68.parent_selector = null;
        f.addComponentType(comp_comp68);

        var comp_comp69 = new PgComponentType('comp69', 'pencil');
        comp_comp69.code = '<span class="fa fa-pencil"></span>';
        comp_comp69.parent_selector = null;
        f.addComponentType(comp_comp69);

        var comp_comp70 = new PgComponentType('comp70', 'map-marker');
        comp_comp70.code = '<span class="fa fa-map-marker"></span>';
        comp_comp70.parent_selector = null;
        f.addComponentType(comp_comp70);

        var comp_comp71 = new PgComponentType('comp71', 'adjust');
        comp_comp71.code = '<span class="fa fa-adjust"></span>';
        comp_comp71.parent_selector = null;
        f.addComponentType(comp_comp71);

        var comp_comp72 = new PgComponentType('comp72', 'tint');
        comp_comp72.code = '<span class="fa fa-tint"></span>';
        comp_comp72.parent_selector = null;
        f.addComponentType(comp_comp72);

        var comp_comp73 = new PgComponentType('comp73', 'edit');
        comp_comp73.code = '<span class="fa fa-edit"></span>';
        comp_comp73.parent_selector = null;
        f.addComponentType(comp_comp73);

        var comp_comp74 = new PgComponentType('comp74', 'pencil-square-o');
        comp_comp74.code = '<span class="fa fa-pencil-square-o"></span>';
        comp_comp74.parent_selector = null;
        f.addComponentType(comp_comp74);

        var comp_comp75 = new PgComponentType('comp75', 'share-square-o');
        comp_comp75.code = '<span class="fa fa-share-square-o"></span>';
        comp_comp75.parent_selector = null;
        f.addComponentType(comp_comp75);

        var comp_comp76 = new PgComponentType('comp76', 'check-square-o');
        comp_comp76.code = '<span class="fa fa-check-square-o"></span>';
        comp_comp76.parent_selector = null;
        f.addComponentType(comp_comp76);

        var comp_comp77 = new PgComponentType('comp77', 'arrows');
        comp_comp77.code = '<span class="fa fa-arrows"></span>';
        comp_comp77.parent_selector = null;
        f.addComponentType(comp_comp77);

        var comp_comp78 = new PgComponentType('comp78', 'step-backward');
        comp_comp78.code = '<span class="fa fa-step-backward"></span>';
        comp_comp78.parent_selector = null;
        f.addComponentType(comp_comp78);

        var comp_comp79 = new PgComponentType('comp79', 'fast-backward');
        comp_comp79.code = '<span class="fa fa-fast-backward"></span>';
        comp_comp79.parent_selector = null;
        f.addComponentType(comp_comp79);

        var comp_comp80 = new PgComponentType('comp80', 'backward');
        comp_comp80.code = '<span class="fa fa-backward"></span>';
        comp_comp80.parent_selector = null;
        f.addComponentType(comp_comp80);

        var comp_comp81 = new PgComponentType('comp81', 'play');
        comp_comp81.code = '<span class="fa fa-play"></span>';
        comp_comp81.parent_selector = null;
        f.addComponentType(comp_comp81);

        var comp_comp82 = new PgComponentType('comp82', 'pause');
        comp_comp82.code = '<span class="fa fa-pause"></span>';
        comp_comp82.parent_selector = null;
        f.addComponentType(comp_comp82);

        var comp_comp83 = new PgComponentType('comp83', 'stop');
        comp_comp83.code = '<span class="fa fa-stop"></span>';
        comp_comp83.parent_selector = null;
        f.addComponentType(comp_comp83);

        var comp_comp84 = new PgComponentType('comp84', 'forward');
        comp_comp84.code = '<span class="fa fa-forward"></span>';
        comp_comp84.parent_selector = null;
        f.addComponentType(comp_comp84);

        var comp_comp85 = new PgComponentType('comp85', 'fast-forward');
        comp_comp85.code = '<span class="fa fa-fast-forward"></span>';
        comp_comp85.parent_selector = null;
        f.addComponentType(comp_comp85);

        var comp_comp86 = new PgComponentType('comp86', 'step-forward');
        comp_comp86.code = '<span class="fa fa-step-forward"></span>';
        comp_comp86.parent_selector = null;
        f.addComponentType(comp_comp86);

        var comp_comp87 = new PgComponentType('comp87', 'eject');
        comp_comp87.code = '<span class="fa fa-eject"></span>';
        comp_comp87.parent_selector = null;
        f.addComponentType(comp_comp87);

        var comp_comp88 = new PgComponentType('comp88', 'chevron-left');
        comp_comp88.code = '<span class="fa fa-chevron-left"></span>';
        comp_comp88.parent_selector = null;
        f.addComponentType(comp_comp88);

        var comp_comp89 = new PgComponentType('comp89', 'chevron-right');
        comp_comp89.code = '<span class="fa fa-chevron-right"></span>';
        comp_comp89.parent_selector = null;
        f.addComponentType(comp_comp89);

        var comp_comp90 = new PgComponentType('comp90', 'plus-circle');
        comp_comp90.code = '<span class="fa fa-plus-circle"></span>';
        comp_comp90.parent_selector = null;
        f.addComponentType(comp_comp90);

        var comp_comp91 = new PgComponentType('comp91', 'minus-circle');
        comp_comp91.code = '<span class="fa fa-minus-circle"></span>';
        comp_comp91.parent_selector = null;
        f.addComponentType(comp_comp91);

        var comp_comp92 = new PgComponentType('comp92', 'times-circle');
        comp_comp92.code = '<span class="fa fa-times-circle"></span>';
        comp_comp92.parent_selector = null;
        f.addComponentType(comp_comp92);

        var comp_comp93 = new PgComponentType('comp93', 'check-circle');
        comp_comp93.code = '<span class="fa fa-check-circle"></span>';
        comp_comp93.parent_selector = null;
        f.addComponentType(comp_comp93);

        var comp_comp94 = new PgComponentType('comp94', 'question-circle');
        comp_comp94.code = '<span class="fa fa-question-circle"></span>';
        comp_comp94.parent_selector = null;
        f.addComponentType(comp_comp94);

        var comp_comp95 = new PgComponentType('comp95', 'info-circle');
        comp_comp95.code = '<span class="fa fa-info-circle"></span>';
        comp_comp95.parent_selector = null;
        f.addComponentType(comp_comp95);

        var comp_comp96 = new PgComponentType('comp96', 'crosshairs');
        comp_comp96.code = '<span class="fa fa-crosshairs"></span>';
        comp_comp96.parent_selector = null;
        f.addComponentType(comp_comp96);

        var comp_comp97 = new PgComponentType('comp97', 'times-circle-o');
        comp_comp97.code = '<span class="fa fa-times-circle-o"></span>';
        comp_comp97.parent_selector = null;
        f.addComponentType(comp_comp97);

        var comp_comp98 = new PgComponentType('comp98', 'check-circle-o');
        comp_comp98.code = '<span class="fa fa-check-circle-o"></span>';
        comp_comp98.parent_selector = null;
        f.addComponentType(comp_comp98);

        var comp_comp99 = new PgComponentType('comp99', 'ban');
        comp_comp99.code = '<span class="fa fa-ban"></span>';
        comp_comp99.parent_selector = null;
        f.addComponentType(comp_comp99);

        var comp_comp100 = new PgComponentType('comp100', 'arrow-left');
        comp_comp100.code = '<span class="fa fa-arrow-left"></span>';
        comp_comp100.parent_selector = null;
        f.addComponentType(comp_comp100);

        var comp_comp101 = new PgComponentType('comp101', 'arrow-right');
        comp_comp101.code = '<span class="fa fa-arrow-right"></span>';
        comp_comp101.parent_selector = null;
        f.addComponentType(comp_comp101);

        var comp_comp102 = new PgComponentType('comp102', 'arrow-up');
        comp_comp102.code = '<span class="fa fa-arrow-up"></span>';
        comp_comp102.parent_selector = null;
        f.addComponentType(comp_comp102);

        var comp_comp103 = new PgComponentType('comp103', 'arrow-down');
        comp_comp103.code = '<span class="fa fa-arrow-down"></span>';
        comp_comp103.parent_selector = null;
        f.addComponentType(comp_comp103);

        var comp_comp104 = new PgComponentType('comp104', 'mail-forward');
        comp_comp104.code = '<span class="fa fa-mail-forward"></span>';
        comp_comp104.parent_selector = null;
        f.addComponentType(comp_comp104);

        var comp_comp105 = new PgComponentType('comp105', 'share');
        comp_comp105.code = '<span class="fa fa-share"></span>';
        comp_comp105.parent_selector = null;
        f.addComponentType(comp_comp105);

        var comp_comp106 = new PgComponentType('comp106', 'expand');
        comp_comp106.code = '<span class="fa fa-expand"></span>';
        comp_comp106.parent_selector = null;
        f.addComponentType(comp_comp106);

        var comp_comp107 = new PgComponentType('comp107', 'compress');
        comp_comp107.code = '<span class="fa fa-compress"></span>';
        comp_comp107.parent_selector = null;
        f.addComponentType(comp_comp107);

        var comp_comp108 = new PgComponentType('comp108', 'plus');
        comp_comp108.code = '<span class="fa fa-plus"></span>';
        comp_comp108.parent_selector = null;
        f.addComponentType(comp_comp108);

        var comp_comp109 = new PgComponentType('comp109', 'minus');
        comp_comp109.code = '<span class="fa fa-minus"></span>';
        comp_comp109.parent_selector = null;
        f.addComponentType(comp_comp109);

        var comp_comp110 = new PgComponentType('comp110', 'asterisk');
        comp_comp110.code = '<span class="fa fa-asterisk"></span>';
        comp_comp110.parent_selector = null;
        f.addComponentType(comp_comp110);

        var comp_comp111 = new PgComponentType('comp111', 'exclamation-circle');
        comp_comp111.code = '<span class="fa fa-exclamation-circle"></span>';
        comp_comp111.parent_selector = null;
        f.addComponentType(comp_comp111);

        var comp_comp112 = new PgComponentType('comp112', 'gift');
        comp_comp112.code = '<span class="fa fa-gift"></span>';
        comp_comp112.parent_selector = null;
        f.addComponentType(comp_comp112);

        var comp_comp113 = new PgComponentType('comp113', 'leaf');
        comp_comp113.code = '<span class="fa fa-leaf"></span>';
        comp_comp113.parent_selector = null;
        f.addComponentType(comp_comp113);

        var comp_comp114 = new PgComponentType('comp114', 'fire');
        comp_comp114.code = '<span class="fa fa-fire"></span>';
        comp_comp114.parent_selector = null;
        f.addComponentType(comp_comp114);

        var comp_comp115 = new PgComponentType('comp115', 'eye');
        comp_comp115.code = '<span class="fa fa-eye"></span>';
        comp_comp115.parent_selector = null;
        f.addComponentType(comp_comp115);

        var comp_comp116 = new PgComponentType('comp116', 'eye-slash');
        comp_comp116.code = '<span class="fa fa-eye-slash"></span>';
        comp_comp116.parent_selector = null;
        f.addComponentType(comp_comp116);

        var comp_comp117 = new PgComponentType('comp117', 'warning');
        comp_comp117.code = '<span class="fa fa-warning"></span>';
        comp_comp117.parent_selector = null;
        f.addComponentType(comp_comp117);

        var comp_comp118 = new PgComponentType('comp118', 'exclamation-triangle');
        comp_comp118.code = '<span class="fa fa-exclamation-triangle"></span>';
        comp_comp118.parent_selector = null;
        f.addComponentType(comp_comp118);

        var comp_comp119 = new PgComponentType('comp119', 'plane');
        comp_comp119.code = '<span class="fa fa-plane"></span>';
        comp_comp119.parent_selector = null;
        f.addComponentType(comp_comp119);

        var comp_comp120 = new PgComponentType('comp120', 'calendar');
        comp_comp120.code = '<span class="fa fa-calendar"></span>';
        comp_comp120.parent_selector = null;
        f.addComponentType(comp_comp120);

        var comp_comp121 = new PgComponentType('comp121', 'random');
        comp_comp121.code = '<span class="fa fa-random"></span>';
        comp_comp121.parent_selector = null;
        f.addComponentType(comp_comp121);

        var comp_comp122 = new PgComponentType('comp122', 'comment');
        comp_comp122.code = '<span class="fa fa-comment"></span>';
        comp_comp122.parent_selector = null;
        f.addComponentType(comp_comp122);

        var comp_comp123 = new PgComponentType('comp123', 'magnet');
        comp_comp123.code = '<span class="fa fa-magnet"></span>';
        comp_comp123.parent_selector = null;
        f.addComponentType(comp_comp123);

        var comp_comp124 = new PgComponentType('comp124', 'chevron-up');
        comp_comp124.code = '<span class="fa fa-chevron-up"></span>';
        comp_comp124.parent_selector = null;
        f.addComponentType(comp_comp124);

        var comp_comp125 = new PgComponentType('comp125', 'chevron-down');
        comp_comp125.code = '<span class="fa fa-chevron-down"></span>';
        comp_comp125.parent_selector = null;
        f.addComponentType(comp_comp125);

        var comp_comp126 = new PgComponentType('comp126', 'retweet');
        comp_comp126.code = '<span class="fa fa-retweet"></span>';
        comp_comp126.parent_selector = null;
        f.addComponentType(comp_comp126);

        var comp_comp127 = new PgComponentType('comp127', 'shopping-cart');
        comp_comp127.code = '<span class="fa fa-shopping-cart"></span>';
        comp_comp127.parent_selector = null;
        f.addComponentType(comp_comp127);

        var comp_comp128 = new PgComponentType('comp128', 'folder');
        comp_comp128.code = '<span class="fa fa-folder"></span>';
        comp_comp128.parent_selector = null;
        f.addComponentType(comp_comp128);

        var comp_comp129 = new PgComponentType('comp129', 'folder-open');
        comp_comp129.code = '<span class="fa fa-folder-open"></span>';
        comp_comp129.parent_selector = null;
        f.addComponentType(comp_comp129);

        var comp_comp130 = new PgComponentType('comp130', 'arrows-v');
        comp_comp130.code = '<span class="fa fa-arrows-v"></span>';
        comp_comp130.parent_selector = null;
        f.addComponentType(comp_comp130);

        var comp_comp131 = new PgComponentType('comp131', 'arrows-h');
        comp_comp131.code = '<span class="fa fa-arrows-h"></span>';
        comp_comp131.parent_selector = null;
        f.addComponentType(comp_comp131);

        var comp_comp132 = new PgComponentType('comp132', 'bar-chart-o');
        comp_comp132.code = '<span class="fa fa-bar-chart-o"></span>';
        comp_comp132.parent_selector = null;
        f.addComponentType(comp_comp132);

        var comp_comp133 = new PgComponentType('comp133', 'bar-chart');
        comp_comp133.code = '<span class="fa fa-bar-chart"></span>';
        comp_comp133.parent_selector = null;
        f.addComponentType(comp_comp133);

        var comp_comp134 = new PgComponentType('comp134', 'twitter-square');
        comp_comp134.code = '<span class="fa fa-twitter-square"></span>';
        comp_comp134.parent_selector = null;
        f.addComponentType(comp_comp134);

        var comp_comp135 = new PgComponentType('comp135', 'facebook-square');
        comp_comp135.code = '<span class="fa fa-facebook-square"></span>';
        comp_comp135.parent_selector = null;
        f.addComponentType(comp_comp135);

        var comp_comp136 = new PgComponentType('comp136', 'camera-retro');
        comp_comp136.code = '<span class="fa fa-camera-retro"></span>';
        comp_comp136.parent_selector = null;
        f.addComponentType(comp_comp136);

        var comp_comp137 = new PgComponentType('comp137', 'key');
        comp_comp137.code = '<span class="fa fa-key"></span>';
        comp_comp137.parent_selector = null;
        f.addComponentType(comp_comp137);

        var comp_comp138 = new PgComponentType('comp138', 'gears');
        comp_comp138.code = '<span class="fa fa-gears"></span>';
        comp_comp138.parent_selector = null;
        f.addComponentType(comp_comp138);

        var comp_comp139 = new PgComponentType('comp139', 'cogs');
        comp_comp139.code = '<span class="fa fa-cogs"></span>';
        comp_comp139.parent_selector = null;
        f.addComponentType(comp_comp139);

        var comp_comp140 = new PgComponentType('comp140', 'comments');
        comp_comp140.code = '<span class="fa fa-comments"></span>';
        comp_comp140.parent_selector = null;
        f.addComponentType(comp_comp140);

        var comp_comp141 = new PgComponentType('comp141', 'thumbs-o-up');
        comp_comp141.code = '<span class="fa fa-thumbs-o-up"></span>';
        comp_comp141.parent_selector = null;
        f.addComponentType(comp_comp141);

        var comp_comp142 = new PgComponentType('comp142', 'thumbs-o-down');
        comp_comp142.code = '<span class="fa fa-thumbs-o-down"></span>';
        comp_comp142.parent_selector = null;
        f.addComponentType(comp_comp142);

        var comp_comp143 = new PgComponentType('comp143', 'star-half');
        comp_comp143.code = '<span class="fa fa-star-half"></span>';
        comp_comp143.parent_selector = null;
        f.addComponentType(comp_comp143);

        var comp_comp144 = new PgComponentType('comp144', 'heart-o');
        comp_comp144.code = '<span class="fa fa-heart-o"></span>';
        comp_comp144.parent_selector = null;
        f.addComponentType(comp_comp144);

        var comp_comp145 = new PgComponentType('comp145', 'sign-out');
        comp_comp145.code = '<span class="fa fa-sign-out"></span>';
        comp_comp145.parent_selector = null;
        f.addComponentType(comp_comp145);

        var comp_comp146 = new PgComponentType('comp146', 'linkedin-square');
        comp_comp146.code = '<span class="fa fa-linkedin-square"></span>';
        comp_comp146.parent_selector = null;
        f.addComponentType(comp_comp146);

        var comp_comp147 = new PgComponentType('comp147', 'thumb-tack');
        comp_comp147.code = '<span class="fa fa-thumb-tack"></span>';
        comp_comp147.parent_selector = null;
        f.addComponentType(comp_comp147);

        var comp_comp148 = new PgComponentType('comp148', 'external-link');
        comp_comp148.code = '<span class="fa fa-external-link"></span>';
        comp_comp148.parent_selector = null;
        f.addComponentType(comp_comp148);

        var comp_comp149 = new PgComponentType('comp149', 'sign-in');
        comp_comp149.code = '<span class="fa fa-sign-in"></span>';
        comp_comp149.parent_selector = null;
        f.addComponentType(comp_comp149);

        var comp_comp150 = new PgComponentType('comp150', 'trophy');
        comp_comp150.code = '<span class="fa fa-trophy"></span>';
        comp_comp150.parent_selector = null;
        f.addComponentType(comp_comp150);

        var comp_comp151 = new PgComponentType('comp151', 'github-square');
        comp_comp151.code = '<span class="fa fa-github-square"></span>';
        comp_comp151.parent_selector = null;
        f.addComponentType(comp_comp151);

        var comp_comp152 = new PgComponentType('comp152', 'upload');
        comp_comp152.code = '<span class="fa fa-upload"></span>';
        comp_comp152.parent_selector = null;
        f.addComponentType(comp_comp152);

        var comp_comp153 = new PgComponentType('comp153', 'lemon-o');
        comp_comp153.code = '<span class="fa fa-lemon-o"></span>';
        comp_comp153.parent_selector = null;
        f.addComponentType(comp_comp153);

        var comp_comp154 = new PgComponentType('comp154', 'phone');
        comp_comp154.code = '<span class="fa fa-phone"></span>';
        comp_comp154.parent_selector = null;
        f.addComponentType(comp_comp154);

        var comp_comp155 = new PgComponentType('comp155', 'square-o');
        comp_comp155.code = '<span class="fa fa-square-o"></span>';
        comp_comp155.parent_selector = null;
        f.addComponentType(comp_comp155);

        var comp_comp156 = new PgComponentType('comp156', 'bookmark-o');
        comp_comp156.code = '<span class="fa fa-bookmark-o"></span>';
        comp_comp156.parent_selector = null;
        f.addComponentType(comp_comp156);

        var comp_comp157 = new PgComponentType('comp157', 'phone-square');
        comp_comp157.code = '<span class="fa fa-phone-square"></span>';
        comp_comp157.parent_selector = null;
        f.addComponentType(comp_comp157);

        var comp_comp158 = new PgComponentType('comp158', 'twitter');
        comp_comp158.code = '<span class="fa fa-twitter"></span>';
        comp_comp158.parent_selector = null;
        f.addComponentType(comp_comp158);

        var comp_comp159 = new PgComponentType('comp159', 'facebook-f');
        comp_comp159.code = '<span class="fa fa-facebook-f"></span>';
        comp_comp159.parent_selector = null;
        f.addComponentType(comp_comp159);

        var comp_comp160 = new PgComponentType('comp160', 'facebook');
        comp_comp160.code = '<span class="fa fa-facebook"></span>';
        comp_comp160.parent_selector = null;
        f.addComponentType(comp_comp160);

        var comp_comp161 = new PgComponentType('comp161', 'github');
        comp_comp161.code = '<span class="fa fa-github"></span>';
        comp_comp161.parent_selector = null;
        f.addComponentType(comp_comp161);

        var comp_comp162 = new PgComponentType('comp162', 'unlock');
        comp_comp162.code = '<span class="fa fa-unlock"></span>';
        comp_comp162.parent_selector = null;
        f.addComponentType(comp_comp162);

        var comp_comp163 = new PgComponentType('comp163', 'credit-card');
        comp_comp163.code = '<span class="fa fa-credit-card"></span>';
        comp_comp163.parent_selector = null;
        f.addComponentType(comp_comp163);

        var comp_comp164 = new PgComponentType('comp164', 'rss');
        comp_comp164.code = '<span class="fa fa-rss"></span>';
        comp_comp164.parent_selector = null;
        f.addComponentType(comp_comp164);

        var comp_comp165 = new PgComponentType('comp165', 'hdd-o');
        comp_comp165.code = '<span class="fa fa-hdd-o"></span>';
        comp_comp165.parent_selector = null;
        f.addComponentType(comp_comp165);

        var comp_comp166 = new PgComponentType('comp166', 'bullhorn');
        comp_comp166.code = '<span class="fa fa-bullhorn"></span>';
        comp_comp166.parent_selector = null;
        f.addComponentType(comp_comp166);

        var comp_comp167 = new PgComponentType('comp167', 'bell');
        comp_comp167.code = '<span class="fa fa-bell"></span>';
        comp_comp167.parent_selector = null;
        f.addComponentType(comp_comp167);

        var comp_comp168 = new PgComponentType('comp168', 'certificate');
        comp_comp168.code = '<span class="fa fa-certificate"></span>';
        comp_comp168.parent_selector = null;
        f.addComponentType(comp_comp168);

        var comp_comp169 = new PgComponentType('comp169', 'hand-o-right');
        comp_comp169.code = '<span class="fa fa-hand-o-right"></span>';
        comp_comp169.parent_selector = null;
        f.addComponentType(comp_comp169);

        var comp_comp170 = new PgComponentType('comp170', 'hand-o-left');
        comp_comp170.code = '<span class="fa fa-hand-o-left"></span>';
        comp_comp170.parent_selector = null;
        f.addComponentType(comp_comp170);

        var comp_comp171 = new PgComponentType('comp171', 'hand-o-up');
        comp_comp171.code = '<span class="fa fa-hand-o-up"></span>';
        comp_comp171.parent_selector = null;
        f.addComponentType(comp_comp171);

        var comp_comp172 = new PgComponentType('comp172', 'hand-o-down');
        comp_comp172.code = '<span class="fa fa-hand-o-down"></span>';
        comp_comp172.parent_selector = null;
        f.addComponentType(comp_comp172);

        var comp_comp173 = new PgComponentType('comp173', 'arrow-circle-left');
        comp_comp173.code = '<span class="fa fa-arrow-circle-left"></span>';
        comp_comp173.parent_selector = null;
        f.addComponentType(comp_comp173);

        var comp_comp174 = new PgComponentType('comp174', 'arrow-circle-right');
        comp_comp174.code = '<span class="fa fa-arrow-circle-right"></span>';
        comp_comp174.parent_selector = null;
        f.addComponentType(comp_comp174);

        var comp_comp175 = new PgComponentType('comp175', 'arrow-circle-up');
        comp_comp175.code = '<span class="fa fa-arrow-circle-up"></span>';
        comp_comp175.parent_selector = null;
        f.addComponentType(comp_comp175);

        var comp_comp176 = new PgComponentType('comp176', 'arrow-circle-down');
        comp_comp176.code = '<span class="fa fa-arrow-circle-down"></span>';
        comp_comp176.parent_selector = null;
        f.addComponentType(comp_comp176);

        var comp_comp177 = new PgComponentType('comp177', 'globe');
        comp_comp177.code = '<span class="fa fa-globe"></span>';
        comp_comp177.parent_selector = null;
        f.addComponentType(comp_comp177);

        var comp_comp178 = new PgComponentType('comp178', 'wrench');
        comp_comp178.code = '<span class="fa fa-wrench"></span>';
        comp_comp178.parent_selector = null;
        f.addComponentType(comp_comp178);

        var comp_comp179 = new PgComponentType('comp179', 'tasks');
        comp_comp179.code = '<span class="fa fa-tasks"></span>';
        comp_comp179.parent_selector = null;
        f.addComponentType(comp_comp179);

        var comp_comp180 = new PgComponentType('comp180', 'filter');
        comp_comp180.code = '<span class="fa fa-filter"></span>';
        comp_comp180.parent_selector = null;
        f.addComponentType(comp_comp180);

        var comp_comp181 = new PgComponentType('comp181', 'briefcase');
        comp_comp181.code = '<span class="fa fa-briefcase"></span>';
        comp_comp181.parent_selector = null;
        f.addComponentType(comp_comp181);

        var comp_comp182 = new PgComponentType('comp182', 'arrows-alt');
        comp_comp182.code = '<span class="fa fa-arrows-alt"></span>';
        comp_comp182.parent_selector = null;
        f.addComponentType(comp_comp182);

        var comp_comp183 = new PgComponentType('comp183', 'group');
        comp_comp183.code = '<span class="fa fa-group"></span>';
        comp_comp183.parent_selector = null;
        f.addComponentType(comp_comp183);

        var comp_comp184 = new PgComponentType('comp184', 'users');
        comp_comp184.code = '<span class="fa fa-users"></span>';
        comp_comp184.parent_selector = null;
        f.addComponentType(comp_comp184);

        var comp_comp185 = new PgComponentType('comp185', 'chain');
        comp_comp185.code = '<span class="fa fa-chain"></span>';
        comp_comp185.parent_selector = null;
        f.addComponentType(comp_comp185);

        var comp_comp186 = new PgComponentType('comp186', 'link');
        comp_comp186.code = '<span class="fa fa-link"></span>';
        comp_comp186.parent_selector = null;
        f.addComponentType(comp_comp186);

        var comp_comp187 = new PgComponentType('comp187', 'cloud');
        comp_comp187.code = '<span class="fa fa-cloud"></span>';
        comp_comp187.parent_selector = null;
        f.addComponentType(comp_comp187);

        var comp_comp188 = new PgComponentType('comp188', 'flask');
        comp_comp188.code = '<span class="fa fa-flask"></span>';
        comp_comp188.parent_selector = null;
        f.addComponentType(comp_comp188);

        var comp_comp189 = new PgComponentType('comp189', 'cut');
        comp_comp189.code = '<span class="fa fa-cut"></span>';
        comp_comp189.parent_selector = null;
        f.addComponentType(comp_comp189);

        var comp_comp190 = new PgComponentType('comp190', 'scissors');
        comp_comp190.code = '<span class="fa fa-scissors"></span>';
        comp_comp190.parent_selector = null;
        f.addComponentType(comp_comp190);

        var comp_comp191 = new PgComponentType('comp191', 'copy');
        comp_comp191.code = '<span class="fa fa-copy"></span>';
        comp_comp191.parent_selector = null;
        f.addComponentType(comp_comp191);

        var comp_comp192 = new PgComponentType('comp192', 'files-o');
        comp_comp192.code = '<span class="fa fa-files-o"></span>';
        comp_comp192.parent_selector = null;
        f.addComponentType(comp_comp192);

        var comp_comp193 = new PgComponentType('comp193', 'paperclip');
        comp_comp193.code = '<span class="fa fa-paperclip"></span>';
        comp_comp193.parent_selector = null;
        f.addComponentType(comp_comp193);

        var comp_comp194 = new PgComponentType('comp194', 'save');
        comp_comp194.code = '<span class="fa fa-save"></span>';
        comp_comp194.parent_selector = null;
        f.addComponentType(comp_comp194);

        var comp_comp195 = new PgComponentType('comp195', 'floppy-o');
        comp_comp195.code = '<span class="fa fa-floppy-o"></span>';
        comp_comp195.parent_selector = null;
        f.addComponentType(comp_comp195);

        var comp_comp196 = new PgComponentType('comp196', 'square');
        comp_comp196.code = '<span class="fa fa-square"></span>';
        comp_comp196.parent_selector = null;
        f.addComponentType(comp_comp196);

        var comp_comp197 = new PgComponentType('comp197', 'navicon');
        comp_comp197.code = '<span class="fa fa-navicon"></span>';
        comp_comp197.parent_selector = null;
        f.addComponentType(comp_comp197);

        var comp_comp198 = new PgComponentType('comp198', 'reorder');
        comp_comp198.code = '<span class="fa fa-reorder"></span>';
        comp_comp198.parent_selector = null;
        f.addComponentType(comp_comp198);

        var comp_comp199 = new PgComponentType('comp199', 'bars');
        comp_comp199.code = '<span class="fa fa-bars"></span>';
        comp_comp199.parent_selector = null;
        f.addComponentType(comp_comp199);

        var comp_comp200 = new PgComponentType('comp200', 'list-ul');
        comp_comp200.code = '<span class="fa fa-list-ul"></span>';
        comp_comp200.parent_selector = null;
        f.addComponentType(comp_comp200);

        var comp_comp201 = new PgComponentType('comp201', 'list-ol');
        comp_comp201.code = '<span class="fa fa-list-ol"></span>';
        comp_comp201.parent_selector = null;
        f.addComponentType(comp_comp201);

        var comp_comp202 = new PgComponentType('comp202', 'strikethrough');
        comp_comp202.code = '<span class="fa fa-strikethrough"></span>';
        comp_comp202.parent_selector = null;
        f.addComponentType(comp_comp202);

        var comp_comp203 = new PgComponentType('comp203', 'underline');
        comp_comp203.code = '<span class="fa fa-underline"></span>';
        comp_comp203.parent_selector = null;
        f.addComponentType(comp_comp203);

        var comp_comp204 = new PgComponentType('comp204', 'table');
        comp_comp204.code = '<span class="fa fa-table"></span>';
        comp_comp204.parent_selector = null;
        f.addComponentType(comp_comp204);

        var comp_comp205 = new PgComponentType('comp205', 'magic');
        comp_comp205.code = '<span class="fa fa-magic"></span>';
        comp_comp205.parent_selector = null;
        f.addComponentType(comp_comp205);

        var comp_comp206 = new PgComponentType('comp206', 'truck');
        comp_comp206.code = '<span class="fa fa-truck"></span>';
        comp_comp206.parent_selector = null;
        f.addComponentType(comp_comp206);

        var comp_comp207 = new PgComponentType('comp207', 'pinterest');
        comp_comp207.code = '<span class="fa fa-pinterest"></span>';
        comp_comp207.parent_selector = null;
        f.addComponentType(comp_comp207);

        var comp_comp208 = new PgComponentType('comp208', 'pinterest-square');
        comp_comp208.code = '<span class="fa fa-pinterest-square"></span>';
        comp_comp208.parent_selector = null;
        f.addComponentType(comp_comp208);

        var comp_comp209 = new PgComponentType('comp209', 'google-plus-square');
        comp_comp209.code = '<span class="fa fa-google-plus-square"></span>';
        comp_comp209.parent_selector = null;
        f.addComponentType(comp_comp209);

        var comp_comp210 = new PgComponentType('comp210', 'google-plus');
        comp_comp210.code = '<span class="fa fa-google-plus"></span>';
        comp_comp210.parent_selector = null;
        f.addComponentType(comp_comp210);

        var comp_comp211 = new PgComponentType('comp211', 'money');
        comp_comp211.code = '<span class="fa fa-money"></span>';
        comp_comp211.parent_selector = null;
        f.addComponentType(comp_comp211);

        var comp_comp212 = new PgComponentType('comp212', 'caret-down');
        comp_comp212.code = '<span class="fa fa-caret-down"></span>';
        comp_comp212.parent_selector = null;
        f.addComponentType(comp_comp212);

        var comp_comp213 = new PgComponentType('comp213', 'caret-up');
        comp_comp213.code = '<span class="fa fa-caret-up"></span>';
        comp_comp213.parent_selector = null;
        f.addComponentType(comp_comp213);

        var comp_comp214 = new PgComponentType('comp214', 'caret-left');
        comp_comp214.code = '<span class="fa fa-caret-left"></span>';
        comp_comp214.parent_selector = null;
        f.addComponentType(comp_comp214);

        var comp_comp215 = new PgComponentType('comp215', 'caret-right');
        comp_comp215.code = '<span class="fa fa-caret-right"></span>';
        comp_comp215.parent_selector = null;
        f.addComponentType(comp_comp215);

        var comp_comp216 = new PgComponentType('comp216', 'columns');
        comp_comp216.code = '<span class="fa fa-columns"></span>';
        comp_comp216.parent_selector = null;
        f.addComponentType(comp_comp216);

        var comp_comp217 = new PgComponentType('comp217', 'unsorted');
        comp_comp217.code = '<span class="fa fa-unsorted"></span>';
        comp_comp217.parent_selector = null;
        f.addComponentType(comp_comp217);

        var comp_comp218 = new PgComponentType('comp218', 'sort');
        comp_comp218.code = '<span class="fa fa-sort"></span>';
        comp_comp218.parent_selector = null;
        f.addComponentType(comp_comp218);

        var comp_comp219 = new PgComponentType('comp219', 'sort-down');
        comp_comp219.code = '<span class="fa fa-sort-down"></span>';
        comp_comp219.parent_selector = null;
        f.addComponentType(comp_comp219);

        var comp_comp220 = new PgComponentType('comp220', 'sort-desc');
        comp_comp220.code = '<span class="fa fa-sort-desc"></span>';
        comp_comp220.parent_selector = null;
        f.addComponentType(comp_comp220);

        var comp_comp221 = new PgComponentType('comp221', 'sort-up');
        comp_comp221.code = '<span class="fa fa-sort-up"></span>';
        comp_comp221.parent_selector = null;
        f.addComponentType(comp_comp221);

        var comp_comp222 = new PgComponentType('comp222', 'sort-asc');
        comp_comp222.code = '<span class="fa fa-sort-asc"></span>';
        comp_comp222.parent_selector = null;
        f.addComponentType(comp_comp222);

        var comp_comp223 = new PgComponentType('comp223', 'envelope');
        comp_comp223.code = '<span class="fa fa-envelope"></span>';
        comp_comp223.parent_selector = null;
        f.addComponentType(comp_comp223);

        var comp_comp224 = new PgComponentType('comp224', 'linkedin');
        comp_comp224.code = '<span class="fa fa-linkedin"></span>';
        comp_comp224.parent_selector = null;
        f.addComponentType(comp_comp224);

        var comp_comp225 = new PgComponentType('comp225', 'rotate-left');
        comp_comp225.code = '<span class="fa fa-rotate-left"></span>';
        comp_comp225.parent_selector = null;
        f.addComponentType(comp_comp225);

        var comp_comp226 = new PgComponentType('comp226', 'undo');
        comp_comp226.code = '<span class="fa fa-undo"></span>';
        comp_comp226.parent_selector = null;
        f.addComponentType(comp_comp226);

        var comp_comp227 = new PgComponentType('comp227', 'legal');
        comp_comp227.code = '<span class="fa fa-legal"></span>';
        comp_comp227.parent_selector = null;
        f.addComponentType(comp_comp227);

        var comp_comp228 = new PgComponentType('comp228', 'gavel');
        comp_comp228.code = '<span class="fa fa-gavel"></span>';
        comp_comp228.parent_selector = null;
        f.addComponentType(comp_comp228);

        var comp_comp229 = new PgComponentType('comp229', 'dashboard');
        comp_comp229.code = '<span class="fa fa-dashboard"></span>';
        comp_comp229.parent_selector = null;
        f.addComponentType(comp_comp229);

        var comp_comp230 = new PgComponentType('comp230', 'tachometer');
        comp_comp230.code = '<span class="fa fa-tachometer"></span>';
        comp_comp230.parent_selector = null;
        f.addComponentType(comp_comp230);

        var comp_comp231 = new PgComponentType('comp231', 'comment-o');
        comp_comp231.code = '<span class="fa fa-comment-o"></span>';
        comp_comp231.parent_selector = null;
        f.addComponentType(comp_comp231);

        var comp_comp232 = new PgComponentType('comp232', 'comments-o');
        comp_comp232.code = '<span class="fa fa-comments-o"></span>';
        comp_comp232.parent_selector = null;
        f.addComponentType(comp_comp232);

        var comp_comp233 = new PgComponentType('comp233', 'flash');
        comp_comp233.code = '<span class="fa fa-flash"></span>';
        comp_comp233.parent_selector = null;
        f.addComponentType(comp_comp233);

        var comp_comp234 = new PgComponentType('comp234', 'bolt');
        comp_comp234.code = '<span class="fa fa-bolt"></span>';
        comp_comp234.parent_selector = null;
        f.addComponentType(comp_comp234);

        var comp_comp235 = new PgComponentType('comp235', 'sitemap');
        comp_comp235.code = '<span class="fa fa-sitemap"></span>';
        comp_comp235.parent_selector = null;
        f.addComponentType(comp_comp235);

        var comp_comp236 = new PgComponentType('comp236', 'umbrella');
        comp_comp236.code = '<span class="fa fa-umbrella"></span>';
        comp_comp236.parent_selector = null;
        f.addComponentType(comp_comp236);

        var comp_comp237 = new PgComponentType('comp237', 'paste');
        comp_comp237.code = '<span class="fa fa-paste"></span>';
        comp_comp237.parent_selector = null;
        f.addComponentType(comp_comp237);

        var comp_comp238 = new PgComponentType('comp238', 'clipboard');
        comp_comp238.code = '<span class="fa fa-clipboard"></span>';
        comp_comp238.parent_selector = null;
        f.addComponentType(comp_comp238);

        var comp_comp239 = new PgComponentType('comp239', 'lightbulb-o');
        comp_comp239.code = '<span class="fa fa-lightbulb-o"></span>';
        comp_comp239.parent_selector = null;
        f.addComponentType(comp_comp239);

        var comp_comp240 = new PgComponentType('comp240', 'exchange');
        comp_comp240.code = '<span class="fa fa-exchange"></span>';
        comp_comp240.parent_selector = null;
        f.addComponentType(comp_comp240);

        var comp_comp241 = new PgComponentType('comp241', 'cloud-download');
        comp_comp241.code = '<span class="fa fa-cloud-download"></span>';
        comp_comp241.parent_selector = null;
        f.addComponentType(comp_comp241);

        var comp_comp242 = new PgComponentType('comp242', 'cloud-upload');
        comp_comp242.code = '<span class="fa fa-cloud-upload"></span>';
        comp_comp242.parent_selector = null;
        f.addComponentType(comp_comp242);

        var comp_comp243 = new PgComponentType('comp243', 'user-md');
        comp_comp243.code = '<span class="fa fa-user-md"></span>';
        comp_comp243.parent_selector = null;
        f.addComponentType(comp_comp243);

        var comp_comp244 = new PgComponentType('comp244', 'stethoscope');
        comp_comp244.code = '<span class="fa fa-stethoscope"></span>';
        comp_comp244.parent_selector = null;
        f.addComponentType(comp_comp244);

        var comp_comp245 = new PgComponentType('comp245', 'suitcase');
        comp_comp245.code = '<span class="fa fa-suitcase"></span>';
        comp_comp245.parent_selector = null;
        f.addComponentType(comp_comp245);

        var comp_comp246 = new PgComponentType('comp246', 'bell-o');
        comp_comp246.code = '<span class="fa fa-bell-o"></span>';
        comp_comp246.parent_selector = null;
        f.addComponentType(comp_comp246);

        var comp_comp247 = new PgComponentType('comp247', 'coffee');
        comp_comp247.code = '<span class="fa fa-coffee"></span>';
        comp_comp247.parent_selector = null;
        f.addComponentType(comp_comp247);

        var comp_comp248 = new PgComponentType('comp248', 'cutlery');
        comp_comp248.code = '<span class="fa fa-cutlery"></span>';
        comp_comp248.parent_selector = null;
        f.addComponentType(comp_comp248);

        var comp_comp249 = new PgComponentType('comp249', 'file-text-o');
        comp_comp249.code = '<span class="fa fa-file-text-o"></span>';
        comp_comp249.parent_selector = null;
        f.addComponentType(comp_comp249);

        var comp_comp250 = new PgComponentType('comp250', 'building-o');
        comp_comp250.code = '<span class="fa fa-building-o"></span>';
        comp_comp250.parent_selector = null;
        f.addComponentType(comp_comp250);

        var comp_comp251 = new PgComponentType('comp251', 'hospital-o');
        comp_comp251.code = '<span class="fa fa-hospital-o"></span>';
        comp_comp251.parent_selector = null;
        f.addComponentType(comp_comp251);

        var comp_comp252 = new PgComponentType('comp252', 'ambulance');
        comp_comp252.code = '<span class="fa fa-ambulance"></span>';
        comp_comp252.parent_selector = null;
        f.addComponentType(comp_comp252);

        var comp_comp253 = new PgComponentType('comp253', 'medkit');
        comp_comp253.code = '<span class="fa fa-medkit"></span>';
        comp_comp253.parent_selector = null;
        f.addComponentType(comp_comp253);

        var comp_comp254 = new PgComponentType('comp254', 'fighter-jet');
        comp_comp254.code = '<span class="fa fa-fighter-jet"></span>';
        comp_comp254.parent_selector = null;
        f.addComponentType(comp_comp254);

        var comp_comp255 = new PgComponentType('comp255', 'beer');
        comp_comp255.code = '<span class="fa fa-beer"></span>';
        comp_comp255.parent_selector = null;
        f.addComponentType(comp_comp255);

        var comp_comp256 = new PgComponentType('comp256', 'h-square');
        comp_comp256.code = '<span class="fa fa-h-square"></span>';
        comp_comp256.parent_selector = null;
        f.addComponentType(comp_comp256);

        var comp_comp257 = new PgComponentType('comp257', 'plus-square');
        comp_comp257.code = '<span class="fa fa-plus-square"></span>';
        comp_comp257.parent_selector = null;
        f.addComponentType(comp_comp257);

        var comp_comp258 = new PgComponentType('comp258', 'angle-double-left');
        comp_comp258.code = '<span class="fa fa-angle-double-left"></span>';
        comp_comp258.parent_selector = null;
        f.addComponentType(comp_comp258);

        var comp_comp259 = new PgComponentType('comp259', 'angle-double-right');
        comp_comp259.code = '<span class="fa fa-angle-double-right"></span>';
        comp_comp259.parent_selector = null;
        f.addComponentType(comp_comp259);

        var comp_comp260 = new PgComponentType('comp260', 'angle-double-up');
        comp_comp260.code = '<span class="fa fa-angle-double-up"></span>';
        comp_comp260.parent_selector = null;
        f.addComponentType(comp_comp260);

        var comp_comp261 = new PgComponentType('comp261', 'angle-double-down');
        comp_comp261.code = '<span class="fa fa-angle-double-down"></span>';
        comp_comp261.parent_selector = null;
        f.addComponentType(comp_comp261);

        var comp_comp262 = new PgComponentType('comp262', 'angle-left');
        comp_comp262.code = '<span class="fa fa-angle-left"></span>';
        comp_comp262.parent_selector = null;
        f.addComponentType(comp_comp262);

        var comp_comp263 = new PgComponentType('comp263', 'angle-right');
        comp_comp263.code = '<span class="fa fa-angle-right"></span>';
        comp_comp263.parent_selector = null;
        f.addComponentType(comp_comp263);

        var comp_comp264 = new PgComponentType('comp264', 'angle-up');
        comp_comp264.code = '<span class="fa fa-angle-up"></span>';
        comp_comp264.parent_selector = null;
        f.addComponentType(comp_comp264);

        var comp_comp265 = new PgComponentType('comp265', 'angle-down');
        comp_comp265.code = '<span class="fa fa-angle-down"></span>';
        comp_comp265.parent_selector = null;
        f.addComponentType(comp_comp265);

        var comp_comp266 = new PgComponentType('comp266', 'desktop');
        comp_comp266.code = '<span class="fa fa-desktop"></span>';
        comp_comp266.parent_selector = null;
        f.addComponentType(comp_comp266);

        var comp_comp267 = new PgComponentType('comp267', 'laptop');
        comp_comp267.code = '<span class="fa fa-laptop"></span>';
        comp_comp267.parent_selector = null;
        f.addComponentType(comp_comp267);

        var comp_comp268 = new PgComponentType('comp268', 'tablet');
        comp_comp268.code = '<span class="fa fa-tablet"></span>';
        comp_comp268.parent_selector = null;
        f.addComponentType(comp_comp268);

        var comp_comp269 = new PgComponentType('comp269', 'mobile-phone');
        comp_comp269.code = '<span class="fa fa-mobile-phone"></span>';
        comp_comp269.parent_selector = null;
        f.addComponentType(comp_comp269);

        var comp_comp270 = new PgComponentType('comp270', 'mobile');
        comp_comp270.code = '<span class="fa fa-mobile"></span>';
        comp_comp270.parent_selector = null;
        f.addComponentType(comp_comp270);

        var comp_comp271 = new PgComponentType('comp271', 'circle-o');
        comp_comp271.code = '<span class="fa fa-circle-o"></span>';
        comp_comp271.parent_selector = null;
        f.addComponentType(comp_comp271);

        var comp_comp272 = new PgComponentType('comp272', 'quote-left');
        comp_comp272.code = '<span class="fa fa-quote-left"></span>';
        comp_comp272.parent_selector = null;
        f.addComponentType(comp_comp272);

        var comp_comp273 = new PgComponentType('comp273', 'quote-right');
        comp_comp273.code = '<span class="fa fa-quote-right"></span>';
        comp_comp273.parent_selector = null;
        f.addComponentType(comp_comp273);

        var comp_comp274 = new PgComponentType('comp274', 'spinner');
        comp_comp274.code = '<span class="fa fa-spinner"></span>';
        comp_comp274.parent_selector = null;
        f.addComponentType(comp_comp274);

        var comp_comp275 = new PgComponentType('comp275', 'circle');
        comp_comp275.code = '<span class="fa fa-circle"></span>';
        comp_comp275.parent_selector = null;
        f.addComponentType(comp_comp275);

        var comp_comp276 = new PgComponentType('comp276', 'mail-reply');
        comp_comp276.code = '<span class="fa fa-mail-reply"></span>';
        comp_comp276.parent_selector = null;
        f.addComponentType(comp_comp276);

        var comp_comp277 = new PgComponentType('comp277', 'reply');
        comp_comp277.code = '<span class="fa fa-reply"></span>';
        comp_comp277.parent_selector = null;
        f.addComponentType(comp_comp277);

        var comp_comp278 = new PgComponentType('comp278', 'github-alt');
        comp_comp278.code = '<span class="fa fa-github-alt"></span>';
        comp_comp278.parent_selector = null;
        f.addComponentType(comp_comp278);

        var comp_comp279 = new PgComponentType('comp279', 'folder-o');
        comp_comp279.code = '<span class="fa fa-folder-o"></span>';
        comp_comp279.parent_selector = null;
        f.addComponentType(comp_comp279);

        var comp_comp280 = new PgComponentType('comp280', 'folder-open-o');
        comp_comp280.code = '<span class="fa fa-folder-open-o"></span>';
        comp_comp280.parent_selector = null;
        f.addComponentType(comp_comp280);

        var comp_comp281 = new PgComponentType('comp281', 'smile-o');
        comp_comp281.code = '<span class="fa fa-smile-o"></span>';
        comp_comp281.parent_selector = null;
        f.addComponentType(comp_comp281);

        var comp_comp282 = new PgComponentType('comp282', 'frown-o');
        comp_comp282.code = '<span class="fa fa-frown-o"></span>';
        comp_comp282.parent_selector = null;
        f.addComponentType(comp_comp282);

        var comp_comp283 = new PgComponentType('comp283', 'meh-o');
        comp_comp283.code = '<span class="fa fa-meh-o"></span>';
        comp_comp283.parent_selector = null;
        f.addComponentType(comp_comp283);

        var comp_comp284 = new PgComponentType('comp284', 'gamepad');
        comp_comp284.code = '<span class="fa fa-gamepad"></span>';
        comp_comp284.parent_selector = null;
        f.addComponentType(comp_comp284);

        var comp_comp285 = new PgComponentType('comp285', 'keyboard-o');
        comp_comp285.code = '<span class="fa fa-keyboard-o"></span>';
        comp_comp285.parent_selector = null;
        f.addComponentType(comp_comp285);

        var comp_comp286 = new PgComponentType('comp286', 'flag-o');
        comp_comp286.code = '<span class="fa fa-flag-o"></span>';
        comp_comp286.parent_selector = null;
        f.addComponentType(comp_comp286);

        var comp_comp287 = new PgComponentType('comp287', 'flag-checkered');
        comp_comp287.code = '<span class="fa fa-flag-checkered"></span>';
        comp_comp287.parent_selector = null;
        f.addComponentType(comp_comp287);

        var comp_comp288 = new PgComponentType('comp288', 'terminal');
        comp_comp288.code = '<span class="fa fa-terminal"></span>';
        comp_comp288.parent_selector = null;
        f.addComponentType(comp_comp288);

        var comp_comp289 = new PgComponentType('comp289', 'code');
        comp_comp289.code = '<span class="fa fa-code"></span>';
        comp_comp289.parent_selector = null;
        f.addComponentType(comp_comp289);

        var comp_comp290 = new PgComponentType('comp290', 'mail-reply-all');
        comp_comp290.code = '<span class="fa fa-mail-reply-all"></span>';
        comp_comp290.parent_selector = null;
        f.addComponentType(comp_comp290);

        var comp_comp291 = new PgComponentType('comp291', 'reply-all');
        comp_comp291.code = '<span class="fa fa-reply-all"></span>';
        comp_comp291.parent_selector = null;
        f.addComponentType(comp_comp291);

        var comp_comp292 = new PgComponentType('comp292', 'star-half-empty');
        comp_comp292.code = '<span class="fa fa-star-half-empty"></span>';
        comp_comp292.parent_selector = null;
        f.addComponentType(comp_comp292);

        var comp_comp293 = new PgComponentType('comp293', 'star-half-full');
        comp_comp293.code = '<span class="fa fa-star-half-full"></span>';
        comp_comp293.parent_selector = null;
        f.addComponentType(comp_comp293);

        var comp_comp294 = new PgComponentType('comp294', 'star-half-o');
        comp_comp294.code = '<span class="fa fa-star-half-o"></span>';
        comp_comp294.parent_selector = null;
        f.addComponentType(comp_comp294);

        var comp_comp295 = new PgComponentType('comp295', 'location-arrow');
        comp_comp295.code = '<span class="fa fa-location-arrow"></span>';
        comp_comp295.parent_selector = null;
        f.addComponentType(comp_comp295);

        var comp_comp296 = new PgComponentType('comp296', 'crop');
        comp_comp296.code = '<span class="fa fa-crop"></span>';
        comp_comp296.parent_selector = null;
        f.addComponentType(comp_comp296);

        var comp_comp297 = new PgComponentType('comp297', 'code-fork');
        comp_comp297.code = '<span class="fa fa-code-fork"></span>';
        comp_comp297.parent_selector = null;
        f.addComponentType(comp_comp297);

        var comp_comp298 = new PgComponentType('comp298', 'unlink');
        comp_comp298.code = '<span class="fa fa-unlink"></span>';
        comp_comp298.parent_selector = null;
        f.addComponentType(comp_comp298);

        var comp_comp299 = new PgComponentType('comp299', 'chain-broken');
        comp_comp299.code = '<span class="fa fa-chain-broken"></span>';
        comp_comp299.parent_selector = null;
        f.addComponentType(comp_comp299);

        var comp_comp300 = new PgComponentType('comp300', 'question');
        comp_comp300.code = '<span class="fa fa-question"></span>';
        comp_comp300.parent_selector = null;
        f.addComponentType(comp_comp300);

        var comp_comp301 = new PgComponentType('comp301', 'info');
        comp_comp301.code = '<span class="fa fa-info"></span>';
        comp_comp301.parent_selector = null;
        f.addComponentType(comp_comp301);

        var comp_comp302 = new PgComponentType('comp302', 'exclamation');
        comp_comp302.code = '<span class="fa fa-exclamation"></span>';
        comp_comp302.parent_selector = null;
        f.addComponentType(comp_comp302);

        var comp_comp303 = new PgComponentType('comp303', 'superscript');
        comp_comp303.code = '<span class="fa fa-superscript"></span>';
        comp_comp303.parent_selector = null;
        f.addComponentType(comp_comp303);

        var comp_comp304 = new PgComponentType('comp304', 'subscript');
        comp_comp304.code = '<span class="fa fa-subscript"></span>';
        comp_comp304.parent_selector = null;
        f.addComponentType(comp_comp304);

        var comp_comp305 = new PgComponentType('comp305', 'eraser');
        comp_comp305.code = '<span class="fa fa-eraser"></span>';
        comp_comp305.parent_selector = null;
        f.addComponentType(comp_comp305);

        var comp_comp306 = new PgComponentType('comp306', 'puzzle-piece');
        comp_comp306.code = '<span class="fa fa-puzzle-piece"></span>';
        comp_comp306.parent_selector = null;
        f.addComponentType(comp_comp306);

        var comp_comp307 = new PgComponentType('comp307', 'microphone');
        comp_comp307.code = '<span class="fa fa-microphone"></span>';
        comp_comp307.parent_selector = null;
        f.addComponentType(comp_comp307);

        var comp_comp308 = new PgComponentType('comp308', 'microphone-slash');
        comp_comp308.code = '<span class="fa fa-microphone-slash"></span>';
        comp_comp308.parent_selector = null;
        f.addComponentType(comp_comp308);

        var comp_comp309 = new PgComponentType('comp309', 'shield');
        comp_comp309.code = '<span class="fa fa-shield"></span>';
        comp_comp309.parent_selector = null;
        f.addComponentType(comp_comp309);

        var comp_comp310 = new PgComponentType('comp310', 'calendar-o');
        comp_comp310.code = '<span class="fa fa-calendar-o"></span>';
        comp_comp310.parent_selector = null;
        f.addComponentType(comp_comp310);

        var comp_comp311 = new PgComponentType('comp311', 'fire-extinguisher');
        comp_comp311.code = '<span class="fa fa-fire-extinguisher"></span>';
        comp_comp311.parent_selector = null;
        f.addComponentType(comp_comp311);

        var comp_comp312 = new PgComponentType('comp312', 'rocket');
        comp_comp312.code = '<span class="fa fa-rocket"></span>';
        comp_comp312.parent_selector = null;
        f.addComponentType(comp_comp312);

        var comp_comp313 = new PgComponentType('comp313', 'maxcdn');
        comp_comp313.code = '<span class="fa fa-maxcdn"></span>';
        comp_comp313.parent_selector = null;
        f.addComponentType(comp_comp313);

        var comp_comp314 = new PgComponentType('comp314', 'chevron-circle-left');
        comp_comp314.code = '<span class="fa fa-chevron-circle-left"></span>';
        comp_comp314.parent_selector = null;
        f.addComponentType(comp_comp314);

        var comp_comp315 = new PgComponentType('comp315', 'chevron-circle-right');
        comp_comp315.code = '<span class="fa fa-chevron-circle-right"></span>';
        comp_comp315.parent_selector = null;
        f.addComponentType(comp_comp315);

        var comp_comp316 = new PgComponentType('comp316', 'chevron-circle-up');
        comp_comp316.code = '<span class="fa fa-chevron-circle-up"></span>';
        comp_comp316.parent_selector = null;
        f.addComponentType(comp_comp316);

        var comp_comp317 = new PgComponentType('comp317', 'chevron-circle-down');
        comp_comp317.code = '<span class="fa fa-chevron-circle-down"></span>';
        comp_comp317.parent_selector = null;
        f.addComponentType(comp_comp317);

        var comp_comp318 = new PgComponentType('comp318', 'anchor');
        comp_comp318.code = '<span class="fa fa-anchor"></span>';
        comp_comp318.parent_selector = null;
        f.addComponentType(comp_comp318);

        var comp_comp319 = new PgComponentType('comp319', 'unlock-alt');
        comp_comp319.code = '<span class="fa fa-unlock-alt"></span>';
        comp_comp319.parent_selector = null;
        f.addComponentType(comp_comp319);

        var comp_comp320 = new PgComponentType('comp320', 'bullseye');
        comp_comp320.code = '<span class="fa fa-bullseye"></span>';
        comp_comp320.parent_selector = null;
        f.addComponentType(comp_comp320);

        var comp_comp321 = new PgComponentType('comp321', 'ellipsis-h');
        comp_comp321.code = '<span class="fa fa-ellipsis-h"></span>';
        comp_comp321.parent_selector = null;
        f.addComponentType(comp_comp321);

        var comp_comp322 = new PgComponentType('comp322', 'ellipsis-v');
        comp_comp322.code = '<span class="fa fa-ellipsis-v"></span>';
        comp_comp322.parent_selector = null;
        f.addComponentType(comp_comp322);

        var comp_comp323 = new PgComponentType('comp323', 'rss-square');
        comp_comp323.code = '<span class="fa fa-rss-square"></span>';
        comp_comp323.parent_selector = null;
        f.addComponentType(comp_comp323);

        var comp_comp324 = new PgComponentType('comp324', 'play-circle');
        comp_comp324.code = '<span class="fa fa-play-circle"></span>';
        comp_comp324.parent_selector = null;
        f.addComponentType(comp_comp324);

        var comp_comp325 = new PgComponentType('comp325', 'ticket');
        comp_comp325.code = '<span class="fa fa-ticket"></span>';
        comp_comp325.parent_selector = null;
        f.addComponentType(comp_comp325);

        var comp_comp326 = new PgComponentType('comp326', 'minus-square');
        comp_comp326.code = '<span class="fa fa-minus-square"></span>';
        comp_comp326.parent_selector = null;
        f.addComponentType(comp_comp326);

        var comp_comp327 = new PgComponentType('comp327', 'minus-square-o');
        comp_comp327.code = '<span class="fa fa-minus-square-o"></span>';
        comp_comp327.parent_selector = null;
        f.addComponentType(comp_comp327);

        var comp_comp328 = new PgComponentType('comp328', 'level-up');
        comp_comp328.code = '<span class="fa fa-level-up"></span>';
        comp_comp328.parent_selector = null;
        f.addComponentType(comp_comp328);

        var comp_comp329 = new PgComponentType('comp329', 'level-down');
        comp_comp329.code = '<span class="fa fa-level-down"></span>';
        comp_comp329.parent_selector = null;
        f.addComponentType(comp_comp329);

        var comp_comp330 = new PgComponentType('comp330', 'check-square');
        comp_comp330.code = '<span class="fa fa-check-square"></span>';
        comp_comp330.parent_selector = null;
        f.addComponentType(comp_comp330);

        var comp_comp331 = new PgComponentType('comp331', 'pencil-square');
        comp_comp331.code = '<span class="fa fa-pencil-square"></span>';
        comp_comp331.parent_selector = null;
        f.addComponentType(comp_comp331);

        var comp_comp332 = new PgComponentType('comp332', 'external-link-square');
        comp_comp332.code = '<span class="fa fa-external-link-square"></span>';
        comp_comp332.parent_selector = null;
        f.addComponentType(comp_comp332);

        var comp_comp333 = new PgComponentType('comp333', 'share-square');
        comp_comp333.code = '<span class="fa fa-share-square"></span>';
        comp_comp333.parent_selector = null;
        f.addComponentType(comp_comp333);

        var comp_comp334 = new PgComponentType('comp334', 'compass');
        comp_comp334.code = '<span class="fa fa-compass"></span>';
        comp_comp334.parent_selector = null;
        f.addComponentType(comp_comp334);

        var comp_comp335 = new PgComponentType('comp335', 'toggle-down');
        comp_comp335.code = '<span class="fa fa-toggle-down"></span>';
        comp_comp335.parent_selector = null;
        f.addComponentType(comp_comp335);

        var comp_comp336 = new PgComponentType('comp336', 'caret-square-o-down');
        comp_comp336.code = '<span class="fa fa-caret-square-o-down"></span>';
        comp_comp336.parent_selector = null;
        f.addComponentType(comp_comp336);

        var comp_comp337 = new PgComponentType('comp337', 'toggle-up');
        comp_comp337.code = '<span class="fa fa-toggle-up"></span>';
        comp_comp337.parent_selector = null;
        f.addComponentType(comp_comp337);

        var comp_comp338 = new PgComponentType('comp338', 'caret-square-o-up');
        comp_comp338.code = '<span class="fa fa-caret-square-o-up"></span>';
        comp_comp338.parent_selector = null;
        f.addComponentType(comp_comp338);

        var comp_comp339 = new PgComponentType('comp339', 'toggle-right');
        comp_comp339.code = '<span class="fa fa-toggle-right"></span>';
        comp_comp339.parent_selector = null;
        f.addComponentType(comp_comp339);

        var comp_comp340 = new PgComponentType('comp340', 'caret-square-o-right');
        comp_comp340.code = '<span class="fa fa-caret-square-o-right"></span>';
        comp_comp340.parent_selector = null;
        f.addComponentType(comp_comp340);

        var comp_comp341 = new PgComponentType('comp341', 'euro');
        comp_comp341.code = '<span class="fa fa-euro"></span>';
        comp_comp341.parent_selector = null;
        f.addComponentType(comp_comp341);

        var comp_comp342 = new PgComponentType('comp342', 'eur');
        comp_comp342.code = '<span class="fa fa-eur"></span>';
        comp_comp342.parent_selector = null;
        f.addComponentType(comp_comp342);

        var comp_comp343 = new PgComponentType('comp343', 'gbp');
        comp_comp343.code = '<span class="fa fa-gbp"></span>';
        comp_comp343.parent_selector = null;
        f.addComponentType(comp_comp343);

        var comp_comp344 = new PgComponentType('comp344', 'dollar');
        comp_comp344.code = '<span class="fa fa-dollar"></span>';
        comp_comp344.parent_selector = null;
        f.addComponentType(comp_comp344);

        var comp_comp345 = new PgComponentType('comp345', 'usd');
        comp_comp345.code = '<span class="fa fa-usd"></span>';
        comp_comp345.parent_selector = null;
        f.addComponentType(comp_comp345);

        var comp_comp346 = new PgComponentType('comp346', 'rupee');
        comp_comp346.code = '<span class="fa fa-rupee"></span>';
        comp_comp346.parent_selector = null;
        f.addComponentType(comp_comp346);

        var comp_comp347 = new PgComponentType('comp347', 'inr');
        comp_comp347.code = '<span class="fa fa-inr"></span>';
        comp_comp347.parent_selector = null;
        f.addComponentType(comp_comp347);

        var comp_comp348 = new PgComponentType('comp348', 'cny');
        comp_comp348.code = '<span class="fa fa-cny"></span>';
        comp_comp348.parent_selector = null;
        f.addComponentType(comp_comp348);

        var comp_comp349 = new PgComponentType('comp349', 'rmb');
        comp_comp349.code = '<span class="fa fa-rmb"></span>';
        comp_comp349.parent_selector = null;
        f.addComponentType(comp_comp349);

        var comp_comp350 = new PgComponentType('comp350', 'yen');
        comp_comp350.code = '<span class="fa fa-yen"></span>';
        comp_comp350.parent_selector = null;
        f.addComponentType(comp_comp350);

        var comp_comp351 = new PgComponentType('comp351', 'jpy');
        comp_comp351.code = '<span class="fa fa-jpy"></span>';
        comp_comp351.parent_selector = null;
        f.addComponentType(comp_comp351);

        var comp_comp352 = new PgComponentType('comp352', 'ruble');
        comp_comp352.code = '<span class="fa fa-ruble"></span>';
        comp_comp352.parent_selector = null;
        f.addComponentType(comp_comp352);

        var comp_comp353 = new PgComponentType('comp353', 'rouble');
        comp_comp353.code = '<span class="fa fa-rouble"></span>';
        comp_comp353.parent_selector = null;
        f.addComponentType(comp_comp353);

        var comp_comp354 = new PgComponentType('comp354', 'rub');
        comp_comp354.code = '<span class="fa fa-rub"></span>';
        comp_comp354.parent_selector = null;
        f.addComponentType(comp_comp354);

        var comp_comp355 = new PgComponentType('comp355', 'won');
        comp_comp355.code = '<span class="fa fa-won"></span>';
        comp_comp355.parent_selector = null;
        f.addComponentType(comp_comp355);

        var comp_comp356 = new PgComponentType('comp356', 'krw');
        comp_comp356.code = '<span class="fa fa-krw"></span>';
        comp_comp356.parent_selector = null;
        f.addComponentType(comp_comp356);

        var comp_comp357 = new PgComponentType('comp357', 'bitcoin');
        comp_comp357.code = '<span class="fa fa-bitcoin"></span>';
        comp_comp357.parent_selector = null;
        f.addComponentType(comp_comp357);

        var comp_comp358 = new PgComponentType('comp358', 'btc');
        comp_comp358.code = '<span class="fa fa-btc"></span>';
        comp_comp358.parent_selector = null;
        f.addComponentType(comp_comp358);

        var comp_comp359 = new PgComponentType('comp359', 'file');
        comp_comp359.code = '<span class="fa fa-file"></span>';
        comp_comp359.parent_selector = null;
        f.addComponentType(comp_comp359);

        var comp_comp360 = new PgComponentType('comp360', 'file-text');
        comp_comp360.code = '<span class="fa fa-file-text"></span>';
        comp_comp360.parent_selector = null;
        f.addComponentType(comp_comp360);

        var comp_comp361 = new PgComponentType('comp361', 'sort-alpha-asc');
        comp_comp361.code = '<span class="fa fa-sort-alpha-asc"></span>';
        comp_comp361.parent_selector = null;
        f.addComponentType(comp_comp361);

        var comp_comp362 = new PgComponentType('comp362', 'sort-alpha-desc');
        comp_comp362.code = '<span class="fa fa-sort-alpha-desc"></span>';
        comp_comp362.parent_selector = null;
        f.addComponentType(comp_comp362);

        var comp_comp363 = new PgComponentType('comp363', 'sort-amount-asc');
        comp_comp363.code = '<span class="fa fa-sort-amount-asc"></span>';
        comp_comp363.parent_selector = null;
        f.addComponentType(comp_comp363);

        var comp_comp364 = new PgComponentType('comp364', 'sort-amount-desc');
        comp_comp364.code = '<span class="fa fa-sort-amount-desc"></span>';
        comp_comp364.parent_selector = null;
        f.addComponentType(comp_comp364);

        var comp_comp365 = new PgComponentType('comp365', 'sort-numeric-asc');
        comp_comp365.code = '<span class="fa fa-sort-numeric-asc"></span>';
        comp_comp365.parent_selector = null;
        f.addComponentType(comp_comp365);

        var comp_comp366 = new PgComponentType('comp366', 'sort-numeric-desc');
        comp_comp366.code = '<span class="fa fa-sort-numeric-desc"></span>';
        comp_comp366.parent_selector = null;
        f.addComponentType(comp_comp366);

        var comp_comp367 = new PgComponentType('comp367', 'thumbs-up');
        comp_comp367.code = '<span class="fa fa-thumbs-up"></span>';
        comp_comp367.parent_selector = null;
        f.addComponentType(comp_comp367);

        var comp_comp368 = new PgComponentType('comp368', 'thumbs-down');
        comp_comp368.code = '<span class="fa fa-thumbs-down"></span>';
        comp_comp368.parent_selector = null;
        f.addComponentType(comp_comp368);

        var comp_comp369 = new PgComponentType('comp369', 'youtube-square');
        comp_comp369.code = '<span class="fa fa-youtube-square"></span>';
        comp_comp369.parent_selector = null;
        f.addComponentType(comp_comp369);

        var comp_comp370 = new PgComponentType('comp370', 'youtube');
        comp_comp370.code = '<span class="fa fa-youtube"></span>';
        comp_comp370.parent_selector = null;
        f.addComponentType(comp_comp370);

        var comp_comp371 = new PgComponentType('comp371', 'xing');
        comp_comp371.code = '<span class="fa fa-xing"></span>';
        comp_comp371.parent_selector = null;
        f.addComponentType(comp_comp371);

        var comp_comp372 = new PgComponentType('comp372', 'xing-square');
        comp_comp372.code = '<span class="fa fa-xing-square"></span>';
        comp_comp372.parent_selector = null;
        f.addComponentType(comp_comp372);

        var comp_comp373 = new PgComponentType('comp373', 'youtube-play');
        comp_comp373.code = '<span class="fa fa-youtube-play"></span>';
        comp_comp373.parent_selector = null;
        f.addComponentType(comp_comp373);

        var comp_comp374 = new PgComponentType('comp374', 'dropbox');
        comp_comp374.code = '<span class="fa fa-dropbox"></span>';
        comp_comp374.parent_selector = null;
        f.addComponentType(comp_comp374);

        var comp_comp375 = new PgComponentType('comp375', 'stack-overflow');
        comp_comp375.code = '<span class="fa fa-stack-overflow"></span>';
        comp_comp375.parent_selector = null;
        f.addComponentType(comp_comp375);

        var comp_comp376 = new PgComponentType('comp376', 'instagram');
        comp_comp376.code = '<span class="fa fa-instagram"></span>';
        comp_comp376.parent_selector = null;
        f.addComponentType(comp_comp376);

        var comp_comp377 = new PgComponentType('comp377', 'flickr');
        comp_comp377.code = '<span class="fa fa-flickr"></span>';
        comp_comp377.parent_selector = null;
        f.addComponentType(comp_comp377);

        var comp_comp378 = new PgComponentType('comp378', 'adn');
        comp_comp378.code = '<span class="fa fa-adn"></span>';
        comp_comp378.parent_selector = null;
        f.addComponentType(comp_comp378);

        var comp_comp379 = new PgComponentType('comp379', 'bitbucket');
        comp_comp379.code = '<span class="fa fa-bitbucket"></span>';
        comp_comp379.parent_selector = null;
        f.addComponentType(comp_comp379);

        var comp_comp380 = new PgComponentType('comp380', 'bitbucket-square');
        comp_comp380.code = '<span class="fa fa-bitbucket-square"></span>';
        comp_comp380.parent_selector = null;
        f.addComponentType(comp_comp380);

        var comp_comp381 = new PgComponentType('comp381', 'tumblr');
        comp_comp381.code = '<span class="fa fa-tumblr"></span>';
        comp_comp381.parent_selector = null;
        f.addComponentType(comp_comp381);

        var comp_comp382 = new PgComponentType('comp382', 'tumblr-square');
        comp_comp382.code = '<span class="fa fa-tumblr-square"></span>';
        comp_comp382.parent_selector = null;
        f.addComponentType(comp_comp382);

        var comp_comp383 = new PgComponentType('comp383', 'long-arrow-down');
        comp_comp383.code = '<span class="fa fa-long-arrow-down"></span>';
        comp_comp383.parent_selector = null;
        f.addComponentType(comp_comp383);

        var comp_comp384 = new PgComponentType('comp384', 'long-arrow-up');
        comp_comp384.code = '<span class="fa fa-long-arrow-up"></span>';
        comp_comp384.parent_selector = null;
        f.addComponentType(comp_comp384);

        var comp_comp385 = new PgComponentType('comp385', 'long-arrow-left');
        comp_comp385.code = '<span class="fa fa-long-arrow-left"></span>';
        comp_comp385.parent_selector = null;
        f.addComponentType(comp_comp385);

        var comp_comp386 = new PgComponentType('comp386', 'long-arrow-right');
        comp_comp386.code = '<span class="fa fa-long-arrow-right"></span>';
        comp_comp386.parent_selector = null;
        f.addComponentType(comp_comp386);

        var comp_comp387 = new PgComponentType('comp387', 'apple');
        comp_comp387.code = '<span class="fa fa-apple"></span>';
        comp_comp387.parent_selector = null;
        f.addComponentType(comp_comp387);

        var comp_comp388 = new PgComponentType('comp388', 'windows');
        comp_comp388.code = '<span class="fa fa-windows"></span>';
        comp_comp388.parent_selector = null;
        f.addComponentType(comp_comp388);

        var comp_comp389 = new PgComponentType('comp389', 'android');
        comp_comp389.code = '<span class="fa fa-android"></span>';
        comp_comp389.parent_selector = null;
        f.addComponentType(comp_comp389);

        var comp_comp390 = new PgComponentType('comp390', 'linux');
        comp_comp390.code = '<span class="fa fa-linux"></span>';
        comp_comp390.parent_selector = null;
        f.addComponentType(comp_comp390);

        var comp_comp391 = new PgComponentType('comp391', 'dribbble');
        comp_comp391.code = '<span class="fa fa-dribbble"></span>';
        comp_comp391.parent_selector = null;
        f.addComponentType(comp_comp391);

        var comp_comp392 = new PgComponentType('comp392', 'skype');
        comp_comp392.code = '<span class="fa fa-skype"></span>';
        comp_comp392.parent_selector = null;
        f.addComponentType(comp_comp392);

        var comp_comp393 = new PgComponentType('comp393', 'foursquare');
        comp_comp393.code = '<span class="fa fa-foursquare"></span>';
        comp_comp393.parent_selector = null;
        f.addComponentType(comp_comp393);

        var comp_comp394 = new PgComponentType('comp394', 'trello');
        comp_comp394.code = '<span class="fa fa-trello"></span>';
        comp_comp394.parent_selector = null;
        f.addComponentType(comp_comp394);

        var comp_comp395 = new PgComponentType('comp395', 'female');
        comp_comp395.code = '<span class="fa fa-female"></span>';
        comp_comp395.parent_selector = null;
        f.addComponentType(comp_comp395);

        var comp_comp396 = new PgComponentType('comp396', 'male');
        comp_comp396.code = '<span class="fa fa-male"></span>';
        comp_comp396.parent_selector = null;
        f.addComponentType(comp_comp396);

        var comp_comp397 = new PgComponentType('comp397', 'gittip');
        comp_comp397.code = '<span class="fa fa-gittip"></span>';
        comp_comp397.parent_selector = null;
        f.addComponentType(comp_comp397);

        var comp_comp398 = new PgComponentType('comp398', 'gratipay');
        comp_comp398.code = '<span class="fa fa-gratipay"></span>';
        comp_comp398.parent_selector = null;
        f.addComponentType(comp_comp398);

        var comp_comp399 = new PgComponentType('comp399', 'sun-o');
        comp_comp399.code = '<span class="fa fa-sun-o"></span>';
        comp_comp399.parent_selector = null;
        f.addComponentType(comp_comp399);

        var comp_comp400 = new PgComponentType('comp400', 'moon-o');
        comp_comp400.code = '<span class="fa fa-moon-o"></span>';
        comp_comp400.parent_selector = null;
        f.addComponentType(comp_comp400);

        var comp_comp401 = new PgComponentType('comp401', 'archive');
        comp_comp401.code = '<span class="fa fa-archive"></span>';
        comp_comp401.parent_selector = null;
        f.addComponentType(comp_comp401);

        var comp_comp402 = new PgComponentType('comp402', 'bug');
        comp_comp402.code = '<span class="fa fa-bug"></span>';
        comp_comp402.parent_selector = null;
        f.addComponentType(comp_comp402);

        var comp_comp403 = new PgComponentType('comp403', 'vk');
        comp_comp403.code = '<span class="fa fa-vk"></span>';
        comp_comp403.parent_selector = null;
        f.addComponentType(comp_comp403);

        var comp_comp404 = new PgComponentType('comp404', 'weibo');
        comp_comp404.code = '<span class="fa fa-weibo"></span>';
        comp_comp404.parent_selector = null;
        f.addComponentType(comp_comp404);

        var comp_comp405 = new PgComponentType('comp405', 'renren');
        comp_comp405.code = '<span class="fa fa-renren"></span>';
        comp_comp405.parent_selector = null;
        f.addComponentType(comp_comp405);

        var comp_comp406 = new PgComponentType('comp406', 'pagelines');
        comp_comp406.code = '<span class="fa fa-pagelines"></span>';
        comp_comp406.parent_selector = null;
        f.addComponentType(comp_comp406);

        var comp_comp407 = new PgComponentType('comp407', 'stack-exchange');
        comp_comp407.code = '<span class="fa fa-stack-exchange"></span>';
        comp_comp407.parent_selector = null;
        f.addComponentType(comp_comp407);

        var comp_comp408 = new PgComponentType('comp408', 'arrow-circle-o-right');
        comp_comp408.code = '<span class="fa fa-arrow-circle-o-right"></span>';
        comp_comp408.parent_selector = null;
        f.addComponentType(comp_comp408);

        var comp_comp409 = new PgComponentType('comp409', 'arrow-circle-o-left');
        comp_comp409.code = '<span class="fa fa-arrow-circle-o-left"></span>';
        comp_comp409.parent_selector = null;
        f.addComponentType(comp_comp409);

        var comp_comp410 = new PgComponentType('comp410', 'toggle-left');
        comp_comp410.code = '<span class="fa fa-toggle-left"></span>';
        comp_comp410.parent_selector = null;
        f.addComponentType(comp_comp410);

        var comp_comp411 = new PgComponentType('comp411', 'caret-square-o-left');
        comp_comp411.code = '<span class="fa fa-caret-square-o-left"></span>';
        comp_comp411.parent_selector = null;
        f.addComponentType(comp_comp411);

        var comp_comp412 = new PgComponentType('comp412', 'dot-circle-o');
        comp_comp412.code = '<span class="fa fa-dot-circle-o"></span>';
        comp_comp412.parent_selector = null;
        f.addComponentType(comp_comp412);

        var comp_comp413 = new PgComponentType('comp413', 'wheelchair');
        comp_comp413.code = '<span class="fa fa-wheelchair"></span>';
        comp_comp413.parent_selector = null;
        f.addComponentType(comp_comp413);

        var comp_comp414 = new PgComponentType('comp414', 'vimeo-square');
        comp_comp414.code = '<span class="fa fa-vimeo-square"></span>';
        comp_comp414.parent_selector = null;
        f.addComponentType(comp_comp414);

        var comp_comp415 = new PgComponentType('comp415', 'turkish-lira');
        comp_comp415.code = '<span class="fa fa-turkish-lira"></span>';
        comp_comp415.parent_selector = null;
        f.addComponentType(comp_comp415);

        var comp_comp416 = new PgComponentType('comp416', 'try');
        comp_comp416.code = '<span class="fa fa-try"></span>';
        comp_comp416.parent_selector = null;
        f.addComponentType(comp_comp416);

        var comp_comp417 = new PgComponentType('comp417', 'plus-square-o');
        comp_comp417.code = '<span class="fa fa-plus-square-o"></span>';
        comp_comp417.parent_selector = null;
        f.addComponentType(comp_comp417);

        var comp_comp418 = new PgComponentType('comp418', 'space-shuttle');
        comp_comp418.code = '<span class="fa fa-space-shuttle"></span>';
        comp_comp418.parent_selector = null;
        f.addComponentType(comp_comp418);

        var comp_comp419 = new PgComponentType('comp419', 'slack');
        comp_comp419.code = '<span class="fa fa-slack"></span>';
        comp_comp419.parent_selector = null;
        f.addComponentType(comp_comp419);

        var comp_comp420 = new PgComponentType('comp420', 'envelope-square');
        comp_comp420.code = '<span class="fa fa-envelope-square"></span>';
        comp_comp420.parent_selector = null;
        f.addComponentType(comp_comp420);

        var comp_comp421 = new PgComponentType('comp421', 'wordpress');
        comp_comp421.code = '<span class="fa fa-wordpress"></span>';
        comp_comp421.parent_selector = null;
        f.addComponentType(comp_comp421);

        var comp_comp422 = new PgComponentType('comp422', 'openid');
        comp_comp422.code = '<span class="fa fa-openid"></span>';
        comp_comp422.parent_selector = null;
        f.addComponentType(comp_comp422);

        var comp_comp423 = new PgComponentType('comp423', 'institution');
        comp_comp423.code = '<span class="fa fa-institution"></span>';
        comp_comp423.parent_selector = null;
        f.addComponentType(comp_comp423);

        var comp_comp424 = new PgComponentType('comp424', 'bank');
        comp_comp424.code = '<span class="fa fa-bank"></span>';
        comp_comp424.parent_selector = null;
        f.addComponentType(comp_comp424);

        var comp_comp425 = new PgComponentType('comp425', 'university');
        comp_comp425.code = '<span class="fa fa-university"></span>';
        comp_comp425.parent_selector = null;
        f.addComponentType(comp_comp425);

        var comp_comp426 = new PgComponentType('comp426', 'mortar-board');
        comp_comp426.code = '<span class="fa fa-mortar-board"></span>';
        comp_comp426.parent_selector = null;
        f.addComponentType(comp_comp426);

        var comp_comp427 = new PgComponentType('comp427', 'graduation-cap');
        comp_comp427.code = '<span class="fa fa-graduation-cap"></span>';
        comp_comp427.parent_selector = null;
        f.addComponentType(comp_comp427);

        var comp_comp428 = new PgComponentType('comp428', 'yahoo');
        comp_comp428.code = '<span class="fa fa-yahoo"></span>';
        comp_comp428.parent_selector = null;
        f.addComponentType(comp_comp428);

        var comp_comp429 = new PgComponentType('comp429', 'google');
        comp_comp429.code = '<span class="fa fa-google"></span>';
        comp_comp429.parent_selector = null;
        f.addComponentType(comp_comp429);

        var comp_comp430 = new PgComponentType('comp430', 'reddit');
        comp_comp430.code = '<span class="fa fa-reddit"></span>';
        comp_comp430.parent_selector = null;
        f.addComponentType(comp_comp430);

        var comp_comp431 = new PgComponentType('comp431', 'reddit-square');
        comp_comp431.code = '<span class="fa fa-reddit-square"></span>';
        comp_comp431.parent_selector = null;
        f.addComponentType(comp_comp431);

        var comp_comp432 = new PgComponentType('comp432', 'stumbleupon-circle');
        comp_comp432.code = '<span class="fa fa-stumbleupon-circle"></span>';
        comp_comp432.parent_selector = null;
        f.addComponentType(comp_comp432);

        var comp_comp433 = new PgComponentType('comp433', 'stumbleupon');
        comp_comp433.code = '<span class="fa fa-stumbleupon"></span>';
        comp_comp433.parent_selector = null;
        f.addComponentType(comp_comp433);

        var comp_comp434 = new PgComponentType('comp434', 'delicious');
        comp_comp434.code = '<span class="fa fa-delicious"></span>';
        comp_comp434.parent_selector = null;
        f.addComponentType(comp_comp434);

        var comp_comp435 = new PgComponentType('comp435', 'digg');
        comp_comp435.code = '<span class="fa fa-digg"></span>';
        comp_comp435.parent_selector = null;
        f.addComponentType(comp_comp435);

        var comp_comp436 = new PgComponentType('comp436', 'pied-piper');
        comp_comp436.code = '<span class="fa fa-pied-piper"></span>';
        comp_comp436.parent_selector = null;
        f.addComponentType(comp_comp436);

        var comp_comp437 = new PgComponentType('comp437', 'pied-piper-alt');
        comp_comp437.code = '<span class="fa fa-pied-piper-alt"></span>';
        comp_comp437.parent_selector = null;
        f.addComponentType(comp_comp437);

        var comp_comp438 = new PgComponentType('comp438', 'drupal');
        comp_comp438.code = '<span class="fa fa-drupal"></span>';
        comp_comp438.parent_selector = null;
        f.addComponentType(comp_comp438);

        var comp_comp439 = new PgComponentType('comp439', 'joomla');
        comp_comp439.code = '<span class="fa fa-joomla"></span>';
        comp_comp439.parent_selector = null;
        f.addComponentType(comp_comp439);

        var comp_comp440 = new PgComponentType('comp440', 'language');
        comp_comp440.code = '<span class="fa fa-language"></span>';
        comp_comp440.parent_selector = null;
        f.addComponentType(comp_comp440);

        var comp_comp441 = new PgComponentType('comp441', 'fax');
        comp_comp441.code = '<span class="fa fa-fax"></span>';
        comp_comp441.parent_selector = null;
        f.addComponentType(comp_comp441);

        var comp_comp442 = new PgComponentType('comp442', 'building');
        comp_comp442.code = '<span class="fa fa-building"></span>';
        comp_comp442.parent_selector = null;
        f.addComponentType(comp_comp442);

        var comp_comp443 = new PgComponentType('comp443', 'child');
        comp_comp443.code = '<span class="fa fa-child"></span>';
        comp_comp443.parent_selector = null;
        f.addComponentType(comp_comp443);

        var comp_comp444 = new PgComponentType('comp444', 'paw');
        comp_comp444.code = '<span class="fa fa-paw"></span>';
        comp_comp444.parent_selector = null;
        f.addComponentType(comp_comp444);

        var comp_comp445 = new PgComponentType('comp445', 'spoon');
        comp_comp445.code = '<span class="fa fa-spoon"></span>';
        comp_comp445.parent_selector = null;
        f.addComponentType(comp_comp445);

        var comp_comp446 = new PgComponentType('comp446', 'cube');
        comp_comp446.code = '<span class="fa fa-cube"></span>';
        comp_comp446.parent_selector = null;
        f.addComponentType(comp_comp446);

        var comp_comp447 = new PgComponentType('comp447', 'cubes');
        comp_comp447.code = '<span class="fa fa-cubes"></span>';
        comp_comp447.parent_selector = null;
        f.addComponentType(comp_comp447);

        var comp_comp448 = new PgComponentType('comp448', 'behance');
        comp_comp448.code = '<span class="fa fa-behance"></span>';
        comp_comp448.parent_selector = null;
        f.addComponentType(comp_comp448);

        var comp_comp449 = new PgComponentType('comp449', 'behance-square');
        comp_comp449.code = '<span class="fa fa-behance-square"></span>';
        comp_comp449.parent_selector = null;
        f.addComponentType(comp_comp449);

        var comp_comp450 = new PgComponentType('comp450', 'steam');
        comp_comp450.code = '<span class="fa fa-steam"></span>';
        comp_comp450.parent_selector = null;
        f.addComponentType(comp_comp450);

        var comp_comp451 = new PgComponentType('comp451', 'steam-square');
        comp_comp451.code = '<span class="fa fa-steam-square"></span>';
        comp_comp451.parent_selector = null;
        f.addComponentType(comp_comp451);

        var comp_comp452 = new PgComponentType('comp452', 'recycle');
        comp_comp452.code = '<span class="fa fa-recycle"></span>';
        comp_comp452.parent_selector = null;
        f.addComponentType(comp_comp452);

        var comp_comp453 = new PgComponentType('comp453', 'automobile');
        comp_comp453.code = '<span class="fa fa-automobile"></span>';
        comp_comp453.parent_selector = null;
        f.addComponentType(comp_comp453);

        var comp_comp454 = new PgComponentType('comp454', 'car');
        comp_comp454.code = '<span class="fa fa-car"></span>';
        comp_comp454.parent_selector = null;
        f.addComponentType(comp_comp454);

        var comp_comp455 = new PgComponentType('comp455', 'cab');
        comp_comp455.code = '<span class="fa fa-cab"></span>';
        comp_comp455.parent_selector = null;
        f.addComponentType(comp_comp455);

        var comp_comp456 = new PgComponentType('comp456', 'taxi');
        comp_comp456.code = '<span class="fa fa-taxi"></span>';
        comp_comp456.parent_selector = null;
        f.addComponentType(comp_comp456);

        var comp_comp457 = new PgComponentType('comp457', 'tree');
        comp_comp457.code = '<span class="fa fa-tree"></span>';
        comp_comp457.parent_selector = null;
        f.addComponentType(comp_comp457);

        var comp_comp458 = new PgComponentType('comp458', 'spotify');
        comp_comp458.code = '<span class="fa fa-spotify"></span>';
        comp_comp458.parent_selector = null;
        f.addComponentType(comp_comp458);

        var comp_comp459 = new PgComponentType('comp459', 'deviantart');
        comp_comp459.code = '<span class="fa fa-deviantart"></span>';
        comp_comp459.parent_selector = null;
        f.addComponentType(comp_comp459);

        var comp_comp460 = new PgComponentType('comp460', 'soundcloud');
        comp_comp460.code = '<span class="fa fa-soundcloud"></span>';
        comp_comp460.parent_selector = null;
        f.addComponentType(comp_comp460);

        var comp_comp461 = new PgComponentType('comp461', 'database');
        comp_comp461.code = '<span class="fa fa-database"></span>';
        comp_comp461.parent_selector = null;
        f.addComponentType(comp_comp461);

        var comp_comp462 = new PgComponentType('comp462', 'file-pdf-o');
        comp_comp462.code = '<span class="fa fa-file-pdf-o"></span>';
        comp_comp462.parent_selector = null;
        f.addComponentType(comp_comp462);

        var comp_comp463 = new PgComponentType('comp463', 'file-word-o');
        comp_comp463.code = '<span class="fa fa-file-word-o"></span>';
        comp_comp463.parent_selector = null;
        f.addComponentType(comp_comp463);

        var comp_comp464 = new PgComponentType('comp464', 'file-excel-o');
        comp_comp464.code = '<span class="fa fa-file-excel-o"></span>';
        comp_comp464.parent_selector = null;
        f.addComponentType(comp_comp464);

        var comp_comp465 = new PgComponentType('comp465', 'file-powerpoint-o');
        comp_comp465.code = '<span class="fa fa-file-powerpoint-o"></span>';
        comp_comp465.parent_selector = null;
        f.addComponentType(comp_comp465);

        var comp_comp466 = new PgComponentType('comp466', 'file-photo-o');
        comp_comp466.code = '<span class="fa fa-file-photo-o"></span>';
        comp_comp466.parent_selector = null;
        f.addComponentType(comp_comp466);

        var comp_comp467 = new PgComponentType('comp467', 'file-picture-o');
        comp_comp467.code = '<span class="fa fa-file-picture-o"></span>';
        comp_comp467.parent_selector = null;
        f.addComponentType(comp_comp467);

        var comp_comp468 = new PgComponentType('comp468', 'file-image-o');
        comp_comp468.code = '<span class="fa fa-file-image-o"></span>';
        comp_comp468.parent_selector = null;
        f.addComponentType(comp_comp468);

        var comp_comp469 = new PgComponentType('comp469', 'file-zip-o');
        comp_comp469.code = '<span class="fa fa-file-zip-o"></span>';
        comp_comp469.parent_selector = null;
        f.addComponentType(comp_comp469);

        var comp_comp470 = new PgComponentType('comp470', 'file-archive-o');
        comp_comp470.code = '<span class="fa fa-file-archive-o"></span>';
        comp_comp470.parent_selector = null;
        f.addComponentType(comp_comp470);

        var comp_comp471 = new PgComponentType('comp471', 'file-sound-o');
        comp_comp471.code = '<span class="fa fa-file-sound-o"></span>';
        comp_comp471.parent_selector = null;
        f.addComponentType(comp_comp471);

        var comp_comp472 = new PgComponentType('comp472', 'file-audio-o');
        comp_comp472.code = '<span class="fa fa-file-audio-o"></span>';
        comp_comp472.parent_selector = null;
        f.addComponentType(comp_comp472);

        var comp_comp473 = new PgComponentType('comp473', 'file-movie-o');
        comp_comp473.code = '<span class="fa fa-file-movie-o"></span>';
        comp_comp473.parent_selector = null;
        f.addComponentType(comp_comp473);

        var comp_comp474 = new PgComponentType('comp474', 'file-video-o');
        comp_comp474.code = '<span class="fa fa-file-video-o"></span>';
        comp_comp474.parent_selector = null;
        f.addComponentType(comp_comp474);

        var comp_comp475 = new PgComponentType('comp475', 'file-code-o');
        comp_comp475.code = '<span class="fa fa-file-code-o"></span>';
        comp_comp475.parent_selector = null;
        f.addComponentType(comp_comp475);

        var comp_comp476 = new PgComponentType('comp476', 'vine');
        comp_comp476.code = '<span class="fa fa-vine"></span>';
        comp_comp476.parent_selector = null;
        f.addComponentType(comp_comp476);

        var comp_comp477 = new PgComponentType('comp477', 'codepen');
        comp_comp477.code = '<span class="fa fa-codepen"></span>';
        comp_comp477.parent_selector = null;
        f.addComponentType(comp_comp477);

        var comp_comp478 = new PgComponentType('comp478', 'jsfiddle');
        comp_comp478.code = '<span class="fa fa-jsfiddle"></span>';
        comp_comp478.parent_selector = null;
        f.addComponentType(comp_comp478);

        var comp_comp479 = new PgComponentType('comp479', 'life-bouy');
        comp_comp479.code = '<span class="fa fa-life-bouy"></span>';
        comp_comp479.parent_selector = null;
        f.addComponentType(comp_comp479);

        var comp_comp480 = new PgComponentType('comp480', 'life-buoy');
        comp_comp480.code = '<span class="fa fa-life-buoy"></span>';
        comp_comp480.parent_selector = null;
        f.addComponentType(comp_comp480);

        var comp_comp481 = new PgComponentType('comp481', 'life-saver');
        comp_comp481.code = '<span class="fa fa-life-saver"></span>';
        comp_comp481.parent_selector = null;
        f.addComponentType(comp_comp481);

        var comp_comp482 = new PgComponentType('comp482', 'support');
        comp_comp482.code = '<span class="fa fa-support"></span>';
        comp_comp482.parent_selector = null;
        f.addComponentType(comp_comp482);

        var comp_comp483 = new PgComponentType('comp483', 'life-ring');
        comp_comp483.code = '<span class="fa fa-life-ring"></span>';
        comp_comp483.parent_selector = null;
        f.addComponentType(comp_comp483);

        var comp_comp484 = new PgComponentType('comp484', 'circle-o-notch');
        comp_comp484.code = '<span class="fa fa-circle-o-notch"></span>';
        comp_comp484.parent_selector = null;
        f.addComponentType(comp_comp484);

        var comp_comp485 = new PgComponentType('comp485', 'ra');
        comp_comp485.code = '<span class="fa fa-ra"></span>';
        comp_comp485.parent_selector = null;
        f.addComponentType(comp_comp485);

        var comp_comp486 = new PgComponentType('comp486', 'rebel');
        comp_comp486.code = '<span class="fa fa-rebel"></span>';
        comp_comp486.parent_selector = null;
        f.addComponentType(comp_comp486);

        var comp_comp487 = new PgComponentType('comp487', 'ge');
        comp_comp487.code = '<span class="fa fa-ge"></span>';
        comp_comp487.parent_selector = null;
        f.addComponentType(comp_comp487);

        var comp_comp488 = new PgComponentType('comp488', 'empire');
        comp_comp488.code = '<span class="fa fa-empire"></span>';
        comp_comp488.parent_selector = null;
        f.addComponentType(comp_comp488);

        var comp_comp489 = new PgComponentType('comp489', 'git-square');
        comp_comp489.code = '<span class="fa fa-git-square"></span>';
        comp_comp489.parent_selector = null;
        f.addComponentType(comp_comp489);

        var comp_comp490 = new PgComponentType('comp490', 'git');
        comp_comp490.code = '<span class="fa fa-git"></span>';
        comp_comp490.parent_selector = null;
        f.addComponentType(comp_comp490);

        var comp_comp491 = new PgComponentType('comp491', 'hacker-news');
        comp_comp491.code = '<span class="fa fa-hacker-news"></span>';
        comp_comp491.parent_selector = null;
        f.addComponentType(comp_comp491);

        var comp_comp492 = new PgComponentType('comp492', 'tencent-weibo');
        comp_comp492.code = '<span class="fa fa-tencent-weibo"></span>';
        comp_comp492.parent_selector = null;
        f.addComponentType(comp_comp492);

        var comp_comp493 = new PgComponentType('comp493', 'qq');
        comp_comp493.code = '<span class="fa fa-qq"></span>';
        comp_comp493.parent_selector = null;
        f.addComponentType(comp_comp493);

        var comp_comp494 = new PgComponentType('comp494', 'wechat');
        comp_comp494.code = '<span class="fa fa-wechat"></span>';
        comp_comp494.parent_selector = null;
        f.addComponentType(comp_comp494);

        var comp_comp495 = new PgComponentType('comp495', 'weixin');
        comp_comp495.code = '<span class="fa fa-weixin"></span>';
        comp_comp495.parent_selector = null;
        f.addComponentType(comp_comp495);

        var comp_comp496 = new PgComponentType('comp496', 'send');
        comp_comp496.code = '<span class="fa fa-send"></span>';
        comp_comp496.parent_selector = null;
        f.addComponentType(comp_comp496);

        var comp_comp497 = new PgComponentType('comp497', 'paper-plane');
        comp_comp497.code = '<span class="fa fa-paper-plane"></span>';
        comp_comp497.parent_selector = null;
        f.addComponentType(comp_comp497);

        var comp_comp498 = new PgComponentType('comp498', 'send-o');
        comp_comp498.code = '<span class="fa fa-send-o"></span>';
        comp_comp498.parent_selector = null;
        f.addComponentType(comp_comp498);

        var comp_comp499 = new PgComponentType('comp499', 'paper-plane-o');
        comp_comp499.code = '<span class="fa fa-paper-plane-o"></span>';
        comp_comp499.parent_selector = null;
        f.addComponentType(comp_comp499);

        var comp_comp500 = new PgComponentType('comp500', 'history');
        comp_comp500.code = '<span class="fa fa-history"></span>';
        comp_comp500.parent_selector = null;
        f.addComponentType(comp_comp500);

        var comp_comp501 = new PgComponentType('comp501', 'genderless');
        comp_comp501.code = '<span class="fa fa-genderless"></span>';
        comp_comp501.parent_selector = null;
        f.addComponentType(comp_comp501);

        var comp_comp502 = new PgComponentType('comp502', 'circle-thin');
        comp_comp502.code = '<span class="fa fa-circle-thin"></span>';
        comp_comp502.parent_selector = null;
        f.addComponentType(comp_comp502);

        var comp_comp503 = new PgComponentType('comp503', 'header');
        comp_comp503.code = '<span class="fa fa-header"></span>';
        comp_comp503.parent_selector = null;
        f.addComponentType(comp_comp503);

        var comp_comp504 = new PgComponentType('comp504', 'paragraph');
        comp_comp504.code = '<span class="fa fa-paragraph"></span>';
        comp_comp504.parent_selector = null;
        f.addComponentType(comp_comp504);

        var comp_comp505 = new PgComponentType('comp505', 'sliders');
        comp_comp505.code = '<span class="fa fa-sliders"></span>';
        comp_comp505.parent_selector = null;
        f.addComponentType(comp_comp505);

        var comp_comp506 = new PgComponentType('comp506', 'share-alt');
        comp_comp506.code = '<span class="fa fa-share-alt"></span>';
        comp_comp506.parent_selector = null;
        f.addComponentType(comp_comp506);

        var comp_comp507 = new PgComponentType('comp507', 'share-alt-square');
        comp_comp507.code = '<span class="fa fa-share-alt-square"></span>';
        comp_comp507.parent_selector = null;
        f.addComponentType(comp_comp507);

        var comp_comp508 = new PgComponentType('comp508', 'bomb');
        comp_comp508.code = '<span class="fa fa-bomb"></span>';
        comp_comp508.parent_selector = null;
        f.addComponentType(comp_comp508);

        var comp_comp509 = new PgComponentType('comp509', 'soccer-ball-o');
        comp_comp509.code = '<span class="fa fa-soccer-ball-o"></span>';
        comp_comp509.parent_selector = null;
        f.addComponentType(comp_comp509);

        var comp_comp510 = new PgComponentType('comp510', 'futbol-o');
        comp_comp510.code = '<span class="fa fa-futbol-o"></span>';
        comp_comp510.parent_selector = null;
        f.addComponentType(comp_comp510);

        var comp_comp511 = new PgComponentType('comp511', 'tty');
        comp_comp511.code = '<span class="fa fa-tty"></span>';
        comp_comp511.parent_selector = null;
        f.addComponentType(comp_comp511);

        var comp_comp512 = new PgComponentType('comp512', 'binoculars');
        comp_comp512.code = '<span class="fa fa-binoculars"></span>';
        comp_comp512.parent_selector = null;
        f.addComponentType(comp_comp512);

        var comp_comp513 = new PgComponentType('comp513', 'plug');
        comp_comp513.code = '<span class="fa fa-plug"></span>';
        comp_comp513.parent_selector = null;
        f.addComponentType(comp_comp513);

        var comp_comp514 = new PgComponentType('comp514', 'slideshare');
        comp_comp514.code = '<span class="fa fa-slideshare"></span>';
        comp_comp514.parent_selector = null;
        f.addComponentType(comp_comp514);

        var comp_comp515 = new PgComponentType('comp515', 'twitch');
        comp_comp515.code = '<span class="fa fa-twitch"></span>';
        comp_comp515.parent_selector = null;
        f.addComponentType(comp_comp515);

        var comp_comp516 = new PgComponentType('comp516', 'yelp');
        comp_comp516.code = '<span class="fa fa-yelp"></span>';
        comp_comp516.parent_selector = null;
        f.addComponentType(comp_comp516);

        var comp_comp517 = new PgComponentType('comp517', 'newspaper-o');
        comp_comp517.code = '<span class="fa fa-newspaper-o"></span>';
        comp_comp517.parent_selector = null;
        f.addComponentType(comp_comp517);

        var comp_comp518 = new PgComponentType('comp518', 'wifi');
        comp_comp518.code = '<span class="fa fa-wifi"></span>';
        comp_comp518.parent_selector = null;
        f.addComponentType(comp_comp518);

        var comp_comp519 = new PgComponentType('comp519', 'calculator');
        comp_comp519.code = '<span class="fa fa-calculator"></span>';
        comp_comp519.parent_selector = null;
        f.addComponentType(comp_comp519);

        var comp_comp520 = new PgComponentType('comp520', 'paypal');
        comp_comp520.code = '<span class="fa fa-paypal"></span>';
        comp_comp520.parent_selector = null;
        f.addComponentType(comp_comp520);

        var comp_comp521 = new PgComponentType('comp521', 'google-wallet');
        comp_comp521.code = '<span class="fa fa-google-wallet"></span>';
        comp_comp521.parent_selector = null;
        f.addComponentType(comp_comp521);

        var comp_comp522 = new PgComponentType('comp522', 'cc-visa');
        comp_comp522.code = '<span class="fa fa-cc-visa"></span>';
        comp_comp522.parent_selector = null;
        f.addComponentType(comp_comp522);

        var comp_comp523 = new PgComponentType('comp523', 'cc-mastercard');
        comp_comp523.code = '<span class="fa fa-cc-mastercard"></span>';
        comp_comp523.parent_selector = null;
        f.addComponentType(comp_comp523);

        var comp_comp524 = new PgComponentType('comp524', 'cc-discover');
        comp_comp524.code = '<span class="fa fa-cc-discover"></span>';
        comp_comp524.parent_selector = null;
        f.addComponentType(comp_comp524);

        var comp_comp525 = new PgComponentType('comp525', 'cc-amex');
        comp_comp525.code = '<span class="fa fa-cc-amex"></span>';
        comp_comp525.parent_selector = null;
        f.addComponentType(comp_comp525);

        var comp_comp526 = new PgComponentType('comp526', 'cc-paypal');
        comp_comp526.code = '<span class="fa fa-cc-paypal"></span>';
        comp_comp526.parent_selector = null;
        f.addComponentType(comp_comp526);

        var comp_comp527 = new PgComponentType('comp527', 'cc-stripe');
        comp_comp527.code = '<span class="fa fa-cc-stripe"></span>';
        comp_comp527.parent_selector = null;
        f.addComponentType(comp_comp527);

        var comp_comp528 = new PgComponentType('comp528', 'bell-slash');
        comp_comp528.code = '<span class="fa fa-bell-slash"></span>';
        comp_comp528.parent_selector = null;
        f.addComponentType(comp_comp528);

        var comp_comp529 = new PgComponentType('comp529', 'bell-slash-o');
        comp_comp529.code = '<span class="fa fa-bell-slash-o"></span>';
        comp_comp529.parent_selector = null;
        f.addComponentType(comp_comp529);

        var comp_comp530 = new PgComponentType('comp530', 'trash');
        comp_comp530.code = '<span class="fa fa-trash"></span>';
        comp_comp530.parent_selector = null;
        f.addComponentType(comp_comp530);

        var comp_comp531 = new PgComponentType('comp531', 'copyright');
        comp_comp531.code = '<span class="fa fa-copyright"></span>';
        comp_comp531.parent_selector = null;
        f.addComponentType(comp_comp531);

        var comp_comp532 = new PgComponentType('comp532', 'at');
        comp_comp532.code = '<span class="fa fa-at"></span>';
        comp_comp532.parent_selector = null;
        f.addComponentType(comp_comp532);

        var comp_comp533 = new PgComponentType('comp533', 'eyedropper');
        comp_comp533.code = '<span class="fa fa-eyedropper"></span>';
        comp_comp533.parent_selector = null;
        f.addComponentType(comp_comp533);

        var comp_comp534 = new PgComponentType('comp534', 'paint-brush');
        comp_comp534.code = '<span class="fa fa-paint-brush"></span>';
        comp_comp534.parent_selector = null;
        f.addComponentType(comp_comp534);

        var comp_comp535 = new PgComponentType('comp535', 'birthday-cake');
        comp_comp535.code = '<span class="fa fa-birthday-cake"></span>';
        comp_comp535.parent_selector = null;
        f.addComponentType(comp_comp535);

        var comp_comp536 = new PgComponentType('comp536', 'area-chart');
        comp_comp536.code = '<span class="fa fa-area-chart"></span>';
        comp_comp536.parent_selector = null;
        f.addComponentType(comp_comp536);

        var comp_comp537 = new PgComponentType('comp537', 'pie-chart');
        comp_comp537.code = '<span class="fa fa-pie-chart"></span>';
        comp_comp537.parent_selector = null;
        f.addComponentType(comp_comp537);

        var comp_comp538 = new PgComponentType('comp538', 'line-chart');
        comp_comp538.code = '<span class="fa fa-line-chart"></span>';
        comp_comp538.parent_selector = null;
        f.addComponentType(comp_comp538);

        var comp_comp539 = new PgComponentType('comp539', 'lastfm');
        comp_comp539.code = '<span class="fa fa-lastfm"></span>';
        comp_comp539.parent_selector = null;
        f.addComponentType(comp_comp539);

        var comp_comp540 = new PgComponentType('comp540', 'lastfm-square');
        comp_comp540.code = '<span class="fa fa-lastfm-square"></span>';
        comp_comp540.parent_selector = null;
        f.addComponentType(comp_comp540);

        var comp_comp541 = new PgComponentType('comp541', 'toggle-off');
        comp_comp541.code = '<span class="fa fa-toggle-off"></span>';
        comp_comp541.parent_selector = null;
        f.addComponentType(comp_comp541);

        var comp_comp542 = new PgComponentType('comp542', 'toggle-on');
        comp_comp542.code = '<span class="fa fa-toggle-on"></span>';
        comp_comp542.parent_selector = null;
        f.addComponentType(comp_comp542);

        var comp_comp543 = new PgComponentType('comp543', 'bicycle');
        comp_comp543.code = '<span class="fa fa-bicycle"></span>';
        comp_comp543.parent_selector = null;
        f.addComponentType(comp_comp543);

        var comp_comp544 = new PgComponentType('comp544', 'bus');
        comp_comp544.code = '<span class="fa fa-bus"></span>';
        comp_comp544.parent_selector = null;
        f.addComponentType(comp_comp544);

        var comp_comp545 = new PgComponentType('comp545', 'ioxhost');
        comp_comp545.code = '<span class="fa fa-ioxhost"></span>';
        comp_comp545.parent_selector = null;
        f.addComponentType(comp_comp545);

        var comp_comp546 = new PgComponentType('comp546', 'angellist');
        comp_comp546.code = '<span class="fa fa-angellist"></span>';
        comp_comp546.parent_selector = null;
        f.addComponentType(comp_comp546);

        var comp_comp547 = new PgComponentType('comp547', 'cc');
        comp_comp547.code = '<span class="fa fa-cc"></span>';
        comp_comp547.parent_selector = null;
        f.addComponentType(comp_comp547);

        var comp_comp548 = new PgComponentType('comp548', 'shekel');
        comp_comp548.code = '<span class="fa fa-shekel"></span>';
        comp_comp548.parent_selector = null;
        f.addComponentType(comp_comp548);

        var comp_comp549 = new PgComponentType('comp549', 'sheqel');
        comp_comp549.code = '<span class="fa fa-sheqel"></span>';
        comp_comp549.parent_selector = null;
        f.addComponentType(comp_comp549);

        var comp_comp550 = new PgComponentType('comp550', 'ils');
        comp_comp550.code = '<span class="fa fa-ils"></span>';
        comp_comp550.parent_selector = null;
        f.addComponentType(comp_comp550);

        var comp_comp551 = new PgComponentType('comp551', 'meanpath');
        comp_comp551.code = '<span class="fa fa-meanpath"></span>';
        comp_comp551.parent_selector = null;
        f.addComponentType(comp_comp551);

        var comp_comp552 = new PgComponentType('comp552', 'buysellads');
        comp_comp552.code = '<span class="fa fa-buysellads"></span>';
        comp_comp552.parent_selector = null;
        f.addComponentType(comp_comp552);

        var comp_comp553 = new PgComponentType('comp553', 'connectdevelop');
        comp_comp553.code = '<span class="fa fa-connectdevelop"></span>';
        comp_comp553.parent_selector = null;
        f.addComponentType(comp_comp553);

        var comp_comp554 = new PgComponentType('comp554', 'dashcube');
        comp_comp554.code = '<span class="fa fa-dashcube"></span>';
        comp_comp554.parent_selector = null;
        f.addComponentType(comp_comp554);

        var comp_comp555 = new PgComponentType('comp555', 'forumbee');
        comp_comp555.code = '<span class="fa fa-forumbee"></span>';
        comp_comp555.parent_selector = null;
        f.addComponentType(comp_comp555);

        var comp_comp556 = new PgComponentType('comp556', 'leanpub');
        comp_comp556.code = '<span class="fa fa-leanpub"></span>';
        comp_comp556.parent_selector = null;
        f.addComponentType(comp_comp556);

        var comp_comp557 = new PgComponentType('comp557', 'sellsy');
        comp_comp557.code = '<span class="fa fa-sellsy"></span>';
        comp_comp557.parent_selector = null;
        f.addComponentType(comp_comp557);

        var comp_comp558 = new PgComponentType('comp558', 'shirtsinbulk');
        comp_comp558.code = '<span class="fa fa-shirtsinbulk"></span>';
        comp_comp558.parent_selector = null;
        f.addComponentType(comp_comp558);

        var comp_comp559 = new PgComponentType('comp559', 'simplybuilt');
        comp_comp559.code = '<span class="fa fa-simplybuilt"></span>';
        comp_comp559.parent_selector = null;
        f.addComponentType(comp_comp559);

        var comp_comp560 = new PgComponentType('comp560', 'skyatlas');
        comp_comp560.code = '<span class="fa fa-skyatlas"></span>';
        comp_comp560.parent_selector = null;
        f.addComponentType(comp_comp560);

        var comp_comp561 = new PgComponentType('comp561', 'cart-plus');
        comp_comp561.code = '<span class="fa fa-cart-plus"></span>';
        comp_comp561.parent_selector = null;
        f.addComponentType(comp_comp561);

        var comp_comp562 = new PgComponentType('comp562', 'cart-arrow-down');
        comp_comp562.code = '<span class="fa fa-cart-arrow-down"></span>';
        comp_comp562.parent_selector = null;
        f.addComponentType(comp_comp562);

        var comp_comp563 = new PgComponentType('comp563', 'diamond');
        comp_comp563.code = '<span class="fa fa-diamond"></span>';
        comp_comp563.parent_selector = null;
        f.addComponentType(comp_comp563);

        var comp_comp564 = new PgComponentType('comp564', 'ship');
        comp_comp564.code = '<span class="fa fa-ship"></span>';
        comp_comp564.parent_selector = null;
        f.addComponentType(comp_comp564);

        var comp_comp565 = new PgComponentType('comp565', 'user-secret');
        comp_comp565.code = '<span class="fa fa-user-secret"></span>';
        comp_comp565.parent_selector = null;
        f.addComponentType(comp_comp565);

        var comp_comp566 = new PgComponentType('comp566', 'motorcycle');
        comp_comp566.code = '<span class="fa fa-motorcycle"></span>';
        comp_comp566.parent_selector = null;
        f.addComponentType(comp_comp566);

        var comp_comp567 = new PgComponentType('comp567', 'street-view');
        comp_comp567.code = '<span class="fa fa-street-view"></span>';
        comp_comp567.parent_selector = null;
        f.addComponentType(comp_comp567);

        var comp_comp568 = new PgComponentType('comp568', 'heartbeat');
        comp_comp568.code = '<span class="fa fa-heartbeat"></span>';
        comp_comp568.parent_selector = null;
        f.addComponentType(comp_comp568);

        var comp_comp569 = new PgComponentType('comp569', 'venus');
        comp_comp569.code = '<span class="fa fa-venus"></span>';
        comp_comp569.parent_selector = null;
        f.addComponentType(comp_comp569);

        var comp_comp570 = new PgComponentType('comp570', 'mars');
        comp_comp570.code = '<span class="fa fa-mars"></span>';
        comp_comp570.parent_selector = null;
        f.addComponentType(comp_comp570);

        var comp_comp571 = new PgComponentType('comp571', 'mercury');
        comp_comp571.code = '<span class="fa fa-mercury"></span>';
        comp_comp571.parent_selector = null;
        f.addComponentType(comp_comp571);

        var comp_comp572 = new PgComponentType('comp572', 'transgender');
        comp_comp572.code = '<span class="fa fa-transgender"></span>';
        comp_comp572.parent_selector = null;
        f.addComponentType(comp_comp572);

        var comp_comp573 = new PgComponentType('comp573', 'transgender-alt');
        comp_comp573.code = '<span class="fa fa-transgender-alt"></span>';
        comp_comp573.parent_selector = null;
        f.addComponentType(comp_comp573);

        var comp_comp574 = new PgComponentType('comp574', 'venus-double');
        comp_comp574.code = '<span class="fa fa-venus-double"></span>';
        comp_comp574.parent_selector = null;
        f.addComponentType(comp_comp574);

        var comp_comp575 = new PgComponentType('comp575', 'mars-double');
        comp_comp575.code = '<span class="fa fa-mars-double"></span>';
        comp_comp575.parent_selector = null;
        f.addComponentType(comp_comp575);

        var comp_comp576 = new PgComponentType('comp576', 'venus-mars');
        comp_comp576.code = '<span class="fa fa-venus-mars"></span>';
        comp_comp576.parent_selector = null;
        f.addComponentType(comp_comp576);

        var comp_comp577 = new PgComponentType('comp577', 'mars-stroke');
        comp_comp577.code = '<span class="fa fa-mars-stroke"></span>';
        comp_comp577.parent_selector = null;
        f.addComponentType(comp_comp577);

        var comp_comp578 = new PgComponentType('comp578', 'mars-stroke-v');
        comp_comp578.code = '<span class="fa fa-mars-stroke-v"></span>';
        comp_comp578.parent_selector = null;
        f.addComponentType(comp_comp578);

        var comp_comp579 = new PgComponentType('comp579', 'mars-stroke-h');
        comp_comp579.code = '<span class="fa fa-mars-stroke-h"></span>';
        comp_comp579.parent_selector = null;
        f.addComponentType(comp_comp579);

        var comp_comp580 = new PgComponentType('comp580', 'neuter');
        comp_comp580.code = '<span class="fa fa-neuter"></span>';
        comp_comp580.parent_selector = null;
        f.addComponentType(comp_comp580);

        var comp_comp581 = new PgComponentType('comp581', 'facebook-official');
        comp_comp581.code = '<span class="fa fa-facebook-official"></span>';
        comp_comp581.parent_selector = null;
        f.addComponentType(comp_comp581);

        var comp_comp582 = new PgComponentType('comp582', 'pinterest-p');
        comp_comp582.code = '<span class="fa fa-pinterest-p"></span>';
        comp_comp582.parent_selector = null;
        f.addComponentType(comp_comp582);

        var comp_comp583 = new PgComponentType('comp583', 'whatsapp');
        comp_comp583.code = '<span class="fa fa-whatsapp"></span>';
        comp_comp583.parent_selector = null;
        f.addComponentType(comp_comp583);

        var comp_comp584 = new PgComponentType('comp584', 'server');
        comp_comp584.code = '<span class="fa fa-server"></span>';
        comp_comp584.parent_selector = null;
        f.addComponentType(comp_comp584);

        var comp_comp585 = new PgComponentType('comp585', 'user-plus');
        comp_comp585.code = '<span class="fa fa-user-plus"></span>';
        comp_comp585.parent_selector = null;
        f.addComponentType(comp_comp585);

        var comp_comp586 = new PgComponentType('comp586', 'user-times');
        comp_comp586.code = '<span class="fa fa-user-times"></span>';
        comp_comp586.parent_selector = null;
        f.addComponentType(comp_comp586);

        var comp_comp587 = new PgComponentType('comp587', 'hotel');
        comp_comp587.code = '<span class="fa fa-hotel"></span>';
        comp_comp587.parent_selector = null;
        f.addComponentType(comp_comp587);

        var comp_comp588 = new PgComponentType('comp588', 'bed');
        comp_comp588.code = '<span class="fa fa-bed"></span>';
        comp_comp588.parent_selector = null;
        f.addComponentType(comp_comp588);

        var comp_comp589 = new PgComponentType('comp589', 'viacoin');
        comp_comp589.code = '<span class="fa fa-viacoin"></span>';
        comp_comp589.parent_selector = null;
        f.addComponentType(comp_comp589);

        var comp_comp590 = new PgComponentType('comp590', 'train');
        comp_comp590.code = '<span class="fa fa-train"></span>';
        comp_comp590.parent_selector = null;
        f.addComponentType(comp_comp590);

        var comp_comp591 = new PgComponentType('comp591', 'subway');
        comp_comp591.code = '<span class="fa fa-subway"></span>';
        comp_comp591.parent_selector = null;
        f.addComponentType(comp_comp591);

        var comp_comp592 = new PgComponentType('comp592', 'medium');
        comp_comp592.code = '<span class="fa fa-medium"></span>';
        comp_comp592.parent_selector = null;
        f.addComponentType(comp_comp592);

        //Tell Pinegrow about the framework
        pinegrow.addFramework(f);

        var section = new PgFrameworkLibSection('fontAwesome_lib', 'Components');
        //Pass components in array
        section.setComponentTypes([comp_comp1, comp_comp2, comp_comp3, comp_comp4, comp_comp5, comp_comp6, comp_comp7, comp_comp8, comp_comp9, comp_comp10, comp_comp11, comp_comp12, comp_comp13, comp_comp14, comp_comp15, comp_comp16, comp_comp17, comp_comp18, comp_comp19, comp_comp20, comp_comp21, comp_comp22, comp_comp23, comp_comp24, comp_comp25, comp_comp26, comp_comp27, comp_comp28, comp_comp29, comp_comp30, comp_comp31, comp_comp32, comp_comp33, comp_comp34, comp_comp35, comp_comp36, comp_comp37, comp_comp38, comp_comp39, comp_comp40, comp_comp41, comp_comp42, comp_comp43, comp_comp44, comp_comp45, comp_comp46, comp_comp47, comp_comp48, comp_comp49, comp_comp50, comp_comp51, comp_comp52, comp_comp53, comp_comp54, comp_comp55, comp_comp56, comp_comp57, comp_comp58, comp_comp59, comp_comp60, comp_comp61, comp_comp62, comp_comp63, comp_comp64, comp_comp65, comp_comp66, comp_comp67, comp_comp68, comp_comp69, comp_comp70, comp_comp71, comp_comp72, comp_comp73, comp_comp74, comp_comp75, comp_comp76, comp_comp77, comp_comp78, comp_comp79, comp_comp80, comp_comp81, comp_comp82, comp_comp83, comp_comp84, comp_comp85, comp_comp86, comp_comp87, comp_comp88, comp_comp89, comp_comp90, comp_comp91, comp_comp92, comp_comp93, comp_comp94, comp_comp95, comp_comp96, comp_comp97, comp_comp98, comp_comp99, comp_comp100, comp_comp101, comp_comp102, comp_comp103, comp_comp104, comp_comp105, comp_comp106, comp_comp107, comp_comp108, comp_comp109, comp_comp110, comp_comp111, comp_comp112, comp_comp113, comp_comp114, comp_comp115, comp_comp116, comp_comp117, comp_comp118, comp_comp119, comp_comp120, comp_comp121, comp_comp122, comp_comp123, comp_comp124, comp_comp125, comp_comp126, comp_comp127, comp_comp128, comp_comp129, comp_comp130, comp_comp131, comp_comp132, comp_comp133, comp_comp134, comp_comp135, comp_comp136, comp_comp137, comp_comp138, comp_comp139, comp_comp140, comp_comp141, comp_comp142, comp_comp143, comp_comp144, comp_comp145, comp_comp146, comp_comp147, comp_comp148, comp_comp149, comp_comp150, comp_comp151, comp_comp152, comp_comp153, comp_comp154, comp_comp155, comp_comp156, comp_comp157, comp_comp158, comp_comp159, comp_comp160, comp_comp161, comp_comp162, comp_comp163, comp_comp164, comp_comp165, comp_comp166, comp_comp167, comp_comp168, comp_comp169, comp_comp170, comp_comp171, comp_comp172, comp_comp173, comp_comp174, comp_comp175, comp_comp176, comp_comp177, comp_comp178, comp_comp179, comp_comp180, comp_comp181, comp_comp182, comp_comp183, comp_comp184, comp_comp185, comp_comp186, comp_comp187, comp_comp188, comp_comp189, comp_comp190, comp_comp191, comp_comp192, comp_comp193, comp_comp194, comp_comp195, comp_comp196, comp_comp197, comp_comp198, comp_comp199, comp_comp200, comp_comp201, comp_comp202, comp_comp203, comp_comp204, comp_comp205, comp_comp206, comp_comp207, comp_comp208, comp_comp209, comp_comp210, comp_comp211, comp_comp212, comp_comp213, comp_comp214, comp_comp215, comp_comp216, comp_comp217, comp_comp218, comp_comp219, comp_comp220, comp_comp221, comp_comp222, comp_comp223, comp_comp224, comp_comp225, comp_comp226, comp_comp227, comp_comp228, comp_comp229, comp_comp230, comp_comp231, comp_comp232, comp_comp233, comp_comp234, comp_comp235, comp_comp236, comp_comp237, comp_comp238, comp_comp239, comp_comp240, comp_comp241, comp_comp242, comp_comp243, comp_comp244, comp_comp245, comp_comp246, comp_comp247, comp_comp248, comp_comp249, comp_comp250, comp_comp251, comp_comp252, comp_comp253, comp_comp254, comp_comp255, comp_comp256, comp_comp257, comp_comp258, comp_comp259, comp_comp260, comp_comp261, comp_comp262, comp_comp263, comp_comp264, comp_comp265, comp_comp266, comp_comp267, comp_comp268, comp_comp269, comp_comp270, comp_comp271, comp_comp272, comp_comp273, comp_comp274, comp_comp275, comp_comp276, comp_comp277, comp_comp278, comp_comp279, comp_comp280, comp_comp281, comp_comp282, comp_comp283, comp_comp284, comp_comp285, comp_comp286, comp_comp287, comp_comp288, comp_comp289, comp_comp290, comp_comp291, comp_comp292, comp_comp293, comp_comp294, comp_comp295, comp_comp296, comp_comp297, comp_comp298, comp_comp299, comp_comp300, comp_comp301, comp_comp302, comp_comp303, comp_comp304, comp_comp305, comp_comp306, comp_comp307, comp_comp308, comp_comp309, comp_comp310, comp_comp311, comp_comp312, comp_comp313, comp_comp314, comp_comp315, comp_comp316, comp_comp317, comp_comp318, comp_comp319, comp_comp320, comp_comp321, comp_comp322, comp_comp323, comp_comp324, comp_comp325, comp_comp326, comp_comp327, comp_comp328, comp_comp329, comp_comp330, comp_comp331, comp_comp332, comp_comp333, comp_comp334, comp_comp335, comp_comp336, comp_comp337, comp_comp338, comp_comp339, comp_comp340, comp_comp341, comp_comp342, comp_comp343, comp_comp344, comp_comp345, comp_comp346, comp_comp347, comp_comp348, comp_comp349, comp_comp350, comp_comp351, comp_comp352, comp_comp353, comp_comp354, comp_comp355, comp_comp356, comp_comp357, comp_comp358, comp_comp359, comp_comp360, comp_comp361, comp_comp362, comp_comp363, comp_comp364, comp_comp365, comp_comp366, comp_comp367, comp_comp368, comp_comp369, comp_comp370, comp_comp371, comp_comp372, comp_comp373, comp_comp374, comp_comp375, comp_comp376, comp_comp377, comp_comp378, comp_comp379, comp_comp380, comp_comp381, comp_comp382, comp_comp383, comp_comp384, comp_comp385, comp_comp386, comp_comp387, comp_comp388, comp_comp389, comp_comp390, comp_comp391, comp_comp392, comp_comp393, comp_comp394, comp_comp395, comp_comp396, comp_comp397, comp_comp398, comp_comp399, comp_comp400, comp_comp401, comp_comp402, comp_comp403, comp_comp404, comp_comp405, comp_comp406, comp_comp407, comp_comp408, comp_comp409, comp_comp410, comp_comp411, comp_comp412, comp_comp413, comp_comp414, comp_comp415, comp_comp416, comp_comp417, comp_comp418, comp_comp419, comp_comp420, comp_comp421, comp_comp422, comp_comp423, comp_comp424, comp_comp425, comp_comp426, comp_comp427, comp_comp428, comp_comp429, comp_comp430, comp_comp431, comp_comp432, comp_comp433, comp_comp434, comp_comp435, comp_comp436, comp_comp437, comp_comp438, comp_comp439, comp_comp440, comp_comp441, comp_comp442, comp_comp443, comp_comp444, comp_comp445, comp_comp446, comp_comp447, comp_comp448, comp_comp449, comp_comp450, comp_comp451, comp_comp452, comp_comp453, comp_comp454, comp_comp455, comp_comp456, comp_comp457, comp_comp458, comp_comp459, comp_comp460, comp_comp461, comp_comp462, comp_comp463, comp_comp464, comp_comp465, comp_comp466, comp_comp467, comp_comp468, comp_comp469, comp_comp470, comp_comp471, comp_comp472, comp_comp473, comp_comp474, comp_comp475, comp_comp476, comp_comp477, comp_comp478, comp_comp479, comp_comp480, comp_comp481, comp_comp482, comp_comp483, comp_comp484, comp_comp485, comp_comp486, comp_comp487, comp_comp488, comp_comp489, comp_comp490, comp_comp491, comp_comp492, comp_comp493, comp_comp494, comp_comp495, comp_comp496, comp_comp497, comp_comp498, comp_comp499, comp_comp500, comp_comp501, comp_comp502, comp_comp503, comp_comp504, comp_comp505, comp_comp506, comp_comp507, comp_comp508, comp_comp509, comp_comp510, comp_comp511, comp_comp512, comp_comp513, comp_comp514, comp_comp515, comp_comp516, comp_comp517, comp_comp518, comp_comp519, comp_comp520, comp_comp521, comp_comp522, comp_comp523, comp_comp524, comp_comp525, comp_comp526, comp_comp527, comp_comp528, comp_comp529, comp_comp530, comp_comp531, comp_comp532, comp_comp533, comp_comp534, comp_comp535, comp_comp536, comp_comp537, comp_comp538, comp_comp539, comp_comp540, comp_comp541, comp_comp542, comp_comp543, comp_comp544, comp_comp545, comp_comp546, comp_comp547, comp_comp548, comp_comp549, comp_comp550, comp_comp551, comp_comp552, comp_comp553, comp_comp554, comp_comp555, comp_comp556, comp_comp557, comp_comp558, comp_comp559, comp_comp560, comp_comp561, comp_comp562, comp_comp563, comp_comp564, comp_comp565, comp_comp566, comp_comp567, comp_comp568, comp_comp569, comp_comp570, comp_comp571, comp_comp572, comp_comp573, comp_comp574, comp_comp575, comp_comp576, comp_comp577, comp_comp578, comp_comp579, comp_comp580, comp_comp581, comp_comp582, comp_comp583, comp_comp584, comp_comp585, comp_comp586, comp_comp587, comp_comp588, comp_comp589, comp_comp590, comp_comp591, comp_comp592]);

        f.addLibSection(section);
    });
});