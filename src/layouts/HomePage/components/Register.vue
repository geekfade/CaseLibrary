<template>
    <div class="form-container sign-up-container">
        <form action="#">
            <h1>注册</h1>
            <div class="social-container">
                <a href="#" class="social">
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
            <span>或使用邮箱注册</span>
            <input type="text" placeholder="姓名">
            <input type="email" placeholder="电子邮箱">
            <input type="password" placeholder="密码">
            <button>注册</button>
        </form>
    </div>
</template>
<script>
    export default {
        name: 'Register',
    };
</script>