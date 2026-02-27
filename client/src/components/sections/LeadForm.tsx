import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useCreateLead } from "@/hooks/use-leads";
import { api } from "@shared/routes";

// Using the exact input schema defined in the routes
type FormData = z.infer<typeof api.leads.create.input>;

export function LeadForm() {
  const { toast } = useToast();
  const createLead = useCreateLead();

  const form = useForm<FormData>({
    resolver: zodResolver(api.leads.create.input),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const onSubmit = (data: FormData) => {
    createLead.mutate(data, {
      onSuccess: () => {
        toast({
          title: "Inscrição confirmada!",
          description: "Entraremos em contato com as próximas novidades.",
        });
        form.reset();
      },
      onError: (error) => {
        toast({
          title: "Erro na inscrição",
          description: error.message,
          variant: "destructive",
        });
      },
    });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#001A40]" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-16 text-center border border-border"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
            <Send className="w-8 h-8" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Fique por dentro das novidades
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Deixe seu e-mail para receber conteúdos exclusivos, convites para eventos e detalhes sobre as próximas turmas do SUCESU Academy.
          </p>

          <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-xl mx-auto space-y-4 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-semibold text-foreground">Nome Completo</label>
                <input
                  id="name"
                  {...form.register("name")}
                  className="w-full px-5 py-4 rounded-xl bg-background border-2 border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-200"
                  placeholder="Seu nome"
                />
                {form.formState.errors.name && (
                  <p className="text-sm text-destructive">{form.formState.errors.name.message}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-foreground">E-mail Profissional</label>
                <input
                  id="email"
                  type="email"
                  {...form.register("email")}
                  className="w-full px-5 py-4 rounded-xl bg-background border-2 border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-200"
                  placeholder="voce@empresa.com"
                />
                {form.formState.errors.email && (
                  <p className="text-sm text-destructive">{form.formState.errors.email.message}</p>
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={createLead.isPending}
              className="w-full mt-4 px-8 py-4 rounded-xl font-bold text-white bg-primary shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none transition-all duration-200 flex justify-center items-center gap-2"
            >
              {createLead.isPending ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Enviando...
                </>
              ) : (
                "Quero receber novidades"
              )}
            </button>
            <p className="text-xs text-center text-muted-foreground mt-4">
              Ao se inscrever, você concorda com nossa Política de Privacidade.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
