"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Label } from "@/components/ui/label";
import { useFormik } from "formik";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  initialLoginFormValues,
  loginFormSchema,
} from "@/schema/loginForm.schema";
import Image from "next/image";
import logo from "@/assets/logo.png";

interface ILoginInfo {
  email: string;
  password: string;
}

export function Login() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const loginFormik = useFormik({
    initialValues: initialLoginFormValues,
    validationSchema: loginFormSchema,
    onSubmit: (values) => handleLoginSubmit(values),
  });

  const mockUser = {
    email: "admin@admin.com",
    password: "123123",
  };

  const handleLoginSubmit = (values: ILoginInfo) => {
    setLoading(true);
    if (values.password.length < 6) {
      toast.error("A senha deve ter pelo menos 6 caracteres.");
      setLoading(false);
      return;
    }

    if (
      values.email === mockUser.email &&
      values.password === mockUser.password
    ) {
      toast.success("Usuário logado com sucesso!");
      setLoading(false);
      router.push("/dashboard");
    } else {
      toast.error("Credenciais incorretas!");
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-300 shadow-2xl p-5 md:p-0">
      <div className="flex flex-col md:flex-row w-full max-w-6xl bg-white rounded-xl shadow-2xl">
        <form
          className="flex flex-col md:w-1/2 p-6 md:p-10 md:mt-14"
          onSubmit={loginFormik.handleSubmit}
        >
          <div className="text-center mb-6">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar sistema
            </h1>
            <p className="text-sm text-gray-600">
              Faça login para acessar o sistema.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <Label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                E-mail
              </Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={loginFormik.values.email}
                placeholder="Insira seu e-mail"
                onChange={loginFormik.handleChange}
                className="mt-1 p-2 border rounded-md w-full"
              />
              {loginFormik.errors?.email && loginFormik.touched?.email && (
                <span className="text-red-500 text-sm border-red-500">
                  {loginFormik.errors.email}
                </span>
              )}
            </div>
            <div>
              <Label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Senha
              </Label>
              <Input
                type="password"
                id="password"
                name="password"
                value={loginFormik.values.password}
                placeholder="Insira sua senha"
                onChange={loginFormik.handleChange}
                className="mt-1 p-2 border rounded-md w-full"
              />
              {loginFormik.errors?.password &&
                loginFormik.touched?.password && (
                  <span className="text-red-500 text-sm">
                    {loginFormik.errors.password}
                  </span>
                )}
            </div>
          </div>
          <Button
            disabled={loading}
            variant="default"
            type="submit"
            className="bg-gradient-to-r from-[#20992f] to-[#184f20] text-white text-lg w-full rounded-md h-14 mt-20 hover:bg-black hover:bg-none hover:text-green-500"
          >
            Login
          </Button>
        </form>
        <div className="hidden md:flex md:w-1/2 justify-center items-center p-10 bg-gradient-to-b from-[#20992f] to-[#184f20] rounded-tl-[80px] rounded-br-xl rounded-tr-xl">
          <Image src={logo} alt="Background" className=" w-full " />
        </div>
      </div>
    </div>
  );
}

export default Login;
