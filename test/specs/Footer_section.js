describe('We must display footer section, which will be divided into 4 columns and each column will contain following information. ODHMA-30', () => {
    beforeEach(() => { 
    browser.url('http://czechitas-datestovani-hackathon.cz/en');
})  

    it('Language switcher on the display', () => {
    expect($('#languages-block-top')).toBeDisplayed();
   
})
       
    it('I can see About section on the display', () => {
    expect($('.footer-about-hotel')).toBeDisplayed();

})
   
    it('I can see Online payment method accepted', () => {
    expect($('.footer-payment-block')).toBeDisplayed();


})
    it('I can see Nesletter subscription', () => {
    expect($('#newsletter-input')).toBeDisplayed();
  
})
  
    it('I can see Social network links', () => {
    expect($('p=Follow us on')).toBeDisplayed();
  

})

    it('I can see Policie section', () => {
    expect($('[href="http://czechitas-datestovani-hackathon.cz/en/content/1-policies"]')).toBeDisplayed();
    $('[href="http://czechitas-datestovani-hackathon.cz/en/content/1-policies"]').click();
    expect(browser).toHaveUrl('http://czechitas-datestovani-hackathon.cz/en/content/1-policies');

  
})  

    it('I can see Legal notice section', () => {
    expect($('[href="http://czechitas-datestovani-hackathon.cz/en/content/2-legal-notice"]')).toBeDisplayed();
    $('[title="Legal Notice"]').click();
    expect(browser).toHaveUrl('http://czechitas-datestovani-hackathon.cz/en/content/2-legal-notice');

})

    it('I can see terms and conditions section', () => {
    expect($('[href="http://czechitas-datestovani-hackathon.cz/en/content/3-terms-and-conditions-of-use"]')).toBeDisplayed();
    $('[href="http://czechitas-datestovani-hackathon.cz/en/content/3-terms-and-conditions-of-use"]').click();
    expect(browser).toHaveUrl('http://czechitas-datestovani-hackathon.cz/en/content/3-terms-and-conditions-of-use');
    browser.pause(2000);
})   

    it('I can see about us section', () => {
    expect($('[href="http://czechitas-datestovani-hackathon.cz/en/content/4-about-us"]')).toBeDisplayed();
    $('[title="About us"]').click();
    expect(browser).toHaveUrl('http://czechitas-datestovani-hackathon.cz/en/content/4-about-us');
    
})

    it('I can see secure payment section', () => {
    expect($('[href="http://czechitas-datestovani-hackathon.cz/en/content/5-secure-payment"]')).toBeDisplayed();
    $('[href="http://czechitas-datestovani-hackathon.cz/en/content/5-secure-payment"]').click();
    expect(browser).toHaveUrl('http://czechitas-datestovani-hackathon.cz/en/content/5-secure-payment');
    
})
})