<template>
    <div
        class="bg-[#080c1e] text-white font-sans scroll-smooth overflow-x-hidden selection:bg-amber-400 selection:text-black">
        <div ref="cursorRef" class="custom-cursor" aria-hidden="true"></div>

        <!-- Barra de progresso -->
        <div class="fixed top-0 left-0 right-0 z-[60] h-0.5 bg-white/5">
            <div class="h-full bg-amber-400 transition-all duration-150" :style="{ width: scrollProgress + '%' }" />
        </div>

        <!-- Nav -->
        <header class="fixed top-0 left-0 right-0 z-40 bg-[#080c1e]/80 backdrop-blur-md border-b border-white/5">
            <nav class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <a href="#home" class="text-lg font-bold tracking-tight text-amber-400">SERGIO SCHULTZ</a>
                <div class="hidden md:flex gap-8 text-[11px] uppercase tracking-[0.2em] text-white/40">
                    <a v-for="item in navItems" :key="item.id" :href="'#' + item.id"
                        class="transition-colors duration-200"
                        :class="activeSection === item.id ? 'text-amber-400' : 'hover:text-amber-400'">
                        {{ item.label }}
                    </a>
                </div>
                <button class="md:hidden text-amber-400 text-xl" @click="toggleMenu">
                    <span v-if="menuOpen">?</span><span v-else>?</span>
                </button>
            </nav>
            <div v-if="menuOpen"
                class="md:hidden absolute left-0 right-0 top-full border-t border-amber-500/10 bg-[#080c1e]/95 backdrop-blur-xl">
                <div class="flex flex-col px-6 py-6 gap-5 uppercase tracking-[0.2em] text-xs">
                    <a v-for="item in navItems" :key="item.id" :href="'#' + item.id" @click="toggleMenu"
                        :class="activeSection === item.id ? 'text-amber-400' : 'text-white/50 hover:text-amber-400'">
                        {{ item.label }}
                    </a>
                </div>
            </div>
        </header>

        <main>
            <!-- �.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.�
                 1. HERO
            �.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.� -->
            <section id="home"
                class="relative min-h-screen flex flex-col justify-end pb-24 px-8 md:px-20 overflow-hidden">
                <!-- Background foto -->
                <div class="absolute inset-0 -z-10">
                    <img :src="`${base}images/sergio.jpg`" alt="" class="w-full h-full object-cover object-top" />
                    <div class="absolute inset-0 bg-[#080c1e]/75" />
                </div>
                <!-- Conteúdo bottom-left -->
                <div class="max-w-2xl">
                    <h1 class="text-5xl md:text-7xl font-bold tracking-tight mb-4 leading-[1.05]">Sergio Schultz</h1>
                    <p class="text-base md:text-lg font-bold text-white/90 mb-3">
                        Desenvolvedor Web &amp; Criador de Sistemas Digitais
                    </p>
                    <p class="text-sm md:text-base text-white/60 mb-8 leading-relaxed max-w-xl">
                        Crio sistemas web modernos, funcionais e orientados a resultado — do design visual à gestão
                        estratégica de projetos.
                    </p>
                    <div class="flex flex-wrap gap-4">
                        <a href="#contato"
                            class="px-7 py-3 bg-amber-400 text-black font-bold rounded-full text-sm hover:bg-amber-300 transition-all">
                            Vamos Conversar
                        </a>
                        <a href="#projetos"
                            class="px-7 py-3 border-2 border-amber-400 text-amber-400 font-bold rounded-full text-sm hover:bg-amber-400/10 transition-all">
                            Ver Projetos
                        </a>
                    </div>
                </div>
            </section>

            <!-- �.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.�
                 2. QUEM �? SERGIO SCHULTZ
            �.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.� -->
            <section id="sobre" class="py-20 md:py-28 px-8 md:px-20 bg-[#080c1e]">
                <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
                    <!-- Esquerda: texto -->
                    <div>
                        <span
                            class="inline-block bg-amber-950/80 text-amber-400 text-[10px] font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
                            Sobre Mim
                        </span>
                        <h2 class="text-4xl md:text-5xl font-bold tracking-tight mb-8">Quem é Sergio Schultz?</h2>
                        <p class="text-white/70 leading-relaxed mb-4">
                            Desenvolvedor Web com experiência em <strong class="text-white">HTML, CSS, JavaScript, PHP
                                e
                                Tailwind</strong>,
                            atuando na criação de sistemas e interfaces modernas. Especialista na
                            implementação e gestão de ambientes <strong class="text-white">Moodle para EAD</strong> e
                            criador do sistema
                            de pedidos <strong class="text-white">PedeBem</strong>, focando em soluções digitais
                            eficientes para o mercado
                            online.
                        </p>
                        <p class="text-white/70 leading-relaxed mb-10">
                            Formação em <strong class="text-white">Educação e Música</strong> como base
                            complementar à
                            atuação
                            tecnológica, trazendo uma visão humanizada e didática para cada projeto.
                        </p>
                        <!-- Stats -->
                        <div class="grid grid-cols-2 gap-5">
                            <div class="border border-amber-400/40 rounded-2xl p-6">
                                <div class="text-3xl font-bold text-white mb-1">+20 Anos</div>
                                <div class="text-sm text-white/50">de experiência</div>
                            </div>
                            <div class="border border-rose-500/40 rounded-2xl p-6">
                                <div class="text-3xl font-bold text-white mb-1">100%</div>
                                <div class="text-sm text-white/50">comprometimento</div>
                            </div>
                        </div>
                    </div>
                    <!-- Direita: ilustração -->
                    <div
                        class="rounded-3xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-orange-300 via-amber-200 to-orange-400 flex items-center justify-center">
                        <div class="text-center p-8">
                            <div class="text-8xl mb-4">�Y'�</div>
                            <p class="text-orange-900/60 font-medium text-sm">Web Developer &amp; Designer</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- �.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.�
                 3. PEDEBEM
            �.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.� -->
            <section id="projetos"
                class="relative min-h-[90vh] flex flex-col justify-center px-8 md:px-20 py-24 overflow-hidden">
                <!-- BG screenshot -->
                <div class="absolute inset-0 -z-10">
                    <img :src="`${base}images/PedeBemTela1.png`" alt="" class="w-full h-full object-cover object-top" />
                    <div class="absolute inset-0 bg-[#080c1e]/80" />
                </div>
                <div class="max-w-7xl mx-auto w-full">
                    <span
                        class="inline-block bg-amber-950/80 text-amber-400 text-[10px] font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
                        Projetos em Destaque
                    </span>
                    <h2 class="text-4xl md:text-5xl font-bold tracking-tight mb-10">PedeBem �?" Sistema de Pedidos</h2>
                    <div class="grid md:grid-cols-2 gap-8 items-start">
                        <!-- Card roxo "Sobre o Projeto" -->
                        <div class="bg-violet-600/80 backdrop-blur-sm rounded-2xl p-7">
                            <h3 class="text-xl font-bold mb-3">Sobre o Projeto</h3>
                            <p class="text-white/80 leading-relaxed text-sm">
                                Sistema de pedidos customizado desenvolvido para agilizar processos
                                comerciais e a interação com o cliente, com foco em performance e
                                clareza visual.
                            </p>
                        </div>
                        <!-- Destaques técnicos -->
                        <div>
                            <h3 class="text-xl font-bold mb-5">Destaques Técnicos</h3>
                            <ul class="space-y-3 mb-8">
                                <li class="flex items-start gap-3 text-white/80 text-sm">
                                    <span class="mt-1.5 w-2 h-2 rounded-full bg-amber-400 shrink-0"></span>
                                    Dashboard com indicadores essenciais em destaque
                                </li>
                                <li class="flex items-start gap-3 text-white/80 text-sm">
                                    <span class="mt-1.5 w-2 h-2 rounded-full bg-amber-400 shrink-0"></span>
                                    Componentes responsivos e prontos para escalar
                                </li>
                                <li class="flex items-start gap-3 text-white/80 text-sm">
                                    <span class="mt-1.5 w-2 h-2 rounded-full bg-amber-400 shrink-0"></span>
                                    Layout validado para operação do dia a dia
                                </li>
                            </ul>
                            <!-- Tags -->
                            <div class="flex flex-wrap gap-3 mb-8">
                                <span v-for="tech in pedebemProject?.technologies" :key="tech"
                                    class="text-[11px] font-semibold uppercase tracking-widest text-amber-400 border border-amber-400/50 px-4 py-1.5 rounded-full">
                                    {{ tech }}
                                </span>
                            </div>
                            <a :href="pedebemProject?.url" target="_blank" rel="noopener noreferrer"
                                class="inline-block px-7 py-3 bg-amber-400 text-black font-bold rounded-full text-sm hover:bg-amber-300 transition-all">
                                Ver Projeto
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <!-- �.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.�
                 4. AUTOMA�?�.ES COM TYPEBOT
            �.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.� -->
            <section class="min-h-[80vh] flex flex-col md:flex-row">
                <!-- Esquerda: screenshot -->
                <div class="md:w-1/2 min-h-[40vh] md:min-h-full overflow-hidden">
                    <img :src="`${base}images/typebot.png`" alt="Typebot Flow" class="w-full h-full object-cover object-left" />
                </div>
                <!-- Direita: conteúdo -->
                <div class="md:w-1/2 bg-[#080c1e] px-8 md:px-16 py-16 md:py-24 flex flex-col justify-center">
                    <span
                        class="inline-block bg-amber-950/80 text-amber-400 text-[10px] font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5 self-start">
                        Projetos em Destaque
                    </span>
                    <h2 class="text-3xl md:text-4xl font-bold tracking-tight mb-6 leading-tight">
                        Automações Inteligentes com Typebot
                    </h2>
                    <p class="text-white/65 leading-relaxed mb-8 text-sm md:text-base">
                        Desenvolvimento de <strong class="text-white">bots de atendimento e triagem</strong> utilizando
                        a plataforma Typebot
                        para otimização de leads. Fluxos lógicos avançados com integração de APIs para
                        automação de processos comerciais e atendimento ao cliente.
                    </p>
                    <div class="flex flex-wrap gap-3">
                        <span v-for="tech in automacaoProject?.technologies" :key="tech"
                            class="text-[11px] font-semibold uppercase tracking-widest text-amber-400 border border-amber-400/50 px-4 py-1.5 rounded-full">
                            {{ tech }}
                        </span>
                    </div>
                </div>
            </section>

            <!-- �.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.�
                 5. TECNOLOGIAS & ESPECIALIDADES
            �.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.� -->
            <section id="tecnologias" class="py-20 md:py-28 px-8 md:px-20 bg-[#080c1e]">
                <div class="max-w-7xl mx-auto">
                    <span
                        class="inline-block bg-amber-950/80 text-amber-400 text-[10px] font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
                        Stack Técnica
                    </span>
                    <h2 class="text-4xl md:text-5xl font-bold tracking-tight mb-4">Tecnologias &amp; Especialidades</h2>
                    <p class="text-white/55 max-w-3xl mb-14 leading-relaxed">
                        Seleção enxuta e estratégica de tecnologias com prioridade no que gera impacto real em
                        produto,
                        performance e automação.
                    </p>
                    <!-- 3 colunas -->
                    <div class="grid md:grid-cols-3 gap-10">
                        <!-- Principais -->
                        <div>
                            <div class="flex items-center gap-3 mb-6">
                                <Server class="w-8 h-8 text-amber-400" />
                                <h3 class="text-xl font-bold">Principais</h3>
                            </div>
                            <ul class="space-y-3">
                                <li class="flex items-center gap-2 text-white/80">
                                    <span class="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span>
                                    <span><strong class="text-white">PHP</strong> �?" Backend</span>
                                </li>
                                <li class="flex items-center gap-2 text-white/80">
                                    <span class="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span>
                                    <span><strong class="text-white">JavaScript</strong> �?" Frontend</span>
                                </li>
                                <li class="flex items-center gap-2 text-white/80">
                                    <span class="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span>
                                    <span><strong class="text-white">CSS</strong> �?" UI Styling</span>
                                </li>
                            </ul>
                        </div>
                        <!-- Secundárias -->
                        <div>
                            <div class="flex items-center gap-3 mb-6">
                                <Layers class="w-8 h-8 text-amber-400" />
                                <h3 class="text-xl font-bold">Secundárias</h3>
                            </div>
                            <ul class="space-y-3">
                                <li class="flex items-center gap-2 text-white/80">
                                    <span class="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span>
                                    <span><strong class="text-white">Bootstrap</strong> �?" Frontend</span>
                                </li>
                                <li class="flex items-center gap-2 text-white/80">
                                    <span class="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span>
                                    <span><strong class="text-white">Tailwind</strong> �?" Frontend</span>
                                </li>
                                <li class="flex items-center gap-2 text-white/80">
                                    <span class="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span>
                                    <span><strong class="text-white">Ajax</strong> �?" Integrações</span>
                                </li>
                            </ul>
                        </div>
                        <!-- Especialidades -->
                        <div>
                            <div class="flex items-center gap-3 mb-6">
                                <Bot class="w-8 h-8 text-amber-400" />
                                <h3 class="text-xl font-bold">Especialidades</h3>
                            </div>
                            <ul class="space-y-3">
                                <li class="flex items-center gap-2 text-white/80">
                                    <span class="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span>
                                    <span><strong class="text-white">Moodle</strong> �?" EAD</span>
                                </li>
                                <li class="flex items-center gap-2 text-white/80">
                                    <span class="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span>
                                    <span><strong class="text-white">Typebot</strong> — Automação</span>
                                </li>
                                <li class="flex items-center gap-2 text-white/80">
                                    <span class="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span>
                                    <span><strong class="text-white">Sistemas</strong> — Automação</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <!-- �.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.�
                 6. PROFICI�SNCIA
            �.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.� -->
            <section id="proficiencia" class="py-20 md:py-28 px-8 md:px-20 bg-[#080c1e]">
                <div class="max-w-7xl mx-auto">
                    <span
                        class="inline-block bg-amber-950/80 text-amber-400 text-[10px] font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
                        Proficiência
                    </span>
                    <h2 class="text-4xl md:text-5xl font-bold tracking-tight mb-4">O Quanto Posso Impactar Sua Empresa?
                    </h2>
                    <p class="text-white/55 max-w-3xl mb-14 leading-relaxed">
                        Minha versatilidade permite atuar desde o design visual até a gestão estratégica de projetos,
                        garantindo uma entrega técnica refinada e humanizada.
                    </p>
                    <!-- 2x2 grid de barras -->
                    <div class="grid md:grid-cols-2 gap-x-16 gap-y-10" ref="statsRef">
                        <!-- Web Design -->
                        <div>
                            <div class="flex items-center gap-4 mb-2">
                                <div class="flex-1 h-4 bg-white/5 rounded-full overflow-hidden">
                                    <div class="h-full bg-amber-400 rounded-full transition-[width] duration-[3500ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                                        :style="{ width: statsVisible ? '92%' : '0%' }" />
                                </div>
                                <span class="text-white font-bold text-sm w-10 shrink-0">92%</span>
                            </div>
                            <p class="text-white/70 text-sm">Web Design</p>
                        </div>
                        <!-- EAD/Moodle -->
                        <div>
                            <div class="flex items-center gap-4 mb-2">
                                <div class="flex-1 h-4 bg-white/5 rounded-full overflow-hidden">
                                    <div class="h-full bg-rose-500 rounded-full transition-[width] duration-[3500ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                                        :style="{ width: statsVisible ? '88%' : '0%' }" />
                                </div>
                                <span class="text-white font-bold text-sm w-10 shrink-0">88%</span>
                            </div>
                            <p class="text-white/70 text-sm">EAD / Moodle</p>
                        </div>
                        <!-- Gestão -->
                        <div>
                            <div class="flex items-center gap-4 mb-2">
                                <div class="flex-1 h-4 bg-white/5 rounded-full overflow-hidden">
                                    <div class="h-full bg-orange-400 rounded-full transition-[width] duration-[3500ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                                        :style="{ width: statsVisible ? '86%' : '0%' }" />
                                </div>
                                <span class="text-white font-bold text-sm w-10 shrink-0">86%</span>
                            </div>
                            <p class="text-white/70 text-sm">Gestão de Projetos</p>
                        </div>
                        <!-- PHP -->
                        <div>
                            <div class="flex items-center gap-4 mb-2">
                                <div class="flex-1 h-4 bg-white/5 rounded-full overflow-hidden">
                                    <div class="h-full bg-cyan-400 rounded-full transition-[width] duration-[3500ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                                        :style="{ width: statsVisible ? '80%' : '0%' }" />
                                </div>
                                <span class="text-white font-bold text-sm w-10 shrink-0">80%</span>
                            </div>
                            <p class="text-white/70 text-sm">Desenvolvimento PHP</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- �.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.�
                 7. WEB DESIGNER & DESENVOLVEDOR
            �.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.� -->
            <section id="experiencia" class="py-20 md:py-28 px-8 md:px-20 bg-[#080c1e]">
                <div class="max-w-7xl mx-auto">
                    <span
                        class="inline-block bg-amber-950/80 text-amber-400 text-[10px] font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
                        Trajetória Profissional
                    </span>
                    <h2 class="text-4xl md:text-5xl font-bold tracking-tight mb-3">Web Designer &amp; Desenvolvedor</h2>
                    <p class="text-white/60 mb-12 font-medium">
                        <strong class="text-white/90">Autônomo / Consultoria Tech</strong> �?" Longa data
                    </p>
                    <!-- 3 colunas de achievements -->
                    <div class="grid md:grid-cols-3 gap-8">
                        <div v-for="(ach, i) in portfolio.experiences[0].achievements" :key="i">
                            <div class="flex items-center gap-2 mb-3">
                                <ArrowRight class="w-5 h-5 shrink-0"
                                    :class="[i === 0 ? 'text-amber-400' : i === 1 ? 'text-rose-400' : 'text-amber-400']" />
                                <h3 class="font-bold text-white text-lg">{{ achTitles[0][i] }}</h3>
                            </div>
                            <p class="text-white/55 text-sm leading-relaxed">{{ ach }}</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- �.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.�
                 8. MOODLE & GESTOR DE PROJETOS
            �.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.� -->
            <section class="py-20 md:py-28 px-8 md:px-20 bg-[#080c1e]">
                <div class="max-w-7xl mx-auto">
                    <span
                        class="inline-block bg-amber-950/80 text-amber-400 text-[10px] font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
                        Trajetória Profissional
                    </span>
                    <h2 class="text-4xl md:text-5xl font-bold tracking-tight mb-3">Especialista em Moodle &amp; Gestor
                        de Projetos Online</h2>
                    <p class="text-white/60 mb-12 font-medium">
                        <strong class="text-white/90">Instituições de Ensino e EAD</strong> �?" Contínuo
                    </p>
                    <!-- 2 cards com imagem -->
                    <div class="grid md:grid-cols-2 gap-8">
                        <!-- Plataforma Moodle -->
                        <div>
                            <h3 class="text-xl font-bold mb-2">Plataforma Moodle</h3>
                            <p class="text-white/55 text-sm leading-relaxed mb-6">
                                Configuração e administração técnica para ambientes virtuais de
                                aprendizagem, com aplicação de metodologias de Gerência de
                                Projetos Online.
                            </p>
                            <div
                                class="rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-violet-400 via-orange-300 to-amber-300 flex items-center justify-center">
                                <div class="text-center p-6">
                                    <div class="text-7xl mb-3">�YZ"</div>
                                    <p class="text-violet-900/60 font-medium text-sm">Moodle / e-Learning</p>
                                </div>
                            </div>
                        </div>
                        <!-- Automação de Atendimento -->
                        <div>
                            <h3 class="text-xl font-bold mb-2">Automação de Atendimento</h3>
                            <p class="text-white/55 text-sm leading-relaxed mb-6">
                                Desenvolvimento de assistentes virtuais e automação de atendimento
                                via Typebot, estruturando cursos e fluxos de trabalho de forma
                                eficiente.
                            </p>
                            <div
                                class="rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-orange-300 via-pink-300 to-amber-200 flex items-center justify-center">
                                <div class="text-center p-6">
                                    <div class="text-7xl mb-3">�Y�-</div>
                                    <p class="text-orange-900/60 font-medium text-sm">Automação / Typebot</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- �.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.�
                 9. FORMA�?�fO EM M�sSICA & EDUCA�?�fO
            �.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.� -->
            <section class="py-20 md:py-28 px-8 md:px-20 bg-[#080c1e]">
                <div class="max-w-7xl mx-auto">
                    <span
                        class="inline-block bg-amber-950/80 text-amber-400 text-[10px] font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
                        Trajetória Profissional
                    </span>
                    <h2 class="text-4xl md:text-5xl font-bold tracking-tight mb-12">Formação em Música &amp;
                        Educação
                    </h2>
                    <!-- 2 cards: imagem em cima, texto abaixo -->
                    <div class="grid md:grid-cols-2 gap-8">
                        <!-- Especialista em Música -->
                        <div>
                            <div
                                class="rounded-2xl overflow-hidden aspect-[4/3] mb-6 bg-gradient-to-br from-orange-300 via-amber-200 to-rose-300 flex items-center justify-center">
                                <div class="text-center p-6">
                                    <div class="text-7xl mb-3">�YZ�</div>
                                    <p class="text-orange-900/60 font-medium text-sm">Música & Regência</p>
                                </div>
                            </div>
                            <h3 class="text-xl font-bold mb-3">Especialista em Música e Regência</h3>
                            <p class="text-white/55 text-sm leading-relaxed">
                                Atuação especializada em Música na Igreja, regência de coro de vozes e
                                aplicação de Licenciatura em Música para desenvolvimento de grupos
                                vocais.
                            </p>
                        </div>
                        <!-- Professor de Instrumentos -->
                        <div>
                            <div
                                class="rounded-2xl overflow-hidden aspect-[4/3] mb-6 bg-gradient-to-br from-amber-200 via-orange-300 to-rose-300 flex items-center justify-center">
                                <div class="text-center p-6">
                                    <div class="text-7xl mb-3">�YZ�</div>
                                    <p class="text-orange-900/60 font-medium text-sm">Violão · Teclado · Flauta</p>
                                </div>
                            </div>
                            <h3 class="text-xl font-bold mb-3">Professor de Instrumentos Musicais</h3>
                            <p class="text-white/55 text-sm leading-relaxed">
                                Instrução técnica em Violão, Teclado e Flauta Doce para diferentes faixas
                                etárias, com material pedagógico próprio baseado na formação em
                                Magistério.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- �.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.�
                 10. CONTATO
            �.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.��.� -->
            <section id="contato" class="min-h-[80vh] flex flex-col md:flex-row bg-[#080c1e]">
                <!-- Esquerda: conteúdo -->
                <div class="md:w-1/2 px-8 md:px-16 py-20 md:py-28 flex flex-col justify-center">
                    <span
                        class="inline-block bg-amber-950/80 text-amber-400 text-[10px] font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5 self-start">
                        Contato
                    </span>
                    <h2 class="text-4xl md:text-5xl font-bold tracking-tight mb-6">Vamos Conversar?</h2>
                    <p class="text-white/65 leading-relaxed mb-10 max-w-md">
                        Pronto para levar seu negócio ao próximo nível? Disponível para <strong
                            class="text-white">projetos freelance</strong> e
                        <strong class="text-white">parcerias estratégicas</strong>. Espírito Santo, Brasil.
                    </p>
                    <!-- Cards de contato -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                        <a v-if="portfolio.contact?.whatsapp" :href="whatsappLink" target="_blank"
                            rel="noopener noreferrer"
                            class="border border-amber-400/40 rounded-2xl p-5 hover:bg-amber-400/5 transition-all group">
                            <div class="flex items-center gap-2 mb-2">
                                <Send class="w-4 h-4 text-amber-400" />
                                <span class="font-bold text-white">WhatsApp</span>
                            </div>
                            <p class="text-white/50 text-sm">Resposta rápida e direta para alinhar seu projeto.</p>
                        </a>
                        <a href="mailto:contato@sergioschultz.com"
                            class="border border-rose-500/40 rounded-2xl p-5 hover:bg-rose-500/5 transition-all">
                            <div class="flex items-center gap-2 mb-2">
                                <Mail class="w-4 h-4 text-rose-400" />
                                <span class="font-bold text-white">E-mail</span>
                            </div>
                            <p class="text-white/50 text-sm">contato@sergioschultz.com</p>
                        </a>
                        <div class="border border-amber-400/40 rounded-2xl p-5 sm:col-span-2">
                            <div class="flex items-center gap-2 mb-2">
                                <MapPin class="w-4 h-4 text-amber-400" />
                                <span class="font-bold text-white">Localização</span>
                            </div>
                            <p class="text-white/50 text-sm">Espírito Santo, Brasil</p>
                        </div>
                    </div>
                    <!-- Botões CTA -->
                    <div class="flex flex-wrap gap-4">
                        <a v-if="portfolio.contact?.whatsapp" :href="whatsappLink" target="_blank"
                            rel="noopener noreferrer"
                            class="px-7 py-3 bg-amber-400 text-black font-bold rounded-full text-sm hover:bg-amber-300 transition-all">
                            WhatsApp
                        </a>
                        <a href="mailto:contato@sergioschultz.com"
                            class="px-7 py-3 border-2 border-amber-400 text-amber-400 font-bold rounded-full text-sm hover:bg-amber-400/10 transition-all">
                            Enviar Email
                        </a>
                    </div>
                </div>
                <!-- Direita: ilustração -->
                <div
                    class="md:w-1/2 min-h-[50vh] md:min-h-full bg-gradient-to-br from-orange-300 via-amber-200 to-rose-300 flex items-center justify-center">
                    <div class="text-center p-8">
                        <div class="text-8xl mb-4">�Y��</div>
                        <p class="text-orange-900/60 font-medium">Vamos trabalhar juntos!</p>
                    </div>
                </div>
            </section>

            <!-- Footer -->
            <footer
                class="py-8 px-8 md:px-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-white/20 text-[10px] uppercase tracking-[0.3em]">
                <div>© 2026 SERGIO SCHULTZ �?� Web Designer &amp; Desenvolvedor</div>
                <div class="flex gap-8">
                    <a href="https://www.linkedin.com/in/sergio-schultz-48b779280/" target="_blank"
                        rel="noopener noreferrer" class="hover:text-amber-400 transition-colors">LinkedIn</a>
                    <a href="https://github.com/schultz196" target="_blank" rel="noopener noreferrer"
                        class="hover:text-amber-400 transition-colors">GitHub</a>
                    <a href="https://www.facebook.com/Sergioschultzz" target="_blank" rel="noopener noreferrer"
                        class="hover:text-amber-400 transition-colors">Facebook</a>
                </div>
            </footer>
        </main>
    </div>
</template>
<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue';
import {
    ArrowRight,
    Bot,
    Briefcase,
    Layers,
    Mail,
    MapPin,
    Send,
    Server,
} from 'lucide-vue-next';
import { usePortfolioStore } from './stores/portfolio';

const base = import.meta.env.BASE_URL;
const menuOpen = ref(false);
const toggleMenu = () => { menuOpen.value = !menuOpen.value; };

const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'sobre', label: 'Sobre' },
    { id: 'projetos', label: 'Projetos' },
    { id: 'tecnologias', label: 'Tecnologias' },
    { id: 'proficiencia', label: 'Proficiência' },
    { id: 'experiencia', label: 'Trajetória' },
    { id: 'contato', label: 'Contato' },
];

const activeSection = ref('home');
const scrollProgress = ref(0);
const cursorRef = ref<HTMLElement | null>(null);

const store = usePortfolioStore();
const portfolio = computed(() => store.portfolio);
const pedebemProject = computed(() => portfolio.value?.projects.find(p => p.name === 'PedeBem'));
const automacaoProject = computed(() => portfolio.value?.projects.find(p => p.name === 'Automações Inteligentes'));

// Títulos curtos para os achievements de cada experiência
const achTitles: Record<number, string[]> = {
    0: ['Interfaces Modernas', 'Integração de Sistemas', 'PedeBem'],
    1: ['Plataforma Moodle', 'Gerência de Projetos', 'Automação Typebot'],
    2: ['Música na Igreja', 'Regência Coral', 'Licenciatura em Música'],
    3: ['Violão & Teclado', 'Flauta Doce', 'Material Pedagógico'],
};

const statsVisible = ref(false);
const statsRef = ref<HTMLElement | null>(null);

const whatsappLink = computed(() => {
    const phone = portfolio.value?.contact?.whatsapp ?? '';
    const digits = phone.replace(/\D/g, '');
    return digits ? `https://wa.me/55${digits}` : '#';
});

const sections = ['home', 'sobre', 'projetos', 'tecnologias', 'proficiencia', 'experiencia', 'contato'];
const onScroll = () => {
    const offset = 140;
    let current = activeSection.value;
    for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= offset) current = id;
    }
    activeSection.value = current;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    scrollProgress.value = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
};

let statsObserver: IntersectionObserver | null = null;
let cursorRaf = 0;

const onMouseMove = (event: MouseEvent) => {
    if (!cursorRef.value) return;
    const { clientX, clientY } = event;
    if (cursorRaf) cancelAnimationFrame(cursorRaf);
    cursorRaf = requestAnimationFrame(() => {
        if (!cursorRef.value) return;
        cursorRef.value.style.transform = `translate(${clientX}px, ${clientY}px)`;
    });
};
const onCursorEnter = () => cursorRef.value?.classList.add('custom-cursor--active');
const onCursorLeave = () => cursorRef.value?.classList.remove('custom-cursor--active');

onMounted(() => {
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.querySelectorAll('a, button, [role="button"]').forEach(el => {
        el.addEventListener('mouseenter', onCursorEnter);
        el.addEventListener('mouseleave', onCursorLeave);
    });
    if (!statsRef.value) return;
    statsObserver = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
            statsVisible.value = true;
            statsObserver?.disconnect();
            statsObserver = null;
        }
    }, { threshold: 0.2 });
    statsObserver.observe(statsRef.value);
});

onUnmounted(() => {
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('mousemove', onMouseMove);
    document.querySelectorAll('a, button, [role="button"]').forEach(el => {
        el.removeEventListener('mouseenter', onCursorEnter);
        el.removeEventListener('mouseleave', onCursorLeave);
    });
    statsObserver?.disconnect();
    statsObserver = null;
    if (cursorRaf) cancelAnimationFrame(cursorRaf);
});
</script>
