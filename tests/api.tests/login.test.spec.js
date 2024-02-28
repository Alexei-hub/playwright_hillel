import { test } from '@playwright/test'

test('api login', async ({ request }) => {
    const authResp = await request.post(`${process.env.BASE_API_URL}/auth/signin`, {
        data: {
            email: process.env.MAIL_HM_22,
            password: process.env.PASSWORD_API,
            remember: false,
        },
    });
    process.env.AUTH_SID = authResp.headers()['set-cookie'].split(';')[0]
});


