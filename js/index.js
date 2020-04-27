const rootElement = document.body;
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

//Site Settings
var siteSettings = {
    color: 'color--one',
    font: 'fonts--one',
    button: 'buttons--r',
    formControl: 'form--r',
    typography: 'typography--one',
    gradientButton: ''
};

var storeSiteSettings = () => {
    localStorage.setItem('site-settings', JSON.stringify(siteSettings));
    setSiteSettings();
};

var loadSiteSettings = () => {
    var data = localStorage.getItem('site-settings');
    if(data) {
        siteSettings = JSON.parse(data);
    }
};
loadSiteSettings();

var setSiteSettings = () => {
    rootElement.classList.remove(...rootElement.classList);

    for (const key of Object.keys(siteSettings)) {
        rootElement.classList.add(siteSettings[key]);
    }
}
setSiteSettings();