import { Elysia } from "elysia";

export const mahasiswaRoute = new Elysia({
    prefix: "/mahasiswa"
});

const mahasiswa = [
    {
        id: 1,
        nama: "andika",
        umur: 20,
        jurusan: "Teknik Informatika"
    }
];

// GET
mahasiswaRoute.get("/:id", ({ params }) => {
    const { id } = params;

    const mhs = mahasiswa.find(
        (m) => m.id === parseInt(id)
    );

    return mhs;
});

// POST
mahasiswaRoute.post("/:id", ({ params, body }) => {
    return {
        method: "POST",
        id: params.id,
        body
    };
});

// PUT
mahasiswaRoute.put("/:id", ({ params, body }) => {
    return {
        method: "PUT",
        id: params.id,
        body
    };
});

// PATCH
mahasiswaRoute.patch("/:id", ({ params, body }) => {
    return {
        method: "PATCH",
        id: params.id,
        body
    };
});

// DELETE
mahasiswaRoute.delete("/:id", ({ params }) => {
    return {
        method: "DELETE",
        id: params.id
    };
});

// CONNECT
mahasiswaRoute.route(
    "CONNECT",
    "/:id",
    ({ params }) => {
        return {
            method: "CONNECT",
            id: params.id
        };
    }
);