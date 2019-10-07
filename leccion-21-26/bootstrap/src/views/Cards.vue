<template>
    <div class="mt-4">
        <b-container>
            <b-row class="mt-5">
                <div cols="12">
                    <b-button>Button</b-button>
                    <b-button variant="danger">Button</b-button>
                    <b-button variant="success">Button</b-button>
                    <b-button variant="outline-primary">Button</b-button>
                </div>
            </b-row>
            <b-row class="mt-5">
                <b-col cols="12">
                    <div>
                        <b-card
                            title="Card Title"
                            img-src="https://picsum.photos/600/300/?image=25"
                            img-alt="Image"
                            img-top
                            tag="article"
                            style="max-width: 20rem;"
                            class="mb-2">
                            <b-card-text>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                            </b-card-text>

                            <b-button href="#" variant="primary">Go somewhere</b-button>
                        </b-card>
                    </div>

                </b-col>
            </b-row>
        </b-container>
    </div>
</template>


<script>
export default {
    name: 'Cards'
}
</script>