window.addEventListener('load', ()=>{

    let barcode = document.getElementById('codeInput')
    let name = document.getElementById('nameInput')
    let price = document.getElementById('priceInput')


    // Focus
    barcode.focus()

    // Control form
    let form = document.querySelector('form.form')
    
    form.addEventListener('submit', (e) => {
        e.preventDefault()


        let data = {
            barcode: barcode.value,
            name: name.value,
            price: price.value
        }

        fetch('/post/addNew', {
                method: 'POST', // or 'PUT'
                body: JSON.stringify(data), // data can be `string` or {object}!
                headers:{
                  'Content-Type': 'application/json'
                }
        }).then(res => res.json())
        .then(response => {
            //
            if(response.status == 'ok'){
                alert('加入完毕');

                barcode.value = '';
                name.value = '';
                price.value = '';

                barcode.focus();
            }else{
                alert(`服务器回复错误: ${response.response}`)
            }

        })
        .catch(error => {
            alert(`加速出现错误: ${error}`)
        });
    });

});