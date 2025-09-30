# Projeto de Exemplo com Expo e React Native

Este é um guia simples para configurar e iniciar o ambiente de desenvolvimento do nosso projeto.

## Pré-requisitos

  - **Node.js LTS**: É necessário ter o Node.js na versão LTS (Long-Term Support) instalado. Você pode baixá-lo em [nodejs.org](https://nodejs.org/).
  - **Emulador Android**: Tenha um emulador Android em execução. Você pode usar o que vem com o **Android Studio** ou o **BlueStacks**.

## Passo a Passo para Configuração

Siga as etapas abaixo para configurar o projeto em sua máquina local.

**1. Crie o projeto**

  - Escolha uma pasta para criar o projeto.
  - Utilize o **PowerShell** ou outro terminal de sua preferência (o PowerShell é recomendado para evitar problemas de permissão no Windows).
  - Execute o comando para criar um novo projeto Expo com um template de navegação:
    ```bash
    npx create-expo-app@latest -t
    ```
  - Na linha de comando, escolha a opção `Navigation (TypeScript)`.
  - Dê um nome para o projeto ou use `.` para criá-lo na pasta atual.

**2. Execute o projeto pela primeira vez**

  - Após a criação, acesse a pasta do projeto e execute o comando:
    ```bash
    npx expo start
    ```
  - Quando o Metro Bundler iniciar, pressione a tecla **`a`** no terminal para abrir o aplicativo no Emulador Android.
      - *Alternativa*: Se estiver usando BlueStacks, abra o aplicativo **Expo Go**, copie a URL `exp://...` que aparece no terminal e cole no campo "URL" do Expo Go.
  - Após verificar que o aplicativo foi executado com sucesso, feche-o. Vamos agora limpar a estrutura para começar do zero.

**3. Limpe a estrutura do projeto**

  - Delete as seguintes pastas do seu projeto:
      - `components`
      - `constants`
      - `app`

**4. Crie a nova estrutura de diretórios**

  - Crie um novo diretório na raiz chamado `src`.
  - Dentro de `src`, crie uma pasta `app`, que conterá as rotas do aplicativo.
  - Crie os seguintes arquivos e pastas:
      - `src/app/index.tsx`
      - `src/app/_layout.tsx`
      - `src/components/Card.tsx` (crie a pasta `components` dentro de `src`).

**5. Instale as dependências**

  - Instale a biblioteca para manipulação de imagens:
    ```bash
    npm install expo-image
    ```

**6. Importe o código inicial**

  - Copie os códigos-fonte dos arquivos que criamos na aula. Você pode encontrar exemplos no seguinte repositório: [https://github.com/i-davies/expo-playground](https://github.com/i-davies/expo-playground)

## Estrutura Final de Diretórios

Após seguir todos os passos, sua estrutura de pastas deve se parecer com esta:

```
.
├── assets/
├── src/
│   ├── app/
│   │   ├── _layout.tsx
│   │   └── index.tsx
│   └── components/
│       └── Card.tsx
├── .gitignore
├── app.json
├── expo-env.d.ts
├── package-lock.json
├── package.json
└── tsconfig.json
```

# Componentes de Botão

Nesta seção, vamos criar uma nova tela para demonstrar diferentes tipos de botões e aprender a estilizá-los usando a API `StyleSheet`.

## Objetivos

- **Criar a rota:** Adicionar uma nova tela em `src/app/buttons.tsx`.
- **Estilização com `StyleSheet`:** Substituir estilos *inline* por uma folha de estilos centralizada para melhor organização e performance.
- **Implementar diferentes botões:** Explorar as funcionalidades e diferenças entre `Button`, `TouchableOpacity` e `Pressable`.

## Passo a Passo

1.  **Criar a nova rota**
    - Adicione um novo arquivo no caminho `src/app/buttons.tsx`.

2.  **Implementar `StyleSheet`**
    - Em `buttons.tsx`, vamos importar o `StyleSheet` do `react-native`.
    - Toda a estilização dos componentes desta tela será feita através de um objeto `StyleSheet` criado no final do arquivo.

3.  **Criar os botões**
    - Adicione um botão padrão do React Native:
      - **`Button`**: Um componente simples e nativo, porém com poucas opções de customização visual.
    - Adicione dois botões usando `TouchableOpacity`:
      - **`TouchableOpacity` customizado**: Um botão que tem o efeito de opacidade ao ser pressionado.
      - **Botão "Voltar"**: Um link de texto simples para voltar à tela anterior, também utilizando `TouchableOpacity`.
    - Adicione um componente `Pressable`:
      - **Estilização avançada**: Vamos aplicar múltiplos estilos ao `Pressable`:
        - **Estilo Padrão**: Uma base de estilos aplicada a todos os estados.
        - **Estilo Específico**: Um estilo adicional para customização.
        - **Estilo Condicional**: Um estilo que muda dinamicamente quando o botão está sendo pressionado (`pressed`).
      - **Eventos de interação**: Implemente os seguintes eventos no `Pressable`:
        - `onPress`: Disparado com um clique simples.
        - `onLongPress`: Disparado quando o botão é pressionado por um tempo determinado.
        - `onPressOut`: Disparado quando o usuário solta o botão.
        - `delayLongPress`: Define o tempo (em milissegundos) necessário para acionar o `onLongPress`.


# Listas de Alta Performance

Nesta fase, vamos aprender a renderizar listas de dados de forma eficiente em React Native. Compararemos a `FlatList` nativa com a poderosa `FlashList` da Shopify, que resolve problemas comuns de performance.

## 1\. Introdução à `FlatList`

A `FlatList` é o componente padrão do React Native para renderizar listas. Seu funcionamento se baseia em um conceito chamado "virtualização":

  - **Renderização Virtualizada**: A `FlatList` renderiza apenas os itens que estão visíveis na tela (e alguns itens próximos) para economizar recursos.
  - **Ciclo de Vida dos Itens**: Conforme você rola a tela, os componentes que saem do campo de visão são **destruídos**, e novos componentes são **criados** para os itens que entram.
  - **Impacto na Performance**:
      - Esse processo constante de criar e destruir componentes consome memória e poder de processamento.
      - Em listas longas ou com rolagem rápida, isso pode causar "buracos" brancos (elementos que ainda não foram renderizados) na tela, prejudicando a experiência do usuário.

## 2\. Introdução à `FlashList` da Shopify

Para otimizar a renderização de listas, usaremos a `FlashList`, uma alternativa performática criada pela Shopify.

  - **Instalação**: Adicione a `FlashList` ao projeto com o seguinte comando:
    ```bash
    npx expo install @shopify/flash-list
    ```
  - **Como funciona? Reciclagem de Componentes**:
      - Em vez de destruir os componentes que saem da tela, a `FlashList` os **recicla**.
      - Ela pega a "célula" (o contêiner do item) que acabou de sair da tela e a **reutiliza** para renderizar o novo item que está entrando.
      - O processo apenas troca os dados internos (como textos e imagens), evitando a sobrecarga de criar um componente do zero. Isso resulta em uma rolagem muito mais fluida e eficiente.

Para mais detalhes, consulte o repositório oficial: [Shopify/flash-list](https://github.com/Shopify/flash-list).

## 3\. Fonte de Dados

Para nossos exemplos, utilizaremos a API pública e gratuita **[JSONPlaceholder](https://jsonplaceholder.typicode.com/)**, que fornece dados fictícios ideais para testes de listas.