import {Cloth1, Cloth10, Cloth11, Cloth12, Cloth13, Cloth14, Cloth15, Cloth16, Cloth17, Cloth18, Cloth2, Cloth3, Cloth4, Cloth5, Cloth6, Cloth7, Cloth8, Cloth9} from '../assets/img/index'

export const navbarLinks = [
    {
        name: "Home Page",
        href: "/"
    },
    {
        name: "Products",
        href: "/products"
    },
    {
        name: "Cart",
        href: "/carts"
    },
    {
        name: "Login",
        href: "/login"
    },
]

export const homePageProducts = [
    {
        productType: "Trending",
        allProducts: [
            {
                type: "trending",
                title: "",
                imgUrl: Cloth1,
                price: "8$",
                btnLabel: "+ Order"
            },
            {
                type: "trending",
                title: "",
                imgUrl: Cloth2,
                price: "5$",
                btnLabel: "+ Order"
            },
            {
                type: "trending",
                title: "",
                imgUrl: Cloth3,
                price: "6.5$",
                btnLabel: "+ Order"
            },
            {
                type: "trending",
                title: "",
                imgUrl: Cloth4,
                price: "12$",
                btnLabel: "+ Order"
            },
            {
                type: "trending",
                title: "",
                imgUrl: Cloth5,
                price: "10$",
                btnLabel: "+ Order"
            },
            {
                type: "trending",
                title: "",
                imgUrl: Cloth6,
                price: "8$",
                btnLabel: "+ Order"
            },
        ]
    },
    {
        productType: "New",
        allProducts: [
            {   
                type: "new",
                title: "New",
                imgUrl: Cloth7,
                status: "Available in Stock",
                size: "L",
                price: "7$",
                btnLabel: "+ Order"
            },
            {
                type: "new",
                title: "New",
                imgUrl: Cloth8,
                status: "Available in Stock",
                size: "XL",
                price: "11$",
                btnLabel: "+ Order"
            },
            {
                type: "new",
                title: "Hot",
                imgUrl: Cloth9,
                status: "Out of Stock",
                size: "L",
                price: "5$",
                btnLabel: "+ Order"
            },
            {
                type: "new",
                title: "Hot",
                imgUrl: Cloth10,
                status: "Available in Stock",
                size: "S",
                price: "15$",
                btnLabel: "+ Order"
            },
            {
                type: "new",
                title: "New",
                imgUrl: Cloth11,
                status: "Available in Stock",
                size: "L",
                price: "20$",
                btnLabel: "+ Order"
            },
            {
                type: "new",
                title: "New",
                imgUrl: Cloth12,
                status: "Out of Stock",
                size: "L",
                price: "18$",
                btnLabel: "+ Order"
            },
        ]
    },
    {
        productType: "Discount",
        allProducts: [
            {
                type: "discount",
                title: "30% off",
                imgUrl: Cloth13,
                price: "5.20$",
                btnLabel: "+ Order"
            },
            {
                type: "discount",
                title: "20% off",
                imgUrl: Cloth14,
                price: "4$",
                btnLabel: "+ Order"
            },
            {
                type: "discount",
                title: "40% off",
                imgUrl: Cloth15,
                price: "5$",
                btnLabel: "+ Order"
            },
            {
                type: "discount",
                title: "20% off",
                imgUrl: Cloth16,
                price: "6$",
                btnLabel: "+ Order"
            },
            {
                type: "discount",
                title: "60% off",
                imgUrl: Cloth17,
                price: "3$",
                btnLabel: "+ Order"
            },
            {
                type: "discount",
                title: "30% off",
                imgUrl: Cloth18,
                price: "2$",
                btnLabel: "+ Order"
            },
        ]
    },
]