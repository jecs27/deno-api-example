const env = Deno.env.toObject();
const PORT = parseInt(env.PORT) || 3000;

export {
    PORT
}