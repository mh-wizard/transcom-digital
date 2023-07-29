import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../../prisma/prisma";
export async function POST(request: NextRequest, { params }: { params: { id: string } }) {
    // const data = await request.json();
    // console.log("🚀 ~ file: route.ts:5 ~ POST ~ data:", data)
    try {
        // const user = await prisma.user.findUnique({
        //     where: { id: params.id },
        // });

        // if (!user) {
        //     throw new Error('User not found');
        // }

        // const address = await prisma.address.create({
        //     data: {
        //         User: { connect: { id: params.id } },
        //         district: data.district,
        //         division: data.division,
        //         emailAddress: data.emailAddress,
        //         firstName: data.firstName,
        //         flatNumber: data.flatNumber,
        //         lastName: data.lastName,
        //         houseNumber: data.houseNumber,
        //         label: data.label,
        //         landMark: data.landMark,
        //         postal: data.postal,
        //         roadNumber: data.roadNumber,
        //         thana: data.thana,
        //         addressType: data.addressType,
        //     },
        // });

        // return address;
    } catch (error) {
        throw new Error(`error adding address`);
    } finally {
        await prisma.$disconnect();
    }
}