describe("Login Form", function () {
  const EC = protractor.ExpectedConditions;
  beforeEach(async () => {
    await browser.get("http://twms.twss.co.th:8080/twms-dashboard/#/dashboard");
    await browser.driver.manage().window().maximize();
    await browser.waitForAngular();
  });
  it("should fill in the username and password fields and click the login button", async function () {
    //login
    var usernameField = element(by.id("i_username"));
    var passwordField = element(by.id("i_password"));
    var loginButton = element(by.tagName("button"));
    await browser.wait(EC.visibilityOf(usernameField), 10000);
    await browser.wait(EC.visibilityOf(passwordField), 10000);
    await browser.wait(EC.visibilityOf(loginButton), 10000);
    await usernameField.sendKeys("consult");
    await passwordField.sendKeys("consult");
    await loginButton.click();
    //1.1 click Outbound
    var sidebarMenu = element(by.id("sidebar-menu"));
    await browser.wait(EC.visibilityOf(sidebarMenu), 10000);
    await sidebarMenu.click();
    //1.2 click salesOrder
    var salesOrderLink = element
      .all(by.cssContainingText("a", "Sales Orders"))
      .first();
    await browser.wait(EC.elementToBeClickable(salesOrderLink), 10000);
    await salesOrderLink.click();
    //2.Create SO and 3.
    var createItemButton = element(by.id("i_create_item"));
    await browser.wait(EC.elementToBeClickable(createItemButton), 10000);
    await createItemButton.click();
    //4.a
    var select = element(by.xpath('//*[@id="tabstrip-2"]/form/div[3]/div[1]/div/span[1]/span[1]'))
    await browser.wait(EC.visibilityOf(select), 10000);
    await select.click();
    var options = element(by.xpath('//*[@id="i_client_listbox"]/li[2]'))
    await browser.wait(EC.visibilityOf(options), 10000);
    await options.click();
    await browser.sleep(10000);
    //4.b
    //4.c
    //4.d
    //4.e
    //4.f
    //4.g
    //4.h
    //4.i
    //5.a
    //5.b
    //5.c
    //6
    /*var createLineItemButton = element(by.id("i_create_line_item"));
    await browser.wait(EC.elementToBeClickable(createLineItemButton), 10000);
    await createLineItemButton.click();*/
    //7
    //8
    /*var updateButton = element(
      by.css(".k-button-icontext.k-primary.k-grid-update")
    );
    await browser.wait(EC.elementToBeClickable(updateButton), 10000);
    await updateButton.click();*/
    //9 logout
    var userProfileDropdown = element(by.css(".user-profile.dropdown-toggle"));
    await browser.wait(EC.elementToBeClickable(userProfileDropdown), 10000);
    await userProfileDropdown.click();
    await browser.sleep(1000);
    var dropdownMenu = element(by.css(".dropdown-menu.dropdown-usermenu"));
    var lastListItem = dropdownMenu.all(by.css("li")).last();
    await browser.wait(EC.elementToBeClickable(lastListItem), 10000);
    await lastListItem.click();
  });
});

