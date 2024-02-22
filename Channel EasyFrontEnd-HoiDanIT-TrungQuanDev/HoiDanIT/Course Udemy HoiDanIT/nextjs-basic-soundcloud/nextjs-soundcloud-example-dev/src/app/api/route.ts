import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const remoteAudioUrl = searchParams.get('url')

  const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/tracks/hoidanit.mp3`)
  return response
  // const audioData = await response.arrayBuffer();
  // const audioBlob = new Blob([audioData], { type: 'audio/mpeg' });

  // const blobUrl = URL.createObjectURL(audioBlob);

  // return NextResponse.json({ blobUrl })
}

