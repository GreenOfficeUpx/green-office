"use client";

import { Formik, Form, ErrorMessage } from "formik";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { Label } from "./ui/label";

import api from "@/services";
import { useState } from "react";
import {
  initialMachineFormValues,
  machineFormSchema,
} from "@/schema/machineForm.schema";

interface IMachineValues {
  name: string;
  kwh: string;
}

interface FormFormikProps {
  getMachine: () => void;
  setIsOpen: (isOpen: boolean) => void;
  isEdit?: boolean;
  machineId?: string;
  machine?: IMachineValues;
}

export function FormFormik({
  getMachine,
  setIsOpen,
  isEdit = false,
  machineId,
  machine,
}: FormFormikProps) {
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (
    values: IMachineValues,
    { setSubmitting }: any
  ) => {
    try {
      setLoading(true);
      const response = await api.post("/api/machines", values);
      console.log(response.data);
      toast.success("Máquina cadastrada com sucesso!");
      setIsOpen(false);
      getMachine();
    } catch (error) {
      toast.error("Ocorreu um erro ao cadastrar a máquina.");
      console.error(error);
    } finally {
      setLoading(false);
      setSubmitting(false);
    }
  };

  const handleFormEdit = async (
    values: IMachineValues,
    { setSubmitting }: any
  ) => {
    try {
      setLoading(true);
      const response = await api.put(`/api/machines/${machineId}`, values);
      console.log(response.data);
      toast.success("Máquina editada com sucesso!");
      setIsOpen(false);
      getMachine();
    } catch (error) {
      toast.error("Ocorreu um erro ao editar a máquina.");
      console.error(error);
    } finally {
      setLoading(false);
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={machine ? machine : initialMachineFormValues}
      validationSchema={machineFormSchema}
      onSubmit={(values, actions) => {
        if (isEdit) {
          handleFormEdit(values, actions);
        } else {
          handleFormSubmit(values, actions);
        }
      }}
    >
      {({ isSubmitting, values, handleChange }) => (
        <Form className="w-full">
          <div className="w-full lg:flex lg:flex-row lg:items-center lg:justify-between lg:gap-4">
            <div className="mb-4 w-full">
              <Label htmlFor="name" className="block text-sm font-medium">
                Nome da máquina
              </Label>
              <Input
                type="text"
                placeholder="Digite o nome da máquina"
                value={values?.name}
                id="name"
                name="name"
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
              />
              <ErrorMessage
                name="name"
                component="p"
                className="text-red-500 text-xs italic"
              />
            </div>
          </div>

          <div className="w-full lg:flex lg:items-center lg:justify-between lg:gap-4">
            <div className="mb-4 w-full">
              <Label htmlFor="kwh" className="block text-sm font-medium">
                Kilowatts
              </Label>
              <Input
                type="text"
                id="kwh"
                value={values?.kwh}
                placeholder="Digite o número de kilowatts"
                name="kwh"
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
              />
              <ErrorMessage
                name="kwh"
                component="p"
                className="text-red-500 text-xs italic"
              />
            </div>
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {loading
              ? "Processando..."
              : machine
              ? "Editar alterações"
              : "Cadastrar"}
          </Button>
        </Form>
      )}
    </Formik>
  );
}
