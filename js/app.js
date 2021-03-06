//instancia de uma classe Anonima
var app = new function () {
    console.log("Instancinado app 2");
    this.elUsuarios = document.getElementById("usuarios");
    this.usuarios = ['Jão', 'Zé', 'Maria'];
    this.itemEditar = -1;
    this.contar = function (qtd) {
        var elContador = document.getElementById("contador");
        var nome = "Usuario";
        if (qtd) {
            if (qtd > 1) {
                nome = "Usuários";
            }
            elContador.innerHTML = qtd + ' ' + nome;

        } else {
            elContador.innerHTML = 'Sem ' + nome;
        }
    };
    this.listarTodos = function () {
        //gera String em formato tabela
        var dados = '';
        for (i = 0; i < this.usuarios.length; i++) {
            dados += '<tr>';
            dados += '<td>' + this.usuarios[i] + '</td>';
            dados += '<td><button onclick="app.excluir(' + i + ')">excluir</button></td>';
            dados += '<td><button onclick="app.editar(' + i + ')">editar</button></td>';
            dados += "</tr>";
        }
        //atualiza contador
        this.contar(this.usuarios.length);
        //atualizar DOM
        this.elUsuarios.innerHTML = dados;
    };
    this.excluir = function (item) {
        //remove1 1 elemento
        this.usuarios.splice(item, 1);
        this.listarTodos();
    }

    this.salvar = function () {
        //acessando o campo com o nome do usuarios
        var elNome = document.getElementById("add-nome");
        //pegando o texto preenchido
        var usuario = elNome.value;
        if (usuario) {
            if (this.itemEditar == -1) {
                //inserindo no vetor
                this.usuarios.push(usuario);

            } else {
                //Altera quando tem alguem para alterar
                this.usuarios.splice(this.itemEditar, 1, usuario.trim());
                this.itemEditar = -1;
            }
            //Atualizando a tela
            this.listarTodos();
            this.novo();
        }

    };
    this.novo = function () {
        this.itemEditar = -1;
        var elNome = document.getElementById("add-nome");
        elNome.value = "";
    }

    this.editar = function (item) {
        this.itemEditar = item;
        //acessando nome do array
        var nome = this.usuarios[item];
        if (nome) {
            //Acessando o elemento no DOM  
            var elNome = document.getElementById("add-nome");
            //preenchendo o form
            elNome.value = nome;
        }
    }
};


app.listarTodos();

