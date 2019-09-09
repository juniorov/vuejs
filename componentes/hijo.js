Vue.component('hijo',{
    template: //html
    `
        <div class="p-3 bg-info text-white">
            <h4>Componente Hijo: {{ numero }}</h4>
        </div>
    `,
    props: ['numero']
});