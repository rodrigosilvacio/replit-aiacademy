import { Clock, BookOpen, Layers, CheckCircle2, Calendar, MapPin, Monitor } from "lucide-react";
import { motion } from "framer-motion";
import gradeImg from "@assets/O_que_você_vai_dominar_1772481608704.jpg";

export function CourseInfo() {
  const modules = [
    "Fundamentos de IA e Machine Learning",
    "Engenharia de Prompts Avançada",
    "Ferramentas de IA Generativa no Dia a Dia",
    "Ética, Segurança e Governança em IA",
    "Projeto Final: Solução Aplicada com Github, Lovable, n8n e ElevenLabs",
  ];

  const features = [
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Duração",
      description: "12 horas de imersão profunda.",
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
            O SUCESU SP Academy foi estruturado para preencher a lacuna entre a teoria acadêmica e as necessidades reais do mercado corporativo.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8"
        >
          <div className="flex items-center gap-2 mb-5">
            <Calendar className="w-5 h-5 text-primary" />
            <span className="font-bold text-primary uppercase tracking-wider text-sm">Datas e Horários</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-5 border border-border flex gap-4 items-start">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Monitor className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Remoto</p>
                <p className="font-bold text-foreground text-lg">18/05 (segunda)</p>
                <p className="text-muted-foreground text-sm">19h às 21h</p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-5 border border-border flex gap-4 items-start">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Monitor className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Remoto</p>
                <p className="font-bold text-foreground text-lg">20/05 (quarta)</p>
                <p className="text-muted-foreground text-sm">19h às 21h</p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-5 border border-border flex gap-4 items-start">
              <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <MapPin className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">Presencial</p>
                <p className="font-bold text-foreground text-lg">22/05 (sexta)</p>
                <p className="text-muted-foreground text-sm">8h30 às 17h30</p>
                <div className="flex items-start gap-1 mt-2">
                  <MapPin className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground text-xs leading-tight">Rua Harmonia, 1250 – Vila Madalena, São Paulo – SP</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

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

        <div id="grade" className="mt-20 glass-dark rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
          {/* decorative gradient meshes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">O que você vai dominar</h3>
              <p className="text-white/80 text-lg mb-8">
                Ao concluir o SUCESU SP Academy, você estará apto a liderar iniciativas de inteligência artificial na sua empresa, otimizando processos e criando novos produtos.
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
                src={gradeImg} 
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
