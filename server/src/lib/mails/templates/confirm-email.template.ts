export const getConfirmEmailTemplate = (token: number) => `
<!DOCTYPE html>
<html>
<head>
    <style>
        .email-container {
            font-family: Arial, sans-serif;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f7f7f7;
        }
        .header {
            background-color: #4CAF50;
            color: white;
            padding: 20px;
            text-align: center;
            border-radius: 5px;
        }
        .content {
            background-color: white;
            padding: 20px;
            margin-top: 20px;
            border-radius: 5px;
        }
        .button {
            background-color: #4CAF50;
            color: white;
            padding: 15px 25px;
            text-decoration: none;
            border-radius: 5px;
            display: inline-block;
            margin: 20px 0;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <h1>Confirma tu correo electrónico</h1>
        </div>
        <div class="content">
            <img src="${__dirname + '/Logo.png'}" alt="Logo" style="display: block; margin: 0 auto;">
            <h2>¡Gracias por registrarte!</h2>
            <p>Para completar tu registro, por favor confirma tu dirección de correo electrónico.</p>
            <p>Ingresa el siguiente código de verificación:</p>
            <h3>${token}</h3>
            <p>Si no creaste esta cuenta, puedes ignorar este mensaje.</p>
        </div>
    </div>
</body>
</html>
`;