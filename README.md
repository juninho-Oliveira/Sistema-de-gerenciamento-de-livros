# Projeto API de Cadastro de Usuários e Livros

Este projeto consiste na criação de uma API utilizando o Json-Server para cadastro de usuários e livros. Além disso, implementa diversas funcionalidades relacionadas à gestão do acervo de livros e usuários.

## 🎨 Layout

O layout da aplicação está disponível no Figma:

[![Static Badge](https://img.shields.io/badge/Acessar_Layout-Figma-2304D361)](https://www.figma.com/file/MP66Snp5vlS7fjIu9m4eeO/Untitled?type=design&node-id=0-1&mode=design&t=yCxdKUPX68kICcL3-0)

![Tela inicial](./assets/images/pagina.png)




## Funcionalidades Implementadas

#### Usuários: 
- Cadastro de usuários com os campos: nome, idade, endereço, e-mail e telefone.
- Edição de usuários existentes.
- Exclusão de usuários do sistema.
- Listagem de todos os usuários cadastrados.
- Busca de usuários por nome.

#### Livros:

- Cadastro de livros com os campos: nome, autor, biografia, edição e editora.
- Edição de informações de livros existentes.
- Exclusão de livros do acervo.
- Listagem de todos os livros disponíveis.
- Funcionalidades Adicionais
- Busca de livros por título.

### Desafios:

- Exibição dos usuários que reservaram um determinado livro.
- Exibição dos livros que um determinado usuário reservou.

#### Ferramentas Utilizadas

- Json-Server: Servidor para criar APIs Fake.
- Consumo de API ViaCep para busca do endereço do usuário
- Git Project: Organização de tarefas.
- GitHub: Controle de versão e colaboração no código.
- HTML, BootStrap icons, CSS e JS: Linguagens utilizadas para o desenvolvimento da interface do usuário e consumo da API.

### Como Executar

- Clone o repositório: git clone https://github.com/juninho-Oliveira/Sistema-de-gerenciamento-de-livros.git

- Instale as dependências: npm install
- Inicie o servidor Json-Server: npm run server
- Abra o arquivo index.html em seu navegador.

#### Criadores 

<table>
  <tr>    
  <td align="center">
      <a href="https://github.com/juninho-Oliveira">
        <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/123269234?v=4" width="100px;" alt="Foto de perfil do Damião Júnior"/><br />
        <sub>
          <b>Damião Júnior</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/alexesouza">
        <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/127620494?v=4" width="100px;" alt="Foto perfil do Alex Moreira
"/><br />
        <sub>
          <b>Alex Moreira</b>
        </sub>
      </a>
    </td>
  </tr>
</table> 