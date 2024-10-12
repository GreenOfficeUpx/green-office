"use client";

import { Formik, Form, ErrorMessage } from "formik";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { Label } from "./ui/label";
import {
  initialUserFormValues,
  userFormSchema,
} from "@/schema/userForm.schema";

export function FormFormik() {
  const handleFormSubmit = (values: any, { setSubmitting }: any) => {
    console.log(values);
    setSubmitting(false);
    toast.success("Usuário cadastrado com sucesso!");
  };

  function handleCreateError() {
    toast.error(
      "Nossa base de usuário está cheia no momento, tente novamente mais tarde."
    );
  }

  return (
    <Formik
      initialValues={initialUserFormValues}
      validationSchema={userFormSchema}
      onSubmit={handleFormSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="w-full">
          <div className="w-full lg:flex lg:flex-row lg:items-center lg:justify-between lg:gap-4">
            <div className="mb-4 w-full">
              <Label htmlFor="name" className="block text-sm font-medium">
                Nome da máquina
              </Label>
              <Input
                type="text"
                placeholder="Digite o nome da máquina"
                id="name"
                name="name"
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
              <Label htmlFor="phone" className="block text-sm font-medium">
                Kilowatts
              </Label>
              <Input
                type="text"
                id="phone"
                placeholder="Digite o número de kilowatts"
                name="phone"
                className="mt-1 p-2 w-full border rounded-md"
              />
              <ErrorMessage
                name="phone"
                component="p"
                className="text-red-500 text-xs italic"
              />
            </div>
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Cadastrando..." : "Cadastrar"}
          </Button>
        </Form>
      )}
    </Formik>
  );
}
