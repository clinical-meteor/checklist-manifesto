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
      west: 270,
      maxPageWidth: 768
    },
    defaults: {
      appSurfaceOffset: true,
      fullscreenNavbars: false,
      fullscreen: false,
      hasPagePadding: false,
      hasPageVerticalPadding: false,
      mainPanelIsCard: false,
      navIsFullscreen: true,
      pageWhite: true,
      secondPanelEnabled: false,
      showNavbars: true,
      showSidebar: true,
      showSearchbar: false,
      symmatricalPadding: false,
      useCardLayout: false,
      useHorizontalFences: false,
      useVerticalFences: true,
      useEastFence: true,
      useHierarchicalLayout: false,
      wideCard: true
    }
  });
});
