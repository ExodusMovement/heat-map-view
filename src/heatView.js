import React, { useRef, forwardRef } from "react";
import { StyleSheet } from "react-native";
import heatMapColorForValue from "./heatMapColorForValue";
import Config from "./config";

const View =
  require("react-native/Libraries/Components/View/ViewNativeComponent").default;

let instanceCount = 0;
const HeatView = forwardRef(({ children, getsHot = true, ...props }, ref) => {
  if (!getsHot) return <View {...props} children={children} ref={ref} />;

  const instance = useRef(++instanceCount).current;

  const renderCountRef = useRef(0);
  renderCountRef.current++;

  const value = renderCountRef.current / Config.divisor;

  getsHot =
    getsHot &&
    instance > Config.skipInstances &&
    value >= Config.minHeat &&
    value <= Config.maxHeat;

  return (
    <View {...props} ref={ref}>
      {Config.surface === "ceiling" && children}
      {getsHot && (
        <View
          pointerEvents="none"
          style={[
            StyleSheet.absoluteFill,
            {
              backgroundColor: heatMapColorForValue(
                value,
                Config.dynamicOpacity,
                Config.opacity
              ),
            },
            Config.overlayStyle,
          ]}
        />
      )}
      {Config.surface === "floor" && children}
    </View>
  );
});

export default HeatView;
