

import { chromium, test } from "@playwright/test"

test("flipkart", async () => {
    const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://www.flipkart.com/");
    await page.hover("'Two Wheelers'");
    await page.waitForTimeout(5000);
    await page.click("'Petrol Vehicles'")
    await page.waitForTimeout(5000);

    // await page.click("'Hero Xtreme 160R (Double Disc) Booking for Ex-Showroom Price'")
    // await page.waitForTimeout(5000);


    const context1 = await browser.newContext();
    const page1 = await context1.newPage();
    page1.goto("https://www.flipkart.com/hero-xtreme-160r-double-disc-booking-ex-showroom-price/p/itm2fdb26347348a?pid=MCYGSGTHTZFFHJYU&lid=LSTMCYGSGTHTZFFHJYUYOUZMZ&marketplace=FLIPKART&fm=neo%2Fmerchandising&iid=M_c0254c27-976e-4bc3-a98f-c4dabf1c80b6_1_B9Q0GL08YCU1_MC.MCYGSGTHTZFFHJYU&ppt=sp&ppn=sp&ssid=flnib119jk0000001711431278955&otracker=clp_pmu_v2_Bikes%2B%2526%2BScooters_1_1.productCard.PMU_V2_Hero%2BXtreme%2B160R%2B%2528Double%2BDisc%2529%2BBooking%2Bfor%2BEx-Showroom%2BPrice_two-wheelers-store_MCYGSGTHTZFFHJYU_neo%2Fmerchandising_0&otracker1=clp_pmu_v2_PINNED_neo%2Fmerchandising_Bikes%2B%2526%2BScooters_LIST_productCard_cc_1_NA_view-all&cid=MCYGSGTHTZFFHJYU")
    await page.waitForTimeout(5000);
})