<template>
    <div :class="isActive?'right-panel-active':''" class="dowebok" id="dowebok">
        <Login @github="setgithub" :Users="Users" />
        <Register />
        <div class="overlay-container">
            <div class="overlay">
                <div class="overlay-panel overlay-left">
                    <h1>已有帐号？</h1>
                    <p>请使用您的帐号进行登录</p>
                    <button class="ghost" id="signIn" @click="Login()">登录</button>
                </div>
                <div class="overlay-panel overlay-right">
                    <h1>没有帐号？</h1>
                    <p>立即注册加入我们，和我们一起开始旅程吧</p>
                    <button class="ghost" id="signUp" @click="Register()">注册</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {
        Login,
        Register
    } from './components'
    export default {
        name: 'User',
        data() {
            return {
                isActive: false,
                Users: '',
            }
        },
        components: {
            Login,
            Register
        },
        methods: {
            Register() {
                this.isActive = true;
            },
            Login() {
                this.isActive = false;
            },
            setgithub() {
                const client_id = 'Iv1.e87a7f5b832fe70b';
                const authorize_uri = 'https://github.com/login/oauth/authorize';
                const redirect_uri = 'http://caselibrary.top/oauth/redirect';
                const User = `${authorize_uri}?client_id=${client_id}&redirect_uri=${redirect_uri}`;
                this.Users = User;
            }
        }
    }
</script>
<style scoped>
    @import "~@/assets/css/dmaku.css";
</style>