function addTask() {
    var newTask = document.getElementById('newtask').value;
    if (newTask.length == 0) {
        alert("Por favor, indique uma tarefa.")
    }

    else {
        //--- Adiciona uma nova linha ao elemento <div id="tasks"></div>
        document.getElementById('tasks').innerHTML += '<div class="input-group mb-1">' +
            '<span class="form-control form-control-sm">' + newTask + '</span>' +
            '<button class="btn btn-danger btn-sm input-group-text"><i class="fa fa-trash-o"></i></button>' +
            '</div>';
        //--- Procura por todos os lementos que posssuam a classe btn-danger (.btn-danger)
        var current_tasks = document.querySelectorAll(".btn-danger");
        //--- Em todos eles coloca uma instrução para ser removido o elemento superior (parent)
        for (var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function () {
                this.parentNode.remove();
            }
        }
        //--- Limpa a caixa de criação de novas tarefas
        document.getElementById('newtaskId').value = "";
    }
}
