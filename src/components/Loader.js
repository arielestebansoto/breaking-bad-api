const Container = document.querySelector('#characters-container')

export const Loader = () => 
    Container.innerHTML=`
        <div class="lds-dual-ring"></div>
    `
