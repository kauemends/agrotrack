<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Agrotrack | Cadastrar</title>
</head>

<body>
    <h1>Crie sua conta</h1>

    <form action="cadastro.php" method="post">
        Nome: <input type="text" name="name" id="" placeholder="Digite o seu nome" required>

        Email: <input type="mail" name="email" id="" placeholder="Digite o seu email" required>

        Senha: <input type="password" name="password" id="" placeholder="Digite a sua senha" required>

        <input type="submit" value="Logar" name="btnLogin">
    </form>

    <br>

    <a href="cadastrar.php">Ainda não é cadastrado?</a>
</body>

</html>