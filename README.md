# Banco API Performance

## 📖 Introdução
Este repositório contém testes de performance em **JavaScript** com **[k6](https://k6.io/)** para avaliar latência, throughput e estabilidade da **Banco API**.  
Os cenários cobrem autenticação e operações de transferência. Durante a execução, a URL base da API **deve** ser informada via variável de ambiente **`baseUrl`** (ex.: `https://api.seu-dominio.com`).

---

## 🛠 Tecnologias utilizadas
- **k6** – runtime de testes de performance.
- **JavaScript (ES6+)** – linguagem dos scripts de teste.

---

## 📂 Estrutura do repositório
```bash
banco-api-performance/
├─ config/
│  └─ config.local.json
├─ fixtures/
│  └─ postLogin.json
├─ helpers/
│  └─ autenticacao.js
├─ tests/
│  ├─ login.test.js
│  └─ transferencias.test.js
├─ utils/
│  └─ variaveis.js
└─ README.md
```

---

## 🎯 Objetivo de cada grupo de arquivos
- **`config/`** → configurações auxiliares de ambiente local (ex.: parâmetros usados nos testes).  
  - `config.local.json`: valores de apoio para execução local.
- **`fixtures/`** → _payloads_ estáticos usados nos testes.  
  - `postLogin.json`: corpo de requisição para autenticação.
- **`helpers/`** → funções reutilizáveis que dão suporte aos cenários.  
  - `autenticacao.js`: rotinas de login/obtenção de token e pré-condições.
- **`tests/`** → especificações de teste executadas pelo k6.  
  - `login.test.js`: valida fluxo de autenticação.  
  - `transferencias.test.js`: valida endpoints/fluxos de transferência.
- **`utils/`** → utilidades e constantes compartilhadas.  
  - `variaveis.js`: centraliza variáveis e valores padrão utilizados pelos testes.

> ℹ️ Dentro dos scripts, a variável `baseUrl` pode ser acessada via `__ENV.baseUrl`.
```
{
    "baseUrl": "http://localhost:3000"
}
```
---

## 🚀 Instalação e execução

### Pré‑requisito
- **k6** instalado: [instruções oficiais](https://k6.io/docs/getting-started/installation/)

### Executando os testes
Defina a variável **`baseUrl`** e execute o arquivo de teste desejado.

#### macOS / Linux (bash/zsh)
```bash
baseUrl=http://localhost:3000 k6 run tests/login.test.js
```

#### Windows PowerShell
```powershell
k6 run tests/login.test.js -e
BASE_URL = "http://localhost:3000"
```

#### Windows CMD
```bat
set baseUrl=http://localhost:3000 && k6 run tests/login.test.js
```

Substitua `http://localhost:3000` pela URL real da sua API.  
Para rodar outro cenário, troque o caminho do arquivo (ex.: `tests/transferencias.test.js`).

---

## 📊 Acompanhamento em tempo real e exportação de relatório
O k6 fornece um **dashboard web em tempo real** e permite **exportar** o relatório ao final. Use as variáveis de ambiente do próprio k6:

#### macOS / Linux (bash/zsh)
```bash
K6_WEB_DASHBOARD=true K6_WEB_DASHBOARD_EXPORT=html-report.html k6 run tests/login.test.js 
-e BASE_URL=http://localhost:3000
```

#### Windows CMD
```bat
set baseUrl=http://localhost:3000 && set K6_WEB_DASHBOARD=true && set K6_WEB_DASHBOARD_EXPORT=html-report.html && k6 run tests/login.test.js
```

- `K6_WEB_DASHBOARD=true` → habilita o dashboard em tempo real no navegador.  
- `K6_WEB_DASHBOARD_EXPORT=html-report.html` → exporta um arquivo HTML com o relatório ao finalizar.

O arquivo `html-report.html` será gerado no diretório atual da execução.
# banco-api-performance
