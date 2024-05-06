import bcrypt from "bcrypt"
import { NextApiRequest, NextApiResponse} from "next"
import prismadb from "@/lib/prismadb"
import { NextResponse } from "next/server";

export default async function POST(req:Request ) {
    try {
       const payload = await req.json(); 

       const {name, email, password} = payload;
       
       const existingUser = await prismadb.user.findUnique({
        where:{
            email
        }
       })
       if(existingUser) {
        return NextResponse.json({
            error: "Email sudah terdaftar"
        })
           }
       
       const hashedPassword = await bcrypt.hash(password, 12)

       const user  = await prismadb.user.create({
            data: {
                email,
                name,
                hashedPassword,
                image: '',
                
            }
       })
    } catch (error) {
       console.log(error) 
    }
    
}