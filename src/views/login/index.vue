<template>
<div class="login_page">
   <Button type="primary" @click="handLogin">登录</Button>
   <Button type="warning" @click="handLayout">退出</Button>
  </div>
</template>
<script>
    export default {
        data () {
            return {
               loginForm:{
                  username: 'lcm',
                  password: '123456' 
               }
            }
        },
        methods:{
            handLogin(){
                console.log('登录')
                this.$store.dispatch('Login',this.loginForm).then(() => {
                    console.log('登录成功')
                })
            },
            handLayout(){
                console.log('退出')
            }
        }
    }
</script>

<style lang="less" scoped>
.login_page{border:solid 1px red}
</style>


