import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../prisma/prisma";

export async function POST(request: NextRequest) {
    const { img } = await request.json();

    try {
        const res = await prisma.banner.create({
            data: {
                img: img
            }
        })

        if (res) {
            return NextResponse.json(res)
        }
    } catch (err) {
        return new Error("Something went wrong")
    } finally {
        await prisma.$disconnect()
    }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
    try {
        const res = await prisma.banner.delete({
            where: {
                id: params.id
            }
        })

        if (res) {
            return NextResponse.json(res)
        }
    } catch (err) {
        return new Error("Failed to delete banner")
    } finally {
        await prisma.$disconnect()
    }
}