import { useState } from 'react';

export function Settings() {
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    setShowSuccess(false);

    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      setShowSuccess(true);

      // Hide success message after 3 seconds
      setTimeout(() => setShowSuccess(false), 3000);
    }, 1500);
  };

  return (
    <div className="max-w-2xl">
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-6">Settings</h2>

      <div className="bg-white shadow-sm rounded-xl border border-slate-200">
        <div className="p-6 border-b border-slate-200">
          <h3 className="text-lg font-medium text-slate-900">Profile Information</h3>
          <p className="mt-1 text-sm text-slate-500">Update your account's profile information and email address.</p>
        </div>

        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium text-slate-700">
                First name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  defaultValue="Jules"
                  className="block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium text-slate-700">
                Last name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  defaultValue="Agent"
                  className="block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  defaultValue="jules@palette.dev"
                  className="block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 py-4 bg-slate-50 rounded-b-xl flex items-center justify-between border-t border-slate-200">
            {/* Success Message Live Region */}
            <div role="status" aria-live="polite" className="text-sm min-h-[20px]">
                {showSuccess && (
                    <span className="flex items-center text-green-600 font-medium animate-pulse">
                        <svg className="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Changes saved successfully
                    </span>
                )}
            </div>

          <button
            type="button"
            onClick={handleSave}
            disabled={isSaving}
            className={`
                inline-flex items-center justify-center rounded-md border border-transparent
                py-2 px-4 text-sm font-medium text-white shadow-sm
                focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
                transition-all duration-200
                ${isSaving ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'}
            `}
          >
            {isSaving ? (
                <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Saving...
                </>
            ) : (
                'Save Changes'
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
