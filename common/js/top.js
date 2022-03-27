function topSearchBtn() {
    var job_cls_cd, pref_cd, urlpath_prefix;
    if (location.pathname.match(/^\/sp\//)) { urlpath_prefix = '/sp'; } else { urlpath_prefix = ''; }
    //if(location.pathname.match(/\/indexsss2\.php/) || urlpath_prefix=='/sp'){
    job_cls_cd = $('div.popin div.popct ul li input:checked').map(function () {
        return $(this).val();
    }).get().join(',');
    pref_cd = $('div.popin div.areain div ul li input:checked').map(function () {
        return $(this).val();
    }).get().join(',');
    if (job_cls_cd != '') {
        if (pref_cd != '') {
            location.href = urlpath_prefix + '/search/' + job_cls_cd + '/' + pref_cd + '/';
        } else {
            location.href = urlpath_prefix + '/search/' + job_cls_cd + '/';
        }
    } else if (pref_cd != '') {
        location.href = urlpath_prefix + '/search/jb/' + pref_cd + '/';
    } else {
        location.href = urlpath_prefix + '/search/';
    }
    /*
        } else{
        if( $('#job_clss_cd').val() !=''){
            if( $('#pref_cd').val() !=''){
                location.href='/search/'+$('#job_clss_cd').val()+'/'+$('#pref_cd').val()+'/';
            } else{
                location.href='/search/'+$('#job_clss_cd').val()+'/';
            }
        } else if( $('#pref_cd').val() != ''){
            location.href='/search/jb/'+$('#pref_cd').val()+'/';
        } else{
            location.href='/search/';
        }
        }
    */
}

function topPopupSearchBtn(type) {
    var job_cls, pref, param;

    job_cls = $('div.popin div.popct ul li input:checked').map(function () {
        return $(this).next('label').text();
    }).get().join(' / ');

    pref = $('div.popin div.areain div ul li input:checked').map(function () {
        return $(this).next('label').text();
    }).get().join(' / ');

    param = 'job_cls=' + encodeURIComponent(job_cls);
    param += '&pref=' + encodeURIComponent(pref);

    //alert(param);
    $.ajax({
        type: 'POST', url: '/api/top_job_count.php', data: param,
        success: function (re) {
            $('#job_count_field').html(re);
        }
    });

    if (type == 'job_cls') {
        if (job_cls == '') { job_cls = '職種を選択'; }
        $('#job_cls_view_field').html(job_cls);
    } else if (type == 'pref') {
        if (pref == '') { pref = '勤務地を選択'; }
        $('#pref_view_field').html(pref);
    }
    //    return false;
}

function topPopupJobClsSearchBtn() {
    topPopupSearchBtn('job_cls');
    /*
        var job_cls, pref, param;

        job_cls = $('div.popin div.popct ul li input:checked').map(function(){
            return $(this).next('label').text();
        }).get().join(' / ');

        pref = $('div.popin div.areain div ul li input:checked').map(function(){
            return $(this).next('label').text();
        }).get().join(' / ');

        param = 'job_cls='+encodeURIComponent(job_cls);
        param += '&pref='+encodeURIComponent(pref);

        $.ajax({
            type:'POST', url:'/api/top_job_count.php', data: param,
            success: function(re){
                $('#job_count_field').html(re);
            }
        });

        if(job_cls == ''){ job_cls='職種を選択'; }
        $('#job_cls_view_field').html(job_cls);
        return false;
    */
}
function topPopupJobClsClearBtn() {
    $('div.popin div.popct ul li input:checked').map(function () {
        $(this).prop('checked', false);
    });
    //    return false;
}

function topPopupPrefSearchBtn() {
    topPopupSearchBtn('pref');
    /*
        var job_cls, pref, param;

        job_cls = $('div.popin div.popct ul li input:checked').map(function(){
            return $(this).next('label').text();
        }).get().join(' / ');

        pref = $('div.popin div.areain div ul li input:checked').map(function(){
            return $(this).next('label').text();
        }).get().join(' / ');

        param = 'job_cls='+encodeURIComponent(job_cls);
        param += '&pref='+encodeURIComponent(pref);

        $.ajax({
            type:'POST', url:'/api/top_job_count.php', data: param,
            success: function(re){
                $('#job_count_field').html(re);
            }
        });

        if( pref == ''){ pref='勤務地を選択'; }
        $('#pref_view_field').html(pref);

        return false;
    */
}
function topPopupPrefClearBtn() {
    $('#popup_pref_view_field').html('　');
    $('div.popin div.areain div ul li input:checked').map(function () {
        $(this).prop('checked', false);
    })
}
function topPopupPrefCheckbox() {
    var pref = $('div.popin div.areain div ul li input:checked').map(function () {
        return $(this).next('label').text();
    }).get().join(' / ');
    if (pref == '') { pref = '　'; }
    $('#popup_pref_view_field').html(pref);
}
/*
var pref = $('div.popin div.areain div ul li input:checked').map(function(){
    return $(this).next('label').text();
}).get().join(' / ');
if( pref == ''){ pref='　'; }
$('#popup_pref_view_field').html(pref);
*/




function topSearchBtn2() {
    var job_cls_cd, area, url, license;
    var urlpath_prefix, tab_num;
    if (location.pathname.match(/^\/sp\//)) { urlpath_prefix = '/sp'; } else { urlpath_prefix = ''; }
    area = $('div.areabox div.areain div ul li input:checked').map(function () {
        return $(this).val();
        // return v.val();
    }).get().join(',');
    //alert(area);

    tab_num = 1;
    if (urlpath_prefix == '/sp') {
        if ($('#tab2 a').attr('class') == 'on') {
            tab_num = 2;
        }
    } else if ($('#tab2').attr('class') == 'on') {
        tab_num = 2;
    }

    url = '';
    //alert($('#tab1').attr('class'));
    //if( $('#tab1').attr('class') == 'on'){
    if (tab_num == 1) {
        job_cls_cd = $('div.srcbx.tab1 ul li input:checked').map(function () {
            return $(this).val();
        }).get().join(',');

        if (job_cls_cd != '') {
            if (area != '') {
                url = urlpath_prefix + '/search/' + job_cls_cd + '/' + area + '/';
            } else {
                url = urlpath_prefix + '/search/' + job_cls_cd + '/';
            }
        }
        //} else if( $('#tab2').attr('class') == 'on'){
    } else if (tab_num == 2) {
        license = $('div.srcbx.tab2 ul li input:checked').map(function () {
            return $(this).val();
        }).get().join(',');


        if (license != '') {

            if (area != '') {
                url = urlpath_prefix + '/search/jb/' + area + '/st/wk/ep/' + license + '/';
            } else {
                url = urlpath_prefix + '/search/jb/ar/st/wk/ep/' + license + '/';
            }
        }
    }
    if (url == '' && area != '') {
        url = urlpath_prefix + '/search/jb/' + area + '/';
    }
    if (url != '') {
        location.href = url;
    } else {
        location.href = urlpath_prefix + '/search/';
    }
}
window.addEventListener('DOMContentLoaded', function () {
    var swiper03 = new Swiper('.ik-m-recommend-offer .swiper-container', {
        paginationClickable: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        loop: false,
        slidesPerView: 3,
        spaceBetween: 4,
    });
}, false);

