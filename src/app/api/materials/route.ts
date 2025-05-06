import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const { email, title, type, url } = await request.json();

    if (!email || !title || !type || !url) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      );
    }

    // Buscar el usuario por email
    const user = await prisma.user.findUnique({
      where: { email },
      include: { access: true }
    });

    if (!user) {
      return NextResponse.json(
        { error: 'Usuario no encontrado' },
        { status: 404 }
      );
    }

    // Crear el material
    const material = await prisma.material.create({
      data: {
        title,
        type,
        url,
        accessId: user.access?.id || 0
      }
    });

    return NextResponse.json({ success: true, material });
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al agregar el material' },
      { status: 500 }
    );
  }
} 