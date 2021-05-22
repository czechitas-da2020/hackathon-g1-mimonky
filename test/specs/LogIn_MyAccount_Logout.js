describe('Epic Account Login/Registration - Log in, information about my account and log out', () => {
    let eMail
    before("fill registration form with valid data and make new account",()=>{
        //I will make new registration data to use in following test cases
        browser.url("http://czechitas-datestovani-hackathon.cz/en/")
        $(".hide_xs").click()
        let date = new Date().valueOf()
        eMail=date+"terapola2@gmail.com"
        $("#email_create").setValue(eMail)
        $('#SubmitCreate').click()
        $("#id_gender2").click()
        $("#customer_firstname").setValue("Jana")
        $("#customer_lastname").setValue("Nováková")
        $("#passwd").setValue("hackathon12")
        $("#uniform-days").click()
        const selectDay = $('#days');
        selectDay.selectByAttribute("value", "1")
        $("#uniform-months").click()
        const selectMonth=$("#months")
        selectMonth.selectByAttribute("value","1")
        $("#years").click()
        const selectYear=$("#years")
        selectYear.selectByAttribute("value","2000")
        $("#newsletter").click()
        $("#optin").click()
        $("#submitAccount").click()
        $(".account_info_cont").click()
        $('.dropdown-menu a[title="Log me out"]').click()
    })
    beforeEach("",()=>{
        browser.url("http://czechitas-datestovani-hackathon.cz/en/")  
    })
    it("log in, using the registration data and log out - ODHMA 44,45",()=>{
        //I will verify, that I can log in and log out with the new user data
        browser.pause(3000)
        $(".hide_xs").click()
        $("#email").setValue(eMail)
        $("#passwd").setValue("hackathon12")
        $("#SubmitLogin").click()
        expect($(".page-heading")).toHaveText("MY ACCOUNT")
        $(".account_info_cont").click()
        $('.dropdown-menu a[title="Log me out"]').click()
        expect($(".hide_xs")).toBeDisplayed() 
    })
    it("my account page has following links-ODHMA 46",()=>{
        //I will log in with the new user data and check, if I can see all links, that are specified in user story
        $(".hide_xs").click()
        $("#email").setValue(eMail)
        browser.pause(3000)
        $("#passwd").setValue("hackathon12")
        $("#SubmitLogin").click()
        expect($('a[title="Orders"] span')).toBeDisplayed()
        expect($('a[title="Credit slips"] span')).toBeDisplayed()
        expect($('a[title="Addresses"] span')).toBeDisplayed()
        expect($('a[title="Information"] span')).toBeDisplayed()
        expect($('a[title="Home"] span')).toBeDisplayed()
    })
})
