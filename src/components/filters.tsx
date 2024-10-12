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

export function Filters() {
  return (
    <>
      <div className="flex flex-col gap-10 px-20">
        <div className="md:flex items-center gap-2 w-full justify-center">
          <span className="text-sm font-semibold text-white">Filtros:</span>
          <Select defaultValue="all"> 
            <SelectTrigger className="h-10 w-full mt-2 md:mt-0 text-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos os nomes</SelectItem>
              <SelectItem value="1">Máquina X</SelectItem>
              <SelectItem value="2">Máquina Y</SelectItem>
              <SelectItem value="2">Máquina Z</SelectItem>
            </SelectContent>
          </Select>
          <Button className="submit w-full mt-2 md:mt-0" variant="secondary">
            <Search className="h-4 w-4 mr-2" />
            Filtrar resultados
          </Button>
          <Button className="button w-full mt-2 md:mt-0" variant="outline">
            <X className="h-4 w-4 mr-2" />
            Remover filtros
          </Button>
          <Button className="button w-full mt-2 md:mt-0" variant="outline">
            <Modal/>
          </Button>
        </div>
      </div>
    </>
  );
}
