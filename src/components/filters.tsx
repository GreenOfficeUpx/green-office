import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, X } from "lucide-react";
import { Modal } from "./modal";
import api from "@/services";
import { useEffect, useState } from "react";
import { Cards } from "./cards";
import CircularProgressBar from "./circular-progress";

export function Filters() {
  const [loading, setLoading] = useState<boolean>(false);
  const [machinesList, setMachinesList] = useState<any[]>([]);
  const [filteredMachines, setFilteredMachines] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedMachine, setSelectedMachine] = useState<string>("all");

  const getMachine = async () => {
    setLoading(true);
    try {
      const response = await api.get("/api/machines");
      setMachinesList(response.data);
      setFilteredMachines(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getMachine();
  }, []);

  const handleFilter = () => {
    if (selectedMachine === "all") {
      setFilteredMachines(machinesList);
    } else {
      const filtered = machinesList.filter(
        (machine) => machine.name === selectedMachine
      );
      setFilteredMachines(filtered);
    }
  };

  const handleClearFilters = () => {
    setSelectedMachine("all");
    setFilteredMachines(machinesList);
  };

  return (
    <>
      <div className="flex flex-col gap-10">
        <div className="md:flex items-center gap-2 w-full justify-center px-12">
          <span className="text-sm font-semibold text-white">Filtros:</span>
          <Select
            value={selectedMachine}
            onValueChange={setSelectedMachine}
            defaultValue="all"
          >
            <SelectTrigger className="h-10 w-full mt-2 md:mt-0 text-white">
              <SelectValue placeholder="Selecione uma máquina" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos os nomes</SelectItem>
              {machinesList.map((machine) => (
                <SelectItem key={machine.id} value={machine.name}>
                  {machine.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button
            className="submit w-full mt-2 md:mt-0"
            variant="secondary"
            onClick={handleFilter}
          >
            <Search className="h-4 w-4 mr-2" />
            Filtrar resultados
          </Button>

          <Button
            className="button w-full mt-2 md:mt-0"
            variant="outline"
            onClick={handleClearFilters}
          >
            <X className="h-4 w-4 mr-2" />
            Remover filtros
          </Button>

          <Button className="button w-full mt-2 md:mt-0" variant="outline">
            <Modal
              getMachine={getMachine}
              isOpen={isModalOpen}
              setIsOpen={setIsModalOpen}
            />
          </Button>
        </div>
        <CircularProgressBar />
        <Cards
          machinesList={filteredMachines}
          loading={loading}
          getMachine={getMachine}
        />
      </div>
    </>
  );
}
