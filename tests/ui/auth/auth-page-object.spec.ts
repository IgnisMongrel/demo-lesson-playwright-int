import { expect, test } from '@playwright/test'
import { SERVICE_URL } from '../../../config/env-data'
import { LoginPage } from '../../pages/login-page'
import { debug } from 'console'

test('Sign in button is disabled when an invalid username is entered', async ({ page }) => {
  const authPage = new LoginPage(page)

  await authPage.open()
  await authPage.usernameField.fill('-')
  await expect(authPage.signInButton).toBeDisabled()
  await expect(authPage.userNameError).toBeVisible()
})

test.only('Sign in button is disabled when an invalid username and psw is entered', async ({
  page,
}) => {
  const authPage = new LoginPage(page)
  await authPage.open()

  await page.goto(SERVICE_URL)
  await authPage.usernameField.fill('random-username')
  // const passwordField = page.getByTestId('password-input')
  await authPage.passwordField.fill('random-password')
  await authPage.signInButton.click()
  await expect(authPage.authorizationError).toBeVisible()
  await authPage.ErrorCloseButton.click()
  await expect(authPage.authorizationError).toBeDisabled()
})
