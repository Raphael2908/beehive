'use server';

export async function sendBackendRequest(): Promise<{ success: true; data: string } | { success: false; error: string }> {
  try {
    const response = await fetch(process.env.BACKEND_URL!, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.text();
    return { success: true, data };
  } catch (error) {
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'An error occurred' 
    };
  }
} 