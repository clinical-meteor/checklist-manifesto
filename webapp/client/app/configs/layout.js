Meteor.startup(function (){
  ActiveLayout.configure({
    help: {
      link: "/menu",
      text: "",
      display: false
    },
    classes: {
      header: "",
      title: "",
      links: ""
    },
    text: {
      title: "",
      logout: "Logout"
    },
    fence: {
      north: 50,
      south: 0,
      east: 270,
      west: 270
    },
    defaults: {
      showNavbars: true,
      showSidebar: true,
      showSearchbar: false,
      useHierarchicalLayout: false,
      mainPanelIsCard: false,
      wideCard: true,
      useCardLayout: false,
      hasPagePadding: false,
      symmatricalPadding: false,
      hasPageVerticalPadding: false,
      useHorizontalFences: false,
      useVerticalFences: true,
      navIsFullscreen: true,
      fullscreenNavbars: false,
      fullscreen: false,
      secondPanelEnabled: false,
      appSurfaceOffset: true,
      useEastFence: true,
      pageWhite: true
    }
  });
});
