import { EditInformations } from "./edit-informations";
import { BellPlus, LoaderCircle } from "lucide-react";

interface CardsProps {
  machinesList: any[];
  loading: boolean;
  getMachine: any;
}

export function Cards({ machinesList, loading, getMachine }: CardsProps) {
  return (
    <div className="flex items-center justify-center p-10">
      {loading ? (
        <LoaderCircle className="animate-spin size-10" />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[1700px]">
          {machinesList?.map((machine: any, index: number) => (
            <div
              key={index}
              className="h-30 bg-white rounded p-5 flex justify-between shadow-2xl"
            >
              <div className="flex items-center justify-center text-2xl">
                <BellPlus />
              </div>
              <div className="text-center text-lg md:text-start font-bold">
                <p>{machine.name}</p>
                <p className="text-base font-medium text-gray-700">
                  Consumo: {machine.kwh} kwh
                </p>
              </div>
              <div className="cursor-pointer flex justify-center">
                <EditInformations machine={machine} getMachine={getMachine} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
