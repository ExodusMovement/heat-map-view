import Config from "./config";
import heatMapColorForValue from "./heatMapColorForValue";

const ViewNativeComponent = require("react-native/Libraries/Components/View/ViewNativeComponent");
ViewNativeComponent.View = ViewNativeComponent.default

let initialized = false;
let installed = false;

function initHeatMapView(config) {
  if (!initialized) {
    Object.assign(Config, config);
    installHeatMapView();
    initialized = true;
  }
}

function installHeatMapView() {
  if (!installed && Config.enabled) {
    const HeatView = require("./heatView").default;
    ViewNativeComponent.default = HeatView;
    installed = true;
  }
}

function uninstallHeatMapView() {
  if (installed) {
    ViewNativeComponent.default = ViewNativeComponent.View;
    installed = false;
  }
}

function isHeatMapViewInstalled() {
  return installed;
}

export {
  heatMapColorForValue,
  Config,
  initHeatMapView,
  installHeatMapView,
  uninstallHeatMapView,
  isHeatMapViewInstalled,
};
