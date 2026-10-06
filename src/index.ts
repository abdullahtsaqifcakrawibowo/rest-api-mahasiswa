import { Elysia } from "elysia";
import { mahasiswaRoute } from "./routes/mahasiswa";

const app = new Elysia()
    .use(mahasiswaRoute)
    .get("/", () => {
        return {
            message: "REST API Mahasiswa berhasil berjalan"
        };
    })
    .listen(3000);

console.log(
    `🦊 Server berjalan di http://${app.server?.hostname}:${app.server?.port}`
);