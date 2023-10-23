const itemdias = document.getElementById('dias');
const itemhoras = document.getElementById('horas');
const itemminutos = document.getElementById('minutos');
const itemsegundos = document.getElementById('segundos');

const jogosOlimpicos = '27 Jul 2024';

function contador() {
    const novaData = new Date (jogosOlimpicos);
    const dataAtual = new Date ();

    const Totalsegundos = (novaData - dataAtual) / 1000;
    const dias = Math.floor (Totalsegundos / 3600/ 24);
    const horas = Math.floor (Totalsegundos / 3600 % 24);
    const minutos = Math.floor (Totalsegundos / 60) % 60;
    const segundos = Math.floor (Totalsegundos) % 60;

    itemdias.innerHTML = dias;
    itemhoras.innerHTML = horas;
    itemminutos.innerHTML = minutos;
    itemsegundos.innerHTML = segundos;

}

contador();
setInterval(contador, 1000);
