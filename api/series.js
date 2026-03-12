export default async function handler(req, res) {
  try {
    const response = await fetch("https://dillzy-movie.cricketstream745.workers.dev/hollywood/series?offset=0");
    const data = await response.json();

    res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate");
    res.status(200).json(data);

  } catch (error) {
    res.status(500).json({ error: "Failed to fetch series data" });
  }
}