"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const contactSchema = z.object({
    name: z.string().min(1, "O nome é obrigatório"),
    email: z.string().email("Email inválido"),
    message: z.string().min(10, "A mensagem deve ter pelo menos 10 caracteres"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isSubmitSuccessful },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error("Erro ao enviar formulário");
            }

            reset();
            alert("Mensagem enviada com sucesso!");
        } catch (error) {
            console.error(error);
            alert("Falha ao enviar mensagem.");
        }
    };


    return (
        <div className="my-10">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-md space-y-6"
            >
                <h2 className="text-sm text-center font-semibold text-gray-800">Entre em contato</h2>

                <div>
                    <label className="block text-small font-medium text-gray-700">Nome</label>
                    <input
                        type="text"
                        {...register("name")}
                        className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-primary-color"
                    />
                    {errors.name && <p className="text-red-500 text-small">{errors.name.message}</p>}
                </div>

                <div>
                    <label className="block text-small font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        {...register("email")}
                        className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-primary-color"
                    />
                    {errors.email && <p className="text-red-500 text-small">{errors.email.message}</p>}
                </div>

                <div>
                    <label className="block text-small font-medium text-gray-700">Mensagem</label>
                    <textarea
                        rows={5}
                        {...register("message")}
                        className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-primary-color"
                    />
                    {errors.message && <p className="text-red-500 text-small">{errors.message.message}</p>}
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary-color text-white py-2 px-4 rounded-md hover:bg-hover-color transition-colors"
                >
                    {isSubmitting ? "Enviando..." : "Enviar"}
                </button>

                {isSubmitSuccessful && (
                    <p className="text-green-600 text-sm mt-2">Mensagem enviada com sucesso!</p>
                )}
            </form>
        </div>
    );
}
