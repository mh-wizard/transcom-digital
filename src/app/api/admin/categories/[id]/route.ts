import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../../prisma/prisma";

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
    try {
        const res = await prisma.category.delete({
            where: {
                id: params.id
            }
        })

        if (res) {
            return NextResponse.json(res)
        }
    } catch (err) {
        return new Error("Failed to delete category")
    } finally {
        await prisma.$disconnect()
    }
}