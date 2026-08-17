import type { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'

const stripeSecret = process.env.STRIPE_SECRET_KEY || ''

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end('Method Not Allowed')

  if (!stripeSecret) {
    return res.status(501).json({ statusCode: 501, message: 'Stripe not configured. Payments are disabled.' })
  }

  try {
    const stripe = new Stripe(stripeSecret, { apiVersion: '2022-11-15' })
    const priceId = req.body.priceId || 'price_basic_placeholder'
    const origin = req.headers.origin || 'http://localhost:3000'

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${origin}/?success=true`,
      cancel_url: `${origin}/?canceled=true`
    })

    res.redirect(303, session.url || '/')
  } catch (err: any) {
    console.error(err)
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}
