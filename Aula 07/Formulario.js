// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                //--- Há partida, está tudo bem
                var failed = false;
                //--- Se não houver nenhum transporte selecionado, failed = true (falhou!)
                var checkboxes = document.getElementsByName("transport");
                var checked = 0;
                //--- Conta os selecionados
                for (var i = 0, n = checkboxes.length; i < n; i++) {
                    if (checkboxes[i].checked) checked++;
                }
                if (checked == 0) {
                    //--- Conta coloca o required de todos a true
                    for (var i = 0, n = checkboxes.length; i < n; i++) {
                        checkboxes[i].required = true;
                    }
                }
                else {
                    //--- Conta coloca o required de todos a false
                    for (var i = 0, n = checkboxes.length; i < n; i++) {
                        checkboxes[i].required = false;
                    }
                }

                //--- se as demais validações falharem, faled = true (falhou)
                if (form.checkValidity() === false) {
                    failed = true;
                }

                if (failed == true) {
                    event.preventDefault();
                    event.stopPropagation();
                }

                form.classList.add('was-validated')
            }, false)
        })
})()
