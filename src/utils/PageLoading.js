const app = document.querySelector('#app')

function PageLoading() {
    app.innerHTML=`
    <div class="container">
        <div class="row center" >
            <div class="col s12">
                <h4 class="white-text">Cooking...</h4>
            </div>
        </div>
    </div>
    `
}
export default PageLoading