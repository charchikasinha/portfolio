import { NextRequest, NextResponse } from 'next/server';

// The ProductCon QR code points to the homepage on this address. Send it elsewhere.
// The full site stays available at charchikasinha.vercel.app, and inner pages still work.
const BLOCKED_HOST = 'charchika-sinha.vercel.app';

export function proxy(req: NextRequest) {
  const host = (req.headers.get('host') || '').toLowerCase();
  if (host === BLOCKED_HOST) {
    const res = NextResponse.redirect('https://haas.campusgroups.com/feeds?type=club&type_id=73677&tab=about', 307);
    res.headers.set('cache-control', 'no-store');
    return res;
  }
  return NextResponse.next();
}

export const config = { matcher: ['/'] };
