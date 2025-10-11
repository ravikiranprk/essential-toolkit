import connectToDB from "@/db/connectToDB";
import User from "@/models/userModel";
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        await connectToDB();
        const users = await User.find();
        return NextResponse.json(users, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Failed to fetch users." }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        const data = await request.json();
        await connectToDB();
        const user = await User.create(data);
        return NextResponse.json(user, { status: 201 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Failed to create user." }, { status: 500 });
    }
}