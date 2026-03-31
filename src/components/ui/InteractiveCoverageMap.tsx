import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const markerIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const points = [
  {
    label: "Sede - Jarinu/SP",
    description: "Atendimento técnico e logística própria.",
    position: [-23.1033, -46.7283] as [number, number],
  },
  {
    label: "Campinas/SP",
    description: "Suporte em indústrias e centros de distribuição.",
    position: [-22.9099, -47.0626] as [number, number],
  },
  {
    label: "Pouso Alegre/MG",
    description: "Cobertura no Sul de Minas.",
    position: [-22.229, -45.9386] as [number, number],
  },
  {
    label: "Resende/RJ",
    description: "Divisa RJ com atuação operacional.",
    position: [-22.4683, -44.4467] as [number, number],
  },
];

export function InteractiveCoverageMap() {
  return (
    <div className="h-full min-h-[300px] sm:min-h-[360px] lg:min-h-[430px] w-full overflow-hidden rounded-3xl border border-zinc-200 shadow-xl">
      <MapContainer
        center={[-22.95, -46.45]}
        zoom={8}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {points.map((point) => (
          <Marker key={point.label} position={point.position} icon={markerIcon}>
            <Popup>
              <strong>{point.label}</strong>
              <br />
              {point.description}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
