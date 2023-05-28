(() => {
  var e = {
      17244: (e, t, s) => {
        "use strict";
        var a = s(49963),
          l = s(3577),
          i = s(66252);
        const o = {
            class: (0, l.C_)([
              "alert",
              "alert-login",
              "alert-info",
              "alert-dismissible",
              "fade",
              "d-flex",
              "align-items-center",
              "title",
            ]),
            role: "alert",
          },
          n = (0, i._)(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              fill: "currentColor",
              class: "bi bi-exclamation-triangle-fill flex-shrink-0 me-2",
              viewBox: "0 0 16 16",
              role: "img",
              "aria-label": "Warning:",
            },
            [
              (0, i._)("path", {
                d: "M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z",
              }),
            ],
            -1
          ),
          c = (0, i._)(
            "button",
            { type: "button", class: "btn-close", "aria-label": "Close" },
            null,
            -1
          ),
          r = (0, i._)(
            "div",
            {
              class: "toast-container position-absolute bottom-0 end-0 p-3",
              id: "toastPlacement",
            },
            null,
            -1
          );
        function d(e, t, s, a, d, m) {
          return (
            (0, i.wg)(),
            (0, i.iD)(
              i.HY,
              null,
              [
                ((0, i.wg)(),
                (0, i.j4)(
                  (0, i.LL)(d.page),
                  {
                    onChangePage: m.changePage,
                    onReAuth: m.reAuth,
                    onCallWarn: m.callWarn,
                    system: e.system,
                    cjwt: d.jwt,
                  },
                  null,
                  8,
                  ["onChangePage", "onReAuth", "onCallWarn", "system", "cjwt"]
                )),
                (0, i._)("div", o, [
                  n,
                  (0, i._)("strong", null, (0, l.zw)(d.warn_msg), 1),
                  c,
                ]),
                r,
              ],
              64
            )
          );
        }
        const m = { class: "login" },
          h = { class: "bg-white container-3xl overflow-hidden" },
          u = { class: "row" },
          g = { class: "col bg-success-gradient position-relative" },
          p = { class: "row justify-content-center align-items-center" },
          _ = { class: "col-lg-7 col-10" },
          b = (0, i._)(
            "img",
            { src: "img/TKBtv-LOGO.svg", alt: "TKBTV雲端函授", class: "pb-3" },
            null,
            -1
          ),
          v = { class: "form-wrap rounded-3" },
          w = { class: "tabs" },
          f = { class: "login-tab title" },
          x = { class: "signup-tab title title-rightRound" },
          y = { class: "tabs-content" },
          k = {
            class:
              "info_content_item bg-darkSuccess d-flex justify-content-center",
          },
          E = (0, i._)(
            "i",
            { class: "fas fa-wrench align-self-center" },
            null,
            -1
          ),
          T = (0, i._)(
            "div",
            { class: "info_content_item_box" },
            [
              (0, i._)("div", { class: "info_content_item_box_title" }, [
                (0, i.Uk)(" 每週二"),
                (0, i._)("span", null, "08:30 ~ 10:00"),
                (0, i._)("br"),
                (0, i.Uk)(" 系統維護時間無法使用服務。若有不便，敬請見諒 "),
              ]),
            ],
            -1
          );
        function I(e, t, s, a, o, n) {
          return (
            (0, i.wg)(),
            (0, i.iD)("div", m, [
              (0, i._)("div", h, [
                (0, i._)("div", u, [
                  (0, i._)("div", g, [
                    (0, i._)("div", p, [
                      (0, i._)("div", _, [
                        b,
                        (0, i._)("div", v, [
                          (0, i._)("div", w, [
                            (0, i._)("p", f, [
                              (0, i._)(
                                "a",
                                {
                                  draggable: "false",
                                  class: (0, l.C_)([
                                    "text-decoration-none title-leftRound",
                                    { active: o.inLoginArea },
                                  ]),
                                  href: "#login-tab-content",
                                  onClick:
                                    t[0] ||
                                    (t[0] = (...e) =>
                                      n.toLogin && n.toLogin(...e)),
                                },
                                "雲端課程",
                                2
                              ),
                            ]),
                            (0, i._)("p", x, [
                              (0, i._)(
                                "a",
                                {
                                  draggable: "false",
                                  class: (0, l.C_)([
                                    "text-decoration-none",
                                    { active: !o.inLoginArea },
                                  ]),
                                  href: "#signup-tab-content",
                                  onClick:
                                    t[1] ||
                                    (t[1] = (...e) =>
                                      n.toQrcode && n.toQrcode(...e)),
                                },
                                "補課系統",
                                2
                              ),
                            ]),
                          ]),
                          (0, i._)("div", y, [
                            ((0, i.wg)(),
                            (0, i.j4)(
                              i.Ob,
                              null,
                              [
                                ((0, i.wg)(),
                                (0, i.j4)(
                                  (0, i.LL)(o.area),
                                  {
                                    onToTakoDownload: n.toTakoDownload,
                                    onToQrcode: n.toQrcode,
                                    onChangePage: n.changePage,
                                    onCallWarn: n.callWarn,
                                  },
                                  null,
                                  8,
                                  [
                                    "onToTakoDownload",
                                    "onToQrcode",
                                    "onChangePage",
                                    "onCallWarn",
                                  ]
                                )),
                              ],
                              1024
                            )),
                          ]),
                        ]),
                      ]),
                    ]),
                    (0, i._)("div", k, [
                      E,
                      T,
                      (0, i._)("p", null, [
                        (0, i._)("a", null, (0, l.zw)(o.app_version), 1),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
            ])
          );
        }
        const N = { id: "login-tab-content", class: "active" },
          C = { class: "signup-form", action: "", method: "post" },
          L = (0, i.uE)(
            '<input type="email" class="input rounded-pill sm-text" id="user_email" autocomplete="off" placeholder="請輸入帳號"><input type="password" class="input rounded-pill sm-text" id="user_password" autocomplete="off" placeholder="請輸入密碼"><div class="form-check form-switch m-3"><label class="form-check-label sm-text" for="flexSwitchCheckDefault">記住帳號密碼</label><input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"></div>',
            3
          ),
          j = (0, i._)(
            "input",
            {
              type: "button",
              class: "button loginBTN rounded-pill text",
              id: "login",
            },
            null,
            -1
          ),
          S = (0, i._)("span", { class: "login-text" }, "登入", -1),
          M = (0, i._)("span", { class: "button-c" }, null, -1),
          D = [j, S, M],
          B = (0, i._)(
            "div",
            { class: "help-text d-flex justify-content-between sm-text px-2" },
            [
              (0, i._)("p", null, [
                (0, i._)(
                  "a",
                  {
                    class: "text-decoration-none",
                    href: "https://www.tkbtv.com.tw/front/login/toLogin.action",
                    target: "_blank",
                  },
                  "忘記密碼？"
                ),
              ]),
              (0, i._)("p", null, [
                (0, i._)(
                  "a",
                  {
                    class: "text-decoration-none",
                    href: "https://www.tkbtv.com.tw/front/register/toRegister.action",
                    target: "_blank",
                  },
                  "註冊會員"
                ),
              ]),
            ],
            -1
          ),
          O = (0, i._)(
            "div",
            { class: "g-signin2", "data-onsuccess": "onSignIn" },
            null,
            -1
          );
        function A(e, t, s, a, l, o) {
          return (
            (0, i.wg)(),
            (0, i.iD)("div", N, [
              (0, i._)("form", C, [
                L,
                (0, i._)(
                  "div",
                  {
                    class: "button-login my-4",
                    onClick:
                      t[0] || (t[0] = (...e) => o.login && o.login(...e)),
                  },
                  D
                ),
                B,
                O,
              ]),
            ])
          );
        }
        s(37719);
        var U,
          P,
          R = s(9669),
          F = s.n(R),
          q = s(72298),
          z = 0;
        const J = "https://www.tkbgo.com.tw/api/",
          H = F().create({
            baseURL: J,
            headers: { "Content-Type": "application/json" },
            timeout: 2e4,
          });
        function K() {
          return console.log("重送一次請求"), V(P, U);
        }
        async function W() {
          const e = {
            method: "get",
            url: "https://www.tkbgo.com.tw/api/member/auth",
            headers: {},
            auth: {
              username: q.ipcRenderer.sendSync(
                "decrypt",
                localStorage[q.ipcRenderer.sendSync("encrypt", "username")]
              ),
              password: q.ipcRenderer.sendSync(
                "decrypt",
                localStorage[q.ipcRenderer.sendSync("encrypt", "password")]
              ),
            },
            timeout: 1e5,
            params: {},
          };
          try {
            const t = await V(e, U),
              s = await t.data,
              { data: a } = s;
            let l = a["x-access-token"];
            console.log(l), U.$emit("reAuth", l);
          } catch (t) {
            console.log(t);
          }
        }
        function V(e, t) {
          console.log("api.js"), (U = t), (P = e);
          let s,
            a = P.method.toLowerCase(),
            l = P.url.replace(J, ""),
            i = {};
          switch (
            (null != P.timeout && (i.timeout = P.timeout),
            (s = P.params),
            null != P.headers &&
              null != P.headers["x-access-token"] &&
              (H.defaults.headers["x-access-token"] =
                P.headers["x-access-token"]),
            (H.defaults.auth = P.auth),
            a)
          ) {
            case "post":
              return H.post(l, s, i);
            case "get":
              return H.get(l, { params: s, timeout: i.timeout }, i);
            case "delete":
              return H.delete(l, { params: s }, i);
            case "put":
              return H.put(l, s);
            case "patch":
              return H.patch(l, s);
            default:
              return console.log(`未知的 method: ${a}`), !1;
          }
        }
        H.interceptors.response.use(
          function (e) {
            return e;
          },
          async function (e) {
            if (e.response)
              switch (e.response.status) {
                case 401:
                  if ((console.log(z), z < 2)) return (z += 1), await W(), K();
                  break;
                case 404:
                  console.log("你要找的頁面不存在");
                  break;
                case 500:
                  console.log("程式發生問題");
                  break;
                default:
                  console.log(e.message);
              }
            if (window.navigator.onLine) return Promise.reject(e);
            alert("網路出了點問題，重新啟動程式");
          }
        );
        const Y = V,
          $ = s(19755),
          G = {
            data() {
              return {};
            },
            methods: {
              async login() {
                let e = document.getElementById("user_email").value,
                  t = document.getElementById("user_password").value;
                document.getElementById("flexSwitchCheckDefault").checked &&
                  (localStorage.setItem(
                    q.ipcRenderer.sendSync("encrypt", "username"),
                    q.ipcRenderer.sendSync("encrypt", e)
                  ),
                  localStorage.setItem(
                    q.ipcRenderer.sendSync("encrypt", "password"),
                    q.ipcRenderer.sendSync("encrypt", t)
                  ),
                  localStorage.setItem(
                    "is_rembmer",
                    document.getElementById("flexSwitchCheckDefault").checked
                  )),
                  await this.auth(e, t);
              },
              async auth(e, t) {
                const s = {
                  method: "get",
                  url: "https://www.tkbgo.com.tw/api/member/auth",
                  headers: {},
                  auth: { username: e, password: t },
                  timeout: 1e5,
                  params: {},
                };
                try {
                  const e = await Y(s, this),
                    t = await e.data,
                    { data: a } = t;
                  let l = a["x-access-token"];
                  console.log(l),
                    this.$emit("changePage", { jwt: l, page: "Frame" });
                } catch (a) {
                  this.$emit("callWarn", "帳號密碼錯誤");
                }
                $(".button-login").removeClass("active");
              },
            },
            mounted() {
              null !=
                localStorage[q.ipcRenderer.sendSync("encrypt", "username")] &&
                ((document.getElementById("user_email").value =
                  q.ipcRenderer.sendSync(
                    "decrypt",
                    localStorage[q.ipcRenderer.sendSync("encrypt", "username")]
                  )),
                (document.getElementById("user_password").value =
                  q.ipcRenderer.sendSync(
                    "decrypt",
                    localStorage[q.ipcRenderer.sendSync("encrypt", "password")]
                  )),
                (document.getElementById("flexSwitchCheckDefault").checked =
                  localStorage.is_rembmer));
              const e = {
                access: !1,
                trigger() {
                  $(".btn-close").on("click", () => {
                    this.closeAlert();
                  }),
                    $(".button-login").on("click", (e) => {
                      $(e.currentTarget).addClass("active");
                    });
                },
                closeAlert() {
                  $(".alert-login").removeClass("show");
                },
                init() {
                  this.trigger(),
                    $("#login-tab-content")
                      .find("input")
                      .on("keyup", (e) => {
                        13 === e.keyCode && $("#login").click();
                      });
                },
              };
              e.init();
            },
          };
        var Q = s(83744);
        const Z = (0, Q.Z)(G, [["render", A]]),
          X = Z,
          ee = { id: "signup-tab-content", class: "active" },
          te = { class: "login-form d-flex", action: "", method: "post" },
          se = (0, i._)("p", { class: "text fw-bold mb-0" }, "快速登入", -1),
          ae = (0, i._)(
            "img",
            { id: "loginQRcode", src: "img/QuickLogin.png", alt: "QR Code" },
            null,
            -1
          ),
          le = { class: "tabs overflow-visible" },
          ie = (0, i.Uk)("沒有TAKO? 點我下載 "),
          oe = (0, i._)(
            "i",
            { class: "fas fa-arrow-alt-circle-down text mt-1 ms-3" },
            null,
            -1
          ),
          ne = [ie, oe];
        function ce(e, t, s, a, l, o) {
          return (
            (0, i.wg)(),
            (0, i.iD)("div", ee, [
              (0, i._)("form", te, [
                se,
                ae,
                (0, i._)("div", le, [
                  (0, i._)(
                    "a",
                    {
                      class: "active text text-decoration-none",
                      href: "#scan-tab-content",
                      onClick:
                        t[0] ||
                        (t[0] = (...e) =>
                          o.toTakoDownload && o.toTakoDownload(...e)),
                    },
                    ne
                  ),
                ]),
              ]),
            ])
          );
        }
        const re = "https://www.tkbgo.com.tw/api",
          de = re,
          me = s(92592),
          he = {
            data() {
              return { area: "login-area" };
            },
            methods: {
              toTakoDownload() {
                this.$emit("toTakoDownload");
              },
              async genQRcode() {
                (ue = this.getRandomKey(16)),
                  console.log(ue),
                  this.getQRCode(ue),
                  this.getQRConnect(ue);
              },
              getRandomKey(e) {
                let t =
                    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
                  s = "";
                for (let a = 0; e > a; a++) {
                  let e = Math.floor(Math.random() * t.length);
                  s += t[e];
                }
                return s;
              },
              async getQRCode(e) {
                const t = {
                    method: "get",
                    url: de + "/member/getQRcodeInfo",
                    params: { key: e },
                  },
                  s = await Y(t, this),
                  a = await s.data,
                  { message: l } = a;
                me.toDataURL(
                  l,
                  { errorCorrectionLevel: "H", width: 200 },
                  function (e, t) {
                    if (e) throw e;
                    document.getElementById("loginQRcode").src = t;
                  }
                );
              },
              async getQRConnect(e) {
                console.log("建立QRcode連線");
                const t = {
                    method: "get",
                    url: de + "/member/getCode",
                    timeout: 18e5,
                    params: { key: e },
                  },
                  s = await Y(t, this),
                  a = await s.data,
                  { message: l, status: i } = a;
                switch (i) {
                  case "logout":
                    break;
                  case "success":
                    alert("登入成功"),
                      (ue = ""),
                      this.authMakeup(l.id_no, l.student_no);
                    break;
                  case "message":
                    this.alert(l);
                    break;
                  case "timeout":
                    this.genQRcode();
                    break;
                }
              },
              async authMakeup(e, t) {
                const s = {
                  method: "get",
                  url: de + "/member/authMakeup",
                  auth: { username: e, password: t },
                  timeout: 15e3,
                };
                try {
                  const e = await Y(s),
                    t = await e.data,
                    { data: a } = t;
                  let l = a["x-access-token"];
                  null != l
                    ? (console.log(l),
                      this.$emit("changePage", { jwt: l, page: "FrameM" }))
                    : alert("登入失敗");
                } catch (a) {
                  if (a.response) {
                    const e = a.response.data.error;
                    alert(e.message);
                  } else
                    a.request
                      ? alert("無法與伺服器建立連線")
                      : alert("Error", a.message);
                }
              },
            },
            mounted() {
              this.genQRcode();
            },
          };
        var ue;
        const ge = (0, Q.Z)(he, [["render", ce]]),
          pe = ge,
          _e = { id: "scan-tab-content", class: "active" },
          be = { class: "login-form d-flex", action: "", method: "post" },
          ve = (0, i._)(
            "p",
            { class: "text fw-bold mb-0" },
            "掃描下載TAKO",
            -1
          ),
          we = (0, i._)(
            "img",
            { src: "img/tako.png", alt: "QR Code" },
            null,
            -1
          ),
          fe = { class: "tabs overflow-visible" },
          xe = (0, i._)(
            "i",
            { class: "fas fa-arrow-alt-circle-left text mt-1 me-3" },
            null,
            -1
          ),
          ye = (0, i.Uk)("返回快速登入"),
          ke = [xe, ye];
        function Ee(e, t, s, a, l, o) {
          return (
            (0, i.wg)(),
            (0, i.iD)("div", _e, [
              (0, i._)("form", be, [
                ve,
                we,
                (0, i._)("div", fe, [
                  (0, i._)(
                    "a",
                    {
                      class: "active text text-decoration-none",
                      href: "#signup-tab-content",
                      onClick:
                        t[0] ||
                        (t[0] = (...e) => o.toQrcode && o.toQrcode(...e)),
                    },
                    ke
                  ),
                ]),
              ]),
            ])
          );
        }
        const Te = {
            data() {
              return { area: "login-area" };
            },
            methods: {
              toQrcode() {
                this.$emit("toQrcode");
              },
            },
          },
          Ie = (0, Q.Z)(Te, [["render", Ee]]),
          Ne = Ie,
          Ce = {
            data() {
              return {
                area: "login-area",
                inLoginArea: !0,
                isRemember: !1,
                app_version: "v" + q.ipcRenderer.sendSync("getVersion"),
              };
            },
            methods: {
              toLogin() {
                (this.area = "login-area"), (this.inLoginArea = !0);
              },
              toQrcode() {
                (this.area = "q-rcode-area"), (this.inLoginArea = !1);
              },
              toTakoDownload() {
                (this.area = "tako-download-area"), (this.inLoginArea = !1);
              },
              changePage(e) {
                console.log("LoginPage changePage" + e),
                  this.$emit("changePage", e);
              },
              callWarn(e) {
                this.$emit("callWarn", e);
              },
            },
            components: { LoginArea: X, QRcodeArea: pe, TakoDownloadArea: Ne },
            mounted() {},
          },
          Le = (0, Q.Z)(Ce, [["render", I]]),
          je = Le,
          Se = { class: "bg-white container-3xl" };
        function Me(e, t, s, l, o, n) {
          const c = (0, i.up)("head-block"),
            r = (0, i.up)("side-block");
          return (
            (0, i.wg)(),
            (0, i.iD)("div", Se, [
              (0, i.Wm)(
                c,
                {
                  page: o.page,
                  onChangePage: n.changePage,
                  onReAuth: n.reAuth,
                },
                null,
                8,
                ["page", "onChangePage", "onReAuth"]
              ),
              (0, i.wy)(
                (0, i.Wm)(
                  r,
                  {
                    page: o.page,
                    onChangePage: n.changePage,
                    onReAuth: n.reAuth,
                  },
                  null,
                  8,
                  ["page", "onChangePage", "onReAuth"]
                ),
                [[a.F8, o.show_side]]
              ),
              ((0, i.wg)(),
              (0, i.j4)(
                (0, i.LL)(o.page),
                {
                  jwt: s.cjwt,
                  item: o.item,
                  onChangePage: n.changePage,
                  onReAuth: n.reAuth,
                  onCallWarn: n.callWarn,
                },
                null,
                8,
                ["jwt", "item", "onChangePage", "onReAuth", "onCallWarn"]
              )),
            ])
          );
        }

        const De = {
            class:
              "sidebar-height d-flex justify-content-center align-items-center",
          },
          Be = {
            class:
              "nav fixed-bottom-sm flex-lg-column justify-content-around pt-3",
            id: "v-pills-tab",
            role: "tablist",
            "aria-orientation": "vertical",
          },
          Oe = (0, i._)(
            "div",
            { class: "ac-calendar d-none d-lg-block" },
            null,
            -1
          ),
          Ae = (0, i._)(
            "div",
            { class: "ac-sm-w ac-calendar-sm d-block d-lg-none" },
            null,
            -1
          ),
          Ue = (0, i.Uk)(" 讀書計畫 "),
          Pe = [Oe, Ae, Ue],
          Re = (0, i._)(
            "div",
            { class: "ac-home d-none d-lg-block" },
            null,
            -1
          ),
          Fe = (0, i._)(
            "div",
            { class: "ac-sm-w ac-home-sm d-block d-lg-none" },
            null,
            -1
          ),
          qe = (0, i.Uk)(" 2我的課程2 "),
          ze = [Re, Fe, qe],
          Je = (0, i._)(
            "div",
            { class: "ac-news d-none d-lg-block" },
            null,
            -1
          ),
          He = (0, i._)(
            "div",
            { class: "ac-sm-w ac-news-sm d-block d-lg-none" },
            null,
            -1
          ),
          Ke = (0, i.Uk)(" 最新消息 "),
          We = [Je, He, Ke],
          Ve = (0, i._)(
            "div",
            { class: "ac-warn d-none d-lg-block" },
            null,
            -1
          ),
          Ye = (0, i._)(
            "div",
            { class: "ac-sm-w ac-warn-sm d-block d-lg-none" },
            null,
            -1
          ),
          $e = (0, i.Uk)(" 通知列表 "),
          Ge = [Ve, Ye, $e],
          Qe = (0, i._)(
            "div",
            { class: "ac-service d-none d-lg-block" },
            null,
            -1
          ),
          Ze = (0, i._)(
            "div",
            { class: "ac-sm-w ac-service-sm d-block d-lg-none" },
            null,
            -1
          ),
          Xe = (0, i.Uk)(" 客服列表 "),
          et = [Qe, Ze, Xe];
        function tt(e, t, s, a, l, o) {
          const n = (0, i.up)("sidebar");
          return (
            (0, i.wg)(),
            (0, i.j4)(
              n,
              { class: "sidebar" },
              {
                default: (0, i.w5)(() => [
                  (0, i._)("div", De, [
                    (0, i._)("div", Be, [
                      (0, i._)(
                        "button",
                        {
                          type: "button",
                          class: "nav-link text",
                          id: "v-pills-calendar-tab",
                          "data-bs-toggle": "pill",
                          "data-bs-target": "#v-pills-calendar",
                          role: "tab",
                          "aria-controls": "v-pills-home",
                          "aria-selected": "true",
                          onClick:
                            t[0] || (t[0] = (e) => o.changePage("calendar")),
                        },
                        Pe
                      ),
                      (0, i._)(
                        "button",
                        {
                          type: "button",
                          class: "nav-link text",
                          id: "v-pills-home-tab",
                          "data-bs-toggle": "pill",
                          "data-bs-target": "#v-pills-home",
                          role: "tab",
                          "aria-controls": "v-pills-home",
                          "aria-selected": "true",
                          onClick:
                            t[1] || (t[1] = (e) => o.changePage("course")),
                        },
                        ze
                      ),
                      (0, i._)(
                        "button",
                        {
                          onClick: t[2] || (t[2] = (e) => o.changePage("news")),
                          type: "button",
                          class: "nav-link text",
                          id: "v-pills-news-tab",
                          "data-bs-toggle": "pill",
                          "data-bs-target": "#v-pills-news",
                          role: "tab",
                          "aria-controls": "v-pills-news",
                          "aria-selected": "false",
                        },
                        We
                      ),
                      (0, i._)(
                        "button",
                        {
                          type: "button",
                          onClick:
                            t[3] || (t[3] = (e) => o.changePage("notice")),
                          class: "nav-link text",
                          id: "v-pills-warn-tab",
                          "data-bs-toggle": "pill",
                          "data-bs-target": "#v-pills-warn",
                          role: "tab",
                          "aria-controls": "v-pills-warn",
                          "aria-selected": "false",
                        },
                        Ge
                      ),
                      (0, i._)(
                        "button",
                        {
                          type: "button",
                          class: "nav-link text",
                          onClick:
                            t[4] || (t[4] = (e) => o.changePage("service")),
                          id: "v-pills-service-tab",
                          "data-bs-toggle": "pill",
                          "data-bs-target": "#v-pills-service",
                          role: "tab",
                          "aria-controls": "v-pills-service",
                          "aria-selected": "false",
                        },
                        et
                      ),
                    ]),
                  ]),
                ]),
                _: 1,
              }
            )
          );
        }
        const st = {
            name: "side-area",
            props: { page: { type: String, require: !0 } },
            methods: {
              changePage(e) {
                this.$emit("changePage", { page: e });
              },
            },
            watch: {
              page: function () {
                console.log("side_watch:" + this.page);
                let e = document.getElementsByTagName("button");
                for (let t = 0; e.length > t; t++)
                  e[t].classList.remove("active");
                switch (this.page) {
                  case "course-page":
                  case "chapter-page":
                  case "video-page":
                    document
                      .getElementById("v-pills-home-tab")
                      .classList.add("active");
                    break;
                  case "calendar-page":
                    document
                      .getElementById("v-pills-calendar-tab")
                      .classList.add("active");
                    break;
                  case "news-page":
                    document
                      .getElementById("v-pills-news-tab")
                      .classList.add("active");
                    break;
                  case "notice-page":
                    document
                      .getElementById("v-pills-warn-tab")
                      .classList.add("active");
                    break;
                  case "service-page":
                    document
                      .getElementById("v-pills-service-tab")
                      .classList.add("active");
                    break;
                }
              },
            },
            mounted() {
              switch (this.page) {
                case "course-page":
                case "chapter-page":
                case "video-page":
                  document
                    .getElementById("v-pills-home-tab")
                    .classList.add("active");
                  break;
                case "calendar-page":
                  document
                    .getElementById("v-pills-calendar-tab")
                    .classList.add("active");
                  break;
                case "news-page":
                  document
                    .getElementById("v-pills-news-tab")
                    .classList.add("active");
                  break;
                case "notice-page":
                  document
                    .getElementById("v-pills-warn-tab")
                    .classList.add("active");
                  break;
                case "service-page":
                  document
                    .getElementById("v-pills-service-tab")
                    .classList.add("active");
                  break;
              }
            },
          },
          at = (0, Q.Z)(st, [["render", tt]]),
          lt = at,
          it = { class: "navbar navbar-expand bg-white g-0" },
          ot = { class: "container-fluid d-flex align-items-md-end" },
          nt = (0, i._)(
            "div",
            { class: "navbar-brand-logo d-flex" },
            [
              (0, i._)("a", { class: "navbar-brand ms-lg-5" }, [
                (0, i._)("img", {
                  src: "img/TKBtv-LOGO.svg",
                  alt: "TKBtv雲端函授",
                }),
              ]),
            ],
            -1
          ),
          ct = { class: "emergent d-flex align-items-end justify-content-end" },
          rt = {
            class: "btn btn-secondary btn-secondary-logout text-nowrap text",
            type: "submit",
          },
          dt = { key: 0, class: "fas fa-arrow-circle-left me-2 text-white" };
        function mt(e, t, s, a, o, n) {
          return (
            (0, i.wg)(),
            (0, i.iD)("header", null, [
              (0, i._)("nav", it, [
                (0, i._)("div", ot, [
                  nt,
                  (0, i._)("div", ct, [
                    (0, i._)("button", rt, [
                      (0, i._)(
                        "a",
                        {
                          onClick:
                            t[0] ||
                            (t[0] = (...e) =>
                              n.back_click && n.back_click(...e)),
                          class: "btn-padding btn-back-padding text-white",
                        },
                        [
                          "back" == n.back_btn
                            ? ((0, i.wg)(), (0, i.iD)("i", dt))
                            : (0, i.kq)("", !0),
                          (0, i.Uk)((0, l.zw)(n.back_btn), 1),
                        ]
                      ),
                    ]),
                  ]),
                ]),
              ]),
            ])
          );
        }
        const ht = {
            name: "header-area",
            data() {
              return { pre_page: "" };
            },
            props: { page: { type: String, require: !0 } },
            computed: {
              back_btn: function () {
                let e = "back";
                switch (this.page) {
                  case "course-page":
                  case "news-page":
                  case "calendar-page":
                    e = "登出";
                    break;
                  default:
                    break;
                }
                return e;
              },
            },
            methods: {
              back_click() {
                switch ((console.log(this.page), this.page)) {
                  case "chapter-page":
                    this.$emit("changePage", { page: "course" });
                    break;
                  case "video-page":
                    this.$emit("changePage", {
                      page: this.pre_page.split("-")[0],
                    });
                    break;
                  default:
                    this.$emit("changePage", { page: "login" });
                    break;
                }
              },
            },
            watch: {
              page: function (e, t) {
                this.pre_page = t;
              },
            },
          },
          ut = (0, Q.Z)(ht, [["render", mt]]),
          gt = ut,
          pt = { class: "chapter bg-success rounded-3 overflow-hidden" },
          _t = { class: "hello title fw-bold text-primary mt-4" },
          bt = { class: "row page-scroll L-scrollbar justify-content-center" },
          vt = { class: "col-lg-5 col-10 my-0 me-4 mb-lg-4 pb-5 gx-0" },
          wt = (0, i._)(
            "div",
            {
              class:
                "page-header bg-primary text-white rounded-pill title lh-lg text-center",
            },
            " 全修課程清單 ",
            -1
          ),
          ft = { class: "chapter-course bg-white rounded-3 my-3" },
          xt = { class: "mx-md-5 mx-3" },
          yt = ["href", "aria-controls"],
          kt = (0, i._)(
            "i",
            { class: "fas fa-arrow-circle-down ms-3 mt-1" },
            null,
            -1
          ),
          Et = ["id"],
          Tt = { class: "chapter-course-name my-3 mx-5 text-start" },
          It = ["onClick"],
          Nt = { class: "col-lg-5 col-10 my-0 mb-lg-4 pb-5 gx-0" },
          Ct = (0, i._)(
            "div",
            {
              class:
                "page-header bg-primary text-white rounded-pill title lh-lg text-center",
            },
            " 單科課程清單 ",
            -1
          ),
          Lt = { class: "chapter-course bg-white rounded-3 my-3" },
          jt = {
            key: 0,
            class:
              "chapter-course-space d-flex justify-content-between align-items-start text-info",
          },
          St = ["onClick"],
          Mt = { class: "mx-md-5 mx-3 mx-auto title" },
          Dt = (0, i._)(
            "img",
            {
              src: "img/covid19.svg",
              alt: "疫轉",
              style: { width: "30px" },
              class: "course-covid me-2 mt-1",
            },
            null,
            -1
          ),
          Bt = {
            key: 1,
            class:
              "chapter-course-space d-flex justify-content-between align-items-start title",
          },
          Ot = ["onClick"],
          At = {
            class: "course-free text-primary d-flex align-items-start mx-5",
          },
          Ut = (0, i._)(
            "img",
            {
              src: "img/icon-free.svg",
              alt: "試看",
              style: { width: "25px" },
              class: "me-2 mt-1",
            },
            null,
            -1
          ),
          Pt = {
            key: 2,
            class:
              "chapter-course-space d-flex justify-content-between align-items-start",
          },
          Rt = ["onClick"],
          Ft = { class: "mx-md-5 mx-3 title" },
          qt = {
            key: 0,
            class:
              "chapter-course-space d-flex justify-content-between align-items-start title",
          },
          zt = ["onClick"],
          Jt = {
            class: "course-free text-primary d-flex align-items-start mx-5",
          },
          Ht = (0, i._)(
            "img",
            {
              src: "img/icon-free.svg",
              alt: "試看",
              style: { width: "25px" },
              class: "me-2 mt-1",
            },
            null,
            -1
          );
        function Kt(e, t, s, a, o, n) {
          const c = (0, i.up)("vue-loaders");
          return (
            (0, i.wg)(),
            (0, i.iD)("main", null, [
              (0, i._)("div", pt, [
                (0, i.Wm)(c, {
                  name: "ball-scale-ripple-multiple",
                  color: "#176FA7",
                  scal: "4.0",
                  style: {
                    width: "100%",
                    "justify-content": "center",
                    height: "100%",
                    display: "flex",
                    "align-content": "center",
                    "align-items": "center",
                    "z-index": "99",
                    "background-color": "#fff",
                  },
                }),
                (0, i._)(
                  "div",
                  _t,
                  (0, l.zw)(o.memberInfo.studentName) + "您好，歡迎回來！ ",
                  1
                ),
                (0, i._)("div", bt, [
                  (0, i._)("div", vt, [
                    wt,
                    (0, i._)("div", ft, [
                      ((0, i.wg)(!0),
                      (0, i.iD)(
                        i.HY,
                        null,
                        (0, i.Ko)(
                          o.fList,
                          (e) => (
                            (0, i.wg)(),
                            (0, i.iD)(
                              "div",
                              {
                                class: "chapter-course-space",
                                key: e.F_SUBJECT_NO,
                              },
                              [
                                (0, i._)("div", xt, [
                                  (0, i._)(
                                    "a",
                                    {
                                      draggable: "false",
                                      "data-bs-toggle": "collapse",
                                      href: "#c_" + e.F_SUBJECT_NO,
                                      role: "button",
                                      "aria-expanded": "false",
                                      "aria-controls": "c_" + e.F_SUBJECT_NO,
                                      class:
                                        "chapter-course-add title d-flex justify-content-between align-items-start text-start collapsed",
                                    },
                                    [
                                      (0, i.Uk)((0, l.zw)(e.F_SUBJECT_NAME), 1),
                                      kt,
                                    ],
                                    8,
                                    yt
                                  ),
                                ]),
                                (0, i._)(
                                  "div",
                                  {
                                    class: "collapse multi-collapse",
                                    id: "c_" + e.F_SUBJECT_NO,
                                  },
                                  [
                                    (0, i._)("ul", Tt, [
                                      ((0, i.wg)(!0),
                                      (0, i.iD)(
                                        i.HY,
                                        null,
                                        (0, i.Ko)(
                                          e.cList,
                                          (e) => (
                                            (0, i.wg)(),
                                            (0, i.iD)(
                                              "li",
                                              { key: e.subject_no },
                                              [
                                                (0, i._)(
                                                  "a",
                                                  {
                                                    draggable: "false",
                                                    onClick: (t) =>
                                                      n.changePage(e),
                                                    class: "text fw-light",
                                                  },
                                                  (0, l.zw)(e.NAME),
                                                  9,
                                                  It
                                                ),
                                              ]
                                            )
                                          )
                                        ),
                                        128
                                      )),
                                    ]),
                                  ],
                                  8,
                                  Et
                                ),
                              ]
                            )
                          )
                        ),
                        128
                      )),
                    ]),
                  ]),
                  (0, i._)("div", Nt, [
                    Ct,
                    (0, i._)("div", Lt, [
                      ((0, i.wg)(!0),
                      (0, i.iD)(
                        i.HY,
                        null,
                        (0, i.Ko)(
                          o.sList,
                          (e) => (
                            (0, i.wg)(),
                            (0, i.iD)("div", { key: e.F_SUBJECT_NO }, [
                              2 == e.TYPE
                                ? ((0, i.wg)(),
                                  (0, i.iD)("div", jt, [
                                    (0, i._)(
                                      "a",
                                      {
                                        draggable: "false",
                                        onClick: (t) => n.changePage(e),
                                      },
                                      [
                                        (0, i._)("div", Mt, [
                                          Dt,
                                          (0, i.Uk)(
                                            " ❰疫轉❱ " +
                                              (0, l.zw)(e.CHINESE_NAME),
                                            1
                                          ),
                                        ]),
                                      ],
                                      8,
                                      St
                                    ),
                                  ]))
                                : 0 == e.TYPE
                                ? ((0, i.wg)(),
                                  (0, i.iD)("div", Bt, [
                                    (0, i._)(
                                      "a",
                                      {
                                        draggable: "false",
                                        onClick: (t) => n.changePage(e),
                                      },
                                      [
                                        (0, i._)("div", At, [
                                          Ut,
                                          (0, i.Uk)(
                                            "❰試看❱ " +
                                              (0, l.zw)(e.CHINESE_NAME),
                                            1
                                          ),
                                        ]),
                                      ],
                                      8,
                                      Ot
                                    ),
                                  ]))
                                : ((0, i.wg)(),
                                  (0, i.iD)("div", Pt, [
                                    (0, i._)(
                                      "a",
                                      {
                                        draggable: "false",
                                        onClick: (t) => n.changePage(e),
                                      },
                                      [
                                        (0, i._)(
                                          "div",
                                          Ft,
                                          (0, l.zw)(e.CHINESE_NAME),
                                          1
                                        ),
                                      ],
                                      8,
                                      Rt
                                    ),
                                  ])),
                            ])
                          )
                        ),
                        128
                      )),
                      ((0, i.wg)(!0),
                      (0, i.iD)(
                        i.HY,
                        null,
                        (0, i.Ko)(
                          o.tList,
                          (e) => (
                            (0, i.wg)(),
                            (0, i.iD)("div", { key: e.F_SUBJECT_NO }, [
                              0 == e.TYPE
                                ? ((0, i.wg)(),
                                  (0, i.iD)("div", qt, [
                                    (0, i._)(
                                      "a",
                                      {
                                        draggable: "false",
                                        onClick: (t) => n.changePage(e),
                                      },
                                      [
                                        (0, i._)("div", Jt, [
                                          Ht,
                                          (0, i.Uk)(
                                            "❰試看❱ " +
                                              (0, l.zw)(e.CHINESE_NAME),
                                            1
                                          ),
                                        ]),
                                      ],
                                      8,
                                      zt
                                    ),
                                  ]))
                                : (0, i.kq)("", !0),
                            ])
                          )
                        ),
                        128
                      )),
                    ]),
                  ]),
                ]),
              ]),
            ])
          );
        }
        const Wt = {
            data() {
              return {
                c_jwt: this.jwt,
                tList: [],
                fList: [],
                sList: [],
                memberInfo: {},
              };
            },
            methods: {
              changePage(e) {
                console.log(e),
                  this.$emit("changePage", {
                    page: "chapter",
                    item: { choose_subject: e },
                  });
              },
              async getCourse() {
                (document.getElementsByClassName("vue-loaders")[0].hidden = !1),
                  console.log(
                    document.getElementsByClassName("vue-loaders")[0].hidden
                  );
                const e = {
                  method: "get",
                  url: "https://www.tkbgo.com.tw/api/course/getMyCourse",
                  headers: { "x-access-token": this.jwt },
                };
                try {
                  const t = await Y(e, this),
                    s = await t.data,
                    { data: a } = s;
                  (this.tList = a.tList),
                    (this.fList = a.fList),
                    (this.sList = a.sList);
                } catch (t) {
                  console.log(t);
                }
              },
              async getMemberinfo() {
                const e = {
                  method: "get",
                  url: "https://www.tkbgo.com.tw/api/member/getMemberInfo",
                  headers: { "x-access-token": this.jwt },
                };
                try {
                  const t = await Y(e, this),
                    s = await t.data,
                    { data: a } = s;
                  console.log(a), (this.memberInfo = a);
                } catch (t) {
                  console.log(t);
                }
              },
            },
            watch: {
              jwt: async function () {
                (this.c_jwt = this.jwt),
                  console.log("jwt變化"),
                  (document.getElementsByClassName("vue-loaders")[0].hidden =
                    !1),
                  await this.getMemberinfo(),
                  await this.getCourse(),
                  (document.getElementsByClassName("vue-loaders")[0].hidden =
                    !0);
              },
            },
            props: { jwt: { type: String, require: !0 } },
            async mounted() {
              (document.getElementsByClassName("vue-loaders")[0].hidden = !1),
                await this.getMemberinfo(),
                await this.getCourse(),
                (document.getElementsByClassName("vue-loaders")[0].hidden = !0);
            },
            beforeUnmount() {
              (document.getElementsByClassName("vue-loaders")[0].hidden = !1),
                console.log("beforeUnmount");
            },
          },
          Vt = (0, Q.Z)(Wt, [["render", Kt]]),
          Yt = Vt,
          $t = { class: "chapter bg-success rounded-3 pe-md-0" },
          Gt = {
            class:
              "row page-scroll L-scrollbar course-h align-items-center pe-md-3 mx-auto",
          },
          Qt = { class: "col-12 col-lg-5" },
          Zt = { class: "row px-lg-3" },
          Xt = {
            class:
              "col-12 course-info bg-primary text-white py-lg-0 py-2 px-sm-3 rounded-3",
          },
          es = { class: "course-time title text-center mt-4" },
          ts = { id: "total_times" },
          ss = (0, i._)("div", { class: "line mx-auto" }, null, -1),
          as = { class: "table-wrap my-3" },
          ls = { class: "title mb-4" },
          is = (0, i._)(
            "th",
            null,
            [
              (0, i._)(
                "span",
                {
                  class:
                    "L-deadline rounded-pill bg-white text-primary text-nowrap",
                },
                "課程總時數"
              ),
            ],
            -1
          ),
          os = (0, i._)(
            "th",
            null,
            [
              (0, i._)(
                "span",
                { class: "L-date rounded-pill bg-white text-primary" },
                "剩餘時數"
              ),
            ],
            -1
          ),
          ns = { id: "usable_times" },
          cs = { key: 0, class: "sm-text d-block" },
          rs = { align: "right", class: "tooltip-W" },
          ds = (0, i._)("i", { class: "far fa-calendar-check" }, null, -1),
          ms = [ds],
          hs = (0, i._)(
            "th",
            null,
            [
              (0, i._)(
                "span",
                {
                  class:
                    "L-deadline rounded-pill bg-white text-primary text-nowrap",
                },
                "課程到期日"
              ),
            ],
            -1
          ),
          us = { align: "right", class: "tooltip-W" },
          gs = (0, i._)(
            "i",
            { class: "fas fa-shopping-cart text-primary" },
            null,
            -1
          ),
          ps = [gs],
          _s = { class: "col-12 order-3 bg-light2 p-3 rounded-3 mt-4 exam" },
          bs = { class: "page-scroll scrollbar" },
          vs = { class: "block d-flex justify-content-center" },
          ws = { class: "exam_info" },
          fs = { class: "exam_info_middle" },
          xs = { class: "exam_select title", name: "data-filter" },
          ys = (0, i._)(
            "div",
            { class: "exam-button", id: "examBTN", "data-filter": "" },
            " 請選擇 ",
            -1
          ),
          ks = { class: "exam_list scrollbar-chose", id: "examList" },
          Es = ["data-value", "onClick"],
          Ts = { key: 0, class: "exam_info_date bg-white rounded-3 p-3 pt-4" },
          Is = { class: "content text d-flex flex-direction-column" },
          Ns = { class: "d-flex justify-content-between" },
          Cs = (0, i.Uk)("報名時間"),
          Ls = { class: "sign_time" },
          js = { class: "d-flex justify-content-between" },
          Ss = (0, i.Uk)("考試時間"),
          Ms = { class: "exam_time" },
          Ds = { class: "d-flex justify-content-between" },
          Bs = (0, i.Uk)("招考人數"),
          Os = { class: "amount" },
          As = (0, i._)(
            "span",
            { class: "xs-text text-left d-inline-block mt-3" },
            "◎僅供參考,實際依簡章公告為主",
            -1
          ),
          Us = {
            class:
              "exam_info_bottom xl-title text-primary text-nowrap mt-xxl-3",
          },
          Ps = (0, i.Uk)(" 距離考試剩下 "),
          Rs = { class: "recip text-info" },
          Fs = (0, i.Uk)("天 "),
          qs = { class: "progress text-center text" },
          zs = (0, i._)("span", null, "目前進度", -1),
          Js = { id: "percent" },
          Hs = { class: "col-12 col-lg-7 video-list mt-4 mt-lg-0" },
          Ks = (0, i._)(
            "ul",
            { class: "nav nav-tabs title", id: "myTab", role: "tablist" },
            [
              (0, i._)("li", { class: "nav-item", role: "presentation" }, [
                (0, i._)(
                  "button",
                  {
                    class: "nav-link active",
                    id: "home-tab",
                    "data-bs-toggle": "tab",
                    "data-bs-target": "#videoList",
                    type: "button",
                    role: "tab",
                    "aria-controls": "home",
                    "aria-selected": "true",
                  },
                  [
                    (0, i._)("img", {
                      src: "img/icon-list.svg",
                      alt: "影片列表",
                      style: { width: "27px" },
                      class: "me-1",
                    }),
                    (0, i.Uk)(" 影片列表 "),
                  ]
                ),
              ]),
              (0, i._)("li", { class: "nav-item", role: "presentation" }, [
                (0, i._)(
                  "button",
                  {
                    class: "nav-link",
                    id: "profile-tab",
                    "data-bs-toggle": "tab",
                    "data-bs-target": "#download",
                    type: "button",
                    role: "tab",
                    "aria-controls": "profile",
                    "aria-selected": "false",
                  },
                  [
                    (0, i._)("img", {
                      src: "img/icon-download.svg",
                      alt: " 下載教材",
                      style: { width: "42px" },
                    }),
                    (0, i.Uk)(" 下載教材 "),
                  ]
                ),
              ]),
            ],
            -1
          ),
          Ws = { class: "tab-content bg-light rounded-3", id: "myTabContent" },
          Vs = {
            class: "tab-pane fade show active video-list-h",
            id: "videoList",
            role: "tabpanel",
            "aria-labelledby": "home-tab",
          },
          Ys = { class: "video-scroll-h page-scroll scrollbar text pe-1" },
          $s = ["onClick"],
          Gs = { class: "video-list-time ms-3" },
          Qs = {
            class: "tab-pane fade video-list-h",
            id: "download",
            role: "tabpanel",
            "aria-labelledby": "profile-tab",
          },
          Zs = { class: "video-scroll-h page-scroll scrollbar text pe-1" },
          Xs = ["href"],
          ea = (0, i.Uk)("教材1"),
          ta = (0, i._)(
            "span",
            { class: "video-list-time ms-3 text-black-50" },
            null,
            -1
          ),
          sa = [ea, ta];
        function aa(e, t, s, a, o, n) {
          const c = (0, i.up)("vue-loaders");
          return (
            (0, i.wg)(),
            (0, i.iD)("main", null, [
              (0, i._)("div", $t, [
                (0, i.Wm)(c, {
                  name: "ball-scale-ripple-multiple",
                  color: "#176FA7",
                  scal: "4.0",
                  style: {
                    width: "100%",
                    "justify-content": "center",
                    height: "100%",
                    display: "flex",
                    "align-content": "center",
                    "align-items": "center",
                    "z-index": "99",
                    "background-color": "#fff",
                  },
                }),
                (0, i._)("div", Gt, [
                  (0, i._)("div", Qt, [
                    (0, i._)("div", Zt, [
                      (0, i._)("div", Xt, [
                        (0, i._)("div", es, [
                          (0, i._)(
                            "span",
                            ts,
                            (0, l.zw)(o.courseInfo.TEACHER_NAME) +
                              " 老師 - " +
                              (0, l.zw)(o.courseInfo.SUBJECT_NAME),
                            1
                          ),
                          ss,
                        ]),
                        (0, i._)("div", as, [
                          (0, i._)("table", ls, [
                            (0, i._)("tbody", null, [
                              (0, i._)("tr", null, [
                                is,
                                (0, i._)(
                                  "td",
                                  null,
                                  (0, l.zw)(n.changeTime),
                                  1
                                ),
                              ]),
                              (0, i._)("tr", null, [
                                os,
                                (0, i._)("td", null, [
                                  (0, i._)(
                                    "span",
                                    ns,
                                    (0, l.zw)(
                                      n.formatTime(o.courseInfo.USABLE_TIMES)
                                    ),
                                    1
                                  ),
                                  o.courseInfo.GIFT_TIMES > 0
                                    ? ((0, i.wg)(),
                                      (0, i.iD)(
                                        "span",
                                        cs,
                                        "(時數使用完畢後再回補" +
                                          (0, l.zw)(
                                            n.formatTime(
                                              o.courseInfo.GIFT_TIMES
                                            )
                                          ) +
                                          ")",
                                        1
                                      ))
                                    : (0, i.kq)("", !0),
                                ]),
                                (0, i._)("td", rs, [
                                  (0, i._)(
                                    "button",
                                    {
                                      class:
                                        "btn btn-warning text-primary title rounded-pill",
                                      onClick:
                                        t[0] ||
                                        (t[0] = (...e) =>
                                          n.checkDiligent &&
                                          n.checkDiligent(...e)),
                                      "data-bs-toggle": "tooltip",
                                      "data-bs-placement": "top",
                                      title: "申請勤學",
                                    },
                                    ms
                                  ),
                                ]),
                              ]),
                              (0, i._)("tr", null, [
                                hs,
                                (0, i._)(
                                  "td",
                                  null,
                                  (0, l.zw)(o.courseInfo.END_TIME),
                                  1
                                ),
                                (0, i._)("td", us, [
                                  (0, i._)(
                                    "button",
                                    {
                                      class:
                                        "btn btn-warning text-primary text rounded-pill",
                                      "data-bs-toggle": "tooltip",
                                      "data-bs-placement": "top",
                                      title: "購買展延",
                                      onClick:
                                        t[1] ||
                                        (t[1] = (...e) =>
                                          n.openTkbtv && n.openTkbtv(...e)),
                                    },
                                    ps
                                  ),
                                ]),
                              ]),
                            ]),
                          ]),
                        ]),
                      ]),
                      (0, i._)("div", _s, [
                        (0, i._)("div", bs, [
                          (0, i._)("div", vs, [
                            (0, i._)("div", ws, [
                              (0, i._)("div", fs, [
                                (0, i._)("div", xs, [
                                  ys,
                                  (0, i._)("ul", ks, [
                                    ((0, i.wg)(!0),
                                    (0, i.iD)(
                                      i.HY,
                                      null,
                                      (0, i.Ko)(
                                        o.examInfo,
                                        (e, t) => (
                                          (0, i.wg)(),
                                          (0, i.iD)(
                                            "li",
                                            {
                                              key: e.TITLE,
                                              "data-value": t,
                                              onClick: (e) =>
                                                n.choseExamInfo(t),
                                            },
                                            (0, l.zw)(e.TITLE),
                                            9,
                                            Es
                                          )
                                        )
                                      ),
                                      128
                                    )),
                                  ]),
                                ]),
                                "" != o.chosedExamInfo
                                  ? ((0, i.wg)(),
                                    (0, i.iD)("div", Ts, [
                                      (0, i._)("div", Is, [
                                        (0, i._)("span", Ns, [
                                          Cs,
                                          (0, i._)(
                                            "span",
                                            Ls,
                                            (0, l.zw)(
                                              o.examInfo[o.chosedExamInfo]
                                                .SIGN_DATE_BEGIN
                                            ),
                                            1
                                          ),
                                        ]),
                                        (0, i._)("span", js, [
                                          Ss,
                                          (0, i._)(
                                            "span",
                                            Ms,
                                            (0, l.zw)(
                                              o.examInfo[o.chosedExamInfo]
                                                .EXAM_DATE_BEGIN
                                            ),
                                            1
                                          ),
                                        ]),
                                        (0, i._)("span", Ds, [
                                          Bs,
                                          (0, i._)(
                                            "span",
                                            Os,
                                            (0, l.zw)(
                                              null !=
                                                o.examInfo[o.chosedExamInfo]
                                                  .QUOTA
                                                ? o.examInfo[o.chosedExamInfo]
                                                    .QUOTA + "人"
                                                : "尚未公布"
                                            ),
                                            1
                                          ),
                                        ]),
                                      ]),
                                    ]))
                                  : (0, i.kq)("", !0),
                                As,
                              ]),
                              (0, i._)("div", Us, [
                                Ps,
                                (0, i._)(
                                  "span",
                                  Rs,
                                  (0, l.zw)(n.last_days) + " ",
                                  1
                                ),
                                Fs,
                              ]),
                            ]),
                            (0, i._)("div", qs, [
                              zs,
                              (0, i._)("div", null, [
                                (0, i._)(
                                  "img",
                                  {
                                    src: "img/Trophy.png",
                                    id: "img_2",
                                    style: (0, l.j5)({
                                      backgroundImage:
                                        "linear-gradient( 0deg, #ffce00 0% " +
                                        n.watchPercent +
                                        "%,#EDF8FF " +
                                        n.watchPercent +
                                        "%)",
                                    }),
                                  },
                                  null,
                                  4
                                ),
                              ]),
                              (0, i._)(
                                "span",
                                Js,
                                (0, l.zw)(n.watchPercent) + "%",
                                1
                              ),
                            ]),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  (0, i._)("div", Hs, [
                    Ks,
                    (0, i._)("div", Ws, [
                      (0, i._)("div", Vs, [
                        (0, i._)("ul", Ys, [
                          ((0, i.wg)(!0),
                          (0, i.iD)(
                            i.HY,
                            null,
                            (0, i.Ko)(
                              o.chapterList,
                              (e) => (
                                (0, i.wg)(),
                                (0, i.iD)("li", { key: e.ID }, [
                                  (0, i._)(
                                    "a",
                                    {
                                      draggable: "false",
                                      onClick: (t) =>
                                        n.changePage("video", e.ID),
                                      class: "video-list-item",
                                      style: (0, l.j5)({
                                        backgroundImage:
                                          "linear-gradient(90deg, #bbe5ff 0% " +
                                          (e.FINAL_TOKEN / e.TIME) * 100 +
                                          "%,#EDF8FF " +
                                          (e.FINAL_TOKEN / e.TIME) * 100 +
                                          "%)",
                                      }),
                                    },
                                    [
                                      (0, i.Uk)(
                                        (0, l.zw)(e.NAME) +
                                          "(" +
                                          (0, l.zw)(n.formatTime(e.TIME)) +
                                          "）",
                                        1
                                      ),
                                      (0, i._)(
                                        "span",
                                        Gs,
                                        (0, l.zw)(n.formatTime(e.TIME, ":")),
                                        1
                                      ),
                                    ],
                                    12,
                                    $s
                                  ),
                                ])
                              )
                            ),
                            128
                          )),
                        ]),
                      ]),
                      (0, i._)("div", Qs, [
                        (0, i._)("ul", Zs, [
                          ((0, i.wg)(!0),
                          (0, i.iD)(
                            i.HY,
                            null,
                            (0, i.Ko)(
                              o.eMaterial,
                              (e) => (
                                (0, i.wg)(),
                                (0, i.iD)("li", { key: e }, [
                                  (0, i._)(
                                    "a",
                                    {
                                      draggable: "false",
                                      href: e.E_MATERIAL.replace(
                                        "tkbgo",
                                        "tkbtv"
                                      ),
                                      class: "video-list-item",
                                      target: "_blank",
                                    },
                                    sa,
                                    8,
                                    Xs
                                  ),
                                ])
                              )
                            ),
                            128
                          )),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
            ])
          );
        }
        var la = s(47244);
        const ia = s(19755),
          { shell: oa } = s(72298),
          na = {
            data() {
              return {
                chapterList: [],
                courseInfo: {},
                eMaterial: "",
                examInfo: [],
                chosedExamInfo: 0,
                n_item: {},
              };
            },
            methods: {
              changePage(e, t) {
                console.log(this.item),
                  "video" == e &&
                  this.courseInfo.USABLE_TIMES + this.courseInfo.GIFT_TIMES <= 0
                    ? this.$emit("callWarn", "此課程已無時數，請至官網購買！")
                    : this.$emit("changePage", {
                        page: e,
                        tvMaterialId: t,
                        item: {
                          choose_subject: this.item.choose_subject,
                          choose_material: t,
                          courseInfo: this.courseInfo,
                          chapterList: this.chapterList,
                        },
                      });
              },
              formatTime(e, t) {
                let s = Math.floor(e % 60),
                  a = Math.floor(e / 60) % 60,
                  l = Math.floor(e / 3600);
                return null != t
                  ? " " +
                      l +
                      t +
                      (a < 10 ? "0" + a : a) +
                      t +
                      (s < 10 ? "0" + s : s)
                  : " " + l + " 小時 " + a + " 分鐘";
              },
              choseExamInfo(e) {
                this.chosedExamInfo = e;
              },
              async checkDiligent() {
                const e = {
                  method: "get",
                  url: "https://www.tkbgo.com.tw/api/course/checkDiligent",
                  headers: { "x-access-token": this.jwt },
                  params: {
                    fSubjectNo:
                      this.item.choose_subject.F_SUBJECT_NO ||
                      this.item.fSubjectNo,
                    subjectNo:
                      this.item.choose_subject.SUBJECT_NO ||
                      this.item.subjectNo,
                    isApply: "N",
                  },
                };
                try {
                  const t = await Y(e, this),
                    s = await t.data;
                  console.log(s),
                    "OK" == s.rtnCode
                      ? "N" == s.data[0].O_STATUS
                        ? this.$emit("callWarn", s.message)
                        : this.applyDiligent()
                      : this.$emit("callWarn", "請聯繫客服");
                } catch (t) {
                  this.$emit("callWarn", "請聯繫客服"), console.log(t);
                }
              },
              async applyDiligent() {
                const e = {
                  method: "get",
                  url: "https://www.tkbgo.com.tw/api/course/checkDiligent",
                  headers: { "x-access-token": this.jwt },
                  params: {
                    fSubjectNo:
                      this.item.choose_subject.F_SUBJECT_NO ||
                      this.item.fSubjectNo,
                    subjectNo:
                      this.item.choose_subject.SUBJECT_NO ||
                      this.item.subjectNo,
                    isApply: "Y",
                  },
                };
                try {
                  const t = await Y(e, this),
                    s = await t.data;
                  console.log(s);
                } catch (t) {
                  console.log(t);
                }
              },
              openTkbtv() {
                oa.openExternal("https://www.tkbtv.com.tw");
              },
            },
            props: {
              jwt: { type: String, require: !0 },
              item: {
                type: Object,
                require: !0,
                default: function () {
                  return { courseInfo: { USABLE_TIMES: 0, GIFT_TIMES: 0 } };
                },
              },
            },
            computed: {
              changeTime() {
                let e =
                    null != this.item.choose_subject.TIMES
                      ? this.item.choose_subject.TIMES
                      : this.item.courseInfo.USABLE_TIMES +
                        this.item.courseInfo.GIFT_TIMES,
                  t = Math.floor(e / 60) % 60,
                  s = Math.floor(e / 3600);
                return " " + s + " 小時 " + t + " 分鐘";
              },
              watchPercent() {
                let e = 0,
                  t = 0;
                for (let s = 0; this.chapterList.length > s; s++)
                  (e += this.chapterList[s].TIME),
                    null != this.chapterList[s].FINAL_TOKEN &&
                      (t += this.chapterList[s].FINAL_TOKEN);
                return (
                  console.log(t),
                  console.log(e),
                  console.log(100 * Math.floor(t / e)),
                  Math.floor((100 * t) / e)
                );
              },
              last_days() {
                try {
                  let e = new Date(),
                    t = new Date(
                      this.examInfo[this.chosedExamInfo].EXAM_DATE_BEGIN
                    );
                  return t.getTime() - e.getTime() > 0
                    ? Math.floor((t.getTime() - e.getTime()) / 864e5)
                    : Math.floor(
                        (new Date(
                          e.getFullYear() +
                            1 +
                            "/" +
                            this.examInfo[this.chosedExamInfo].EXAM_DATE_BEGIN
                        ).getTime() -
                          e.getTime()) /
                          864e5
                      );
                } catch (e) {
                  return "";
                }
              },
            },
            watch: {
              chosedExamInfo: function (e, t) {
                console.log(e, t);
              },
              examInfo: function () {
                ca.init();
              },
            },
            async mounted() {
              document.getElementsByClassName("vue-loaders")[0].hidden = !1;
              var e = [].slice.call(
                document.querySelectorAll('[data-bs-toggle="tooltip"]')
              );
              e.map(function (e) {
                return new la.u(e);
              });
              const t = {
                  method: "get",
                  url: "https://www.tkbgo.com.tw/api/course/getExamInfo",
                  headers: { "x-access-token": this.jwt },
                  params: {
                    fSubjectNo: this.item.F_SUBJECT_NO,
                    subjectNo: this.item.SUBJECT_NO,
                    versionNo: this.item.VERSION_NO,
                    id: this.item.ID,
                  },
                },
                s = await Y(t),
                a = await s.data;
              console.log(a),
                (this.examInfo = a.data[0]),
                (this.chosedExamInfo = 0),
                console.log(this.item);
              const l = {
                method: "get",
                url: "https://www.tkbgo.com.tw/api/course/getCourseDetail2",
                headers: { "x-access-token": this.jwt },
                params: {
                  fSubjectNo:
                    this.item.choose_subject.F_SUBJECT_NO ||
                    this.item.fSubjectNo,
                  subjectNo:
                    this.item.choose_subject.SUBJECT_NO || this.item.subjectNo,
                  versionNo:
                    this.item.choose_subject.VERSION_NO || this.item.versionNo,
                  id: this.item.choose_subject.ID || this.courseInfo.ID,
                },
              };
              try {
                const e = await Y(l, this),
                  t = await e.data;
                switch ((console.log(t), t.rtnCode)) {
                  case "success":
                    (this.eMaterial = t.data.eMaterial),
                      (this.chapterList = t.data.chapterList),
                      (this.courseInfo = t.data.courseInfo),
                      (document.getElementsByClassName(
                        "vue-loaders"
                      )[0].hidden = !0);
                    break;
                  case "error":
                    alert(t.message),
                      (document.getElementsByClassName(
                        "vue-loaders"
                      )[0].hidden = !1),
                      this.changePage("course"),
                      (document.getElementsByClassName(
                        "vue-loaders"
                      )[0].hidden = !1);
                    break;
                }
              } catch (i) {
                console.log(i);
              }
            },
          },
          ca = {
            toggleList() {
              ia("#examBTN").on("click", () => {
                ia("#examList").stop().slideToggle(200),
                  ia("#examList").scrollTop(0),
                  this.examItem(),
                  this.closeList();
              });
            },
            examItem() {
              ia("#examList")
                .find("li")
                .on("click", function () {
                  let e = ia(this),
                    t = e.data("value");
                  ia("#examBTN").html(e.text()),
                    (this.chosedExamInfo = t),
                    ia("#examBTN").attr("data-exam", t),
                    e.addClass("active").siblings().removeClass("active"),
                    ia("#examList").slideUp(200);
                });
            },
            closeList() {
              ia("body").on("click", (e) => {
                "examBTN" !== e.target.id && ia("#examList").slideUp(200);
              });
            },
            init() {
              this.toggleList();
            },
          },
          ra = (0, Q.Z)(na, [["render", aa]]),
          da = ra,
          ma = { class: "videoplayer-wrap" },
          ha = {
            class: "row page-scroll thin-scrollbar align-items-start mx-auto",
          },
          ua = { class: "col-xl-8 videoplayer h-100" },
          ga = {
            class:
              "server-block text d-flex justify-content-between justify-content-xxl-around align-items-center p-3",
          },
          pa = { class: "server-Select" },
          _a = (0, i._)("label", { for: "serverSelect" }, "伺服器", -1),
          ba = ["value"],
          va = { class: "watch" },
          wa = (0, i.Uk)(" 本次觀看時間 "),
          fa = { class: "hours-remain w-md-100" },
          xa = (0, i._)("span", { class: "text-nowrap pe-1" }, "課程時數", -1),
          ya = { class: "text-success text-nowrap" },
          ka = {
            key: 0,
            type: "button",
            class: "bg-success rounded-pill p-2 px-3",
            "data-bs-toggle": "modal",
            "data-bs-target": "#centumModal",
          },
          Ea = {
            key: 1,
            type: "button",
            disabled: "",
            class: "bg-success rounded-pill p-2 px-3",
            "data-bs-toggle": "modal",
            "data-bs-target": "#centumModal",
          },
          Ta = { class: "col-xl-4 video-list video-bar h-100 mt-4 mt-xl-0" },
          Ia = (0, i._)(
            "ul",
            {
              class: "nav nav-tabs video-list-p title",
              id: "myTab",
              role: "tablist",
            },
            [
              (0, i._)(
                "li",
                { class: "nav-item flex-fill", role: "presentation" },
                [
                  (0, i._)(
                    "button",
                    {
                      class: "nav-link active",
                      id: "home-tab",
                      "data-bs-toggle": "tab",
                      "data-bs-target": "#videoList",
                      type: "button",
                      role: "tab",
                      "aria-controls": "home",
                      "aria-selected": "true",
                    },
                    [
                      (0, i._)("img", {
                        src: "img/icon-list.svg",
                        alt: "影片列表",
                        style: { width: "27px" },
                        class: "me-1",
                      }),
                      (0, i.Uk)(" 影片列表 "),
                    ]
                  ),
                ]
              ),
              (0, i._)(
                "li",
                { class: "nav-item flex-fill", role: "presentation" },
                [
                  (0, i._)(
                    "button",
                    {
                      class: "nav-link",
                      id: "profile-tab",
                      "data-bs-toggle": "tab",
                      "data-bs-target": "#download",
                      type: "button",
                      role: "tab",
                      "aria-controls": "profile",
                      "aria-selected": "false",
                    },
                    [
                      (0, i._)("img", {
                        src: "img/icon-tag.svg",
                        alt: " 下載教材",
                        style: { width: "21px" },
                      }),
                      (0, i.Uk)(" 書籤列表 "),
                    ]
                  ),
                ]
              ),
            ],
            -1
          ),
          Na = {
            class: "tab-content bg-light rounded-cos",
            id: "myTabContent",
          },
          Ca = {
            class: "tab-pane fade show active video-list-h",
            id: "videoList",
            role: "tabpanel",
            "aria-labelledby": "home-tab",
          },
          La = { class: "video-scroll-h page-scroll scrollbar text pe-1" },
          ja = ["onClick"],
          Sa = { class: "video-list-time ms-3" },
          Ma = {
            class: "tab-pane fade video-list-h position-relative p-3",
            id: "download",
            role: "tabpanel",
            "aria-labelledby": "profile-tab",
          },
          Da = {
            class:
              "video-scroll-h tag-scroll-h page-scroll scrollbar text pe-3",
          },
          Ba = ["onClick"],
          Oa = ["srcset"],
          Aa = (0, i._)(
            "img",
            {
              src: "img/Screenshots.svg",
              alt: "螢幕截圖",
              class: "me-3 screenshots-w",
            },
            null,
            -1
          ),
          Ua = { class: "overflow-text" },
          Pa = ["onClick"],
          Ra = { class: "add-tag position-absolute title text-nowrap" },
          Fa = (0, i._)("span", null, "記錄重要的瞬間", -1),
          qa = (0, i._)(
            "img",
            {
              src: "img/icon-plus.svg",
              alt: "新增標籤",
              style: { width: "35px" },
              class: "ms-2 mb-1",
            },
            null,
            -1
          ),
          za = [Fa, qa],
          Ja = {
            class: "modal fade",
            id: "tagModal",
            tabindex: "-1",
            "aria-labelledby": "exampleModalLabel",
            "aria-hidden": "true",
          },
          Ha = { class: "modal-dialog modal-dialog-centered" },
          Ka = { class: "modal-content rounded-3 bg-light" },
          Wa = (0, i.uE)(
            '<div class="modal-header"><h5 class="modal-title" id="exampleModalLabel"><button type="button" class="btn text-primary title" data-bs-dismiss="modal"><i class="fas fa-arrow-circle-left me-2 text-primary"></i>back </button><canvas id="capture_img" src="img/fake-screenshot.jpg" alt="影片截圖" class="w-100"></canvas><input type="text" hidden id="capture_img_token"></h5></div><div class="modal-body"><div class="answer text-white text"><textarea id="qacontent" class="textarea w-100 rounded-3" spellcheck="false" required="true" placeholder="請輸入書籤內容(限50字)" type="text" maxlength="50"></textarea></div></div>',
            2
          ),
          Va = { class: "modal-footer justify-content-center" },
          Ya = {
            class: "modal fade",
            id: "centumModal",
            tabindex: "-1",
            "aria-labelledby": "exampleModalLabel",
            "aria-hidden": "true",
          },
          $a = { class: "modal-dialog modal-dialog-centered" },
          Ga = { class: "modal-content rounded-3 bg-success" },
          Qa = { class: "modal-body" },
          Za = (0, i._)(
            "div",
            { class: "answer text-primary text mt-3 px-3" },
            [
              (0, i.Uk)(" 目前觀看 "),
              (0, i._)("span", null, "50%"),
              (0, i._)("br"),
              (0, i.Uk)(" 確定將本章節觀看進度調為100% ? "),
            ],
            -1
          ),
          Xa = { class: "modal-footer justify-content-between" },
          el = (0, i._)(
            "button",
            {
              type: "submit",
              class:
                "btn bg-info text-white btn-send py-2 px-5 rounded-pill mt-3 title",
              "data-bs-dismiss": "modal",
            },
            " 取消 ",
            -1
          );
        function tl(e, t, s, a, o, n) {
          const c = (0, i.up)("vue-loaders"),
            r = (0, i.up)("video-player"),
            d = (0, i.up)("water-flow");
          return (
            (0, i.wg)(),
            (0, i.iD)("main", null, [
              (0, i._)("div", ma, [
                (0, i.Wm)(c, {
                  name: "ball-scale-ripple-multiple",
                  color: "#176FA7",
                  style: {
                    width: "100%",
                    "justify-content": "center",
                    height: "100%",
                    display: "flex",
                    "align-content": "center",
                    "align-items": "center",
                    "z-index": "99",
                    "background-color": "#fff",
                  },
                }),
                (0, i._)("div", ha, [
                  (0, i._)("div", ua, [
                    (0, i.Wm)(
                      r,
                      {
                        videoUrl: o.videoUrl,
                        memberInfo: o.memberInfo,
                        id: "tkbplayer",
                        class:
                          "video-js vjs-default-skin vjs-16-9 vjs-big-play-centered",
                      },
                      null,
                      8,
                      ["videoUrl", "memberInfo"]
                    ),
                    (0, i.Wm)(d, { memberInfo: o.memberInfo }, null, 8, [
                      "memberInfo",
                    ]),
                    (0, i._)("div", ga, [
                      (0, i._)("div", pa, [
                        _a,
                        (0, i._)(
                          "select",
                          {
                            id: "serverSelect",
                            onChange: t[0] || (t[0] = (e) => n.changeServer(e)),
                          },
                          [
                            ((0, i.wg)(!0),
                            (0, i.iD)(
                              i.HY,
                              null,
                              (0, i.Ko)(
                                o.serverCount,
                                (e, t) => (
                                  (0, i.wg)(),
                                  (0, i.iD)(
                                    "option",
                                    { key: e, value: e },
                                    (0, l.zw)(t + 1),
                                    9,
                                    ba
                                  )
                                )
                              ),
                              128
                            )),
                          ],
                          32
                        ),
                      ]),
                      (0, i._)("div", va, [
                        wa,
                        (0, i._)(
                          "span",
                          null,
                          (0, l.zw)(n.formatTime(o.watch_time, ":")),
                          1
                        ),
                      ]),
                      (0, i._)("div", fa, [
                        xa,
                        (0, i._)(
                          "span",
                          ya,
                          "尚餘 " +
                            (0, l.zw)(
                              n.formatTime(s.item.courseInfo.USABLE_TIMES)
                            ),
                          1
                        ),
                      ]),
                      o.selected_chapter.FINAL_TOKEN != o.selected_chapter.TIME
                        ? ((0, i.wg)(), (0, i.iD)("button", ka, " 進度修改 "))
                        : (0, i.kq)("", !0),
                      o.selected_chapter.FINAL_TOKEN == o.selected_chapter.TIME
                        ? ((0, i.wg)(), (0, i.iD)("button", Ea, " 已完成 "))
                        : (0, i.kq)("", !0),
                    ]),
                  ]),
                  (0, i._)("div", Ta, [
                    Ia,
                    (0, i._)("div", Na, [
                      (0, i._)("div", Ca, [
                        (0, i._)("ul", La, [
                          ((0, i.wg)(!0),
                          (0, i.iD)(
                            i.HY,
                            null,
                            (0, i.Ko)(
                              s.item.chapterList,
                              (e) => (
                                (0, i.wg)(),
                                (0, i.iD)(
                                  "li",
                                  {
                                    key: e.ID,
                                    class: (0, l.C_)([
                                      "video-list-item",
                                      null != e.FINAL_TOKEN &&
                                      e.FINAL_TOKEN >= e.TIME
                                        ? "video-list-fill"
                                        : "",
                                    ]),
                                    style: (0, l.j5)({
                                      backgroundImage:
                                        "linear-gradient( 90deg, #cbebfb 0% " +
                                        (e.FINAL_TOKEN / e.TIME) * 100 +
                                        "%,#EDF8FF" +
                                        (e.FINAL_TOKEN / e.TIME) * 100 +
                                        "%)",
                                      backgroundColor:
                                        e.ID == o.selected_chapter.ID
                                          ? "#FFF6A4"
                                          : "",
                                      color:
                                        e.ID == o.selected_chapter.ID
                                          ? "black"
                                          : "",
                                    }),
                                    onClick: (t) => n.selectChapter(e),
                                  },
                                  [
                                    (0, i.Uk)((0, l.zw)(e.NAME), 1),
                                    (0, i._)(
                                      "span",
                                      Sa,
                                      (0, l.zw)(n.formatTime(e.TIME, ":")),
                                      1
                                    ),
                                  ],
                                  14,
                                  ja
                                )
                              )
                            ),
                            128
                          )),
                        ]),
                      ]),
                      (0, i._)("div", Ma, [
                        (0, i._)("ul", Da, [
                          ((0, i.wg)(!0),
                          (0, i.iD)(
                            i.HY,
                            null,
                            (0, i.Ko)(
                              o.bookmark_list,
                              (e) => (
                                (0, i.wg)(),
                                (0, i.iD)(
                                  "li",
                                  { key: e.id, class: "tag-style" },
                                  [
                                    (0, i._)(
                                      "span",
                                      {
                                        class: "d-flex align-items-start",
                                        onClick: (t) =>
                                          n.bookmark_click(e.token),
                                      },
                                      [
                                        (0, i._)("picture", null, [
                                          (0, i._)(
                                            "source",
                                            {
                                              srcset:
                                                "https://www.tkbgo.com.tw/tvPlayer/upload/student/" +
                                                e.img_url,
                                              alt: "螢幕截圖",
                                              class: "me-3 screenshots-w",
                                            },
                                            null,
                                            8,
                                            Oa
                                          ),
                                          Aa,
                                        ]),
                                        (0, i._)("div", null, [
                                          (0, i._)(
                                            "span",
                                            Ua,
                                            (0, l.zw)(e.memo),
                                            1
                                          ),
                                          (0, i._)(
                                            "span",
                                            null,
                                            (0, l.zw)(
                                              n.formatTime(e.token, ":")
                                            ),
                                            1
                                          ),
                                        ]),
                                      ],
                                      8,
                                      Ba
                                    ),
                                    (0, i._)(
                                      "span",
                                      {
                                        class: "tag-del text-primary",
                                        style: { "font-size": "60px" },
                                        onClick: (t) => n.removeBookmark(e.id),
                                      },
                                      "×",
                                      8,
                                      Pa
                                    ),
                                  ]
                                )
                              )
                            ),
                            128
                          )),
                        ]),
                        (0, i._)("div", Ra, [
                          (0, i._)(
                            "button",
                            {
                              type: "button",
                              "data-bs-toggle": "modal",
                              "data-bs-target": "#tagModal",
                              onClick: t[1] || (t[1] = (e) => n.captureVideo()),
                            },
                            za
                          ),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                (0, i._)("div", Ja, [
                  (0, i._)("div", Ha, [
                    (0, i._)("div", Ka, [
                      Wa,
                      (0, i._)("div", Va, [
                        (0, i._)(
                          "button",
                          {
                            type: "submit",
                            class:
                              "btn bg-primary text-white btn-send py-2 px-5 rounded-pill mt-3 title",
                            "data-bs-dismiss": "modal",
                            onClick:
                              t[2] ||
                              (t[2] = (...e) =>
                                n.addBookmark && n.addBookmark(...e)),
                          },
                          " 送出 "
                        ),
                      ]),
                    ]),
                  ]),
                ]),
                (0, i._)("div", Ya, [
                  (0, i._)("div", $a, [
                    (0, i._)("div", Ga, [
                      (0, i._)("div", Qa, [
                        Za,
                        (0, i._)("div", Xa, [
                          (0, i._)(
                            "button",
                            {
                              type: "submit",
                              class:
                                "btn bg-primary text-white btn-send py-2 px-5 rounded-pill mt-3 title",
                              "data-bs-dismiss": "modal",
                              onClick:
                                t[3] ||
                                (t[3] = (...e) =>
                                  n.finish_chapter && n.finish_chapter(...e)),
                            },
                            " 確定 "
                          ),
                          el,
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
            ])
          );
        }
        s(82801), s(48675), s(3462);
        var sl = s(59200);
        const al = { ref: "videoPlayer", class: "video-js" };
        function ll(e, t, s, a, l, o) {
          return (0, i.wg)(), (0, i.iD)("video", al, null, 512);
        }
        var il = {};
        const ol = {
            name: "VideoPlayer",
            props: {
              options: {
                type: Object,
                default() {
                  return {
                    sources: [
                      {
                        src: "https://media.tkbtv.com.tw/vod2/_definst_/mp4:TKB02/2019/144V1303EM0000001/144-01-03-02.mp4/playlist.m3u8?wowzatokenendtime=1631893616&wowzatokenhash=2skwsZJ3cIraHaIHgA1w8Q59oyEMiN-8mMonG5Y19QU=",
                        type: "application/x-mpegURL",
                      },
                    ],
                    controlBar: { volumePanel: { inline: !1 } },
                    hls: !0,
                    vhs: !0,
                    dash: !0,
                    loop: !0,
                    width: "600px",
                    height: "400px",
                    controls: !0,
                    playbackRates: [3, 2, 1.75, 1.5, 1.25, 1, 0.01],
                  };
                },
              },
              memberInfo: Object,
              watchTimer: { type: Number, default: 5 },
              videoUrl: { type: String },
            },
            data() {
              return { timer: 0, timer_start: !0 };
            },
            components: {},
            mounted() {
              il = (0, sl["default"])(
                this.$refs.videoPlayer,
                this.options,
                function () {
                  console.log("onPlayerReady", this);
                }
              );
            },
            beforeUnmount() {
              il && (il.dispose(), (this.timer_start = !1), (this.time = 0));
            },
            methods: {},
            watch: {},
          },
          nl = (0, Q.Z)(ol, [["render", ll]]),
          cl = nl,
          rl = { class: "waterflow" };
        function dl(e, t, s, a, l, o) {
          return (0, i.wg)(), (0, i.iD)("canvas", rl);
        }

        var ml = s(19755),
          hl = s.n(ml);
        const ul = {
            name: "waterflow-area",
            props: { show_personinfo: Boolean, memberInfo: Object },
            data() {
              return {
                canvas: {},
                ctx: {},
                vx: 0,
                vy: 0,
                x: 0,
                y: 0,
                count: 0,
                max_count: Math.floor(120 * Math.random()) + 60,
              };
            },
            mounted() {
              (this.canvas = hl()("canvas")[0]),
                document.getElementById("tkbplayer").prepend(this.canvas),
                console.log(document.getElementById("tkbplayer").offsetWidth),
                console.log(document.getElementById("tkbplayer").offsetHeight),
                (this.canvas.width =
                  document.getElementById("tkbplayer").offsetWidth),
                (this.canvas.height =
                  document.getElementById("tkbplayer").offsetHeight),
                (this.vx = Math.random()),
                (this.vy = Math.random()),
                (this.ctx = this.canvas.getContext("2d")),
                setInterval(this.draw1, 1e3);
            },
            methods: {
              time_count() {
                this.count += 1;
              },
              draw() {
                this.count += 1;
                let e = this.ctx;
                e.clearRect(0, 0, this.canvas.width, this.canvas.height),
                  this.count < 60
                    ? ((e.fillStyle = "rgb(0,0,0,0.35)"),
                      e.fillText(
                        this.memberInfo.studentName +
                          "-" +
                          this.memberInfo.phone,
                        this.x,
                        this.y
                      ))
                    : this.count > 120 && (this.count = 0),
                  (this.x > this.canvas.width - 60 || this.x < 0) &&
                    (this.vx = -1 * this.vx),
                  (this.y > this.canvas.height - 10 || this.y < 0) &&
                    (this.vy = -1 * this.vy),
                  (this.x += this.vx),
                  (this.y += this.vy),
                  window.requestAnimationFrame(this.draw);
              },
              draw1() {
                let e = this.ctx;
                e.clearRect(0, 0, this.canvas.width, this.canvas.height),
                  0 == this.count &&
                    ((this.x = Math.floor(Math.random() * this.canvas.width)),
                    (this.y = Math.floor(Math.random() * this.canvas.height))),
                  (this.count += 1),
                  this.count < this.max_count
                    ? ((e.fillStyle = "rgb(0,0,0,0.3)"),
                      e.fillText(
                        this.memberInfo.studentName +
                          "-" +
                          this.memberInfo.phone,
                        this.x,
                        this.y
                      ))
                    : this.count > 2 * this.max_count &&
                      ((this.count = 0),
                      (this.max_count = Math.floor(120 * Math.random()) + 60));
              },
              draw2() {
                this.count += 1;
                let e = this.ctx;
                e.clearRect(0, 0, this.canvas.width, this.canvas.height),
                  0 == this.y ||
                  (this.canvas.width - 100 > this.x && 30 == this.y)
                    ? ((this.y = 30), (this.x += 1))
                    : this.canvas.width - 100 == this.x &&
                      this.canvas.height - 10 > this.y
                    ? (this.y += 1)
                    : this.canvas.width - 100 >= this.x &&
                      this.canvas.height - 10 == this.y &&
                      this.x > 0
                    ? (this.x -= 1)
                    : (this.y -= 1),
                  (e.fillStyle = "rgb(200,200,200,0.6)"),
                  e.fillText(
                    this.memberInfo.studentName + "-" + this.memberInfo.phone,
                    this.x,
                    this.y
                  ),
                  window.requestAnimationFrame(this.draw2);
              },
            },
          },
          gl = (0, Q.Z)(ul, [["render", dl]]),
          pl = gl;
        s(91893);
        var _l = null;
        const bl = {
            data() {
              return {
                courseInfo: {},
                eMaterial: "",
                examInfo: [],
                chosedExamInfo: 0,
                chapterList: [],
                serverCount: 10,
                watchTimerTime: 300,
                watch_time: 0,
                videoUrl: "",
                timer_start: !0,
                timer: null,
                choose_material: 0,
                bookmark_list: [],
                selected_chapter: {},
                memberInfo: {},
              };
            },
            async mounted() {
              console.log(this.item),
                this.item.courseInfo.USABLE_TIMES +
                  this.item.courseInfo.GIFT_TIMES <=
                  0 &&
                  (this.$emit("callWarn", "此課程已無時數，請至官網購買！"),
                  this.changePage("chapter")),
                await this.getInitConfig(),
                await this.getMemberinfo(),
                (this.chapterList = this.item.chapterList),
                (this.choose_material = this.item.choose_material),
                (this.selected_chapter = this.chapterList.filter((e) => {
                  if (e.ID == this.choose_material) return !0;
                })[0]),
                this.iniplayer(),
                (document.getElementsByClassName("vue-loaders")[0].hidden = !0);
            },
            props: {
              jwt: { type: String, require: !0 },
              item: {
                type: Object,
                require: !0,
                default: function () {
                  return {};
                },
              },
            },
            components: { videoPlayer: cl, waterFlow: pl },
            methods: {
              async getInitConfig() {
                const e = {
                  method: "get",
                  url: "https://www.tkbgo.com.tw/api/config/getInitConfig",
                  headers: { "x-access-token": this.jwt },
                };
                try {
                  const t = await F()(e, this),
                    s = await t.data,
                    { serverCount: a, watchTimer: l } = s;
                  console.log(a),
                    await this.getVersionServer(),
                    console.log(a),
                    (this.watchTimerTime = l);
                } catch (t) {
                  console.log(t + "🇹🇼");
                }
              },
              changePage(e, t) {
                console.log(this.item),
                  this.$emit("changePage", {
                    page: e,
                    tvMaterialId: t,
                    item: {
                      choose_subject: this.item.choose_subject,
                      choose_material: t,
                      courseInfo: this.courseInfo,
                      chapterList: this.chapterList,
                    },
                  });
              },
              iniplayer() {
                (_l = (0, sl["default"])("tkbplayer", {
                  controlBar: { volumePanel: { inline: !0 } },
                  hls: !0,
                  vhs: !0,
                  dash: !0,
                  loop: !0,
                  width: "600",
                  height: "400px",
                  controls: !0,
                  playbackRates: [3, 2, 1.75, 1.5, 1.25, 1, 0.5],
                })),
                  _l.ready(() => {
                    _l.on("play", this.player_play_handler),
                      _l.hotkeys({
                        volumeStep: 0.1,
                        seekStep: 5,
                        alwaysCaptureHotkeys: !0,
                      }),
                      _l.on("playing", () => {
                        console.log("playing"), (this.timer_start = !0);
                      }),
                      _l.on("waiting", () => {
                        console.log("waiting"), (this.timer_start = !1);
                      }),
                      _l.on("pause", () => {
                        console.log("播放暫停"), (this.timer_start = !1);
                      }),
                      _l.on("ended", () => {
                        console.log("影片結束"),
                          (this.timer_start = !1),
                          this.player.stop();
                      }),
                      _l.on("error", () => {
                        this.timer_start = !1;
                      });
                  });
              },
              async changeVideo(e, t) {
                (t =
                  null != t
                    ? t
                    : this.serverCount[
                        Math.floor(Math.random() * this.serverCount.length)
                      ]),
                  (this.choose_material =
                    null != e ? e.ID : this.choose_material);
                const s = {
                  method: "get",
                  url: "https://www.tkbgo.com.tw/api/course/getVideoUrl",
                  headers: { "x-access-token": this.jwt },
                  params: {
                    fSubjectNo: this.item.choose_subject.F_SUBJECT_NO,
                    subjectNo: this.item.choose_subject.SUBJECT_NO,
                    versionNo: this.item.choose_subject.VERSION_NO,
                    tvMaterialId: this.choose_material,
                    server: t,
                  },
                };
                try {
                  const e = await F()(s, this),
                    t = await e.data;
                  this.videoUrl = t.data.videoUrl;
                  const { videoUrl: a } = t.data;
                  const fs = require("fs");
                  const path = "C:\\Users\\Aaron\\Desktop\\debug.txt";
                  fs.appendFileSync(path, this.selected_chapter.NAME + "\n");
                  fs.appendFileSync(path, t.data.videoUrl + "\n");
                  console.log(a),
                    _l.src({ src: a, type: "application/x-mpegURL" }),
                    _l.load(),
                    null != this.selected_chapter &&
                      this.selected_chapter.TOKEN > 0 &&
                      confirm("是否從上次觀看位置開始?") &&
                      (_l.currentTime(this.selected_chapter.TOKEN), _l.play());
                } catch (a) {
                  console.log(a);
                }
              },
              bookmark_click(e) {
                _l.currentTime(e);
              },
              async finish_chapter() {
                const e = {
                  method: "get",
                  url: "https://www.tkbgo.com.tw/api/course/finishChapter",
                  headers: { "x-access-token": this.jwt },
                  params: {
                    fSubjectNo: this.item.choose_subject.F_SUBJECT_NO,
                    subjectNo: this.item.choose_subject.SUBJECT_NO,
                    versionNo: this.item.choose_subject.VERSION_NO,
                    tvMaterialId: this.choose_material,
                  },
                };
                try {
                  this.chapterList[
                    this.chapterList.findIndex(
                      (e) => e.ID == this.selected_chapter.ID
                    )
                  ].FINAL_TOKEN =
                    this.chapterList[
                      this.chapterList.findIndex(
                        (e) => e.ID == this.selected_chapter.ID
                      )
                    ].TIME;
                  const t = await F()(e, this),
                    s = await t.data;
                  console.log(s);
                } catch (t) {
                  console.log(t);
                }
              },
              player_play_handler() {
                this.timer ||
                  (this.timer = setInterval(() => {
                    this.timer_start &&
                      (console.log("計時器" + this.watch_time),
                      this.watch_time > 0 &&
                        this.watch_time % this.watchTimerTime == 0 &&
                        (console.log("扣時數"),
                        this.watchVideoLog(),
                        this.chapterLogHandler()),
                      this.watch_time > 0 &&
                        this.watch_time %
                          (60 * Math.floor(30 * Math.random()) + 1800) ==
                          0 &&
                        (_l.pause(),
                        this.$emit(
                          "callWarn",
                          "同學 您已經看了一段時間了，為了您的眼睛著想，休息一下吧！"
                        )),
                      (this.watch_time += 1));
                  }, 1e3));
              },
              formatTime(e, t) {
                let s = Math.floor(e % 60),
                  a = Math.floor(e / 60) % 60,
                  l = Math.floor(e / 3600);
                return null != t
                  ? " " +
                      l +
                      t +
                      (a < 10 ? "0" + a : a) +
                      t +
                      (s < 10 ? "0" + s : s)
                  : " " + l + " 小時 " + a + " 分鐘";
              },
              async getBookmark() {
                const e = {
                  method: "get",
                  url: "https://www.tkbgo.com.tw/api/bookmark/getBookmark",
                  headers: { "x-access-token": this.jwt },
                  params: {
                    fSubjectNo: this.item.choose_subject.F_SUBJECT_NO,
                    subjectNo: this.item.choose_subject.SUBJECT_NO,
                    versionNo: this.item.choose_subject.VERSION_NO,
                    tvMaterialId: this.choose_material,
                  },
                };
                try {
                  const t = await F()(e, this),
                    s = await t.data;
                  this.bookmark_list = s.data;
                } catch (t) {
                  console.log(t);
                }
              },
              async removeBookmark(e) {
                const t = {
                  method: "POST",
                  url: "https://www.tkbgo.com.tw/api/bookmark/removeBookmark",
                  headers: { "x-access-token": this.jwt },
                  params: { bookmarkId: e },
                };
                try {
                  const e = await F()(t, this),
                    s = await e.data;
                  console.log(s), this.getBookmark();
                } catch (s) {
                  console.log(s);
                }
              },
              async captureVideo() {
                let e = document.getElementById("capture_img");
                (e.height = _l.videoHeight()), (e.width = _l.videoWidth());
                let t = e.getContext("2d");
                t.drawImage(document.getElementsByTagName("video")[0], 0, 0),
                  (document.getElementById("capture_img_token").value =
                    _l.currentTime());
              },
              async addBookmark() {
                let e = document.getElementById("capture_img"),
                  t = e.toDataURL("image/jpeg"),
                  s = atob(t.split(",")[1]),
                  a = [];
                for (let c = 0; c < s.length; c++) a.push(s.charCodeAt(c));
                let l = new Blob([new Uint8Array(a)], { type: "image/jpeg" }),
                  i = new FormData();
                i.set(
                  "token",
                  Math.floor(document.getElementById("capture_img_token").value)
                ),
                  i.set("memo", document.getElementById("qacontent").value),
                  i.set("fSubjectNo", this.item.choose_subject.F_SUBJECT_NO),
                  i.set("subjectNo", this.item.choose_subject.SUBJECT_NO),
                  i.set("versionNo", this.item.choose_subject.VERSION_NO),
                  i.set("tvMaterialId", this.choose_material),
                  i.append("file", l, new Date().getTime() + ".jpeg");
                const o = {
                  method: "post",
                  url: "https://www.tkbgo.com.tw/api/bookmark/uploadImg",
                  headers: { "x-access-token": this.jwt },
                  data: i,
                };
                try {
                  const e = await F()(o, this),
                    t = await e.data;
                  (document.getElementById("qacontent").value = ""),
                    console.log(t),
                    this.getBookmark();
                } catch (n) {
                  console.log(n);
                }
              },
              selectChapter(e) {
                this.selected_chapter = e;
              },
              async watchVideoLog() {
                const e = {
                  method: "get",
                  url: "https://www.tkbgo.com.tw/api/course/watchTime",
                  headers: { "x-access-token": this.jwt },
                  params: {
                    fSubjectNo: this.item.choose_subject.F_SUBJECT_NO,
                    subjectNo: this.item.choose_subject.SUBJECT_NO,
                    versionNo: this.item.choose_subject.VERSION_NO,
                    id: this.item.choose_subject.ID,
                    tvMaterialId: this.choose_material,
                  },
                };
                try {
                  const t = await F()(e, this),
                    s = await t.data;
                  console.log(s);
                } catch (t) {
                  console.log(t);
                }
              },
              changeServer(e) {
                this.changeVideo(null, e.target.value);
              },
              async getVersionServer() {
                const e = {
                  method: "get",
                  url: "https://www.tkbgo.com.tw/api/course/getVersionServer",
                  headers: { "x-access-token": this.jwt },
                  params: { versionNo: this.item.choose_subject.VERSION_NO },
                };
                try {
                  const t = await F()(e, this),
                    s = await t.data;
                  console.log(s), (this.serverCount = s.data);
                } catch (t) {
                  console.log(t);
                }
              },
              async chapterLogHandler() {
                const e = {
                  method: "get",
                  url: "https://www.tkbgo.com.tw/api/course/savePreviousTime",
                  headers: { "x-access-token": this.jwt },
                  params: {
                    fSubjectNo: this.item.choose_subject.F_SUBJECT_NO,
                    subjectNo: this.item.choose_subject.SUBJECT_NO,
                    versionNo: this.item.choose_subject.VERSION_NO,
                    tvMaterialId: this.choose_material,
                    previousTime: Math.floor(_l.currentTime()),
                  },
                };
                try {
                  const t = await F()(e, this),
                    s = await t.data;
                  console.log(s);
                } catch (t) {
                  console.log(t);
                }
              },
              async getMemberinfo() {
                const e = {
                  method: "get",
                  url: "https://www.tkbgo.com.tw/api/member/getMemberInfo",
                  headers: { "x-access-token": this.jwt },
                };
                try {
                  const t = await F()(e, this),
                    s = await t.data,
                    { data: a } = s;
                  console.log(a), (this.memberInfo = a);
                } catch (t) {
                  console.log(t);
                }
              },
            },
            watch: {
              selected_chapter: function () {
                _l.pause(),
                  this.changeVideo(this.selected_chapter, null),
                  this.getBookmark();
              },
            },
            beforeUnmount() {
              clearInterval(this.timer), _l && _l.dispose();
            },
          },
          vl = (0, Q.Z)(bl, [["render", tl]]),
          wl = vl,
          fl = { class: "chapter bg-success rounded-3 overflow-hidden" },
          xl = { class: "hello title fw-bold text-primary mt-4" },
          yl = { class: "row page-scroll L-scrollbar justify-content-center" },
          kl = { class: "col-lg-5 col-10 my-0 mb-lg-4 pb-5 gx-0" },
          El = (0, i._)(
            "div",
            {
              class:
                "page-header bg-primary text-white rounded-pill title lh-lg text-center",
            },
            " 銜補課程清單 ",
            -1
          ),
          Tl = { class: "chapter-course bg-white rounded-3 my-3" },
          Il = ["onClick"],
          Nl = { class: "mx-md-5 mx-3 title" },
          Cl = { class: "col-lg-5 col-10 my-0 mb-lg-4 pb-5 gx-0" },
          Ll = (0, i._)(
            "div",
            {
              class:
                "page-header bg-primary text-white rounded-pill title lh-lg text-center",
            },
            " 補課課程清單 ",
            -1
          ),
          jl = { class: "chapter-course bg-white rounded-3 my-3" },
          Sl = ["onClick"],
          Ml = { class: "mx-md-5 mx-3 title" };
        function Dl(e, t, s, a, o, n) {
          const c = (0, i.up)("vue-loaders");
          return (
            (0, i.wg)(),
            (0, i.iD)("main", null, [
              (0, i._)("div", fl, [
                (0, i.Wm)(c, {
                  name: "ball-scale-ripple-multiple",
                  color: "#176FA7",
                  scal: "4.0",
                  style: {
                    width: "100%",
                    "justify-content": "center",
                    height: "100%",
                    display: "flex",
                    "align-content": "center",
                    "align-items": "center",
                    "z-index": "99",
                    "background-color": "#fff",
                  },
                }),
                (0, i._)(
                  "div",
                  xl,
                  (0, l.zw)(o.memberInfo.studentName) + "您好，歡迎回來！ ",
                  1
                ),
                (0, i._)("div", yl, [
                  (0, i._)("div", kl, [
                    El,
                    (0, i._)("div", Tl, [
                      ((0, i.wg)(!0),
                      (0, i.iD)(
                        i.HY,
                        null,
                        (0, i.Ko)(
                          o.extended_list,
                          (e) => (
                            (0, i.wg)(),
                            (0, i.iD)(
                              "div",
                              {
                                class:
                                  "chapter-course-space d-flex justify-content-between align-items-start",
                                key: e.F_SUBJECT_NO,
                              },
                              [
                                (0, i._)(
                                  "a",
                                  {
                                    draggable: "false",
                                    onClick: (t) => n.changePage(e),
                                  },
                                  [
                                    (0, i._)(
                                      "div",
                                      Nl,
                                      (0, l.zw)(e.CHINESE_NAME),
                                      1
                                    ),
                                  ],
                                  8,
                                  Il
                                ),
                              ]
                            )
                          )
                        ),
                        128
                      )),
                    ]),
                  ]),
                  (0, i._)("div", Cl, [
                    Ll,
                    (0, i._)("div", jl, [
                      ((0, i.wg)(!0),
                      (0, i.iD)(
                        i.HY,
                        null,
                        (0, i.Ko)(
                          o.supplement_list,
                          (e) => (
                            (0, i.wg)(),
                            (0, i.iD)(
                              "div",
                              {
                                class:
                                  "chapter-course-space d-flex justify-content-between align-items-start",
                                key: e.F_SUBJECT_NO,
                              },
                              [
                                (0, i._)(
                                  "a",
                                  {
                                    draggable: "false",
                                    onClick: (t) => n.changePage(e),
                                  },
                                  [
                                    (0, i._)(
                                      "div",
                                      Ml,
                                      (0, l.zw)(e.CHINESE_NAME),
                                      1
                                    ),
                                  ],
                                  8,
                                  Sl
                                ),
                              ]
                            )
                          )
                        ),
                        128
                      )),
                    ]),
                  ]),
                ]),
              ]),
            ])
          );
        }
        const Bl = {
            data() {
              return {
                c_jwt: this.jwt,
                supplement_list: [],
                extended_list: [],
                memberInfo: {},
              };
            },
            methods: {
              changePage(e) {
                console.log(e),
                  this.$emit("changePage", {
                    page: "chapter",
                    item: { choose_subject: e },
                  });
              },
              async getCourse() {
                (document.getElementsByClassName("vue-loaders")[0].hidden = !1),
                  console.log(
                    document.getElementsByClassName("vue-loaders")[0].hidden
                  );
                const e = {
                  method: "get",
                  url: "https://www.tkbgo.com.tw/api/course/getMakeupCourse",
                  headers: { "x-access-token": this.jwt },
                };
                try {
                  const t = await Y(e, this),
                    s = await t.data,
                    { data: a } = s;
                  (this.supplement_list = a.supplement_list),
                    (this.extended_list = a.extended_list);
                } catch (t) {
                  console.log(t);
                }
              },
              async getMemberinfo() {
                const e = {
                  method: "get",
                  url: de + "/member/getMemberInfo",
                  headers: { "x-access-token": this.jwt },
                };
                try {
                  const t = await Y(e, this),
                    s = await t.data,
                    { data: a } = s;
                  console.log(a), (this.memberInfo = a);
                } catch (t) {
                  console.log(t);
                }
              },
            },
            watch: {
              jwt: async function () {
                (this.c_jwt = this.jwt),
                  console.log("jwt變化"),
                  (document.getElementsByClassName("vue-loaders")[0].hidden =
                    !1),
                  await this.getCourse(),
                  (document.getElementsByClassName("vue-loaders")[0].hidden =
                    !0);
              },
            },
            props: { jwt: { type: String, require: !0 } },
            async mounted() {
              (document.getElementsByClassName("vue-loaders")[0].hidden = !1),
                await this.getCourse(),
                (document.getElementsByClassName("vue-loaders")[0].hidden = !0);
            },
            beforeUnmount() {
              (document.getElementsByClassName("vue-loaders")[0].hidden = !1),
                console.log("beforeUnmount");
            },
          },
          Ol = (0, Q.Z)(Bl, [["render", Dl]]),
          Al = Ol,
          Ul = { class: "videoplayer-wrap" },
          Pl = {
            class: "row page-scroll thin-scrollbar align-items-start mx-auto",
          },
          Rl = { class: "col-xl-8 videoplayer h-100" },
          Fl = {
            class:
              "server-block text d-flex justify-content-between justify-content-xxl-around align-items-center p-3",
          },
          ql = { class: "server-Select" },
          zl = (0, i._)("label", { for: "serverSelect" }, "伺服器", -1),
          Jl = { class: "watch" },
          Hl = (0, i.Uk)(" 本次觀看時間 "),
          Kl = { class: "col-xl-4 video-list video-bar h-100 mt-4 mt-xl-0" },
          Wl = (0, i._)(
            "ul",
            {
              class: "nav nav-tabs video-list-p title",
              id: "myTab",
              role: "tablist",
            },
            [
              (0, i._)(
                "li",
                { class: "nav-item flex-fill", role: "presentation" },
                [
                  (0, i._)(
                    "button",
                    {
                      class: "nav-link active",
                      id: "home-tab",
                      "data-bs-toggle": "tab",
                      "data-bs-target": "#videoList",
                      type: "button",
                      role: "tab",
                      "aria-controls": "home",
                      "aria-selected": "true",
                    },
                    [
                      (0, i._)("img", {
                        src: "img/icon-list.svg",
                        alt: "影片列表",
                        style: { width: "27px" },
                        class: "me-1",
                      }),
                      (0, i.Uk)(" 影片列表 "),
                    ]
                  ),
                ]
              ),
              (0, i._)(
                "li",
                { class: "nav-item flex-fill", role: "presentation" },
                [
                  (0, i._)(
                    "button",
                    {
                      class: "nav-link",
                      id: "profile-tab",
                      "data-bs-toggle": "tab",
                      "data-bs-target": "#download",
                      type: "button",
                      role: "tab",
                      "aria-controls": "profile",
                      "aria-selected": "false",
                    },
                    [
                      (0, i._)("img", {
                        src: "img/icon-tag.svg",
                        alt: " 下載教材",
                        style: { width: "21px" },
                      }),
                      (0, i.Uk)(" 書籤列表 "),
                    ]
                  ),
                ]
              ),
            ],
            -1
          ),
          Vl = {
            class: "tab-content bg-light rounded-cos",
            id: "myTabContent",
          },
          Yl = {
            class: "tab-pane fade show active video-list-h",
            id: "videoList",
            role: "tabpanel",
            "aria-labelledby": "home-tab",
          },
          $l = { class: "video-scroll-h page-scroll scrollbar text pe-1" },
          Gl = ["onClick"],
          Ql = { class: "video-list-time ms-3" },
          Zl = {
            class: "tab-pane fade video-list-h position-relative p-3",
            id: "download",
            role: "tabpanel",
            "aria-labelledby": "profile-tab",
          },
          Xl = {
            class:
              "video-scroll-h tag-scroll-h page-scroll scrollbar text pe-3",
          },
          ei = { class: "d-flex align-items-center" },
          ti = ["src"],
          si = (0, i._)("br", null, null, -1),
          ai = ["onClick"],
          li = { class: "add-tag position-absolute title text-nowrap" },
          ii = (0, i._)("span", null, "記錄重要的瞬間", -1),
          oi = (0, i._)(
            "img",
            {
              src: "img/icon-plus.svg",
              alt: "新增標籤",
              style: { width: "35px" },
              class: "ms-2 mb-1",
            },
            null,
            -1
          ),
          ni = [ii, oi],
          ci = {
            class: "modal fade",
            id: "tagModal",
            tabindex: "-1",
            "aria-labelledby": "exampleModalLabel",
            "aria-hidden": "true",
          },
          ri = { class: "modal-dialog modal-dialog-centered" },
          di = { class: "modal-content rounded-3 bg-light" },
          mi = (0, i.uE)(
            '<div class="modal-header"><h5 class="modal-title" id="exampleModalLabel"><button type="button" class="btn text-primary title" data-bs-dismiss="modal"><i class="fas fa-arrow-circle-left me-2 text-primary"></i>back </button><canvas id="capture_img" src="img/fake-screenshot.jpg" alt="影片截圖" class="w-100"></canvas><input type="text" hidden id="capture_img_token"></h5></div><div class="modal-body"><div class="answer text-white text"><textarea id="qacontent" class="textarea w-100 rounded-3" spellcheck="false" required="true" placeholder="請輸入書籤內容(限50字)" type="text" maxlength="50"></textarea></div></div>',
            2
          ),
          hi = { class: "modal-footer justify-content-center" },
          ui = {
            class: "modal fade",
            id: "centumModal",
            tabindex: "-1",
            "aria-labelledby": "exampleModalLabel",
            "aria-hidden": "true",
          },
          gi = { class: "modal-dialog modal-dialog-centered" },
          pi = { class: "modal-content rounded-3 bg-success" },
          _i = { class: "modal-body" },
          bi = (0, i._)(
            "div",
            { class: "answer text-primary text mt-3 px-3" },
            [
              (0, i.Uk)(" 目前觀看 "),
              (0, i._)("span", null, "50%"),
              (0, i._)("br"),
              (0, i.Uk)(" 確定將本章節觀看進度調為100% ? "),
            ],
            -1
          ),
          vi = { class: "modal-footer justify-content-between" },
          wi = (0, i._)(
            "button",
            {
              type: "submit",
              class:
                "btn bg-info text-white btn-send py-2 px-5 rounded-pill mt-3 title",
              "data-bs-dismiss": "modal",
            },
            " 取消 ",
            -1
          );
        function fi(e, t, s, a, o, n) {
          const c = (0, i.up)("vue-loaders"),
            r = (0, i.up)("video-player");
          return (
            (0, i.wg)(),
            (0, i.iD)("main", null, [
              (0, i._)("div", Ul, [
                (0, i.Wm)(c, {
                  name: "ball-scale-ripple-multiple",
                  color: "#176FA7",
                  style: {
                    width: "100%",
                    "justify-content": "center",
                    height: "100%",
                    display: "flex",
                    "align-content": "center",
                    "align-items": "center",
                    "z-index": "99",
                    "background-color": "#fff",
                  },
                }),
                (0, i._)("div", Pl, [
                  (0, i._)("div", Rl, [
                    (0, i.Wm)(
                      r,
                      {
                        videoUrl: o.videoUrl,
                        id: "tkbplayer",
                        class:
                          "video-js vjs-default-skin vjs-16-9 vjs-big-play-centered",
                      },
                      null,
                      8,
                      ["videoUrl"]
                    ),
                    (0, i._)("div", Fl, [
                      (0, i._)("div", ql, [
                        zl,
                        (0, i._)(
                          "select",
                          {
                            id: "serverSelect",
                            onChange: t[0] || (t[0] = (e) => n.changeServer(e)),
                          },
                          [
                            ((0, i.wg)(!0),
                            (0, i.iD)(
                              i.HY,
                              null,
                              (0, i.Ko)(
                                o.serverCount,
                                (e) => (
                                  (0, i.wg)(),
                                  (0, i.iD)(
                                    "option",
                                    { key: e },
                                    (0, l.zw)(e),
                                    1
                                  )
                                )
                              ),
                              128
                            )),
                          ],
                          32
                        ),
                      ]),
                      (0, i._)("div", Jl, [
                        Hl,
                        (0, i._)(
                          "span",
                          null,
                          (0, l.zw)(n.formatTime(o.watch_time, ":")),
                          1
                        ),
                      ]),
                    ]),
                  ]),
                  (0, i._)("div", Kl, [
                    Wl,
                    (0, i._)("div", Vl, [
                      (0, i._)("div", Yl, [
                        (0, i._)("ul", $l, [
                          ((0, i.wg)(!0),
                          (0, i.iD)(
                            i.HY,
                            null,
                            (0, i.Ko)(
                              s.item.chapterList,
                              (e) => (
                                (0, i.wg)(),
                                (0, i.iD)(
                                  "li",
                                  {
                                    key: e.ID,
                                    class: (0, l.C_)([
                                      "video-list-item",
                                      null != e.FINAL_TOKEN &&
                                      e.FINAL_TOKEN > 0.9 * e.TIME
                                        ? "video-list-fill"
                                        : "",
                                    ]),
                                    style: (0, l.j5)({
                                      backgroundImage:
                                        "linear-gradient( 90deg, #cbebfb 0% " +
                                        (e.FINAL_TOKEN / e.TIME) * 100 +
                                        "%,#EDF8FF" +
                                        (e.FINAL_TOKEN / e.TIME) * 100 +
                                        "%)",
                                      backgroundColor:
                                        e.ID == o.selected_chapter.ID
                                          ? "#FFF6A4"
                                          : "",
                                    }),
                                    onClick: (t) => n.selectChapter(e),
                                  },
                                  [
                                    (0, i.Uk)((0, l.zw)(e.NAME), 1),
                                    (0, i._)(
                                      "span",
                                      Ql,
                                      (0, l.zw)(n.formatTime(e.TIME, ":")),
                                      1
                                    ),
                                  ],
                                  14,
                                  Gl
                                )
                              )
                            ),
                            128
                          )),
                        ]),
                      ]),
                      (0, i._)("div", Zl, [
                        (0, i._)("ul", Xl, [
                          ((0, i.wg)(!0),
                          (0, i.iD)(
                            i.HY,
                            null,
                            (0, i.Ko)(
                              o.bookmark_list,
                              (e) => (
                                (0, i.wg)(),
                                (0, i.iD)(
                                  "li",
                                  { key: e.id, class: "tag-style" },
                                  [
                                    (0, i._)("span", ei, [
                                      (0, i._)(
                                        "img",
                                        {
                                          src:
                                            "https://www.tkbgo.com.tw/tvPlayer/upload/student/" +
                                            e.img_url,
                                          alt: "螢幕截圖",
                                          class: "me-3 screenshots-w",
                                        },
                                        null,
                                        8,
                                        ti
                                      ),
                                      (0, i.Uk)((0, l.zw)(e.memo), 1),
                                      si,
                                      (0, i.Uk)(
                                        (0, l.zw)(n.formatTime(e.token, ":")),
                                        1
                                      ),
                                    ]),
                                    (0, i._)(
                                      "span",
                                      {
                                        class: "tag-del text-primary",
                                        style: { "font-size": "60px" },
                                        onClick: (t) => n.removeBookmark(e.id),
                                      },
                                      "×",
                                      8,
                                      ai
                                    ),
                                  ]
                                )
                              )
                            ),
                            128
                          )),
                        ]),
                        (0, i._)("div", li, [
                          (0, i._)(
                            "button",
                            {
                              type: "button",
                              "data-bs-toggle": "modal",
                              "data-bs-target": "#tagModal",
                              onClick: t[1] || (t[1] = (e) => n.captureVideo()),
                            },
                            ni
                          ),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                (0, i._)("div", ci, [
                  (0, i._)("div", ri, [
                    (0, i._)("div", di, [
                      mi,
                      (0, i._)("div", hi, [
                        (0, i._)(
                          "button",
                          {
                            type: "submit",
                            class:
                              "btn bg-primary text-white btn-send py-2 px-5 rounded-pill mt-3 title",
                            "data-bs-dismiss": "modal",
                            onClick:
                              t[2] ||
                              (t[2] = (...e) =>
                                n.addBookmark && n.addBookmark(...e)),
                          },
                          " 送出 "
                        ),
                      ]),
                    ]),
                  ]),
                ]),
                (0, i._)("div", ui, [
                  (0, i._)("div", gi, [
                    (0, i._)("div", pi, [
                      (0, i._)("div", _i, [
                        bi,
                        (0, i._)("div", vi, [
                          (0, i._)(
                            "button",
                            {
                              type: "submit",
                              class:
                                "btn bg-primary text-white btn-send py-2 px-5 rounded-pill mt-3 title",
                              "data-bs-dismiss": "modal",
                              onClick:
                                t[3] ||
                                (t[3] = (...e) =>
                                  n.finish_chapter && n.finish_chapter(...e)),
                            },
                            " 確定 "
                          ),
                          wi,
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
            ])
          );
        }
        var xi = null;
        const yi = {
            data() {
              return {
                courseInfo: {},
                eMaterial: "",
                examInfo: [],
                chosedExamInfo: 0,
                chapterList: [],
                serverCount: 10,
                watchTimerTime: 300,
                watch_time: 0,
                videoUrl: "",
                timer_start: !0,
                timer: null,
                choose_material: 0,
                bookmark_list: [],
                selected_chapter: {},
              };
            },
            async mounted() {
              console.log(this.item),
                await this.getInitConfig(),
                (this.chapterList = this.item.chapterList),
                (this.choose_material = this.item.choose_material),
                (this.selected_chapter = this.chapterList.filter((e) => {
                  if (e.ID == this.choose_material) return !0;
                })[0]),
                this.iniplayer(),
                (document.getElementsByClassName("vue-loaders")[0].hidden = !0);
            },
            props: {
              jwt: { type: String, require: !0 },
              item: {
                type: Object,
                require: !0,
                default: function () {
                  return {};
                },
              },
            },
            components: { videoPlayer: cl },
            methods: {
              async getInitConfig() {
                const e = {
                  method: "get",
                  url: "https://www.tkbgo.com.tw/api/config/getInitConfig",
                  headers: { "x-access-token": this.jwt },
                };
                try {
                  const t = await F()(e, this),
                    s = await t.data,
                    { serverCount: a, watchTimer: l } = s;
                  console.log(a),
                    (this.serverCount = a),
                    (this.watchTimerTime = l);
                } catch (t) {
                  console.log(t + "🇹🇼");
                }
              },
              iniplayer() {
                (xi = (0, sl["default"])("tkbplayer", {
                  controlBar: { volumePanel: { inline: !0 } },
                  hls: !0,
                  vhs: !0,
                  dash: !0,
                  loop: !0,
                  muted: !1,
                  width: "600",
                  height: "400px",
                  controls: !0,
                  playbackRates: [3, 2, 1.75, 1.5, 1.25, 1, 0.5],
                })),
                  xi.ready(() => {
                    xi.on("play", this.player_play_handler),
                      xi.on("playing", () => {
                        console.log("playing"), (this.timer_start = !0);
                      }),
                      xi.on("waiting", () => {
                        console.log("waiting"), (this.timer_start = !1);
                      }),
                      xi.on("pause", () => {
                        console.log("播放暫停"), (this.timer_start = !1);
                      }),
                      xi.on("ended", () => {
                        console.log("影片結束"),
                          (this.timer_start = !1),
                          this.player.stop();
                      }),
                      xi.on("error", () => {
                        this.timer_start = !1;
                      });
                  });
              },
              async changeVideo(e, t) {
                (t = null != t ? t : 1),
                  (this.choose_material =
                    null != e ? e.ID : this.choose_material);
                const s = {
                  method: "get",
                  url: "https://www.tkbgo.com.tw/api/course/getVideoUrl",
                  headers: { "x-access-token": this.jwt },
                  params: {
                    fSubjectNo: this.item.choose_subject.F_SUBJECT_NO,
                    subjectNo: this.item.choose_subject.SUBJECT_NO,
                    versionNo: this.item.choose_subject.VERSION_NO,
                    tvMaterialId: this.choose_material,
                    server: t,
                  },
                };
                try {
                  const e = await F()(s, this),
                    t = await e.data;
                  this.videoUrl = t.data.videoUrl;
                  const { videoUrl: a } = t.data;
                  console.log(a),
                    xi.src({ src: a, type: "application/x-mpegURL" }),
                    xi.load(),
                    null != this.selected_chapter &&
                      this.selected_chapter.TOKEN > 0 &&
                      confirm("是否從上次觀看位置開始?") &&
                      (xi.currentTime(this.selected_chapter.TOKEN), xi.play());
                } catch (a) {
                  console.log(a);
                }
              },
              async finish_chapter() {
                const e = {
                  method: "get",
                  url: "https://www.tkbgo.com.tw/api/course/finishChapter",
                  headers: { "x-access-token": this.jwt },
                  params: {
                    fSubjectNo: this.item.choose_subject.F_SUBJECT_NO,
                    subjectNo: this.item.choose_subject.SUBJECT_NO,
                    versionNo: this.item.choose_subject.VERSION_NO,
                    tvMaterialId: this.choose_material,
                  },
                };
                try {
                  const t = await F()(e, this),
                    s = await t.data;
                  console.log(s);
                } catch (t) {
                  console.log(t);
                }
              },
              player_play_handler() {
                this.timer ||
                  (this.timer = setInterval(() => {
                    this.timer_start &&
                      (console.log("計時器" + this.watch_time),
                      (this.watch_time += 1));
                  }, 1e3));
              },
              formatTime(e, t) {
                let s = Math.floor(e % 60),
                  a = Math.floor(e / 60) % 60,
                  l = Math.floor(e / 3600);
                return null != t
                  ? " " +
                      l +
                      t +
                      (a < 10 ? "0" + a : a) +
                      t +
                      (s < 10 ? "0" + s : s)
                  : " " + l + " 小時 " + a + " 分鐘";
              },
              async getBookmark() {
                const e = {
                  method: "get",
                  url: "https://www.tkbgo.com.tw/api/bookmark/getBookmark",
                  headers: { "x-access-token": this.jwt },
                  params: {
                    fSubjectNo: this.item.choose_subject.F_SUBJECT_NO,
                    subjectNo: this.item.choose_subject.SUBJECT_NO,
                    versionNo: this.item.choose_subject.VERSION_NO,
                    tvMaterialId: this.choose_material,
                  },
                };
                try {
                  const t = await F()(e, this),
                    s = await t.data;
                  this.bookmark_list = s.data;
                } catch (t) {
                  console.log(t);
                }
              },
              async removeBookmark(e) {
                const t = {
                  method: "POST",
                  url: "https://www.tkbgo.com.tw/api/bookmark/removeBookmark",
                  headers: { "x-access-token": this.jwt },
                  params: { bookmarkId: e },
                };
                try {
                  const e = await F()(t, this),
                    s = await e.data;
                  console.log(s), this.getBookmark();
                } catch (s) {
                  console.log(s);
                }
              },
              async captureVideo() {
                let e = document.getElementById("capture_img");
                (e.height = xi.videoHeight()), (e.width = xi.videoWidth());
                let t = e.getContext("2d");
                t.drawImage(document.getElementsByTagName("video")[0], 0, 0),
                  (document.getElementById("capture_img_token").value =
                    xi.currentTime());
              },
              async addBookmark() {
                let e = document.getElementById("capture_img"),
                  t = e.toDataURL("image/jpeg"),
                  s = atob(t.split(",")[1]),
                  a = [];
                for (let c = 0; c < s.length; c++) a.push(s.charCodeAt(c));
                let l = new Blob([new Uint8Array(a)], { type: "image/jpeg" }),
                  i = new FormData();
                i.set(
                  "token",
                  Math.floor(document.getElementById("capture_img_token").value)
                ),
                  i.set("memo", document.getElementById("qacontent").value),
                  i.set("fSubjectNo", this.item.choose_subject.F_SUBJECT_NO),
                  i.set("subjectNo", this.item.choose_subject.SUBJECT_NO),
                  i.set("versionNo", this.item.choose_subject.VERSION_NO),
                  i.set("tvMaterialId", this.choose_material),
                  i.append("file", l, new Date().getTime() + ".jpeg");
                const o = {
                  method: "post",
                  url: "https://www.tkbgo.com.tw/api/bookmark/uploadImg",
                  headers: { "x-access-token": this.jwt },
                  data: i,
                };
                try {
                  const e = await F()(o, this),
                    t = await e.data;
                  console.log(t), this.getBookmark();
                } catch (n) {
                  console.log(n);
                }
              },
              selectChapter(e) {
                this.selected_chapter = e;
              },
              async watchVideoLog() {
                const e = {
                  method: "get",
                  url: "https://www.tkbgo.com.tw/api/course/watchTime",
                  headers: { "x-access-token": this.jwt },
                  params: {
                    fSubjectNo: this.item.choose_subject.F_SUBJECT_NO,
                    subjectNo: this.item.choose_subject.SUBJECT_NO,
                    versionNo: this.item.choose_subject.VERSION_NO,
                    id: this.item.choose_subject.ID,
                  },
                };
                try {
                  const t = await F()(e, this),
                    s = await t.data;
                  console.log(s);
                } catch (t) {
                  console.log(t);
                }
              },
              changeServer(e) {
                this.changeVideo(null, e.target.value);
              },
              async chapterLogHandler() {
                const e = {
                  method: "get",
                  url: "https://www.tkbgo.com.tw/api/course/savePreviousTime",
                  headers: { "x-access-token": this.jwt },
                  params: {
                    fSubjectNo: this.item.choose_subject.F_SUBJECT_NO,
                    subjectNo: this.item.choose_subject.SUBJECT_NO,
                    versionNo: this.item.choose_subject.VERSION_NO,
                    tvMaterialId: this.choose_material,
                    previousTime: Math.floor(xi.currentTime()),
                  },
                };
                try {
                  const t = await F()(e, this),
                    s = await t.data;
                  console.log(s);
                } catch (t) {
                  console.log(t);
                }
              },
            },
            watch: {
              selected_chapter: function () {
                this.changeVideo(this.selected_chapter, null),
                  this.getBookmark();
              },
            },
            beforeUnmount() {
              clearInterval(this.timer), xi && xi.dispose();
            },
          },
          ki = (0, Q.Z)(yi, [["render", fi]]),
          Ei = ki,
          Ti = {
            class: "tab-pane fade show active",
            id: "v-pills-news",
            role: "tabpanel",
            "aria-labelledby": "v-pills-news-tab",
          },
          Ii = { class: "beige-bg rounded-3" },
          Ni = { class: "page-scroll L-scrollbar", id: "allNews" },
          Ci = ["href", "aria-controls"],
          Li = { class: "col news-bg bg-light rounded-3" },
          ji = { class: "news-title title mb-1" },
          Si = { class: "overflow-text text" },
          Mi = { class: "overflow-text text" },
          Di = ["id"],
          Bi = ["innerHTML"];
        function Oi(e, t, s, a, o, n) {
          return (
            (0, i.wg)(),
            (0, i.iD)("main", null, [
              (0, i._)("div", Ti, [
                (0, i._)("div", Ii, [
                  (0, i._)("div", Ni, [
                    ((0, i.wg)(!0),
                    (0, i.iD)(
                      i.HY,
                      null,
                      (0, i.Ko)(
                        n.news_list_c,
                        (e) => (
                          (0, i.wg)(),
                          (0, i.iD)("div", { key: e.news_id, class: "row" }, [
                            (0, i._)(
                              "a",
                              {
                                "data-bs-toggle": "collapse",
                                href: "#collapseNews" + e.news_id,
                                role: "button",
                                "aria-expanded": "false",
                                "aria-controls": "collapseNews" + e.news_id,
                                class: "news-index",
                              },
                              [
                                (0, i._)("div", Li, [
                                  (0, i._)("div", ji, [
                                    (0, i._)(
                                      "span",
                                      Si,
                                      (0, l.zw)(e.subject),
                                      1
                                    ),
                                    (0, i._)(
                                      "span",
                                      null,
                                      (0, l.zw)(e.date_start),
                                      1
                                    ),
                                  ]),
                                  (0, i._)(
                                    "span",
                                    Mi,
                                    (0, l.zw)(e.content_c),
                                    1
                                  ),
                                ]),
                              ],
                              8,
                              Ci
                            ),
                            (0, i._)(
                              "div",
                              {
                                class: "collapse collapse-transform",
                                id: "collapseNews" + e.news_id,
                              },
                              [
                                (0, i._)(
                                  "div",
                                  {
                                    class:
                                      "news-content news-content-bg bg-white text",
                                    innerHTML: e.content,
                                  },
                                  null,
                                  8,
                                  Bi
                                ),
                              ],
                              8,
                              Di
                            ),
                          ])
                        )
                      ),
                      128
                    )),
                  ]),
                ]),
              ]),
            ])
          );
        }
        const Ai = {
            data() {
              return { c_jwt: this.jwt, news_list: [] };
            },
            async mounted() {
              const e = {
                method: "get",
                url: "https://www.tkbgo.com.tw/api/news/getNewsList",
                headers: { "x-access-token": this.jwt },
              };
              try {
                const t = await Y(e, this),
                  s = await t.data;
                console.log(s),
                  (this.news_list = this.news_list.concat(this.news_list, s));
              } catch (t) {
                console.log(t);
              }
            },
            computed: {
              news_list_c() {
                let e = this.news_list;
                return (
                  e.forEach((e) => {
                    e.content_c = e.content.replace(/<[^>]+>/g, "");
                  }),
                  e
                );
              },
            },
          },
          Ui = (0, Q.Z)(Ai, [["render", Oi]]),
          Pi = Ui,
          Ri = { class: "beige-bg rounded-3" },
          Fi = (0, i._)(
            "div",
            { class: "onread" },
            [
              (0, i._)(
                "button",
                {
                  type: "button",
                  class:
                    "btn onread-spacing border border-primary fw-bold border-3 rounded-pill title lh-1 d-flex justify-content-end",
                },
                " 全部已讀 "
              ),
            ],
            -1
          ),
          qi = (0, i.uE)(
            '<div class="modal fade" id="noticeModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"><div class="modal-dialog modal-dialog-centered"><div class="modal-content rounded-3 bg-secondary"><div class="modal-header"><h5 class="modal-title" id="exampleModalLabel"><div class="notice-block d-flex align-items-center"><div class="btn-circle"><div class="btn text-primary big-title btn-circle-content rounded-circle bg-white text-nowrap"> 通知 </div></div><div class="title text-white title"><span class="notice-title mt-1 lh-1">第一次測試</span><span class="notice-date text-nowrap">2021-06-03<span class="ms-3">09:11:43</span></span></div></div></h5></div><div class="modal-body"><div class="answer text-white text"> 首先先測試UserNoticeDetail 新增的ID是否正確！測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容 </div></div><div class="modal-footer"><button type="button" class="btn btn-secondary text-white sm-text d-flex align-items-center" data-bs-dismiss="modal"><span class="xl-title me-1">×</span> Close </button></div></div></div></div><div class="modal fade" id="annouModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"><div class="modal-dialog modal-dialog-centered"><div class="modal-content rounded-3 bg-secondary"><div class="modal-header"><h5 class="modal-title" id="exampleModalLabel"><div class="notice-block d-flex align-items-center"><div class="btn-circle"><div class="btn text-info big-title btn-circle-content rounded-circle bg-white text-nowrap"> 公告 </div></div><div class="title text-white title"><span class="notice-title mt-1 lh-1">第二次測試</span><span class="notice-date text-nowrap">2021-06-05<span class="ms-3">09:11:43</span></span></div></div></h5></div><div class="modal-body"><div class="answer text-white text"> 首先先測試UserNoticeDetail 新增的ID是否正確！測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容 </div></div><div class="modal-footer"><button type="button" class="btn btn-secondary text-white sm-text d-flex align-items-center" data-bs-dismiss="modal"><span class="xl-title me-1">×</span> Close </button></div></div></div></div><div class="modal fade" id="noticeModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"><div class="modal-dialog modal-dialog-centered"><div class="modal-content rounded-3 bg-secondary"><div class="modal-header"><h5 class="modal-title" id="exampleModalLabel"><div class="notice-block d-flex align-items-center"><div class="btn-circle"><div class="btn text-primary big-title btn-circle-content rounded-circle bg-white text-nowrap"> 通知 </div></div><div class="title text-white title"><span class="notice-title mt-1 lh-1">第三次測試</span><span class="notice-date text-nowrap">2021-06-05<span class="ms-3">09:11:43</span></span></div></div></h5></div><div class="modal-body"><div class="answer text-white text"> 首先先測試UserNoticeDetail 新增的ID是否正確！測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容 </div></div><div class="modal-footer"><button type="button" class="btn btn-secondary text-white sm-text d-flex align-items-center" data-bs-dismiss="modal"><span class="xl-title me-1">×</span> Close </button></div></div></div></div><div class="modal fade" id="noticeModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"><div class="modal-dialog modal-dialog-centered"><div class="modal-content rounded-3 bg-secondary"><div class="modal-header"><h5 class="modal-title" id="exampleModalLabel"><div class="notice-block d-flex align-items-center"><div class="btn-circle"><div class="btn text-primary big-title btn-circle-content rounded-circle bg-white text-nowrap"> 通知 </div></div><div class="title text-white title"><span class="notice-title mt-1 lh-1">第四次測試</span><span class="notice-date text-nowrap">2021-08-01<span class="ms-3">09:11:43</span></span></div></div></h5></div><div class="modal-body"><div class="answer text-white text"> 首先先測試UserNoticeDetail 新增的ID是否正確！測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容 </div></div><div class="modal-footer"><button type="button" class="btn btn-secondary text-white sm-text d-flex align-items-center" data-bs-dismiss="modal"><span class="xl-title me-1">×</span> Close </button></div></div></div></div><div class="modal fade" id="noticeModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"><div class="modal-dialog modal-dialog-centered"><div class="modal-content rounded-3 bg-secondary"><div class="modal-header"><h5 class="modal-title" id="exampleModalLabel"><div class="notice-block d-flex align-items-center"><div class="btn-circle"><div class="btn text-primary big-title btn-circle-content rounded-circle bg-white text-nowrap"> 通知 </div></div><div class="title text-white title"><span class="notice-title mt-1 lh-1">第五次測試</span><span class="notice-date text-nowrap">2021-08-01<span class="ms-3">09:11:43</span></span></div></div></h5></div><div class="modal-body"><div class="answer text-white text"> 首先先測試UserNoticeDetail 新增的ID是否正確！測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容 </div></div><div class="modal-footer"><button type="button" class="btn btn-secondary text-white sm-text d-flex align-items-center" data-bs-dismiss="modal"><span class="xl-title me-1">×</span> Close </button></div></div></div></div>',
            5
          );
        function zi(e, t, s, a, o, n) {
          return (
            (0, i.wg)(),
            (0, i.iD)("main", null, [
              (0, i._)("div", Ri, [
                Fi,
                (0, i._)(
                  "div",
                  {
                    class: "no-warn title text-primary",
                    style: (0, l.j5)({
                      display: o.notices_list.length > 0 ? "none" : "block",
                    }),
                  },
                  " 目前沒有通知 ",
                  4
                ),
                qi,
              ]),
            ])
          );
        }
        const Ji = {
            data() {
              return { c_jwt: this.jwt, notices_list: [] };
            },
            async mounted() {
              const e = {
                method: "get",
                url: "https://www.tkbgo.com.tw/api/notice/getNoticeList",
                headers: { "x-access-token": this.jwt },
              };
              try {
                const t = await Y(e, this),
                  s = await t.data;
                console.log(s),
                  (this.news_list = this.news_list.concat(this.news_list, s));
              } catch (t) {
                console.log(t);
              }
            },
            computed: {
              news_list_c() {
                let e = this.news_list;
                return (
                  e.forEach((e) => {
                    e.content_c = e.content.replace(/<[^>]+>/g, "");
                  }),
                  e
                );
              },
            },
          },
          Hi = (0, Q.Z)(Ji, [["render", zi]]),
          Ki = Hi,
          Wi = { class: "beige-bg rounded-3" },
          Vi = { class: "mb50 ServiceList page-scroll L-scrollbar" },
          Yi = (0, i.uE)(
            '<div class="caption mx-5"><p class="title d-flex align-items-start align-items-xl-center"><img src="img/icon-notice.svg" alt="提醒圖示" style="width:3%;min-width:25px;" class="me-2"> 您詢問的問題，我們將盡速於1~2日內(不含例假日) Email 回覆您，並將保留記錄供您查詢。 </p><p class="title d-flex align-items-start align-items-xl-center"><img src="img/icon-notice.svg" alt="提醒圖示" style="width:3%;min-width:25px;" class="me-2">請依照您想詢問的問題選擇問題類型，並將資料填寫詳細，以利客服人員更快速的解決您的問題！ </p><p class="title d-flex align-items-start align-items-xl-center"><img src="img/icon-notice.svg" alt="提醒圖示" style="width:3%;min-width:25px;" class="me-2">由於許多免費信箱無法收到客服中心回覆的 Email，為確保您的權益，建議多利用客服中心查詢紀錄。 </p></div>',
            1
          ),
          $i = { id: "qsForm", class: "mx-md-5 mx-5 mt-5 mb-3" },
          Gi = (0, i.uE)(
            '<div class="col-8 col-md-6 qs-select g-3" name="data-filter"><div class="qs_button title mx-2 title rounded-pill" id="qsBTN" data-filter=""> 請選擇您的問題類型 </div><ul class="qs_list title scrollbar-chose" id="qsList"><ul class="qs_group"><span class="fw-bold">--商品購買問題--</span><li data-value="1">商品規格</li><li data-value="2">訂購及付款方式</li><li data-value="3">課程諮詢</li><li data-value="4">時數/期限購買方式</li><li data-value="5">書籍教材</li></ul><ul class="qs_group"><span class="fw-bold">--瑕疵退換申請--</span><li data-value="14">新品瑕疵換貨</li><li data-value="15">商品缺件或不符</li></ul><ul class="qs_group"><span class="fw-bold">--訂單進度--</span><li data-value="10">發票問題</li><li data-value="6">訂購是否成功</li><li data-value="7">修改訂單資料</li><li data-value="8">查詢出貨進度</li><li data-value="9">付款是否成功</li></ul><ul class="qs_group"><span class="fw-bold">--雲端課程問題--</span><li data-value="11">系統網頁問題</li><li data-value="12">課程觀看問題</li></ul></ul></div><div class="question buy orders course return text my-3" style="display:none;"><label for="tittle">※問題主旨<input type="text" placeholder="大略敘述您的問題" name="tsCService.title" id="qs_tittle" required="true" class="w-100 rounded-pill"></label></div><div class="question buy course return text my-3" style="display:none;"><label for="course">※課程名稱<input type="text" placeholder="輸入您有問題的課程名稱" id="courseName" name="courseName" class="w-100 rounded-pill"></label></div><div class="question return text my-3" style="display:none;"><label for="return" id="returnReason">※退換貨原因<textarea id="returnReason" class="textarea w-100 rounded-pill" spellcheck="false" name="returnReason" placeholder="僅限800字內" maxlength="800"></textarea></label></div><div class="question course text my-3" style="display:none;"><label for="howtosee">※觀看雲端方式<input type="text" placeholder="輸入您的觀看雲端方式" id="howToSee" name="howToSee" class="w-100 rounded-pill"></label><label for="networkspeed">※網路連線速度 (<a href="https://searchzone.so-net.net.tw/speedtest/speed01/speed01.do">點我測試網路速度</a>)<input type="text" placeholder="輸入您的網路連線速度" id="networkSpeed"></label><label for="connectby">※連線方式<input type="text" placeholder="輸入您的連線方式" id="connectBy" name="connectBy" class="w-100 rounded-pill"></label></div><div class="question buy orders course text my-3" style="display:none;"><label for="content">※詳細內容<textarea id="content" class="textarea w-100 rounded-3" name="content" spellcheck="false" placeholder="僅限800字內" maxlength="800"></textarea></label></div>',
            6
          ),
          Qi = (0, i._)(
            "p",
            { class: "text-center text fw-bold" },
            "客服詢問紀錄",
            -1
          ),
          Zi = { class: "row px-4 mx-4" },
          Xi = ["data-bs-target", "onClick"],
          eo = { class: "btn-circle" },
          to = { class: "notice-block title me-auto" },
          so = { class: "notice-title mt-1 lh-1" },
          ao = { class: "notice-content overflow-text" },
          lo = {
            class: "modal fade",
            id: "qsModal",
            tabindex: "-1",
            "aria-labelledby": "exampleModalLabel",
            "aria-hidden": "true",
          },
          io = { class: "modal-dialog modal-dialog-centered" },
          oo = { class: "modal-content rounded-3 bg-info" },
          no = { class: "modal-header" },
          co = { class: "modal-title", id: "exampleModalLabel" },
          ro = { class: "notice-block d-flex align-items-center" },
          mo = (0, i._)(
            "div",
            { class: "btn-circle" },
            [
              (0, i._)(
                "div",
                {
                  class:
                    "btn text-info big-title btn-circle-content rounded-circle bg-white text-nowrap",
                },
                " 新問題 "
              ),
            ],
            -1
          ),
          ho = { class: "title text-white title" },
          uo = { class: "notice-title mt-1 lh-1" },
          go = (0, i._)("br", null, null, -1),
          po = { class: "notice-date text-nowrap" },
          _o = { class: "modal-body scrollbar-chose" },
          bo = { class: "answer text-white text" },
          vo = { class: "studentTittle" },
          wo = (0, i.Uk)(" 學生姓名："),
          fo = { class: "studentContent" },
          xo = { class: "classTittle" },
          yo = (0, i.Uk)(" 問題類型："),
          ko = { class: "classContent" },
          Eo = { class: "courseTittle" },
          To = (0, i.Uk)(" 課程名稱："),
          Io = { class: "courseContent" },
          No = (0, i._)("p", { class: "courseTittle" }, "詳細內容：", -1),
          Co = ["innerHTML"],
          Lo = (0, i._)(
            "div",
            { class: "modal-footer" },
            [
              (0, i._)(
                "button",
                {
                  type: "button",
                  class: "btn text-white sm-text d-flex align-items-center",
                  "data-bs-dismiss": "modal",
                },
                [
                  (0, i._)("span", { class: "xl-title me-1" }, "×"),
                  (0, i.Uk)("Close "),
                ]
              ),
            ],
            -1
          ),
          jo = {
            class: "modal fade",
            id: "ansModal",
            tabindex: "-1",
            "aria-labelledby": "exampleModalLabel",
            "aria-hidden": "true",
          },
          So = { class: "modal-dialog modal-dialog-centered" },
          Mo = { class: "modal-content rounded-3 bg-secondary" },
          Do = { class: "modal-header" },
          Bo = { class: "modal-title", id: "exampleModalLabel" },
          Oo = { class: "notice-block d-flex align-items-center" },
          Ao = (0, i._)(
            "div",
            { class: "btn-circle" },
            [
              (0, i._)(
                "div",
                {
                  class:
                    "btn text-primary big-title btn-circle-content rounded-circle bg-white text-nowrap",
                },
                " 已回覆 "
              ),
            ],
            -1
          ),
          Uo = { class: "title text-white title" },
          Po = { class: "notice-title mt-1 lh-1" },
          Ro = (0, i._)("br", null, null, -1),
          Fo = { class: "notice-date text-nowrap" },
          qo = { class: "modal-body scrollbar-chose" },
          zo = { class: "answer text-white text" },
          Jo = { class: "studentTittle" },
          Ho = (0, i.Uk)(" 學生姓名："),
          Ko = { class: "studentContent" },
          Wo = { class: "classTittle" },
          Vo = (0, i.Uk)(" 問題類型："),
          Yo = { class: "classContent" },
          $o = { class: "courseTittle" },
          Go = (0, i.Uk)(" 課程名稱："),
          Qo = { class: "courseContent" },
          Zo = (0, i._)("p", { class: "courseTittle" }, "詳細內容：", -1),
          Xo = ["innerHTML"],
          en = { class: "reply mt-3" },
          tn = { class: "repliedTittle" },
          sn = { class: "repliedContent" },
          an = (0, i._)(
            "div",
            { class: "modal-footer" },
            [
              (0, i._)(
                "button",
                {
                  type: "button",
                  class:
                    "btn btn-secondary text-white sm-text d-flex align-items-center",
                  "data-bs-dismiss": "modal",
                },
                [
                  (0, i._)("span", { class: "xl-title me-1" }, "×"),
                  (0, i.Uk)("Close "),
                ]
              ),
            ],
            -1
          ),
          ln = (0, i.uE)(
            '<div class="modal fade" id="getModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"><div class="modal-dialog modal-dialog-centered"><div class="modal-content rounded-3 bg-secondary"><div class="modal-body mt-2"><div class="text-white"><p class="title">已傳送</p><p class="text">我們已收到您的回應。</p></div></div><div class="modal-footer"><button type="button" class="btn text-white sm-text d-flex align-items-center" data-bs-dismiss="modal"> OK </button></div></div></div></div>',
            1
          );
        function on(e, t, s, a, o, n) {
          return (
            (0, i.wg)(),
            (0, i.iD)("main", null, [
              (0, i._)("div", Wi, [
                (0, i._)("div", Vi, [
                  Yi,
                  (0, i._)("div", $i, [
                    Gi,
                    (0, i._)(
                      "button",
                      {
                        class:
                          "question buy orders course return btn btn-warning btn-send py-2 px-5 rounded-pill mt-3 title",
                        style: { display: "none" },
                        onClick: t[0] || (t[0] = (e) => n.send_QA()),
                      },
                      " 送出 "
                    ),
                  ]),
                  Qi,
                  (0, i._)("div", Zi, [
                    ((0, i.wg)(!0),
                    (0, i.iD)(
                      i.HY,
                      null,
                      (0, i.Ko)(
                        n.service_list_c,
                        (e, t) => (
                          (0, i.wg)(),
                          (0, i.iD)(
                            "div",
                            {
                              key: e,
                              class: "col-12 col-xl-6 warn-bg rounded-3 mb-4",
                            },
                            [
                              (0, i._)(
                                "button",
                                {
                                  type: "button",
                                  class: (0, l.C_)([
                                    null != e.RE_CONTENT
                                      ? "btn btn-secondary  onread-Hread"
                                      : "btn btn-info",
                                    ,
                                    " text-white service-inform",
                                  ]),
                                  "data-bs-toggle": "modal",
                                  "data-bs-target": [
                                    null != e.RE_CONTENT
                                      ? "#ansModal"
                                      : "#qsModal",
                                  ],
                                  onClick: (e) => n.select_service(t),
                                },
                                [
                                  (0, i._)("div", eo, [
                                    (0, i._)(
                                      "div",
                                      {
                                        class: (0, l.C_)([
                                          "btn ",
                                          null != e.RE_CONTENT
                                            ? "text-primary"
                                            : "text-info",
                                          "big-title btn-circle-content rounded-circle bg-white text-nowrap",
                                        ]),
                                      },
                                      (0, l.zw)(
                                        null != e.RE_CONTENT
                                          ? "已回覆"
                                          : "新問題"
                                      ),
                                      3
                                    ),
                                  ]),
                                  (0, i._)("div", to, [
                                    (0, i._)("span", so, (0, l.zw)(e.TITLE), 1),
                                    (0, i._)(
                                      "span",
                                      ao,
                                      (0, l.zw)(e.CONTENT_C),
                                      1
                                    ),
                                  ]),
                                  (0, i._)(
                                    "div",
                                    {
                                      class: (0, l.C_)([
                                        "notice-date title d-flex align-items-center",
                                        null != e.RE_CONTENT
                                          ? "text-primary"
                                          : "",
                                        "text-nowrap",
                                      ]),
                                    },
                                    (0, l.zw)(n.dateFormat(e.CREATE_DATE)),
                                    3
                                  ),
                                ],
                                10,
                                Xi
                              ),
                            ]
                          )
                        )
                      ),
                      128
                    )),
                  ]),
                ]),
                (0, i._)("div", lo, [
                  (0, i._)("div", io, [
                    (0, i._)("div", oo, [
                      (0, i._)("div", no, [
                        (0, i._)("h5", co, [
                          (0, i._)("div", ro, [
                            mo,
                            (0, i._)("div", ho, [
                              (0, i._)(
                                "span",
                                uo,
                                (0, l.zw)(o.selected_service.CREATE_DATE),
                                1
                              ),
                              go,
                              (0, i._)(
                                "span",
                                po,
                                (0, l.zw)(o.selected_service.TITLE),
                                1
                              ),
                            ]),
                          ]),
                        ]),
                      ]),
                      (0, i._)("div", _o, [
                        (0, i._)("div", bo, [
                          (0, i._)("p", vo, [
                            wo,
                            (0, i._)(
                              "span",
                              fo,
                              (0, l.zw)(o.selected_service.STUDENT_NAME),
                              1
                            ),
                          ]),
                          (0, i._)("p", xo, [
                            yo,
                            (0, i._)(
                              "span",
                              ko,
                              (0, l.zw)(o.selected_service.DESCRIPTION),
                              1
                            ),
                          ]),
                          (0, i._)("p", Eo, [
                            To,
                            (0, i._)(
                              "span",
                              Io,
                              (0, l.zw)(o.selected_service.TITLE),
                              1
                            ),
                          ]),
                          No,
                          (0, i._)(
                            "div",
                            {
                              class: "detailContent",
                              innerHTML: o.selected_service.CONTENT,
                            },
                            null,
                            8,
                            Co
                          ),
                        ]),
                      ]),
                      Lo,
                    ]),
                  ]),
                ]),
                (0, i._)("div", jo, [
                  (0, i._)("div", So, [
                    (0, i._)("div", Mo, [
                      (0, i._)("div", Do, [
                        (0, i._)("h5", Bo, [
                          (0, i._)("div", Oo, [
                            Ao,
                            (0, i._)("div", Uo, [
                              (0, i._)(
                                "span",
                                Po,
                                (0, l.zw)(o.selected_service.CREATE_DATE),
                                1
                              ),
                              Ro,
                              (0, i._)(
                                "span",
                                Fo,
                                (0, l.zw)(o.selected_service.TITLE),
                                1
                              ),
                            ]),
                          ]),
                        ]),
                      ]),
                      (0, i._)("div", qo, [
                        (0, i._)("div", zo, [
                          (0, i._)("p", Jo, [
                            Ho,
                            (0, i._)(
                              "span",
                              Ko,
                              (0, l.zw)(o.selected_service.STUDENT_NAME),
                              1
                            ),
                          ]),
                          (0, i._)("p", Wo, [
                            Vo,
                            (0, i._)(
                              "span",
                              Yo,
                              (0, l.zw)(o.selected_service.DESCRIPTION),
                              1
                            ),
                          ]),
                          (0, i._)("p", $o, [
                            Go,
                            (0, i._)(
                              "span",
                              Qo,
                              (0, l.zw)(o.selected_service.TITLE),
                              1
                            ),
                          ]),
                          Zo,
                          (0, i._)(
                            "div",
                            {
                              class: "detailContent",
                              innerHTML: o.selected_service.CONTENT,
                            },
                            null,
                            8,
                            Xo
                          ),
                          (0, i._)("div", en, [
                            (0, i._)(
                              "p",
                              tn,
                              " 客服人員 " +
                                (0, l.zw)(
                                  n.dateFormat(o.selected_service.RE_DATE)
                                ),
                              1
                            ),
                            (0, i._)(
                              "p",
                              sn,
                              (0, l.zw)(o.selected_service.RE_CONTENT),
                              1
                            ),
                          ]),
                        ]),
                      ]),
                      an,
                    ]),
                  ]),
                ]),
                ln,
              ]),
            ])
          );
        }
        const nn = s(19755),
          cn = {
            data() {
              return {
                c_jwt: this.jwt,
                service_list: [],
                selected_service: {},
              };
            },
            async mounted() {
              this.getQAList(),
                nn("#qsBTN").on("click", function () {
                  nn("#qsList").stop().slideToggle(200),
                    nn("#qsList").scrollTop(0),
                    rn(),
                    dn();
                });
            },
            computed: {
              service_list_c() {
                let e = this.service_list;
                return (
                  e.forEach((e) => {
                    e.CONTENT_C = e.CONTENT.replace(/<[^>]+>/g, "");
                  }),
                  e
                );
              },
            },
            props: { jwt: { type: String, require: !0 } },
            methods: {
              async getQAList() {
                const e = {
                  method: "get",
                  url: "https://www.tkbgo.com.tw/api/cservice/getCSRecordList",
                  headers: { "x-access-token": this.jwt },
                };
                try {
                  const t = await Y(e, this),
                    s = await t.data,
                    { data: a } = s;
                  console.log(s), (this.service_list = a);
                } catch (t) {
                  console.log(t);
                }
              },
              dateFormat(e) {
                let t = new Date(e);
                const s = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
                let a =
                  t.getFullYear() + "-" + s[t.getMonth()] + "-" + t.getDate();
                return a;
              },
              select_service(e) {
                this.selected_service = this.service_list[e];
              },
              async send_QA() {
                console.log("send_QA");
                var e = "課程名稱：" + nn("#courseName").val() + "<br>",
                  t = "觀看雲端方式：" + nn("#howToSee").val() + "<br>",
                  s = "網路連線速度：" + nn("#networkSpeed").val() + "<br>",
                  a = "連線方式：" + nn("#connectBy").val() + "<br>",
                  l = "退換貨原因：" + nn("#returnReason").val() + "<br>",
                  i = "問題內容：" + nn("#content").val() + "<br>",
                  o = e + t + s + a + l + i;
                const n = {
                  method: "get",
                  url: "https://www.tkbgo.com.tw/api/cservice/sendQuestion",
                  headers: { "x-access-token": this.jwt },
                  params: {
                    title: nn("#qs_tittle").val(),
                    s_type: nn("#qsList li.active")[0].dataset.value,
                    content: o,
                  },
                };
                try {
                  const e = await Y(n, this),
                    t = await e.data,
                    { data: s } = t;
                  console.log(s),
                    1 == s.code &&
                      (this.getQAList(),
                      nn(".question").hide(),
                      this.$emit("callWarn", "感謝提問"));
                } catch (c) {
                  this.$emit("callWarn", "提問失敗"), console.log(c);
                }
              },
            },
          };
        function rn() {
          nn("#qsList")
            .find("li")
            .on("click", function () {
              let e = nn(this),
                t = e.data("value");
              nn("#qsBTN").html(e.text()),
                nn("#qsBTN").attr("data-qs", t),
                e.addClass("active").siblings().removeClass("active"),
                nn("#qsList").slideUp(200),
                mn(e.data("value")),
                nn("#qsForm").find("input").val(""),
                nn("#qsForm").find("textarea").val("");
            });
        }
        function dn() {
          nn("body").on("click", (e) => {
            "qsBTN" !== e.target.id && nn("#qsList").slideUp(200);
          });
        }
        function mn(e) {
          1 == e || 2 == e || 3 == e || 4 == e || 5 == e
            ? (nn(".question").hide(), nn(".buy").show())
            : 6 == e || 7 == e || 8 == e || 9 == e || 10 == e
            ? (nn(".question").hide(), nn(".orders").show())
            : 11 == e || 12 == e || 13 == e
            ? (nn(".question").hide(), nn(".course").show())
            : (14 != e && 15 != e) ||
              (nn(".question").hide(), nn(".return").show());
        }
        const hn = (0, Q.Z)(cn, [["render", on]]),
          un = hn,
          gn = (0, i.uE)(
            '<div class="chapter rounded-3 overflow-hidden calendar" style="background-color:#b1b098;"><div id="carouselGuidedIndicators" class="carousel slide" data-bs-ride="carousel"><div id="closeHelpBTN"><i class="fas fa-times"></i></div><div class="carousel-inner h-100"><div class="carousel-item h-100 active"><img src="img/Guided-1.svg" class="d-block w-100 h-100" alt="讀書計畫導覽"></div><div class="carousel-item h-100"><img src="img/Guided-2.svg" class="d-block w-100 h-100" alt="讀書計畫導覽"></div><div class="carousel-item h-100"><img src="img/Guided-3.svg" class="d-block w-100 h-100" alt="讀書計畫導覽"></div><div class="carousel-item h-100"><img src="img/Guided-4.svg" class="d-block w-100 h-100" alt="讀書計畫導覽"></div></div><button class="carousel-control-next" type="button" data-bs-target="#carouselGuidedIndicators" data-bs-slide="next"><span class="visually-hidden">Next</span></button></div></div>',
            1
          ),
          pn = {
            class: "chapter bg-success rounded-3 overflow-hidden calendar",
          },
          _n = { class: "all-content h-100 d-flex align-items-center" },
          bn = (0, i._)(
            "button",
            {
              type: "button",
              class: "help",
              "data-bs-ride": "carousel",
              id: "openHelpBTN",
            },
            [(0, i._)("i", { class: "fas fa-question-circle" })],
            -1
          ),
          vn = { class: "container" },
          wn = { id: "external-events" },
          fn = (0, i._)(
            "p",
            { class: "menu-header myCourse" },
            [
              (0, i._)("strong", { class: "myCourse" }, [
                (0, i._)("img", {
                  src: "img/icon-course.svg",
                  alt: "我的課程",
                  style: { width: "22px" },
                }),
                (0, i.Uk)(" 課程總覽"),
              ]),
            ],
            -1
          ),
          xn = {
            class:
              "menu-box page-scroll-cal cal-list-h thin-scrollbar cal-scrollbar",
          },
          yn = { class: "menu-slider" },
          kn = { class: "menu" },
          En = ["onClick"],
          Tn = { class: "fc-event-main", for: "menu-3" },
          In = ["onClick"],
          Nn = { class: "fc-event-main", for: "menu-3" },
          Cn = ["onClick"],
          Ln = { class: "fc-event-main", for: "menu-3" },
          jn = (0, i._)(
            "input",
            {
              type: "checkbox",
              id: "menu-3",
              name: "menu-3",
              class: "menu-checkbox",
            },
            null,
            -1
          ),
          Sn = { class: "menu" },
          Mn = (0, i._)(
            "p",
            { class: "menu-header myChapter" },
            [
              (0, i._)("strong", { class: "myChapter" }, [
                (0, i._)("img", {
                  src: "img/icon-chapter.svg",
                  alt: "我的章節",
                  style: { width: "27px" },
                }),
                (0, i.Uk)(" 章節總覽"),
              ]),
            ],
            -1
          ),
          Dn = { class: "d-flex align-items-center" },
          Bn = (0, i._)(
            "label",
            { class: "fc-event-btn", for: "menu-3" },
            [
              (0, i._)("i", {
                class: "far fa-arrow-alt-circle-left text-success",
              }),
            ],
            -1
          ),
          On = {
            class: "fc-event-course",
            "data-bs-toggle": "modal",
            "data-bs-target": "#delalltimeModal",
          },
          An = (0, i._)(
            "i",
            { class: "fas fa-minus-circle text-success ms-2" },
            null,
            -1
          ),
          Un = {
            class: "page-scroll-cal cal-list-h thin-scrollbar cal-scrollbar",
          },
          Pn = { class: "chapter-list m-2" },
          Rn = [
            "data-material_id",
            "data-D_NAME",
            "data-SUBJECT_NAME",
            "data-final_token",
            "data-time",
            "data-sort",
          ],
          Fn = (0, i._)(
            "button",
            {
              type: "button",
              class:
                "btn btn-primary text-white title text-nowrap rounded-pill del-all-timeBTN px-lg-4 px-2",
              "data-bs-toggle": "modal",
              "data-bs-target": "#addalltimeModal",
            },
            " 自動排課 ",
            -1
          ),
          qn = { class: "calendar-w" },
          zn = (0, i._)("div", null, null, -1),
          Jn = (0, i._)(
            "div",
            {
              class: "moreDot text-center text-primary",
              style: { "font-size": "60px" },
            },
            " ... ",
            -1
          ),
          Hn = {
            class: "modal fade",
            id: "editModal",
            tabindex: "-1",
            "aria-labelledby": "exampleModalLabel",
            "aria-hidden": "true",
          },
          Kn = { class: "modal-dialog modal-dialog-centered" },
          Wn = { class: "modal-content rounded-3 bg-secondary" },
          Vn = { class: "table-wrap my-3" },
          Yn = { class: "title mb-2" },
          $n = { class: "mb-2" },
          Gn = (0, i._)(
            "th",
            { class: "" },
            [
              (0, i._)(
                "span",
                { class: "text-nowrap px-4 py-2 bg-white rounded-pill" },
                "課程"
              ),
            ],
            -1
          ),
          Qn = { class: "text-success text-start" },
          Zn = { class: "mb-2" },
          Xn = (0, i._)(
            "th",
            { class: "" },
            [
              (0, i._)(
                "span",
                { class: "text-nowrap px-4 py-2 bg-white rounded-pill" },
                "日程"
              ),
            ],
            -1
          ),
          ec = { class: "text-success text-start" },
          tc = (0, i._)(
            "div",
            { class: "d-flex justify-content-center mb-4" },
            [
              (0, i._)(
                "button",
                {
                  type: "button",
                  id: "watchCourseButton",
                  class:
                    "btn btn-warning title text-white rounded-pill del-all-timeBTN py-2 px-5 me-3",
                },
                " 觀看課程 "
              ),
              (0, i._)(
                "button",
                {
                  type: "button",
                  "data-bs-target": "#editModal",
                  class:
                    "btn btn-info title text-white rounded-pill del-all-timeBTN py-2 px-5",
                },
                " 刪除行程 "
              ),
            ],
            -1
          ),
          sc = {
            class: "modal fade",
            id: "delalltimeModal",
            tabindex: "-1",
            "aria-labelledby": "exampleModalLabel",
            "aria-hidden": "true",
          },
          ac = { class: "modal-dialog modal-dialog-centered" },
          lc = { class: "modal-content rounded-3" },
          ic = { class: "course-name title mt-4 ms-5" },
          oc = (0, i._)(
            "img",
            {
              src: "img/icon-time-B.svg",
              alt: "時間圖示",
              style: { width: "4%", "min-width": "23px" },
              class: "me-1",
            },
            null,
            -1
          ),
          nc = { id: "total_times", class: "fw-bold text-primary" },
          cc = { class: "table-wrap my-3" },
          rc = { class: "title" },
          dc = { class: "mb-2" },
          mc = (0, i._)(
            "th",
            { class: "c-alltime-L text-white" },
            [(0, i._)("span", { class: "" }, "課程影片總時數")],
            -1
          ),
          hc = { class: "c-alltime-R text-info" },
          uc = { id: "usable_times" },
          gc = { class: "mb-2" },
          pc = (0, i._)(
            "th",
            { class: "c-alltime-L text-white" },
            [(0, i._)("span", { class: "text-nowrap" }, "尚未觀看時數")],
            -1
          ),
          _c = { class: "c-alltime-R text-info" },
          bc = { class: "mb-2" },
          vc = (0, i._)(
            "th",
            { class: "c-alltime-L text-white" },
            [(0, i._)("span", { class: "text-nowrap" }, "已排定時數")],
            -1
          ),
          wc = { class: "c-alltime-R text-info" },
          fc = { class: "course-delete title mt-2" },
          xc = (0, i.uE)(
            '<i class="fas fa-trash text-primary ms-5"></i><span id="total_times" class="fw-bold text-primary">刪除課表</span><div class="number__choose__box d-flex mt-3 mb-5 ms-5"><div>自</div><input id="del_timepicker_start" class="number__choose__texter texter hasDatepicker rounded-pill"><div class="px-1">至</div><input id="del_timepicker_end" class="number__choose__texter texter hasDatepicker rounded-pill"><div>日</div></div>',
            3
          ),
          yc = { class: "d-flex justify-content-center mb-4" },
          kc = {
            class: "modal fade",
            id: "addalltimeModal",
            tabindex: "-1",
            "aria-labelledby": "exampleModalLabel",
            "aria-hidden": "true",
          },
          Ec = { class: "modal-dialog modal-dialog-centered" },
          Tc = { class: "modal-content rounded-3" },
          Ic = { class: "course-name title mt-4 ms-5" },
          Nc = (0, i._)(
            "img",
            {
              src: "img/icon-time-B.svg",
              alt: "時間圖示",
              style: { width: "4%", "min-width": "23px" },
              class: "me-1",
            },
            null,
            -1
          ),
          Cc = { id: "total_times", class: "fw-bold text-primary" },
          Lc = { class: "table-wrap my-3" },
          jc = { class: "title mb-4" },
          Sc = { class: "mb-2" },
          Mc = (0, i._)(
            "th",
            { class: "c-alltime-L text-white" },
            [(0, i._)("span", { class: "text-nowrap" }, "尚未觀看時數")],
            -1
          ),
          Dc = { class: "c-alltime-R text-info" },
          Bc = { class: "mb-2" },
          Oc = (0, i._)(
            "th",
            { class: "c-alltime-L text-white" },
            [(0, i._)("span", { class: "text-nowrap" }, "已排定時數")],
            -1
          ),
          Ac = { class: "c-alltime-R text-info" },
          Uc = { class: "course-add title" },
          Pc = (0, i.uE)(
            '<img src="img/library_add.svg" alt="增加課表" style="width:28px;" class="ms-5"><span id="total_times" class="fw-bold text-primary">增加課表</span><div class="num_info_middle"><div class="num_select title" name="data-filter"><div class="num-button" id="numBTN" data-filter=""> 每日堂數 </div><ul class="num_list scrollbar-chose" id="numList"><li data-value="1">1</li><li data-value="2">2</li><li data-value="3">3</li><li data-value="4">4</li><li data-value="5">5</li><li data-value="6">6</li><li data-value="7">7</li><li data-value="8">8</li><li data-value="9">9</li><li data-value="10">10</li></ul></div></div><div class="number__choose__box d-flex mt-3 mb-5 ms-5"><div>自</div><input id="add_timepicker_start" class="number__choose__texter texter hasDatepicker rounded-pill" name="datepicker"><div class="px-1">至</div><input id="add_timepicker_end" class="number__choose__texter texter hasDatepicker rounded-pill" name="datepicker"><div>日</div></div><div class="weekCheckbox d-flex justify-content-center mb-5"><div class="weekCheckbox-p"><div class="d-inline me-3"><label for="day-1">週一 <input id="day-1" type="checkbox" name="week_day" value="2"><span></span></label></div><div class="d-inline me-3"><label for="day-2">週二 <input id="day-2" type="checkbox" name="week_day" value="3"><span></span></label></div><div class="d-inline me-3"><label for="day-3">週三 <input id="day-3" type="checkbox" name="week_day" value="4"><span></span></label></div><div class="d-inline me-5"><label for="day-4">週四 <input id="day-4" type="checkbox" name="week_day" value="5"><span></span></label></div><br><div class="d-inline me-3"><label for="day-5">週五 <input id="day-5" type="checkbox" name="week_day" value="6"><span></span></label></div><div class="d-inline me-3"><label for="day-6">週六 <input id="day-6" type="checkbox" name="week_day" value="7"><span></span></label></div><div class="d-inline me-3"><label for="day-7">週日 <input id="day-7" type="checkbox" name="week_day" value="1"><span></span></label></div></div></div>',
            5
          ),
          Rc = { class: "d-flex justify-content-center mb-4" };
        function Fc(e, t, s, a, o, n) {
          const c = (0, i.up)("vue-loaders"),
            r = (0, i.up)("FullCalendar");
          return (
            (0, i.wg)(),
            (0, i.iD)("main", null, [
              gn,
              (0, i._)("div", pn, [
                (0, i.Wm)(c, {
                  name: "ball-scale-ripple-multiple",
                  color: "#176FA7",
                  scal: "4.0",
                  style: {
                    width: "100%",
                    "justify-content": "center",
                    height: "100%",
                    display: "flex",
                    "align-content": "center",
                    "align-items": "center",
                    "z-index": "99",
                    "background-color": "#fff",
                  },
                }),
                (0, i._)("div", _n, [
                  bn,
                  (0, i._)("div", vn, [
                    (0, i._)("div", wn, [
                      fn,
                      (0, i._)("div", xn, [
                        (0, i._)("div", yn, [
                          (0, i._)("div", kn, [
                            (0, i._)("ul", null, [
                              ((0, i.wg)(!0),
                              (0, i.iD)(
                                i.HY,
                                null,
                                (0, i.Ko)(
                                  o.fList,
                                  (e) => (
                                    (0, i.wg)(),
                                    (0, i.iD)(
                                      i.HY,
                                      { key: e.id },
                                      [
                                        ((0, i.wg)(!0),
                                        (0, i.iD)(
                                          i.HY,
                                          null,
                                          (0, i.Ko)(
                                            e.cList,
                                            (e) => (
                                              (0, i.wg)(),
                                              (0, i.iD)(
                                                "li",
                                                {
                                                  key: e.id,
                                                  onClick: (t) =>
                                                    n.select_course(e),
                                                },
                                                [
                                                  (0, i._)("label", Tn, [
                                                    (0, i._)(
                                                      "span",
                                                      null,
                                                      (0, l.zw)(e.NAME),
                                                      1
                                                    ),
                                                  ]),
                                                ],
                                                8,
                                                En
                                              )
                                            )
                                          ),
                                          128
                                        )),
                                      ],
                                      64
                                    )
                                  )
                                ),
                                128
                              )),
                              ((0, i.wg)(!0),
                              (0, i.iD)(
                                i.HY,
                                null,
                                (0, i.Ko)(
                                  o.tList,
                                  (e) => (
                                    (0, i.wg)(),
                                    (0, i.iD)(
                                      "li",
                                      {
                                        key: e.id,
                                        onClick: (t) => n.select_course(e),
                                      },
                                      [
                                        (0, i._)("label", Nn, [
                                          (0, i._)(
                                            "span",
                                            null,
                                            (0, l.zw)(e.CHINESE_NAME),
                                            1
                                          ),
                                        ]),
                                      ],
                                      8,
                                      In
                                    )
                                  )
                                ),
                                128
                              )),
                              ((0, i.wg)(!0),
                              (0, i.iD)(
                                i.HY,
                                null,
                                (0, i.Ko)(
                                  o.sList,
                                  (e) => (
                                    (0, i.wg)(),
                                    (0, i.iD)(
                                      "li",
                                      {
                                        key: e.id,
                                        onClick: (t) => n.select_course(e),
                                      },
                                      [
                                        (0, i._)("label", Ln, [
                                          (0, i._)(
                                            "span",
                                            null,
                                            (0, l.zw)(e.CHINESE_NAME),
                                            1
                                          ),
                                        ]),
                                      ],
                                      8,
                                      Cn
                                    )
                                  )
                                ),
                                128
                              )),
                              jn,
                              (0, i._)("div", Sn, [
                                Mn,
                                (0, i._)("div", Dn, [
                                  Bn,
                                  (0, i._)("label", On, [
                                    (0, i._)(
                                      "span",
                                      null,
                                      (0, l.zw)(o.selected_course.NAME),
                                      1
                                    ),
                                    An,
                                  ]),
                                ]),
                                (0, i._)("div", Un, [
                                  (0, i._)("ul", Pn, [
                                    ((0, i.wg)(!0),
                                    (0, i.iD)(
                                      i.HY,
                                      null,
                                      (0, i.Ko)(
                                        o.selected_course.material_list,
                                        (e) => (
                                          (0, i.wg)(),
                                          (0, i.iD)(
                                            "li",
                                            {
                                              key: e.MATERIAL_ID,
                                              class:
                                                "fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event",
                                              "data-material_id": e.MATERIAL_ID,
                                              "data-D_NAME": e.D_NAME,
                                              "data-SUBJECT_NAME":
                                                o.selected_course.NAME,
                                              "data-final_token": e.FINAL_TOKEN,
                                              "data-time": e.TIME,
                                              "data-sort": e.SORT,
                                            },
                                            (0, l.zw)(e.D_NAME),
                                            9,
                                            Rn
                                          )
                                        )
                                      ),
                                      128
                                    )),
                                  ]),
                                ]),
                                Fn,
                              ]),
                            ]),
                          ]),
                        ]),
                      ]),
                    ]),
                    (0, i._)("div", qn, [
                      (0, i.Wm)(
                        r,
                        {
                          options: o.calendarOptions,
                          id: "calendar",
                          ref: "calendar",
                        },
                        null,
                        8,
                        ["options"]
                      ),
                      zn,
                      Jn,
                    ]),
                  ]),
                ]),
                (0, i._)("div", Hn, [
                  (0, i._)("div", Kn, [
                    (0, i._)("div", Wn, [
                      (0, i._)("div", Vn, [
                        (0, i._)("table", Yn, [
                          (0, i._)("tbody", null, [
                            (0, i._)("tr", $n, [
                              Gn,
                              (0, i._)(
                                "td",
                                Qn,
                                (0, l.zw)(
                                  o.selected_chapter.SUBJECT_NAME +
                                    "-" +
                                    o.selected_chapter.D_NAME
                                ),
                                1
                              ),
                            ]),
                            (0, i._)("tr", Zn, [
                              Xn,
                              (0, i._)(
                                "td",
                                ec,
                                (0, l.zw)(o.selected_chapter.STUDY_DATE),
                                1
                              ),
                            ]),
                          ]),
                        ]),
                      ]),
                      tc,
                    ]),
                  ]),
                ]),
                (0, i._)("div", sc, [
                  (0, i._)("div", ac, [
                    (0, i._)("div", lc, [
                      (0, i._)("div", ic, [
                        oc,
                        (0, i._)(
                          "span",
                          nc,
                          (0, l.zw)(o.selected_course.NAME),
                          1
                        ),
                      ]),
                      (0, i._)("div", cc, [
                        (0, i._)("table", rc, [
                          (0, i._)("tbody", null, [
                            (0, i._)("tr", dc, [
                              mc,
                              (0, i._)("td", hc, [
                                (0, i._)(
                                  "span",
                                  uc,
                                  (0, l.zw)(
                                    n.formatTime(
                                      o.selected_course.course_time,
                                      null
                                    )
                                  ),
                                  1
                                ),
                              ]),
                            ]),
                            (0, i._)("tr", gc, [
                              pc,
                              (0, i._)(
                                "td",
                                _c,
                                (0, l.zw)(
                                  n.formatTime(o.selected_course.TIMES, null)
                                ),
                                1
                              ),
                            ]),
                            (0, i._)("tr", bc, [
                              vc,
                              (0, i._)(
                                "td",
                                wc,
                                (0, l.zw)(
                                  n.formatTime(
                                    o.selected_course.scheduled_time,
                                    null
                                  )
                                ),
                                1
                              ),
                            ]),
                          ]),
                        ]),
                      ]),
                      (0, i._)("div", fc, [
                        xc,
                        (0, i._)("div", yc, [
                          (0, i._)(
                            "button",
                            {
                              type: "button",
                              class:
                                "btn btn-info text-white title rounded-pill del-all-timeBTN BTN-sh",
                              "data-bs-toggle": "modal",
                              "data-bs-target": "#delalltimeModal",
                              onClick:
                                t[0] ||
                                (t[0] = (...e) =>
                                  n.deleteAllEvent && n.deleteAllEvent(...e)),
                            },
                            " 刪除全行程 "
                          ),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                (0, i._)("div", kc, [
                  (0, i._)("div", Ec, [
                    (0, i._)("div", Tc, [
                      (0, i._)("div", Ic, [
                        Nc,
                        (0, i._)(
                          "span",
                          Cc,
                          (0, l.zw)(o.selected_course.NAME),
                          1
                        ),
                      ]),
                      (0, i._)("div", Lc, [
                        (0, i._)("table", jc, [
                          (0, i._)("tbody", null, [
                            (0, i._)("tr", Sc, [
                              Mc,
                              (0, i._)(
                                "td",
                                Dc,
                                (0, l.zw)(
                                  n.formatTime(o.selected_course.TIMES, null)
                                ),
                                1
                              ),
                            ]),
                            (0, i._)("tr", Bc, [
                              Oc,
                              (0, i._)(
                                "td",
                                Ac,
                                (0, l.zw)(
                                  n.formatTime(
                                    o.selected_course.scheduled_time,
                                    null
                                  )
                                ),
                                1
                              ),
                            ]),
                          ]),
                        ]),
                      ]),
                      (0, i._)("div", Uc, [
                        Pc,
                        (0, i._)("div", Rc, [
                          (0, i._)(
                            "button",
                            {
                              type: "button",
                              class:
                                "btn btn-warning title rounded-pill del-all-timeBTN BTN-sh",
                              "data-bs-toggle": "modal",
                              "data-bs-target": "#addalltimeModal",
                              onClick:
                                t[1] ||
                                (t[1] = (...e) =>
                                  n.addCalendarByAuto &&
                                  n.addCalendarByAuto(...e)),
                            },
                            " 自動排課 "
                          ),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
            ])
          );
        }
        s(87336), s(95098);
        var qc = s(70853),
          zc = s(38658),
          Jc = s(81996),
          Hc = s(46842);
        const Kc = ["日", "一", "二", "三", "四", "五", "六"];
        hl().datetimepicker.setLocale("zh-TW");
        const Wc = {
            data() {
              return {
                calendarOptions: {
                  fixedMirrorParent: document.body,
                  plugins: [zc.ZP, Jc.ZP, Hc.ZP],
                  initialView: "dayGridMonth",
                  locale: "zh-tw",
                  navLinks: !1,
                  events: [],
                  headerToolbar: {
                    center: "prevYear,prev,title,next,nextYear",
                    left: "dayGridMonth,timeGridWeek",
                    right: "today",
                  },
                  moreLinkContent: function (e) {
                    return "+" + e.num + "顯示更多";
                  },
                  buttonText: {
                    today: "今天",
                    month: "月",
                    week: "周",
                    day: "天",
                  },
                  aspectRatio: 2,
                  variable: !0,
                  editable: !0,
                  droppable: !0,
                  drop: this.dropHandler,
                  eventDrop: this.eventDrop,
                  eventReceive: this.eventReceive,
                  eventClick: this.eventClick,
                  dayHeaderContent: function (e) {
                    return Kc[e.date.getDay()];
                  },
                  dayCellContent: function (e) {
                    return e.date.getDate();
                  },
                  views: { timeGrid: { dayMaxEventRows: 9 } },
                  columnFormat: [
                    { month: "ddd", week: "ddd M/d", day: "dddd M/d" },
                  ],
                  moreLinkClick: this.moreLinkClick,
                  eventDurationEditable: !1,
                  dayMaxEventRows: !0,
                },
                courses: [],
                tList: [],
                fList: [],
                sList: [],
                selected_course: { material_list: [], scheduledChapters: [] },
                selected_chapter: {},
                tutorial_page: 0,
              };
            },
            components: { FullCalendar: qc.ZPm },
            props: { jwt: { type: String, require: !0 } },
            methods: {
              moreLinkClick() {
                let e = this.$refs.calendar.getApi();
                setTimeout(() => {
                  "dayGridMonth" === e.currentData.currentViewType &&
                    hl()(".fc-popover-body").css({
                      "max-height": "116px",
                      transition: ".5s",
                    });
                }, 50);
              },
              eventClick(e) {
                let t = e.event.title.replaceAll("\n", " ");
                var s = new la.u_(document.getElementById("editModal"), {
                  keyboard: !1,
                });
                s.show(),
                  (this.selected_course.F_SUBJECT_NO =
                    e.event.extendedProps.F_SUBJECT_NO),
                  (this.selected_course.SUBJECT_NO =
                    e.event.extendedProps.SUBJECT_NO),
                  (this.selected_course.VERSION_NO =
                    e.event.extendedProps.VERSION_NO),
                  (this.selected_chapter = e.event.extendedProps),
                  console.log(this.selected_chapter),
                  hl()("#watchCourseButton").on("click", () => {
                    this.watchCourse(s);
                  }),
                  hl()('button[data-bs-target="#editModal"]').one(
                    "click",
                    () => {
                      this.deleteEvent(t, e, s);
                    }
                  ),
                  console.log(
                    hl()('button[data-bs-target="#editModal"]').onclick
                  );
              },
              async deleteEvent(e, t, s) {
                console.log("刪除課程"),
                  console.log(e, t, s),
                  await this.delCalendarDetail(t),
                  console.log(
                    this.selected_course.ID,
                    t.event.extendedProps.TSM_ID
                  ),
                  this.selected_course.ID == t.event.extendedProps.TSM_ID &&
                    (this.selected_course.scheduledChapters.forEach((t, s) => {
                      e.indexOf(t.D_NAME) >= 0 &&
                        (this.selected_course.material_list.push(t),
                        this.selected_course.scheduledChapters.splice(s, 1));
                    }),
                    (this.selected_course.material_list =
                      this.selected_course.material_list.sort()),
                    (this.selected_course.material_list =
                      this.selected_course.material_list.sort(
                        (e, t) => e.SORT - t.SORT
                      ))),
                  t.event.remove(),
                  s.hide();
              },
              async deleteAllEvent() {
                if ((console.log("刪除任務"), confirm("確認刪除嗎"))) {
                  let e = this.$refs.calendar.getApi(),
                    t = e.getEvents();
                  console.log(this.calendarOptions.events);
                  for (let i = 0; t.length > i; i++) {
                    let e = t[i].extendedProps,
                      s = t[i].start;
                    if (this.selected_course.ID == e.TSM_ID) {
                      console.log(
                        "比對" + this.selected_course.ID + "vs" + e.TSM_ID
                      ),
                        console.log(s);
                      let a = JSON.parse(JSON.stringify(e));
                      (a.ID = a.MATERIAL_ID),
                        this.selected_course.material_list.push(a),
                        (this.selected_course.material_list =
                          this.selected_course.material_list.sort(
                            (e, t) => e.SORT - t.SORT
                          )),
                        t[i].remove();
                    }
                  }
                  const s = {
                      method: "get",
                      url: "https://www.tkbgo.com.tw/api/calendar/delCalendarByTsmId",
                      headers: { "x-access-token": this.jwt },
                      params: {
                        tsm_id: this.selected_course.ID,
                        end_date: hl()("#del_timepicker_end").val(),
                        start_date: hl()("#del_timepicker_start").val(),
                      },
                    },
                    a = await Y(s, this),
                    l = await a.data;
                  console.log(l), await this.getMyCalendar();
                }
              },
              async watchCourse(e) {
                console.log(this.selected_course);
                const t = {
                  method: "get",
                  url: "https://www.tkbgo.com.tw/api/course/getCourseDetail",
                  headers: { "x-access-token": this.jwt },
                  params: {
                    fSubjectNo: this.selected_chapter.F_SUBJECT_NO,
                    subjectNo: this.selected_chapter.SUBJECT_NO,
                    versionNo: this.selected_chapter.VERSION_NO,
                    id: this.selected_chapter.TSM_ID,
                  },
                };
                try {
                  const s = await Y(t, this),
                    a = await s.data;
                  switch (a.rtnCode) {
                    case "success":
                      (this.chapterList = a.data.chapterList),
                        (this.courseInfo = a.data.courseInfo),
                        e.hide(),
                        this.$emit("changePage", {
                          page: "video",
                          tvMaterialId: this.selected_chapter.MATERIAL_ID,
                          item: {
                            choose_subject: {
                              F_SUBJECT_NO: this.selected_chapter.F_SUBJECT_NO,
                              SUBJECT_NO: this.selected_chapter.SUBJECT_NO,
                              VERSION_NO: this.selected_chapter.VERSION_NO,
                              ID: this.selected_chapter.TSM_ID,
                            },
                            choose_material: this.selected_chapter.MATERIAL_ID,
                            chapterList: this.chapterList,
                            courseInfo: this.courseInfo,
                          },
                        });
                      break;
                    case "error":
                      e.hide(), this.$emit("callWarn", a.message);
                      break;
                  }
                } catch (s) {
                  console.log(s);
                }
              },
              eventReceive(e) {
                console.log("eventReceive"),
                  console.log("事件數:" + this.calendarOptions.events.length),
                  console.log(e),
                  this.addCalendarDetail(e);
              },
              dropHandler(e) {
                console.log("dropHandler"),
                  console.log("事件數:" + this.calendarOptions.events.length),
                  console.log(
                    "事件數:" + this.$refs.calendar.getApi().getEvents().length
                  ),
                  console.log(e);
                let t = this.selected_course.material_list.filter(
                  (t) => t.MATERIAL_ID == e.draggedEl.dataset.material_id
                );
                this.selected_course.scheduledChapters.push(t[0]),
                  console.log(this.selected_course.scheduledChapters),
                  (this.selected_course.material_list =
                    this.selected_course.material_list.filter(
                      (t) => t.MATERIAL_ID != e.draggedEl.dataset.material_id
                    ));
              },
              async getCourse() {
                console.log(this.jwt);
                const e = {
                  method: "get",
                  url: "https://www.tkbgo.com.tw/api/course/getMyCourse",
                  headers: { "x-access-token": this.jwt },
                };
                try {
                  const t = await Y(e, this),
                    s = await t.data,
                    { data: a } = s;
                  console.log(a),
                    (this.courses = a.tList.concat(a.fList).concat(a.sList)),
                    (this.tList = a.tList),
                    (this.fList = a.fList),
                    (this.sList = a.sList);
                } catch (t) {
                  401 == t.response.status && console.log("認證失敗"),
                    console.log(t.response.status);
                }
              },
              async select_course(e) {
                (this.selected_course.F_SUBJECT_NO = e.F_SUBJECT_NO),
                  (this.selected_course.SUBJECT_NO = e.SUBJECT_NO),
                  (this.selected_course.ID = e.ID),
                  (this.selected_course.NAME =
                    null != e.NAME ? e.NAME : e.CHINESE_NAME),
                  (this.selected_course.VERSION_NO = e.VERSION_NO),
                  (this.selected_course.TIMES = e.TIMES),
                  (this.selected_course.scheduled_time = 0),
                  (this.selected_course.course_time = 0);
                const t = {
                  method: "get",
                  url: "https://www.tkbgo.com.tw/api/calendar/getCalendarChapter",
                  headers: { "x-access-token": this.jwt },
                  params: { version_no: this.selected_course.VERSION_NO },
                };
                try {
                  const e = await Y(t, this),
                    s = await e.data;
                  await this.getCourseDetail(),
                    (this.selected_course.material_list = s.filter((e) => {
                      let t = !0;
                      return (
                        1 == e.SET_TYPE &&
                          (this.selected_course.scheduled_time += e.TIME),
                        (this.selected_course.course_time += e.TIME),
                        this.selected_course.scheduledChapters.forEach((s) => {
                          s.MATERIAL_ID != e.MATERIAL_ID || (t = !1);
                        }),
                        t
                      );
                    })),
                    console.log(this.selected_course.scheduledChapters),
                    console.log(s);
                } catch (s) {
                  console.log(s);
                }
                console.log(this.selected_course);
              },
              async getCourseDetail() {
                const e = {
                  method: "get",
                  url: "https://www.tkbgo.com.tw/api/course/getCourseDetail",
                  headers: { "x-access-token": this.jwt },
                  params: {
                    fSubjectNo: this.selected_course.F_SUBJECT_NO,
                    subjectNo: this.selected_course.SUBJECT_NO,
                    versionNo: this.selected_course.VERSION_NO,
                    id: this.selected_course.ID,
                  },
                };
                try {
                  const t = await Y(e, this),
                    s = await t.data;
                  switch (s.rtnCode) {
                    case "success":
                      console.log(s.data),
                        (this.eMaterial = s.data.eMaterial),
                        (this.chapterList = s.data.chapterList),
                        (this.courseInfo = s.data.courseInfo);
                      break;
                    case "error":
                      this.$emit("callWarn", s.message);
                      break;
                  }
                } catch (t) {
                  console.log(t);
                }
              },
              async getMyCalendar() {
                const e = {
                  method: "get",
                  url: "https://www.tkbgo.com.tw/api/calendar/getCalendarList",
                  headers: { "x-access-token": this.jwt },
                };
                try {
                  const t = await Y(e, this),
                    s = await t.data;
                  console.log("getMyCalendar資料:"),
                    console.log(s),
                    s.data.forEach((e) => {
                      (e.start = e.STUDY_DATE),
                        (e.title =
                          e.SUBJECT_NAME +
                          "\n" +
                          e.D_NAME +
                          "\n進度：" +
                          (null != e.FINAL_TOKEN
                            ? Math.floor(
                                (parseInt(e.FINAL_TOKEN) / parseInt(e.TIME)) *
                                  100
                              )
                            : 0) +
                          "%");
                    }),
                    (this.calendarOptions.events = s.data),
                    console.log("事件數:" + this.calendarOptions.events.length);
                  let a = this.$refs.calendar.getApi(),
                    l = a.getEvents();
                  console.log("日曆內部事件數:" + l.length),
                    (this.selected_course.scheduledChapters =
                      this.selected_course.scheduledChapters.concat(s.data));
                } catch (t) {
                  console.log(t);
                }
              },
              async delCalendarDetail(e) {
                console.log(e);
                const t = {
                  method: "get",
                  url: "https://www.tkbgo.com.tw/api/calendar/delCalendarDetail",
                  headers: { "x-access-token": this.jwt },
                  params: { calendar_id: e.event.extendedProps.ID },
                };
                try {
                  const e = await Y(t, this),
                    s = await e.data;
                  console.log(s);
                } catch (s) {
                  console.log(s);
                }
              },
              async addCalendarDetail(e) {
                console.log(e);
                let t =
                  e.event.start.getFullYear() +
                  "-" +
                  [
                    "01",
                    "02",
                    "03",
                    "04",
                    "05",
                    "06",
                    "07",
                    "08",
                    "09",
                    "10",
                    "11",
                    "12",
                  ][e.event.start.getMonth()] +
                  "-" +
                  (e.event.start.getDate() < 10
                    ? "0" + e.event.start.getDate()
                    : e.event.start.getDate());
                const s = {
                  method: "get",
                  url: "https://www.tkbgo.com.tw/api/calendar/setCalendarDetail",
                  headers: { "x-access-token": this.jwt },
                  params: {
                    s_date: t,
                    tsm_id: this.selected_course.ID,
                    f_subject_no: this.selected_course.F_SUBJECT_NO,
                    subject_no: this.selected_course.SUBJECT_NO,
                    material_id: e.event.extendedProps.material_id,
                  },
                };
                try {
                  const a = await Y(s, this),
                    l = await a.data;
                  e.event.setExtendedProp("STUDY_DATE", t),
                    e.event.setExtendedProp(
                      "F_SUBJECT_NO",
                      this.selected_course.F_SUBJECT_NO
                    ),
                    e.event.setExtendedProp(
                      "SUBJECT_NO",
                      this.selected_course.SUBJECT_NO
                    ),
                    e.event.setExtendedProp(
                      "VERSION_NO",
                      this.selected_course.VERSION_NO
                    ),
                    e.event.setExtendedProp("TSM_ID", this.selected_course.ID),
                    e.event.setExtendedProp(
                      "MATERIAL_ID",
                      e.event.extendedProps.material_id
                    ),
                    console.log(l);
                } catch (a) {
                  console.log(a);
                }
              },
              async addCalendarByAuto() {
                let e = [],
                  t = hl()('[name="week_day"]');
                for (let c = 0; t.length > c; c++)
                  t[c].checked &&
                    (console.log(t[c].value + "被選取"), e.push(t[c].value));
                let s = this.selected_course.F_SUBJECT_NO,
                  a = this.selected_course.SUBJECT_NO,
                  l = this.selected_course.VERSION_NO,
                  i = this.selected_course.ID;
                const o = {
                  method: "get",
                  url: "https://www.tkbgo.com.tw/api/calendar/addCalendarByAuto",
                  headers: { "x-access-token": this.jwt },
                  params: {
                    week_day: e.toString(),
                    start_date: hl()("#add_timepicker_start").val(),
                    end_date: hl()("#add_timepicker_end").val(),
                    f_subject_no: s,
                    subject_no: a,
                    version_no: l,
                    tsm_id: i,
                    num: document
                      .getElementById("numList")
                      .getElementsByClassName("active")[0].dataset.value,
                  },
                };
                try {
                  const e = await Y(o, this),
                    t = await e.data;
                  console.log(t.data);
                  for (let l = 0; t.data.length > l; l++)
                    this.selected_course.material_list =
                      this.selected_course.material_list.filter(
                        (e) => e.ID != t.data[l].MATERIAL_ID
                      );
                  await this.getMyCalendar();
                  let s = this.$refs.calendar.getApi(),
                    a = s.getEvents();
                  console.log("事件數:" + a.length);
                } catch (n) {
                  console.log(n);
                }
              },
              async eventDrop(e) {
                console.log("eventDrop");
                const t = {
                  method: "get",
                  url: "https://www.tkbgo.com.tw/api/calendar/delCalendarDetail",
                  headers: { "x-access-token": this.jwt },
                  params: { calendar_id: e.oldEvent._def.extendedProps.ID },
                };
                try {
                  const e = await Y(t, this),
                    s = await e.data;
                  console.log(s);
                } catch (l) {
                  console.log(l);
                }
                let s =
                  e.event.start.getFullYear() +
                  "-" +
                  [
                    "01",
                    "02",
                    "03",
                    "04",
                    "05",
                    "06",
                    "07",
                    "08",
                    "09",
                    "10",
                    "11",
                    "12",
                  ][e.event.start.getMonth()] +
                  "-" +
                  (e.event.start.getDate() < 10
                    ? "0" + e.event.start.getDate()
                    : e.event.start.getDate());
                const a = {
                  method: "get",
                  url: "https://www.tkbgo.com.tw/api/calendar/setCalendarDetail",
                  headers: { "x-access-token": this.jwt },
                  params: {
                    s_date: s,
                    tsm_id: e.oldEvent._def.extendedProps.TSM_ID,
                    f_subject_no: e.oldEvent._def.extendedProps.F_SUBJECT_NO,
                    subject_no: e.oldEvent._def.extendedProps.SUBJECT_NO,
                    material_id: e.oldEvent._def.extendedProps.MATERIAL_ID,
                  },
                };
                try {
                  const t = await Y(a, this),
                    s = await t.data;
                  console.log(s), e.event.setExtendedProp("ID", s.data);
                } catch (l) {
                  console.log(l);
                }
                console.log(e);
              },
              formatTime(e, t) {
                let s = Math.floor(e % 60),
                  a = Math.floor(e / 60) % 60,
                  l = Math.floor(e / 3600);
                return null != t
                  ? " " +
                      l +
                      t +
                      (a < 10 ? "0" + a : a) +
                      t +
                      (s < 10 ? "0" + s : s)
                  : " " + l + " 小時 " + a + " 分鐘";
              },
              tutorial_next() {
                if ((this.tutorial_page++, this.tutorial_page > 3))
                  return (
                    hl()("#carouselGuidedIndicators").fadeOut(400, function () {
                      setTimeout(() => {
                        hl()("#carouselGuidedIndicators").hide();
                      });
                    }),
                    localStorage.setItem("watch_tutorial", !0),
                    !1
                  );
              },
              tutorial_start() {
                hl()("#carouselGuidedIndicators").show(),
                  (this.tutorial_page = 0);
              },
            },
            unmounted() {
              hl()(".xdsoft_").remove();
            },
            async mounted() {
              (document.getElementsByClassName("vue-loaders")[0].hidden = !1),
                hl()("#add_timepicker_start").datetimepicker({
                  format: "Y-m-d",
                  onShow: function () {
                    this.setOptions({
                      maxDate:
                        !!hl()("#add_timepicker_end").val() &&
                        hl()("#add_timepicker_end").val(),
                    });
                  },
                  timepicker: !1,
                }),
                hl()("#add_timepicker_end").datetimepicker({
                  format: "Y-m-d",
                  onShow: function () {
                    this.setOptions({
                      minDate:
                        !!hl()("#add_timepicker_end").val() &&
                        hl()("#add_timepicker_start").val(),
                    });
                  },
                  timepicker: !1,
                }),
                hl()("#del_timepicker_start").datetimepicker({
                  format: "Y-m-d",
                  onShow: function () {
                    this.setOptions({
                      maxDate:
                        !!hl()("#add_timepicker_end").val() &&
                        hl()("#add_timepicker_end").val(),
                    });
                  },
                  timepicker: !1,
                }),
                hl()("#del_timepicker_end").datetimepicker({
                  format: "Y-m-d",
                  onShow: function () {
                    this.setOptions({
                      minDate:
                        !!hl()("#add_timepicker_end").val() &&
                        hl()("#add_timepicker_start").val(),
                    });
                  },
                  timepicker: !1,
                });
              var e = document.querySelector("#carouselGuidedIndicators");
              new la.lr(e, { interval: !1, touch: !1 }),
                hl()(".carousel-control-next").click(this.tutorial_next),
                null == localStorage.watch_tutorial
                  ? hl()("#carouselGuidedIndicators").show()
                  : hl()("#carouselGuidedIndicators").hide(),
                hl()("#openHelpBTN").click(this.tutorial_start),
                hl()("#closeHelpBTN").click(function () {
                  hl()("#carouselGuidedIndicators").hide();
                }),
                await this.getCourse(),
                await this.getMyCalendar();
              let t = this.$refs.calendar.getApi(),
                s = t.getEvents();
              console.log("日曆內部試件數:" + s.length);
              let a = document.getElementById("external-events");
              new Hc._l(a, {
                itemSelector: ".fc-event",
                eventData: function (e) {
                  return {
                    title:
                      hl()(".fc-event-course").text() +
                      "\n" +
                      e.innerText +
                      "\n進度：" +
                      (null != e.dataset.final_token
                        ? Math.floor(
                            (parseInt(e.dataset.final_token) /
                              parseInt(e.dataset.time)) *
                              100
                          )
                        : 0) +
                      "%",
                    resourceEditable: !1,
                    material_id: e.dataset.material_id,
                    D_NAME: e.dataset.d_name,
                    SUBJECT_NAME: e.dataset.subject_name,
                    SORT: e.dataset.sort,
                  };
                },
              });
              const l = {
                toggleList() {
                  hl()("#numBTN").on("click", () => {
                    hl()("#numList").stop().slideToggle(200),
                      hl()("#examList").scrollTop(0),
                      this.numItem(),
                      this.closeList();
                  });
                },
                numItem() {
                  hl()("#numList")
                    .find("li")
                    .on("click", function () {
                      let e = hl()(this),
                        t = e.data("value");
                      hl()("#numBTN").html(e.text()),
                        hl()("#numBTN").attr("data-exam", t),
                        e.addClass("active").siblings().removeClass("active"),
                        hl()("#numList").slideUp(200);
                    });
                },
                closeList() {
                  hl()("body").on("click", (e) => {
                    "numBTN" !== e.target.id && hl()("#numList").slideUp(200);
                  });
                },
                init() {
                  this.toggleList();
                },
              };
              l.init(),
                (document.getElementById("menu-3").checked = !1),
                (document.getElementsByClassName("vue-loaders")[0].hidden = !0);
            },
            beforeUnmount() {
              document.getElementById("menu-3").checked = !1;
            },
            watch: {
              selected_course: function () {
                document.getElementById("menu-3").checked = !1;
              },
            },
          },
          Vc = (0, Q.Z)(Wc, [["render", Fc]]),
          Yc = Vc,
          $c = {
            name: "frame-area",
            data() {
              return { page: "calendar-page", show_side: !0, item: {} };
            },
            components: {
              headBlock: gt,
              coursePage: Yt,
              courseMPage: Al,
              sideBlock: lt,
              chapterPage: da,
              videoPage: wl,
              videoMPage: Ei,
              newsPage: Pi,
              noticePage: Ki,
              servicePage: un,
              calendarPage: Yc,
            },
            props: { cjwt: { type: String, require: !0 } },
            methods: {
              changePage(e) {
                console.log(e.item),
                  (this.item = e.item || this.item),
                  "login" == e.page
                    ? this.$emit("changePage", { page: "login" })
                    : ((this.page = e.page + "-page"),
                      "video" === e.page
                        ? (this.show_side = !1)
                        : (this.show_side = !0));
              },
              reAuth(e) {
                this.$emit("reAuth", e);
              },
              callWarn(e) {
                this.$emit("callWarn", e);
              },
            },
          },
          Gc = (0, Q.Z)($c, [["render", Me]]),
          Qc = Gc,
          Zc = { class: "bg-white container-3xl" };
        function Xc(e, t, s, l, o, n) {
          const c = (0, i.up)("head-block"),
            r = (0, i.up)("side-block");
          return (
            (0, i.wg)(),
            (0, i.iD)("div", Zc, [
              (0, i.Wm)(
                c,
                {
                  page: o.page,
                  onChangePage: n.changePage,
                  onReAuth: n.reAuth,
                },
                null,
                8,
                ["page", "onChangePage", "onReAuth"]
              ),
              (0, i.wy)(
                (0, i.Wm)(
                  r,
                  { onChangePage: n.changePage, onReAuth: n.reAuth },
                  null,
                  8,
                  ["onChangePage", "onReAuth"]
                ),
                [[a.F8, o.show_side]]
              ),
              ((0, i.wg)(),
              (0, i.j4)(
                (0, i.LL)(o.page),
                {
                  jwt: s.cjwt,
                  item: o.item,
                  onChangePage: n.changePage,
                  onReAuth: n.reAuth,
                },
                null,
                8,
                ["jwt", "item", "onChangePage", "onReAuth"]
              )),
            ])
          );
        }
        const er = { class: "chapter bg-success rounded-3 pe-md-0" },
          tr = {
            class:
              "row page-scroll L-scrollbar course-h align-items-center pe-md-3 mx-auto",
          },
          sr = { class: "col-12 col-lg-5" },
          ar = { class: "row px-lg-3" },
          lr = {
            class:
              "col-12 course-info bg-primary text-white py-lg-0 py-2 px-sm-3 rounded-3",
          },
          ir = { class: "course-time title text-center mt-4" },
          or = { id: "total_times" },
          nr = (0, i._)("div", { class: "line mx-auto" }, null, -1),
          cr = { class: "table-wrap my-3" },
          rr = { class: "title mb-4" },
          dr = (0, i._)(
            "tr",
            null,
            [
              (0, i._)("th", null, [
                (0, i._)(
                  "span",
                  {
                    class:
                      "L-deadline rounded-pill bg-white text-primary text-nowrap",
                  },
                  "課程總時數"
                ),
              ]),
              (0, i._)("td", null, (0, l.zw)(0)),
            ],
            -1
          ),
          mr = (0, i._)(
            "th",
            null,
            [
              (0, i._)(
                "span",
                { class: "L-date rounded-pill bg-white text-primary" },
                "剩餘時數"
              ),
            ],
            -1
          ),
          hr = { id: "usable_times" },
          ur = { key: 0, class: "sm-text d-block" },
          gr = { align: "right", class: "tooltip-W" },
          pr = (0, i._)("i", { class: "far fa-calendar-check" }, null, -1),
          _r = [pr],
          br = (0, i._)(
            "th",
            null,
            [
              (0, i._)(
                "span",
                {
                  class:
                    "L-deadline rounded-pill bg-white text-primary text-nowrap",
                },
                "課程到期日"
              ),
            ],
            -1
          ),
          vr = { align: "right", class: "tooltip-W" },
          wr = (0, i._)(
            "i",
            { class: "fas fa-shopping-cart text-primary" },
            null,
            -1
          ),
          fr = [wr],
          xr = { class: "col-12 order-3 bg-light2 p-3 rounded-3 mt-4 exam" },
          yr = { class: "page-scroll scrollbar" },
          kr = { class: "block d-flex justify-content-center" },
          Er = { class: "exam_info" },
          Tr = { class: "exam_info_middle" },
          Ir = { class: "exam_select title", name: "data-filter" },
          Nr = (0, i._)(
            "div",
            { class: "exam-button", id: "examBTN", "data-filter": "" },
            " 請選擇 ",
            -1
          ),
          Cr = { class: "exam_list scrollbar-chose", id: "examList" },
          Lr = ["data-value", "onClick"],
          jr = { key: 0, class: "exam_info_date bg-white rounded-3 p-3 pt-4" },
          Sr = { class: "content text d-flex flex-direction-column" },
          Mr = { class: "d-flex justify-content-between" },
          Dr = (0, i.Uk)("報名時間"),
          Br = { class: "sign_time" },
          Or = { class: "d-flex justify-content-between" },
          Ar = (0, i.Uk)("考試時間"),
          Ur = { class: "exam_time" },
          Pr = { class: "d-flex justify-content-between" },
          Rr = (0, i.Uk)("招考人數"),
          Fr = { class: "amount" },
          qr = (0, i._)(
            "span",
            { class: "xs-text text-left d-inline-block mt-3" },
            "◎僅供參考,實際依簡章公告為主",
            -1
          ),
          zr = {
            class:
              "exam_info_bottom xl-title text-primary text-nowrap mt-xxl-3",
          },
          Jr = (0, i.Uk)(" 距離考試剩下 "),
          Hr = { class: "recip text-info" },
          Kr = (0, i.Uk)("天 "),
          Wr = { class: "progress text-center text" },
          Vr = (0, i._)("span", null, "目前進度", -1),
          Yr = { id: "percent" },
          $r = { class: "col-12 col-lg-7 video-list mt-4 mt-lg-0" },
          Gr = (0, i._)(
            "ul",
            { class: "nav nav-tabs title", id: "myTab", role: "tablist" },
            [
              (0, i._)("li", { class: "nav-item", role: "presentation" }, [
                (0, i._)(
                  "button",
                  {
                    class: "nav-link active",
                    id: "home-tab",
                    "data-bs-toggle": "tab",
                    "data-bs-target": "#videoList",
                    type: "button",
                    role: "tab",
                    "aria-controls": "home",
                    "aria-selected": "true",
                  },
                  [
                    (0, i._)("img", {
                      src: "img/icon-list.svg",
                      alt: "影片列表",
                      style: { width: "27px" },
                      class: "me-1",
                    }),
                    (0, i.Uk)(" 影片列表 "),
                  ]
                ),
              ]),
              (0, i._)("li", { class: "nav-item", role: "presentation" }, [
                (0, i._)(
                  "button",
                  {
                    class: "nav-link",
                    id: "profile-tab",
                    "data-bs-toggle": "tab",
                    "data-bs-target": "#download",
                    type: "button",
                    role: "tab",
                    "aria-controls": "profile",
                    "aria-selected": "false",
                  },
                  [
                    (0, i._)("img", {
                      src: "img/icon-download.svg",
                      alt: " 下載教材",
                      style: { width: "42px" },
                    }),
                    (0, i.Uk)(" 下載教材 "),
                  ]
                ),
              ]),
            ],
            -1
          ),
          Qr = { class: "tab-content bg-light rounded-3", id: "myTabContent" },
          Zr = {
            class: "tab-pane fade show active video-list-h",
            id: "videoList",
            role: "tabpanel",
            "aria-labelledby": "home-tab",
          },
          Xr = { class: "video-scroll-h page-scroll scrollbar text pe-1" },
          ed = ["onClick"],
          td = { class: "video-list-time ms-3" },
          sd = {
            class: "tab-pane fade video-list-h",
            id: "download",
            role: "tabpanel",
            "aria-labelledby": "profile-tab",
          },
          ad = { class: "video-scroll-h page-scroll scrollbar text pe-1" },
          ld = ["href"],
          id = (0, i.Uk)("教材1"),
          od = (0, i._)(
            "span",
            { class: "video-list-time ms-3 text-black-50" },
            null,
            -1
          ),
          nd = [id, od];
        function cd(e, t, s, a, o, n) {
          const c = (0, i.up)("vue-loaders");
          return (
            (0, i.wg)(),
            (0, i.iD)("main", null, [
              (0, i._)("div", er, [
                (0, i.Wm)(c, {
                  name: "ball-scale-ripple-multiple",
                  color: "#176FA7",
                  scal: "4.0",
                  style: {
                    width: "100%",
                    "justify-content": "center",
                    height: "100%",
                    display: "flex",
                    "align-content": "center",
                    "align-items": "center",
                    "z-index": "99",
                    "background-color": "#fff",
                  },
                }),
                (0, i._)("div", tr, [
                  (0, i._)("div", sr, [
                    (0, i._)("div", ar, [
                      (0, i._)("div", lr, [
                        (0, i._)("div", ir, [
                          (0, i._)(
                            "span",
                            or,
                            (0, l.zw)(o.courseInfo.TEACHER_NAME) +
                              " 老師 - " +
                              (0, l.zw)(o.courseInfo.SUBJECT_NAME),
                            1
                          ),
                          nr,
                        ]),
                        (0, i._)("div", cr, [
                          (0, i._)("table", rr, [
                            (0, i._)("tbody", null, [
                              dr,
                              (0, i._)("tr", null, [
                                mr,
                                (0, i._)("td", null, [
                                  (0, i._)(
                                    "span",
                                    hr,
                                    (0, l.zw)(
                                      n.formatTime(o.courseInfo.USABLE_TIMES)
                                    ),
                                    1
                                  ),
                                  o.courseInfo.GIFT_TIMES > 0
                                    ? ((0, i.wg)(),
                                      (0, i.iD)(
                                        "span",
                                        ur,
                                        "(時數使用完畢後再回補" +
                                          (0, l.zw)(
                                            n.formatTime(
                                              o.courseInfo.GIFT_TIMES
                                            )
                                          ) +
                                          ")",
                                        1
                                      ))
                                    : (0, i.kq)("", !0),
                                ]),
                                (0, i._)("td", gr, [
                                  (0, i._)(
                                    "button",
                                    {
                                      class:
                                        "btn btn-warning text-primary title rounded-pill",
                                      onClick:
                                        t[0] ||
                                        (t[0] = (...e) =>
                                          n.checkDiligent &&
                                          n.checkDiligent(...e)),
                                      "data-bs-toggle": "tooltip",
                                      "data-bs-placement": "top",
                                      title: "申請勤學",
                                    },
                                    _r
                                  ),
                                ]),
                              ]),
                              (0, i._)("tr", null, [
                                br,
                                (0, i._)(
                                  "td",
                                  null,
                                  (0, l.zw)(o.courseInfo.END_TIME),
                                  1
                                ),
                                (0, i._)("td", vr, [
                                  (0, i._)(
                                    "button",
                                    {
                                      class:
                                        "btn btn-warning text-primary text rounded-pill",
                                      "data-bs-toggle": "tooltip",
                                      "data-bs-placement": "top",
                                      title: "購買展延",
                                      onClick:
                                        t[1] ||
                                        (t[1] = (...e) =>
                                          n.openTkbtv && n.openTkbtv(...e)),
                                    },
                                    fr
                                  ),
                                ]),
                              ]),
                            ]),
                          ]),
                        ]),
                      ]),
                      (0, i._)("div", xr, [
                        (0, i._)("div", yr, [
                          (0, i._)("div", kr, [
                            (0, i._)("div", Er, [
                              (0, i._)("div", Tr, [
                                (0, i._)("div", Ir, [
                                  Nr,
                                  (0, i._)("ul", Cr, [
                                    ((0, i.wg)(!0),
                                    (0, i.iD)(
                                      i.HY,
                                      null,
                                      (0, i.Ko)(
                                        o.examInfo,
                                        (e, t) => (
                                          (0, i.wg)(),
                                          (0, i.iD)(
                                            "li",
                                            {
                                              key: e.TITLE,
                                              "data-value": t,
                                              onClick: (e) =>
                                                n.choseExamInfo(t),
                                            },
                                            (0, l.zw)(e.TITLE),
                                            9,
                                            Lr
                                          )
                                        )
                                      ),
                                      128
                                    )),
                                  ]),
                                ]),
                                "" != o.chosedExamInfo
                                  ? ((0, i.wg)(),
                                    (0, i.iD)("div", jr, [
                                      (0, i._)("div", Sr, [
                                        (0, i._)("span", Mr, [
                                          Dr,
                                          (0, i._)(
                                            "span",
                                            Br,
                                            (0, l.zw)(
                                              o.examInfo[o.chosedExamInfo]
                                                .SIGN_DATE_BEGIN
                                            ),
                                            1
                                          ),
                                        ]),
                                        (0, i._)("span", Or, [
                                          Ar,
                                          (0, i._)(
                                            "span",
                                            Ur,
                                            (0, l.zw)(
                                              o.examInfo[o.chosedExamInfo]
                                                .EXAM_DATE_BEGIN
                                            ),
                                            1
                                          ),
                                        ]),
                                        (0, i._)("span", Pr, [
                                          Rr,
                                          (0, i._)(
                                            "span",
                                            Fr,
                                            (0, l.zw)(
                                              null !=
                                                o.examInfo[o.chosedExamInfo]
                                                  .QUOTA
                                                ? o.examInfo[o.chosedExamInfo]
                                                    .QUOTA + "人"
                                                : "尚未公布"
                                            ),
                                            1
                                          ),
                                        ]),
                                      ]),
                                    ]))
                                  : (0, i.kq)("", !0),
                                qr,
                              ]),
                              (0, i._)("div", zr, [
                                Jr,
                                (0, i._)(
                                  "span",
                                  Hr,
                                  (0, l.zw)(n.last_days) + " ",
                                  1
                                ),
                                Kr,
                              ]),
                            ]),
                            (0, i._)("div", Wr, [
                              Vr,
                              (0, i._)("div", null, [
                                (0, i._)(
                                  "img",
                                  {
                                    src: "img/Trophy.png",
                                    id: "img_2",
                                    style: (0, l.j5)({
                                      backgroundImage:
                                        "linear-gradient( 0deg, #ffce00 0% " +
                                        n.watchPercent +
                                        "%,#EDF8FF " +
                                        n.watchPercent +
                                        "%)",
                                    }),
                                  },
                                  null,
                                  4
                                ),
                              ]),
                              (0, i._)(
                                "span",
                                Yr,
                                (0, l.zw)(n.watchPercent) + "%",
                                1
                              ),
                            ]),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  (0, i._)("div", $r, [
                    Gr,
                    (0, i._)("div", Qr, [
                      (0, i._)("div", Zr, [
                        (0, i._)("ul", Xr, [
                          ((0, i.wg)(!0),
                          (0, i.iD)(
                            i.HY,
                            null,
                            (0, i.Ko)(
                              o.chapterList,
                              (e) => (
                                (0, i.wg)(),
                                (0, i.iD)("li", { key: e.ID }, [
                                  (0, i._)(
                                    "a",
                                    {
                                      draggable: "false",
                                      onClick: (t) =>
                                        n.changePage("video", e.ID),
                                      class: "video-list-item",
                                      style: (0, l.j5)({
                                        backgroundImage:
                                          "linear-gradient(90deg, #bbe5ff 0% " +
                                          (e.FINAL_TOKEN / e.TIME) * 100 +
                                          "%,#EDF8FF " +
                                          (e.FINAL_TOKEN / e.TIME) * 100 +
                                          "%)",
                                      }),
                                    },
                                    [
                                      (0, i.Uk)(
                                        (0, l.zw)(e.NAME) +
                                          "(" +
                                          (0, l.zw)(n.formatTime(e.TIME)) +
                                          "）",
                                        1
                                      ),
                                      (0, i._)(
                                        "span",
                                        td,
                                        (0, l.zw)(n.formatTime(e.TIME, ":")),
                                        1
                                      ),
                                    ],
                                    12,
                                    ed
                                  ),
                                ])
                              )
                            ),
                            128
                          )),
                        ]),
                      ]),
                      (0, i._)("div", sd, [
                        (0, i._)("ul", ad, [
                          ((0, i.wg)(!0),
                          (0, i.iD)(
                            i.HY,
                            null,
                            (0, i.Ko)(
                              o.eMaterial,
                              (e) => (
                                (0, i.wg)(),
                                (0, i.iD)("li", { key: e }, [
                                  (0, i._)(
                                    "a",
                                    {
                                      draggable: "false",
                                      href: e.E_MATERIAL.replace(
                                        "tkbgo",
                                        "tkbtv"
                                      ),
                                      class: "video-list-item",
                                    },
                                    nd,
                                    8,
                                    ld
                                  ),
                                ])
                              )
                            ),
                            128
                          )),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
            ])
          );
        }
        const rd = s(19755),
          { shell: dd } = s(72298),
          md = {
            data() {
              return {
                chapterList: [],
                courseInfo: {},
                eMaterial: "",
                examInfo: [],
                chosedExamInfo: 0,
                n_item: {},
              };
            },
            methods: {
              changePage(e, t) {
                console.log(this.item),
                  this.$emit("changePage", {
                    page: e,
                    tvMaterialId: t,
                    item: {
                      choose_subject: this.item.choose_subject,
                      choose_material: t,
                      courseInfo: this.courseInfo,
                      chapterList: this.chapterList,
                    },
                  });
              },
              formatTime(e, t) {
                let s = Math.floor(e % 60),
                  a = Math.floor(e / 60) % 60,
                  l = Math.floor(e / 3600);
                return null != t
                  ? " " +
                      l +
                      t +
                      (a < 10 ? "0" + a : a) +
                      t +
                      (s < 10 ? "0" + s : s)
                  : " " + l + " 小時 " + a + " 分鐘";
              },
              choseExamInfo(e) {
                this.chosedExamInfo = e;
              },
              async checkDiligent() {
                const e = {
                  method: "get",
                  url: de + "/course/checkDiligent",
                  headers: { "x-access-token": this.jwt },
                  params: {
                    fSubjectNo:
                      this.item.choose_subject.F_SUBJECT_NO ||
                      this.item.fSubjectNo,
                    subjectNo:
                      this.item.choose_subject.SUBJECT_NO ||
                      this.item.subjectNo,
                    isApply: "N",
                  },
                };
                try {
                  const t = await Y(e, this),
                    s = await t.data;
                  console.log(s),
                    "OK" == s.rtnCode
                      ? "N" == s.data[0].O_STATUS
                        ? this.$emit("callWarn", s.message)
                        : this.applyDiligent()
                      : this.$emit("callWarn", "請聯繫客服");
                } catch (t) {
                  this.$emit("callWarn", "請聯繫客服"), console.log(t);
                }
              },
              async applyDiligent() {
                const e = {
                  method: "get",
                  url: de + "/course/checkDiligent",
                  headers: { "x-access-token": this.jwt },
                  params: {
                    fSubjectNo:
                      this.item.choose_subject.F_SUBJECT_NO ||
                      this.item.fSubjectNo,
                    subjectNo:
                      this.item.choose_subject.SUBJECT_NO ||
                      this.item.subjectNo,
                    isApply: "Y",
                  },
                };
                try {
                  const t = await Y(e, this),
                    s = await t.data;
                  console.log(s);
                } catch (t) {
                  console.log(t);
                }
              },
              openTkbtv() {
                dd.openExternal("https://www.tkbtv.com.tw");
              },
            },
            props: {
              jwt: { type: String, require: !0 },
              item: {
                type: Object,
                require: !0,
                default: function () {
                  return { courseInfo: { USABLE_TIMES: 0, GIFT_TIMES: 0 } };
                },
              },
            },
            computed: {
              changeTime() {
                let e =
                    null != this.item.choose_subject.TIMES
                      ? this.item.choose_subject.TIMES
                      : this.item.courseInfo.USABLE_TIMES +
                        this.item.courseInfo.GIFT_TIMES,
                  t = Math.floor(e / 60) % 60,
                  s = Math.floor(e / 3600);
                return " " + s + " 小時 " + t + " 分鐘";
              },
              watchPercent() {
                let e = 0,
                  t = 0;
                for (let s = 0; this.chapterList.length > s; s++)
                  (e += this.chapterList[s].TIME),
                    null != this.chapterList[s].FINAL_TOKEN &&
                      (t += this.chapterList[s].FINAL_TOKEN);
                return (
                  console.log(t),
                  console.log(e),
                  console.log(100 * Math.floor(t / e)),
                  Math.floor((100 * t) / e)
                );
              },
              last_days() {
                try {
                  let e = new Date(),
                    t = new Date(
                      this.examInfo[this.chosedExamInfo].EXAM_DATE_BEGIN
                    );
                  return t.getTime() - e.getTime() > 0
                    ? Math.floor((t.getTime() - e.getTime()) / 864e5)
                    : Math.floor(
                        (new Date(
                          e.getFullYear() +
                            1 +
                            "/" +
                            this.examInfo[this.chosedExamInfo].EXAM_DATE_BEGIN
                        ).getTime() -
                          e.getTime()) /
                          864e5
                      );
                } catch (e) {
                  return "";
                }
              },
            },
            watch: {
              chosedExamInfo: function (e, t) {
                console.log(e, t);
              },
              examInfo: function () {
                hd.init();
              },
            },
            async mounted() {
              document.getElementsByClassName("vue-loaders")[0].hidden = !1;
              var e = [].slice.call(
                document.querySelectorAll('[data-bs-toggle="tooltip"]')
              );
              e.map(function (e) {
                return new la.u(e);
              });
              const t = {
                  method: "get",
                  url: de + "/course/getExamInfo",
                  headers: { "x-access-token": this.jwt },
                  params: {
                    fSubjectNo: this.item.F_SUBJECT_NO,
                    subjectNo: this.item.SUBJECT_NO,
                    versionNo: this.item.VERSION_NO,
                    id: this.item.ID,
                  },
                },
                s = await Y(t),
                a = await s.data;
              console.log(a),
                (this.examInfo = a.data[0]),
                (this.chosedExamInfo = 0),
                console.log(this.item);
              const l = {
                method: "get",
                url: de + "/course/getMakeupChapter",
                headers: { "x-access-token": this.jwt },
                params: {
                  fSubjectNo:
                    this.item.choose_subject.F_SUBJECT_NO ||
                    this.item.fSubjectNo,
                  subjectNo:
                    this.item.choose_subject.SUBJECT_NO || this.item.subjectNo,
                  versionNo:
                    this.item.choose_subject.VERSION_NO || this.item.versionNo,
                  id: this.item.choose_subject.ID || this.courseInfo.ID,
                },
              };
              try {
                const e = await Y(l, this),
                  t = await e.data;
                console.log(t);
                try {
                  (this.eMaterial = t.data.eMaterial),
                    (this.chapterList = t.data.chapterList),
                    (this.courseInfo = t.data.courseInfo),
                    (document.getElementsByClassName("vue-loaders")[0].hidden =
                      !0);
                } catch (i) {
                  alert(t.message),
                    (document.getElementsByClassName("vue-loaders")[0].hidden =
                      !1),
                    this.changePage("course"),
                    (document.getElementsByClassName("vue-loaders")[0].hidden =
                      !1);
                }
              } catch (o) {
                console.log(o);
              }
            },
          },
          hd = {
            toggleList() {
              rd("#examBTN").on("click", () => {
                rd("#examList").stop().slideToggle(200),
                  rd("#examList").scrollTop(0),
                  this.examItem(),
                  this.closeList();
              });
            },
            examItem() {
              rd("#examList")
                .find("li")
                .on("click", function () {
                  let e = rd(this),
                    t = e.data("value");
                  rd("#examBTN").html(e.text()),
                    (this.chosedExamInfo = t),
                    rd("#examBTN").attr("data-exam", t),
                    e.addClass("active").siblings().removeClass("active"),
                    rd("#examList").slideUp(200);
                });
            },
            closeList() {
              rd("body").on("click", (e) => {
                "examBTN" !== e.target.id && rd("#examList").slideUp(200);
              });
            },
            init() {
              this.toggleList();
            },
          },
          ud = (0, Q.Z)(md, [["render", cd]]),
          gd = ud,
          pd = {
            data() {
              return { page: "course-page", show_side: !0, item: {} };
            },
            components: {
              headBlock: gt,
              coursePage: Al,
              sideBlock: lt,
              chapterPage: gd,
              videoPage: Ei,
              newsPage: Pi,
              noticePage: Ki,
              servicePage: un,
              calendarPage: Yc,
            },
            props: { cjwt: { type: String, require: !0 } },
            methods: {
              changePage(e) {
                console.log(e.item),
                  (this.item = e.item || this.item),
                  "login" == e.page
                    ? this.$emit("changePage", { page: "login" })
                    : ((this.page = e.page + "-page"),
                      "video" === e.page
                        ? (this.show_side = !1)
                        : (this.show_side = !0));
              },
              reAuth(e) {
                this.$emit("reAuth", e);
              },
            },
          },
          _d = (0, Q.Z)(pd, [["render", Xc]]),
          bd = _d,
          vd = s(19755),
          wd = {
            name: "App",
            components: { Login: je, Frame: Qc, FrameM: bd },
            data() {
              return { page: "login", jwt: "", warn_msg: "" };
            },
            methods: {
              changePage(e) {
                (this.jwt = e.jwt),
                  (this.page = e.page),
                  null != e.system && (this.system = e.system);
              },
              reAuth(e) {
                console.log("jwt" + e), (this.jwt = e);
              },
              callWarn(e) {
                console.log("callWarn", e),
                  (this.warn_msg = e),
                  vd(".alert").addClass("show"),
                  vd(".alert").addClass(e.class),
                  setTimeout(function () {
                    vd(".alert").removeClass("show");
                  }, 5e3);
              },
            },
            mounted() {},
          },
          fd = (0, Q.Z)(wd, [["render", d]]),
          xd = fd;
        var yd = s(14559);
        hl()(document).ready(function (e) {
          let t = e(".tabs a");
          t.on("click", function (s) {
            s.preventDefault(),
              t.removeClass("active"),
              e(this).addClass("active"),
              ("#signup-tab-content" != e(this).attr("href") &&
                "#scan-tab-content" != e(this).attr("href")) ||
                e('.tabs a[href$="#signup-tab-content"]').addClass("active");
            let a = e(this).attr("href");
            e('div[id$="tab-content"]').removeClass("active"),
              e(a).addClass("active");
          });
        });
        const kd = {
          access: !1,
          trigger() {
            hl()(".button-login").on("click", (e) => {
              hl()(e.currentTarget).addClass("active"),
                setTimeout(() => {
                  this.access
                    ? this.SkipNextPage()
                    : (hl()(".alert").addClass("show"),
                      setTimeout(function () {
                        hl()(".alert").removeClass("show");
                      }, 5e3),
                      hl()(".button-login").removeClass("active"),
                      hl()(".btn-close").on("click", () => {
                        this.closeAlert();
                      }),
                      (this.access = !0));
                }, 700);
            });
          },
          closeAlert() {
            hl()(".alert-login").removeClass("show");
          },
          SkipNextPage() {
            window.location.href = "calendar.html";
          },
          init() {
            this.trigger();
          },
        };
        kd.init(),
          hl()(document).ready(function () {
            hl()("#login").css("top", 0),
              hl()("#login").css("position", "absolute");
          }),
          hl()(function () {
            hl()("#allNews").on("click", function () {
              hl()(".collapse").removeClass("show");
            });
          });
        for (
          var Ed = document.getElementsByClassName("notice-inform"), Td = 0;
          Td < Ed.length;
          Td++
        )
          Ed[Td].addEventListener("click", function () {
            this.classList.add("active");
          });
        if (
          (hl()(".onread").on("click", () => {
            hl()(".notice-inform").addClass("active");
          }),
          hl()(".onread-spacing").click(function () {
            hl()(this).addClass("onread-actived");
          }),
          !sessionStorage.tkbtvJWT)
        ) {
          const e = new URL(window.location.href),
            t = e.searchParams.get("jwt");
          sessionStorage.tkbtvJWT = t;
        }
        function Id(e) {
          1 == e || 2 == e || 3 == e || 4 == e || 5 == e
            ? (hl()(".question").hide(), hl()(".buy").show())
            : 6 == e || 7 == e || 8 == e || 9 == e || 10 == e
            ? (hl()(".question").hide(), hl()(".orders").show())
            : 11 == e || 12 == e || 13 == e
            ? (hl()(".question").hide(), hl()(".course").show())
            : (14 != e && 15 != e) ||
              (hl()(".question").hide(), hl()(".return").show());
        }
        hl()("select").bind("submit", function () {
          return !1;
        });
        const Nd = {
          toggleList() {
            hl()("#qsBTN").on("click", () => {
              hl()("#qsList").stop().slideToggle(200),
                hl()("#qsList").scrollTop(0),
                this.qsItem(),
                this.closeList();
            });
          },
          qsItem() {
            hl()("#qsList")
              .find("li")
              .on("click", function () {
                let e = hl()(this),
                  t = e.data("value");
                hl()("#qsBTN").html(e.text()),
                  hl()("#qsBTN").attr("data-qs", t),
                  e.addClass("active").siblings().removeClass("active"),
                  hl()("#qsList").slideUp(200),
                  Id(e.data("value")),
                  hl()("#qsForm").find("input").val(""),
                  hl()("#qsForm").find("textarea").val("");
              });
          },
          closeList() {
            hl()("body").on("click", (e) => {
              "qsBTN" !== e.target.id && hl()("#qsList").slideUp(200);
            });
          },
          init() {
            this.toggleList();
          },
        };
        Nd.init();
        const Cd = {
          toggleList() {
            hl()("#examBTN").on("click", () => {
              hl()("#examList").stop().slideToggle(200),
                hl()("#examList").scrollTop(0),
                this.examItem(),
                this.closeList();
            });
          },
          examItem() {
            hl()("#examList")
              .find("li")
              .on("click", function () {
                let e = hl()(this),
                  t = e.data("value");
                hl()("#examBTN").html(e.text()),
                  hl()("#examBTN").attr("data-exam", t),
                  e.addClass("active").siblings().removeClass("active"),
                  hl()("#examList").slideUp(200);
              });
          },
          closeList() {
            hl()("body").on("click", (e) => {
              "examBTN" !== e.target.id && hl()("#examList").slideUp(200);
            });
          },
          init() {
            this.toggleList();
          },
        };
        Cd.init(),
          (window.onload = function () {
            const e = document.getElementById("txta1");
            e &&
              (e.onkeydown = function () {
                this.value.length;
              });
          }),
          hl()(".tag-del").on("click", function () {
            hl()(this).parent().remove();
          }),
          (window.onload = function () {
            const e = document.getElementById("txta2");
            e &&
              (e.onkeydown = function () {
                this.value.length;
              });
          });
        const Ld = {
          toggleList() {
            hl()("#numBTN").on("click", () => {
              hl()("#numList").stop().slideToggle(200),
                hl()("#examList").scrollTop(0),
                this.numItem(),
                this.closeList();
            });
          },
          numItem() {
            hl()("#numList")
              .find("li")
              .on("click", function () {
                let e = hl()(this),
                  t = e.data("value");
                hl()("#numBTN").html(e.text()),
                  hl()("#numBTN").attr("data-exam", t),
                  e.addClass("active").siblings().removeClass("active"),
                  hl()("#numList").slideUp(200);
              });
          },
          closeList() {
            hl()("body").on("click", (e) => {
              "numBTN" !== e.target.id && hl()("#numList").slideUp(200);
            });
          },
          init() {
            this.toggleList();
          },
        };
        Ld.init();
        const jd = (0, a.ri)(xd);
        jd.use(yd.Z),
          jd.mount("#app"),
          q.ipcRenderer.on("downloadFinished", () => {
            confirm("是否進行更新") && q.ipcRenderer.send("updateApp");
          });
      },
      39491: (e) => {
        "use strict";
        e.exports = require("assert");
      },
      14300: (e) => {
        "use strict";
        e.exports = require("buffer");
      },
      32081: (e) => {
        "use strict";
        e.exports = require("child_process");
      },
      6113: (e) => {
        "use strict";
        e.exports = require("crypto");
      },
      72298: (e) => {
        "use strict";
        e.exports = require("electron");
      },
      82361: (e) => {
        "use strict";
        e.exports = require("events");
      },
      57147: (e) => {
        "use strict";
        e.exports = require("fs");
      },
      85158: (e) => {
        "use strict";
        e.exports = require("http2");
      },
      95687: (e) => {
        "use strict";
        e.exports = require("https");
      },
      41808: (e) => {
        "use strict";
        e.exports = require("net");
      },
      22037: (e) => {
        "use strict";
        e.exports = require("os");
      },
      71017: (e) => {
        "use strict";
        e.exports = require("path");
      },
      77282: (e) => {
        "use strict";
        e.exports = require("process");
      },
      63477: (e) => {
        "use strict";
        e.exports = require("querystring");
      },
      12781: (e) => {
        "use strict";
        e.exports = require("stream");
      },
      24404: (e) => {
        "use strict";
        e.exports = require("tls");
      },
      57310: (e) => {
        "use strict";
        e.exports = require("url");
      },
      73837: (e) => {
        "use strict";
        e.exports = require("util");
      },
      59796: (e) => {
        "use strict";
        e.exports = require("zlib");
      },
      25893: () => {},
      24654: () => {},
    },
    t = {};
  function s(a) {
    var l = t[a];
    if (void 0 !== l) return l.exports;
    var i = (t[a] = { exports: {} });
    return e[a].call(i.exports, i, i.exports, s), i.exports;
  }
  (s.m = e),
    (() => {
      var e = [];
      s.O = (t, a, l, i) => {
        if (!a) {
          var o = 1 / 0;
          for (d = 0; d < e.length; d++) {
            for (var [a, l, i] = e[d], n = !0, c = 0; c < a.length; c++)
              (!1 & i || o >= i) && Object.keys(s.O).every((e) => s.O[e](a[c]))
                ? a.splice(c--, 1)
                : ((n = !1), i < o && (o = i));
            if (n) {
              e.splice(d--, 1);
              var r = l();
              void 0 !== r && (t = r);
            }
          }
          return t;
        }
        i = i || 0;
        for (var d = e.length; d > 0 && e[d - 1][2] > i; d--) e[d] = e[d - 1];
        e[d] = [a, l, i];
      };
    })(),
    (() => {
      s.n = (e) => {
        var t = e && e.__esModule ? () => e["default"] : () => e;
        return s.d(t, { a: t }), t;
      };
    })(),
    (() => {
      s.d = (e, t) => {
        for (var a in t)
          s.o(t, a) &&
            !s.o(e, a) &&
            Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
      };
    })(),
    (() => {
      s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
    })(),
    (() => {
      s.r = (e) => {
        "undefined" !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      };
    })(),
    (() => {
      var e = { 143: 0 };
      s.O.j = (t) => 0 === e[t];
      var t = (t, a) => {
          var l,
            i,
            [o, n, c] = a,
            r = 0;
          if (o.some((t) => 0 !== e[t])) {
            for (l in n) s.o(n, l) && (s.m[l] = n[l]);
            if (c) var d = c(s);
          }
          for (t && t(a); r < o.length; r++)
            (i = o[r]), s.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
          return s.O(d);
        },
        a = (global["webpackChunktkbtv"] = global["webpackChunktkbtv"] || []);
      a.forEach(t.bind(null, 0)), (a.push = t.bind(null, a.push.bind(a)));
    })();
  var a = s.O(void 0, [998], () => s(17244));
  a = s.O(a);
})();
//# sourceMappingURL=app.0263f7ab.js.map
