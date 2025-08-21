- [x] Criar as rotas
    - [x] home (/)
    - [x] notFound
    - [x] tasks (/tasks)
    - [x] tasks/[id] (/tasks/[id])
- [x] Testar para ver se cada rota funcionou
<br/>

- [x] Criar um client component de botão
    - [x] O nome do componente pode ser Button
    - [x] Terá a opção de props de:
        - [x] Label 
        - [x] Icon (Opcional)
        - [x] ColorIcon (Opcional)
        - [x] ColorBackground (Opcional)
    - [x] Criar testes para esse componente
<br/>

- [x] Criar um client component de input
    - [x] O nome do componente pode ser Input
    - [x] Ver a estilização
    - [x] Terá a opção de props de:
        - [x] Placeholder (opcional)
    - [x] Criar testes para esse componente

<br/>

- [x] Criar um client component de Formulario de pesquisa
    - [x] O nome do componente pode ser searchTask
    - [x] Terá um InputComponent
    - [x] Component Button passando a label Pesquisar com a cor amarela
    - [x] Configurar o componente do input para permitir que o label caiba
    - [x] O label em pesquisar tem que ficar centralizado
    - [x] Controlar o tamanho dos icones no button
    - [x] Controlar as bordas do button
    - [x] Controlar as bordas do input
    - [x] Criar testes para esse componente

<br/>

- [x] Criar um client component de Modal de add task
    - [x] O nome do componente pode ser modalAddTaskComponent
    - [x] Terá um botão para abrir o modal
    - [x] Terá um InputComponent de Title
    - [x] Terá um InputComponent de Description
    - [x] Component Button passando a label adicionar
    - [x] Component Button passando a label cancelar
    - [x] Criar testes para esse componente

<br/>

- [x] Criar um componente de redirecionamento
    - [x] Nome: Redirect
    - [x] Props:
        - [x] label
        - [x] hrf
<br/>

- [x] Na tela de home
    - [x] Mensagem de bem-vindo no meio
    - [x] Button componente com label Visualizar Tasks e cor azul
        - [x] Ao clicar vai para a tela de listagem de tasks usando o Link do next 
    - [x] Inserir Metada com título e descrição específicos
    - [ ] Criar testes no cypress para esse fluxo

<br/>

- [ ] Na tela de listagem de tasks
    - [ ] Inserir Metada com título e descrição específicos
    - [ ] Usar o componente searchTaskComponent
        - [ ] Ao clicar no botão ele vai para  tela de especificar task com o id escolhido com o Link do next
    - [ ] Component Button com o icone de add que abre o modalAddTaskComponent
        - [ ] Ao clicar no botão de add eu chamo uma função server que chama uma requisição de add os dados que estão no input 
    - [ ] Lista todas as tasks usando [Jsonplaceholder](https://jsonplaceholder.typicode.com/)
        - [ ] Tenho que ver uma estilização para cada item
    - [ ] Ao clicar em um item ele vai para a tela de especificar a task com o Link do next
    - [ ] Criar testes no cypress para esse fluxo

<br/>

- [ ] Na tela de especificar uma task
    - [ ] Detalhar a task de acordo com o id selecionado usando [Jsonplaceholder](https://jsonplaceholder.typicode.com/) ver a estilização
    - [ ] Criar testes no cypress para esse fluxo
