window.addEventListener('load', ()=>{

    let barcode = document.getElementById('codeInput')
    let code = document.getElementById('code')


    // Focus
    barcode.focus()

    // Control form
    let form = document.querySelector('form.form')
    
    form.addEventListener('submit', (e) => {
        e.preventDefault()

        loader.classList.add('active')
        fetch(`/item/${barcode.value}`, {
                method: 'GET'
        }).then(res => res.json())
        .then(response => {
            loader.classList.remove('active')
            //
            if(response.status == 'ok'){

                code.innerHTML = JSON.stringify(response.response, undefined, 3);

                barcode.value = '';

                barcode.focus();
            }else if(response.status == 'error'){
                alert(`服务器回复错误: ${response.response}`)
            }
        })
        .catch(error => {
            loader.classList.remove('active')

            alert(`加速出现错误: ${error}`)
        });
    });

});