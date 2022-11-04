import { test, expect } from '@playwright/test';

test.describe('Check search work', () => {
  test.beforeEach(async ({ page }) => {
    page.goto('/videos');
  });

  test.use({
    storageState: {
      cookies: [],
      origins: [
        {
          origin: 'local',
          localStorage: [
            {
              name: 'user',
              value: 'test@test.pl'
            }
          ]
        }
      ]
    }
  });

  test('Should render /videos', async ({ page }) => {
    const search = page.locator('input[name=search]');
    await expect(search).toHaveAttribute('placeholder', 'Search for videos');
  });

  test('Should render /videos with search results', async ({ page }) => {
    const search = page.locator('input[name=search]');
    await search.fill('javascript');

    const fireship = page.getByText('JavaScript in 100 Seconds');
    await expect(fireship).toHaveText('JavaScript in 100 Seconds');
  });

  test('Should render /videos/:id with video data', async ({ page }) => {
    const search = page.locator('input[name=search]');
    await search.fill('javascript');

    const fireship = page.getByText('JavaScript in 100 Seconds');
    await fireship.click();

    const description = page.getByText('JavaScript is the the programming language that built the web');
    await expect(description).toHaveText(
      'JavaScript is the the programming language that built the web. Learn how it evolved into a powerful tool for building websites, servers with Node.js, ...'
    );
  });
});
