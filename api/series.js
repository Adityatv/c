export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://dillzy-movie.cricketstream745.workers.dev/hollywood/series?offset=0"
    )

    const data = await response.json()

    res.setHeader("Cache-Control", "s-maxage=86400")

    res.status(200).json(data)

  } catch (err) {
    res.status(500).json({ error: "API fetch failed" })
  }
}
