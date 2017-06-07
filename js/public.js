/**
 * Created by Administrator on 2016/11/9.
 */
$(function () {


    $('.list-title').on('click', function () {
        var list_v_dis = $(this).next('.list-view').css('display');
        if (list_v_dis == 'block') {
            $(this).find('.icon-angle-left').removeClass('icon-angle-left').addClass('icon-angle-down');
            $(this).next('.list-view').slideUp(500);
        } else if (list_v_dis == 'none') {
            $(this).find('.icon-angle-down').removeClass('icon-angle-down').addClass('icon-angle-left');
            $(this).next('.list-view').slideDown(500);
        }
    });


    $('.icon-th-list').on('click', function () {
        var num = $(this).attr('data-num');
        if (num == 1) {
            $('.mask').css('display', 'block');
            $('.nav-aside').addClass('active');

            $(this).attr('data-num', '0')
        } else if (num == 0) {
            $('.mask').css('display', 'none');
            $('.nav-aside').removeClass('active');
            $(this).attr('data-num', '1')
        }

    });

    $('.mask').on('click', function () {
        $(this).hide();
        $('.nav-aside').removeClass('active');
        $('.icon-th-list').attr('data-num', '1')

    })


    check();
    function check() {

        $('[class*="pb"] thead tr th:first-child input').on('click', function () {
            if ($(this).is(":checked")) {
                $('[class*="pb"] tr td:first-child input').each(function () {
                    $(this).prop("checked", true);

                })
            }
            else {
                $('[class*="pb"] tr td:first-child input').each(function () {
                    $(this).prop("checked", false);
                })
            }

        })
    }



});