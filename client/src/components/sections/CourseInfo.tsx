import { Clock, BookOpen, Layers, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export function CourseInfo() {
  const modules = [
    "Fundamentos de IA e Machine Learning",
    "Engenharia de Prompts Avançada",
    "Ferramentas de IA Generativa no Dia a Dia",
    "Ética, Segurança e Governança em IA",
    "Projeto Final: Solução Aplicada",
  ];

  const features = [
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Duração",
      description: "60 horas de imersão profunda.",
      content: "Um formato intensivo desenhado para profissionais que precisam de resultados rápidos sem perder a densidade teórica. Aulas ao vivo com mentoria direta de especialistas de mercado."
    },
    {
      icon: <Layers className="w-8 h-8 text-accent" />,
      title: "Grade Curricular",
      description: "Do zero à implementação prática.",
      content: "Nossa grade foi validada por diretores de tecnologia das maiores empresas de SP. Cobrimos desde a matemática por trás dos modelos até o deploy de soluções utilizando APIs modernas."
    },
    {
      icon: <BookOpen className="w-8 h-8 text-primary" />,
      title: "Conteúdo e Prática",
      description: "Hands-on desde o primeiro dia.",
      content: "Esqueça cursos puramente teóricos. Você construirá agentes autônomos, fluxos de automação e modelos preditivos em laboratórios virtuais equipados com a mais recente tecnologia."
    }
  ];

  return (
    <section id="course" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre o <span className="text-gradient">Treinamento</span></h2>
          <p className="text-lg text-muted-foreground">
            O SUCESU Academy foi estruturado para preencher a lacuna entre a teoria acadêmica e as necessidades reais do mercado corporativo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-background rounded-3xl p-8 border border-border hover:shadow-xl hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2 text-foreground">{feature.title}</h3>
              <p className="font-semibold text-primary mb-4">{feature.description}</p>
              <p className="text-muted-foreground leading-relaxed">
                {feature.content}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 glass-dark rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
          {/* decorative gradient meshes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">O que você vai dominar</h3>
              <p className="text-white/80 text-lg mb-8">
                Ao concluir o SUCESU Academy, você estará apto a liderar iniciativas de inteligência artificial na sua empresa, otimizando processos e criando novos produtos.
              </p>
              
              <div className="space-y-4">
                {modules.map((module, i) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    key={i} 
                    className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10"
                  >
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                    <span className="font-medium text-white/90">{module}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="relative h-full min-h-[300px] rounded-2xl overflow-hidden border border-white/20">
              {/* professional tech corporate diverse team learning */}
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop" 
                alt="Turma de Tecnologia" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
