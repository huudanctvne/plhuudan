/* Extracted inline scripts from index.html */

/* ===== Script Block 1 ===== */
window.ladi_viewport = function (b) {
        var a = document;
        b = b ? b : "innerWidth";
        var c = window[b];
        var d = true;
        if (
          typeof window.ladi_is_desktop == "undefined" ||
          window.ladi_is_desktop == undefined
        ) {
          window.ladi_is_desktop = !d;
        }
        var e = 960;
        var f = 420;
        var g = "";
        if (!d) {
          g = "width=" + e + ",user-scalable=no,initial-scale=1.0";
        } else {
          var h = 1;
          var i = f;
          if (i != c) {
            h = c / i;
          }
          g =
            "width=" +
            i +
            ",user-scalable=no,initial-scale=" +
            h +
            ",minimum-scale=" +
            h +
            ",maximum-scale=" +
            h;
        }
        var j = a.getElementById("viewport");
        if (!j) {
          j = a.createElement("meta");
          j.id = "viewport";
          j.name = "viewport";
          a.head.appendChild(j);
        }
        j.setAttribute("content", g);
      };
      window.ladi_viewport();
      window.ladi_fbq_data = [];
      window.ladi_fbq = function () {
        window.ladi_fbq_data.push(arguments);
      };
      window.ladi_ttq_data = [];
      window.ladi_ttq = function () {
        window.ladi_ttq_data.push(arguments);
      };

/* ===== Script Block 2 ===== */


/* ===== Script Block 3 ===== */


/* ===== Script Block 4 ===== */


/* ===== Script Block 5 ===== */
{
        "IMAGE3": { "a": "image", "D": "pulse", "A": "0s" },
        "COUNTDOWN_ITEM1": { "a": "countdown_item", "bY": "day" },
        "COUNTDOWN_ITEM2": { "a": "countdown_item", "bY": "hour" },
        "COUNTDOWN_ITEM3": { "a": "countdown_item", "bY": "minute" },
        "COUNTDOWN_ITEM4": { "a": "countdown_item", "bY": "seconds" },
        "COUNTDOWN1": {
          "a": "countdown",
          "bX": "endtime",
          "bT": 1778374800000
        },
        "HEADLINE3": {
          "option.is_product_mapping_name_custom": true,
          "a": "headline",
          "D": "fadeInDown",
          "A": "0s"
        },
        "HEADLINE4": {
          "option.is_product_mapping_name_custom": true,
          "a": "headline"
        },
        "HEADLINE5": {
          "option.is_product_mapping_name_custom": true,
          "a": "headline"
        },
        "HEADLINE6": {
          "option.is_product_mapping_name_custom": true,
          "a": "headline"
        },
        "HEADLINE17": {
          "option.is_product_mapping_name_custom": true,
          "a": "headline",
          "F": "fadeInDown",
          "C": "0s"
        },
        "HEADLINE18": {
          "option.is_product_mapping_name_custom": true,
          "a": "headline",
          "F": "fadeInRight",
          "C": "0s"
        },
        "HEADLINE19": {
          "option.is_product_mapping_name_custom": true,
          "a": "headline",
          "F": "fadeInLeft",
          "C": "1s"
        },
        "HEADLINE20": {
          "option.is_product_mapping_name_custom": true,
          "a": "headline",
          "F": "fadeInLeft",
          "C": "0s"
        },
        "HEADLINE22": {
          "option.is_product_mapping_name_custom": true,
          "a": "headline",
          "F": "fadeInDown",
          "C": "0s"
        },
        "HEADLINE23": {
          "option.is_product_mapping_name_custom": true,
          "a": "headline",
          "F": "fadeInLeft",
          "C": "1s"
        },
        "HEADLINE24": {
          "option.is_product_mapping_name_custom": true,
          "a": "headline",
          "F": "fadeInLeft",
          "C": "0s"
        },
        "HEADLINE25": {
          "option.is_product_mapping_name_custom": true,
          "a": "headline",
          "F": "pulse",
          "C": "0s"
        },
        "HEADLINE26": {
          "option.is_product_mapping_name_custom": true,
          "a": "headline",
          "F": "fadeInLeft",
          "C": "0s"
        },
        "HEADLINE27": {
          "option.is_product_mapping_name_custom": true,
          "a": "headline"
        },
        "GROUP6": {
          "a": "group",
          "cs": [
            {
              "dr": "action",
              "dv": "_blank",
              "dw": "https://maps.app.goo.gl/EqgrhhWk7vfXXbVN7",
              "a": "link"
            }
          ],
          "D": "pulse",
          "A": "1s"
        },
        "HEADLINE28": {
          "option.is_product_mapping_name_custom": true,
          "a": "headline",
          "F": "fadeInLeft",
          "C": "0s"
        },
        "HEADLINE29": {
          "option.is_product_mapping_name_custom": true,
          "a": "headline",
          "F": "bounceIn",
          "C": "1s"
        },
        "GROUP7": { "a": "group", "D": "fadeInUp", "A": "1s" },
        "GROUP9": { "a": "group", "D": "rotateInDownRight", "A": "1s" },
        "HEADLINE30": {
          "option.is_product_mapping_name_custom": true,
          "a": "headline",
          "F": "fadeInLeft",
          "C": "1s"
        },
        "HEADLINE31": {
          "option.is_product_mapping_name_custom": true,
          "a": "headline",
          "F": "fadeInLeft",
          "C": "0s"
        },
        "HEADLINE32": {
          "option.is_product_mapping_name_custom": true,
          "a": "headline",
          "F": "fadeInLeft",
          "C": "0s"
        },
        "HEADLINE33": {
          "option.is_product_mapping_name_custom": true,
          "a": "headline",
          "F": "fadeInLeft",
          "C": "0s"
        },
        "HEADLINE35": {
          "option.is_product_mapping_name_custom": true,
          "a": "headline",
          "F": "fadeInRight",
          "C": "0s"
        },
        "HEADLINE36": {
          "option.is_product_mapping_name_custom": true,
          "a": "headline",
          "F": "fadeInRight",
          "C": "1s"
        },
        "HEADLINE37": {
          "option.is_product_mapping_name_custom": true,
          "a": "headline",
          "F": "fadeInRight",
          "C": "0s"
        },
        "HEADLINE38": {
          "option.is_product_mapping_name_custom": true,
          "a": "headline",
          "F": "fadeInRight",
          "C": "1s"
        },
        "HEADLINE39": {
          "option.is_product_mapping_name_custom": true,
          "a": "headline",
          "F": "fadeInRight",
          "C": "0s"
        },
        "HEADLINE40": {
          "option.is_product_mapping_name_custom": true,
          "a": "headline",
          "F": "fadeInRight",
          "C": "0s"
        },
        "GROUP16": { "a": "group", "D": "fadeInDown", "A": "1s" },
        "GROUP17": { "a": "group", "D": "rotateInDownLeft", "A": "1s" },
        "IMAGE39": { "a": "image", "D": "fadeInRight", "A": "1s" },
        "HEADLINE41": {
          "option.is_product_mapping_name_custom": true,
          "a": "headline",
          "F": "fadeInDown",
          "C": "1s"
        },
        "HEADLINE42": {
          "option.is_product_mapping_name_custom": true,
          "a": "headline",
          "F": "fadeInRight",
          "C": "1s"
        },
        "HEADLINE43": {
          "option.is_product_mapping_name_custom": true,
          "a": "headline",
          "F": "fadeInUp",
          "C": "1s"
        },
        "GALLERY1": { "a": "gallery", "ah": true, "ae": 5 },
        "HEADLINE45": {
          "option.is_product_mapping_name_custom": true,
          "a": "headline",
          "F": "fadeInDown",
          "C": "0s"
        },
        "BUTTON_TEXT2": {
          "option.is_product_mapping_name_custom": true,
          "a": "headline"
        },
        "FORM_ITEM2": { "a": "form_item", "bS": "text", "bQ": 1 },
        "FORM_ITEM3": { "a": "form_item", "bS": "textarea", "bQ": 4 },
        "FORM_ITEM4": { "a": "form_item", "bS": "radio", "bQ": 3 },
        "FORM2": {
          "option.use_data_leads": true,
          "option.dynamic_form_config": "&#123;&#34;configs&#34;:[],&#34;default_actions&#34;:[&#123;&#34;text_thankyou_value&#34;:&#34;Cáº£m Æ¡n báº¡n Ä‘Ã£ quan tÃ¢m!&#34;,&#34;type&#34;:&#34;form_open_popup&#34;,&#34;no_delete&#34;:true,&#34;id_open_popup&#34;:&#34;POPUP2&#34;&#125;]&#125;",
          "a": "form",
          "bP": "683588c1fb5c5500129608dc",
          "bM": true,
          "by": true,
          "bx": true
        },
        "BUTTON_TEXT3": {
          "option.is_product_mapping_name_custom": true,
          "a": "headline"
        },
        "BUTTON3": {
          "a": "button",
          "cs": [{ "dr": "action", "dw": "POPUP1", "a": "popup" }],
          "D": "pulse",
          "A": "1s"
        },
        "HEADLINE46": {
          "option.is_product_mapping_name_custom": true,
          "a": "headline",
          "D": "fadeInDown",
          "A": "0s"
        },
        "HEADLINE47": {
          "option.is_product_mapping_name_custom": true,
          "a": "headline",
          "F": "fadeInLeft",
          "C": "0s"
        },
        "HEADLINE48": {
          "option.is_product_mapping_name_custom": true,
          "a": "headline",
          "F": "fadeInUp",
          "C": "0s"
        },
        "HEADLINE49": {
          "option.is_product_mapping_name_custom": true,
          "a": "headline",
          "F": "fadeInDown",
          "C": "0s"
        },
        "HEADLINE50": {
          "option.is_product_mapping_name_custom": true,
          "a": "headline",
          "F": "fadeInUpBig",
          "C": "0s"
        },
        "HEADLINE51": {
          "option.is_product_mapping_name_custom": true,
          "a": "headline",
          "F": "fadeInDown",
          "C": "0s"
        },
        "IMAGE52": { "a": "image", "D": "pulse", "A": "0s" },
        "POPUP1": {
          "a": "popup",
          "X": "default",
          "U": "background-color: rgba(0, 0, 0, 0.5);"
        },
        "POPUP2": {
          "a": "popup",
          "X": "default",
          "U": "background-color: rgba(0, 0, 0, 0.5);"
        },
        "HEADLINE52": {
          "option.is_product_mapping_name_custom": true,
          "a": "headline"
        },
        "IMAGE56": { "a": "image", "D": "pulse", "A": "1s" },
        "HEADLINE53": {
          "option.is_product_mapping_name_custom": true,
          "a": "headline",
          "F": "fadeInDown",
          "C": "0s"
        },
        "HEADLINE54": {
          "option.is_product_mapping_name_custom": true,
          "a": "headline",
          "F": "fadeInDown",
          "C": "0s"
        },
        "HEADLINE55": {
          "option.is_product_mapping_name_custom": true,
          "a": "headline",
          "F": "fadeInLeft",
          "C": "0s"
        },
        "HEADLINE56": {
          "option.is_product_mapping_name_custom": true,
          "a": "headline",
          "F": "fadeInLeft",
          "C": "0s"
        },
        "HEADLINE57": {
          "option.is_product_mapping_name_custom": true,
          "a": "headline",
          "F": "fadeInDown",
          "C": "0s"
        },
        "HEADLINE58": {
          "option.is_product_mapping_name_custom": true,
          "a": "headline",
          "F": "fadeInLeft",
          "C": "0s"
        },
        "GROUP39": {
          "a": "group",
          "cs": [
            {
              "dr": "action",
              "dE": ["GROUP40"],
              "dD": ["GROUP26"],
              "a": "hidden_show"
            }
          ]
        },
        "GROUP44": { "a": "group", "D": "fadeInUp", "A": "0s" },
        "HEADLINE65": {
          "option.is_product_mapping_name_custom": true,
          "a": "headline",
          "D": "fadeInDown",
          "A": "0s"
        },
        "HEADLINE66": {
          "option.is_product_mapping_name_custom": true,
          "a": "headline",
          "D": "fadeInRight",
          "A": "1s"
        },
        "HEADLINE67": {
          "option.is_product_mapping_name_custom": true,
          "a": "headline",
          "D": "fadeInLeft",
          "A": "1s"
        },
        "HEADLINE68": {
          "option.is_product_mapping_name_custom": true,
          "a": "headline",
          "F": "fadeInRight",
          "C": "0s"
        },
        "BOX12": { "a": "box", "D": "fadeInLeft", "A": "0s" },
        "BOX13": { "a": "box", "D": "fadeInLeft", "A": "1s" },
        "BOX14": { "a": "box", "D": "fadeInLeft", "A": "1s" },
        "BOX15": { "a": "box", "D": "fadeInLeft", "A": "1s" },
        "HEADLINE69": {
          "option.is_product_mapping_name_custom": true,
          "a": "headline",
          "F": "fadeInDown",
          "C": "0s"
        },
        "HEADLINE70": {
          "option.is_product_mapping_name_custom": true,
          "a": "headline",
          "F": "fadeInDown",
          "C": "1s"
        },
        "HEADLINE71": {
          "option.is_product_mapping_name_custom": true,
          "a": "headline",
          "F": "fadeInUp",
          "C": "1s"
        },
        "HEADLINE72": {
          "option.is_product_mapping_name_custom": true,
          "a": "headline",
          "F": "fadeInDown",
          "C": "1s"
        },
        "HEADLINE73": {
          "option.is_product_mapping_name_custom": true,
          "a": "headline",
          "F": "pulse",
          "C": "1s"
        },
        "HEADLINE74": {
          "option.is_product_mapping_name_custom": true,
          "a": "headline",
          "F": "pulse",
          "C": "1s"
        },
        "HEADLINE75": {
          "option.is_product_mapping_name_custom": true,
          "a": "headline",
          "F": "pulse",
          "C": "1s"
        },
        "HEADLINE76": {
          "option.is_product_mapping_name_custom": true,
          "a": "headline",
          "F": "bounceIn",
          "C": "0s"
        },
        "HEADLINE77": {
          "option.is_product_mapping_name_custom": true,
          "a": "headline",
          "F": "fadeInLeft",
          "C": "0s"
        },
        "HEADLINE78": {
          "option.is_product_mapping_name_custom": true,
          "a": "headline",
          "F": "fadeInDown",
          "C": "0s"
        },
        "IMAGE75": { "a": "image", "D": "pulse", "A": "1s" },
        "HEADLINE79": {
          "option.is_product_mapping_name_custom": true,
          "a": "headline",
          "F": "fadeInLeft",
          "C": "0s"
        },
        "POPUP3": {
          "a": "popup",
          "X": "default",
          "U": "background-color: rgba(0, 0, 0, 0.5);"
        },
        "BUTTON4": {
          "a": "button",
          "cs": [{ "dr": "action", "dL": "0363969323", "a": "copy_clipboard" }]
        },
        "BUTTON_TEXT4": {
          "option.is_product_mapping_name_custom": true,
          "a": "headline"
        },
        "BUTTON5": {
          "a": "button",
          "cs": [{ "dr": "action", "dw": "0363969323", "a": "phone" }]
        },
        "BUTTON_TEXT5": {
          "option.is_product_mapping_name_custom": true,
          "a": "headline"
        },
        "POPUP4": {
          "a": "popup",
          "X": "default",
          "U": "background-color: rgba(0, 0, 0, 0.5);"
        },
        "SHAPE3": {
          "a": "shape",
          "cs": [{ "dr": "action", "dw": "POPUP1", "a": "popup" }]
        },
        "SHAPE4": {
          "a": "shape",
          "cs": [
            {
              "dr": "action",
              "dv": "_blank",
              "dw": "https://www.tiktok.com/@duylinhwedding186",
              "a": "link"
            }
          ]
        },
        "SHAPE5": {
          "a": "shape",
          "cs": [
            {
              "dr": "action",
              "dv": "_blank",
              "dw": "https://www.facebook.com/zuylinh.vn",
              "a": "link"
            }
          ]
        },
        "HEADLINE82": {
          "option.is_product_mapping_name_custom": true,
          "a": "headline"
        },
        "SHAPE6": {
          "a": "shape",
          "cs": [{ "dr": "action", "dw": "POPUP1", "a": "popup" }]
        },
        "SHAPE7": {
          "a": "shape",
          "cs": [
            {
              "dr": "action",
              "dv": "_blank",
              "dw": "https://www.tiktok.com/@duylinhwedding186",
              "a": "link"
            }
          ]
        },
        "SHAPE8": {
          "a": "shape",
          "cs": [
            {
              "dr": "action",
              "dv": "_blank",
              "dw": "https://www.facebook.com/zuylinh.vn",
              "a": "link"
            }
          ]
        },
        "HEADLINE83": {
          "option.is_product_mapping_name_custom": true,
          "a": "headline"
        },
        "HEADLINE84": {
          "option.is_product_mapping_name_custom": true,
          "a": "headline",
          "F": "fadeInUp",
          "C": "0s"
        },
        "HEADLINE85": {
          "option.is_product_mapping_name_custom": true,
          "a": "headline"
        },
        "HEADLINE86": {
          "option.is_product_mapping_name_custom": true,
          "a": "headline"
        },
        "HEADLINE87": {
          "option.is_product_mapping_name_custom": true,
          "a": "headline"
        },
        "HEADLINE88": {
          "option.is_product_mapping_name_custom": true,
          "a": "headline"
        },
        "IMAGE78": { "a": "image", "D": "fadeInDown", "A": "1s" },
        "IMAGE79": { "a": "image", "D": "fadeInDown", "A": "1s" },
        "IMAGE80": { "a": "image", "D": "fadeInDown", "A": "1s" },
        "HEADLINE89": {
          "option.is_product_mapping_name_custom": true,
          "a": "headline",
          "F": "fadeInRight",
          "C": "0s"
        },
        "HEADLINE90": {
          "option.is_product_mapping_name_custom": true,
          "a": "headline",
          "F": "fadeInRight",
          "C": "0s"
        },
        "HEADLINE91": {
          "option.is_product_mapping_name_custom": true,
          "a": "headline",
          "F": "fadeInRight",
          "C": "0s"
        }
      }

/* ===== Script Block 6 ===== */
(function () {
        var run = function () {
          if (
            typeof window.LadiPageScript == "undefined" ||
            typeof window.ladi == "undefined" ||
            window.ladi == undefined
          ) {
            setTimeout(run, 100);
            return;
          }
          window.LadiPageApp = window.LadiPageApp || new window.LadiPageAppV2();
          window.LadiPageScript.runtime.ladipage_id =
            "6834996e4d9ca600120acf75";
          window.LadiPageScript.runtime.publish_platform = "LADIPAGEDNS";
          window.LadiPageScript.runtime.is_mobile_only = true;
          window.LadiPageScript.runtime.version = "1773896661130";
          window.LadiPageScript.runtime.cdn_url =
            "https://w.ladicdn.com/v5/source/";
          window.LadiPageScript.runtime.DOMAIN_SET_COOKIE = ["ziuwedding.site"];
          window.LadiPageScript.runtime.DOMAIN_FREE = [
            "preview.ldpdemo.com",
            "ldp.page",
          ];
          window.LadiPageScript.runtime.bodyFontSize = 12;
          window.LadiPageScript.runtime.store_id = "649340684a3700001217851c";
          window.LadiPageScript.runtime.store_ladiuid =
            "64934067c7f1780012c2a80c";
          window.LadiPageScript.runtime.time_zone = 7;
          window.LadiPageScript.runtime.currency = "VND";
          window.LadiPageScript.runtime.convert_replace_str = true;
          window.LadiPageScript.runtime.desktop_width = 960;
          window.LadiPageScript.runtime.mobile_width = 420;
          window.LadiPageScript.runtime.formdata = true;
          window.LadiPageScript.runtime.tracking_button_click = true;
          window.LadiPageScript.runtime.publish_time = 1773902037268;
          window.LadiPageScript.runtime.lang = "vi";
          window.LadiPageScript.run(true);
          window.LadiPageScript.runEventScroll();
        };
        run();
      })();

/* ===== Script Block 7 ===== */
document.addEventListener("DOMContentLoaded", function () {
        const audio = document.getElementById("background-music");
        const btn = document.getElementById("toggle-music");

        audio.volume = 0.8;

        function startRotate() {
          btn.style.animation = "rotate 2s linear infinite";
        }
        function stopRotate() {
          btn.style.animation = "none";
        }

        // Khi user click button thÃ¬ toggle play/pause
        btn.addEventListener("click", () => {
          if (audio.paused) {
            audio.play();
            btn.textContent = "volume_up";
            startRotate();
          } else {
            audio.pause();
            btn.textContent = "volume_off";
            stopRotate();
          }
        });

        // Äáº£m báº£o autoplay khi user láº§n Ä‘áº§u tÆ°Æ¡ng tÃ¡c (náº¿u cáº§n)
        function tryPlay() {
          if (audio.paused) {
            audio
              .play()
              .then(() => {
                btn.textContent = "volume_up";
                startRotate();
              })
              .catch(() => {
                /* bá»‹ cháº·n thÃ¬ thÃ´i */
              });
          }
        }
        window.addEventListener("scroll", tryPlay, { once: true });
        document.addEventListener("click", tryPlay, { once: true });
        document.addEventListener("touchstart", tryPlay, { once: true });
      });

/* ===== Script Block 8 ===== */
window.onload = function () {
        let index = 0;
        let direction = 1;

        const slides = document.querySelectorAll(".slide");
        const container = document.querySelector(".slider-container");
        const dotsContainer = document.querySelector(".dots");

        let auto;

        // ðŸ”¥ táº¡o dot
        dotsContainer.innerHTML = "";
        slides.forEach((_, i) => {
          const dot = document.createElement("span");

          dot.addEventListener("click", () => {
            index = i;
            updateSlider();
            resetAuto();
          });

          dotsContainer.appendChild(dot);
        });

        function updateSlider() {
          container.style.transform = `translateX(-${index * 100}%)`;

          slides.forEach((s, i) => {
            s.classList.remove("active", "prev", "next");

            if (i === index) s.classList.add("active");
            else if (i === (index - 1 + slides.length) % slides.length)
              s.classList.add("prev");
            else if (i === (index + 1) % slides.length) s.classList.add("next");
          });

          // update dot
          const dots = document.querySelectorAll(".dots span");
          dots.forEach((d, i) => {
            d.classList.toggle("active", i === index);
          });
        }

        function autoSlide() {
          index = (index + 1) % slides.length;
          updateSlider();
        }

        function startAuto() {
          auto = setInterval(autoSlide, 15000);
        }

        function resetAuto() {
          clearInterval(auto);
          startAuto();
        }

        // nÃºt
        document.querySelector(".next").onclick = () => {
          index = (index + 1) % slides.length;
          updateSlider();
          resetAuto();
        };

        document.querySelector(".prev").onclick = () => {
          index = (index - 1 + slides.length) % slides.length;
          updateSlider();
          resetAuto();
        };

        // swipe
        let startX = 0;

        container.addEventListener("touchstart", (e) => {
          startX = e.touches[0].clientX;
        });

        container.addEventListener("touchend", (e) => {
          let endX = e.changedTouches[0].clientX;

          if (startX - endX > 50) {
            index = (index + 1) % slides.length;
          } else if (endX - startX > 50) {
            index = (index - 1 + slides.length) % slides.length;
          }

          updateSlider();
          resetAuto();
        });

        updateSlider();
        startAuto();
      };

/* ===== Script Block 9 ===== */
document.addEventListener("DOMContentLoaded", function () {
        var form = document.querySelector("#FORM2 form");
        var buttonText = document.querySelector("#BUTTON_TEXT2 p");

        if (form) {
          form.addEventListener("submit", function (e) {
            // 1. Cháº·n LadiPage vÃ  cháº·n load láº¡i trang
            e.preventDefault();
            e.stopImmediatePropagation();

            // 2. Láº¥y dá»¯ liá»‡u tá»« form
            var formData = new FormData(form);
            var originalText = buttonText.innerText;
            buttonText.innerText = "Äang gá»­i..."; // Hiá»‡u á»©ng cho khÃ¡ch biáº¿t Ä‘ang xá»­ lÃ½

            // 3. Gá»­i ngáº§m vá» Google Apps Script
            fetch(form.action, {
              method: "POST",
              body: formData,
              mode: "no-cors", // Ráº¥t quan trá»ng Ä‘á»ƒ khÃ´ng bá»‹ cháº·n báº£o máº­t trÃ¬nh duyá»‡t
            })
              .then(function () {
                // BÃ¡o thÃ nh cÃ´ng vÃ  xÃ³a tráº¯ng form
                buttonText.innerText = "ÄÃ£ gá»­i thÃ nh cÃ´ng!";
                form.reset();

                // Sau 3 giÃ¢y tráº£ láº¡i chá»¯ cÅ©
                setTimeout(() => {
                  buttonText.innerText = originalText;
                }, 3000);
              })
              .catch(function (error) {
                console.error("Lá»—i:", error);
                buttonText.innerText = "Lá»—i, vui lÃ²ng thá»­ láº¡i!";
                setTimeout(() => {
                  buttonText.innerText = originalText;
                }, 3000);
              });
          });
        }
      });

/* ===== Script Block 10 ===== */
function openGuestTab(evt, tabName) {
        // áº¨n táº¥t cáº£ ná»™i dung tab
        var tabcontent = document.getElementsByClassName("gs-tab-content");
        for (var i = 0; i < tabcontent.length; i++) {
          tabcontent[i].classList.remove("gs-active");
        }
        // Bá» tÃ´ sÃ¡ng táº¥t cáº£ cÃ¡c nÃºt
        var tablinks = document.getElementsByClassName("gs-tab-btn");
        for (var i = 0; i < tablinks.length; i++) {
          tablinks[i].classList.remove("gs-active");
        }
        // Hiá»ƒn thá»‹ tab Ä‘Æ°á»£c chá»n vÃ  tÃ´ sÃ¡ng nÃºt Ä‘Ã³
        document.getElementById(tabName).classList.add("gs-active");
        evt.currentTarget.classList.add("gs-active");
      }
