import Config from "./config";

const ViewNativeComponent = require("react-native/Libraries/Components/View/ViewNativeComponent");
let installed = false;

export async function init(config, storage) {
  if (!installed) {
    if (config) {
      const { divisor, opacity, dynamicOpacity, overlayStyle, skipInstances } =
        config;
      if (divisor) Config.divisor = divisor;
      if (opacity) Config.opacity = opacity;
      if (dynamicOpacity) Config.dynamicOpacity = dynamicOpacity;
      if (overlayStyle) Config.overlayStyle = overlayStyle;
      if (skipInstances) Config.skipInstances = skipInstances;
    }
    const HeatView = require("./heatView").default;
    ViewNativeComponent.default = HeatView;
  }
  installed = true;
}
