<template>
  <div class='header-info'>
    <b-navbar toggleable="lg" type="dark">
      <b-navbar-brand to="/">H8N2 BOARD</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">자유게시판</b-nav-item>
          <b-nav-item to="/Login">로그인</b-nav-item>
          <b-nav-item to="/food">갤러리</b-nav-item>
          <b-nav-item to="/boardlist">스토리</b-nav-item>
          <b-nav-item to="/calendar">캘린더</b-nav-item>
          <b-nav-item to="/tab">스케줄</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {

    }
  }
};
</script>
<style scoped>
  .header-info {
    width: 100%;
    height: auto;

    background: #078;
    color: white;
  }
</style>