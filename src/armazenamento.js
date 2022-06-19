const btnNovoArquivo = document.getElementById("btnNovoArquivo")

const exportar = () => {

  const horas = document.getElementById("Horas").innerHTML
  const minutos = document.getElementById("Minutos").innerHTML

  const dataAtual = new Date();
  const dataConvertida = `${dataAtual.getDate()}/${dataAtual.getMonth() + 1}/${dataAtual.getFullYear()}`
  const tempo = `${horas}h${minutos}min`

  let cabeçalho = ["Data", "Tempo"];
  let dados = [{ data: dataConvertida, tempo: tempo }]

  constroiTabela(cabeçalho, dados, "horas-trabalhadas")
}

const constroiTabela = (cabeçalho, dados, nomeDoArquivo) => {

  let header = cabeçalho.join(";") + '\n';
  let csv = header;
  dados.forEach(obj => {
    let linha = [];
    for (key in obj) {
      if (obj.hasOwnProperty(key)) {
        linha.push(obj[key]);
      }
    }
    csv += linha.join(";") + "\n";
  });

  let csvData = new Blob([csv], { type: 'text/csv' });
  let csvUrl = URL.createObjectURL(csvData);

  let hiddenElement = document.createElement('a');
  hiddenElement.href = csvUrl;
  hiddenElement.target = '_blank';
  hiddenElement.download = nomeDoArquivo + '.csv';
  hiddenElement.click();
}

btnNovoArquivo.addEventListener('click', exportar)
