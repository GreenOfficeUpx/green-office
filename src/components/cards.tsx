import { Bolt, Settings, Cpu } from "lucide-react";
import { EditInformations } from "./edit-informations";

const machines = [
  {
    name: "Máquina X",
    consumption: "120 kWh",
    icon: <Bolt />,
  },
  {
    name: "Máquina Z",
    consumption: "150 kWh",
    icon: <Settings />,
  },
  {
    name: "Máquina Y",
    consumption: "180 kWh",
    icon: <Cpu />,
  },
  {
    name: "Máquina X",
    consumption: "120 kWh",
    icon: <Bolt />,
  },
  {
    name: "Máquina Z",
    consumption: "150 kWh",
    icon: <Settings />,
  },
  {
    name: "Máquina Y",
    consumption: "180 kWh",
    icon: <Cpu />,
  },
  {
    name: "Máquina X",
    consumption: "120 kWh",
    icon: <Bolt />,
  },
  {
    name: "Máquina Z",
    consumption: "150 kWh",
    icon: <Settings />,
  },
  {
    name: "Máquina Y",
    consumption: "180 kWh",
    icon: <Cpu />,
  },
  {
    name: "Máquina X",
    consumption: "120 kWh",
    icon: <Bolt />,
  },
  {
    name: "Máquina Z",
    consumption: "150 kWh",
    icon: <Settings />,
  },
  {
    name: "Máquina Y",
    consumption: "180 kWh",
    icon: <Cpu />,
  },
];

export function Cards() {
  return (
    <div className="flex items-center justify-center p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[1200px]">
        {machines.map((machine, index) => (
          <div
            key={index}
            className="h-30 bg-[#a9ff95] rounded p-5 flex justify-between shadow-2xl"
          >
            <div className="flex items-center justify-center text-2xl">
              {machine.icon}
            </div>
            <div className="text-center text-lg md:text-start">
              <p>{machine.name}</p>
              <p className="text-base font-medium text-gray-500">
                Consumo: {machine.consumption}
              </p>
            </div>
            <div className="cursor-pointer flex justify-center">
              <EditInformations />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
