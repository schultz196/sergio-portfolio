<template>
    <div
        class="bg-transparent text-white font-sans selection:bg-violet-500 selection:text-white scroll-smooth overflow-x-hidden">
        <div ref="cursorRef" class="custom-cursor" aria-hidden="true"></div>

        <!-- Fundo gradiente fixo -->
        <div class="fixed inset-0 -z-20 pointer-events-none" aria-hidden="true">
            <div class="absolute inset-0 bg-[#07040f]" />
            <div class="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-violet-700/20 blur-[140px]" />
            <div class="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-violet-900/15 blur-[120px]" />
            <div class="absolute top-[40%] left-[40%] w-[40vw] h-[40vw] rounded-full bg-fuchsia-800/10 blur-[100px]" />
        </div>

        <!-- Barra de progresso de scroll -->
        <div class="fixed top-0 left-0 right-0 z-[60] h-0.5 bg-white/5">
            <div class="h-full bg-gradient-to-r from-violet-600 to-fuchsia-400 transition-all duration-150"
                :style="{ width: scrollProgress + '%' }" />
        </div>

        <!-- Header / Nav -->
        <header
            class="fixed top-0 left-0 right-0 z-40 backdrop-blur-xl bg-[#07040f]/70 border-b border-violet-500/10 shadow-[0_1px_0_rgba(139,92,246,0.08)]">
            <nav class="max-w-6xl mx-auto px-6 py-3 md:py-4 flex items-center justify-between">
                <a href="#home"
                    class="text-xl font-bold tracking-tighter bg-gradient-to-r from-violet-300 to-fuchsia-300 bg-clip-text text-transparent animate-fade-in-up">
                    SERGIO SCHULTZ
                </a>
                <div class="hidden md:flex gap-8 text-[11px] uppercase tracking-[0.2em] text-white/40">
                    <a class="transition-colors duration-200"
                        :class="activeSection === 'home' ? 'text-violet-300' : 'hover:text-violet-300'"
                        href="#home">Home</a>
                    <a class="transition-colors duration-200"
                        :class="activeSection === 'projetos' ? 'text-violet-300' : 'hover:text-violet-300'"
                        href="#projetos">Projetos</a>
                    <a class="transition-colors duration-200"
                        :class="activeSection === 'sobre' ? 'text-violet-300' : 'hover:text-violet-300'"
                        href="#sobre">Tecnologias</a>
                    <a class="transition-colors duration-200"
                        :class="activeSection === 'proeficiencia' ? 'text-violet-300' : 'hover:text-violet-300'"
                        href="#proeficiencia">Sobre</a>
                    <a class="transition-colors duration-200"
                        :class="activeSection === 'experiencia' ? 'text-violet-300' : 'hover:text-violet-300'"
                        href="#experiencia">Experiência</a>
                    <a class="transition-colors duration-200"
                        :class="activeSection === 'contato' ? 'text-violet-300' : 'hover:text-violet-300'"
                        href="#contato">Contato</a>
                </div>
                <button class="md:hidden text-violet-400 p-1" @click="toggleMenu">
                    <span v-if="menuOpen">✕</span>
                    <span v-else>☰</span>
                </button>
            </nav>
            <div v-if="menuOpen"
                class="md:hidden absolute left-0 right-0 top-full border-t border-violet-500/10 bg-[#07040f]/95 backdrop-blur-xl shadow-lg">
                <div class="flex flex-col px-6 py-6 gap-5 text-violet-300 uppercase tracking-[0.25em] text-xs">
                    <a href="#home" @click="toggleMenu"
                        :class="activeSection === 'home' ? 'text-white' : 'text-white/50 hover:text-violet-300'">Home</a>
                    <a href="#projetos" @click="toggleMenu"
                        :class="activeSection === 'projetos' ? 'text-white' : 'text-white/50 hover:text-violet-300'">Projetos</a>
                    <a href="#sobre" @click="toggleMenu"
                        :class="activeSection === 'sobre' ? 'text-white' : 'text-white/50 hover:text-violet-300'">Tecnologias</a>
                    <a href="#proeficiencia" @click="toggleMenu"
                        :class="activeSection === 'proeficiencia' ? 'text-white' : 'text-white/50 hover:text-violet-300'">Sobre</a>
                    <a href="#experiencia" @click="toggleMenu"
                        :class="activeSection === 'experiencia' ? 'text-white' : 'text-white/50 hover:text-violet-300'">Experiência</a>
                    <a href="#contato" @click="toggleMenu"
                        :class="activeSection === 'contato' ? 'text-white' : 'text-white/50 hover:text-violet-300'">Contato</a>
                </div>
            </div>
        </header>

        <main>
            <!-- ═══════════════ HERO ═══════════════ -->
            <section id="home"
                class="min-h-screen px-6 md:px-24 pt-24 md:pt-20 flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto relative">
                <!-- Orbe de fundo do hero -->
                <div
                    class="absolute top-1/2 left-1/4 -translate-y-1/2 w-[60vw] h-[60vw] bg-violet-600/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

                <div class="flex-1 space-y-6">
                    <!-- Badge de disponibilidade -->
                    <div
                        class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/20 bg-violet-500/5 backdrop-blur-sm text-[10px] uppercase tracking-widest text-violet-300/80">
                        <span class="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                        Disponível para novos projetos
                    </div>

                    <!-- Typing title -->
                    <span
                        class="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] sm:tracking-[0.4em] text-violet-500/50 block typing-title">
                        Desenvolvedor Web & Criador de Sistemas Digitais
                    </span>

                    <!-- Nome -->
                    <h1 class="text-5xl md:text-[6vw] font-bold leading-[0.9] tracking-tighter">
                        Sergio <br />
                        <span
                            class="italic serif bg-gradient-to-r from-violet-300 via-fuchsia-300 to-violet-400 bg-clip-text text-transparent">Schultz</span>
                    </h1>

                    <!-- Resumo -->
                    <p class="max-w-lg text-base md:text-lg text-white/55 font-normal leading-relaxed border-l-2 border-violet-500/30 pl-5">
                        {{ portfolio.summary }}
                    </p>

                    <!-- CTAs -->
                    <div class="flex flex-wrap gap-4 pt-2">
                        <a href="#contato"
                            class="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-full text-xs uppercase tracking-widest font-bold hover:from-violet-500 hover:to-fuchsia-500 transition-all shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:scale-105">
                            Vamos Conversar
                        </a>
                        <a href="#projetos"
                            class="inline-flex items-center gap-2 px-8 py-4 border border-violet-500/25 text-violet-300 rounded-full text-xs uppercase tracking-widest font-medium hover:bg-violet-500/10 hover:border-violet-500/40 transition-all backdrop-blur-sm">
                            Ver Projetos
                            <ChevronDown class="w-3.5 h-3.5 rotate-[-90deg]" />
                        </a>
                    </div>
                </div>

                <!-- Foto -->
                <div class="relative w-full md:w-[360px] lg:w-[400px] aspect-square shrink-0">
                    <!-- Glow atrás da foto -->
                    <div
                        class="absolute inset-[-10%] rounded-[40px] bg-gradient-to-br from-violet-600/30 to-fuchsia-600/20 blur-[50px] -z-10" />
                    <!-- Bordas decorativas rotacionadas -->
                    <div
                        class="absolute inset-0 border border-violet-500/15 rounded-3xl rotate-6 -z-10 bg-violet-500/3" />
                    <div class="absolute inset-0 border border-fuchsia-500/10 rounded-3xl -rotate-3 -z-10" />
                    <!-- Container da imagem -->
                    <div
                        class="w-full h-full rounded-3xl overflow-hidden border border-violet-500/20 bg-zinc-950 shadow-2xl shadow-violet-900/30 group relative">
                        <img src="/src/images/sergio.jpg" alt="Sergio Schultz"
                            class="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                            referrerpolicy="no-referrer" />
                        <!-- Overlay gradiente na base -->
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-violet-950/60 via-transparent to-transparent" />
                    </div>
                    <!-- Badge flutuante -->
                    <div
                        class="absolute -bottom-4 -right-4 bg-[#0f0a1e] border border-violet-500/20 rounded-2xl px-4 py-3 shadow-xl shadow-violet-900/30 backdrop-blur-sm">
                        <div class="text-2xl font-bold text-violet-300 leading-none">+20</div>
                        <div class="text-[9px] uppercase tracking-widest text-white/40 mt-0.5">Anos exp.</div>
                    </div>
                </div>

                <!-- Seta de scroll -->
                <div class="absolute bottom-10 left-1/2 -translate-x-1/2 text-violet-500/40 animate-bounce hidden md:block">
                    <ChevronDown class="w-5 h-5" />
                </div>
            </section>

            <!-- ═══════════════ PROJETOS ═══════════════ -->
            <section id="projetos" class="py-32 px-6 md:px-24">
                <div class="max-w-6xl mx-auto">
                    <!-- Header da seção -->
                    <div class="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                        <div>
                            <div
                                class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/20 bg-violet-500/5 text-[10px] uppercase tracking-widest text-violet-400/70 mb-6">
                                <Sparkles class="w-3 h-3" />
                                Projetos em Destaque
                            </div>
                            <h3 class="text-5xl font-bold tracking-tighter">Soluções <span
                                    class="italic serif bg-gradient-to-r from-violet-300 to-fuchsia-300 bg-clip-text text-transparent">Digitais</span>
                            </h3>
                        </div>
                        <p class="max-w-xs text-white/35 text-sm font-normal leading-relaxed">
                            Uma seleção de trabalhos que demonstram minha capacidade técnica e visão de produto.
                        </p>
                    </div>

                    <!-- Card destaque PedeBem -->
                    <div v-if="pedebemProject" class="relative mb-16">
                        <!-- Brilho do card -->
                        <div
                            class="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-500/10 to-fuchsia-500/5 blur-xl -z-10 scale-[0.98]" />
                        <div
                            class="p-8 md:p-10 rounded-3xl bg-white/[0.03] border border-white/8 group hover:border-violet-500/30 transition-all duration-300 backdrop-blur-sm relative overflow-hidden">
                            <!-- Gradiente de canto -->
                            <div
                                class="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-violet-500/8 to-transparent rounded-3xl pointer-events-none" />
                            <div class="grid md:grid-cols-2 gap-6 md:gap-12 items-center relative">
                                <div>
                                    <!-- Ícone + badge projeto destaque -->
                                    <div class="flex items-center gap-3 mb-6">
                                        <div
                                            class="w-11 h-11 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center group-hover:bg-violet-500 group-hover:border-violet-400 transition-all">
                                            <Globe class="w-5 h-5 text-violet-300 group-hover:text-white transition-colors" />
                                        </div>
                                        <span
                                            class="text-[9px] uppercase tracking-widest text-violet-400/60 border border-violet-500/15 px-2.5 py-1 rounded-full">Projeto
                                            Principal</span>
                                    </div>
                                    <h4
                                        class="text-3xl font-bold mb-3 group-hover:text-violet-300 transition-colors tracking-tight">
                                        {{ pedebemProject.name }}
                                    </h4>
                                    <p class="text-white/55 font-normal leading-relaxed mb-5 text-sm">
                                        Tela real do sistema PedeBem, com foco em performance, clareza visual e fluxo de
                                        trabalho otimizado para decisões rápidas.
                                    </p>
                                    <ul class="space-y-2.5 text-sm text-white/45 mb-5">
                                        <li class="flex gap-3 items-start">
                                            <span
                                                class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400/60"></span>
                                            Dashboard com indicadores essenciais em destaque.
                                        </li>
                                        <li class="flex gap-3 items-start">
                                            <span
                                                class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400/60"></span>
                                            Componentes responsivos e prontos para escalar.
                                        </li>
                                        <li class="flex gap-3 items-start">
                                            <span
                                                class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400/60"></span>
                                            Layout validado para operação do dia a dia.
                                        </li>
                                    </ul>
                                    <p class="text-white/40 font-normal leading-relaxed mb-5 text-sm">
                                        {{ pedebemProject.description }}
                                    </p>
                                    <div class="flex flex-wrap gap-2">
                                        <span v-for="tech in pedebemProject.technologies" :key="tech"
                                            class="text-[10px] uppercase tracking-widest text-violet-400/50 border border-violet-500/15 px-3 py-1 rounded-full bg-violet-500/5">
                                            {{ tech }}
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <div
                                        class="rounded-2xl border border-violet-500/15 bg-violet-500/5 p-3 shadow-[0_0_40px_rgba(139,92,246,0.1)]">
                                        <img src="/src/images/PedeBemTela1.png" alt="Mockup do sistema PedeBem"
                                            class="w-full rounded-xl object-cover" />
                                    </div>
                                </div>
                            </div>
                            <div class="flex justify-end mt-8">
                                <a :href="pedebemProject.url" target="_blank" rel="noopener noreferrer"
                                    class="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-white/10 text-[10px] uppercase tracking-widest text-white/60 hover:bg-white hover:text-black transition-all group/btn">
                                    Ver Projeto
                                    <ExternalLink
                                        class="w-3 h-3 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- Outros projetos -->
                    <div class="grid md:grid-cols-2 gap-8">
                        <article v-for="project in otherProjects" :key="project.name"
                            :class="project.name === 'Automações Inteligentes' ? 'md:col-span-2' : ''"
                            class="p-8 md:p-10 rounded-3xl bg-white/[0.03] border border-white/8 flex flex-col justify-between group hover:border-violet-500/25 transition-all duration-300 backdrop-blur-sm relative overflow-hidden">
                            <div class="absolute top-0 right-0 w-60 h-60 bg-violet-500/5 rounded-full blur-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div v-if="project.name === 'Automações Inteligentes'"
                                class="grid md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <div class="flex items-center gap-3 mb-6">
                                        <div
                                            class="w-11 h-11 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center group-hover:bg-violet-500 transition-all">
                                            <Bot class="w-5 h-5 text-violet-300 group-hover:text-white transition-colors" />
                                        </div>
                                    </div>
                                    <h3 class="text-3xl font-bold mb-3 group-hover:text-violet-300 transition-colors tracking-tight">
                                        {{ project.name }}
                                    </h3>
                                    <p class="text-white/45 font-normal leading-relaxed mb-6 text-sm">
                                        {{ project.description }}
                                    </p>
                                    <div class="flex flex-wrap gap-2">
                                        <span v-for="tech in project.technologies" :key="tech"
                                            class="text-[10px] uppercase tracking-widest text-violet-400/50 border border-violet-500/15 px-3 py-1 rounded-full bg-violet-500/5">
                                            {{ tech }}
                                        </span>
                                    </div>
                                </div>
                                <div class="rounded-2xl border border-violet-500/10 bg-violet-500/5 p-3">
                                    <img src="/src/images/typebot.png" alt="Mockup do Typebot"
                                        class="w-full rounded-xl object-cover" />
                                </div>
                            </div>
                            <div v-else>
                                <div class="flex items-center gap-3 mb-6">
                                    <div
                                        class="w-11 h-11 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center group-hover:bg-violet-500 transition-all">
                                        <Globe class="w-5 h-5 text-violet-300 group-hover:text-white transition-colors" />
                                    </div>
                                </div>
                                <h3 class="text-3xl font-bold mb-3 group-hover:text-violet-300 transition-colors tracking-tight">
                                    {{ project.name }}
                                </h3>
                                <p class="text-white/45 font-normal leading-relaxed mb-6 text-sm">
                                    {{ project.description }}
                                </p>
                                <div class="flex flex-wrap gap-2">
                                    <span v-for="tech in project.technologies" :key="tech"
                                        class="text-[10px] uppercase tracking-widest text-violet-400/50 border border-violet-500/15 px-3 py-1 rounded-full bg-violet-500/5">
                                        {{ tech }}
                                    </span>
                                </div>
                            </div>
                            <div class="flex justify-end mt-10">
                                <a :href="project.url" target="_blank" rel="noopener noreferrer"
                                    class="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-white/10 text-[10px] uppercase tracking-widest text-white/60 hover:bg-white hover:text-black transition-all">
                                    Ver Projeto
                                    <ExternalLink class="w-3 h-3" />
                                </a>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            <!-- ═══════════════ TECNOLOGIAS ═══════════════ -->
            <section id="sobre" class="py-28 px-6 md:px-24 border-t border-white/[0.06]">
                <div class="max-w-6xl mx-auto">
                    <div class="mb-16">
                        <div
                            class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/20 bg-violet-500/5 text-[10px] uppercase tracking-widest text-violet-400/70 mb-6">
                            <Code2 class="w-3 h-3" />
                            Stack Técnica
                        </div>
                        <h3 class="text-4xl font-bold tracking-tighter text-white mb-4">
                            Tecnologias com foco em <span
                                class="italic serif bg-gradient-to-r from-violet-300 to-fuchsia-300 bg-clip-text text-transparent">resultado</span>
                        </h3>
                        <p class="text-white/40 font-normal max-w-2xl leading-relaxed text-sm">
                            Seleção enxuta e estratégica de tecnologias que uso no dia a dia, com prioridade no que
                            gera impacto real em produto, performance e automação.
                        </p>
                    </div>
                    <div class="space-y-14">
                        <!-- Principais -->
                        <div>
                            <div class="flex items-center gap-3 mb-6">
                                <h4 class="text-xs uppercase tracking-[0.3em] text-violet-300 font-semibold">Principais
                                </h4>
                                <div class="flex-1 h-px bg-violet-500/15" />
                                <span class="text-[10px] uppercase tracking-[0.2em] text-white/30">Maior domínio</span>
                            </div>
                            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                <div v-for="tech in techGroups.primary" :key="tech.name"
                                    class="rounded-2xl border border-violet-500/25 bg-gradient-to-br from-violet-500/8 to-fuchsia-500/4 p-6 hover:border-violet-400/40 hover:from-violet-500/12 transition-all duration-300 group/card backdrop-blur-sm">
                                    <component :is="tech.icon"
                                        class="w-6 h-6 text-violet-300 mb-4 group-hover/card:scale-110 transition-transform" />
                                    <div class="text-base font-semibold text-white mb-1">{{ tech.name }}</div>
                                    <div class="text-[10px] uppercase tracking-[0.3em] text-violet-400/50">
                                        {{ tech.category }}</div>
                                </div>
                            </div>
                        </div>
                        <!-- Secundárias -->
                        <div>
                            <div class="flex items-center gap-3 mb-6">
                                <h4 class="text-xs uppercase tracking-[0.3em] text-white/50 font-semibold">Secundárias
                                </h4>
                                <div class="flex-1 h-px bg-white/8" />
                            </div>
                            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                <div v-for="tech in techGroups.secondary" :key="tech.name"
                                    class="rounded-2xl border border-white/8 bg-white/[0.03] p-6 hover:border-violet-500/25 hover:bg-violet-500/5 transition-all duration-300 group/card backdrop-blur-sm">
                                    <component :is="tech.icon"
                                        class="w-6 h-6 text-violet-400/70 mb-4 group-hover/card:text-violet-300 transition-colors" />
                                    <div class="text-base font-semibold text-white/80 mb-1">{{ tech.name }}</div>
                                    <div class="text-[10px] uppercase tracking-[0.3em] text-white/35">
                                        {{ tech.category }}</div>
                                </div>
                            </div>
                        </div>
                        <!-- Especialidades -->
                        <div>
                            <div class="flex items-center gap-3 mb-6">
                                <h4 class="text-xs uppercase tracking-[0.3em] text-white/50 font-semibold">
                                    Especialidades</h4>
                                <div class="flex-1 h-px bg-white/8" />
                                <span class="text-[10px] uppercase tracking-[0.2em] text-white/30">Sistemas &
                                    automação</span>
                            </div>
                            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                <div v-for="tech in techGroups.specialties" :key="tech.name"
                                    class="rounded-2xl border border-white/8 bg-white/[0.03] p-6 hover:border-fuchsia-500/25 hover:bg-fuchsia-500/5 transition-all duration-300 group/card backdrop-blur-sm">
                                    <component :is="tech.icon"
                                        class="w-6 h-6 text-fuchsia-400/70 mb-4 group-hover/card:text-fuchsia-300 transition-colors" />
                                    <div class="text-base font-semibold text-white/80 mb-1">{{ tech.name }}</div>
                                    <div class="text-[10px] uppercase tracking-[0.3em] text-white/35">
                                        {{ tech.category }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- ═══════════════ PROFICIÊNCIA / SOBRE ═══════════════ -->
            <section id="proeficiencia" class="py-28 px-6 md:px-24 relative">
                <div
                    class="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/15 to-transparent pointer-events-none -z-10" />
                <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <div
                            class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/20 bg-violet-500/5 text-[10px] uppercase tracking-widest text-violet-400/70 mb-8">
                            <Zap class="w-3 h-3" />
                            Proficiência & Entrega
                        </div>
                        <h3 class="text-4xl font-bold tracking-tighter mb-6 text-white">
                            O quanto posso <span
                                class="italic serif bg-gradient-to-r from-violet-300 to-fuchsia-300 bg-clip-text text-transparent">impactar</span>
                            sua empresa?
                        </h3>
                        <p class="text-white/45 font-normal leading-relaxed mb-10 text-sm">
                            Minha versatilidade permite atuar desde o design visual até a gestão estratégica de
                            projetos, garantindo uma entrega técnica refinada e humanizada.
                        </p>
                        <div class="grid grid-cols-2 gap-5">
                            <div
                                class="p-6 rounded-2xl bg-white/[0.03] border border-violet-500/15 hover:border-violet-500/30 transition-colors">
                                <div
                                    class="text-4xl font-bold bg-gradient-to-r from-violet-300 to-fuchsia-300 bg-clip-text text-transparent mb-2">
                                    +20</div>
                                <div class="text-[10px] uppercase tracking-widest text-white/35">Anos de Experiência
                                </div>
                            </div>
                            <div
                                class="p-6 rounded-2xl bg-white/[0.03] border border-violet-500/15 hover:border-violet-500/30 transition-colors">
                                <div
                                    class="text-4xl font-bold bg-gradient-to-r from-violet-300 to-fuchsia-300 bg-clip-text text-transparent mb-2">
                                    100%</div>
                                <div class="text-[10px] uppercase tracking-widest text-white/35">Comprometimento</div>
                            </div>
                        </div>
                    </div>
                    <div class="space-y-7" ref="statsRef">
                        <div v-for="stat in portfolio.stats" :key="stat.label" class="space-y-2.5">
                            <div class="flex justify-between items-center">
                                <span class="text-xs uppercase tracking-widest text-white/60 font-medium">{{
                                    stat.label }}</span>
                                <span
                                    class="text-xs font-mono font-semibold text-violet-300 tabular-nums">{{ stat.value }}%</span>
                            </div>
                            <div class="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                <div
                                    class="h-full bg-gradient-to-r from-violet-600 via-violet-400 to-fuchsia-400 transition-[width] duration-[3500ms] ease-[cubic-bezier(0.16,1,0.3,1)] rounded-full"
                                    :style="{ width: statsVisible ? stat.value + '%' : '0%' }" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- ═══════════════ EXPERIÊNCIA ═══════════════ -->
            <section id="experiencia" class="py-28 px-6 md:px-24 border-t border-white/[0.06] relative overflow-hidden">
                <div class="absolute top-20 right-0 w-80 h-80 bg-violet-600/8 blur-[100px] rounded-full -z-10 pointer-events-none" />
                <div class="max-w-6xl mx-auto relative">
                    <div class="mb-20">
                        <div
                            class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/20 bg-violet-500/5 text-[10px] uppercase tracking-widest text-violet-400/70 mb-6">
                            <Briefcase class="w-3 h-3" />
                            Trajetória Profissional
                        </div>
                        <h3 class="text-4xl font-bold tracking-tighter text-white">Experiência & <span
                                class="italic serif bg-gradient-to-r from-violet-300 to-fuchsia-300 bg-clip-text text-transparent">Histórico</span>
                        </h3>
                    </div>

                    <!-- Linha vertical da timeline -->
                    <div class="absolute left-4 top-40 bottom-8 w-px bg-gradient-to-b from-violet-500/40 via-violet-500/20 to-transparent" />

                    <div class="space-y-20">
                        <div v-for="experience in portfolio.experiences" :key="experience.company"
                            class="relative grid md:grid-cols-[200px_1fr] gap-8 group pl-12">
                            <!-- Dot da timeline -->
                            <div
                                class="absolute left-[11px] top-2.5 h-2.5 w-2.5 rounded-full bg-gradient-to-br from-violet-400 to-fuchsia-400 shadow-[0_0_14px_rgba(139,92,246,0.7)] timeline-dot" />
                            <!-- Período -->
                            <div class="text-xs text-violet-400/50 font-mono pt-3 tracking-wide">
                                {{ experience.period }}</div>
                            <!-- Card da experiência -->
                            <div
                                class="rounded-3xl border border-white/[0.06] bg-white/[0.03] p-6 md:p-8 transition-all duration-300 group-hover:border-violet-500/25 group-hover:bg-violet-500/[0.04] group-hover:-translate-y-1 backdrop-blur-sm">
                                <h3
                                    class="text-2xl md:text-3xl font-bold mb-1.5 tracking-tight group-hover:text-violet-300 transition-colors">
                                    {{ experience.role }}
                                </h3>
                                <div
                                    class="text-white/25 mb-6 uppercase tracking-widest text-[10px] flex items-center gap-2">
                                    <Briefcase class="w-3 h-3" />
                                    {{ experience.company }}
                                </div>
                                <ul class="space-y-4">
                                    <li v-for="achievement in experience.achievements" :key="achievement"
                                        class="text-white/55 font-normal leading-relaxed flex gap-3 text-sm">
                                        <span
                                            class="w-1.5 h-1.5 rounded-full bg-violet-500/25 mt-2 shrink-0 group-hover:bg-violet-400 transition-colors" />
                                        {{ achievement }}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- ═══════════════ CONTATO ═══════════════ -->
            <section id="contato" class="py-32 px-6 md:px-24 border-t border-white/[0.06] relative overflow-hidden">
                <!-- Glow de fundo -->
                <div
                    class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60vw] h-[40vh] bg-gradient-to-t from-violet-600/12 to-transparent -z-10 blur-3xl pointer-events-none" />
                <div class="max-w-4xl mx-auto text-center">
                    <div
                        class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/20 bg-violet-500/5 text-[10px] uppercase tracking-widest text-violet-400/70 mb-10">
                        <Send class="w-3 h-3" />
                        Vamos Conversar?
                    </div>
                    <h3 class="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[1.05]">
                        Pronto para levar seu <br />
                        <span
                            class="italic serif bg-gradient-to-r from-violet-300 via-fuchsia-300 to-violet-400 bg-clip-text text-transparent">negócio</span>
                        ao próximo nível?
                    </h3>
                    <p class="text-sm md:text-base text-white/40 font-normal tracking-wide mb-14 max-w-lg mx-auto leading-relaxed">
                        Disponível para projetos freelance e parcerias estratégicas.<br />
                        <span class="text-violet-300/60">Resposta em até 24 horas.</span>
                    </p>

                    <!-- Botões CTA -->
                    <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                        <a v-if="portfolio.contact?.whatsapp" :href="whatsappLink" target="_blank"
                            rel="noopener noreferrer"
                            class="flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full font-bold uppercase tracking-widest text-xs hover:from-green-400 hover:to-emerald-400 hover:scale-105 transition-all shadow-xl shadow-green-500/25 whatsapp-glow w-full sm:w-auto justify-center">
                            <Send class="w-4 h-4" />
                            WhatsApp
                        </a>
                        <a href="mailto:contato@sergioschultz.com"
                            class="flex items-center gap-3 px-10 py-5 border border-violet-500/25 text-violet-300 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-violet-500/10 hover:border-violet-400/40 transition-all w-full sm:w-auto justify-center backdrop-blur-sm">
                            <Mail class="w-4 h-4" /> Enviar Email
                        </a>
                    </div>

                    <!-- Copiar link -->
                    <div class="flex justify-center mb-20">
                        <button type="button" @click="copyPortfolioLink"
                            class="flex items-center gap-3 px-7 py-3 rounded-full border border-white/8 text-white/50 text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                            <Link class="w-3.5 h-3.5" />
                            {{ copyLabel }}
                        </button>
                    </div>

                    <!-- Redes sociais -->
                    <div class="flex justify-center gap-4">
                        <a href="https://www.facebook.com/Sergioschultzz" target="_blank" rel="noopener noreferrer"
                            class="p-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-violet-500/10 hover:border-violet-500/25 transition-all group/social">
                            <Facebook
                                class="w-5 h-5 text-white/30 group-hover/social:text-violet-300 transition-colors" />
                        </a>
                        <a href="https://www.linkedin.com/in/sergio-schultz-48b779280/" target="_blank"
                            rel="noopener noreferrer"
                            class="p-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-violet-500/10 hover:border-violet-500/25 transition-all group/social">
                            <Linkedin
                                class="w-5 h-5 text-white/30 group-hover/social:text-violet-300 transition-colors" />
                        </a>
                        <a href="https://github.com/schultz196" target="_blank" rel="noopener noreferrer"
                            class="p-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-violet-500/10 hover:border-violet-500/25 transition-all group/social">
                            <Github
                                class="w-5 h-5 text-white/30 group-hover/social:text-violet-300 transition-colors" />
                        </a>
                    </div>

                    <div v-if="portfolio.contact?.location"
                        class="mt-16 text-[10px] uppercase tracking-[0.4em] text-white/15">
                        {{ portfolio.contact.location }}
                    </div>
                </div>
            </section>

            <!-- Footer -->
            <footer
                class="py-10 px-6 md:px-24 border-t border-white/[0.04] flex flex-col md:flex-row justify-between items-center gap-4 text-white/15 text-[10px] uppercase tracking-[0.3em]">
                <div>© 2026 SERGIO SCHULTZ • Web Designer & Desenvolvedor</div>
                <div class="flex gap-8">
                    <span class="hover:text-violet-300 transition-colors cursor-default">Privacidade</span>
                    <span class="hover:text-violet-300 transition-colors cursor-default">Termos</span>
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
