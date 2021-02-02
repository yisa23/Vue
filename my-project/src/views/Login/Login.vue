<template>
    <ValidationObserver tag="form" ref="obs">
        <ValidationProvider tag="div" rules="required|email" v-slot="{ errors }">
            <label>
                <input type="text" v-model="email"/>
            </label>
            <span>{{ errors[0] }}</span>
        </ValidationProvider>
        <ValidationProvider tag="div" rules="required" v-slot="{ errors }">
            <label>
                <input type="password" v-model="password"/>
            </label>
            <span>{{ errors[0] }}</span>
        </ValidationProvider>
        <button @click.prevent="submit">提交</button>
    </ValidationObserver>
</template>

<script>
    import {extend, ValidationProvider, ValidationObserver} from 'vee-validate';
    import {required, email} from 'vee-validate/dist/rules'
    import {mapActions} from 'vuex'

    export default {
        components: {
            ValidationProvider,
            ValidationObserver
        },
        data() {
            return {
                email: "",
                password: ""
            }
        },
        mounted() {
            extend('required', {
                ...required,
                message: '必填'
            });
            extend('email', {
                ...email,
                message: '必填'
            })
        }, methods: {
            async submit() {
                const isValid = await this.$refs.obs.validate()
                if (!isValid) {
                    console.log('error')
                } else {
                    console.log('ok')
                    this.login({email: this.email, password: this.password}).then(value => {
                        console.log(value)
                        this.$router.push('/msite')
                    }).catch(reason => {
                        console.log(reason)
                    })
                }
            },
            ...mapActions('m2', ['login']),
        },
    }
</script>

<style scoped>
    input {
        border: 1px solid #000;
    }
</style>
