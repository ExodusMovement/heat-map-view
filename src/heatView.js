import React, { useRef, forwardRef } from "react";
import { StyleSheet } from "react-native";

import Config from "./config";

const ViewNativeComponent = require("react-native/Libraries/Components/View/ViewNativeComponent");
const View = ViewNativeComponent.default;

function heatMapColorForValue(value, dynamic) {
  if (value > 1) value = 1;
  const h = (1.0 - value) * 240;
  return `hsla(${h}, 100%, 50%, ${dynamic ? value : Config.opacity})`
}

const HeatView = forwardRef(({ children, ...props }, ref) => {
  const renderCountRef = useRef(0);
  renderCountRef.current++;

  const value = renderCountRef.current / Config.divisor;

  return (
    <View {...props} ref={ref}>
      {children}
      <View
        pointerEvents="none"
        style={[
          StyleSheet.absoluteFill,
          {
            backgroundColor: heatMapColorForValue(value),
          },
          Config.overlayStyle,
        ]}
      />
    </View>
  );
});

export default HeatView;
