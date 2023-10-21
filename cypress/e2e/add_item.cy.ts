import {LoginPage} from "./pages/login_pages.cy"
import {DashboardPage} from "./pages/dashboard_pages.cy"

let loginPage = new LoginPage()
let dashboardPage = new DashboardPage()
const URL = 'https://www.saucedemo.com/'

it('User success add item', () => {
    cy.viewport(1280, 800);
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    dashboardPage.addItemToCart() 
    dashboardPage.assertItemCart()
})

it('User success remove item', () => {
    cy.viewport(1280, 800);
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    dashboardPage.addItemToCart() 
    dashboardPage.removeItemCart()
    dashboardPage.assertButtonAddToCart()
})