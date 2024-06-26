import { NextRequest, NextResponse } from 'next/server'

import { getAccessToken } from '@/api/auth'

export async function GET(request: NextRequest) {
  const refreshToken = request.cookies.get('refresh_token')

  const url = request.nextUrl.clone()
  url.pathname = '/'

  const response = NextResponse.redirect(url)

  if (refreshToken) {
    try {
      const { data } = await getAccessToken(refreshToken.value)

      response.cookies.set('token', data.accessToken, {
        maxAge: 3600,
        path: '/',
      })
    } catch (error) {
      console.error('Invalid refresh token', error)
    }
  }

  return response
}
