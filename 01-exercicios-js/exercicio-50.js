/* 
    50. Desenvolva um pequeno sistema de reserva de hotéis usando JavaScript. O sistema
    deverá ser capaz de interagir com o usuário através do console do navegador e manter
    um registro das reservas e hotéis disponíveis. Utilize objetos e arrays para gerenciar as
    informações. Não é necessário interface gráfica, apenas funcionalidade lógica.
        1. Estrutura de Dados:
            ○ Hotel: Cada hotel deve ser um objeto com propriedades para id, nome,
            cidade, quartos totais e quartos disponiveis.
            ○ Reservas: Cada reserva deve ser um objeto contendo idReserva, idHotel, e
            nomeCliente.
        2. Funcionalidades:
            ○ Adicionar hotéis: Permitir que o usuário adicione novos hotéis ao sistema.
            ○ Buscar hotéis por cidade: Permitir que o usuário liste todos os hotéis
            disponíveis em uma cidade específica.
            ○ Fazer reserva: Permitir que um usuário faça uma reserva em um hotel. Isso
            deve diminuir o número de quartos disponiveis do hotel.
            ○ Cancelar reserva: Permitir que um usuário cancele uma reserva. Isso deve
            aumentar o número de quartos disponiveis no hotel correspondente.
            ○ Listar reservas: Mostrar todas as reservas, incluindo detalhes do hotel e do
            cliente.
        3. Regras de Negócio:
            ○ Um hotel só pode aceitar reservas se houver quartos disponíveis.
            ○ As reservas devem ser identificadas por um ID único e associadas a um
            único hotel.
        4. Desafios Adicionais (Opcionais):
            ○ Implementar uma função de check-in e check-out que atualize a
            disponibilidade de quartos.
            ○ Gerar relatórios de ocupação para um hotel.
            ○ Permitir que o usuário avalie o hotel após a estadia, e armazenar essas
            avaliações dentro do objeto do hotel. 
*/

const prompt = require('prompt-sync')();

let hoteis = [];
let reservas = [];
let id = 1;

// ○ Hotel: Cada hotel deve ser um objeto com propriedades para id, nome,
// cidade, quartos totais e quartos disponiveis.
// ○ Adicionar hotéis: Permitir que o usuário adicione novos hotéis ao sistema.

function adicionarHotel() {
    let nomeHotel = prompt("Insira o nome do hotel: ");
    let cidadeHotel = prompt("Insira a cidade do hotel: ");
    let quantidadeQuartos = 0;
    while (quantidadeQuartos <= 0) {
        quantidadeQuartos = parseInt(prompt("Insira a quantidade de quartos: "));
        if (quantidadeQuartos <= 0 ) {
            console.log("Quantidade invalida! Tente novamente.");
        }
    }
    let quartosDisponiveis = -1
    while (quartosDisponiveis < 0 ) {
        quartosDisponiveis = parseInt(prompt("Insira a quantidade de quartos disponiveis: "));
        if (quartosDisponiveis < 0 || quartosDisponiveis > quantidadeQuartos) {
            quartosDisponiveis = -1;
            console.log("Quantidade invalida! Tente novamente.");
        }
    }
    let novoHotel = {
        id : id,
        nome: nomeHotel, 
        cidade: cidadeHotel, 
        quartos: quantidadeQuartos, 
        disponiveis: quartosDisponiveis, 
        reservas: (quantidadeQuartos - quartosDisponiveis)};
    id++;
    console.log("Hotel cadastrado com sucesso!")
    hoteis.push(novoHotel);
}

function listarHoteis(hoteis) {
    for (let hotel of hoteis) {
        printarHotel(hotel);
    }
}

function printarHotel(hotel){
    let infosHotel = `
    ------ HOTEL ------
    Nome: ${hotel.nome}
    Cidade: ${hotel.cidade}
    Quartos: ${hotel.quartos}
    Quartos disponiveis: ${hotel.disponiveis} `
    console.log(infosHotel);
}

function listarHoteisPorCidade(hoteis) {
    let nomeCidade = prompt("Insira o nome da cidade: ");
    for (let hotel of hoteis) {
        if (hotel.cidade.toLowerCase().includes(nomeCidade.toLowerCase())) {
            printarHotel(hotel);
        }
    }
}


/* 
    ○ Fazer reserva: Permitir que um usuário faça uma reserva em um hotel. Isso
    deve diminuir o número de quartos disponiveis do hotel.
    
    ○ Cancelar reserva: Permitir que um usuário cancele uma reserva. Isso deve
    aumentar o número de quartos disponiveis no hotel correspondente. 

    ○ Reservas: Cada reserva deve ser um objeto contendo idReserva, idHotel, e
    nomeCliente
*/

function gerarIdReserva(reservas, id) {
    for (let i = 0; i < reservas.length; i++) {
        if (reservas[i].idReserva == id) {
            id++;
            i = 0;
        }
    }
    return (id);
} 

function fazerReserva() {
    let nomeHotel = prompt("Insira o nome do hotel: ");
    for (let hotel of hoteis) {
        let nome = hotel.nome;
        if (nome.toLowerCase().includes(nomeHotel.toLowerCase())) {
            if (hotel.disponiveis > 0) {
                hotel.disponiveis = hotel.disponiveis - 1;
                let idHotel = hotel.id;
                let idReserva = gerarIdReserva(reservas ,(hotel.quartos - hotel.disponiveis));
                let nomeCliente = prompt("Insira o nome do cliente: ");
                let reserva = {
                    idHotel: idHotel,
                    idReserva: idReserva,
                    cliente: nomeCliente
                }
                reservas.push(reserva);
                console.log("Reserva realizada com sucesso.")
            } else {
                console.log("Não há quartos disponiveis");
            }
            return ;
        }
    }
    console.log("Hotel não encontrado!");
}

function pegarHotelPorID(id) {
    for (let hotel of hoteis) {
        if (hotel.id == id) {
            return (hotel.nome)
        }
    }
    return (0);
}

function printarReserva(reserva) {
    nomeHotel = pegarHotelPorID(reserva.idHotel);
    let infoReserva = `
    ------RESERVA------
    Hotel : ${nomeHotel}
    ID Reserva: ${reserva.idReserva}  
    Cliente : ${reserva.cliente}`;
    console.log(infoReserva);
}


function listarReservas() {
    if (reservas.length > 0) {
        for (let reserva of reservas) {
            printarReserva(reserva);
        }   
    } else {
        console.log("Não há reservas");
    }
}

function cancelarReserva(){
    let nomeHotel = prompt("Insira o nome do hotel: ");
    let nomeDoCliente = prompt("Insira o nome do cliente: ");
    for (let i = 0; i < hoteis.length; i++) {
        if (hoteis[i].nome.toLowerCase().includes(nomeHotel.toLowerCase())) {
            idDoHotel = hoteis[i].id;
            for (let j = 0; j < reservas.length; j++) {
                if (idDoHotel == reservas[j].idHotel) {
                    if (reservas[j].cliente.toLowerCase().includes(nomeDoCliente.toLowerCase())) {
                        hoteis[i].disponiveis++;
                        reservas.splice(j, 1);
                        console.log("Reserva cancelada com sucesso!");
                        return ;
                    }
                }
            }
        }
    }
    console.log("Nenhuma reserva ou cliente encontrado(a)!");
}



let opcao = 1;

let menu = `
            1 - Cadastrar hotel
            2 - Listar hoteis por cidade
            3 - Fazer uma reserva
            4 - Cancelar reserva
            5 - Listar todas as reservas
            6 - Listar hoteis
            0 - Sair
`;

while (opcao) {
    console.log(menu);
    opcao = parseInt(prompt("Digite uma opção: "));
    switch(opcao) {
        case 1:
            adicionarHotel();
            break;
        case 2:
            listarHoteisPorCidade(hoteis);
            break;
        case 3:
            fazerReserva();
            break;
        case 4:
            cancelarReserva();
            break;
        case 5:
            listarReservas();
            break;
        case 6:
            listarHoteis(hoteis);
            break ;
        case 0:
            console.log("Saindo...")
            break;
        default:
            console.log("Opção Invalida!");
            break;
    }
}