# `Heat Map View`

![Heat Map View logo](https://github.com/ExodusMovement/heat-map-view/raw/master/logo.gif)

> Heat up performance offenders! 🔥

<br>

HeatMapView helps us detect frequently re-rendered views without having phone connected to computer at all times.
A significant portion of React performance issues are caused by unnecessary re-renders. This library enables us to observe components which are re-rendered too frequently in real time.

## Installation

```sh
yarn add @exodus/heat-map-view
```

## Usage

Import `initHeatMapView`
```js
import { initHeatMapView } from '@exodus/heat-map-view'
```


Initialize it in `App.js`

```js
useEffect(
  () => {
    if (ready) {
      if (__DEV__) {
        initHeatMapView({
          enabled: true,
          divisor: 20,
          dynamicOpacity: false, 
          overlayStyle: {
            borderWidth: 1,
            borderColor: 'white',
          },

          surface: 'floor',
          skipInstances: 1,
          opacity: 0.5,
        })
      }
    }
  },
  [ready]
)
```
<br>

## Config

| Prop | Default | Params Type | Description |
| --- | --- | --- | --- |
| divisor | 30 | number | Render count divisor. Heat is calculated by `renderCount / divisor` = [0-1]. 0 - Blue, 1 - Red. |
| dynamicOpacity | false | boolean | Heat makes view less transparent. If enabled 0 - Fully transparent, 1 - Fully opaque.|
| opacity | 0.5 | number | HeatMap overlay opacity. Disabled if `dynamicOpacity === true` |
| minHeat | 0 | number | Minimum heat value to be visible. |
| maxHeat | -1 | number | Maximum heat value to be visible. -1 equals infinity. |
| overlayStyle | {} | object | Custom overlay style. | 
| surface | 'floor' | `'floor'\|'ceiling'` | Should heatmap draw on top or bottom of the component. | 
| skipInstances | 2 | number | Skips initial number view instances. |


<br>

## Disable/Enable HeatMapView in runtime


```js
import {
  initHeatMapView, // Initializes and enables HeatMapView
  installHeatMapView, // Enables HeatMapView
  uninstallHeatMapView, // Disables HeatMapView
  isHeatMapViewInstalled, // Check if HeatMapView is enabled
} from '@exodus/heat-map-view'
```

Create Heat Map toggler

```js
const styles = StyleSheet.create({
  heatMapViewEmergency: {
    position: 'absolute',
    height: 30,
    width: 50,
    backgroundColor: 'transparent',
    left: dimensionsWidth / 2 - 25,
    top: getStatusBarHeight(),
  },
})

function HeatMapViewToggle() {
  return (
    <TouchableOpacity
      style={styles.heatMapViewEmergency}
      onPress={() => {
        if (isHeatMapViewInstalled()) {
          uninstallHeatMapView()
        } else {
          installHeatMapView()
        }
      }}
    />
  )
}
```

<br>

## Roadmap
- [ ] Dynamic heat style provider
- [ ] Heat by velocity (Friction)
- [ ] Include examples
