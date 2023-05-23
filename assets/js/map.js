var map1 = new mapboxgl.Map({
    container: 'map1',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [73.856255, 18.516726],
    zoom: 5
  });
  
  const markerCoords1 = [
    [73.856255, 18.516726],
    [74.576782, 18.150663],
    [72.7474142, 20.1924098],
    [72.911453, 20.385181]
  ];
  
  const markers1 = markerCoords1.map((coord, index) => {
    const color = (index === 3) ? '#9b9b9b' : '#55d5a5';
    return new mapboxgl.Marker({ color })
      .setLngLat(coord)
      .addTo(map1);
  });
  
  const featureCollection1 = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: markerCoords1.slice(0, 3)
        },
        properties: {
          'stroke': '#55d5a5',
          'stroke-width': 3
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: [markerCoords1[2], markerCoords1[3]]
        },
        properties: {
          'stroke': '#9b9b9b',
          'stroke-width': 3
        }
      }
    ]
  };
  
  map1.on('load', function() {
    map1.addSource('line', {
      type: 'geojson',
      data: featureCollection1
    });
  
    map1.addLayer({
      id: 'line-layer',
      type: 'line',
      source: 'line',
      paint: {
        'line-color': ['get', 'stroke'],
        'line-width': ['get', 'stroke-width']
      }
    });
  });
  
  var map2 = new mapboxgl.Map({
    container: 'map2',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [-122.431297, 37.773972],
    zoom: 5
  });
  
  const markerCoords2 = [
    [-122.431297, 37.773972],
    [-122.240963, 37.804406],
    [-122.168574, 37.427962],
    [72.911453,  20.385181]
  ];
  
  const markers2 = markerCoords2.map((coord, index) => {
    const color = (index === 3) ? '#9b9b9b' : '#55d5a5';
    return new mapboxgl.Marker({ color })
      .setLngLat(coord)
      .addTo(map2);
  });
  
  const featureCollection2 = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: markerCoords2.slice(0, 3)
        },
        properties: {
          'stroke': '#55d5a5',
          'stroke-width': 3
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: [markerCoords2[2], markerCoords2[3]]
        },
        properties: {
          'stroke': '#9