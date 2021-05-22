describe('Navigation on the http://czechitas-datestovani-hackathon.cz/en', () => {

             
    it('I click on the home button and I can see that it goes to the Home section. ', () => {
    browser.url('http://czechitas-datestovani-hackathon.cz/en');
    browser.$('.nav_toggle').click();
    $('[href="http://czechitas-datestovani-hackathon.cz/en/"]').click();
    expect($('.nav_toggle')).toBeClickable();
    expect($('#menu_cont')).toBeDisplayed()
})
    
    it('I click on the button Interior and I can see that it goes to the Interior section', () => {
    browser.url('http://czechitas-datestovani-hackathon.cz/en');
    browser.$('.nav_toggle').click();
    $('[href="/#hotelInteriorBlock"]').click();
    $('[href="/#hotelInteriorBlock"]').scrollIntoView();
    expect($('[href="/#hotelInteriorBlock"]')).toBeClickable();
    expect($('[href="/#hotelInteriorBlock"]')).toHaveText('Interior');
    expect($('.home_block_heading')).toBeDisplayed()

})
    
    it('I click on the button Amenities and I can see that it goes to the Amenities section', () => {
    browser.url('http://czechitas-datestovani-hackathon.cz/en');
    browser.$('.nav_toggle').click();
    $('[href="/#hotelAmenitiesBlock"]').click();
    expect($('[href="/#hotelAmenitiesBlock"]')).toBeClickable();
    expect($('[href="/#hotelAmenitiesBlock"]')).toHaveText('Amenities');
    expect($('.home_block_heading')).toBeDisplayed()

    
})

    it('I click on the button Rooms and I can see that it goes to the Rooms section', () => {
    browser.url('http://czechitas-datestovani-hackathon.cz/en');
    browser.$('.nav_toggle').click();
    $('[href="/#hotelRoomsBlock"]').click();
    expect($('[href="/#hotelRoomsBlock"]')).toBeClickable();
    expect($('[href="/#hotelRoomsBlock"]')).toHaveText('Rooms');
    expect($('.home_block_heading')).toBeDisplayed();

})

    it('I click on the button Testimonial and I can see that it goes to the Testimonial section', () => {
    browser.url('http://czechitas-datestovani-hackathon.cz/en');
    browser.$('.nav_toggle').click();
    $('[href="/#hotelTestimonialBlock"]').click();
    expect($('[href="/#hotelTestimonialBlock"]')).toBeClickable();
    expect($('[href="/#hotelTestimonialBlock"]')).toHaveText('Testimonials');
    expect($('#hotelTestimonialBlock')).toBeDisplayed();   

})

    it('I click on the button Legal Notice and I can see that it goes to the Legal Notice section', () => {
    browser.url('http://czechitas-datestovani-hackathon.cz/en');
    browser.$('.nav_toggle').click();
    $('[href="http://czechitas-datestovani-hackathon.cz/en/content/2-legal-notice"]').click();
    expect($('#columns h2')).toBeClickable();
    expect($('#columns h2')).toHaveText("Legal");
    expect($('.columns-container')).toBeDisplayed();
  
})

    it('I click on the button About us and I can see that it goes to the About us section', () => {
    browser.url('http://czechitas-datestovani-hackathon.cz/en');
    browser.$('.nav_toggle').click();
    $('[href="http://czechitas-datestovani-hackathon.cz/en/content/4-about-us"]').click();
    expect($('#center_column h1')).toBeClickable();
    expect($('#center_column h1')).toHaveText('ABOUT US');
    expect($('#columns')).toBeDisplayed();  
})
    it('I click on the button Contact and I can see that it goes to the Contact section', () => {
    browser.url('http://czechitas-datestovani-hackathon.cz/en');
    browser.$('.nav_toggle').click();
    $('[href="http://czechitas-datestovani-hackathon.cz/en/contact-us"]').click();
    browser.pause(2000);
    expect($('.contact-header')).toHaveText("Contact Us");
    expect($('#contact')).toBeDisplayed();

})

    it('I click on the button Sign in and I can see that it goes to the Sign in section', () => {
    browser.url('http://czechitas-datestovani-hackathon.cz/en');
    $('.hide_xs').click();
    expect($('.hide_xs')).toBeClickable();
    expect($('#create-account_form')).toBeDisplayed();
    expect(browser).toHaveUrl('http://czechitas-datestovani-hackathon.cz/en/login?back=my-account'); 
     
})

    it('I click View my booking cart and I can see that it goes to the Booking section', () => {
    browser.url('http://czechitas-datestovani-hackathon.cz/en');
    $('[href="http://czechitas-datestovani-hackathon.cz/en/quick-order"]').click();
    expect($('[href="http://czechitas-datestovani-hackathon.cz/en/quick-order"]')).toBeClickable();
    expect($('.page-heading')).toBeDisplayed();
    expect(browser).toHaveUrl('http://czechitas-datestovani-hackathon.cz/en/quick-order');
    browser.pause(2000)
    
})
    
    it('I click Facebook and I can see that ', () => {
    browser.url('http://czechitas-datestovani-hackathon.cz/en');
    $('[href="https://www.facebook.com/qloapps"]').click();
    expect($('[href="https://www.facebook.com/qloapps"]')).toBeClickable();
    browser.switchWindow('https://www.facebook.com/qloapps');
    expect(browser).toHaveUrl('https://www.facebook.com/qloapps');
   
  
})

    it('I click Twitter and I can see ', () => {
    browser.url('http://czechitas-datestovani-hackathon.cz/en');
    $('[href="https://twitter.com/qloapps"]').click();
    expect($('[href="https://twitter.com/qloapps"]')).toBeClickable();
    browser.switchWindow('https://twitter.com/qloapps');
    expect(browser).toHaveUrl('https://twitter.com/qloapps');

})

    it('I click Google and I can see', () => {
    browser.url('http://czechitas-datestovani-hackathon.cz/en');
    $('.google-plus').click();
    expect($('.google-plus')).toBeClickable();
    browser.url('https://www.google.com');
    expect(browser).toHaveUrlContaining('https://www.google.com');
    

})
})