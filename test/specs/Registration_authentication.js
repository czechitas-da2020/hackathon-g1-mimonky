describe('Epic Accounts – login/registration - Authentication page and create account', () => {
    before("",()=>{
        browser.url("http://czechitas-datestovani-hackathon.cz/en/")
    })
    it("check all fields on authentication page - 42",()=>{
        //I will check, if all the fields from user story 42 are displayed
        $(".hide_xs").click()
        expect($(".hide_xs")).toBeDisplayed()
        expect($("#SubmitCreate")).toBeDisplayed()
        expect($(".lost_password.form-group")).toBeDisplayed()
    })
    it("fill registration form with valid data and log in - 43",()=>{
        //I will register new user with unique e-mail adress
        $(".hide_xs").click()
        let date = new Date().valueOf()
        let eMail=date+"terapola2@gmail.com"
        $("#email_create").setValue(eMail)
        $('#SubmitCreate').click()
        expect($(".page-heading")).toHaveText("CREATE AN ACCOUNT")
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
        expect($(".page-heading")).toHaveText("MY ACCOUNT")
    })
    })
