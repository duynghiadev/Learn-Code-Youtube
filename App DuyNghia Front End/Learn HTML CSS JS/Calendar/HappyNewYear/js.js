$(document).ready(function () {
  var t = [
      {
        name: "Mậu Tuất",
        m1: Date.parse("Feb 16 2018 00:00:00"),
      },
      {
        name: "Kỷ Hợi",
        m1: Date.parse("Feb 5 2019 00:00:00"),
      },
      {
        name: "Canh Tý",
        m1: Date.parse("Jan 25 2020 00:00:00"),
      },
      {
        name: "Tân Sửu",
        m1: Date.parse("Feb 12 2021 00:00:00"),
      },
      {
        name: "Nhâm Dần",
        m1: Date.parse("Feb 1 2022 00:00:00"),
      },
      {
        name: "Quý Mão",
        m1: Date.parse("Jan 22 2023 00:00:00"),
      },
      {
        name: "Giáp Thìn",
        m1: Date.parse("Feb 10 2024 00:00:00"),
      },
      {
        name: "Ất Tỵ",
        m1: Date.parse("Jan 29 2025 00:00:00"),
      },
    ],
    e = t.length;
  setInterval(function () {
    for (var n = new Date().getTime(), a = 0; a < e; a++) {
      var o = t[a].m1 - 864e5,
        r = t[a].m1 + 864e5,
        m = t[a].m1 + 2592e5;
      if (n <= m) {
        var i = t[a].m1,
          s = !1,
          c = a + 2018,
          g = t[a].name + " " + c,
          p = "Đếm ngược đến Tết " + g + " - Sắp Tết!",
          l = "Sắp Tết rồi!!! Chỉ còn...",
          h = "Chúc",
          u = "Mừng",
          x = "Năm",
          T = "Mới",
          f = "Ngày",
          y = "Giờ",
          d = "Phút",
          C = "Giây";
        if (
          (n >= t[a].m1 &&
            ((i = m),
            n >= r
              ? (l = "Sắp hết Tết rồi!!!")
              : ((s = !0),
                (l = "Tết rồi!!!Tết rồi!!!"),
                (f = "Cung"),
                (y = "Chúc"),
                (d = "Tân"),
                (C = "Xuân"))),
          !s)
        ) {
          var b = i - n;
          (T = Math.floor((b / 1e3) % 60)),
            (x = Math.floor((b / 1e3 / 60) % 60)),
            (u = Math.floor((b / 36e5) % 24)),
            (h = Math.floor(b / 864e5));
        }
        $("#tetornot").text(l),
          $("#days").text(h),
          $("#hours").text(u),
          $("#mins").text(x),
          $("#secs").text(T),
          $("#days-text").text(f),
          $("#hours-text").text(y),
          $("#mins-text").text(d),
          $("#secs-text").text(C),
          $("#tentet").text(g),
          $("#tet").text(g),
          n >= o &&
            ($("html").css({
              background:
                "radial-gradient(ellipse at bottom, #efe81d 0%, #f80f1f 100%)",
            }),
            $(".clock").toggleClass("tet"),
            $(".clock .text").toggleClass("tet")),
          (document.title = p),
          $('meta[name="description"]').attr(
            "content",
            "Còn bao nhiêu ngày nữa đến Tết Nguyên Đán " + g + "?"
          ),
          $('meta[property="og\\:title"]').attr("content", p),
          $('meta[property="og\\:description"]').attr(
            "content",
            "Còn bao nhiêu ngày nữa đến Tết Nguyên Đán " + g + "?"
          ),
          $('meta[property="og\\:image"]').attr("content", "/icon.png");
        break;
      }
    }
  }, 1e3);
});
