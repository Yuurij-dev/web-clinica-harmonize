const appBaseUrl = (process.env.NEXT_PUBLIC_HARMONIZE_APP_URL || "http://localhost:3000").replace(/\/+$/, "");

export const appLoginUrl = `${appBaseUrl}/login`;
