from playwright.sync_api import sync_playwright, expect

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    # Verify Registration Page
    page.goto("http://localhost:5000/register")
    page.get_by_label("Username").fill("doctor")
    page.get_by_label("Password").fill("password123")
    page.get_by_role("button", name="Register").click()

    # Verify Login Page
    page.goto("http://localhost:5000/login")
    page.wait_for_selector('input[id="username"]')
    page.get_by_label("Username").fill("doctor")
    page.get_by_label("Password").fill("password123")
    page.get_by_role("button", name="Login").click()

    # Verify Appointments Page
    page.goto("http://localhost:5000/appointments")
    page.get_by_label("First Name").fill("Jane")
    page.get_by_label("Last Name").fill("Doe")
    page.get_by_label("Email").fill("jane.doe@example.com")
    page.get_by_label("Phone").fill("0987654321")
    page.get_by_role("combobox").select_option(label="Laser Treatments")
    page.get_by_label("Preferred Date").fill("2025-12-26")
    page.get_by_label("Preferred Time").fill("14:00")
    page.get_by_role("button", name="Book Appointment").click()

    # Verify Dashboard Page
    page.goto("http://localhost:5000/doctor/dashboard")
    expect(page.get_by_role("heading", name="Doctor's Dashboard")).to_be_visible()
    expect(page.get_by_text("Jane Doe")).to_be_visible()
    page.screenshot(path="jules-scratch/verification/verification.png")

    context.close()
    browser.close()

with sync_playwright() as playwright:
    run(playwright)