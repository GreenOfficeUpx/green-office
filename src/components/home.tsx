"use client"
import { Toaster } from "sonner";
import CircularProgressBar from "./circular-progress";
import { Filters } from "./filters";
import { Header } from "./header";
import { Cards } from "./cards";

export function HomeDashboard() {
  return (
    <>
      <Header />
      <Filters />
      <Toaster richColors />
    </>
  );
}
