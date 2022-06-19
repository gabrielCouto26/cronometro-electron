const btnExportar = document.getElementById("btnExportar")

const exportar = () => {

  const horas = document.getElementById("Horas").innerHTML
  const minutos = document.getElementById("Minutos").innerHTML

  const dataAtual = new Date();
  const dataConvertida = `${dataAtual.getDate()}/${dataAtual.getMonth() + 1}/${dataAtual.getFullYear()}`
  const tempo = `${horas}h${minutos}min`
  console.log(tempo)


  let cabeçalho = ["Data", "Tempo"];
  let dados = [
    { data: dataConvertida, tempo: tempo }
  ]

  constroiTabela(cabeçalho, dados, "horas-trabalhadas")

}


const constroiTabela = (cabeçalho, dados, nomeDoArquivo) => {

  let header = cabeçalho.join(";") + '\n';
  console.log(header)
  let csv = header;
  dados.forEach(obj => {
    let row = [];
    for (key in obj) {
      if (obj.hasOwnProperty(key)) {
        row.push(obj[key]);
      }
    }
    csv += row.join(";") + "\n";
  });

  let csvData = new Blob([csv], { type: 'text/csv' });
  let csvUrl = URL.createObjectURL(csvData);

  let hiddenElement = document.createElement('a');
  hiddenElement.href = csvUrl;
  hiddenElement.target = '_blank';
  hiddenElement.download = nomeDoArquivo + '.csv';
  hiddenElement.click();

}

btnExportar.addEventListener('click', exportar)
