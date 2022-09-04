import React, { useRef, forwardRef } from "react";
import { StyleSheet } from "react-native";

import Config from "./config";

const ViewNativeComponent = require("react-native/Libraries/Components/View/ViewNativeComponent");
const View = ViewNativeComponent.default;

function heatMapColorForValue(value) {
  if (value > 1) value = 1;
  const h = (1.0 - value) * 240;
  return `hsla(${h}, 100%, 50%, ${Config.dynamicOpacity ? value : Config.opacity})`;
}

let instanceCount = 0;
const HeatView = forwardRef(({ children, ...props }, ref) => {
  const instance = useRef(++instanceCount).current;

  const renderCountRef = useRef(0);
  renderCountRef.current++;

  const value = renderCountRef.current / Config.divisor;

  return (
    <View {...props} ref={ref}>
      {children}
      {instance > Config.skipInstances && (
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
      )}
    </View>
  );
});

export default HeatView;
