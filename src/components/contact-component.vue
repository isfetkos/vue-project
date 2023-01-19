<template>
    <v-parallax :src="parallaxSrc">
        <p id="h3-text">Τα παραμύθια μου</p>
        <v-form v-model="valid">
            <v-container>
                <v-row>
                    <v-col cols="12" md="4">
                        <v-text-field class="contact" v-model="firstname" :rules="nameRules" :counter="10"
                            label="Το μικρό σου" variant="outlined" color="var(--clr-white)" bg-color="var(--clr-pink)"
                            required></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-text-field class="contact" v-model="lastname" :rules="nameRules" :counter="10"
                            label="Το επίθετο σου" color="var(--clr-white)" bg-color="var(--clr-pink)"
                            variant="outlined" required></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-text-field class="contact" v-model="email" :rules="emailRules" label="Το E-mail σου"
                            variant="outlined" color="var(--clr-white)" bg-color="var(--clr-pink)"
                            required></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" md="12">
                        <v-textarea class="contact" color="var(--clr-white)" variant="outlined"
                            bg-color="var(--clr-pink)" label="Το μήνυμά σου">
                        </v-textarea>
                    </v-col>
                </v-row>
            </v-container>
            <div class="d-flex flex-column justify-center align-center button-contact">
                <v-btn class="button-hover" variant="outlined" bg-color="var(--clr-pink)" size="large">
                    <v-icon class="icon-btn" color="var(--clr-gray)" icon="mdi-checkbox-marked-circle"></v-icon>Αποστολή
                </v-btn>
            </div>
        </v-form>
    </v-parallax>
</template>
<script>
export default {
    name: "contact-component",
    data() {
        return {
            parallaxSrc: "images/bitmap.svg"
        }
    }
};
</script>
<style scoped>

</style>
