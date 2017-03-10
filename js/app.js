var App = new function () {
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
        var info = '';
        if (this.usuarios.length > 0) {
            for (i = 0; this.usuarios.length; i++) {
                info += '<tr>';
                info += '<td>' + this.usuarios[i] + '</td>';
                info += '<tr>';
            }
        }
        this.contar(this.usuarios.length);
        return this.el.innerHTML = data;
    }
}
