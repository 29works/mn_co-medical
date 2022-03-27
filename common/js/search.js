/*

function searchCheck(job_ofr_no){

    var param;

    param = 'job_ofr_no='+ job_ofr_no;

    $.ajax({

        type:"POST", url:"/api/check_save.php", data: param,

        success: function(re){

            alert('求人No.['+job_ofr_no+']を保存しました');

            if($('#checked_btn').length){

                $('#checked_btn').val('保存した求人 '+re+'件');

            }

        }

    });

}

*/

function searchCheck(job_ofr_no){

    var param;

    param = 'job_ofr_no='+ job_ofr_no;

    $(".start").addClass("active");

    $.ajax({

        type:"POST", url:"/api/check_save.php", data: param,

        success: function(re){

            setTimeout(function(){

            alert('求人No.['+job_ofr_no+']を保存しました');

            if($('span.check-job-ct').length){

                $('span.check-job-ct').html(re);

            }

            if($('#checked_btn').length){

                $('#checked_btn').val('保存した求人 '+re+'件');

            }

        },1000);

        }

    });

    setTimeout(function(){

        $(".start").removeClass("active");

  },1000);

  }



  function searchCheckDel(job_ofr_no_result_page){

    var param;

    var job_ofr_no = '';

    var location_flg = 1;

    if(job_ofr_no_result_page) {

        job_ofr_no = job_ofr_no_result_page;

        location_flg = 0;

    } else {

        $('[name=\'recruitno\']:checked').each(function(){

            job_ofr_no+=','+$(this).val();

        });

        job_ofr_no = job_ofr_no.replace(/^,+/g, '');

    }

    param = 'job_ofr_no='+ job_ofr_no;

    param += '&f=del';

    $.ajax({

        type:"POST", url:"/api/check_save.php", data: param,

        success: function(re){

            alert('保存した求人の削除をしました。');

            //location.href="/check/";

            if(location_flg == 1) {

                location.href=location.pathname;

            } else {

                if($('span.check-job-ct').length){

                    $('span.check-job-ct').html(re);

                }

                if($('#checked_btn').length){

                    $('#checked_btn').val('保存した求人 '+re+'件');

                }

            }

        }

    });

  }

  function searchRecentlyDel(){

    var param;

    var job_ofr_no = '';

    $('[name=\'recruitno\']:checked').each(function(){

        job_ofr_no+=','+$(this).val();

    });

    job_ofr_no = job_ofr_no.replace(/^,+/g, '');



    param = 'job_ofr_no='+ job_ofr_no;

    param += '&f=del';

    $.ajax({

        type:"POST", url:"/api/recently_save.php", data: param,

        success: function(re){

            alert('最近見た求人の削除をしました。');

            //location.href="/recently/";

            location.href=location.pathname;

        }

    });

  }





  /****

  function searchCondition(condition, condition_name){

    var param;

    param  = 'condition='      + encodeURIComponent(condition);

    param += '&condition_name='+ encodeURIComponent(condition_name);

    $.ajax({

        type:"POST", url:"/api/condition_save.php", data: param,

        success: function(re){

            alert('現在の検索条件を保存しました');

            if($('#condition_btn').length){

                $('#condition_btn').val('保存した検索条件 '+re+'件');

            }

        }

    });

  }

  ****/

  function searchCondition(condition, condition_name){

    var param;

    param  = 'condition='      + encodeURIComponent(condition);

    param += '&condition_name='+ encodeURIComponent(condition_name);

    $.ajax({

        type:"POST", url:"/api/condition_save.php", data: param,

        success: function(re){

            alert('現在の検索条件を保存しました');

            if($('#condition_btn').length){

                $('#condition_btn').val('保存した検索条件 '+re+'件');

            }

            if($('span.condition-job-ct').length){

                $('span.condition-job-ct').html(re);

            }

        }

    });

  }







  function searchConditionDel(condition){

    var param;

    param  = 'condition='      + encodeURIComponent(condition);

    param += '&f=del';

    $.ajax({

        type:"POST", url:"/api/condition_save.php", data: param,

        success: function(re){

            alert('検索条件の削除をしました。');

            //location.href="/condition/";

            location.href=location.pathname;

        }

    });

  }



  function searchCheckedApplication(){

    var recruitno = '';

    $('[name=\'recruitno\']:checked').each(function(){

        recruitno+=','+$(this).val();

    });

    recruitno = recruitno.replace(/^,+/g, '');

    // alert(recruitno);

    if( recruitno != '' ){

        if(location.pathname.match(/^\/sp\//)){

            location.href='/sp/application/application.php?recruitno='+recruitno;

        } else{

            location.href='/application/application.php?recruitno='+recruitno;

        }

    }

  }



    function searchCityChg(n, city_cd){

        var param,json,re,i,val,k,v,htm;

        param = 'pref_cd='+encodeURIComponent($('#ar_'+n).val());



        $.ajax({

            type:'POST', url:'/api/cities.php', data: param,

            success: function(re){

                //alert(re);

                htm='<option value="">選択してください</option>';

                $('#ci_'+n).html(htm);

                if(re !==''){

                    json = $.parseJSON(re);

                    $(json).each(function(i,val){

                        $.each(val,function(k,v){

                            htm+='<option value="'+k+'">'+v+'</option>';

                        });

                        $('#ci_'+n).html(htm);

                        if(city_cd && city_cd.length){

                            $('#ci_'+n).val(city_cd);

                        }

                    });

                }

            }

        });

    }







