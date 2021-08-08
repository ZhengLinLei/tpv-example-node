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

        loader.classList.add('active')
        fetch('/post/addNew', {
                method: 'POST', // or 'PUT'
                body: JSON.stringify(data), // data can be `string` or {object}!
                headers:{
                  'Content-Type': 'application/json'
                }
        }).then(res => res.json())
        .then(response => {
            loader.classList.remove('active')
            //
            if(response.status == 'ok'){
                alert('加入完毕');

                barcode.value = '';
                name.value = '';
                price.value = '';

                barcode.focus();
            }else if(response.status == 'error'){
                alert(`服务器回复错误: ${response.response}`)
            }else{
                alert('你已加过此商品， 去主机查看')
            }
        })
        .catch(error => {
            loader.classList.remove('active')

            alert(`加速出现错误: ${error}`)
        });
    });

});