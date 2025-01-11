import User from "../models/user.model";

import { connectDB } from "../mongodb/mongoose";

export const createOrUpdateUser = async (
    id: string,
    first_name: string,
    last_name: string,
    username: string,
    email_addresses: string,
    image_url: string
) => {
    try {
        await connectDB();
        const user = await User.findOneAndUpdate(
            { clerkId: id },
            {
                $set: {
                    firstName: first_name,
                    lastName: last_name,
                    username: username,
                    email: email_addresses,
                    image: image_url
                }
            },{ new: true, upsert: true }
        );
            return user;
    } catch (error) {
        console.log("Error creating or updating user", error);
    }
}

export const deleteUser = async (id: string) => {
    try {
        await connectDB();
        await User.deleteOne({ clerkId: id });
    } catch (error) {
        console.log("Error deleting user", error);
    }
}