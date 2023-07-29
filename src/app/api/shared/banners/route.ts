import { NextResponse } from "next/server";
import prisma from "../../../../../prisma/prisma";

export async function GET() {
    try {
        const res = await prisma.banner.findMany();

        return NextResponse.json(res)
    } catch (err) {
        return new Error("Can't fetch banners")
    } finally {
        prisma.$disconnect()
    }
}