# 🎧 Speakit - Minimum Viable Product (MVP) Specification

**Objective:** Launch a core Text-to-Speech (TTS) engine experience integrated with essential AI summarization and foundational user persistence.

## 1. Content Input & Processing (Functional Requirements)

| **ID** | **Feature** | **Description / Constraint** |
| --- | --- | --- |
| **1.1** | **URL Input** | System MUST accept a single, valid web URL via a dedicated input field. |
| **1.2** | **PDF Upload** | System MUST accept a single PDF file (maximum 10MB). This is strictly limited to text-based PDFs; no OCR is required. |
| **1.3** | **AI Summarization** | System MUST generate a concise, single-paragraph summary of the processed text content using an LLM API (gemini-2.5-flash-preview-09-2025) upon user request. |
| **2.1** | **Web Content Extraction** | System MUST automatically process the input URL to extract the primary article body, removing all navigational elements, advertisements, sidebars, and footers. |
| **2.2** | **PDF Text Extraction** | System MUST extract raw text content from the uploaded text-based PDF for TTS processing. |
| **3.1** | **TTS Voice Selection** | System MUST provide a minimum of two (2) distinct, high-quality, natural-sounding voice options (e.g., one male, one female). |
| **3.2** | **Playback Control** | System MUST implement functional controls for **Play, Pause, Resume,** and **Stop**. |
| **3.3** | **Reading Speed** | System MUST allow speed adjustment within the range of **0.5x to 2.0x**. |
| **3.4** | **Instant Playback** | Reading MUST begin immediately upon successful content extraction and voice engine readiness. |

## 2. Reading Experience (User Interface Requirements)

| **ID** | **Feature** | **Description / Constraint** |
| --- | --- | --- |
| **4.1** | **Real-Time Highlighting** | The current word being spoken MUST be visually highlighted in real-time within the text view. |
| **4.2** | **Auto-Scrolling** | The text view MUST automatically scroll to maintain the highlighted word visible within the viewport. |
| **5.1** | **Landing Page** | The main page MUST prominently feature the URL input field and PDF upload control. |
| **5.2** | **Reader Interface** | The reading interface MUST be minimal and distraction-free, integrating only the essential playback controls (3.2, 3.3) and a **Summarization button (1.3)**. |
| **5.3** | **Progress Bar** | A visual indicator (progress bar) MUST display the current listening position within the text. |
| **5.4** | **Responsiveness** | All components MUST be fully responsive and functional across desktop, tablet, and mobile viewport sizes. |
| **5.5** | **Authentication UI** | System MUST include a visible mechanism for users to **Log In or Sign Up** (using basic email/password or OAuth flow) to transition from Guest Mode to an Authenticated User Account. |

## 3. Access and Scope Constraints (Non-Negotiables)

| **ID** | **Constraint** | **Description** |
| --- | --- | --- |
| **6.1** | **Authentication** | The application MUST support both **Guest Mode** (non-authenticated) and **Authenticated User Accounts** (via Firebase Auth Custom Token/Anonymous sign-in). |
| **6.2** | **Data Persistence** | Guest Mode data is strictly **SESSION-BASED ONLY**. Authenticated users MUST have **cross-device persistence** for **Reading History** and **Bookmarks** using **Firestore**. Content itself (article text/PDF) is not stored in Firestore, only metadata. |
| **6.3** | **Security** | All data transfer MUST occur over a secure connection (HTTPS). |

## OUT OF SCOPE (Phase 2/3 Roadmap)

The following features and capabilities are explicitly excluded from the MVP, despite the inclusion of user accounts:

- **User Accounts & Storage (Advanced):** Offline Access, User-specific Analytics/Statistics.
- **Advanced Content:** OCR Support (for scanned PDFs), Batch Upload, Content Validation, or Multi-Language TTS.
- **Advanced UI/UX:** Voice Pitch adjustment, Keyboard Shortcuts, Touch Swipe Gestures, Font/Spacing Customization, or Dark Mode.
- **Distribution:** Progressive Web App (PWA) installation, Push Notifications, or Browser Extensions.
- **Future/AI Features:** Collaboration, or Third-Party Integrations (other than the required LLM API).