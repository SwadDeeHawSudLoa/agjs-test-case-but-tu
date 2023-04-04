describe("Login Form", function () {
  const EC = protractor.ExpectedConditions;
  beforeEach(async () => {
    await browser.get("http://twms.twss.co.th:8080/twms-dashboard/#/dashboard");
    await browser.driver.manage().window().maximize();
    await browser.waitForAngular();
  });
  it("should fill in the username and password fields and click the login button", async function () {
    //login
    await browser.wait(EC.visibilityOf(element(by.id("i_username"))), 10000);
    await element(by.id("i_username")).sendKeys("consult");
    await browser.wait(EC.visibilityOf(element(by.id("i_password"))), 10000);
    await element(by.id("i_password")).sendKeys("consult");
    await browser.wait(EC.visibilityOf(element(by.tagName("button"))), 10000);
    await element(by.tagName("button")).click();
    //1.1 click Outbound
    await browser.wait(EC.visibilityOf(element(by.id("sidebar-menu"))), 10000);
    await element(by.id("sidebar-menu")).click();
    //1.2 click salesOrder
    await browser.wait(
      EC.elementToBeClickable(
        element.all(by.cssContainingText("a", "Sales Orders")).first()
      ),
      10000
    );
    await element
      .all(by.cssContainingText("a", "Sales Orders"))
      .first()
      .click();
    //2.Create SO and 3.
    await browser.wait(
      EC.elementToBeClickable(element(by.id("i_create_item"))),
      10000
    );
    await element(by.id("i_create_item")).click();
    //4.a
    await browser.wait(
      EC.visibilityOf(
        element(
          by.xpath(
            '//*[@id="tabstrip-2"]/form/div[3]/div[1]/div/span[1]/span[1]'
          )
        )
      ),
      10000
    );
    await element(
      by.xpath('//*[@id="tabstrip-2"]/form/div[3]/div[1]/div/span[1]/span[1]')
    ).click();
    await browser.wait(
      EC.visibilityOf(element(by.xpath('//*[@id="i_client_listbox"]/li[2]'))),
      10000
    );
    await element(by.xpath('//*[@id="i_client_listbox"]/li[2]')).click();
    //4.b
    await browser.wait(
      EC.visibilityOf(element(by.id("i_customer_insert"))),
      10000
    );
    await element(by.id("i_customer_insert")).sendKeys("10009670");
    await browser.wait(
      EC.visibilityOf(
        element(by.xpath('//*[@id="i_customer_insert_listbox"]/li'))
      ),
      10000
    );
    await element(by.xpath('//*[@id="i_customer_insert_listbox"]/li')).click();
    //4.c
    await browser.wait(
      EC.visibilityOf(
        element(
          by.xpath('//*[@id="tabstrip-2"]/form/div[5]/div[1]/div/span[1]/span')
        )
      ),
      10000
    );
    await element(
      by.xpath('//*[@id="tabstrip-2"]/form/div[5]/div[1]/div/span[1]/span')
    ).click();
    await browser.wait(
      EC.visibilityOf(
        element(
          by.xpath('//*[@id="i_shipto_address_insert_listbox"]/li[2]/span')
        )
      ),
      10000
    );
    await element(
      by.xpath('//*[@id="i_shipto_address_insert_listbox"]/li[2]/span')
    ).click();
    //4.d
    //4.e
    await browser.wait(EC.visibilityOf(element(by.id("i_request_date_insert"))), 10000);
    await element(by.id("i_request_date_insert")).sendKeys("04/04/2023");
    //4.f
    await browser.wait(EC.visibilityOf(element(by.id("i_document_date"))), 10000);
    await element(by.id("i_document_date")).sendKeys("01/04/2023");
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
    await browser.sleep(10000);
    await browser.wait(
      EC.elementToBeClickable(element(by.css(".user-profile.dropdown-toggle"))),
      10000
    );
    await element(by.css(".user-profile.dropdown-toggle")).click();
    await browser.sleep(1000);
    var dropdownMenu = element(by.css(".dropdown-menu.dropdown-usermenu"));
    await browser.wait(
      EC.elementToBeClickable(dropdownMenu.all(by.css("li")).last()),
      10000
    );
    await dropdownMenu.all(by.css("li")).last().click();
  });
});

