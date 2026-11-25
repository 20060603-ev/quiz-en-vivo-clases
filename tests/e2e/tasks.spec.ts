import { expect, test } from '@playwright/test';

test('muestra la página principal de Quiz en Vivo', async ({ page }) => {
  await page.goto('/');

  await expect(
    page.getByRole('heading', { name: 'Quiz en Vivo', exact: true })
  ).toBeVisible();

  await expect(
    page.getByRole('button', { name: 'Crear un quiz' })
  ).toBeVisible();

  await expect(
    page.getByRole('button', { name: 'Unirse a una partida' })
  ).toBeVisible();
});

test('muestra un aviso al intentar crear un quiz', async ({ page }) => {
  await page.goto('/');

  page.once('dialog', async (dialog) => {
    expect(dialog.message()).toBe(
      'La creación de quizzes estará disponible próximamente.'
    );
    await dialog.accept();
  });

  await page.getByRole('button', { name: 'Crear un quiz' }).click();
});

test('muestra un aviso al intentar unirse a una partida', async ({ page }) => {
  await page.goto('/');

  page.once('dialog', async (dialog) => {
    expect(dialog.message()).toBe(
      'La opción para unirse a una partida estará disponible próximamente.'
    );
    await dialog.accept();
  });

  await page.getByRole('button', { name: 'Unirse a una partida' }).click();
});
