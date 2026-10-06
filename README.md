# Implementasi HTTP Request Method via REST API

Project ini dibuat untuk memenuhi tugas implementasi HTTP Request Method menggunakan REST API dengan Elysia dan Bun.

## Deskripsi

Project ini merupakan REST API sederhana untuk data mahasiswa.

## HTTP Request Method

Project ini mengimplementasikan:

- GET
- POST
- PUT
- PATCH
- DELETE
- CONNECT

## Endpoint

### GET

GET /mahasiswa/:id

Digunakan untuk mengambil data mahasiswa berdasarkan ID.

### POST

POST /mahasiswa/:id

Digunakan untuk mengirim data mahasiswa.

### PUT

PUT /mahasiswa/:id

Digunakan untuk melakukan perubahan data.

### PATCH

PATCH /mahasiswa/:id

Digunakan untuk melakukan perubahan sebagian data.

### DELETE

DELETE /mahasiswa/:id

Digunakan untuk menghapus data mahasiswa.

### CONNECT

CONNECT /mahasiswa/:id

Digunakan untuk mengimplementasikan HTTP Request Method CONNECT.

## Teknologi

- Bun
- Elysia
- TypeScript

## Cara Menjalankan

Install dependency:

```bash
bun install