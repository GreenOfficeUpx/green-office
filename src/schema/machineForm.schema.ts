import * as yup from "yup";

export const machineFormSchema = yup.object().shape({
  name: yup.string().required("Nome é obrigatório"),
  kwh: yup.number().required("Kilowatts é obrigatório"),
});

export const machineEditFormSchema = yup.object().shape({
  name: yup.string().required("Nome é obrigatório"),
  kwh: yup.number().required("Kilowatts é obrigatório"),
});

export const initialMachineFormValues = {
  name: "",
  kwh: ""
}
