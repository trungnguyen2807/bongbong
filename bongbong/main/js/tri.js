$(document).ready(function() {
    // process bar

    setTimeout(function() {
        myFunction();
        $(".spinner").fadeOut();
        $("#preloader").delay(350).fadeOut("slow");
        $("body").delay(350).css({
            overflow: "visible",
        });
    }, 600);


    // First popup
    function myFunction() {
        $(".content").hide();
        var x = window.matchMedia("(orientation: portrait)");
        x.addListener(myFunction)
        if (x.matches) { // If media query matches

            $("body").css('background', '-webkit-radial-gradient(center center, circle farthest-corner, #0066ff 0%, #63cc9b 100%)');
            Swal.fire({
                title: "Hmmm",
                text: "Quay ngang màn hình điiii",
                allowOutsideClick: false,
                imageUrl: "img/cuteCat.jpg",
                imageWidth: 300,
                imageHeight: 300,
                imageAlt: "Custom image",
            }).then(function() {
                alert('Quay ngang màn hình ló hiện thị mới đẹp :3');
                location.reload();

            });
        } else {

            $("body").css('background', 'linear-gradient(to right, #12c2e9, #c471ed, #f64f59)');
            Swal.fire({
                title: "Hello bạn Bống nha",
                text: "Sẵn sàng nè",
                imageUrl: "img/cuteDog.jpg",
                allowOutsideClick: false,
                imageWidth: 180,
                imageHeight: 180,
                imageAlt: "Custom image",
            }).then(function() {
                $("body").css('background', '')
                $(".content").show(200);
                textRun();

            });
        }
    }



});


! function(e, t, a) {
    function n() {
        c(".heart{width: 20px;height: 20px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;}.heart:after{top: -10px;}.heart:before{left: -10px;}"), o(), r()
    }

    function r() {
        for (var e = 0; e < d.length; e++) d[e].alpha <= 0 ? (t.body.removeChild(d[e].el), d.splice(e, 1)) : (d[e].y--, d[e].scale += .004, d[e].alpha -= .013, d[e].el.style.cssText = "left:" + d[e].x + "px;top:" + d[e].y + "px;opacity:" + d[e].alpha + ";transform:scale(" + d[e].scale + "," + d[e].scale + ") rotate(45deg);background:" + d[e].color + ";z-index:99999");
        requestAnimationFrame(r)
    }

    function o() {
        var t = "function" == typeof e.onclick && e.onclick;
        e.onclick = function(e) {
            t && t(), i(e)
        }
    }

    function i(e) {
        var a = t.createElement("div");
        a.className = "heart", d.push({
            el: a,
            x: e.clientX - 5,
            y: e.clientY - 5,
            scale: 1,
            alpha: 1,
            color: s()
        }), t.body.appendChild(a)
    }

    function c(e) {
        var a = t.createElement("style");
        a.type = "text/css";
        try {
            a.appendChild(t.createTextNode(e))
        } catch (t) {
            a.styleSheet.cssText = e
        }
        t.getElementsByTagName("head")[0].appendChild(a)
    }

    function s() {
        return "rgb(" + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + ")"
    }
    var d = [];
    e.requestAnimationFrame = function() {
        return e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function(e) {
            setTimeout(e, 1e3 / 60)
        }
    }(), n()
}(window, document);


var skipText = function() {
    document.getElementById('txt').innerText = "Ten Tèn"

}





var getGift = function() {

    var audio = new Audio("sound/ting.mp3");
    audio.play();
    Swal.fire({
        allowOutsideClick: false,
        title: 'Congratulations, you have received a gift.',
        imageUrl: 'img/gift.jpg',

        showCancelButton: true,

        cancelButtonColor: '#d33',
        cancelButtonText: 'Hông cần đâu Bống lớn gòi',
        confirmButtonText: 'Nhận quà ngay nè ',
        background: '#000 url(https://ak.picdn.net/shutterstock/videos/32053024/thumb/1.jpg)',
        backdrop: `
    rgba(0,0,123,0.4)
    url("https://sweetalert2.github.io//images/nyan-cat.gif")
    left top
    no-repeat
  `,
    }).then((result) => {



        // Click 'Nhận quà ngay nè :3'
        if (result.isConfirmed) {
            var audio = new Audio("sound/tick.mp3");
            audio.play();
            Swal.fire({
                allowOutsideClick: false,
                title: 'Xin cái mật khẩu coi',
                input: 'text',
                inputLabel: 'Mô tả mật khẩu',
                inputPlaceholder: 'Mã xác nhận là gì đây ?',
                inputValidator: (value) => {
                    // incorrect password
                    if (value !== "bongbong") {

                        return "<img src='img/failed.png'>" + '\xa0' + 'Mật khẩu sai mất rùi 😴!'
                    }




                    // correct password
                    else {
                        var audio = new Audio("sound/right.mp3");
                        setTimeout(() => {
                            audio.play();
                        }, 700);
                        var okLoading = "<div class='loadingio-spinner-ellipsis-zp5c364ixso'><div class='ldio-c7qbq6vrmcp'><div></div><div></div><div></div><div></div><div></div></div></div>";
                        Swal.fire({
                            html: okLoading,
                            showConfirmButton: false,
                            background: 'none',
                        });
                        setTimeout(() => {
                            Swal.fire({
                                icon: 'success',
                                html: "<p id='successPass'>Okii Chính xác nè 😍</p>",
                                showConfirmButton: false,
                                allowOutsideClick: false,
                                timer: 2000,
                                allowOutsideClick: false,
                            }).then(function showGift() { //sau khi nhập pass đúng
                                Swal.fire({ //hien qua gifPopUp
                                    title: "Nhận quà nè",
                                    html: true,
                                    width: 900,
                                    padding: "3em",
                                    html: "<input type='text' class='form-control' id='txtReason'  placeholder='Nhập quà nèee'>",
                                    background: '#fff url("img/iput-bg.jpg")',
                                    backdrop: `
                      rgba(0,0,123,0.4)
                      url("img/giphy2.gif")
                      left top
                      no-repeat
                    `,
                                    showCancelButton: true,
                                    confirmButtonColor: "#3085d6",
                                    cancelButtonText: "Thôi ngại lém ",
                                    cancelButtonColor: "#d33",
                                    confirmButtonColor: "#fe8a71",
                                    cancelButtonColor: "#f6cd61",
                                    confirmButtonText: "Gửi cho bạn Nguyên đz :3",
                                }).then((result) => {
                                    if (result.value) { // khi nhấn có
                                        Swal.fire({
                                            width: 900,
                                            background: '#fff url("img/iput-bg.jpg")',
                                            title: 'Hihi đùa thôi lập trình sẵn rồi nè :))',
                                            text: "Còn nhiều bất ngờ ở phía sau lắm nha",
                                            timer: 5000,
                                            showConfirmButton: false,
                                        }).then(() => { //điều hướng trang sang 'textTyping'
                                            window.location = '../textTyping/index.html';
                                        })
                                    } else { // khi nhấn không
                                        Swal.fire({
                                            title: 'Ngại gì mà ko nhận',
                                            confirmButtonText: 'Nhận luôn',
                                            allowOutsideClick: false,
                                        }).then(() => { //khi nhấn ok
                                            showGift();
                                        })
                                    }
                                });
                                //hàm tự động typeText

                                var textHandWrite = "Thôi lớn gòi không nhận quà đâu nhé................................................................";

                                function textGenerate() {
                                    var n = "";
                                    var text = " " + textHandWrite;
                                    var a = Array.from(text);
                                    var textVal = $("#txtReason").val() ? $("#txtReason").val() : "";
                                    var count = textVal.length;
                                    if (count > 0) {
                                        for (let i = 1; i <= count; i++) {
                                            n = n + a[i];
                                            if (i == text.length + 1) {
                                                $("#txtReason").val("");
                                                n = "";
                                                break;
                                            }
                                        }
                                    }
                                    $("#txtReason").val(n);
                                }

                                $("#txtReason").focus(function() {
                                    var handleWriteText = setInterval(function() {
                                        textGenerate();
                                    }, 10);
                                    $("#txtReason").blur(function() {
                                        clearInterval(handleWriteText);
                                    });
                                });

                            }); // ket thuc giftPopUp




                        }, 1500); // end setTimeout





                    }
                }

            })
            var cssText = document.getElementById('swal2-title').style;
            cssText.fontStyle = 'normal';
            cssText.fontWeight = 'normal';
            cssText.color = '#0072ff';



        }




        // Click 'Hông, deo can :('
        else if (result.dismiss === Swal.DismissReason.cancel) {
            var audio = new Audio("sound/duck.mp3");
            audio.play();

            Swal.fire({
                    background: '#000 url(img/bg_HongDeoCan.jpg)',
                    title: 'Cho mà hông nhận ',
                    text: 'Không phải ngại đâu nhé hihi',
                    iconHtml: '😒',
                    didOpen: () => {
                        // đổi màu viền cho đẹp
                        var swal12_style = $("#triVip>div.swal2-container.swal2-center.swal2-backdrop-show>div");
                        swal12_style.css("border-style", "solid")
                    }
                })
                .then(function() {
                    let timerInterval
                    Swal.fire({
                            background: '#000 url(img/bg_HongDeoCan.jpg)',
                            title: 'Cho 5s suy nghị lại nè',
                            html: '<b></b>',
                            timer: 5000,
                            allowOutsideClick: false,
                            timerProgressBar: true,
                            didOpen: () => {
                                Swal.showLoading()
                                const b = Swal.getHtmlContainer().querySelector('b')
                                timerInterval = setInterval(() => {
                                    b.textContent = Swal.getTimerLeft()
                                }, 100)
                            },
                            willClose: () => {
                                clearInterval(timerInterval)
                            }
                        })
                        // đổi màu viền cho đẹp
                    var swal12_style = $("#triVip>div.swal2-container.swal2-center.swal2-backdrop-show>div");
                    swal12_style.css("border-style", "solid")


                    // vong lap khi chọn false
                }).then(function() {
                    setTimeout(getGift, 5500);
                });
            var cssText = document.getElementById('swal2-title').style;
            cssText.fontStyle = 'normal';
            cssText.fontWeight = 'normal';
            cssText.color = '#ff0b0b';
        }
    })


};




var a = function() {
    var textAnimate = document.getElementById('txt').innerText;
    if (textAnimate == 'Ten Tèn') {
        var el = document.getElementById('stylePop');
        el.href = "css/popup.css";
        setTimeout(getGift, 1000);
        clearInterval(interval_obj);
    };
}
var interval_obj = setInterval(a, 1);