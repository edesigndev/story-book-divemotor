<template>
  <nav
    id="sidebarMenu"
    class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
  >
    <div class="position-sticky pt-3 sidebar-sticky">
      <ul class="nav flex-column">
        <li class="nav-item">
          <router-link to="/logo" class="nav-link">Logo</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/buttons" class="nav-link">Botones</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/links" class="nav-link">Enlaces</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/inputs" class="nav-link">Inputs</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/dropdown" class="nav-link">DropDown</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/checkbox" class="nav-link">Checkbox</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/radio-button" class="nav-link"
            >Radio Button</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/accordion" class="nav-link">Accordion</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/cards" class="nav-link">Cards</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/tabs" class="nav-link">Tabs</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
