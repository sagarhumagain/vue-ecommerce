<template>
  <div class="admin">
    <div class="page-wrapper default-theme sidebar-bg bg1" :class="{'toggled' : !closeSidebar}">
      <nav id="sidebar" class="sidebar-wrapper">
        <div class="sidebar-content">
          <!-- sidebar-brand  -->
          <div class="sidebar-item sidebar-brand">
            <a href="#">pro sidebar</a>
            <div id="close-sidebar" @click="closeSidebar = true">
              <i class="fas fa-times text-secondary"></i>
            </div>
          </div>
          <!-- sidebar-header  -->
          <div class="sidebar-item sidebar-header d-flex flex-nowrap">
            <div class="user-pic">
              <img class="img-responsive img-rounded" src="img/user.png" alt="User picture" />
            </div>
            <div class="user-info">
              <span class="user-name">
                Sagar
                <strong>Humagain</strong>
              </span>
              <span class="user-role">Administrator</span>
              <span class="user-status">
                <i class="fa fa-circle"></i>
                <span>Online</span>
              </span>
            </div>
          </div>
          <!-- sidebar-search  -->
          <div class="sidebar-item sidebar-search">
            <div>
              <div class="input-group">
                <input type="text" class="form-control search-menu" placeholder="Search..." />
                <div class="input-group-append">
                  <span class="input-group-text">
                    <i class="fa fa-search" aria-hidden="true"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <!-- sidebar-menu  -->
          <div class="sidebar-item sidebar-menu">
            <ul>
              <li class="header-menu">
                <span>General</span>
              </li>
              <li>
                <router-link to="/admin/overview">
                  <i class="fa fa-tachometer-alt"></i>
                  <span class="menu-text">Dashboard</span>
                </router-link>
              </li>
              <li>
                <router-link to="/admin/order">
                  <i class="fa fa-shopping-cart"></i>
                  <span class="menu-text">Order</span>
                </router-link>
              </li>
              <li>
                <router-link to="/admin/product">
                  <i class="fa fa-book"></i>
                  <span class="menu-text">Products</span>
                </router-link>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-sign-out-alt"></i>
                  <span class="menu-text">Logout</span>
                </a>
              </li>
            </ul>
          </div>
          <!-- sidebar-menu  -->
        </div>
      </nav>
      <button @click="closeSidebar = false" class="toggleopen btn m-4">
        <i class="fas fa-bars"></i>
      </button>
      <!-- page-content  -->
      <main class="page-content pt-2">
        <router-view />
      </main>
      <!-- page-content" -->
    </div>
    <!-- page-wrapper -->
  </div>
</template>

<script>
export default {
  name: "Admin",
  props: {
    msg: String
  },
  data() {
    return {
      closeSidebar: false
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
