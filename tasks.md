- [x] Criar as rotas
    - [x] home (/)
    - [x] notFound
    - [x] tasks (/tasks)
    - [x] tasks/[id] (/tasks/[id])
- [ ] Testar para ver se cada rota funcionou
<br/>

- [ ] Criar um client component de botão
    - [ ] O nome do componente pode ser Button
    - [ ] Terá a opção de props de:
        - [ ] Nome (Opcional)
        - [ ] Icon (Opcional)
        - [ ] Color
<br/>

- [ ] Criar um client component de input
    - [ ] O nome do componente pode ser InputComponent
    - [ ] Ver a estilização
    - [ ] Terá a opção de props de:
        - [ ] Placeholder (opcional)
<br/>

- [ ] Criar um client component de Formulario de pesquisa
    - [ ] O nome do componente pode ser searchTaskComponent
    - [ ] Terá um InputComponent
    - [ ] Component Button passando a label Pesquisar com a cor amarela
<br/>

- [ ] Criar um client component de Modal de add task
    - [ ] O nome do componente pode ser modalAddTaskComponent
    - [ ] Terá um InputComponent de Title
    - [ ] Terá um InputComponent de Description
    - [ ] Component Button passando a label Pesquisar com a cor amarela
<br/>

- [ ] Na tela de home
    - [ ] Mensagem de bem-vindo no meio
    - [ ] Button componente com label Visualizar Tasks e cor azul
        - [ ] Ao clicar vai para a tela de listagem de tasks usando o Link do next 
    - [ ] Inserir Metada com título e descrição específicos
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
<br/>

- [ ] Na tela de especificar uma task
    - [ ] Detalhar a task de acordo com o id selecionado usando [Jsonplaceholder](https://jsonplaceholder.typicode.com/) ver a estilização