try {
  (() => {
    var e = __$$hmAppManager$$__.currentApp;
    var t = e.current,
      { px: o } =
        (new DeviceRuntimeCore.WidgetFactory(
          new DeviceRuntimeCore.HmDomApi(e, t)
        ),
        e.app.__globals__);
try {
  (() => {
    var e = __$$hmAppManager$$__.currentApp,
    t = e.current;
  new DeviceRuntimeCore.WidgetFactory(
    new DeviceRuntimeCore.HmDomApi(e, t),
    "drink"
  );
DeviceRuntimeCore.HmLogger.getLogger("sanjiao");
t.module = DeviceRuntimeCore.Page({
    init_view() {
      hmUI.setLayerScrolling(false);
	  const qr = hmUI.createWidget(hmUI.widget.IMG, {
		  x: 5,
		  y: 130,
		  src: "qr.png"
	  })
      const Text = hmUI.createWidget(hmUI.widget.TEXT, {
        x: 0,
        y: 300,
        w: 192,
        h: 190,
        color: 0xffffff,
        text_size: 24,
        align_h: hmUI.align.CENTER_H,
        align_v: hmUI.align.CENTER_V,
        text_style: hmUI.text_style.WRAP,
        text: "exteragram.app"
      })
      hmUI.createWidget(hmUI.widget.IMG, {
        x: 74,
        y: 20,
        src: "help.png"
      })
      .addEventListener(hmUI.event.CLICK_DOWN, function (b) {
        hmApp.gotoPage({
          url: "page/192x490_s_l66/index.page2",
          param: "..."
        })
      });
    },
    onInit() {
      console.log("index page.js on init invoke"), this.init_view();
    },
    onReady() {
      console.log("index page.js on ready invoke");
    },
    onShow() {
      console.log("index page.js on show invoke");
    },
    onHide() {
      console.log("index page.js on hide invoke");
    },
    onDestory() {
      console.log("index page.js on destory invoke");
    }
  });
})();
} catch (e) {
console.log(e);
}
})();
} catch (e) {
console.log(e);
}
