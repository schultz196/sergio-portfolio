<template>
    <div
        class="bg-[#00002E] text-white font-sans scroll-smooth overflow-x-hidden selection:bg-amber-400 selection:text-black">

        <!-- Manchas de fundo decorativas -->
        <div class="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
            <div
                class="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-[#2B5269] opacity-20 blur-[120px]">
            </div>
            <div
                class="absolute top-[30%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#2B5269] opacity-15 blur-[140px]">
            </div>
            <div
                class="absolute bottom-[10%] left-[20%] w-[700px] h-[500px] rounded-full bg-[#2B5269] opacity-10 blur-[160px]">
            </div>
        </div>

        <div ref="cursorRef" class="custom-cursor" aria-hidden="true"></div>

        <!-- Barra de progresso -->
        <div class="fixed top-0 left-0 right-0 z-[60] h-0.5 bg-white/5">
            <div class="h-full bg-amber-400 transition-all duration-150" :style="{ width: scrollProgress + '%' }" />
        </div>

        <!-- Nav -->
        <header class="fixed top-0 left-0 right-0 z-40 bg-[#00002E]/90 backdrop-blur-md border-b border-white/10">
            <nav class="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
                <a href="#home" class="text-xl font-bold tracking-tight text-amber-400">SERGIO SCHULTZ</a>
                <div class="hidden md:flex gap-10 text-[13px] uppercase tracking-[0.2em] text-white/70">
                    <a v-for="item in navItems" :key="item.id" :href="'#' + item.id"
                        class="transition-colors duration-200"
                        :class="activeSection === item.id ? 'text-amber-400 font-bold' : 'hover:text-amber-400'">
                        {{ item.label }}
                    </a>
                </div>
                <button class="md:hidden text-amber-400" @click="toggleMenu">
                    <X v-if="menuOpen" :size="28" />
                    <Menu v-else :size="28" />
                </button>
            </nav>
            <div v-if="menuOpen"
                class="md:hidden absolute right-0 top-full border border-white/10 bg-[#00002E] rounded-bl-2xl shadow-xl min-w-[200px]">
                <div class="flex flex-col px-7 py-7 gap-6 uppercase tracking-[0.2em] text-sm font-medium">
                    <a v-for="item in navItems" :key="item.id" :href="'#' + item.id" @click="toggleMenu"
                        :class="activeSection === item.id ? 'text-amber-400' : 'text-white hover:text-amber-400'">
                        {{ item.label }}
                    </a>
                </div>
            </div>
        </header>

        <main>
            <!-- ?.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.?
                 1. HERO
            ?.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.? -->
            <section id="home"
                class="relative min-h-screen flex flex-col justify-end pb-24 px-8 md:px-20 overflow-hidden">
                <!-- Background foto -->
                <div class="absolute inset-0">
                    <img :src="'/sergio-portfolio/images/sergio.jpg'" alt=""
                        class="w-full h-full object-cover object-top" />
                    <div class="absolute inset-0 bg-[#00002E]/50" />
                </div>
                <!-- Conte?do bottom-left -->
                <div class="relative z-10 max-w-2xl">
                    <h1 class="text-5xl md:text-7xl font-bold tracking-tight mb-4 leading-[1.05]">Sergio Schultz</h1>
                    <p class="text-base md:text-lg font-bold text-white/90 mb-3">
                        Desenvolvedor Web &amp; Criador de Sistemas Digitais
                    </p>
                    <p class="text-sm md:text-base text-white/60 mb-8 leading-relaxed max-w-xl">
                        Crio sistemas web modernos, funcionais e orientados a resultado do design visual à gestão
                        estratégica de projetos.
                    </p>
                    <div class="flex flex-wrap gap-4">
                        <a href=""
                            class="px-7 py-3 bg-amber-400 text-black font-bold rounded-full text-lg hover:bg-amber-300 transition-all">
                            Vamos Conversar
                        </a>
                        <a href="#projetos"
                            class="px-7 py-3 border-2 border-amber-400 text-amber-400 font-bold rounded-full text-lg hover:bg-amber-400/10 transition-all">
                            Ver Projetos
                        </a>
                    </div>
                </div>
            </section>

            <!-- ?.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.?
                 2. QUEM ?? SERGIO SCHULTZ
            ?.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.? -->
            <section id="sobre"
                class="py-10 md:py-16 mx-8 md:mx-50 border-8 border-[#5D5E7A] rounded-3xl px-6 md:px-10 mt-20 mb-20">
                <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
                    <!-- Esquerda: texto -->
                    <div>
                        <span
                            class="inline-block bg-[#483304] text-white text-[14px] font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
                            Sobre Mim
                        </span>
                        <h2 class="text-4xl md:text-5xl font-bold tracking-tight mb-8">Quem é Sergio Schultz?</h2>
                        <p class="text-white/70 leading-relaxed mb-4">
                            Desenvolvedor Web com experiência em <strong class="text-white">HTML, CSS, JavaScript, PHP,
                                Laravel, Vue.js
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
                            Formado em <strong class="text-white">Educação e Música</strong> como base
                            complementar ?
                            atuaçãoo
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
                    <!-- Direita: ilustra??o -->
                    <div class="rounded-3xl overflow-hidden aspect-[4/3]">
                        <img :src="'/sergio-portfolio/images/img1.png'" alt="Sergio Schultz"
                            class="w-full h-full object-cover" />
                    </div>
                </div>
            </section>

            <!-- ?.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.?
                 3. PEDEBEM
            ?.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.? -->
            <section id="projetos"
                class="relative min-h-[90vh] flex flex-col justify-center px-8 md:px-20 py-24 overflow-hidden">
                <!-- BG screenshot -->
                <div class="absolute inset-0 overflow-hidden">
                    <img :src="'/sergio-portfolio/images/PedeBemTela1.png?v=2'" alt=""
                        class="w-full h-full object-cover" style="object-position: center 15%;" />
                    <div class="absolute inset-0 bg-[#00002E]/80" />
                </div>
                <div class="relative z-10 max-w-7xl mx-auto w-full">
                    <span
                        class="inline-block bg-[#483304] text-white text-[14px] font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
                        Projetos em Destaque
                    </span>
                    <h2 class="text-4xl md:text-6xl font-bold tracking-tight mb-13">PedeBem - Sistema de Pedidos</h2>
                    <div class="grid md:grid-cols-2 gap-8 items-start">
                        <!-- Card roxo "Sobre o Projeto" -->
                        <div class="bg-violet-600/80 backdrop-blur-sm rounded-2xl p-7">
                            <h3 class="text-3xl font-bold mb-2">Sobre o Projeto</h3>
                            <p class="text-white/100 leading-relaxed text-xl">
                                Sistema de pedidos customizado desenvolvido para agilizar processos
                                comerciais e a interação com o cliente, com foco em performance e
                                clareza visual.
                            </p>
                            <a :href="pedebemProject?.url" target="_blank" rel="noopener noreferrer"
                                class="inline-block px-7 py-3 bg-amber-400 text-black font-bold rounded-full text-sm hover:bg-amber-300 transition-all mt-6">
                                Ver Projeto
                            </a>
                        </div>

                        <!-- Destaques t?cnicos -->
                        <div>
                            <h3 class="text-3xl font-bold mb-5">Destaques Técnicos</h3>
                            <ul class="space-y-3 mb-8">
                                <li class="flex items-start gap-3 text-white/80 text-2xl">
                                    <span class="mt-1.5 w-2 h-2 rounded-full bg-amber-400 shrink-0"></span>
                                    Dashboard com indicadores essenciais em destaque
                                </li>
                                <li class="flex items-start gap-3 text-white/80 text-2xl">
                                    <span class="mt-1.5 w-2 h-2 rounded-full bg-amber-400 shrink-0"></span>
                                    Componentes responsivos e prontos para escalar
                                </li>
                                <li class="flex items-start gap-3 text-white/80 text-2xl">
                                    <span class="mt-1.5 w-2 h-2 rounded-full bg-amber-400 shrink-0"></span>
                                    Layout validado para operação do dia a dia
                                </li>
                            </ul>
                            <!-- Tags -->
                            <div class="flex flex-wrap gap-3 mb-8">
                                <span v-for="tech in pedebemProject?.technologies" :key="tech"
                                    class="text-[20px] font-semibold uppercase tracking-widest text-amber-400 border border-amber-400/100 px-4 py-1.5 rounded-full">
                                    {{ tech }}
                                </span>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <!-- ?.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.?
                 4. AUTOMA???.ES COM TYPEBOT
            ?.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.? -->
            <section class="min-h-[80vh] flex flex-col md:flex-row max-w-8xl mx-auto w-full px-8 md:px-50">
                <!-- Esquerda: screenshot -->
                <div class="md:w-1/2 flex items-center justify-center p-10 md:p-16">
                    <div class="w-130 h-130 rounded-2xl shadow-2xl overflow-hidden">
                        <img :src="'/sergio-portfolio/images/automcao1.png'" alt="Typebot Flow"
                            class="w-full h-full object-cover object-center" />
                    </div>
                </div>
                <!-- Direita: conte?do -->
                <div class="md:w-1/2 px-8 md:px-16 py-16 md:py-24 flex flex-col justify-center">
                    <span
                        class="inline-block bg-[#483304] text-white text-[14px] font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5 self-start">
                        Projetos em Destaque
                    </span>
                    <h2 class="text-4xl md:text-4xl font-bold tracking-wide mb-6 leading-tight">
                        Automações Inteligentes com Typebot e n8n
                    </h2>
                    <p class="text-white/100 leading-relaxed mb-8 text-lg md:text-lg">
                        Desenvolvimento de <strong class="text-white">bots de atendimento e triagem</strong>
                        para otimização de leads. Fluxos lógicos avançados com integração de APIs para
                        automação de processos comerciais e atendimento ao cliente.
                    </p>
                    <div class="flex flex-wrap gap-3">
                        <span v-for="tech in automacaoProject?.technologies" :key="tech"
                            class="text-[18px] uppercase tracking-widest text-amber-400 border border-amber-400/50 px-4 py-1.5 rounded-full">
                            {{ tech }}
                        </span>
                    </div>
                </div>
            </section>

            <!-- ?.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.?
                 5. TECNOLOGIAS & ESPECIALIDADES
            ?.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.? -->
            <section id="tecnologias" class="py-20 md:py-28 px-8 md:px-20">
                <div class="max-w-7xl mx-auto">
                    <span
                        class="inline-block bg-[#483304] text-white text-[14px] font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
                        Stack Técnica
                    </span>
                    <h2 class="text-4xl md:text-5xl font-bold tracking-tight mb-4">Tecnologias &amp; Especialidades</h2>
                    <p class="text-white/100 text-[1.2rem] mb-14 leading-relaxed">
                        Seleção enxuta e estratégica de tecnologias com prioridade no que gera impacto real em
                        produto,
                        performance e automação.
                    </p>
                    <!-- 3 colunas -->
                    <div class="grid md:grid-cols-3 gap-10">
                        <!-- Principais -->
                        <div>
                            <div class="flex items-center gap-3 mb-6">
                                <Server :size="60" class="text-amber-400" />
                                <h3 class="text-[2.0rem] font-bold">Principais</h3>
                            </div>
                            <ul class="space-y-3 pl-16">
                                <li class="flex items-center gap-2 text-white/80">
                                    <span class="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span>
                                    <span><strong class="text-white">PHP</strong> -- Backend</span>
                                </li>
                                <li class="flex items-center gap-2 text-white/80">
                                    <span class="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span>
                                    <span><strong class="text-white">JavaScript</strong> -- Frontend</span>
                                </li>
                                <li class="flex items-center gap-2 text-white/80">
                                    <span class="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span>
                                    <span><strong class="text-white">CSS</strong> -- UI Styling</span>
                                </li>
                                <li class="flex items-center gap-2 text-white/80">
                                    <span class="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span>
                                    <span><strong class="text-white">HTML</strong> -- Estrutura</span>
                                </li>
                                <li class="flex items-center gap-2 text-white/80">
                                    <span class="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span>
                                    <span><strong class="text-white">Laravel</strong> -- Backend</span>
                                </li>
                            </ul>
                        </div>
                        <!-- Secund?rias -->
                        <div>
                            <div class="flex items-center gap-3 mb-6">
                                <Layers :size="60" class="text-amber-400" />
                                <h3 class="text-[2.0rem] font-bold">Secundárias</h3>
                            </div>
                            <ul class="space-y-3 pl-16">
                                <li class="flex items-center gap-2 text-white/80">
                                    <span class="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span>
                                    <span><strong class="text-white">Bootstrap</strong> -- Frontend</span>
                                </li>
                                <li class="flex items-center gap-2 text-white/80">
                                    <span class="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span>
                                    <span><strong class="text-white">Tailwind</strong> -- Frontend</span>
                                </li>
                                <li class="flex items-center gap-2 text-white/80">
                                    <span class="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span>
                                    <span><strong class="text-white">Vue.js</strong> -- Frontend</span>
                                </li>
                                <li class="flex items-center gap-2 text-white/80">
                                    <span class="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span>
                                    <span><strong class="text-white">Ajax</strong> -- Integrações</span>
                                </li>
                            </ul>
                        </div>
                        <!-- Especialidades -->
                        <div>
                            <div class="flex items-center gap-3 mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60"
                                    viewBox="58.641998291015625 4 906.6650390625 1016" class="text-amber-400"
                                    overflow="visible">
                                    <g fill="none" stroke="currentColor" stroke-width="45" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <path
                                            d="M 92.565,1020.0 C 93.044,961.625 95.011,945.95 98.801,930.195 C 105.548,912.047 113.814,896.201 126.038,878.703 C 138.126,865.561 151.174,854.516 165.861,844.843 C 184.311,835.796 200.02,830.529 215.814,827.166 Q 231.427,825.613 294.46,825.498" />
                                        <path
                                            d="M 118.142,309.572 C 106.514,311.415 95.704,314.893 84.559,321.252 C 77.164,327.429 69.55,336.423 63.38,347.407 Q 59.941,357.913 58.696,370.527" />
                                        <path
                                            d="M 58.642,512.329 C 60.13,523.042 63.647,533.491 69.192,543.592 C 77.988,553.915 87.741,561.447 96.915,566.517 Q 107.104,570.266 118.209,572.346" />
                                        <path
                                            d="M 906.21,309.364 C 917.732,310.515 928.216,313.501 939.088,319.275 C 947.272,326.04 954.17,334.201 960.593,346.091 Q 963.776,355.536 965.293,366.102" />
                                        <path
                                            d="M 965.307,510.616 C 964.107,521.167 960.863,531.842 954.869,543.364 C 948.187,551.754 939.276,559.52 926.767,566.828 Q 918.144,569.943 906.157,572.285" />
                                        <path
                                            d="M 748.667,730.114 C 761.944,729.759 772.454,728.26 786.136,724.641 C 798.662,719.648 809.522,713.785 821.548,705.312 C 831.12,696.931 842.312,684.431 848.923,674.826 C 854.798,664.156 859.573,652.618 863.761,638.047 Q 866.504,617.415 866.658,575.393" />
                                        <path
                                            d="M 866.645,275.986 C 866.173,263.009 864.541,251.71 860.913,237.902 C 855.151,223.08 848.249,210.496 840.747,199.804 C 831.719,189.525 823.4,181.936 810.833,172.739 C 801.524,167.449 787.266,161.341 775.057,157.797 Q 755.651,154.967 716.43,154.869" />
                                        <path
                                            d="M 282.563,154.873 C 266.961,155.153 251.205,157.203 237.783,160.771 C 225.433,165.801 209.849,174.63 199.808,182.252 C 190.08,191.624 181.637,201.864 174.978,212.012 C 167.41,227.352 163.741,237.713 160.056,253.219 Q 158.137,273.875 158.032,326.403" />
                                        <path
                                            d="M 158.046,599.546 C 158.847,620.426 161.125,635.833 165.419,651.389 C 169.627,661.706 178.589,677.591 186.38,687.941 C 200.636,702.412 211.132,710.491 221.712,717.012 C 232.073,721.944 242.539,725.672 258.187,729.054 Q 273.809,730.059 355.696,730.172" />
                                        <path
                                            d="M 785.436,825.646 C 806.409,826.531 819.615,828.534 835.526,832.958 C 851.269,839.538 867.187,848.716 880.403,858.629 C 893.998,871.758 904.509,884.765 913.258,898.47 C 919.733,911.412 925.392,926.53 929.048,941.602 Q 931.142,961.485 931.166,1020.0" />
                                        <path d="M 355.696,730.172 L 748.667,730.114" />
                                        <path d="M 667.81,825.559 L 667.799,730.262" />
                                        <path d="M 353.647,825.549 L 353.613,730.168" />
                                        <path d="M 512.268,154.85 L 512.397,4.0" />
                                        <circle cx="345.72" cy="384.13" r="74.07" />
                                        <circle cx="678.57" cy="384.16" r="74.18" />
                                        <path d="M 58.696,370.527 L 58.642,512.329" />
                                        <path d="M 334.856,604.339 L 386.102,604.266" />
                                        <path d="M 487.186,604.264 L 538.431,604.322" />
                                        <path d="M 965.293,366.102 L 965.307,510.616" />
                                        <path d="M 636.552,604.511 L 685.508,604.221" />
                                        <path d="M 866.658,575.393 L 866.645,275.986" />
                                        <path d="M 716.43,154.869 L 282.563,154.873" />
                                        <path d="M 158.032,326.403 L 158.046,599.546" />
                                        <path d="M 294.46,825.498 L 785.436,825.646" />
                                    </g>
                                </svg>
                                <h3 class="text-[2.0rem] font-bold">Especialidades</h3>
                            </div>
                            <ul class="space-y-3 pl-16">
                                <li class="flex items-center gap-2 text-white/80">
                                    <span class="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span>
                                    <span><strong class="text-white">Moodle</strong> -- EAD</span>
                                </li>
                                <li class="flex items-center gap-2 text-white/80">
                                    <span class="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span>
                                    <span><strong class="text-white">Typebot</strong> -- Automação</span>
                                </li>
                                <li class="flex items-center gap-2 text-white/80">
                                    <span class="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span>
                                    <span><strong class="text-white">N8N</strong> -- Automação</span>
                                </li>
                                <li class="flex items-center gap-2 text-white/80">
                                    <span class="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span>
                                    <span><strong class="text-white">Sistemas</strong> -- Automação</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <!-- ?.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.?
                 6. PROFICI?SNCIA
            ?.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.? -->
            <section id="proficiencia" class="py-20 md:py-28 px-8 md:px-20">
                <div class="max-w-7xl mx-auto">
                    <span
                        class="inline-block bg-[#483304] text-white text-[14px] font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
                        Proficiência
                    </span>
                    <h2 class="text-4xl md:text-5xl font-bold tracking-tight mb-4">O Quanto Posso Impactar Sua Empresa?
                    </h2>
                    <p class="text-white/100 text-[1.2rem] mb-14 leading-relaxed">
                        Minha versatilidade permite atuar desde o design visual até a gestão estratégica de projetos,
                        garantindo uma entrega técnica refinada e humanizada.
                    </p>
                    <!-- 2x2 grid de barras -->
                    <div class="grid md:grid-cols-2 gap-x-16 gap-y-10" ref="statsRef">
                        <!-- Web Design -->
                        <div>
                            <div class="flex items-center gap-4 mb-2">
                                <div class="flex-1 h-7 bg-white/5 rounded-full overflow-hidden">
                                    <div class="h-full bg-red-500 rounded-full transition-[width] duration-[3500ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                                        :style="{ width: statsVisible ? '92%' : '0%' }" />
                                </div>
                                <span class="text-white font-bold text-[1.5rem] w-10 shrink-0">92%</span>
                            </div>
                            <p class="text-white/70 text-[1.2rem]">Web Design</p>
                        </div>
                        <!-- EAD/Moodle -->
                        <div>
                            <div class="flex items-center gap-4 mb-2">
                                <div class="flex-1 h-7 bg-white/5 rounded-full overflow-hidden">
                                    <div class="h-full bg-orange-500 rounded-full transition-[width] duration-[3500ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                                        :style="{ width: statsVisible ? '88%' : '0%' }" />
                                </div>
                                <span class="text-white font-bold text-[1.5rem] w-10 shrink-0">88%</span>
                            </div>
                            <p class="text-white/70 text-[1.2rem]">EAD / Moodle</p>
                        </div>
                        <!-- Gestão -->
                        <div>
                            <div class="flex items-center gap-4 mb-2">
                                <div class="flex-1 h-7 bg-white/5 rounded-full overflow-hidden">
                                    <div class="h-full bg-yellow-400 rounded-full transition-[width] duration-[3500ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                                        :style="{ width: statsVisible ? '86%' : '0%' }" />
                                </div>
                                <span class="text-white font-bold text-[1.5rem] w-10 shrink-0">86%</span>
                            </div>
                            <p class="text-white/70 text-[1.2rem]">Gestão de Projetos</p>
                        </div>
                        <!-- PHP -->
                        <div>
                            <div class="flex items-center gap-4 mb-2">
                                <div class="flex-1 h-7 bg-white/5 rounded-full overflow-hidden">
                                    <div class="h-full bg-green-500 rounded-full transition-[width] duration-[3500ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                                        :style="{ width: statsVisible ? '80%' : '0%' }" />
                                </div>
                                <span class="text-white font-bold text-[1.5rem] w-10 shrink-0">80%</span>
                            </div>
                            <p class="text-white/70 text-[1.2rem]">Desenvolvimento PHP</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- ?.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.?
                 7. WEB DESIGNER & DESENVOLVEDOR
            ?.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.? -->
            <section id="experiencia" class="py-20 md:py-28 px-8 md:px-20">
                <div class="max-w-7xl mx-auto">
                    <span
                        class="inline-block bg-[#483304] text-white text-[14px] font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
                        Trajetória Profissional
                    </span>
                    <h2 class="text-4xl md:text-5xl font-bold tracking-tight mb-3">Web Designer &amp; Desenvolvedor</h2>
                    <p class="text-white/60 mb-12 font-medium">
                        <strong class="text-white/100 text-[1.2rem]">Autônomo / Consultoria Tech</strong> de Longa data
                    </p>
                    <!-- 3 colunas de achievements -->
                    <div class="grid md:grid-cols-3 gap-8">
                        <div>
                            <div class="flex items-center gap-2 mb-3">
                                <ArrowRight class="w-5 h-5 shrink-0 text-amber-400" />
                                <h3 class="font-bold text-white text-[2.0rem]">Interfaces Modernas</h3>
                            </div>
                            <p class="text-white/70 text-1xl leading-relaxed">Desenvolvimento de interfaces modernas
                                utilizando CSS, Javascript, Bootstrap e Tailwind.</p>
                        </div>
                        <div>
                            <div class="flex items-center gap-2 mb-3">
                                <ArrowRight class="w-5 h-5 shrink-0 text-rose-400" />
                                <h3 class="font-bold text-white text-[2.0rem]">Integração de Sistemas</h3>
                            </div>
                            <p class="text-white/70 text-1xl leading-relaxed">Implementação de funcionalidades dinâmicas
                                e integração de sistemas com APIs.</p>
                        </div>
                        <div>
                            <div class="flex items-center gap-2 mb-3">
                                <ArrowRight class="w-5 h-5 shrink-0 text-amber-400" />
                                <h3 class="font-bold text-white text-[2.0rem]">PedeBem</h3>
                            </div>
                            <p class="text-white/70 text-1xl leading-relaxed">Criação e manutenção do sistema de pedidos
                                PedeBem, otimizando o fluxo de vendas online.</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- ?.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.?
                 8. MOODLE & GESTOR DE PROJETOS
            ?.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.? -->
            <section class="py-20 md:py-28 px-8 md:px-20">
                <div class="max-w-7xl mx-auto">
                    <span
                        class="inline-block bg-[#483304] text-white text-[14px] font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
                        Trajetória Profissional
                    </span>
                    <h2 class="text-4xl md:text-5xl font-bold tracking-tight mb-3">Especialista em Moodle &amp; Gestor
                        de Projetos Online</h2>
                    <p class="text-white/60 mb-12 font-medium">
                        <strong class="text-white/100 text-[1.25rem]">Instituições de Ensino e EAD</strong> / Contínuo
                    </p>
                    <!-- 2 cards com imagem -->
                    <div class="grid md:grid-cols-2 gap-8">
                        <!-- Plataforma Moodle -->
                        <div class="bg-[#4929A2] rounded-3xl p-4">
                            <div>
                                <h3 class="text-[2.0rem] font-bold mb-2">Plataforma Moodle</h3>
                                <p class="text-white/100 text-[1.3rem] leading-relaxed mb-6">
                                    Configuração e administração técnica para ambientes virtuais de
                                    aprendizagem, com aplicação de metodologias de Gerência de
                                    Projetos Online.
                                </p>
                                <div class="rounded-2xl overflow-hidden aspect-[4/4]">
                                    <img :src="'/sergio-portfolio/images/img2.png'" alt="Moodle / e-Learning"
                                        class="w-full h-full object-cover" />
                                </div>
                            </div>
                        </div>
                        <!-- Automação de Atendimento -->
                        <div class=" rounded-3xl p-4">
                            <div>
                                <h3 class="text-[2.0rem] font-bold mb-2">Automação de dados e atendimentos</h3>
                                <p class="text-white/100 text-[1.3rem] leading-relaxed mb-6">
                                    Desenvolvimento de assistentes virtuais e automação de atendimento
                                    via Typebot e n8n, estruturando cursos e fluxos de trabalho de forma
                                    eficiente capazes de separar leads, automatizar respostas e otimizar o fluxo
                                    operacional.
                                </p>
                                <div class="rounded-2xl overflow-hidden aspect-[4/4]">
                                    <img :src="'/sergio-portfolio/images/img3.png'" alt="Automação / Typebot"
                                        class="w-full h-full object-cover" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- ?.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.?
                 9. FORMA???fO EM M?sSICA & EDUCA???fO
            ?.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.? -->
            <section class="py-10 md:py-16 mx-8 md:mx-50 border-8 border-[#5D5E7A] rounded-3xl px-6 md:px-10">
                <div class="max-w-7xl mx-auto">
                    <span
                        class="inline-block bg-[#483304] text-white text-[14px] font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
                        Trajetória Profissional
                    </span>
                    <h2 class="text-4xl md:text-5xl font-bold tracking-tight mb-12">Formação em Música &amp;
                        Educação
                    </h2>
                    <!-- 2 cards: imagem em cima, texto abaixo -->
                    <div class="grid md:grid-cols-2 gap-8">
                        <!-- Especialista em Música -->
                        <div>
                            <div class="rounded-2xl overflow-hidden aspect-[3/2] mb-6 max-w-sm">
                                <img :src="'/sergio-portfolio/images/musicMestre.png'" alt="Música & Regência"
                                    class="w-full h-full object-cover" />
                            </div>
                            <h3 class="text-[2.0rem] font-bold mb-3">Especialista em Música e Regência</h3>
                            <p class="text-white/100 text-[1.3rem] leading-relaxed">
                                Atuação especializada em Música na Igreja, regência de coro de vozes e
                                aplicação de Licenciatura em Música para desenvolvimento de grupos
                                vocais.
                            </p>
                        </div>
                        <!-- Professor de Instrumentos -->
                        <div>
                            <div class="rounded-2xl overflow-hidden aspect-[3/2] mb-6 max-w-sm">
                                <img :src="'/sergio-portfolio/images/imgViolao.png'" alt="Violão • Teclado • Flauta"
                                    class="w-full h-full object-cover" />
                            </div>
                            <h3 class="text-[2.0rem] font-bold mb-3">Professor de Instrumentos Musicais</h3>
                            <p class="text-white/100 text-[1.3rem] leading-relaxed">
                                Instrução técnica em Violão, Teclado e Flauta Doce para diferentes faixas
                                etárias, com material pedagógico próprio baseado na formação em
                                Magistério.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- ?.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.?
                 10. CONTATO
            ?.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.??.? -->
            <section id="contato" class="py-20 md:py-28 px-8 md:px-20">
                <div class="max-w-7xl mx-auto">
                    <div class="grid md:grid-cols-2 gap-16 items-start">
                        <!-- Esquerda: conteúdo -->
                        <div>
                            <span
                                class="inline-block bg-[#483304] text-white text-[14px] font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5 self-start">
                                Contato
                            </span>
                            <h2 class="text-4xl md:text-5xl font-bold tracking-tight mb-6">Vamos Conversar?</h2>
                            <p class="text-white/65 text-[1.3rem] leading-relaxed mb-10 max-w-2xl">
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
                                        <Send class="w-8 h-8 text-amber-400" />
                                        <span class="font-bold text-white text-lg">WhatsApp</span>
                                    </div>
                                    <p class="text-white/50 text-[1.1rem]">Resposta rápida e direta para alinhar seu
                                        projeto.
                                    </p>
                                </a>
                                <a href="mailto:contato@sergioschultz.com"
                                    class="border border-rose-500/40 rounded-2xl p-5 hover:bg-rose-500/5 transition-all">
                                    <div class="flex items-center gap-2 mb-2">
                                        <Mail class="w-8 h-8 text-rose-400" />
                                        <span class="font-bold text-white text-lg">E-mail</span>
                                    </div>
                                    <p class="text-white/50 text-[1.1rem]">contato@sergioschultz.com</p>
                                </a>
                                <div class="border border-amber-400/40 rounded-2xl p-5 sm:col-span-2">
                                    <div class="flex items-center gap-2 mb-2">
                                        <MapPin class="w-8 h-8 text-amber-400" />
                                        <span class="font-bold text-white text-lg">Localização</span>
                                    </div>
                                    <p class="text-white/50 text-[1.1rem]">Espírito Santo, Brasil</p>
                                </div>
                            </div>
                            <!-- Botões CTA -->
                            <div class="flex flex-wrap gap-4">
                                <a v-if="portfolio.contact?.whatsapp" :href="whatsappLink" target="_blank"
                                    rel="noopener noreferrer"
                                    class="px-7 py-3 bg-amber-400 text-black font-bold rounded-full text-lg hover:bg-amber-300 transition-all">
                                    WhatsApp
                                </a>
                                <a href="mailto:contato@sergioschultz.com"
                                    class="px-7 py-3 border-2 border-amber-400 text-amber-400 font-bold rounded-full text-lg hover:bg-amber-400/10 transition-all">
                                    Enviar Email
                                </a>
                            </div>
                        </div>
                        <!-- Direita: imagem de contato -->
                        <div class="rounded-3xl overflow-hidden aspect-[4/5]">
                            <img :src="'/sergio-portfolio/images/imgApertoMao.png'" alt="Contato"
                                class="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            <!-- Footer -->
            <footer
                class="py-8 px-8 md:px-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-white/100 text-[10px] uppercase tracking-[0.3em]">
                <div>/ 2026 SERGIO SCHULTZ / Web Designer &amp; Desenvolvedor</div>
                <div class="flex gap-8">
                    <span class="text-white/100">LinkedIn</span>
                    <span class="text-white/100">GitHub</span>
                    <span class="text-white/100">Facebook</span>
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
    Menu,
    Send,
    Server,
    X,
} from 'lucide-vue-next';
import { usePortfolioStore } from './stores/portfolio';

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
const automacaoProject = computed(() => portfolio.value?.projects.find(p => p.name === 'Automa??es Inteligentes'));

// T?tulos curtos para os achievements de cada experi?ncia
const achTitles: Record<number, string[]> = {
    0: ['Interfaces Modernas', 'Integra??o de Sistemas', 'PedeBem'],
    1: ['Plataforma Moodle', 'Ger?ncia de Projetos', 'Automa??o Typebot'],
    2: ['M?sica na Igreja', 'Reg?ncia Coral', 'Licenciatura em M?sica'],
    3: ['Viol?o & Teclado', 'Flauta Doce', 'Material Pedag?gico'],
};

const statsVisible = ref(false);
const statsRef = ref<HTMLElement | null>(null);

const whatsappLink = computed(() => {
    return '#';
    // const phone = portfolio.value?.contact?.whatsapp ?? '';
    // const digits = phone.replace(/\D/g, '');
    // return digits ? `https://wa.me/55${digits}` : '#';
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
    history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
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
