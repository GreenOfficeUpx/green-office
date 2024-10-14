import { MoreVertical, Pencil, Trash } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";
import { useState } from "react";
import api from "@/services";
import { Modal } from "./modal";

interface EditInformationsProps {
  machine: {
    id: number;
    name: string;
    kwh: string;
  };
  getMachine: any;
}

export function EditInformations({
  machine,
  getMachine,
}: EditInformationsProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = async (id: number) => {
    try {
      await api.delete(`/api/machines/${id}`);
      toast.success("Máquina deletada com sucesso!");
      getMachine();
    } catch (error) {
      console.error(error);
      toast.error("Ocorreu um erro ao deletar a máquina.");
    }
  };

  const handleEdit = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <MoreVertical />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="md:w-56">
          <DropdownMenuLabel>Ações</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer" onClick={handleEdit}>
            <Pencil className="mr-2 h-4 w-4" />
            <span>Editar máquina</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => handleDelete(machine.id)}
          >
            <Trash className="mr-2 h-4 w-4" />
            <span>Excluir máquina</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Modal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        machine={machine}
        getMachine={getMachine}
      />
    </>
  );
}
