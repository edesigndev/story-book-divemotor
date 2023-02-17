<template>
  <ul class="page" style="padding-top: 20px">
    <li class="page-btn"><span class="material-icons"> &lt; </span></li>
    <li class="page-number">1</li>
    <li class="page-number active">2</li>
    <li class="page-number">3</li>
    <li class="page-dots">...</li>
    <li class="page-number">12</li>
    <li class="page-number">13</li>
    <li class="page-btn"><span class="material-icons">&gt;</span></li>
  </ul>
</template>
<style lang="scss">
.page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
  margin: 3rem;
  border-radius: 0.6rem;
  background: #ffffff;
}

.page-btn {
  opacity: 0.2;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  background-color: #6c747a;
}

.page-btn {
  background: #9ca3af;
  border-radius: 25px;
  width: 50px;
  height: 50px;
  color: white;
}
.page-btn,
.page-number,
.page-dots {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  cursor: pointer;
}

.page-number {
  width: 50px;
  height: 50px;
}

.page-number.active {
  color: #ffffff;
  background: #0066cc;
  border: 1px solid #0066cc;
  border-radius: 0.4rem;
}
</style>
