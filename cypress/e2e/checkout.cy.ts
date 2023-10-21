import {LoginPage} from "./pages/login_pages.cy"
import {DashboardPage} from "./pages/dashboard_pages.cy"
import {CheckoutPage} from "./pages/checkout_pages.cy"

let loginPage = new LoginPage()
let dashboardPage = new DashboardPage()
let checkoutPage = new CheckoutPage()
const URL = 'https://www.saucedemo.com/'

it('User success checkout item', () => {
    cy.viewport(1280, 800);
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    dashboardPage.addItemToCart() 
    dashboardPage.assertItemCart()
    dashboardPage.clickButtonCart()
    checkoutPage.clickButtonCheckout()
    checkoutPage.inputData()
    checkoutPage.clickContinueButton()
    checkoutPage.verifyButtonFinish()
})

it('User failed checkout karena tidak isi data', () => {
    cy.viewport(1280, 800);
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    dashboardPage.addItemToCart() 
    dashboardPage.clickButtonCart()
    checkoutPage.clickButtonCheckout()
    checkoutPage.clickContinueButton()
    checkoutPage.verifyErrorMessageContainer()
})