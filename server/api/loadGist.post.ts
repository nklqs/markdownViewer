import {useContent} from "#build/imports";

export default defineEventHandler(async (event) => {
    try {
        const requestBody = await readBody(event)
        let res = ""
        res = await $fetch(`https://api.github.com/gists/${requestBody}`, {
        })
        console.log(`Received response: ${res}`)
        return res
    } catch (error) {
        return sendError(event, createError({statusCode: 500, message: "Something went wrong"}))
    }
})