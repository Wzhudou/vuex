<template>
    <div class="login">
        <!-- <h3>login页面</h3>
        <button @click="login">登录</button> -->
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span class="title">登录</span>
            </div>
            <el-form ref="ruleForm" class="demo-ruleForm">
                <el-form-item label="用户名:" prop="username" class="form-item">
                    <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码:" prop="password" class="form-item">
                    <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                ruleForm: {
                    username: '',
                    password: '',
                }
            }
        },
        methods: {
            submitForm() {
                this.$api.login(this.ruleForm).then(res => {
                    if(res.code !== 200) {
                        this.$message.warning(res.msg);
                        return;
                    }
                    this.$message.success(res.msg);
                    this.$store.dispatch('loginByUser', res.token);
                    localStorage.setItem('token', res.token);
                    this.$router.push({
                        path: '/'
                    })
                })
            }
        },
    }
</script>

<style  scoped>
.login {
    text-align: center;
}
.title {
    font-size: 18px;
}
.box-card {
    width: 40%;
    text-align: center;
    margin: 0 auto;
    margin-top: 100px;
}
/* .demo-ruleForm >>> .el-fo {
    display: flex;
    justify-content: center;
} */
.form-item {
    display: flex;
    justify-content: center;
}
.form-item >>> .el-form-item__label {
    width: 14%;
}
.form-item >>> .el-form-item__content {
    width: 70%;
}
</style>