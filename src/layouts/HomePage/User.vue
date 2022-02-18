<template>
    <div :class="isActive?'right-panel-active':''" class="dowebok" id="dowebok">
        <Login @github="SetGithub" :Users="Users" />
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
    import axios from "axios";
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
            async SetGithub() {
                const clientID = 'Iv1.dd61b9c70372fd46'
                const clientSecret = '00891959adb6a9d54ca9316e04dcb80d08004153'
                const tokenResponse = await axios({
                    method: 'post',
                    url: 'https://github.com/login/oauth/access_token?' +
                        `client_id=${clientID}&` +
                        `client_secret=${clientSecret}&`,
                    headers: {
                        accept: 'application/json'
                    }
                });
                this.Users = User;
                const accessToken = tokenResponse.data.access_token;
                console.log(`access token: ${accessToken}`);

                // const result = await axios({
                //     method: 'get',
                //     url: `https://api.github.com/user`,
                //     headers: {
                //         accept: 'application/json',
                //         Authorization: `token ${accessToken}`
                //     }
                // });
                // console.log(result.data);
                // const name = result.data.name;

            }
        }
    }
</script>
<style scoped>
    @import "~@/assets/css/dmaku.css";
</style>