import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication({
  name: "@cn/mf-header",
  app: () => System.import("@cn/mf-header"),
  activeWhen: ["/portal"]
});

registerApplication({
  name: "@cn/mf-portal",
  app: () => System.import("@cn/mf-portal"),
  activeWhen: ["/"]
});

registerApplication({
  name: "@cn/mf-portal-react",
  app: () => System.import("@cn/mf-react-portal"),
  activeWhen: ["/portal/react"]
});

registerApplication({
  name: "@cn/mf-vue",
  app: () => System.import("@cn/mf-vue"),
  activeWhen: ["/portal/vue"]
});

registerApplication({
  name: "@cn/mf-angular",
  app: () => System.import("@cn/mf-angular"),
  activeWhen: ["/portal/angular"]
});

registerApplication({
  name: "@cn/mf-svelte",
  app: () => System.import("@cn/mf-svelte"),
  activeWhen: ["/portal/svelte"]
});

registerApplication({
  name: "@cn/mf-footer",
  app: () => System.import("@cn/mf-footer"),
  activeWhen: ["/portal"]
});


start({
  urlRerouteOnly: true,
});
