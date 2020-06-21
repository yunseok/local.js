let currentHoverImage;

$("td:nth-child(1)").on("mouseenter", function() {
    $("td:nth-child(2)").removeClass("a")
    $(this).siblings().addClass("a")
});

$(document).on("mouseenter", ".works", function() {
    $(".works").removeClass("hover")
    $("tr").siblings().find(".works").removeClass("active");
    $(this).addClass("hover");
});

$("table").on("mouseleave", function() {
    $(".works").removeClass("hover").removeClass("active");
});

$(".works-item").on("mouseenter", function() {
    $(".works-item").removeClass("hover");
    $(this).addClass("hover")
    $(".works.hover").addClass("active")
}).on("mouseleave", function() {
    $(".works-item").removeClass("hover");
});

$(".title").on("click", function() {
    $("section").hide();
    $("tr").addClass("a");
    $("table tr").not("tr.b").show()
    $("table tr").show().addClass("a")
    $("tr").addClass("a");
});

$("td.about").bind('touchstart mousedown', function() {
    $("table tr").removeClass("a");
    $(".works").removeClass("hover").removeClass("active");
    $("td:nth-child(2)").removeClass("a");
    $("section.about").show();
    $("table tr").not("tr.b").hide()
});

$("td.contact").bind('touchstart mousedown', function() {
    $("table tr").removeClass("a");
    $(".works").removeClass("hover").removeClass("active");
    $("td:nth-child(2)").removeClass("a");
    $("section.contact").show();
    $("table tr").not("tr.b").hide()
});

$("#halza").bind("mouseenter", function() {
    $("#img").css("display", "block");
    setBackground("https://thumbs.gfycat.com/WelltodoFrighteningBobolink.webp");
});

$("#halza").bind("mouseleave", function() {
    $("#img").css("display", "none");
    setBackground(null);
});

$("#chantelivre").bind("mouseenter", function() {
    $("#img").css("display", "block");
    setBackground("https://thumbs.gfycat.com/AjarBrownKinglet.webp");
});

$("#chantelivre").bind("mouseleave", function() {
    $("#img").css("display", "none");
    setBackground(null);
});

$("#wikipedia").bind("mouseenter", function() {
    $("#img").css("display", "block");
    setBackground("https://thumbs.gfycat.com/DemandingRashGiraffe.webp");
});

$("#wikipedia").bind("mouseleave", function() {
    $("#img").css("display", "none");
    setBackground(null);
});

$("#roche").bind("mouseenter", function() {
    $("#img").css("display", "block");
    setBackground("https://thumbs.gfycat.com/AssuredUnkemptAtlanticblackgoby.webp");
});

$("#roche").bind("mouseleave", function() {
    $("#img").css("display", "none");
    setBackground(null);
});

$("#plastic-scandal").bind("mouseenter", function() {
    $("#img").css("display", "block");
    setBackground("https://thumbs.gfycat.com/HighlevelWealthyHarrier.webp");
});

$("#plastic-scandal").bind("mouseleave", function() {
    $("#img").css("display", "none");
    setBackground(null);
});

$("#be").bind("mouseenter", function() {
    $("#img").css("display", "block");
    setBackground("https://thumbs.gfycat.com/BiodegradableJoyousEchidna.webp");
});

$("#be").bind("mouseleave", function() {
    $("#img").css("display", "none");
    setBackground(null);
});

$("#radio-soulwax").bind("mouseenter", function() {
    $("#img").css("display", "block");
    setBackground("https://thumbs.gfycat.com/MadAptBlackpanther.webp");
});

$("#radio-soulwax").bind("mouseleave", function() {
    $("#img").css("display", "none");
    setBackground(null);
});

$("#rc").bind("mouseenter", function() {
    $("#img").css("display", "block");
    setBackground("https://thumbs.gfycat.com/ScarceCluelessAngwantibo.webp");
});

$("#rc").bind("mouseleave", function() {
    $("#img").css("display", "none");
    setBackground(null);
});

$("#harpy").bind("mouseenter", function() {
    $("#img").css("display", "block");
    setBackground("https://thumbs.gfycat.com/FeminineRemarkableChuckwalla.webp");
});

$("#harpy").bind("mouseleave", function() {
    $("#img").css("display", "none");
    setBackground(null);
});

$("#bigscreener").bind("mouseenter", function() {
    $("#img").css("display", "block");
    setBackground("https://thumbs.gfycat.com/DeepPoisedCommongonolek.webp");
});

$("#bigscreener").bind("mouseleave", function() {
    $("#img").css("display", "none");
    setBackground(null);
});



(function() {
  
    var set = function(x, opts) {
        var _pt = [{
          x: 0,
          y: 0
        }, {
          x: 0,
          y: 0
        }, {
          x: 0,
          y: 0
        }];
        var rnd1 = [Math.random() + 1, Math.random() + 1, Math.random() + 1];
        var rnd2 = [0, 0, 0];
        var cnt = 0;
        var arr = [];
        var loop = null;
        var t = null;
        var _h = opts._h;
        var _w = opts._w;
        var img = opts.img;
        var mshov = false;
    
        x.css({
          position: "relative"
        });
    
          x.append("<div></div>");
          x.find("div").css({
            backgroundImage: "url(" + img + ")",
            backgroundRepeat: "no-repeat",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            height: "100vh"
          });
    
        if (opts.auto) {
          t = setInterval(function() {
            if (mshov) return;
            go();
    
            setTimeout(pause, opts.delay / 2 * Math.random());
          }, opts.delay);
        }
    
        x.mouseover(go);
        x.mouseout(pause);
    
        function go() {
          mshov = true;
          clearInterval(loop);
          loop = setInterval(run, 30);
        }
    
        function pause() {
          mshov = false;
          clearInterval(loop);
          loop = null;
        }
    
        function run() {
          var i;
            if (rnd1[i] >= 1) {
              --rnd1[i];
              rnd2[i] = Math.random() / 4 + 0.03;
            }
            rnd1[i] += rnd2[i];
            cnt += (38 - cnt) * 0.25;
            _pt[i].x = Math.ceil(Math.sin(rnd1[i] * Math.PI * 2) * rnd2[i] * cnt * 2);
            _pt[i].y = 0;
          var num = (Math.abs(_pt[0].x) + Math.abs(_pt[1].x) + Math.abs(_pt[2].x) + 8) / 4;
    
          i = _h;
          while (i -= 1) {
            var _off = Math.sin(i / _h * Math.PI * (Math.random() / 8 + 1)) * 0.8 * num * num;
            arr[i].css({
              left: _off + "px "
            });
          }
        }
      };
    
      jQuery.fn.noisy = function(opts) {
        this.each(function() {
          opts = jQuery.extend({}, jQuery.fn.noisy.defs, opts);
          set(jQuery(this), opts);
        });
      };
    
      jQuery.fn.noisy.defs = {
        _h: 0,
        _w: 0,
        img: "",
        auto: true,
        delay: 2000
      };
    
    })();
    
    function toDataUrl(url, callback) {
      var xhr = new XMLHttpRequest();
      xhr.onload = function() {
          var reader = new FileReader();
          reader.onloadend = function() {
              callback(reader.result);
          }
          reader.readAsDataURL(xhr.response);
      };
      xhr.open('GET', url);
      xhr.responseType = 'blob';
      xhr.send();
    }

function setBackground(background) {
    if (!background) return;

    $("#img").noisy({
        _w: window.innerWidth,
        _h: window.innerHeight,
        img: background
    });

    toDataUrl(background, function(myBase64) {
      console.log(myBase64);
    });  
}

var $img = $("#img");
var data = $img.attr("src");
var maxErrors = 100;
var margin = 2200;

console.log(data);

function update() {
  var corrupted = data;
  if (Math.random() > 0.7) {
    var errors = Math.round(Math.random() * maxErrors)
    for (var i = 0; i < errors; i++) {
      var p = margin + Math.round(Math.random() * (corrupted.length - margin - 1));
      corrupted = corrupted.substr(0, p) + corrupted.charAt(p + 1) + corrupted.charAt(p) + corrupted.substr(p + 2);
    }
  }

  $img.attr("src", corrupted);
}

update();
setInterval(update, 26);

Splitting();