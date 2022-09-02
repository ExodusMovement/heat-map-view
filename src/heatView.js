import React, { useRef, forwardRef } from 'react';
import { StyleSheet } from 'react-native';

import Config from './config';

const ViewNativeComponent = require('react-native/Libraries/Components/View/ViewNativeComponent');
const View = ViewNativeComponent.default;

function heatMapColorForValue(value) {
   if (value > 1) value = 1;
   const h = (1.0 - value) * 240;
   return 'hsl(' + h + ', 100%, 50%)';
}

const HeatView = forwardRef(({ children, ...props }, ref) => {
   const renderCountRef = useRef(0);
   renderCountRef.current++;

   const value = renderCountRef.current / Config.divisor;

   return (
      <View {...props} ref={ref}>
         {children}
         <View
            pointerEvents='none'
            style={[
               StyleSheet.absoluteFill,
               {
                  backgroundColor: heatMapColorForValue(value),
                  opacity: Config.dynamicOpacity ? value : Config.opacity,
               },
            ]}
         />
      </View>
   );
});

export default HeatView;
