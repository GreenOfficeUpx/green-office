import * as yup from "yup";

export const userFormSchema = yup.object().shape({
  email: yup.string().email("Email inválido").required("Email é obrigatório"),
  password: yup.string().required("Senha é obrigatória"),
  name: yup.string().required("Nome é obrigatório"),
  status: yup.string().required("Status é obrigatório"),
  cpf: yup.string().required("Cpf é obrigatório"),
  phone: yup.string().required("Telefone é obrigatório"),
  address: yup.string().required("Endereço é obrigatório"),
  neighborhood: yup.string().required("Bairro é obrigatório")
});

export const userEditFormSchema = yup.object().shape({
  email: yup.string().email("Email inválido").required("Email é obrigatório"),
  name: yup.string().required("Nome é obrigatório"),
  status: yup.string().required("Status é obrigatório")
});

export const initialUserFormValues = {
  email: "",
  password: "",
  name: "",
  phone: "",
  status:  "",
  cpf: "",
  address: "",
  neighborhood: ""
}
