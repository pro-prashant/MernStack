
import { Webhook } from "svix"
import UserModel from "../Models/UserModel.js"
// API Controller Function to Manage Clerk User With Database
// http://localhost:8000/api/user/webhooks

const clerkWebhooks = async (req, res) => {

    try {

        // Create a Svix instance with clerk webhook secret.
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET)

        // Verifying Headers
        await whook.verify(JSON.stringify(req.body), {
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"],
        })

        // Getting Data from request body
        const { data, type } = req.body

        // Switch Cases for differernt Events
        switch (type) {
            case 'user.created': {
                const userData = {
                    clerkId: data.id,
                    email: data.email_addresses[0].email_address,
                    firstName: data.first_name,
                    lastName: data.last_name,
                    photo: data.image_url,
                }
                await UserModel.create(userData)
                res.json({})
                break;
            }

            case 'user.updated': {
                const userData = {
                    email: data.email_addresses[0].email_address,
                    firstName: data.first_name,
                    lastName: data.last_name,
                    photo: data.image_url,
                }
                await UserModel.findOneAndUpdate({ clerkId: data.id }, userData)
                res.json({})
                break;
            }

            case 'user.deleted': {
                await UserModel.findOneAndDelete({ clerkId: data.id })
                res.json({})
                break;
            }

            default:
                break;
        }

    } catch (error) {
        console.log(error.message)
        res.json({ success: false, message: error.message })
    }

}

export {clerkWebhooks};

