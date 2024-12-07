let menuIcon = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');
let bodyy = document.getElementsByTagName('body')[0];  // الوصول إلى عنصر body

// إضافة حدث عند النقر على الأيقونة
menuIcon.onclick = (e) => {
    e.stopPropagation();  // منع انتشار الحدث إلى body
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// إخفاء القائمة عند النقر على body
bodyy.onclick = (e) => {
    navbar.classList.remove('active');
    menuIcon.classList.remove('bx-x');
};

// التعامل مع التمرير في الصفحة لتحديث حالة الروابط في القائمة
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};
