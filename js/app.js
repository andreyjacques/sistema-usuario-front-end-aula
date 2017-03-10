var app = new function () {
    console.log("Instaciando app");
    this.el = document.getElementById("users");
    this.usuarios = ['João', 'Ze', 'Maria'];
    this.contar = function (qtd) {
        var el = document.getElementById("qtd");
        var nome = "Usuário";
        if (qtd) {
            if (qtd > 1) {
                this.nome = "Usuários";
            }
            el.innerHTML = qtd + ' ' + nome;
        } else {
            el.innerHTML = 'Sem ' + nome;
        }
    };
    this.listaTodos = function () {
        var dados = '';
        if (this.usuarios.length > 0) {
            for (i = 0; i < this.usuarios.length; i++) {
                dados += '<tr>';
                dados += '<td>' + this.usuarios[i] + '</td>';
                dados += '<td><input type="button" onclick="app.excluir(' + i + ')" value="Remover"/></td>';
                dados += '<td><input type="button" onclick="app.editar(' + i + ')" value="Editar"/></td>';
                dados += '</tr>';
            }
        }
        this.contar(this.usuarios.length);
        return this.el.innerHTML = dados;
    };
    this.addNome = function () {
        var nome = document.getElementById("nome").value;
        if (nome)
            this.usuarios.push(nome);
        this.listaTodos();
    };
    this.excluir = function (item) {
        this.usuarios.splice(item, 1);
        this.listaTodos();
    };
    this.editar = function (item) {
        var nome = this.usuarios[item];
        var elNome = document.getElementById("nome");
        if (item < this.usuarios.length) {
            elNome.value = nome;
        } else {
            console.log("erro");
        }
    }
};