<template>
  <div class="layout-dashboard">
    <HeaderComponent />
    <div class="container-fluid">
      <div class="row">
        <SidebarMenu />
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <slot></slot>
        </main>
      </div>
    </div>
    
  </div>
</template>

