<template>
    <div class="form-container sign-in-container">
        <form action="#">
            <h1>登录</h1>
            <div class="social-container">
                <a :href="Github" class="social" @click="GetGithub">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#el-icon-CaseLibrary-GitHub"></use>
                    </svg></a>
                <a href="#" class="social">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#el-icon-CaseLibrary-weixin"></use>
                    </svg>
                </a>
                <a href="#" class="social">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#el-icon-CaseLibrary-QQ"></use>
                    </svg>
                </a>
            </div>
            <span>或使用您的帐号</span>
            <input type="email" placeholder="电子邮箱">
            <input type="password" placeholder="密码">
            <a href="#">忘记密码？</a>
            <button>登录</button>
        </form>
    </div>
</template>
<script>
    export default {
        name: 'Login',
        data() {
            return {
                Github: '#',
            }
        },
        props: {
            SetGithub: {
                type: Function,
                default: null,
            },
            Users: {
                type: String,
                required: true
            }
        },
        methods: {
            GetGithub() {
                // this.Github = this.Users
                this.$emit('github')
            }
        },
    };
</script>