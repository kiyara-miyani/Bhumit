import Head from 'next/head'
import Link from 'next/link'
import ContactForm from '../components/ContactForm'
import MapEmbed from '../components/MapEmbed'

export default function Home() {
  return (
    <>
      <Head>
        <title>izigo intercity — thinkless go more</title>
        <meta name="description" content="izigo intercity — thinkless go more" />
      </Head>

      <header className="bg-white shadow">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src="/logo.svg" alt="izigo intercity" className="h-10" />
            <span className="font-bold text-xl">izigo intercity</span>
          </div>
          <nav className="space-x-6">
            <a href="#features" className="text-gray-700">Features</a>
            <a href="#pricing" className="text-gray-700">Pricing</a>
            <a href="#contact" className="text-gray-700">Contact</a>
            <Link href="#book"><a className="ml-4 bg-indigo-600 text-white px-4 py-2 rounded">Book now</a></Link>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-r from-indigo-50 to-white">
          <div className="container mx-auto px-6 py-20 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">thinkless. go more.</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">Intercity travel made effortless — book seats, manage travel and go more with izigo intercity.</p>
            <div className="flex justify-center gap-4">
              <a href="#book" className="bg-indigo-600 text-white px-6 py-3 rounded shadow">Get started</a>
              <a href="#pricing" className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded">See pricing</a>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="container mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-8">Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border rounded">
              <h3 className="font-semibold mb-2">Easy Booking</h3>
              <p className="text-sm text-gray-600">Fast seat selection and instant confirmation.</p>
            </div>
            <div className="p-6 border rounded">
              <h3 className="font-semibold mb-2">Secure Payments</h3>
              <p className="text-sm text-gray-600">Stripe-powered checkout for safe transactions.</p>
            </div>
            <div className="p-6 border rounded">
              <h3 className="font-semibold mb-2">Real-time Routes</h3>
              <p className="text-sm text-gray-600">Integrated Google Maps for route previews.</p>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="bg-gray-50 py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8">Pricing</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-white rounded shadow">
                <h3 className="text-xl font-semibold">Basic</h3>
                <p className="text-3xl font-bold my-4">$5 <span className="text-sm">per ride</span></p>
                <ul className="text-sm text-gray-600 mb-6">
                  <li>Standard seats</li>
                  <li>Free cancellation (24h)</li>
                </ul>
                <form action="/api/checkout_sessions" method="POST">
                  <input type="hidden" name="priceId" value="price_basic_placeholder" />
                  <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded">Buy Basic</button>
                </form>
              </div>

              <div className="p-6 bg-white rounded shadow">
                <h3 className="text-xl font-semibold">Comfort</h3>
                <p className="text-3xl font-bold my-4">$10 <span className="text-sm">per ride</span></p>
                <ul className="text-sm text-gray-600 mb-6">
                  <li>Recliner seats</li>
                  <li>Priority boarding</li>
                </ul>
                <form action="/api/checkout_sessions" method="POST">
                  <input type="hidden" name="priceId" value="price_comfort_placeholder" />
                  <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded">Buy Comfort</button>
                </form>
              </div>

              <div className="p-6 bg-white rounded shadow">
                <h3 className="text-xl font-semibold">Premium</h3>
                <p className="text-3xl font-bold my-4">$18 <span className="text-sm">per ride</span></p>
                <ul className="text-sm text-gray-600 mb-6">
                  <li>Premium seats</li>
                  <li>Meals included</li>
                </ul>
                <form action="/api/checkout_sessions" method="POST">
                  <input type="hidden" name="priceId" value="price_premium_placeholder" />
                  <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded">Buy Premium</button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map & Contact */}
        <section id="contact" className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Find our routes</h2>
            <MapEmbed />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Contact us</h2>
            <ContactForm />
          </div>
        </section>

      </main>

      <footer className="bg-white border-t py-6">
        <div className="container mx-auto px-6 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} izigo intercity — thinkless go more
        </div>
      </footer>
    </>
  )
}
