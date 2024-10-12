"use client"
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

export function Modal() {
  return (
    <Dialog>
      <DialogTrigger className="flex items-center">
        <PlusCircle className="h-4 w-4 mr-2" />
        Cadastrar máquinas
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Cadastrar máquinas </DialogTitle>
          <DialogDescription>
            Por favor cadastre sua máquina nos campos abaixos:
          </DialogDescription>
        </DialogHeader>
        <FormFormik />
      </DialogContent>
    </Dialog>
  );
}
