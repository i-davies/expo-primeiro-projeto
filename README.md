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