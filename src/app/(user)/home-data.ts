import prisma from "../../../prisma/prisma";
export const revalidate = 30;

export const getDeals = async () => {
    try {
        const products = await prisma.product.findMany({
            include: {
                brand: {
                    include: {
                        category: true
                    }
                }
            },
            orderBy: {
                price: "desc"
            }
        });

        return products;
    } catch (error) {
        throw new Error("Failed to fetch products");
    } finally {
        await prisma.$disconnect();
    }
};


export const getSelling = async () => {
    try {
        const products = await prisma.product.findMany({
            include: {
                brand: {
                    include: {
                        category: true
                    }
                }
            },
            orderBy: {
                popularity: "desc"
            }
        });

        return products;
    } catch (error) {
        throw new Error("Failed to fetch products");
    } finally {
        await prisma.$disconnect();
    }
};

export const getBrands = async () => {
    try {
        const brands = await prisma.brand.findMany({
            select: {
                img: true,
                name: true,
                id: true
            }
        });

        return brands;
    } catch (error) {
        throw new Error("Failed to fetch brands");
    } finally {
        await prisma.$disconnect();
    }
};

export const getCategories = async () => {
    try {
        const products = await prisma.category.findMany({
            select: {
                name: true,
                img: true,
            },
            orderBy: {
                popularity: "desc"
            }
        });

        return products
    } catch (error) {
        throw new Error("Failed to fetch categories");
    } finally {
        await prisma.$disconnect();
    }
};