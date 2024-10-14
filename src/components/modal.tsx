"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FormFormik } from "./form";
import { PlusCircle } from "lucide-react";

interface ModalProps {
  getMachine: any;
  machine?: {
    id: number;
    name: string;
    kwh: string;
  };
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export function Modal({ getMachine, machine, isOpen, setIsOpen }: ModalProps) {
  const handleModalClose = () => {
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {!machine && (
          <button className="flex items-center">
            <PlusCircle className="h-4 w-4 mr-2" />
            Cadastrar máquinas
          </button>
        )}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{machine ? "Editar máquina" : "Cadastrar máquina"}</DialogTitle>
          <DialogDescription>
            {machine
              ? "Edite os dados da máquina nos campos abaixo:"
              : "Por favor cadastre sua máquina nos campos abaixos:"}
          </DialogDescription>
        </DialogHeader>
        <FormFormik
          getMachine={getMachine}
          setIsOpen={handleModalClose}
          machine={machine}
        />
      </DialogContent>
    </Dialog>
  );
}
