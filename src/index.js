import Config from "./config";
import heatMapColorForValue from "./heatMapColorForValue";

const ViewNativeComponent = require("react-native/Libraries/Components/View/ViewNativeComponent");
let installed = false;

function initHeatMapView(config) {
  if (!installed) {
    Object.assign(Config, config);
    const HeatView = require("./heatView").default;
    ViewNativeComponent.default = HeatView;
  }
  installed = true;
}

export { Config, heatMapColorForValue, initHeatMapView };
