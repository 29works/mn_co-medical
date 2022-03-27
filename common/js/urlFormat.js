function urlFormat(frm) {
    
    url = "/search/";
    
    var flg = {
        jb: false,
        ar: false,
        st: false,
        wk: false,
        ep: false,
        cf: false,
        fe: false,
        kw: false
    };
    
    // 職種
    if(frm["jb[]"] != undefined) {
        //if (frm["jb[]"].value == "") {
        //    url += "jb/";
        //} else {
            tmpStr = "";
            for(cnt=0;cnt<frm["jb[]"].length;cnt++){ 
                if(frm["jb[]"][cnt].checked) {
                    tmpStr += frm["jb[]"][cnt].value + ",";
                }
            }
            if (tmpStr != "") {
                url = url + tmpStr.slice(0,-1) + "/";
                flg.jb = true;
            } else {
                url += "jb/";
            }
        //}
    } else {
        url += "jb/";
    }
    // 地域
    if(frm["ar[]"] != undefined && $("input[name='lc']:checked").val() == "01") {
        //if (frm["ar[]"].value == "") {
        //    url += "ar/";
        //} else {
            tmpStr = "";
            for(cnt=0;cnt<frm["ar[]"].length;cnt++){ 
                if (frm["ar[]"][cnt].value == "") {
                    continue;
                } else {
                    //tmpStr += frm["ar[]"][cnt].value + ",";
                    tmpStr += frm["ar[]"][cnt].value;
                    //if(frm["ci[]"][cnt].length){
                    if($('#ci_'+(cnt+1))){
                        tmpStr += '-'+$('#ci_'+(cnt+1)).val();
                    }
                    tmpStr += ',';
                }
            }
            if (tmpStr != "") {
                url = url + tmpStr.slice(0,-1) + "/";
                flg.ar = true;
            } else {
                url += "ar/";
            }
        //}
        //トップページからの場合
    } else if($("input[name='lc']:checked").val() == undefined) {
        //if (frm["ar[]"].value == "") {
        //   url += "ar/";
        //} else {
            tmpStr = "";
            for(cnt=0;cnt<frm["ar[]"].length;cnt++){ 
                if(frm["ar[]"][cnt].checked) {
                    tmpStr += frm["ar[]"][cnt].value + ",";
                }
            }
            if (tmpStr != "") {
                url = url + tmpStr.slice(0,-1) + "/";
                flg.ar = true;
            } else {
                url += "ar/";
            }
        //}
    } else {
        url += "ar/";
    }
    // 路線
    if(frm["st[]"] != undefined && $("input[name='lc']:checked").val() == "02") {
        //if (frm["st[]"].value == "") {
        //    url += "st/";
        //} else {
            tmpStr = "";
            for(cnt=0;cnt<frm["st[]"].length;cnt++){ 
                if (frm["st[]"][cnt].value == "") {
                    continue;
                } else {
                    tmpStr += frm["st[]"][cnt].value + ",";
                }
            }
            if (tmpStr != "") {
                url = url + tmpStr.slice(0,-1) + "/";
                flg.st = true;
            } else {
                url += "st/";
            }
        //}
    } else {
        url += "st/";
    }
    // 仕事内容
    if(frm["wk[]"] != undefined) {
        //if (frm["wk[]"].value == "") {
        //   url += "wk/";
        //} else {
            tmpStr = "";
            for(cnt=0;cnt<frm["wk[]"].length;cnt++){ 
                if(frm["wk[]"][cnt].checked) {
                    tmpStr += frm["wk[]"][cnt].value + ",";
                }
            }
            if (tmpStr != "") {
                url = url + tmpStr.slice(0,-1) + "/";
                flg.wk = true;
            } else {
                url += "wk/";
            }
        //}
    } else {
        url += "wk/";
    }
    // 雇用形態
    if(frm["ep[]"] != undefined) {
        //if (frm["ep[]"].value == "") {
        //    url += "ep/";
        //} else {
            tmpStr = "";
            for(cnt=0;cnt<frm["ep[]"].length;cnt++){ 
                if(frm["ep[]"][cnt].checked) {
                    tmpStr += frm["ep[]"][cnt].value + ",";
                }
            }
            if (tmpStr != "") {
                url = url + tmpStr.slice(0,-1) + "/";
                flg.ep = true;
            } else {
                url += "ep/";
            }
        //}
    } else {
        url += "ep/";
    }
    // 資格
    if(frm["cf[]"] != undefined) {
        //if (frm["cf[]"].value == "") {
        //    url += "cf/";
        //} else {
            tmpStr = "";
            for(cnt=0;cnt<frm["cf[]"].length;cnt++){ 
                if(frm["cf[]"][cnt].checked) {
                    tmpStr += frm["cf[]"][cnt].value + ",";
                }
            }
            if (tmpStr != "") {
                url = url + tmpStr.slice(0,-1) + "/";
                flg.cf = true;
            } else {
                url += "cf/";
            }
        //}
    } else {
        url += "cf/";
    }
    // こだわり条件
    if(frm["fe[]"] != undefined) {
        //if (frm["fe[]"].value == "") {
        //    url += "fe/";
        //} else {
            tmpStr = "";
            for(cnt=0;cnt<frm["fe[]"].length;cnt++){ 
                if(frm["fe[]"][cnt].checked) {
                    tmpStr += frm["fe[]"][cnt].value + ",";
                }
            }
            if (tmpStr != "") {
                url = url + tmpStr.slice(0,-1) + "/";
                flg.fe = true;
            } else {
                url += "fe/";
            }
        //}
    } else {
        url += "fe/";
    }
    // フリーワード
    if(frm["kw"] != undefined) {
        if (frm["kw"].value == "") {
            url += "kw/";
        } else {
            if("例：新宿区　介護士" != frm["kw"].value) {
               url += frm["kw"].value + "/";
                flg.kw = true;
            } else {
                url += "kw/";
            }
        }
    } else {
        url += "kw/";
    }
    
    // 不要なディレクトリを末尾から削除
    var tmp = [
        'kw',
        'fe',
        'cf',
        'ep',
        'wk',
        'st',
        'ar',
        'jb'
    ];
    var trueFlg = false;
    for (var i=0, len=tmp.length; i<len; i++) {
        if (flg[tmp[i]] === true) {
            trueFlg = true;
        } else if (trueFlg !== true) {
            url = url.replace(tmp[i] + '/', '');
        }
    }
    
    return url;
    //url += "result.php";
    //location.href = url;
}
