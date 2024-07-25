
# Teste Jest

Este projeto contém testes para funções de ordenação e busca usando o Jest. Siga as instruções abaixo para configurar e executar os testes.

## Requisitos

- Node.js (versão 12 ou superior)
- NPM (geralmente incluído com o Node.js)

## Instalação

1. Clone o repositório para o seu ambiente local:

```bash
git clone https://github.com/seu-usuario/teste-jest.git
```

2. Navegue até o diretório do projeto:

```bash
cd teste-jest
```

3. Instale as dependências do projeto:

```bash
npm install
```

## Estrutura do Projeto

- `problema1/` : Contém a implementação e os testes para o problema 1.
- `problema2/` : Contém a implementação e os testes para o problema 2.
- `problema3/` : Contém a implementação e os testes para o problema 3.

## Executando os Testes

Para executar todos os testes, use o seguinte comando:

```bash
npm test
```

O comando acima executará o Jest e rodará todos os testes definidos no projeto. Os resultados dos testes serão exibidos no console.

## Testes Individuais

Para executar os testes de um problema específico, você pode usar o seguinte comando, substituindo `<problemaX>` pelo diretório específico (problema1, problema2 ou problema3):

```bash
npm test problemaX
```

## Configuração do Jest

O Jest está configurado para procurar arquivos de teste com a extensão `.test.js`. Os testes estão localizados nos diretórios correspondentes aos problemas. 
