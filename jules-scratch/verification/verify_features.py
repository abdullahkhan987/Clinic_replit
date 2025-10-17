from playwright.sync_api import sync_playwright, expect

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    # Verify Appointments Page
    page.goto("http://localhost:5000/appointments")
    page.get_by_label("First Name").fill("John")
    page.get_by_label("Last Name").fill("Doe")
    page.get_by_label("Email").fill("john.doe@example.com")
    page.get_by_label("Phone").fill("1234567890")
    page.get_by_role("button", name="Select a service").click()
    page.get_by_text("Advanced Facials").click()
    page.get_by_label("Preferred Date").fill("2025-12-25")
    page.get_by_label("Preferred Time").fill("10:00")
    page.get_by_role("button", name="Book Appointment").click()

    # Verify Login Page
    page.goto("http://localhost:5173/login")
    page.get_by_label("Username").fill("doctor")
    page.get_by_label("Password").fill("password")
    page.get_by_role("button", name="Login").click()

    # Verify Dashboard Page
    page.goto("http://localhost:5173/doctor/dashboard")
    expect(page.get_by_role("heading", name="Doctor's Dashboard")).to_be_visible()
    page.screenshot(path="jules-scratch/verification/verification.png")

    context.close()
    browser.close()

with sync_playwright() as playwright:
    run(playwright)