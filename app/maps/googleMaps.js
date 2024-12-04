import { GoogleMapsEmbed } from '@next/third-parties/google'
 
export default function GoogleMaps() {
  return (
    <GoogleMapsEmbed
      apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_SECRET_KEY}
      height={200}
      width="100%"
      mode="place"
      q="Brooklyn+Bridge,New+York,NY"
    />
  )
}