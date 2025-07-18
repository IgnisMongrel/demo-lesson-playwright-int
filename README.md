# Test Automation Template

This project is a **Test Automation Template** designed for the course at **Tallinn Learning School**. 
It is intended for learning and practicing: writing **End-to-End (E2E) Tests**.

## Configuration Instructions

### Step 1: Rename the File
Rename the provided `prod.env.example` file to `prod.env` in the root directory of the project.

### Step 2: Fill in the Values
Open the `prod.env` file and fill in the following fields with the required configuration values:

- **TEST_USERNAME**: The username for the service.
- **TEST_PASSWORD**: The password for the service.
- **URL**: The base URL for the service.
- **BACKEND_URL**: API URL

Example:
```plaintext
TEST_USERNAME=myUsername
TEST_PASSWORD=myPassword
URL=https://example.com
BACKEND_URL=https://example.com
