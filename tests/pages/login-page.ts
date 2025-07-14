import { Locator, Page } from '@playwright/test'
import { SERVICE_URL } from '../../config/env-data'
import { OrderPage } from './order-page'

export class LoginPage {
  readonly page: Page
  readonly url: string = SERVICE_URL
  readonly usernameField: Locator
  readonly passwordField: Locator
  readonly signInButton: Locator
  // readonly userPasswordError: Locator
  readonly userNameError: Locator
  readonly authorizationError: Locator
  readonly ErrorCloseButton : Locator

  constructor(page: Page) {
    this.page = page
    this.usernameField = page.getByTestId('username-input')
    this.passwordField = page.getByTestId('password-input')
    this.signInButton = page.getByTestId('signIn-button')
    // this.userPasswordError = page.getByTestId('authorizationError-popup-close-button')
    this.userNameError = page.getByTestId('username-input-error').first()
    this.authorizationError = page.getByTestId('authorizationError-popup')
    this.ErrorCloseButton = page.getByTestId('authorizationError-popup-close-button')
  }

  async open() {
    await this.page.goto(this.url)
  }

  async signIn() {
    // actions
    return new OrderPage(this.page)
  }
}




