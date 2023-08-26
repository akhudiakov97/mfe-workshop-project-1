import faker from 'faker';

const mount = (el) => {
    let list = '';

    for(let i = 0; i<10; i++){
        const name = faker.commerce.productName();
        list += `<div>${name}</div>`
    }

    el.innerHTML = list;
}

if(process.env.NODE_ENV === 'development'){
    const el = document.querySelector('#dev-list');

    if(el){
        mount(el);
    }
}

export { mount };