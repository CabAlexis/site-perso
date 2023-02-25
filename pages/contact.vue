<template>
    <div role="status" v-if="loading" class="h-screen flex justify-center items-center">
        <svg aria-hidden="true" class="w-16 h-16 mr-2 text-secondary animate-spin fill-primary"
            viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor" />
            <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill" />
        </svg>
    </div>
    <div class="flex flex-col justify-center items-center mb-24" :class="displayAlert ? 'mt-24' : ''" v-else>
        <div class="flex items-center text-secondary mt-12 mb-12">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>



            <h2 class="text-5xl title-style underline-short-title">Je vous écoute</h2>
        </div>
        <form class="w-full max-w-lg" ref="form">
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-secondary text-xs font-bold mb-2"
                        for="grid-first-name">
                        Prénom
                    </label>
                    <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-primary rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-primary focus:border-secondary"
                        id="grid-first-name" type="text" placeholder="Fizz" v-model="formData.firstname"
                        @change="v$.firstname.$touch" :class="{
                            'border-red-500 focus:border-red-500': v$.firstname.$error,
                            'border-green-500': !v$.firstname.$invalid,
                        }">
                </div>
                <div class="w-full md:w-1/2 px-3">
                    <label class="block uppercase tracking-wide text-secondary text-xs font-bold mb-2" for="grid-last-name">
                        Nom
                    </label>
                    <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-primary rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-primary focus:border-secondary"
                        id="grid-last-name" type="text" placeholder="Buzz" v-model="formData.lastname"
                        @blur="v$.lastname.$touch" :class="{
                            'border-red-500 focus:border-red-500': v$.lastname.$error,
                            'border-green-500': !v$.lastname.$invalid,
                        }">
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-secondary text-xs font-bold mb-2" for="grid-password">
                        E-mail
                    </label>
                    <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-primary rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-primary focus:border-secondary"
                        id="email" type="email" placeholder="ceci-est-un-mail@exemple.com" v-model="formData.email"
                        @blur="v$.email.$touch" :class="{
                            'border-red-500 focus:border-red-500': v$.email.$error,
                            'border-green-500': !v$.email.$invalid,
                        }">
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-secondary text-xs font-bold mb-2" for="grid-password">
                        Message
                    </label>
                    <textarea
                        class="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-primary rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-primary focus:border-secondary h-48 resize-none"
                        id="message" placeholder="Je vous trouve très gentil et votre site est très beau"
                        v-model="formData.message" @blur="v$.message.$touch" :class="{
                            'border-red-500 focus:border-red-500': v$.message.$error,
                            'border-green-500': !v$.message.$invalid,
                        }"></textarea>
                </div>
            </div>
            <div>
                <div class="w-full flex justify-center items-center">
                    <button
                        class="shadow bg-secondary hover:bg-primary hover:text-secondary focus:shadow-outline focus:outline-none text-primary font-bold py-2 px-4 rounded"
                        type="button" @click="submitForm">
                        Envoyer
                    </button>
                </div>
                <div class="md:w-2/3"></div>
            </div>
        </form>
    </div>
    <GlobalModal v-if="displayAlert" title="Succés" message="L'email a bien été envoyé !" />
</template>

<script setup>
import { required, email, helpers } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';

const router = useRouter();

const formData = reactive({
    firstname: '',
    lastname: '',
    email: '',
    message: ''
})

const resetFormData = () => {
    formData.firstname = ''
    formData.lastname = ''
    formData.email = ''
    formData.message = ''
}

const form = ref(null);

const displayAlert = ref(false);
const loading = ref(false);

const rules = computed(() => {
    return {
        email: {
            required: helpers.withMessage("L'email est obligatoire", required),
            email: helpers.withMessage('Format non valide', email),
        },
        firstname: {
            required: helpers.withMessage('Le prénom est obligatoire', required),
        },
        lastname: {
            required: helpers.withMessage('Le nom est obligatoire', required),
        },
        message: {
            required: helpers.withMessage('Le message est obligatoire', required)
        }
    };
});

const v$ = useVuelidate(rules, formData);

const submitForm = () => {
    console.log(form);
    v$.value.$validate();
    if (!v$.value.$error) {
        loading.value = true;
        const requestOptions = {
            method: "POST",
            body: JSON.stringify({
                firstname: formData.firstname,
                lastname: formData.lastname,
                email: formData.email,
                message: formData.message,
            }),
            redirect: "follow",
            headers: {
                "Content-Type": "application/json"
            }
        };
        fetch("https://www.actionforms.io/e/r/site-perso-cabalex", requestOptions)
            .then(() => {
                v$.value.$reset()
                resetFormData();
                loading.value = false;
                displayAlert.value = true;
                setTimeout(() => {
                    displayAlert.value = false;
                }, 4000);
            })
            .catch(error => console.log("error", error));
    }
}

definePageMeta({
    layout: 'custom'
})
</script>

<style scoped>
input:focus::placeholder {
    color: transparent;
}

textarea:focus::placeholder {
    color: transparent;
}</style>