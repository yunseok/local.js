(function () {
  var set = function (x, opts) {
    var _pt = [
      {
        x: 0,
        y: 0,
      },
      {
        x: 0,
        y: 0,
      },
      {
        x: 0,
        y: 0,
      },
    ];
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
      position: "relative",
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
      height: "100vh",
    });

    if (opts.auto) {
      t = setInterval(function () {
        if (mshov) return;
        go();

        setTimeout(pause, (opts.delay / 2) * Math.random());
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
      var num =
        (Math.abs(_pt[0].x) + Math.abs(_pt[1].x) + Math.abs(_pt[2].x) + 8) / 4;

      i = _h;
      while ((i -= 1)) {
        var _off =
          Math.sin((i / _h) * Math.PI * (Math.random() / 8 + 1)) *
          0.8 *
          num *
          num;
        arr[i].css({
          left: _off + "px ",
        });
      }
    }
  };

  jQuery.fn.noisy = function (opts) {
    this.each(function () {
      opts = jQuery.extend({}, jQuery.fn.noisy.defs, opts);
      set(jQuery(this), opts);
    });
  };

  jQuery.fn.noisy.defs = {
    _h: 0,
    _w: 0,
    img: "",
    auto: true,
    delay: 2000,
  };
})();
