// src/MapComponent.jsx
import React, { useEffect, useRef, useState } from "react";
import "ol/ol.css";
import { fromLonLat } from "ol/proj";
import { Map, View } from "ol";
import { Tile as TileLayer } from "ol/layer";
import OSM from "ol/source/OSM";
import { Vector as VectorLayer } from "ol/layer";
import VectorSource from "ol/source/Vector";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import { Style, Fill, Stroke, Circle } from "ol/style";
import Overlay from "ol/Overlay";
import { Select } from "ol/interaction";
import { pointerMove } from "ol/events/condition";

const MapComponent = () => {
  const mapRef = useRef(null); // Реф для карты
  const [popup, setPopup] = useState({
    visible: false,
    position: [0, 0],
    name: "",
    description: "",
  });

  useEffect(() => {
    const coordinates = [
      {
        coords: [37.6173, 55.7558],
        name: "Москва",
        description: "Липтон",
      },
      {
        coords: [30.3158, 59.9342],
        name: "Санкт-Петербург",
        description: "ЭрлГрэй",
      },
      {
        coords: [43.2405, 76.9456],
        name: "Алматы",
        description: "Уруру",
      },
      {
        coords: [74.6176, 42.8311],
        name: "Бишкек",
        description: "Получилось",
      },
    ];

    const features = coordinates.map((coord) => {
      const feature = new Feature({
        geometry: new Point(fromLonLat(coord.coords)),
      });
      feature.setStyle(
        new Style({
          image: new Circle({
            radius: 8,
            fill: new Fill({ color: "blue" }),
            stroke: new Stroke({ color: "white", width: 2 }),
          }),
        })
      );
      feature.set("name", coord.name);
      feature.set("description", coord.description);
      return feature;
    });

    const vectorSource = new VectorSource({
      features: features,
    });

    const vectorLayer = new VectorLayer({
      source: vectorSource,
    });

    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        vectorLayer,
      ],
      view: new View({
        center: fromLonLat([37.6173, 55.7558]),
        zoom: 3,
      }),
    });

    // Обработчик для отображения всплывающего окна при наведении
    map.on('pointermove', (event) => {
      const pixel = map.getEventPixel(event.originalEvent);
      const feature = map.getFeaturesAtPixel(pixel)[0];
      if (feature) {
        const name = feature.get("name");
        const description = feature.get("description");
        const coordinates = feature.getGeometry().getCoordinates();
        setPopup({
          visible: true,
          position: [event.originalEvent.clientX, event.originalEvent.clientY],
          name,
          description,
        });
      } else {
        setPopup({
          visible: false,
          position: [0, 0],
          name: "",
          description: "",
        });
      }
    });

    return () => {
      map.setTarget(undefined); // Очистка карты при размонтировании
    };
  }, []);

  return (
    <div>
      <div ref={mapRef} style={{ width: "100%", height: "500px" }} />
      {popup.visible && (
        <div
          style={{
            position: "absolute",
            background: "white",
            padding: "10px",
            border: "1px solid black",
            borderRadius: "3px",
            transform: "translate(-50%, -100%)",
            top: `${popup.position[1]}px`,
            left: `${popup.position[0]}px`,
          }}
        >
          <div><strong>{popup.name}</strong></div>
          <div>{popup.description}</div>
        </div>
      )}
    </div>
  );
};

export default MapComponent;
