/**
 * Created by zhouli on 18/10/26
 */
import add from '../../src/utils/add';
test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
});
describe('Google', () => {
     // puppeteer 无界面浏览器，配置有界面浏览器比较麻烦

    beforeAll(async () => {
        await page.goto('https://google.com');
    });

    it('should display "google" text on page', async () => {
        await expect(page).toMatch('google');
    });
});
