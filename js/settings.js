const initRadioSetting = (key) => {
  const elements = document.querySelectorAll(`input[name="${key}"]`);

  elements.forEach(element => {
    if(element.value === siteSettings[key]) {
      element.checked = true;
    }

    element.addEventListener('change', (e) => {
      siteSettings[key] = e.target.value;
      storeSiteSettings();
    })
  });
};

initRadioSetting('color');
initRadioSetting('font');
initRadioSetting('button');
initRadioSetting('formControl');
initRadioSetting('typography');

// Checkbox 
const buttonGradient = document.querySelector('input[name="gradientButton"]');

if(siteSettings['gradientButton'].length > 0) {
  buttonGradient.checked = true;
}

buttonGradient.addEventListener('click', (e) => {
  siteSettings['gradientButton'] = buttonGradient.checked ? buttonGradient.value : '';
  storeSiteSettings();
});