# Use Gemini in Your Terminal for Free: Quickstart

Welcome! This hands-on guide walks you through installing, authenticating, configuring, and using **Gemini CLI** on your machine—step by step and beginner-friendly. You’ll be up and running in minutes.

---

## What is Gemini CLI?
Gemini CLI brings the power of Google’s Gemini models to your terminal. You can ask questions, generate and explain code, summarize documents, and run structured tools—all from the command line.

## Prerequisites
*   A recent **Node.js + npm** installation.
*   Internet access to authenticate with your Google account.
*   *Optional:* **Docker** (if you want to try sandboxed runs).

**Check your installation:**
```bash
node -v
npm -v
```

---

## 🚀 1. Install Gemini CLI
The simplest way is a global npm install:
```bash
npm install -g @google/gemini-cli
```
Now launch the CLI:
```bash
gemini
```

**Alternatives:**
*   Run without installing (uses latest version): `npx @google/gemini-cli`
*   Test newest changes from GitHub: `npx https://github.com/google-gemini/gemini-cli`

---

## 🔐 2. First Run: Authenticate
On first launch, the CLI will ask how you want to authenticate:
1.  Start the CLI: `gemini`
2.  Choose **“Login with Google”** when prompted.
3.  Select your Google account in the browser and complete sign-in.

*Tip (Windows): If the browser doesn’t open, copy the URL manually. If a firewall blocks redirects, temporarily allow the CLI to open a local callback.*

---

## 💬 3. Your First Prompt
There are two easy ways to interact:

### A. Inline Prompt (One-off)
```bash
gemini -p "Explain what this project does in one paragraph."
```

### B. Interactive Session (Recommended)
Simply type `gemini`. During a session, use these commands:
*   `/help` — List commands
*   `/clear` — Clear the conversation
*   `/quit` — Exit

---

## 🛡️ 4. Optional: Run in a Sandbox (Extra Safety)
If Docker is installed, try a sandboxed prompt to execute tools in an isolated container:
```bash
gemini --sandbox -y -p "List five fun CLI project ideas, each with a one-sentence pitch."
```
Or run the published image directly:
```bash
docker run --rm -it us-docker.pkg.dev/gemini-code-dev/gemini-cli/sandbox:0.1.1
```

---

## ⚙️ 5. Configure the CLI (`settings.json`)
Settings files allow you to tailor behavior.
*   **Location:**
    *   **macOS/Linux:** `~/.gemini/settings.json`
    *   **Windows:** `C:\Users\<username>\.gemini\settings.json`

**Safe Starter Config:**
```json
{
  "general": {
    "vimMode": false
  },
  "ui": {
    "showCitations": true,
    "useFullWidth": false
  },
  "model": {
    "enableShellOutputEfficiency": true
  },
  "tools": {
    "sandbox": false,
    "enableToolOutputTruncation": true,
    "truncateToolOutputThreshold": 20000,
    "truncateToolOutputLines": 1000
  }
}
```
*Note: Project-specific settings can live in `.gemini/settings.json` at your project root to override user settings.*

---

## ✅ 6. Verify Things are Working
*   **Get usage info:** `gemini --help`
*   **Execution test:**
    ```bash
    gemini -p "Write a JavaScript function that returns the nth Fibonacci number with O(n) time and O(1) space."
    ```
*   **Summarize:** Paste file content into an interactive session or use available tools.
