import { useState } from 'react'

export default function ContactForm() {
  const [success, setSuccess] = useState(false)

  return (
    <div>
      {success ? (
        <div className="p-4 bg-green-50 border border-green-200 rounded">Thank you — we'll get back to you soon.</div>
      ) : (
        <form action={process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || 'https://formspree.io/f/your-id'} method="POST" className="space-y-4">
          <div>
            <label className="block text-sm">Name</label>
            <input name="name" required className="w-full border p-2 rounded" />
          </div>
          <div>
            <label className="block text-sm">Email</label>
            <input name="email" type="email" required className="w-full border p-2 rounded" />
          </div>
          <div>
            <label className="block text-sm">Message</label>
            <textarea name="message" rows={4} className="w-full border p-2 rounded" />
          </div>
          <div>
            <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded">Send message</button>
          </div>
        </form>
      )}
    </div>
  )
}
