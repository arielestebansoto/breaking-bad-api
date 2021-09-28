const app = document.querySelector('#app')

function PageError() {
    app.innerHTML=`
    <div class="container">
        <div class="row center"  >
            <h5>Error. Try Again.</h5>
        </div>
    </div>
    `
}
export default PageError