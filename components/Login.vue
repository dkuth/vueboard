<template>
    <div>
      <h2>Login</h2>
      <b-container>
        <b-row>
        <b-col cols="12">
          <b-form-input class='mb-2' v-model="text" placeholder="아이디를 입력하세요"></b-form-input>
          <b-form-input v-model="password" placeholder="비밀번호를 입력하세요"></b-form-input>
          <div class='mt-3'>
            <b-button style='width:30%' class='mr-5' variant="primary">로그인</b-button>
            <b-button style='width:30%' class='ml-5' variant="outline-primary">회원가입</b-button>
          </div>
          </b-col>   
        </b-row>
      </b-container>
   </div>
</template>
<script>
export default {
  name: "Login",
  data() {
        return {
        
      }
   
    }
    
  }  
</script>