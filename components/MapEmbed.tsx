export default function MapEmbed() {
  const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'YOUR_GOOGLE_MAPS_API_KEY'
  const src = `https://www.google.com/maps/embed/v1/place?key=${key}&q=New+Delhi,India`
  return (
    <div className="w-full h-72 border rounded overflow-hidden">
      <iframe
        src={src}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
      />
    </div>
  )
}
