Vue.directive('scroll', {
    inserted: function (el, binding) {
        let f = function (evt) {
            if (binding.value(evt, el)) {
                window.removeEventListener('scroll', f)
            }
        }
        window.addEventListener('scroll', f)
    }
})

var app = new Vue({
    el: '#app',
    data: {
        headerMenu_state: false,
        modal_bk: false,
        naiyou1: false,
        naiyou2: false,
        naiyou3: false
    },
    methods: {
        mainMenuToggle() {
            if (this.headerMenu_state == true) {
                this.headerMenu_state = false;
                this.modal_bk = false;
                return;
            }
            this.headerMenu_state = true;
            this.modal_bk = true;
        },
        modalBkClick() {
            this.headerMenu_state = false;
            this.modal_bk = false;
        },
        toggleCtrlPanel() {
            this.naiyou1 = !this.naiyou1;
        },
        toggleCtrlPane2() {
            this.naiyou2 = !this.naiyou2;
        },
        toggleCtrlPane3() {
            this.naiyou3 = !this.naiyou3;
        },
        handleScroll: function (evt, el) {
            // 始まりーーーーーーー
            if (window.scrollY > 4088) {
                console.log(window.scrollY);
                document.getElementById("access").classList.add("color");
            }
            if (window.scrollY > 4452) {
                console.log(window.scrollY);
                document.getElementById("hb-menu").classList.add("color");
            }
            if (window.scrollY > 4891) {
                console.log(window.scrollY);
                document.getElementById("icon").classList.add("color");
                document.getElementById("logo").classList.add("color");
            }

            // 終わりーーーーー
            if (window.scrollY > 6030) {
                console.log(window.scrollY);
                document.getElementById("access").classList.remove("color");
                document.getElementById("access").classList.add("remove");
            }
            if (window.scrollY > 6400) {
                console.log(window.scrollY);
                document.getElementById("hb-menu").classList.remove("color");
                document.getElementById("hb-menu").classList.add("remove");
            }
            if (window.scrollY > 6750) {
                console.log(window.scrollY);
                document.getElementById("icon").classList.remove("color");
                document.getElementById("logo").classList.remove("color");
                document.getElementById("icon").classList.add("remove");
                document.getElementById("logo").classList.add("remove");
            }


            // 戻りーーーーーーー
            if (window.scrollY < 4087) {
                console.log(window.scrollY);
                document.getElementById("access").classList.remove("color");
                document.getElementById("access").classList.add("remove");
            }
            if (window.scrollY < 4451) {
                console.log(window.scrollY);
                document.getElementById("hb-menu").classList.remove("color");
                document.getElementById("hb-menu").classList.add("remove");
            }
            if (window.scrollY < 4890) {
                console.log(window.scrollY);
                document.getElementById("icon").classList.remove("color");
                document.getElementById("logo").classList.remove("color");
                document.getElementById("icon").classList.add("remove");
                document.getElementById("logo").classList.add("remove");
            }
        }
    }
});