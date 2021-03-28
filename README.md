Globe-AR
========

[![NPM package][npm-img]][npm-url]
[![Build Size][build-size-img]][build-size-url]
[![Dependencies][dependencies-img]][dependencies-url]

<p align="center">
  <a href="https://vasturiano.github.io/globe-ar/example/world-population/"><img width="80%" src="https://vasturiano.github.io/globe-ar/example/world-population/preview.jpg"></a>
</p>

A web component to represent geospatial data in augmented reality using a spherical projection 3D globe.
Uses [AR.js](https://github.com/jeromeetienne/AR.js) with [A-Frame](https://aframe.io/) for rendering, and [three-globe](https://github.com/vasturiano/three-globe) to manage the underlying globe object.

To load any of the examples below:
* Open this [hiro marker image](https://jeromeetienne.github.io/AR.js/data/images/HIRO.jpg) in your desktop browser.
* Open the example on your phone browser, and point it at your desktop screen.

Check out the examples:
* [Basic](https://vasturiano.github.io/globe-ar/example/basic/) ([source](https://github.com/vasturiano/globe-ar/blob/master/example/basic/index.html))
* [Arc Links](https://vasturiano.github.io/globe-ar/example/random-arcs/) ([source](https://github.com/vasturiano/globe-ar/blob/master/example/random-arcs/index.html))
* [Choropleth](https://vasturiano.github.io/globe-ar/example/choropleth-countries/) ([source](https://github.com/vasturiano/globe-ar/blob/master/example/choropleth-countries/index.html))
* [Elevated Polygons](https://vasturiano.github.io/globe-ar/example/countries-population/) ([source](https://github.com/vasturiano/globe-ar/blob/master/example/countries-population/index.html))
* [Hollow Globe](https://vasturiano.github.io/globe-ar/example/hollow-globe/) ([source](https://github.com/vasturiano/globe-ar/blob/master/example/hollow-globe/index.html))
* [Path Lines](https://vasturiano.github.io/globe-ar/example/random-paths/) ([source](https://github.com/vasturiano/globe-ar/blob/master/example/random-paths/index.html))
* [Map Labels](https://vasturiano.github.io/globe-ar/example/world-cities/) ([source](https://github.com/vasturiano/globe-ar/blob/master/example/world-cities/index.html))
* [Hexed Country Polygons](https://vasturiano.github.io/globe-ar/example/hexed-polygons/) ([source](https://github.com/vasturiano/globe-ar/blob/master/example/hexed-polygons/index.html))
* [Tiles](https://vasturiano.github.io/globe-ar/example/tiles/) ([source](https://github.com/vasturiano/globe-ar/blob/master/example/tiles/index.html))
* [Custom Layer](https://vasturiano.github.io/globe-ar/example/custom-layer/) ([source](https://github.com/vasturiano/globe-ar/blob/master/example/custom-layer/index.html))
* [World Population](https://vasturiano.github.io/globe-ar/example/world-population/) ([source](https://github.com/vasturiano/globe-ar/blob/master/example/world-population/index.html))
* [Recent Earthquakes](https://vasturiano.github.io/globe-ar/example/earthquakes/) ([source](https://github.com/vasturiano/globe-ar/blob/master/example/earthquakes/index.html))
* [World Volcanoes](https://vasturiano.github.io/globe-ar/example/volcanoes/) ([source](https://github.com/vasturiano/globe-ar/blob/master/example/volcanoes/index.html))
* [US outbound international airline routes](https://vasturiano.github.io/globe-ar/example/airline-routes/us-international-outbound.html) ([source](https://github.com/vasturiano/globe-ar/blob/master/example/airline-routes/us-international-outbound.html))
* [Submarine Cables](https://vasturiano.github.io/globe-ar/example/submarine-cables/index.html) ([source](https://github.com/vasturiano/globe-ar/blob/master/example/submarine-cables/index.html))

See also the [WebGL 3D version](https://github.com/vasturiano/globe.gl), and the [A-Frame component version (aframe-globe-component)](https://github.com/vasturiano/aframe-globe-component).

## Quick start

```
import GlobeAR from 'globe-ar';
```
or
```
const GlobeAR = require('globe-ar');
```
or even
```
<script src="//unpkg.com/globe-ar"></script>
```
then
```
const myGlobe = GlobeAR();
myGlobe(<myDOMElement>)
  .globeImageUrl(<imageUrl>)
  .pointsData(<myData>);
```

Make sure to load these two script tags in your application, required for `AR.js` + `A-frame` to function properly:
```
<script src="//aframe.io/releases/1.0.0/aframe.min.js"></script>
<script src="//unpkg.com/ar.js/aframe/build/aframe-ar.min.js"></script>
```

## API reference

### Initialisation
```
GlobeAR({ configOptions })(<domElement>)
```

| Config options | Description | Default |
| --- | --- | :--: |
| <b>markerAttrs</b>: <i>object</i> | Set of attributes that define the marker where the globe is mounted, according to the [a-marker specification](https://github.com/jeromeetienne/AR.js/tree/master/aframe#a-marker). | `{ preset: 'hiro' }` |

### Container layout

| Method | Description | Default |
| --- | --- | :--: |
| <b>yOffset</b>([<i>number</i>]) | Getter/setter for the offset distance above the marker where to place the center coordinates `<0,0,0>` of the globe. Measured in terms of marker width units. | 1.5 |
| <b>globeScale</b>([<i>number</i>]) | Getter/setter for the translation scale between real world distances and globe radius units, determining the overall size of the globe. Defined in terms of how many globe radii fit in a full marker width. | 1 |
| <b>width</b>([<i>px</i>]) | Getter/setter for the viewport canvas width. | *&lt;window width&gt;* |
| <b>height</b>([<i>px</i>]) | Getter/setter for the viewport canvas height. | *&lt;window height&gt;* |
| <b>onCenterHover</b> | Callback function for globe item's hover events at the center of the viewport. The item's data and object type (or `null` if there's no object under the central line of sight) is included as the first argument, and the previous item (or null) as second argument. | - |

### Globe Layer

| Method | Description | Default |
| --- | --- | :--: |
| <b>globeImageUrl</b>([<i>url</i>]) | Getter/setter for the URL of the image used in the material that wraps the globe. If no image is provided, the globe is represented as a black sphere. | `null` |
| <b>bumpImageUrl</b>([<i>url</i>]) | Getter/setter for the URL of the image used to create a [bump map](https://threejs.org/docs/#api/en/materials/MeshStandardMaterial.bumpMap) in the material, to represent the globe's terrain. | `null` |
| <b>showGlobe</b>([<i>boolean</i>]) | Getter/setter for whether to show the globe surface itself. | `true` |
| <b>showGraticules</b>([<i>boolean</i>]) | Getter/setter for whether to show a graticule grid demarking latitude and longitude lines at every 10 degrees. | `false` |
| <b>showAtmosphere</b>([<i>boolean</i>]) | Getter/setter for whether to show a bright halo surrounding the globe, representing the atmosphere. | `true` |
| <b>atmosphereColor</b>([<i>str</i>]) | Getter/setter for the color of the atmosphere. | `lightskyblue` |
| <b>atmosphereAltitude</b>([<i>str</i>]) | Getter/setter for the max altitude of the atmosphere, in terms of globe radius units. | 0.15 |
| <b>globeMaterial</b>([<i>material</i>]) | Getter/setter of the ThreeJS material used to wrap the globe. Can be used for more advanced styling of the globe. | [MeshPhongMaterial](https://threejs.org/docs/#api/en/materials/MeshPhongMaterial) |
| <b>onGlobeReady</b>(<i>fn</i>) | Callback function to invoke immediately after the globe has been initialized and visible on the scene. | - |

### Points Layer

| Method | Description | Default |
| --- | --- | :--: |
| <b>pointsData</b>([<i>array</i>]) | Getter/setter for the list of points to represent in the points map layer. Each point is displayed as a cylindrical 3D object rising perpendicularly from the surface of the globe. | `[]` |
| <b>pointLat</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Point object accessor function, attribute or a numeric constant for the cylinder's center latitude coordinate. | `lat` |
| <b>pointLng</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Point object accessor function, attribute or a numeric constant for the cylinder's center longitude coordinate. | `lng` |
| <b>pointColor</b>([<i>str</i> or <i>fn</i>]) | Point object accessor function or attribute for the cylinder color. | `() => '#ffffaa'` |
| <b>pointAltitude</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Point object accessor function, attribute or a numeric constant for the cylinder's altitude in terms of globe radius units (`0` = 0 altitude (flat circle), `1` = globe radius). | 0.1 |
| <b>pointRadius</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Point object accessor function, attribute or a numeric constant for the cylinder's radius, in angular degrees. | 0.25 |
| <b>pointResolution</b>([<i>num</i>]) | Getter/setter for the radial geometric resolution of each cylinder, expressed in how many slice segments to divide the circumference. Higher values yield smoother cylinders. | 12 |
| <b>pointsMerge</b>([<i>boolean</i>]) | Getter/setter for whether to merge all the point meshes into a single ThreeJS object, for improved rendering performance. Visually both options are equivalent, setting this option only affects the internal organization of the ThreeJS objects. | `false` |
| <b>pointsTransitionDuration</b>([<i>num</i>]) | Getter/setter for duration (ms) of the transition to animate point changes involving geometry modifications. A value of `0` will move the objects immediately to their final position. New objects are animated by scaling them from the ground up. Only works if `pointsMerge` is disabled. | 1000 |

### Arcs Layer

| Method | Description | Default |
| --- | --- | :--: |
| <b>arcsData</b>([<i>array</i>]) | Getter/setter for the list of links to represent in the arcs map layer. Each link is displayed as an arc line that rises from the surface of the globe, connecting the start and end coordinates. | `[]` |
| <b>arcStartLat</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Arc object accessor function, attribute or a numeric constant for the line's start latitude coordinate. | `startLat` |
| <b>arcStartLng</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Arc object accessor function, attribute or a numeric constant for the line's start longitude coordinate. | `startLng` |
| <b>arcEndLat</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Arc object accessor function, attribute or a numeric constant for the line's end latitude coordinate. | `endLat` |
| <b>arcEndLng</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Arc object accessor function, attribute or a numeric constant for the line's end longitude coordinate. | `endLng` |
| <b>arcColor</b>([<i>str</i>, <i>[str, ...]</i> or <i>fn</i>]) | Arc object accessor function or attribute for the line's color. Also supports color gradients by passing an array of colors. | `() => '#ffffaa'` |
| <b>arcAltitude</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Arc object accessor function, attribute or a numeric constant for the arc's maximum altitude (ocurring at the half-way distance between the two points) in terms of globe radius units (`0` = 0 altitude (ground line), `1` = globe radius). If a value of `null` or `undefined` is used, the altitude is automatically set proportionally to the distance between the two points, according to the scale set in `arcAltitudeAutoScale`.  | `null` |
| <b>arcAltitudeAutoScale</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Arc object accessor function, attribute or a numeric constant for the scale of the arc's automatic altitude, in terms of units of the great-arc distance between the two points. A value of `1` indicates the arc should be as high as its length on the ground. Only applicable if `arcAltitude` is not set. | 0.5 |
| <b>arcStroke</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Arc object accessor function, attribute or a numeric constant for the line's diameter, in angular degrees. A value of `null` or `undefined` will render a [ThreeJS Line](https://threejs.org/docs/#api/objects/Line) whose width is constant (`1px`) regardless of the camera distance. Otherwise, a [TubeGeometry](https://threejs.org/docs/#api/en/geometries/TubeGeometry) is used. | `null` |
| <b>arcCurveResolution</b>([<i>num</i>]) | Getter/setter for the arc's curve resolution, expressed in how many straight line segments to divide the curve by. Higher values yield smoother curves. | 64 |
| <b>arcCircularResolution</b>([<i>num</i>]) | Getter/setter for the radial geometric resolution of each line, expressed in how many slice segments to divide the tube's circumference. Only applicable when using Tube geometries (defined `arcStroke`). | 6 |
| <b>arcDashLength</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Arc object accessor function, attribute or a numeric constant for the length of the dashed segments in the arc, in terms of relative length of the whole line (`1` = full line length). | 1 |
| <b>arcDashGap</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Arc object accessor function, attribute or a numeric constant for the length of the gap between dash segments, in terms of relative line length. | 0 |
| <b>arcDashInitialGap</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Arc object accessor function, attribute or a numeric constant for the length of the initial gap before the first dash segment, in terms of relative line length. | 0 |
| <b>arcDashAnimateTime</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Arc object accessor function, attribute or a numeric constant for the time duration (in `ms`) to animate the motion of dash positions from the start to the end point for a full line length. A value of `0` disables the animation. | 0 |
| <b>arcsTransitionDuration</b>([<i>num</i>]) | Getter/setter for duration (ms) of the transition to animate arc changes involving geometry modifications. A value of `0` will move the arcs immediately to their final position. New arcs are animated by rising them from the ground up. | 1000 |

### Polygons Layer

| Method | Description | Default |
| --- | --- | :--: |
| <b>polygonsData</b>([<i>array</i>]) | Getter/setter for the list of polygon shapes to represent in the polygons map layer. Each polygon is displayed as a shaped cone that extrudes from the surface of the globe. | `[]` |
| <b>polygonGeoJsonGeometry</b>([<i>str</i> or <i>fn</i>]) | Polygon object accessor function or attribute for the GeoJson geometry specification of the polygon's shape. The returned value should have a minimum of two fields: `type` and `coordinates`. Only GeoJson geometries of type `Polygon` or `MultiPolygon` are supported, other types will be skipped. | `geometry` |
| <b>polygonCapColor</b>([<i>str</i> or <i>fn</i>]) | Polygon object accessor function or attribute for the color of the top surface. | `() => '#ffffaa'` |
| <b>polygonCapMaterial</b>([<i>material</i>, <i>str</i> or <i>fn</i>]) | Polygon object accessor function, attribute or material object for the [ThreeJS material](https://threejs.org/docs/#api/en/materials/Material) to use in the top surface. This property takes precedence over `polygonCapColor`, which will be ignored if both are defined. | - |
| <b>polygonSideColor</b>([<i>str</i> or <i>fn</i>]) | Polygon object accessor function or attribute for the color of the cone sides. | `() => '#ffffaa'` |
| <b>polygonSideMaterial</b>([<i>material</i>, <i>str</i> or <i>fn</i>]) | Polygon object accessor function, attribute or material object for the [ThreeJS material](https://threejs.org/docs/#api/en/materials/Material) to use in the cone sides. This property takes precedence over `polygonSideColor`, which will be ignored if both are defined. | - |
| <b>polygonStrokeColor</b>([<i>str</i> or <i>fn</i>]) | Polygon object accessor function or attribute for the color to stroke the polygon perimeter. A falsy value will disable the stroking. | - |
| <b>polygonAltitude</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Polygon object accessor function, attribute or a numeric constant for the polygon cone's altitude in terms of globe radius units (`0` = 0 altitude (flat polygon), `1` = globe radius). | 0.01 |
| <b>polygonCapCurvatureResolution</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Polygon object accessor function, attribute or a numeric constant for the resolution (in angular degrees) of the cap surface curvature. The finer the resolution, the more the polygon is fragmented into smaller faces to approximate the spheric surface, at the cost of performance. | 5 |
| <b>polygonsTransitionDuration</b>([<i>num</i>]) | Getter/setter for duration (ms) of the transition to animate polygon altitude changes. A value of `0` will size the cone immediately to their final altitude. New polygons are animated by rising them from the ground up. | 1000 |

### Paths Layer

| Method | Description | Default |
| --- | --- | :--: |
| <b>pathsData</b>([<i>array</i>]) | Getter/setter for the list of lines to represent in the paths map layer. Each path is displayed as a line that connects all the coordinate pairs in the path array. | `[]` |
| <b>pathPoints</b>([<i>array</i>, <i>str</i> or <i>fn</i>]) | Path object accessor function, attribute or an array for the set of points that define the path line. By default, each path point is assumed to be a 2-position array (`[<lat>, <lon>]`). This default behavior can be modified using the `pathPointLat` and `pathPointLng` methods. | `pnts => pnts` |
| <b>pathPointLat</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Path point object accessor function, attribute or a numeric constant for the latitude coordinate. | `arr => arr[0]` |
| <b>pathPointLng</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Path point object accessor function, attribute or a numeric constant for the longitude coordinate. | `arr => arr[1]` |
| <b>pathPointAlt</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Path point object accessor function, attribute or a numeric constant for the point altitude, in terms of globe radius units (`0` = 0 altitude (ground), `1` = globe radius). | 0.001 |
| <b>pathResolution</b>([<i>num</i>]) | Getter/setter for the path's angular resolution, in lat/lng degrees. If the ground distance (excluding altitude) between two adjacent path points is larger than this value, the line segment will be interpolated in order to approximate the curvature of the sphere surface. Lower values yield more perfectly curved lines, at the cost of performance. | 2 |
| <b>pathColor</b>([<i>str</i>, <i>[str, ...]</i> or <i>fn</i>]) | Path object accessor function or attribute for the line's color. Also supports color gradients by passing an array of colors. Transparent colors are not supported in Fat Lines with set width. | `() => '#ffffaa'` |
| <b>pathStroke</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Path object accessor function, attribute or a numeric constant for the line's diameter, in angular degrees. A value of `null` or `undefined` will render a [ThreeJS Line](https://threejs.org/docs/#api/objects/Line) whose width is constant (`1px`) regardless of the camera distance. Otherwise, a [FatLine](https://github.com/vasturiano/three-fatline) is used. | `null` |
| <b>pathDashLength</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Path object accessor function, attribute or a numeric constant for the length of the dashed segments in the path line, in terms of relative length of the whole line (`1` = full line length). | 1 |
| <b>pathDashGap</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Path object accessor function, attribute or a numeric constant for the length of the gap between dash segments, in terms of relative line length. | 0 |
| <b>pathDashInitialGap</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Path object accessor function, attribute or a numeric constant for the length of the initial gap before the first dash segment, in terms of relative line length. | 0 |
| <b>pathDashAnimateTime</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Path object accessor function, attribute or a numeric constant for the time duration (in `ms`) to animate the motion of dash positions from the start to the end point for a full line length. A value of `0` disables the animation. | 0 |
| <b>pathTransitionDuration</b>([<i>num</i>]) | Getter/setter for duration (ms) of the transition to animate path changes. A value of `0` will move the paths immediately to their final position. New paths are animated from start to end. | 1000 |

### Hex Bin Layer

| Method | Description | Default |
| --- | --- | :--: |
| <b>hexBinPointsData</b>([<i>array</i>]) | Getter/setter for the list of points to aggregate using the hex bin map layer. Each point is added to an hexagonal prism 3D object that represents all the points within a tesselated portion of the space. | `[]` |
| <b>hexBinPointLat</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Point object accessor function, attribute or a numeric constant for the latitude coordinate. | `lat` |
| <b>hexBinPointLng</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Point object accessor function, attribute or a numeric constant for the longitude coordinate. | `lng` |
| <b>hexBinPointWeight</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Point object accessor function, attribute or a numeric constant for the weight of the point. Weights for points in the same bin are summed and determine the hexagon default altitude. | 1 |
| <b>hexBinResolution</b>([<i>num</i>]) | The geographic binning resolution as defined by [H3](https://uber.github.io/h3/#/documentation/core-library/resolution-table). Determines the area of the hexagons that tesselate the globe's surface. Accepts values between `0` and `15`. Level 0 partitions the earth in 122 (mostly) hexagonal cells. Each subsequent level sub-divides the previous in roughly 7 hexagons. | 4 |
| <b>hexMargin</b>([<i>num</i> or <i>fn</i>]) | The radial margin of each hexagon. Margins above `0` will create gaps between adjacent hexagons and serve only a visual purpose, as the data points within the margin still contribute to the hexagon's data. The margin is specified in terms of fraction of the hexagon's surface diameter. Values below `0` or above `1` are disadvised. This property also supports using an accessor method based on the hexagon's aggregated data, following the syntax: `hexMargin(({ points, sumWeight, center: { lat, lng }}) => ...)`. This method should return a numeric constant. | 0.2 |
| <b>hexAltitude</b>([<i>num</i> or <i>fn</i>]) | The altitude of each hexagon, in terms of globe radius units (`0` = 0 altitude (flat hexagon), `1` = globe radius). This property also supports using an accessor method based on the hexagon's aggregated data, following the syntax: `hexAltitude(({ points, sumWeight, center: { lat, lng }}) => ...)`. This method should return a numeric constant. | `({ sumWeight }) => sumWeight * 0.01` |
| <b>hexTopCurvatureResolution</b>([<i>num</i>]) | The resolution (in angular degrees) of the top surface curvature. The finer the resolution, the more the top area is fragmented into smaller faces to approximate the spheric surface, at the cost of performance. | 5 |
| <b>hexTopColor</b>([<i>fn</i>]) | Accessor method for each hexagon's top color. The method should follow the signature: `hexTopColor(({ points, sumWeight, center: { lat, lng }}) => ...)` and return a color string. | `() => '#ffffaa'` |
| <b>hexSideColor</b>([<i>fn</i>]) | Accessor method for each hexagon's side color. The method should follow the signature: `hexSideColor(({ points, sumWeight, center: { lat, lng }}) => ...)` and return a color string. | `() => '#ffffaa'` |
| <b>hexBinMerge</b>([<i>boolean</i>]) | Getter/setter for whether to merge all the hexagon meshes into a single ThreeJS object, for improved rendering performance. Visually both options are equivalent, setting this option only affects the internal organization of the ThreeJS objects. | `false` |
| <b>hexTransitionDuration</b>([<i>num</i>]) | Getter/setter for duration (ms) of the transition to animate hexagon changes related to geometry modifications (altitude, radius). A value of `0` will move the hexagons immediately to their final position. New hexagons are animated by scaling them from the ground up. Only works if `hexBinMerge` is disabled. | 1000 |

### Hexed Polygons Layer

| Method | Description | Default |
| --- | --- | :--: |
| <b>hexPolygonsData</b>([<i>array</i>]) | Getter/setter for the list of polygon shapes to represent in the hexed polygons map layer. Each polygon is displayed as a tesselated group of hexagons that approximate the polygons shape according to the resolution specified in `hexPolygonResolution`. | `[]` |
| <b>hexPolygonGeoJsonGeometry</b>([<i>str</i> or <i>fn</i>]) | Hexed polygon object accessor function or attribute for the GeoJson geometry specification of the polygon's shape. The returned value should have a minimum of two fields: `type` and `coordinates`. Only GeoJson geometries of type `Polygon` or `MultiPolygon` are supported, other types will be skipped. | `geometry` |
| <b>hexPolygonColor</b>([<i>str</i> or <i>fn</i>]) | Hexed polygon object accessor function or attribute for the color of each hexagon in the polygon. | `() => '#ffffaa'` |
| <b>hexPolygonAltitude</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Hexed polygon object accessor function, attribute or a numeric constant for the polygon's hexagons altitude in terms of globe radius units (`0` = 0 altitude, `1` = globe radius). | 0.001 |
| <b>hexPolygonResolution</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Hexed polygon object accessor function, attribute or a numeric constant for the geographic binning resolution as defined by [H3](https://uber.github.io/h3/#/documentation/core-library/resolution-table). Determines the area of the hexagons that tesselate the globe's surface. Accepts values between `0` and `15`. Level 0 partitions the earth in 122 (mostly) hexagonal cells. Each subsequent level sub-divides the previous in roughly 7 hexagons. | 3 |
| <b>hexPolygonMargin</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Hexed polygon object accessor function, attribute or a numeric constant for the radial margin of each hexagon. Margins above `0` will create gaps between adjacent hexagons within a polygon. The margin is specified in terms of fraction of the hexagon's surface diameter. Values below `0` or above `1` are disadvised. | 0.2 |
| <b>hexPolygonCurvatureResolution</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Hexed polygon object accessor function, attribute or a numeric constant for the resolution (in angular degrees) of each hexed polygon surface curvature. The finer the resolution, the more the polygon hexes are fragmented into smaller faces to approximate the spheric surface, at the cost of performance. | 5 |
| <b>hexPolygonsTransitionDuration</b>([<i>num</i>]) | Getter/setter for duration (ms) of the transition to animate hexed polygons altitude and margin changes. A value of `0` will move the hexagons immediately to their final state. New hexed polygons are animated by sizing each hexagon from `0` radius. | 0 |

### Tiles Layer

| Method | Description | Default |
| --- | --- | :--: |
| <b>tilesData</b>([<i>array</i>]) | Getter/setter for the list of tiles to represent in the tiles map layer. Each tile is displayed as a spherical surface segment. The segments can be placed side-by-side for a tiled surface and each can be styled separately. | `[]` |
| <b>tileLat</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Tile object accessor function, attribute or a numeric constant for the segment's centroid latitude coordinate. | `lat` |
| <b>tileLng</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Tile object accessor function, attribute or a numeric constant for the segment's centroid longitude coordinate. | `lng` |
| <b>tileAltitude</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Tile object accessor function, attribute or a numeric constant for the segment's altitude in terms of globe radius units. | 0.01 |
| <b>tileWidth</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Tile object accessor function, attribute or a numeric constant for the segment's longitudinal width, in angular degrees. | 1 |
| <b>tileHeight</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Tile object accessor function, attribute or a numeric constant for the segment's latitudinal height, in angular degrees. | 1 |
| <b>tileUseGlobeProjection</b>([<i>boolean</i>, <i>str</i> or <i>fn</i>]) | Tile object accessor function, attribute or a boolean constant for whether to use the globe's projection to shape the segment to its relative tiled position (`true`), or break free from this projection and shape the segment as if it would be laying directly on the equatorial perimeter (`false`). | `true` |
| <b>tileMaterial</b>([<i>material</i>, <i>str</i> or <i>fn</i>]) | Tile object accessor function, attribute or material object for the [ThreeJS material](https://threejs.org/docs/#api/en/materials/Material) used to style the segment's surface. | `() => new MeshLambertMaterial({ color: '#ffbb88' })` |
| <b>tileCurvatureResolution</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Tile object accessor function, attribute or a numeric constant for the resolution (in angular degrees) of the surface curvature. The finer the resolution, the more the tile geometry is fragmented into smaller faces to approximate the spheric surface, at the cost of performance. | 5 |
| <b>tilesTransitionDuration</b>([<i>num</i>]) | Getter/setter for duration (ms) of the transition to animate tile changes involving geometry modifications. A value of `0` will move the tiles immediately to their final position. New tiles are animated by scaling them from the centroid outwards. | 1000 |

### Labels Layer

| Method | Description | Default |
| --- | --- | :--: |
| <b>labelsData</b>([<i>array</i>]) | Getter/setter for the list of label objects to represent in the labels map layer. | `[]` |
| <b>labelLat</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Label object accessor function, attribute or a numeric constant for the latitude coordinate. | `lat` |
| <b>labelLng</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Label object accessor function, attribute or a numeric constant for the longitude coordinate. | `lng` |
| <b>labelText</b>([<i>str</i> or <i>fn</i>]) | Label object accessor function or attribute for the label text. | `text` |
| <b>labelColor</b>([<i>str</i> or <i>fn</i>]) | Label object accessor function or attribute for the label color. | `() => 'lightgrey'` |
| <b>labelAltitude</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Label object accessor function, attribute or a numeric constant for the label altitude in terms of globe radius units. | 0 |
| <b>labelSize</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Label object accessor function, attribute or a numeric constant for the label text height, in angular degrees. | 0.5 |
| <b>labelTypeFace</b>([<i>typeface </i>]) | Getter/setter for the text font typeface JSON object. Supports any typeface font generated by [Facetype.js](http://gero3.github.io/facetype.js/). | [helvetiker regular](https://github.com/mrdoob/three.js/blob/dev/examples/fonts/helvetiker_regular.typeface.json) |
| <b>labelRotation</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Label object accessor function, attribute or a numeric constant for the label rotation in degrees. The rotation is performed clockwise along the axis of its latitude parallel plane. | 0 |
| <b>labelResolution</b>([<i>num</i>]) | Getter/setter for the text geometric resolution of each label, expressed in how many segments to use in the text curves. Higher values yield smoother labels. | 3 |
| <b>labelIncludeDot</b>([<i>bool</i>, <i>str</i> or <i>fn</i>]) | Label object accessor function, attribute or a boolean constant for whether to include a dot marker next to the text indicating the exact `lat`, `lng` coordinates of the label. If enabled the text will be rendered offset from the dot. | `true` |
| <b>labelDotRadius</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Label object accessor function, attribute or a numeric constant for the radius of the dot marker, in angular degrees. | 0.1 |
| <b>labelDotOrientation</b>([<i>str</i> or <i>fn</i>]) | Label object accessor function or attribute for the orientation of the label if the dot marker is present. Possible values are `right`, `top` and `bottom`. | `() => 'bottom'` |
| <b>labelsTransitionDuration</b>([<i>num</i>]) | Getter/setter for duration (ms) of the transition to animate label changes involving position modifications (`lat`, `lng`, `altitude`, `rotation`). A value of `0` will move the labels immediately to their final position. New labels are animated by scaling their size. | 1000 |

### Custom Layer

| Method | Description | Default |
| --- | --- | :--: |
| <b>customLayerData</b>([<i>array</i>]) | Getter/setter for the list of items to represent in the custom map layer. Each item is rendered according to the `customThreeObject` method. | `[]` |
| <b>customThreeObject</b>([<i>Object3d</i>, <i>str</i> or <i>fn</i>]) | Object accessor function or attribute for generating a custom 3d object to render as part of the custom map layer. Should return an instance of [ThreeJS Object3d](https://threejs.org/docs/index.html#api/core/Object3D). The callback method's signature includes the object's data as well as the globe radius: `customThreeObject((objData, globeRadius) => { ... })`. | `null` |
| <b>customThreeObjectUpdate</b>([<i>str</i> or <i>fn</i>]) | Object accessor function or attribute for updating an existing custom 3d object with new data. This can be used for performance improvement on data updates as the objects don't need to be removed and recreated at each update. The callback method's signature includes the object to be update, its new data and the globe radius: `customThreeObjectUpdate((obj, objData, globeRadius) => { ... })`. | `null` |

### Utility

| Method | Description |
| --- | --- |
| <b>getCoords</b>(<i>lat</i>, <i>lng</i> [,<i>altitude</i>]) | Utility method to translate spherical coordinates. Given a pair of latitude/longitude coordinates and optionally altitude (in terms of globe radius units), returns the equivalent `{x, y, z}` cartesian spatial coordinates. ||
| <b>toGeoCoords</b>({ <i>x</i>, <i>y</i>, <i>z</i> }) | Utility method to translate cartesian coordinates to the geographic domain. Given a set of 3D cartesian coordinates `{x, y, z}`, returns the equivalent `{lat, lng, altitude}` spherical coordinates. Altitude is defined in terms of globe radius units. ||

## Giving Back

[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=L398E7PKP47E8&currency_code=USD&source=url) If this project has helped you and you'd like to contribute back, you can always [buy me a ☕](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=L398E7PKP47E8&currency_code=USD&source=url)!

[npm-img]: https://img.shields.io/npm/v/globe-ar.svg
[npm-url]: https://npmjs.org/package/globe-ar
[build-size-img]: https://img.shields.io/bundlephobia/minzip/globe-ar.svg
[build-size-url]: https://bundlephobia.com/result?p=globe-ar
[dependencies-img]: https://img.shields.io/david/vasturiano/globe-ar.svg
[dependencies-url]: https://david-dm.org/vasturiano/globe-ar
