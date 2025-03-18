var msgAparecer = document.getElementById("mensagem");
var cxTexto = document.getElementById("cxTexto");
 
    var horoscopos = {
        aries: [
            "Hoje você sentirá uma energia vibrante ao seu redor!",
            "Aproveite para tomar decisões importantes.",
            "Seu lado aventureiro estará em alta, explore novas oportunidades.",
            "Mantenha a calma e controle sua impulsividade."
        ],
        touros: [
            "Estabilidade e segurança estarão ao seu lado hoje.",
            "Evite conflitos desnecessários, busque o equilíbrio.",
            "Bom momento para organizar suas finanças.",
            "Sua determinação trará bons frutos no trabalho."
        ],
        gemeos: [
            "Dia perfeito para se comunicar e compartilhar ideias.",
            "Aproveite as oportunidades de aprendizado.",
            "Uma conversa inesperada pode trazer boas surpresas.",
            "Evite mudanças bruscas e mantenha a paciência."
        ],
        cancer: [
            "Seu lado emocional estará mais intenso hoje.",
            "Momento ideal para se reconectar com amigos e familiares.",
            "Seja gentil consigo mesmo e evite cobranças excessivas.",
            "O dia pode trazer nostalgia, aproveite para refletir sobre o passado."
        ],
        leao: [
            "Seu carisma estará em evidência, aproveite para brilhar!",
            "Lidere com sabedoria e inspire as pessoas ao seu redor.",
            "Evite tomar decisões precipitadas baseadas no orgulho.",
            "Dia favorável para conquistar algo que deseja há tempos."
        ],
        virgem: [
            "A organização será sua maior aliada hoje.",
            "Evite ser tão crítico consigo mesmo, relaxe um pouco.",
            "Bom momento para cuidar da saúde e bem-estar.",
            "Seu esforço será reconhecido por pessoas importantes."
        ],
        libra: [
            "Equilíbrio é a chave do seu dia, busque harmonia.",
            "Um novo relacionamento pode surgir de forma inesperada.",
            "Evite decisões impulsivas, reflita antes de agir.",
            "Dia propício para resolver conflitos e fazer as pazes."
        ],
        escorpiao: [
            "Sua intuição estará afiada, confie nos seus instintos.",
            "Cuidado com segredos revelados, mantenha discrição.",
            "Paixão em alta, aproveite momentos intensos.",
            "Um mistério será solucionado, trazendo alívio e clareza."
        ],
        sagitario: [
            "Seu espírito aventureiro pedirá mudanças.",
            "Aproveite para planejar aquela viagem dos sonhos.",
            "Novas oportunidades podem surgir no seu caminho.",
            "Mantenha a positividade e evite preocupações excessivas."
        ],
        capricornio: [
            "Disciplina e foco são suas maiores forças hoje.",
            "Um desafio profissional pode trazer crescimento.",
            "Evite se sobrecarregar, descanse quando necessário.",
            "Planejamento será essencial para atingir seus objetivos."
        ],
        aquario: [
            "Sua criatividade estará em alta, use-a a seu favor.",
            "Momento ideal para inovar e testar novas ideias.",
            "Converse mais com pessoas que compartilham seus ideais.",
            "Evite se isolar, busque apoio quando precisar."
        ],
        peixes: [
            "Conecte-se com sua intuição e siga seu coração.",
            "Dia perfeito para atividades artísticas e criativas.",
            "Aproveite para descansar e recarregar suas energias.",
            "Uma boa surpresa pode alegrar seu dia!"
        ]
    };

    horoscopos["touro"] = horoscopos["touros"];
    horoscopos["gêmeos"] = horoscopos["gemeos"];
    horoscopos["câncer"] = horoscopos["cancer"];
    horoscopos["leão"] = horoscopos["leao"];
    horoscopos["escorpião"] = horoscopos["escorpiao"];
    horoscopos["sagitário"] = horoscopos["sagitario"];
    horoscopos["capricórnio"] = horoscopos["capricornio"];
    horoscopos["aquário"] = horoscopos["aquario"];
    horoscopos["peixes"] = horoscopos["peixes"];


function mostrarHoroscopo() {
    var signo = cxTexto.value.toLowerCase().trim(); // Normaliza a entrada do usuário

    if (horoscopos[signo]) {
        var mensagens = horoscopos[signo];
        var mensagemAleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];
        msgAparecer.innerText = mensagemAleatoria; // Exibe uma mensagem aleatória
    } else {
        msgAparecer.innerText = "Signo inválido! Digite corretamente.";
    }
};
 
 
