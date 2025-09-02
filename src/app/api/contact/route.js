export async function POST(req) {
  try {
    const body = await req.json();

    // Aquí puedes procesar el envío:
    // Guardar en DB, mandar email con nodemailer, etc.
    console.log("📩 Nuevo mensaje:", body);

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Error interno" }), { status: 500 });
  }
}
