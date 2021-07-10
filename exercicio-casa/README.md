# Semana 09: Métodos: POST e DELETE

Hello, hello, baby\
You called, I can't hear a thing\
I have got no service\
In the club, you see, see

Essa semana tivemos como missão criar uma API que retornasse nossa lista de contatinhos :telephone_receiver:

![gif "lady gaga telephone"](exercicio-casa/img/giphy.gif)

## Instruções


- {GET}/apresentacao: Uma breve apresentação do nosso projeto
- {GET}/todos: Retornará todos os contatinhos disponíveis
- {GET}/contatinhos/id: Retornará o contatinho correspondente àquele ID
- {GET}/contatinhos/nome: Retornará o contatinho solicitaco por nome
- {POST}/contatinhos/cadastrar: Aqui, você poderá cadastrar seu contatinho passando o seguinte parâmetro:

       {
           "nome": "XXX",
           "celular": "(xx) XXXX-XXXX",
           "redesSociais": "@XXXX"
       }

- E, sua resposta será dada no formato jSON da seguinte forma:

        {
            "id": 1,
            "data": "2021-07-10T21:28:53.308Z",
            "nome": "XXX",
            "celular": "(xx) XXXX-XXXX",
            "redesSociais": "@XXXX"
        }


- {DELETE} contatinhos/id: Uma mensagem de sucesso irá aparecer e retornará a lista de contatinhos sem o iD excluído.


![gif "beyonce and lady gaga telephone"](exercicio-casa/img/giphygaga.gif)