## 2026-01-15 - Feedback Loops in Form Submission
**Learning:** Users lack confidence when "Save" actions feel instantaneous without feedback. A simulated delay with a spinner and an explicit success message builds trust and confirms the system state.
**Action:** Implement `isSaving` states and success toasts for all mutation actions, ensuring `aria-live` regions communicate the result to screen readers.
