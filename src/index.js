var numeroSecreto = parseInt(Math.random() * (1001 - 1) + 1);
var maxTentativas = 6;
var tentativas = 0;

var letsPlay = prompt (' você consegue Advinhar qual é o número secreto? (s/n)');
if (letsPlay === 's') { 
  alert('temos um limite de tentativas. Você terá somente 6 tentativas!') 
// for loop com um máximo numero de tentativas
 for (tentativas = 1; tentativas <= maxTentativas; tentativas++) {
   var chute = prompt('Tentativa ' + tentativas + ': Digite um número entre 1 e 1000');

  // if o chuete é correto
   if (chute === numeroSecreto) {
     alert('Você acertou! Número de tentativas: ' + tentativas);
     break; // exit the loop
   } else if (chute > numeroSecreto) {
    alert('Errou...! O número secreto é menor do que ' + chute);
   } else if (chute < numeroSecreto) {
     alert('Errou!! O número secreto é maior do que ' + chute);
   }
 }

 // if loop sem um chute correto
 if (tentativas > maxTentativas) {
   alert('Suas tentativas acabaram. O número secreto era ' + numeroSecreto);
 }
}
