export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  category: string;
  tags: string[];
  author: {
    name: string;
    avatar: string;
  };
  readTime: string;
  publishedAt: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  pikotCta: {
    text: string;
    link: string;
  };
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Como Escolher a Caixa de Som Ideal - Guia Completo 2025",
    slug: "como-escolher-caixa-de-som-ideal-guia-2025",
    excerpt: "Descubra todos os fatores essenciais para escolher a caixa de som perfeita para suas necessidades, seja para eventos, casa ou performances ao vivo.",
    featuredImage: "/posts/caixa-som-guia.jpg",
    category: "Guias",
    tags: ["caixas de som", "equipamentos", "áudio", "guia de compra"],
    author: {
      name: "Equipe Pikot",
      avatar: "/avatars/pikot-team.jpg"
    },
    readTime: "8 min",
    publishedAt: "2025-01-15",
    seo: {
      title: "Como Escolher a Caixa de Som Ideal - Guia Completo 2025 | Pikot Shop",
      description: "Guia definitivo para escolher a caixa de som perfeita. Potência, qualidade, conectividade e muito mais. Aprenda com especialistas!",
      keywords: ["caixa de som", "como escolher caixa de som", "caixa ativa", "caixa passiva", "equipamentos de áudio"]
    },
    pikotCta: {
      text: "Ver Caixas de Som na Pikot Shop",
      link: "https://www.pikotshop.com.br/caixas-de-som"
    },
    content: `
<h2>Por Que a Escolha da Caixa de Som é Tão Importante?</h2>

<p>A caixa de som é o coração de qualquer sistema de áudio. Seja para um evento, apresentação ao vivo, festa ou uso doméstico, escolher o equipamento certo pode fazer toda a diferença entre um som medíocre e uma experiência sonora inesquecível.</p>

<p>Neste guia completo, vamos explorar todos os aspectos que você precisa considerar para fazer a melhor escolha.</p>

<h2>1. Caixa Ativa vs Caixa Passiva: Qual Escolher?</h2>

<h3>Caixa Ativa</h3>
<p>As caixas ativas possuem amplificador integrado, tornando-as mais práticas e fáceis de usar. São ideais para:</p>
<ul>
<li>Eventos pequenos e médios</li>
<li>DJs e músicos solo</li>
<li>Instalações onde simplicidade é prioridade</li>
</ul>

<h3>Caixa Passiva</h3>
<p>Requerem amplificador externo, mas oferecem maior flexibilidade e qualidade. Perfeitas para:</p>
<ul>
<li>Sistemas profissionais grandes</li>
<li>Instalações fixas em casas de show</li>
<li>Quem busca customização máxima</li>
</ul>

<h2>2. Potência: Entendendo Watts RMS</h2>

<p>A potência é medida em Watts RMS (Root Mean Square) e indica a capacidade real da caixa. Veja as recomendações:</p>

<ul>
<li><strong>50-150W RMS:</strong> Uso doméstico, ambientes pequenos</li>
<li><strong>150-400W RMS:</strong> Eventos pequenos, bares, igrejas</li>
<li><strong>400-800W RMS:</strong> Eventos médios, bandas, DJs</li>
<li><strong>800W+ RMS:</strong> Eventos grandes, shows profissionais</li>
</ul>

<h2>3. Tamanho do Falante (Woofer)</h2>

<p>O tamanho do falante impacta diretamente a resposta de graves:</p>
<ul>
<li><strong>8":</strong> Portáteis, eventos pequenos</li>
<li><strong>10":</strong> Uso intermediário, boa relação tamanho/potência</li>
<li><strong>12":</strong> Mais comum, excelente equilíbrio</li>
<li><strong>15":</strong> Graves poderosos, eventos grandes</li>
<li><strong>18"+:</strong> Subwoofers, graves extremos</li>
</ul>

<h2>4. Conectividade Essencial</h2>

<p>Verifique se a caixa possui:</p>
<ul>
<li><strong>Entradas XLR:</strong> Padrão profissional</li>
<li><strong>Entrada P10:</strong> Para instrumentos</li>
<li><strong>Bluetooth:</strong> Conveniência wireless</li>
<li><strong>USB/SD Card:</strong> Reprodução direta</li>
<li><strong>Aux/RCA:</strong> Conexões auxiliares</li>
</ul>

<h2>5. Recursos Extras Importantes</h2>

<ul>
<li>Equalização integrada</li>
<li>Efeitos (reverb, echo)</li>
<li>Entrada para microfone com controle de volume</li>
<li>Display LCD</li>
<li>Controle remoto</li>
<li>Rodas para transporte</li>
<li>Alças retráteis</li>
</ul>

<h2>6. Qualidade de Construção</h2>

<p>Avalie:</p>
<ul>
<li>Material do gabinete (MDF é superior a plástico)</li>
<li>Proteção das grades dos falantes</li>
<li>Qualidade dos controles e conectores</li>
<li>Peso (caixas muito leves podem indicar baixa qualidade)</li>
</ul>

<h2>7. Marcas Confiáveis</h2>

<p>Algumas marcas reconhecidas no mercado:</p>
<ul>
<li>JBL</li>
<li>Yamaha</li>
<li>Behringer</li>
<li>Electro-Voice</li>
<li>QSC</li>
<li>Mackie</li>
</ul>

<h2>8. Dicas Finais de Compra</h2>

<ol>
<li>Teste antes de comprar, se possível</li>
<li>Leia reviews de outros usuários</li>
<li>Considere garantia e assistência técnica</li>
<li>Pense no longo prazo, não apenas no preço</li>
<li>Consulte especialistas</li>
</ol>

<h2>Perguntas Frequentes (FAQ)</h2>

<h3>Qual a diferença entre potência RMS e PMPO?</h3>
<p>RMS é a potência real e contínua. PMPO é um valor de pico que não representa o desempenho real. Sempre considere RMS.</p>

<h3>Preciso de subwoofer?</h3>
<p>Depende. Para graves profundos em eventos ou sistemas de som, sim. Para uso casual, caixas de 12" ou 15" já entregam bons graves.</p>

<h3>Caixa ativa consome muita energia?</h3>
<p>Depende da potência. Uma caixa de 400W consome cerca de 400W em volume máximo, mas muito menos em uso normal.</p>

<h3>Posso usar caixa de som profissional em casa?</h3>
<p>Sim, mas considere o tamanho e a potência. Modelos menores são mais adequados para ambientes residenciais.</p>
`
  },
  {
    id: "2",
    title: "Baquetas Neon - Guia Definitivo para Escolher e Usar",
    slug: "baquetas-neon-guia-definitivo",
    excerpt: "Tudo sobre baquetas neon: tipos, materiais, tamanhos e como escolher o par perfeito para seu estilo musical.",
    featuredImage: "/posts/baquetas-neon.jpg",
    category: "Instrumentos",
    tags: ["baquetas", "bateria", "percussão", "instrumentos"],
    author: {
      name: "Carlos Drummer",
      avatar: "/avatars/carlos.jpg"
    },
    readTime: "6 min",
    publishedAt: "2025-01-12",
    seo: {
      title: "Baquetas Neon - Guia Completo para Bateristas | Pikot Shop",
      description: "Descubra tudo sobre baquetas neon: tipos, tamanhos, materiais e como escolher as melhores para seu estilo. Guia completo para bateristas!",
      keywords: ["baquetas neon", "baquetas de bateria", "baquetas coloridas", "equipamentos para bateria"]
    },
    pikotCta: {
      text: "Comprar Baquetas na Pikot Shop",
      link: "https://www.pikotshop.com.br/baquetas"
    },
    content: `
<h2>O Que São Baquetas Neon?</h2>

<p>Baquetas neon são baquetas de bateria com acabamento em cores vibrantes e fluorescentes. Além da estética chamativa, elas mantêm todas as características técnicas de baquetas profissionais.</p>

<h2>Por Que Escolher Baquetas Neon?</h2>

<ul>
<li><strong>Estilo visual:</strong> Perfeitas para shows e apresentações</li>
<li><strong>Visibilidade:</strong> Fáceis de localizar no palco</li>
<li><strong>Personalidade:</strong> Expressam seu estilo único</li>
<li><strong>Motivação:</strong> Cores vibrantes podem inspirar sua performance</li>
</ul>

<h2>Anatomia da Baqueta</h2>

<h3>1. Ponta (Tip)</h3>
<p>A ponta determina o timbre e a definição do som:</p>
<ul>
<li><strong>Ponta redonda:</strong> Som mais focado, ideal para pratos</li>
<li><strong>Ponta oval:</strong> Som equilibrado, versátil</li>
<li><strong>Ponta acorn (bolota):</strong> Som cheio e rico</li>
<li><strong>Ponta barril:</strong> Som amplo e potente</li>
</ul>

<h3>2. Shoulder (Ombro)</h3>
<p>A transição entre corpo e ponta afeta resposta e durabilidade.</p>

<h3>3. Shaft (Corpo)</h3>
<p>O comprimento e espessura definem peso, equilíbrio e conforto.</p>

<h3>4. Butt (Traseira)</h3>
<p>Influencia no equilíbrio geral da baqueta.</p>

<h2>Numeração das Baquetas</h2>

<p>Sistema americano de classificação:</p>
<ul>
<li><strong>7A:</strong> Leves, ideais para jazz e estilos delicados</li>
<li><strong>5A:</strong> Mais populares, versáteis para vários estilos</li>
<li><strong>5B:</strong> Médio-pesadas, rock e pop</li>
<li><strong>2B:</strong> Pesadas, rock pesado e metal</li>
</ul>

<p>Quanto menor o número, mais grossa a baqueta. A letra "A" indica ponta menor, "B" ponta maior.</p>

<h2>Materiais Comuns</h2>

<h3>Hickory</h3>
<p>Mais popular. Equilíbrio perfeito entre peso, durabilidade e flexibilidade.</p>

<h3>Maple (Bordo)</h3>
<p>Mais leve, ideal para estilos que requerem velocidade e delicadeza.</p>

<h3>Oak (Carvalho)</h3>
<p>Mais pesado e denso, extremamente durável.</p>

<h2>Como Escolher Suas Baquetas Neon</h2>

<ol>
<li><strong>Estilo musical:</strong> Jazz (7A), Rock/Pop (5A/5B), Metal (2B)</li>
<li><strong>Tamanho das mãos:</strong> Mãos menores = baquetas mais leves</li>
<li><strong>Técnica:</strong> Iniciantes geralmente preferem 5A</li>
<li><strong>Tipo de música:</strong> Dinâmica suave ou volume alto?</li>
</ol>

<h2>Cuidados e Manutenção</h2>

<ul>
<li>Guarde em local seco</li>
<li>Evite deixar sob sol direto</li>
<li>Rode as baquetas durante uso para desgaste uniforme</li>
<li>Substitua quando apresentarem lascas ou rachaduras</li>
<li>Limpe regularmente com pano seco</li>
</ul>

<h2>Marcas Populares</h2>

<ul>
<li>Vic Firth</li>
<li>Zildjian</li>
<li>Promark</li>
<li>Vater</li>
<li>Los Cabos</li>
</ul>

<h2>FAQ</h2>

<h3>Baquetas neon duram menos?</h3>
<p>Não. A pintura neon não afeta durabilidade se feita corretamente.</p>

<h3>Posso usar qualquer baqueta em bateria eletrônica?</h3>
<p>Sim, mas use pads apropriados para proteger as baquetas e o equipamento.</p>

<h3>Com que frequência devo trocar baquetas?</h3>
<p>Depende da intensidade de uso. Profissionais trocam semanalmente. Amadores, mensalmente ou quando danificadas.</p>
`
  },
  {
    id: "3",
    title: "Top 10 Caixas Ativas para Eventos Pequenos em 2025",
    slug: "top-10-caixas-ativas-eventos-pequenos-2025",
    excerpt: "As melhores caixas ativas do mercado para eventos de pequeno porte. Custo-benefício, potência e qualidade em um único lugar.",
    featuredImage: "/posts/top-caixas-ativas.jpg",
    category: "Reviews",
    tags: ["caixas ativas", "eventos", "equipamentos", "reviews"],
    author: {
      name: "Marina Som",
      avatar: "/avatars/marina.jpg"
    },
    readTime: "10 min",
    publishedAt: "2025-01-10",
    seo: {
      title: "Top 10 Melhores Caixas Ativas para Eventos Pequenos 2025 | Pikot",
      description: "Ranking completo das melhores caixas ativas para eventos pequenos. Reviews detalhados, prós e contras, e onde comprar com o melhor preço.",
      keywords: ["caixas ativas", "melhores caixas de som", "eventos pequenos", "equipamentos para eventos"]
    },
    pikotCta: {
      text: "Ver Todas as Caixas Ativas",
      link: "https://www.pikotshop.com.br/caixas-ativas"
    },
    content: `
<h2>Introdução</h2>

<p>Escolher a caixa ativa ideal para eventos pequenos pode ser desafiador com tantas opções no mercado. Neste guia, selecionamos as 10 melhores caixas ativas de 2025, considerando qualidade, preço e desempenho.</p>

<h2>Critérios de Avaliação</h2>

<ul>
<li>Potência (100-400W RMS)</li>
<li>Qualidade de som</li>
<li>Portabilidade</li>
<li>Conectividade</li>
<li>Custo-benefício</li>
<li>Durabilidade</li>
</ul>

<h2>1. JBL EON ONE MK2</h2>

<p><strong>Potência:</strong> 380W RMS<br>
<strong>Preço médio:</strong> R$ 4.500<br>
<strong>Destaque:</strong> Sistema all-in-one com mixer integrado</p>

<h3>Prós:</h3>
<ul>
<li>Design compacto e portátil</li>
<li>Qualidade JBL reconhecida</li>
<li>Bluetooth integrado</li>
<li>Bateria de até 6 horas</li>
</ul>

<h3>Contras:</h3>
<ul>
<li>Preço elevado</li>
<li>Peso considerável (20kg)</li>
</ul>

<h2>2. Yamaha DXR12 MK2</h2>

<p><strong>Potência:</strong> 700W RMS<br>
<strong>Preço médio:</strong> R$ 3.800<br>
<strong>Destaque:</strong> Som cristalino e graves potentes</p>

<h3>Prós:</h3>
<ul>
<li>Excelente resposta de frequência</li>
<li>DSP avançado</li>
<li>Construção robusta</li>
</ul>

<h3>Contras:</h3>
<ul>
<li>Não possui bateria interna</li>
<li>Menos portátil</li>
</ul>

<h2>3. Behringer B112D</h2>

<p><strong>Potência:</strong> 300W RMS<br>
<strong>Preço médio:</strong> R$ 1.200<br>
<strong>Destaque:</strong> Melhor custo-benefício</p>

<h3>Prós:</h3>
<ul>
<li>Preço acessível</li>
<li>Leve e portátil</li>
<li>Som adequado para o preço</li>
</ul>

<h3>Contras:</h3>
<ul>
<li>Construção mais simples</li>
<li>Graves limitados</li>
</ul>

<h2>4. Electro-Voice ZLX-12P</h2>

<p><strong>Potência:</strong> 500W RMS<br>
<strong>Preço médio:</strong> R$ 2.900<br>
<strong>Destaque:</strong> Robustez e confiabilidade</p>

<h3>Prós:</h3>
<ul>
<li>Muito durável</li>
<li>Som balanceado</li>
<li>Presets úteis</li>
</ul>

<h3>Contras:</h3>
<ul>
<li>Design mais tradicional</li>
<li>Sem Bluetooth</li>
</ul>

<h2>5. QSC K12.2</h2>

<p><strong>Potência:</strong> 1000W RMS<br>
<strong>Preço médio:</strong> R$ 5.200<br>
<strong>Destaque:</strong> Potência excepcional</p>

<h3>Prós:</h3>
<ul>
<li>Som profissional</li>
<li>Graves impressionantes</li>
<li>DSP avançado</li>
</ul>

<h3>Contras:</h3>
<ul>
<li>Preço premium</li>
<li>Pesada (16kg)</li>
</ul>

<h2>6. Mackie Thump12A</h2>

<p><strong>Potência:</strong> 400W RMS<br>
<strong>Preço médio:</strong> R$ 2.100<br>
<strong>Destaque:</strong> Som limpo e potente</p>

<h3>Prós:</h3>
<ul>
<li>Boa relação preço/desempenho</li>
<li>Leve e portátil</li>
<li>Bluetooth integrado</li>
</ul>

<h3>Contras:</h3>
<ul>
<li>Construção em plástico</li>
</ul>

<h2>7. Alto Professional TS312</h2>

<p><strong>Potência:</strong> 550W RMS<br>
<strong>Preço médio:</strong> R$ 1.800<br>
<strong>Destaque:</strong> Grande valor pelo dinheiro</p>

<h3>Prós:</h3>
<ul>
<li>Preço competitivo</li>
<li>Som claro</li>
<li>Leve</li>
</ul>

<h3>Contras:</h3>
<ul>
<li>Marca menos conhecida</li>
</ul>

<h2>8. JBL PRX812W</h2>

<p><strong>Potência:</strong> 750W RMS<br>
<strong>Preço médio:</strong> R$ 4.200<br>
<strong>Destaque:</strong> Controle Wi-Fi</p>

<h3>Prós:</h3>
<ul>
<li>Controle via smartphone</li>
<li>Som JBL premium</li>
<li>Versátil</li>
</ul>

<h3>Contras:</h3>
<ul>
<li>Preço elevado</li>
</ul>

<h2>9. Turbosound iX12</h2>

<p><strong>Potência:</strong> 500W RMS<br>
<strong>Preço médio:</strong> R$ 2.400<br>
<strong>Destaque:</strong> Som cristalino</p>

<h3>Prós:</h3>
<ul>
<li>Excelentes médios/agudos</li>
<li>Design profissional</li>
</ul>

<h3>Contras:</h3>
<ul>
<li>Graves podiam ser melhores</li>
</ul>

<h2>10. LD Systems Icoa 12A</h2>

<p><strong>Potência:</strong> 400W RMS<br>
<strong>Preço médio:</strong> R$ 1.600<br>
<strong>Destaque:</strong> Opção econômica confiável</p>

<h3>Prós:</h3>
<ul>
<li>Bom custo-benefício</li>
<li>Som equilibrado</li>
</ul>

<h3>Contras:</h3>
<ul>
<li>Marca menos popular no Brasil</li>
</ul>

<h2>Conclusão</h2>

<p>Para eventos pequenos, as opções entre R$ 1.200 e R$ 2.500 geralmente oferecem o melhor custo-benefício. Modelos como Behringer B112D, Mackie Thump12A e Alto TS312 são excelentes escolhas.</p>

<p>Para quem busca qualidade premium, JBL EON ONE MK2 e QSC K12.2 são investimentos que valem a pena.</p>

<h2>FAQ</h2>

<h3>Preciso de duas caixas?</h3>
<p>Para som estéreo e melhor cobertura, sim. Uma caixa pode funcionar para ambientes muito pequenos.</p>

<h3>Essas caixas funcionam para DJ?</h3>
<p>Sim, todas são adequadas para DJs em eventos pequenos.</p>

<h3>Preciso de subwoofer adicional?</h3>
<p>Depende. Caixas de 12" geralmente têm graves suficientes para eventos pequenos. Para mais impacto, considere um sub.</p>
`
  }
];

// Função para buscar posts
export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getPostsByCategory = (category: string): BlogPost[] => {
  return blogPosts.filter(post => post.category === category);
};

export const getRecentPosts = (limit: number = 5): BlogPost[] => {
  return blogPosts
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
};
