<template>
    <div
        class="bg-[#050505] text-white font-sans selection:bg-emerald-500 selection:text-black scroll-smooth overflow-x-hidden">
        <div ref="cursorRef" class="custom-cursor" aria-hidden="true"></div>
        <div class="fixed top-0 left-0 right-0 z-[60] h-0.5 bg-white/5">
            <div class="h-full bg-emerald-400" :style="{ width: scrollProgress + '%' }" />
        </div>
        <header class="fixed top-0 left-0 right-0 z-40 bg-[#050505]/90 backdrop-blur-md border-b border-white/5">
            <nav class="max-w-6xl mx-auto px-6 py-3 md:py-4 flex items-center justify-between">
                <a href="#home"
                    class="text-xl font-semibold tracking-tighter text-emerald-400 animate-fade-in-up">SERGIO
                    SCHULTZ</a>
                <div class="hidden md:flex gap-8 text-[11px] uppercase tracking-[0.2em] text-white/50">
                    <a class="transition"
                        :class="activeSection === 'home' ? 'text-emerald-400' : 'hover:text-emerald-400'"
                        href="#home">Home</a>
                    <a class="transition"
                        :class="activeSection === 'projetos' ? 'text-emerald-400' : 'hover:text-emerald-400'"
                        href="#projetos">Projetos</a>
                    <a class="transition"
                        :class="activeSection === 'sobre' ? 'text-emerald-400' : 'hover:text-emerald-400'"
                        href="#sobre">Tecnologias</a>
                    <a class="transition"
                        :class="activeSection === 'proeficiencia' ? 'text-emerald-400' : 'hover:text-emerald-400'"
                        href="#proeficiencia">Sobre</a>
                    <a class="transition"
                        :class="activeSection === 'experiencia' ? 'text-emerald-400' : 'hover:text-emerald-400'"
                        href="#experiencia">Experiência</a>
                    <a class="transition"
                        :class="activeSection === 'contato' ? 'text-emerald-400' : 'hover:text-emerald-400'"
                        href="#contato">Contato</a>
                </div>
                <button class="md:hidden text-emerald-400" @click="toggleMenu">
                    <span v-if="menuOpen">✕</span>
                    <span v-else>☰</span>
                </button>
            </nav>
            <div v-if="menuOpen"
                class="md:hidden absolute left-0 right-0 top-full border-t border-emerald-500/10 bg-[#050505] shadow-lg shadow-black/40">
                <div class="flex flex-col px-6 py-6 gap-4 text-emerald-400 uppercase tracking-[0.25em] text-xs">
                    <a href="#home" @click="toggleMenu"
                        :class="activeSection === 'home' ? 'text-emerald-300' : ''">Home</a>
                    <a href="#projetos" @click="toggleMenu"
                        :class="activeSection === 'projetos' ? 'text-emerald-300' : ''">Projetos</a>
                    <a href="#sobre" @click="toggleMenu"
                        :class="activeSection === 'sobre' ? 'text-emerald-300' : ''">Tecnologias</a>
                    <a href="#proeficiencia" @click="toggleMenu"
                        :class="activeSection === 'proeficiencia' ? 'text-emerald-300' : ''">Sobre</a>
                    <a href="#experiencia" @click="toggleMenu"
                        :class="activeSection === 'experiencia' ? 'text-emerald-300' : ''">Experiência</a>
                    <a href="#contato" @click="toggleMenu"
                        :class="activeSection === 'contato' ? 'text-emerald-300' : ''">Contato</a>
                </div>
            </div>
        </header>

        <main>
            <section id="home"
                class="min-h-screen px-6 md:px-24 pt-18 md:pt-18 flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto relative overflow-hidden">
                <div
                    class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-emerald-500/5 rounded-full blur-[120px] -z-10" />
                <div class="flex-1">
                    <span
                        class="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] sm:tracking-[0.4em] text-emerald-500/60 mb-4 block typing-title">
                        Desenvolvedor Web & Criador de Sistemas Digitais
                    </span>
                    <p class="text-xs md:text-sm text-white/50 font-normal tracking-wide mb-6">
                        Crio sistemas web modernos, funcionais e orientados a resultado.
                    </p>
                    <h1 class="text-5xl md:text-[6vw] font-semibold leading-[0.9] tracking-tighter mb-8">
                        Sergio <br />
                        <span class="italic serif text-emerald-400/90">Schultz</span>
                    </h1>
                    <p
                        class="max-w-xl text-lg text-white/60 font-normal leading-relaxed mb-8 border-l-2 border-emerald-500/30 pl-6">
                        {{ portfolio.summary }}
                    </p>
                    <div class="flex flex-wrap gap-4">
                        <a href="#contato"
                            class="px-8 py-4 bg-emerald-500 text-black rounded-full text-xs uppercase tracking-widest font-bold hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20">
                            Vamos Conversar
                        </a>
                        <a href="#projetos"
                            class="px-8 py-4 border border-emerald-500/20 text-emerald-400 rounded-full text-xs uppercase tracking-widest font-medium hover:bg-emerald-500/5 transition-all">
                            Ver Projetos
                        </a>
                    </div>
                </div>
                <div class="relative w-full md:w-[380px] aspect-square">
                    <div
                        class="absolute inset-0 -z-20 rounded-3xl blur-[60px] bg-emerald-500/35 shadow-[0_0_140px_rgba(16,185,129,0.45)]" />
                    <div class="absolute inset-0 border border-emerald-500/20 rounded-3xl rotate-6 -z-10" />
                    <div class="absolute inset-0 border border-emerald-500/10 rounded-3xl -rotate-3 -z-10" />
                    <div
                        class="w-full h-full rounded-3xl overflow-hidden border border-emerald-500/30 bg-zinc-900 shadow-2xl shadow-emerald-500/10 group">
                        <img src="/src/images/sergio.jpg" alt="Sergio Schultz"
                            class="w-full h-full object-cover object-top" referrerpolicy="no-referrer" />
                        <div
                            class="absolute inset-0 bg-emerald-500/10 mix-blend-overlay group-hover:opacity-0 transition-opacity" />
                    </div>
                </div>
                <div class="absolute bottom-12 left-1/2 -translate-x-1/2 text-emerald-500/50 animate-bounce">
                    <ChevronDown class="w-5 h-5" />
                </div>
            </section>

            <section id="projetos" class="py-32 px-6 md:px-24">
                <div class="max-w-6xl mx-auto">
                    <div class="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                        <div>
                            <h2 class="text-[11px] uppercase tracking-[0.3em] text-emerald-500/60 mb-8">Projetos em
                                Destaque</h2>
                            <h3 class="text-5xl font-semibold tracking-tighter">Soluções <span
                                    class="italic serif text-emerald-400">Digitais</span></h3>
                        </div>
                        <p class="max-w-xs text-white/40 text-sm font-normal">
                            Uma seleção de trabalhos que demonstram minha capacidade técnica e visão de produto.
                        </p>
                    </div>
                    <div v-if="pedebemProject" class="relative mb-20">
                        <div
                            class="p-10 rounded-3xl bg-white/5 border border-white/10 group hover:border-emerald-500/20 transition-all">
                            <div class="grid md:grid-cols-2 gap-4 md:gap-12 items-center">
                                <div>
                                    <div
                                        class="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:bg-emerald-500 group-hover:text-black transition-all">
                                        <Globe class="w-6 h-6" />
                                    </div>
                                    <h4
                                        class="text-3xl font-semibold mb-4 group-hover:text-emerald-400 transition-colors">
                                        {{ pedebemProject.name }}
                                    </h4>
                                    <p class="text-white/60 font-normal leading-relaxed mb-6">
                                        Tela real do sistema PedeBem, com foco em performance, clareza visual e fluxo de
                                        trabalho otimizado para decisões rápidas.
                                    </p>
                                    <ul class="space-y-3 text-sm text-white/50 mb-6">
                                        <li class="flex gap-3">
                                            <span class="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-500/60"></span>
                                            Dashboard com indicadores essenciais em destaque.
                                        </li>
                                        <li class="flex gap-3">
                                            <span class="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-500/60"></span>
                                            Componentes responsivos e prontos para escalar.
                                        </li>
                                        <li class="flex gap-3">
                                            <span class="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-500/60"></span>
                                            Layout validado para operação do dia a dia.
                                        </li>
                                    </ul>
                                    <p class="text-white/50 font-normal leading-relaxed mb-6">
                                        {{ pedebemProject.description }}
                                    </p>
                                    <div class="flex flex-wrap gap-2 mb-4">
                                        <span v-for="tech in pedebemProject.technologies" :key="tech"
                                            class="text-[10px] uppercase tracking-widest text-emerald-500/40 border border-emerald-500/10 px-3 py-1 rounded-full">
                                            {{ tech }}
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <div class="rounded-3xl border border-white/10 bg-white/5 p-4">
                                        <img src="/src/images/PedeBemTela1.png" alt="Mockup do sistema PedeBem"
                                            class="w-full rounded-2xl object-cover" />
                                    </div>
                                </div>
                            </div>
                            <div class="flex justify-end mt-8">
                                <a :href="pedebemProject.url" target="_blank" rel="noopener noreferrer"
                                    class="px-6 py-3 rounded-full border border-white/10 flex items-center gap-3 text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                                    Ver Projeto
                                    <ExternalLink class="w-3 h-3" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="grid md:grid-cols-2 gap-12">
                        <article v-for="project in otherProjects" :key="project.name" :class="project.name === 'Automações Inteligentes'
                            ? 'md:col-span-2'
                            : ''"
                            class="p-10 rounded-3xl bg-white/5 border border-white/10 flex flex-col justify-between min-h-[400px] group hover:border-emerald-500/20 transition-all">
                            <div v-if="project.name === 'Automações Inteligentes'"
                                class="grid md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <div
                                        class="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-8 group-hover:bg-emerald-500 group-hover:text-black transition-all">
                                        <Globe class="w-6 h-6" />
                                    </div>
                                    <h3
                                        class="text-3xl font-semibold mb-4 group-hover:text-emerald-400 transition-colors">
                                        {{ project.name }}
                                    </h3>
                                    <p class="text-white/50 font-normal leading-relaxed mb-8">{{ project.description }}
                                    </p>
                                    <div class="flex flex-wrap gap-2">
                                        <span v-for="tech in project.technologies" :key="tech"
                                            class="text-[10px] uppercase tracking-widest text-emerald-500/40 border border-emerald-500/10 px-3 py-1 rounded-full">
                                            {{ tech }}
                                        </span>
                                    </div>
                                </div>
                                <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
                                    <img src="/src/images/typebot.png" alt="Mockup do Typebot"
                                        class="w-full rounded-xl object-cover" />
                                </div>
                            </div>
                            <div v-else>
                                <div
                                    class="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-8 group-hover:bg-emerald-500 group-hover:text-black transition-all">
                                    <Globe class="w-6 h-6" />
                                </div>
                                <h3 class="text-3xl font-semibold mb-4 group-hover:text-emerald-400 transition-colors">
                                    {{ project.name }}
                                </h3>
                                <p class="text-white/50 font-normal leading-relaxed mb-8">{{ project.description }}</p>
                                <div class="flex flex-wrap gap-2">
                                    <span v-for="tech in project.technologies" :key="tech"
                                        class="text-[10px] uppercase tracking-widest text-emerald-500/40 border border-emerald-500/10 px-3 py-1 rounded-full">
                                        {{ tech }}
                                    </span>
                                </div>
                            </div>
                            <div class="flex justify-end mt-12">
                                <a :href="project.url" target="_blank" rel="noopener noreferrer"
                                    class="px-6 py-3 rounded-full border border-white/10 flex items-center gap-3 text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                                    Ver Projeto
                                    <ExternalLink class="w-3 h-3" />
                                </a>
                            </div>
                        </article>
                    </div>
                </div>
            </section>



            <section id="sobre" class="py-28 px-6 md:px-24 border-t border-white/10">
                <div class="max-w-6xl mx-auto">
                    <div class="mb-14">
                        <h2 class="text-[11px] uppercase tracking-[0.3em] text-emerald-500/60 mb-6">Tecnologias &
                            Especialidades</h2>
                        <h3 class="text-4xl font-semibold tracking-tighter text-white/90 mb-4">Stack técnica com foco
                            em resultado</h3>
                        <p class="text-white/50 font-normal max-w-2xl leading-relaxed">
                            Seleção enxuta e estratégica de tecnologias que uso no dia a dia, com prioridade no que
                            gera impacto real em produto, performance e automação.
                        </p>
                    </div>
                    <div class="grid gap-12">
                        <div>
                            <div class="flex items-center justify-between mb-6">
                                <h4 class="text-sm uppercase tracking-[0.3em] text-emerald-400">Principais</h4>
                                <span class="text-[10px] uppercase tracking-[0.2em] text-white/40">Maior domínio</span>
                            </div>
                            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div v-for="tech in techGroups.primary" :key="tech.name"
                                    class="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-6 shadow-[0_0_0_1px_rgba(16,185,129,0.08)]">
                                    <component :is="tech.icon" class="w-6 h-6 text-emerald-300 mb-4" />
                                    <div class="text-lg font-semibold text-white mb-1">{{ tech.name }}</div>
                                    <div class="text-xs uppercase tracking-[0.3em] text-white/50">{{ tech.category }}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="flex items-center justify-between mb-6">
                                <h4 class="text-sm uppercase tracking-[0.3em] text-white/60">Secundárias</h4>
                            </div>
                            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div v-for="tech in techGroups.secondary" :key="tech.name"
                                    class="rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:border-emerald-500/30">
                                    <component :is="tech.icon" class="w-6 h-6 text-emerald-300 mb-4" />
                                    <div class="text-lg font-semibold text-white mb-1">{{ tech.name }}</div>
                                    <div class="text-xs uppercase tracking-[0.3em] text-white/50">{{ tech.category }}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="flex items-center justify-between mb-6">
                                <h4 class="text-sm uppercase tracking-[0.3em] text-white/60">Especialidades</h4>
                                <span class="text-[10px] uppercase tracking-[0.2em] text-white/40">Sistemas &
                                    automação</span>
                            </div>
                            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div v-for="tech in techGroups.specialties" :key="tech.name"
                                    class="rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:border-emerald-500/30">
                                    <component :is="tech.icon" class="w-6 h-6 text-emerald-300 mb-4" />
                                    <div class="text-lg font-semibold text-white mb-1">{{ tech.name }}</div>
                                    <div class="text-xs uppercase tracking-[0.3em] text-white/50">{{ tech.category }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="proeficiencia" class="py-24 px-6 md:px-24 bg-[#080808]">
                <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 class="text-[11px] uppercase tracking-[0.3em] text-emerald-500/60 mb-8">Proficiência &
                            Entrega</h2>
                        <h3 class="text-4xl font-semibold tracking-tighter mb-8 text-white/90">
                            O quanto posso <span class="text-emerald-400 italic serif">impactar</span> sua empresa?
                        </h3>
                        <p class="text-white/50 font-normal leading-relaxed mb-12">
                            Minha versatilidade permite atuar desde o design visual até a gestão estratégica de
                            projetos,
                            garantindo uma entrega técnica refinada e humanizada.
                        </p>
                        <div class="grid grid-cols-2 gap-8">
                            <div class="p-6 rounded-2xl bg-white/5 border border-white/5">
                                <div class="text-3xl font-semibold text-emerald-400 mb-2">+20</div>
                                <div class="text-[10px] uppercase tracking-widest opacity-40">Anos de Experiência</div>
                            </div>
                            <div class="p-6 rounded-2xl bg-white/5 border border-white/5">
                                <div class="text-3xl font-semibold text-emerald-400 mb-2">100%</div>
                                <div class="text-[10px] uppercase tracking-widest opacity-40">Comprometimento</div>
                            </div>
                        </div>
                    </div>
                    <div class="space-y-8" ref="statsRef">
                        <div v-for="stat in portfolio.stats" :key="stat.label" class="space-y-2">
                            <div class="flex justify-between items-end">
                                <span class="text-xs uppercase tracking-widest text-white/70">{{ stat.label }}</span>
                                <span class="text-xs font-mono text-emerald-400">{{ stat.value }}%</span>
                            </div>
                            <div class="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                <div class="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 transition-[width] duration-[4000ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                                    :style="{ width: statsVisible ? stat.value + '%' : '0%' }" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="experiencia" class="py-24 px-6 md:px-24 bg-[#0a0a0a] relative overflow-hidden">
                <div class="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 blur-[100px] rounded-full -z-10" />
                <div class="max-w-6xl mx-auto relative">
                    <h2 class="text-[11px] uppercase tracking-[0.3em] text-emerald-500/60 mb-20">Trajetória Profissional
                    </h2>
                    <div class="absolute left-4 top-16 bottom-0 w-px bg-emerald-500/20" />
                    <div class="space-y-24">
                        <div v-for="experience in portfolio.experiences" :key="experience.company"
                            class="relative grid md:grid-cols-3 gap-8 group pl-10">
                            <div
                                class="absolute left-4 top-2 h-3 w-3 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.6)] timeline-dot" />
                            <div class="text-sm text-emerald-500/40 font-mono pt-2">{{ experience.period }}</div>
                            <div
                                class="md:col-span-2 rounded-3xl border border-white/5 bg-white/5 p-6 transition-all duration-300 delay-75 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/5 group-hover:-translate-y-2 group-hover:shadow-2xl">
                                <h3 class="text-3xl font-semibold mb-2 group-hover:text-emerald-400 transition-colors">
                                    {{ experience.role }}
                                </h3>
                                <div
                                    class="text-white/30 mb-8 uppercase tracking-widest text-[10px] flex items-center gap-3">
                                    <Briefcase class="w-3 h-3" />
                                    {{ experience.company }}
                                </div>
                                <ul class="space-y-6">
                                    <li v-for="achievement in experience.achievements" :key="achievement"
                                        class="text-white/60 font-normal leading-relaxed flex gap-4">
                                        <span
                                            class="w-1.5 h-1.5 rounded-full bg-emerald-500/30 mt-2 shrink-0 group-hover:bg-emerald-500 transition-colors" />
                                        {{ achievement }}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contato" class="py-32 px-6 md:px-24 border-t border-white/10 relative overflow-hidden">
                <div
                    class="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-emerald-500/5 to-transparent -z-10" />
                <div class="max-w-4xl mx-auto text-center">
                    <h2 class="text-[11px] uppercase tracking-[0.3em] text-emerald-500/60 mb-12">Vamos Conversar?</h2>
                    <h3 class="text-5xl md:text-7xl font-semibold tracking-tighter mb-16 leading-tight">
                        Pronto para levar seu <br /> <span class="text-emerald-400 italic serif">negócio</span> ao
                        próximo nível?
                    </h3>
                    <p class="text-sm md:text-base text-white/45 font-normal tracking-wide mb-14">
                        Disponível para projetos freelance e parcerias estratégicas.
                    </p>

                    <div class="flex flex-col md:flex-row items-center justify-center gap-8">
                        <a v-if="portfolio.contact?.whatsapp" :href="whatsappLink" target="_blank"
                            rel="noopener noreferrer"
                            class="flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-emerald-500 to-emerald-400 text-black rounded-full font-bold uppercase tracking-widest text-xs hover:from-emerald-400 hover:to-emerald-300 hover:scale-105 transition-all shadow-xl shadow-emerald-500/30 whatsapp-glow">
                            <Send class="w-4 h-4" />
                            WhatsApp

                        </a>
                        <a href="mailto:contato@sergioschultz.com"
                            class="flex items-center gap-4 px-10 py-5 border border-emerald-500/20 text-emerald-400 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-emerald-500/5 transition-all">
                            <Mail class="w-4 h-4" /> Enviar Email
                        </a>
                    </div>

                    <div class="mt-8 flex justify-center">
                        <button type="button" @click="copyPortfolioLink"
                            class="flex items-center gap-3 px-8 py-3 rounded-full border border-white/10 text-white/70 text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                            <Link class="w-4 h-4" />
                            {{ copyLabel }}
                        </button>
                    </div>

                    <div class="mt-20 flex justify-center gap-8">
                        <a href="https://www.facebook.com/Sergioschultzz" target="_blank" rel="noopener noreferrer"
                            class="p-5 rounded-2xl border border-white/5 hover:bg-emerald-500/10 hover:border-emerald-500/20 transition-all">
                            <Facebook class="w-6 h-6 text-white/40 hover:text-emerald-400 transition-colors" />
                        </a>
                        <a href="https://www.linkedin.com/in/sergio-schultz-48b779280/" target="_blank"
                            rel="noopener noreferrer"
                            class="p-5 rounded-2xl border border-white/5 hover:bg-emerald-500/10 hover:border-emerald-500/20 transition-all">
                            <Linkedin class="w-6 h-6 text-white/40 hover:text-emerald-400 transition-colors" />
                        </a>
                        <a href="https://github.com/schultz196" target="_blank" rel="noopener noreferrer"
                            class="p-5 rounded-2xl border border-white/5 hover:bg-emerald-500/10 hover:border-emerald-500/20 transition-all">
                            <Github class="w-6 h-6 text-white/40 hover:text-emerald-400 transition-colors" />
                        </a>
                    </div>

                    <div v-if="portfolio.contact?.location"
                        class="mt-20 text-[10px] uppercase tracking-[0.4em] text-white/20">
                        {{ portfolio.contact.location }}
                    </div>
                </div>
            </section>

            <footer
                class="py-12 px-6 md:px-24 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-white/20 text-[10px] uppercase tracking-[0.3em]">
                <div>© 2026 SERGIO SCHULTZ • WEB DESIGNER & GESTOR</div>
                <div class="flex gap-8">
                    <span class="hover:text-emerald-400 transition-colors cursor-default">Privacidade</span>
                    <span class="hover:text-emerald-400 transition-colors cursor-default">Termos</span>
                </div>
            </footer>
        </main>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue';
import {
    Bot,
    BookOpen,
    Briefcase,
    ChevronDown,
    Code2,
    ExternalLink,
    Facebook,
    Github,
    Globe,
    Layers,
    Linkedin,
    Link,
    Mail,
    Server,
    Sparkles,
    Zap,
    Send,
    Palette,
} from 'lucide-vue-next';
import { usePortfolioStore } from './stores/portfolio';

const menuOpen = ref(false);
const toggleMenu = () => {
    menuOpen.value = !menuOpen.value;
};

const activeSection = ref('home');
const scrollProgress = ref(0);
const cursorRef = ref<HTMLElement | null>(null);

const store = usePortfolioStore();
const portfolio = computed(() => store.portfolio);
const pedebemProject = computed(() => portfolio.value?.projects.find((project) => project.name === 'PedeBem'));
const otherProjects = computed(() => portfolio.value?.projects.filter((project) => project.name !== 'PedeBem') ?? []);
const techGroups = {
    primary: [
        { name: 'PHP', category: 'Backend', icon: Server },
        { name: 'JavaScript', category: 'Frontend', icon: Code2 },
        { name: 'CSS', category: 'UI Styling', icon: Palette },
    ],
    secondary: [
        { name: 'Bootstrap', category: 'Frontend', icon: Layers },
        { name: 'Tailwind', category: 'Frontend', icon: Layers },
        { name: 'Ajax', category: 'Integrações', icon: Zap },
    ],
    specialties: [
        { name: 'Moodle', category: 'EAD', icon: BookOpen },
        { name: 'Typebot', category: 'Automação', icon: Bot },
        { name: 'Automação', category: 'Sistemas', icon: Sparkles },
    ],
};
const statsVisible = ref(false);
const statsRef = ref<HTMLElement | null>(null);
const portfolioLink = 'https://schultz196.github.io/sergio-portfolio/';
const copyLabel = ref('Copiar link');
const copyPortfolioLink = async () => {
    try {
        await navigator.clipboard.writeText(portfolioLink);
        copyLabel.value = 'Link copiado';
    } catch (error) {
        copyLabel.value = 'Copie manualmente';
    }
    window.setTimeout(() => {
        copyLabel.value = 'Copiar link';
    }, 2200);
};
const whatsappLink = computed(() => {
    const phone = portfolio.value?.contact?.whatsapp ?? '';
    const digits = phone.replace(/\D/g, '');
    return digits ? `https://wa.me/55${digits}` : '#';
});

const sections = ['home', 'projetos', 'sobre', 'proeficiencia', 'experiencia', 'contato'];
const onScroll = () => {
    const offset = 140;
    let current = activeSection.value;
    for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) {
            continue;
        }
        const top = el.getBoundingClientRect().top;
        if (top <= offset) {
            current = id;
        }
    }
    activeSection.value = current;

    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    scrollProgress.value = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
};

let statsObserver: IntersectionObserver | null = null;
let cursorRaf = 0;

const onMouseMove = (event: MouseEvent) => {
    if (!cursorRef.value) {
        return;
    }
    const { clientX, clientY } = event;
    if (cursorRaf) {
        cancelAnimationFrame(cursorRaf);
    }
    cursorRaf = requestAnimationFrame(() => {
        if (!cursorRef.value) {
            return;
        }
        cursorRef.value.style.transform = `translate(${clientX}px, ${clientY}px)`;
    });
};

const onCursorEnter = () => {
    cursorRef.value?.classList.add('custom-cursor--active');
};

const onCursorLeave = () => {
    cursorRef.value?.classList.remove('custom-cursor--active');
};

onMounted(() => {
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.querySelectorAll('a, button, [role="button"]').forEach((el) => {
        el.addEventListener('mouseenter', onCursorEnter);
        el.addEventListener('mouseleave', onCursorLeave);
    });
    if (!statsRef.value) {
        return;
    }
    statsObserver = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                statsVisible.value = true;
                statsObserver?.disconnect();
                statsObserver = null;
            }
        },
        { threshold: 0.2 }
    );
    statsObserver.observe(statsRef.value);
});

onUnmounted(() => {
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('mousemove', onMouseMove);
    document.querySelectorAll('a, button, [role="button"]').forEach((el) => {
        el.removeEventListener('mouseenter', onCursorEnter);
        el.removeEventListener('mouseleave', onCursorLeave);
    });
    statsObserver?.disconnect();
    statsObserver = null;
    if (cursorRaf) {
        cancelAnimationFrame(cursorRaf);
    }
});
</script>
