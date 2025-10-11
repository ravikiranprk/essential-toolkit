import connectToDB from "@/db/connectToDB";
import User from "@/models/userModel";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    try {
        const { email } = await params;
        
        await connectToDB();
        const user = await User.findOne({ email: email }); 
        return NextResponse.json(user, { status: 200 }); 
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Failed to fetch user." }, { status: 500 }); 
    }
}