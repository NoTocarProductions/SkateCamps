
document.querySelectorAll('a.navigation__link').forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('span.navigation__icon').click();
        switch (e.target.id) {
            case "1":
                document.querySelector('section.section-about').scrollIntoView();
                break;
            case "2":
                document.querySelector('section.section-features').scrollIntoView();
                break;
            case "3":
                document.querySelector('section.section-tours').scrollIntoView();
                break;
            case "4":
                document.querySelector('section.section-stories').scrollIntoView();
                break;
            case "5":
                document.querySelector('section.section-book').scrollIntoView();
                break;
        }
    });
});

document.getElementById('popup').addEventListener('click', (e) => {
    document.querySelector('a.popup__close').click();
} )


