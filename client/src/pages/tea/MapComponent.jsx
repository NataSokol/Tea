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
import { Style, Fill, Stroke, Circle,Icon } from "ol/style";
import Overlay from "ol/Overlay";
import { Select } from "ol/interaction";
import { pointerMove } from "ol/events/condition";
import { useNavigate } from "react-router-dom";

const MapComponent = ({ teas, setTeas }) => {  
  const navigate = useNavigate();
  const mapRef = useRef(null); // Реф для карты
  const [popup, setPopup] = useState({
    visible: false,
    position: [0, 0],
    name: "",
    description: "",
  });

  useEffect(() => {
    const coordinates = teas;
    const features = coordinates.map((coord) => {
      const feature = new Feature({
        geometry: new Point(fromLonLat([coord.coordX, coord.coordY])),
      });
      feature.setStyle(
        new Style({
          image: new Icon({
            src: "http://localhost:3000/img/icon-point.png", // Замените на URL вашей иконки с коноплей
            scale: 0.5,
          }),
        })
      );
      feature.set("title", coord.title);
      feature.set("description", coord.description);
      feature.set("id", coord.id);
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

    map.on("click", function (event) {
      map.forEachFeatureAtPixel(event.pixel, function (feature) {
        const id = feature.values_.id;
        navigate(`/teas/${id}`);
        //  window.location = "/"
      });
    });
    // Обработчик для отображения всплывающего окна при наведении
    map.on("pointermove", (event) => {
      const pixel = map.getEventPixel(event.originalEvent);
      const feature = map.getFeaturesAtPixel(pixel)[0];
      if (feature) {
        const title = feature.get("title");
        const description = feature.get("description");
        const coordinates = feature.getGeometry().getCoordinates();
        setPopup({
          visible: true,
          position: [event.originalEvent.clientX, event.originalEvent.clientY],
          title,
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
      <div ref={mapRef} style={{ width: "400%", height: "500px" }} />
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
          <div>
            <strong>{popup.title}</strong>
          </div>
          <div>{popup.description}</div>
        </div>
      )}
    </div>
  );
};

export default MapComponent;
