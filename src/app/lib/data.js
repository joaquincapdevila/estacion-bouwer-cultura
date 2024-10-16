export async function fetchRevenue() {
  // Add noStore() here prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).

  try {
    // Artificially delay a response for demo purposes.
    // Don't do this in production :)

    // console.log('Fetching revenue data...');
    // await new Promise((resolve) => setTimeout(resolve, 3000));

    const data = (await sql) < Revenue > `SELECT * FROM revenue`;

    // console.log('Data fetch completed after 3 seconds.');

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch revenue data.");
  }
}
// api/museos.js (dentro de tu proyecto Next.js)

export async function fetchMuseo() {
  try {
    const response = await fetch("*********************");
    if (!response.ok) {
      throw new Error("Error al obtener los datos del API");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener los datos:", error);
    return null;
  }
}
