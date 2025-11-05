# 📖 DEX BLOG - dApp (Internet Computer Edition)

## Missão

O **DEX BLOG** é uma plataforma de conteúdo 100% descentralizada. A missão é construir o futuro da mídia: uma plataforma justa, transparente e imparável, hospedada inteiramente no Internet Computer (ICP).

Este projeto abandona servidores centralizados, bancos de dados e APIs, em favor de uma arquitetura Web3 pura, onde tanto o frontend quanto o backend rodam on-chain.

---

## 🏛️ Arquitetura Principal

Este dApp é construído usando a arquitetura padrão e "sem gambiarra" do Internet Computer, dividida em dois canisters principais:

* **Frontend Canister:** Serve a interface do usuário, construída como um aplicativo **React** (usando **Vite** como ferramenta de build).
* **Backend Canister:** Contém toda a lógica de negócios (criação de posts, gerenciamento de usuários, etc.), escrita em **Rust** e compilada para **WebAssembly (Wasm)**.

| Componente | Tecnologia | Hospedagem |
| :--- | :--- | :--- |
| **Frontend** | React (com Vite) | Canister de Frontend (ICP) |
| **Backend** | Rust | Canister de Backend (ICP) |
| **Rede** | Internet Computer (ICP) | Internet Computer |
| **SDK** | `dfx` | N/A |

---

## 💻 Pilha de Tecnologia e Versões

Para contribuir com este projeto, seu ambiente de desenvolvimento **deve** ser compatível com as seguintes ferramentas e versões (ou superiores). Estas são as versões que foram validadas durante a configuração inicial do projeto.

| Tecnologia | Finalidade | Versão Verificada |
| :--- | :--- | :--- |
| **dfx (ICP SDK)** | SDK principal do Internet Computer | `0.29.2` |
| **rustc** | Compilador Rust | `1.91.0` |
| **rustup** | Gerenciador de Toolchain do Rust | `1.28.2` |
| **React** | Biblioteca de UI do Frontend | `18.2.0` |
| **Vite** | Ferramenta de Build do Frontend | `^4.0.1` |
| **Node.js** | Runtime para build do frontend | `20.x` (Recomendado) |
| **npm** | Gerenciador de Pacotes do Node | `10.x` (Recomendado) |

---

## 🚀 Configuração do Ambiente de Desenvolvimento

Siga este guia passo a passo para configurar sua máquina local (Linux/macOS/WSL) para construir e rodar o projeto.

### Etapa 1: Instalar o SDK do Internet Computer (dfx)

`dfx` é a ferramenta de linha de comando essencial para o desenvolvimento no ICP.

1. Execute o script de instalação oficial:

    ```bash
    sh -ci "$(curl -fsSL [https://internetcomputer.org/install.sh](https://internetcomputer.org/install.sh))"
    ```

2. Após a instalação, recarregue seu shell (ou feche e reabra o terminal) e execute o comando `source` sugerido:

    ```bash
    source "$HOME/.local/share/dfx/env"
    ```

3. **Validação:** Verifique se a versão correta (`0.29.2` ou superior) está instalada.

    ```bash
    dfx --version
    ```

    *(**Solução de Problemas:** Se o comando acima falhar com `error: dfx 0.29.2 is not installed`, execute `dfxvm install 0.29.2` para corrigir.)*

### Etapa 2: Instalar o Ambiente Rust

O Rust é usado para construir o canister de backend.

1. Instale `rustup` (o gerenciador de toolchain do Rust):

    ```bash
    curl --proto '=https' --tlsv1.2 -sSf [https://sh.rustup.rs](https://sh.rustup.rs) | sh
    ```

2. Feche e reabra seu terminal para que o `rustup` esteja no seu `PATH`.

3. Adicione o "alvo" de compilação WebAssembly (Wasm). Isso permite que o Rust compile para o formato que o ICP entende.

    ```bash
    rustup target add wasm32-unknown-unknown
    ```

4. **Validação:** Verifique suas instalações.

    ```bash
    rustc --version
    rustup --version
    ```

### Etapa 3: Instalar o Node.js

O Node.js é necessário para construir o frontend (React/Vite) e instalar as dependências do `npm`.

1. Recomendamos usar o `nvm` (Node Version Manager) para gerenciar suas versões do Node.

    ```bash
    curl -o- [https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh](https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh) | bash
    ```

2. Instale e use uma versão LTS recente (ex: 20.x):

    ```bash
    nvm install 20
    nvm use 20
    ```

3. **Validação:**

    ```bash
    node --version
    npm --version
    ```

### Etapa 4: Clonar ou Criar o Projeto

* **Para Criar um Novo Projeto (Recomendado):**
    Use o `dfx` para criar o "esqueleto" do projeto com a base correta (Rust + React).

    ```bash
    dfx new dex_blog --type=rust --frontend=react
    cd dex_blog
    ```

* **Para Clonar (se já existir no Git):**

    ```bash
    git clone [https://github.com/seu-usuario/dex_blog.git](https://github.com/seu-usuario/dex_blog.git)
    cd dex_blog
    ```

---

## 🛠️ Como Rodar o Projeto Localmente (Teste de Validação)

Após configurar seu ambiente e criar/clonar o projeto, siga estes passos para confirmar que seu ambiente está 100% funcional.

1. **Inicie a Rede Local:**
    Abra uma nova janela de terminal, navegue até a pasta `dex_blog` e execute:

    ```bash
    dfx start --clean --background
    ```

    *(Isso inicia sua própria "blockchain" local. Deixe este terminal rodando.)*

2. **Instale Dependências:**
    No seu terminal original (dentro da pasta `dex_blog`), instale os pacotes `npm` necessários para o frontend React:

    ```bash
    npm install
    ```

3. **Compile e Implante (Deploy):**
    Este é o comando principal. Ele irá compilar seu backend Rust e construir seu frontend React, implantando ambos na sua rede local.

    ```bash
    dfx deploy
    ```

4. **Teste no Navegador:**
    Após o deploy ser concluído, o terminal fornecerá uma URL para o seu frontend. Abra-a no seu navegador (use a URL recomendada, que termina com `.localhost`):

    ```
    URLs:
      Frontend canister via browser:
        dex_blog_frontend:
          - http://[ID_DO_CANISTER].localhost:4943/
    ```

    *(Nota: Seu ID de canister será diferente).*

    Você deverá ver uma página de exemplo com o **logo do React girando**, confirmando que sua base Rust + React está 100% funcional.

## 📁 Estrutura do Projeto

* `/src/dex_blog_backend/`: Contém todo o código-fonte do backend em **Rust**. O ponto de entrada principal é `src/lib.rs`.
* `/src/dex_blog_frontend/`: Contém o código-fonte do frontend em **React (com Vite)**. Esta é a nossa base de desenvolvimento. O ponto de entrada principal é `src/main.tsx`.
* `dfx.json`: O "cérebro" do projeto. Este arquivo de manifesto define seus canisters, como construí-los e como eles se relacionam.

.
├── Cargo.lock
├── Cargo.toml
├── dfx.json
├── README.md
└── src
    ├── declarations
    │   ├── dex_blog_backend
    │   └── dex_blog_frontend
    ├── dex_blog_backend
    │   ├── Cargo.toml
    │   ├── dex_blog_backend.did
    │   └── src
    └── dex_blog_frontend
        ├── app
        ├── eslint.config.mjs
        ├── next.config.ts
        ├── next-env.d.ts
        ├── out
        ├── package.json
        ├── package-lock.json
        ├── postcss.config.mjs
        ├── public
        ├── README.md
        └── tsconfig.json
