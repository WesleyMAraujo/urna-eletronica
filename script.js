var confirmou = 0
var candidateNumber = '';
var candidateName = '';
var iframe = document.getElementById('foto-candidato')
var avancou = 0



function digitar(key) {
    candidateName = '';
    if (candidateNumber.length < 2) {
        candidateNumber += key;
        atualizarTela();
    }
}

function limpar() {
    candidateNumber = '';
    candidateName = 'DIGITE O NUMERO DO SEU CANDIDATO';
    iframe.src = 'github.html'
    avancou = 0
    atualizarTela();
}

function avancar() {
    if (candidateNumber.length == 2) {
        if (candidateNumber == 01) {
            candidateName = 'Candidato ' + candidateNumber + ' Java-Script CONFIRMAR? ';
            iframe.src = 'java-script.html'
            candidateNumber = '';
        } else if (candidateNumber == 02) {
            candidateName = 'Candidato ' + candidateNumber + ' Python';
            iframe.src = 'python.html'
            candidateNumber = '';
        } else if (candidateNumber == 03) {
            candidateName = 'Candidato ' + candidateNumber + ' PHP';
            iframe.src = 'php.html'
            candidateNumber = '';
        } else {
            candidateName = 'NULO: CONFIRMAR?';
            candidateNumber = '';
        }
        avancou = 1
        atualizarTela()
    }
}

function confirmar() {
    if (avancou == 1) {
        var somFim = document.getElementById('fim')
        somFim.play();
        candidateName = 'VOTO CADASTRADO, OBRIGADO POR VOTAR';
        candidateNumber = '';
    } else {
        candidateName = 'AVANCE DEPOIS CONFIRME PRESSIONE "CORRIGIR"';
        candidateNumber = '';
    }
    atualizarTela()
}

function atualizarTela() {
    document.getElementById('candidate-number').innerHTML = candidateNumber;
    document.getElementById('candidate-name').innerHTML = candidateName;
}

function somdeTeclas(){
    var somTeclas = document.getElementById('som-teclas')
    somTeclas.play();
}
