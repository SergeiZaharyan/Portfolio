const textareaOrders = document.querySelector('.textarea-orders');
const buttonOrders = document.querySelector('.button-orders');
const outputOrders = document.querySelector('.output-orders');

buttonOrders.addEventListener('click',() => {
   
     outputOrders.innerHTML = textareaOrders.value.split('\n').filter(currentValue => currentValue.includes('true') || currentValue.includes('Дата вылета') || currentValue.includes('Количество туристов') || currentValue.includes('Name') || currentValue.includes('Phone') || currentValue.includes('rating') || currentValue.includes('Количество ночей')).join('<br>');
     textareaOrders.value = "";
})

