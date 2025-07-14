import { Locator, expect, test } from '@playwright/test'
import { SERVICE_URL } from '../../../config/env-data'
import { LoginPage } from '../../pages/login-page'

test('Sign in button is disabled when an invalid username is entered', async ({ page }) => {
  await page.goto(SERVICE_URL)
  const usernameField = page.getByTestId('username-input')
  await usernameField.fill('-')
  const signInButton = page.getByTestId('signIn-button')
  const signInError: Locator = page.getByTestId('username-input-error')
  await expect(signInButton).toBeDisabled()
})
