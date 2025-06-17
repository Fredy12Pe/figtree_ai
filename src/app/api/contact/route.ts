import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log('Form data received:', body);

    // Email sending logic is temporarily disabled.
    // The form data is logged on the server.

    return NextResponse.json({ message: 'Form submitted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error processing form:', error);
    return NextResponse.json({ message: 'Error processing form' }, { status: 500 });
  }
} 