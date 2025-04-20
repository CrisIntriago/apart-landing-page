import { NextResponse } from "next/server";
import { sendEmail } from "../awsClient";

export async function POST(request: any) {
  const { email, name } = await request.json();

  try {
    // URL del archivo dentro de la carpeta public
    const templateUrl = `${process.env.NEXT_PUBLIC_URL || 'http://localhost:3001'}/correoBienvenida.html`;

    // Fetch del archivo HTML
    const response = await fetch(templateUrl);
    if (!response.ok) {
      throw new Error("No se pudo cargar el template HTML");
    }

    let template = await response.text();

    // Reemplazar los placeholders con los valores reales
    template = template
      .replace(/{{name}}/g, name)
      .replace(/{{year}}/g, new Date().getFullYear().toString());

    const subject = 'Confirmación de tu pedido';

    // Enviar el correo
    const emailResponse = await sendEmail(
      [email, "cristianintriago03@gmail.com", "alejandropazbravo8844@gmail.com"],
      subject,
      template // HTML con los datos inyectados
    );

    console.log('Resultado de enviar correo:', emailResponse);

    return NextResponse.json({ emailStatus: emailResponse });

  } catch (error) {
    console.error("Error al procesar correo:", error);
    return NextResponse.json({ error: 'Failed to create order' }, { status: 500 });
  }
}
