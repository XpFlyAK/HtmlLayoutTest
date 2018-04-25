/**
 * User: hailang
 * Date: 2018/4/18
 * Time: 22:53
 */
window.onload = function () {
    var nav = document.getElementById("nav").children[0].children[1]
    var nav2 = document.getElementById("nav").children[0].children[6]
    var rightsubnav = document.getElementById("rightsubnav")
    var leftsubnav = document.getElementById("leftsubnav")
    nav.onmouseover = function () {
        rightsubnav.style.display = "block"
    }
    nav.onmouseout = function () {
        rightsubnav.style.display = "none"
    }
    nav2.onmouseover = function () {
        leftsubnav.style.display = "block"
    }
    nav2.onmouseout = function () {
        leftsubnav.style.display = "none"
    }
    $(function () {
        $(".theme li").mouseenter(function () {
            $(".theme div").addClass("solim")
            var $show = $(this).children().children().last()
            $show.attr("class", "show1")
            $show.stop()
            $show.animate({
                left: 20,
                opacity: 1,
            }, 200)
        })
        $(".theme li").mouseleave(function () {
            var $show = $(this).children().children().last()
            $show.attr("class", "show")
            $show.stop()
            $show.animate({
                left: 0,
                opacity: 0.2,
            }, 200)
        })
        $(".pages li").mouseenter(function () {
            $(this).addClass("bgc").siblings().removeClass("bgc")
        })
        $(".pages li").first().mouseenter().fadeIn()
    })


}
