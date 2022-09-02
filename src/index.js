import Config from "./config";

const ViewNativeComponent = require("react-native/Libraries/Components/View/ViewNativeComponent");

export async function init(config, storage) {
  if (config) {
    if (config.divisor) Config.divisor = config.divisor;
    if (config.opacity) Config.opacity = config.opacity;
    if (config.dynamicOpacity) Config.dynamicOpacity = config.dynamicOpacity;
  }
  const HeatView = require("./heatView").default;
  ViewNativeComponent.default = HeatView;
}
