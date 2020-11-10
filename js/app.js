const headerModule = (() => {
  return {
    // ハンバーガーメニューの開閉
    toggleBurgerBtn: () => {
      const html = document.getElementsByTagName("html");
      const burgerBtn = document.getElementById("js-burger-btn");
      const navMenu = document.getElementById("js-nav-menu");

      if (burgerBtn && navMenu) {
        burgerBtn.classList.toggle("active");
        navMenu.classList.toggle("active");
        // スクロールの制御
        for (let element of html) {
          element.classList.toggle("scroll-prevent");
        }
      }
    },
  };
})();
