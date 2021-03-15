# Desafio da Adorie
O objetivo deste desafio é avaliar como você desenvolve em React Native e Redux. Esse desafio é aplicado em candidatos de nível júnior ou pleno. 

## Funcionalidades
Nós queremos desenvolver um aplicativo simples, onde possamos de maneira fácil descobrir e pesquisar por imagens legais. O aplicativo deve ser feito em React Native, Redux e Styled Components. 

- Ao abrir o aplicativo, deve-se buscar uma foto aleatória e definir como background do app - este backgroumd deve ficar definido e não deve mudar em nenhum momento enquanto o usuário utilizar o aplicativo
- A tela inicial deve conter um campo onde o usuário poderá digitar palavras chaves e um botão com um ícone de uma lupa onde o usuário poderá clicar para efetuar uma busca.
- Ao ser efetuada uma busca, deve-se listar imagens relacionadas aquela palavra chave.
- Deve-se utilizar scroll infinito, portanto, ao fazer scroll e chegar próximo ao final, deve-se carregar mais imagens
- deve haver uma imagem, aviso ou animação de quando o aplicativo está carregando mais imagens
- O aplicativo deve avisar quando o usuário digitar alguma coisa que não retornou nenhum resultado
- Ao clicar em uma imagem, o app deve navegar para uma próxima tela, onde exibe a imagem e suas informações
- Ao clicar em voltar a partir de uma imagem, o aplicativo deve voltar exatamente para o estado anterior, com a busca que foi efetuada anteriormente e a posição no scroll

## Assets
Recomendamos utilizar os ícones do Material Design https://material.io/resources/icons/?style=baseline e também utilizar alguma biblioteca. Nós utilizamos extensivamente o React Native Paper https://callstack.github.io/react-native-paper/

## API
Você deve utilizar a API do Unsplash - 

## Mockups
![Teste Adorie Home](https://loja.adorie.com.br/teste-adorie/teste-adorie-1.png =300px)

![Teste Adorie Pesquisa](https://loja.adorie.com.br/teste-adorie/teste-adorie-2.png =300px)

![Teste Adorie Ver Imagem](https://loja.adorie.com.br/teste-adorie/teste-adorie-3.png =300px)

## Critérios de Avaliação
- Conceitos principais de JavaScript
- Utilização de TypeScript
- Entendimento e uso de Redux
- Reutilização/Extensão de Componentes
- Arquitetura da Aplicação
- Estratégia para buscar dados e acrescentar mais dados
- Habilidade para escrever documentação clara
- Código Limpo
- Comentários no código
- **Bônus para quem criar uma UI/UX de boa qualidade**

## Submissão do Desafio
- Crie seu ambiente em React Native SEM utilizar o Expo, utilizando o react-native-cli: https://github.com/react-native-community/cli
- Clone este repositório localmente
- Crie uma branch com o seu nome completo separado por hífens, exemplo: luiz-antonio-moraes. Se a branch já existir, acrescente algum número para torná-la única.
- Submeta seus commits na sua branch até completar o desafio
- Após completar o desafio, faça um pull request
- Certifique-se de documentar tudo o que for possível e colocar instruções claras para executarmos o seu app
- Envie-nos um e-mail para luiz@adorie.com.br avisando que você completou seu desafio
