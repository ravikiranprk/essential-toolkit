import connectToDB from "@/db/connectToDB";
import User from "@/models/userModel";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    try {
        const { id } = await params;
        
        await connectToDB();
        const user = await User.findById(id); 
        return NextResponse.json(user, { status: 200 }); 
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Failed to fetch user." }, { status: 500 }); 
    }
}

export async function PUT(request, { params }) {
    try {
        const data = await request.json();
        const { id } = await params;
        const updated = await User.findByIdAndUpdate(id, data, { new: true });
        return NextResponse.json(updated, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Failed to update user." }, { status: 500 });
    }
}

export async function DELETE(request, { params }) {
    try {
        const { id } = await params;
        await connectToDB();
        const deleted = await User.findByIdAndDelete(id);
        return NextResponse.json(deleted, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Failed to delete user." }, { status: 500 });
    }
}