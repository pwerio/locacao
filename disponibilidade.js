async function verificarDisponibilidade(propertyId, rentalDate) {
    // Obter a data atual
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();
    const mesAtual = String(dataAtual.getMonth() + 1).padStart(2, '0'); // +1 porque os meses são indexados a partir de 0
    const diaAtual = String(dataAtual.getDate()).padStart(2, '0');
    const dataAtualFormatada = `${anoAtual}-${mesAtual}-${diaAtual}`;

    // Verificar se a data de locação é menor que a data atual
    if (rentalDate < dataAtualFormatada) {
        return false; // Data inválida
    }

    // Simulação de verificação de disponibilidade
    // Em um cenário real, você faria uma solicitação para um servidor aqui

    // Exemplo de datas indisponíveis
    const indisponiveis = {
        1: ['2024-06-10', '2024-06-11'],
        2: ['2024-06-15', '2024-06-16']
    };

    const datasIndisponiveis = indisponiveis[propertyId] || [];

    return !datasIndisponiveis.includes(rentalDate);
}
