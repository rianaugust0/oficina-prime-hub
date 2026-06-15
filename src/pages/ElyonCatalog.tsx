import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Wrench, 
  ShoppingBag, 
  Utensils, 
  Code2, 
  CheckCircle2, 
  MessageSquare, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight,
  Play
} from "lucide-react";

const ElyonCatalog = () => {
  const products = [
    {
      id: "oficina-prime",
      title: "OficinaPrime",
      icon: Wrench,
      tag: "O mais vendido",
      description: "Sistema completo de gestão para oficinas mecânicas, auto centers, estética automotiva e blindados. Controle total de ordens de serviço, estoque, financeiro e automação de pós-venda.",
      features: [
        "Ordem de Serviço digital com fotos",
        "WhatsApp automático para clientes",
        "Controle financeiro e fluxo de caixa",
        "Histórico de placas e veículos",
        "Módulo de comissões de mecânicos"
      ],
      actionText: "Conhecer OficinaPrime",
      link: "/",
      isExternal: false
    },
    {
      id: "pdv-prime",
      title: "PDVPrime",
      icon: ShoppingBag,
      tag: "Varejo & Comércio",
      description: "Frente de caixa rápida e intuitiva integrada com controle de estoque e emissão fiscal. Perfeita para lojas de autopeças, comércios, minimercados e varejo em geral.",
      features: [
        "Frente de caixa (PDV) ultra rápida",
        "Emissão de NFC-e e NF-e simplificada",
        "Alerta de estoque mínimo",
        "Controle de fiado/credenciamento",
        "Relatórios de lucratividade diária"
      ],
      actionText: "Falar com Consultor",
      link: "https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20PDVPrime",
      isExternal: true
    },
    {
      id: "food-prime",
      title: "FoodPrime",
      icon: Utensils,
      tag: "Bares & Restaurantes",
      description: "Gestão inteligente para restaurantes, lanchonetes, bares e delivery. Comanda eletrônica integrada com cozinha (KDS) e aplicativo de pedidos próprio.",
      features: [
        "Comanda eletrônica via tablet/celular",
        "Cardápio digital via QR Code na mesa",
        "Integração direta com o WhatsApp Delivery",
        "Painel de pedidos da cozinha (KDS)",
        "Controle de mesas e taxas de serviço"
      ],
      actionText: "Falar com Consultor",
      link: "https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20FoodPrime",
      isExternal: true
    },
    {
      id: "custom-dev",
      title: "Projetos Sob Medida",
      icon: Code2,
      tag: "Exclusivo",
      description: "Desenvolvimento de aplicativos, sistemas web e integrações personalizadas para automatizar processos específicos do seu modelo de negócio.",
      features: [
        "Design de interface (UI/UX) exclusivo",
        "Aplicativos iOS e Android nativos",
        "Integração com APIs e bancos de dados",
        "Consultoria de arquitetura de software",
        "Suporte técnico e manutenção evolutiva"
      ],
      actionText: "Solicitar Orçamento",
      link: "https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20de%20sistema%20sob%20medida",
      isExternal: true
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-slate-900 bg-slate-950/80 backdrop-blur-xl">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.3)]">
              <Sparkles className="h-5 w-5 text-slate-950" strokeWidth={2.5} />
            </div>
            <span className="font-semibold text-lg tracking-tight text-white">
              Elyon<span className="text-amber-500">Corporate</span>
            </span>
          </div>
          <div>
            <a 
              href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20uma%20apresentação%20comercial%20dos%20sistemas%20da%20Elyon"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="sm" className="border-slate-800 bg-slate-900 text-white hover:bg-slate-800">
                Falar com Vendas
              </Button>
            </a>
          </div>
        </div>
      </header>

      {/* HERO & VIDEO */}
      <section className="relative overflow-hidden py-16 lg:py-24 border-b border-slate-900 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent opacity-60" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            
            {/* TEXT */}
            <div className="space-y-6 max-w-xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/5 px-4 py-1.5 text-xs font-medium text-amber-500 backdrop-blur">
                <Sparkles className="h-3.5 w-3.5" />
                Soluções Inteligentes em Software
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1]">
                A tecnologia certa para <span className="text-amber-500">escalar</span> o seu negócio.
              </h1>
              <p className="text-lg text-slate-400">
                Criamos e licenciamos plataformas modernas que organizam sua operação, automatizam vendas e encantam seus clientes. Conheça nosso catálogo abaixo.
              </p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-400">
                {["Setup Simplificado", "Suporte Humanizado", "Foco em Resultado"].map((t) => (
                  <div key={t} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4.5 w-4.5 text-amber-500" />
                    {t}
                  </div>
                ))}
              </div>
            </div>

            {/* VIDEO CONTAINER */}
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-amber-500/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl aspect-video flex flex-col items-center justify-center p-6 group cursor-pointer">
                {/* 
                  IMPORTANT: Paste your video embed code here. 
                  Currently rendering a beautiful placeholder preview.
                */}
                <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-all duration-300 flex items-center justify-center">
                  <div className="h-16 w-16 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Play className="h-7 w-7 fill-current ml-1" />
                  </div>
                </div>
                <div className="text-center z-10 pointer-events-none mt-20">
                  <p className="text-white font-bold text-lg">Apresentação Elyon Corporate</p>
                  <p className="text-slate-400 text-sm mt-1">Clique para assistir ao vídeo (1:30)</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PRODUCT LIST */}
      <section className="container mx-auto px-4 py-24">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-500">Nosso Portfólio</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Soluções prontas para crescer.</h2>
          <p className="mt-4 text-lg text-slate-400">
            Selecione a solução que melhor se adapta às necessidades atuais da sua empresa.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {products.map((p) => {
            const Icon = p.icon;
            return (
              <div 
                key={p.id} 
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-900 bg-slate-950 p-8 hover:border-slate-800 hover:bg-slate-900/40 transition-all duration-300 hover:-translate-y-1 shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-amber-500 border border-slate-800 group-hover:bg-amber-500 group-hover:text-slate-950 group-hover:border-transparent transition-all duration-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="inline-flex items-center rounded-full bg-slate-900 border border-slate-800 px-3 py-1 text-xs font-medium text-amber-500">
                      {p.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-400 mb-6">{p.description}</p>

                  <ul className="space-y-3 mb-8">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-500/80" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  {p.isExternal ? (
                    <a href={p.link} target="_blank" rel="noopener noreferrer" className="block w-full">
                      <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white border border-slate-850 hover:border-slate-700 h-11">
                        {p.actionText}
                        <ArrowRight className="h-4 w-4 ml-1.5" />
                      </Button>
                    </a>
                  ) : (
                    <Link to={p.link} className="block w-full">
                      <Button className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold h-11">
                        {p.actionText}
                        <ArrowRight className="h-4 w-4 ml-1.5" />
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* WHY ELYON */}
      <section className="bg-slate-900/50 border-y border-slate-900 py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: "Segurança de Dados",
                desc: "Hospedagem segura em nuvem criptografada com alta disponibilidade, garantindo que as informações do seu negócio estejam sempre protegidas e acessíveis."
              },
              {
                icon: MessageSquare,
                title: "Suporte via WhatsApp",
                desc: "Chega de tickets lentos. Você fala diretamente com nossa equipe de suporte pelo WhatsApp sempre que precisar de auxílio ou novos ajustes."
              },
              {
                icon: Sparkles,
                title: "Evolução Contínua",
                desc: "Nossos sistemas recebem atualizações constantes com novos recursos e correções de segurança, sem custos adicionais para a sua empresa."
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="space-y-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-amber-500 border border-slate-900">
                    <Icon className="h-5.5 w-5.5" />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-400">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-950 bg-slate-950 py-12">
        <div className="container mx-auto px-4 flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-amber-500">
              <Sparkles className="h-4.5 w-4.5 text-slate-950" strokeWidth={2.5} />
            </div>
            <span className="text-sm font-semibold text-white">Elyon Corporate</span>
          </div>
          <p className="text-xs text-slate-500">
            © 2026 Elyon Corporate. Todos os direitos reservados. Soluções que movem negócios.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ElyonCatalog;
