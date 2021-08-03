<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ex03</title>
    <link rel="stylesheet" href="style.css">
</head>

<body onload="foco()">
    <header>
        <p id="descricao">Descrição do exercício:
            <br>Peça ao usuário para digitar 5 números em uma caixa de texto. Verifique qual é o maior número e exiba-o.
        </p>
        <p id="status">Status: Exercício Completo ✔️</p>
        <h1>O maior número:</h1>
    </header>
    <section id="sectionResultado">
        <p>
            Insira 5 números, separados por Ponto e Vírgula (  " ; "  ) : <input type="text" class="inputTxt" id="arrayString">
            <small>Para adicionar números com casas decimais, use o ponto (  "  .  "  ) .</small>
        </p>
        <p><input type="button" value="Encontrar" class="inputButton" onclick="encontrar()"></p>
    </section>
    <footer>
        &copy; Programmed by <a href="https://github.com/Diego-goes" target="_blank">Diego Goes</a>
    </footer>
    <script src="script.js"></script>
</body>

</html>
