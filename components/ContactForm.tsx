"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";
import SuccessMsg from "./SuccessMsg";

const ContactForm = () => {
  const { toast } = useToast();
  const [status, setStatus] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Address: "",
    Message: "",
    Service: "",
  });
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSelectChange = (value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      Service: value,
    }));
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (!formData.Name.trim() || !formData.Email.trim()) {
        toast({
          title: "Error: Something is wrong",
          description: "Please input your name and email to continue",
          variant: "destructive",
        });
        return;
      }
      const form = new FormData();
      const currentDateTime = new Date().toLocaleString();
      form.append("Name", formData.Name);
      form.append("Email", formData.Email);
      form.append("Phone", formData.Phone);
      form.append("Address", formData.Address);
      form.append("Message", formData.Message);
      form.append("Service", formData.Service);
      form.append("DateTime", currentDateTime);

      const response = await fetch("https://getform.io/f/bvrrjxwb", {
        method: "POST",
        body: form,
      });
      if (response?.ok) {
        setSuccess(true);
        setStatus("¡éxito! Tu mensaje ha sido enviado");
        setFormData({
          Name: "",
          Email: "",
          Phone: "",
          Address: "",
          Message: "",
          Service: "",
        });
      } else {
        setStatus("Error! Unable to send your message.");
      }
    } catch (error) {
      console.error("Data submitting Error", error);
      setStatus("Error! Something went wrong.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="space-y-4">
      <h3 className="text-2xl md:text-4xl text-lightSky">
        Ingetec-Prev Nº VP/T 1894
      </h3>
      <p>
        Se formó ante la necesidad de las empresas de contar con asesoramiento y
        apoyo especializado en materia de prevención de riesgos laborales.
      </p>
      <>
        {success ? (
          <SuccessMsg status={status} />
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <Input
                type="text"
                id="Name"
                name="Name"
                required
                placeholder="Su nombre"
                value={formData.Name}
                onChange={handleChange}
                disabled={loading}
                className=" disabled:bg-white/10"
              />
              <Input
                type="email"
                id="Email"
                name="Correo electrónico"
                required
                placeholder="Email address"
                value={formData.Email}
                onChange={handleChange}
                disabled={loading}
                className=" disabled:bg-white/10"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <Input
                type="text"
                id="Phone"
                name="Phone"
                placeholder="Numero de teléfono"
                value={formData.Phone}
                onChange={handleChange}
                disabled={loading}
                className=" disabled:bg-white/10"
              />
              <Input
                type="text"
                id="Address"
                name="Address"
                placeholder="Ciudad"
                value={formData.Address}
                onChange={handleChange}
                disabled={loading}
                className=" disabled:bg-white/10"
              />
            </div>
            <Textarea
              name="Message"
              placeholder="Text here"
              rows={5}
              value={formData.Message}
              onChange={handleChange}
              disabled={loading}
              className=" disabled:bg-white/10"
            />
            <Select
              onValueChange={handleSelectChange}
              disabled={loading}
            >
              <SelectTrigger>
                <SelectValue placeholder="Seleccione un servicio" />
              </SelectTrigger>
              <SelectContent className="bg-bodyColor text-white border-white/20">
                <SelectGroup>
                  <SelectLabel>Seleccione un servicio</SelectLabel>
                  {/* <SelectItem value="servicio">Servicios</SelectItem> */}
                  <SelectItem value="Prevención de riesgos laborales">
                    Prevención de riesgos laborales
                  </SelectItem>
                  <SelectItem value="Seguridad en el trabajo">
                    Seguridad en el trabajo
                  </SelectItem>
                  <SelectItem value="Normativa de seguridad laboral">
                    Normativa de seguridad laboral
                  </SelectItem>
                  <SelectItem value="Salud ocupacional">
                    Salud ocupacional
                  </SelectItem>
                  <SelectItem value="Gestión de riesgos laborales">
                    Gestión de riesgos laborales
                  </SelectItem>
                  <SelectItem value="Identificación de peligros">
                    Identificación de peligros
                  </SelectItem>
                  <SelectItem value="Evaluación de riesgos">
                    Evaluación de riesgos
                  </SelectItem>
                  <SelectItem value="Medidas preventivas">
                    Medidas preventivas
                  </SelectItem>
                  <SelectItem value="Cultura de seguridad">
                    Cultura de seguridad
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Button
              disabled={loading}
              type="submit"
              className="w-full py-4 bg-lightSky/5 text-white/80 border border-lightSky/20 hover:bg-lightSky/10 hover:border-lightSky hover:text-hoverColor hoverEffect"
            >
              {loading ? "Submitting message..." : "Send Message"}
            </Button>
          </form>
        )}
      </>
    </div>
  );
};

export default ContactForm;
