import { NextRequest, NextResponse } from 'next/server';

// The ProductCon QR code points to the homepage on this address. Blank it there.
// The full site stays available at charchikasinha.vercel.app, and inner pages still work.
const BLOCKED_HOST = 'charchika-sinha.vercel.app';

export function proxy(req: NextRequest) {
  const host = (req.headers.get('host') || '').toLowerCase();
  if (host === BLOCKED_HOST) {
    return new NextResponse('Not found', { status: 404, headers: { 'content-type': 'text/plain', 'cache-control': 'no-store' } });
  }
  return NextResponse.next();
}

export const config = { matcher: ['/'] };
